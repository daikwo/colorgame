var colors = generateRandomColor();
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var pickColor = document.querySelector('.pick_color');
var message = document.querySelector('.message')

pickColor.textContent = pickedColor
for(var i = 0; i<colors.length; i++){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click' , function(){
        var clickColor = this.style.backgroundColor;
        if(clickColor === pickedColor){
            message.textContent ='correct'
            changeColor(clickColor)
        }else{
            this.style.backgroundColor = 'transparent'
            message.textContent ='try again'
        }
    })  
} 
function pickColor(){
    var randomNumber = Math.floor(Math.random()*5+1);
    return colors[randomNumber]

}  
/*to make all the colors change to the winning color*/
function changeColor(color){
    for(var i=0; i<colors.length; i++){
        squares[i].style.backgroundColor = color
    }
}
function generateRandomColor(){
    var arr = []
    for(var i=0 ; i<6 ; i++){
        arr.push(randomColor())
    }
    return arr
}
function randomColor(){
    var r = Math.floor(Math.random() *256)
    var g = Math.floor(Math.random() *256)
    var b = Math.floor(Math.random() *256)

    return "rgb(" + r + ", " + g + ", " + b + ")"
}

