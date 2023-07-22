var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        var num = parseInt(value);
        if(num >= 0 && num <= 9){
            display.innerText += value;
        }
        else if(value == "="){
            operand2 = parseFloat(display.textContent);
            // var result = eval(operand1 +" "+ operator +" "+ operand2);
            var result = eval(operand1 + operator + operand2);
            display.innerText = result;
        }
        else  if(value == 'AC'){
            display.innerText = '';
        }
        else {  //if(value == "+","-")
            operand1 = parseFloat(display.textContent);
            operator = value;
            display.innerText = '';
        }
    });
}