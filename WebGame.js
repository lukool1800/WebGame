
//canvas setup
const canvas = document.querySelector(".gameCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


//Shuffle fuction
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


//Graphic creation
var grid = [1,2,3,4,11,5,6,12,7,8,9,10];
for (let i=0; i<4; i++){
    for(let a=0; a<3; a++){
        var spotNow = grid[i];
        //boxes
        var box = new Rectangle(getWidth()/4 - 10, getHeight()/3 - 10);
        box.setPosition(getWidth()/4*i,getHeight()/3*a);
        box.setColor("blue");
        if(a==1){
            if(i==0){
                box.setColor("white");
            }else if(i==3){
                box.setColor("white");
            }
        }
        add(box);
        //texts
        var text = new Text("temp", "30pt Arial");
        text.setText(cardSlots[spotNow-1]);
        text.setPosition(getWidth()/4*i,getHeight()/3*a+100);
        if(a==1){
            if(i==0){
                text.setColor("white");
            }else if(i==3){
                text.setColor("white");
            }
        }
        add(text);
    }
}

//Turn red
mouseMoveMethod(turnRed);
function turnRed(e){
    var elem = getElementAt(e.getX(), e.getY());
    var mouseX = e.getX();
    var mouseY = e.getY();
    if (elem != null) {
        elem.setColor("red");
    }
}
