
//canvas setup
const canvas = document.querySelector(".gameCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

//Card Class
//Card Class

class Card{
    constructor(fronturl, backurl, cardtype) {
        //declare variables
        this.front = fronturl;
        this.back = backurl;
        this.flipped = true;
        //true = back of card
        this.backimage = new WebImage(this.back);
        add(this.backimage);
        this.frontimage = new WebImage(this.front);
        this.cardtype = cardtype;
    }
    //functions (setsize, setposition, flip, change front?, swap card?)
    setSize(x,y){
        this.backimage.setSize(x,y);
        this.frontimage.setSize(x,y);
    }
    
    setPosition(x,y){
        this.backimage.setPosition(x,y);
        this.frontimage.setPosition(x,y);
    }
    
    flip(){
        if(this.flipped){
            this.flipped = false;
            remove(this.backimage);
            add(this.frontimage);
        } else {
            this.flipped = true;
            remove(this.frontimage);
            add(this.backimage);
        }
    }
}
//example
/*let testcard = new Card("https://static.codehs.com/img/library/characters/leopard.jpg","https://static.codehs.com/img/library/characters/chameleon.jpg", "testcard");
testcard.setPosition(0,0);
testcard.setSize(100,200);
*/


// Shuffle
var cardSlots = [1,2,3,4,5,6,7,8,9,10];
var cardTypeList = ["death", "coin", "stop", "draw", "swap", "coin", "stop", "draw", "swap", "coin"];
var cardType = 0;
var index;
for (let i=0; i<10; i++) {
    cardType = Randomizer.nextInt(0, cardTypeList.length - 1)
    cardSlots[i] = cardTypeList[cardType];
    cardTypeList = removeItemOnce(cardTypeList, cardTypeList[cardType]);
}
// Removes one item from the card pool
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
console.log(cardSlots.slice(0, 4));
console.log(cardSlots.slice(4, 6));
console.log(cardSlots.slice(6, 10));
var grid = [1,2,3,4,11,5,6,12,7,8,9,10];
//Add boxes and text
for (let i=0; i<4; i++){
    for(let a=0; a<3; a++){
        var spotNow = grid[i];
        //boxes
        var box = new Rectangle(getWidth()/4 - 10, getHeight()/3 - 10);
        box.setPosition(getWidth()/4*i,getHeight()/3*a);
        box.setColor("blue");
        add(box);
        if(a==1){
            if(i==0){
                remove(box);
            }else if(i==3){
                remove(box);
            }
        }
        //texts
        var cardText = new Text("temp", "30pt Arial");
        cardText.setText(cardSlots[spotNow-1]);
        cardText.setPosition(getWidth()/4*i,getHeight()/3*a+100);
        add(cardText);
        if(a==1){
            if(i==0){
                remove(cardText);
            }else if(i==3){
                remove(cardText);
            }
        }
        
    }
}
// Makes the element where the mouse is turn red (can't undo yet)
mouseClickMethod(click);
var elem = 0
function click(e){
    var elem = getElementAt(e.getX(), e.getY());
    if (elem != null) {
        if (elem.constructor == Rectangle){
            if(elem.color == "blue"){
                turnRed();
            }
            if(elem.color == "red"){
                turnBlue();
            }
        }
    }
}
function turnRed(e){
    if (elem != null) {
        if (elem.constructor == Rectangle){
            if(elem.color == "blue"){
                elem.setColor("red")
            }
            mouseClickMethod(click);
        }
    }
}
function turnBlue(e){
    if (elem != null) {
        if (elem.constructor == Rectangle){
            elem.setColor("blue");
            mouseClickMethod(turnRed);
        }
    }
}
