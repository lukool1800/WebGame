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
mouseClickMethod(turnRed);
var numberRed = 0
var elem = 0
var greaterThanRed = 0
function turnRed(e){
    elem = getElementAt(e.getX(), e.getY());
    if (elem != null) {
        if (elem.construct == Rectangle){
            if (elem.color == "blue"){
                elem.setColor("red");
                numberRed += 1;
                greaterThanRed = checkRedNumber(numberRed);
            }
            if (elem.color == "red"){
                elem.setColor("blue");
                numberRed += 1;
                greaterThanRed = checkRedNumber(numberRed);
            }
            if(greaterThanRed = true){
                turnBlue();
            }
        }
        
    }
console.log(numberRed);
}
function checkRedNumber(numberRed){
    if (numberRed >= 3){
        return(true);
    }
}
function turnBlue(){
    if (greaterThanRed = true) {
        elem.setColor("blue");
        numberRed -= 1;
    }
}
