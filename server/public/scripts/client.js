$(document).ready(onReady);


let operator;
function onReady() {
   $('#add-btn').on('click', add) 
   $('#minus-btn').on('click', subtract)
   $('#multiply-btn').on('click', multiply)
   $('#divide-btn').on('click', divide)
   console.log('ready') 
    
    
   
}
// When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST.
function calculate(){
    console.log('its working')
    let userInput = {
        firstNum: Number($('#first-input').val()),
        secondNum: Number($('#second-input').val()),
        operator: operator,
    }
    $.ajax ({
        method: 'POST',
        url:  '/numbers',
        data: userInput,
    }).then(function(response) {
        console.log('this is the respoonse', response)
        getNumber();
        
    } 

)}

function getNumber(){
 
    $.ajax({
        method: 'GET',
        url: '/numbers',
    
      }).then(function(response){
        console.log('This is the response from the server for /numbers',response);
        
      }).catch(function(response){
        console.log(response);
      })
}
    
   










// Addition function
function add(){
let operatorAdd = '+';
operator = operatorAdd;
}

function subtract(){
    let operatorMinus = '-';
    operator = operatorMinus;
    }

function multiply(){
    let operatorMultiply = '+';
    operator = operatorMultiply;
     }

     function divide(){
        let operatorMultiply = '/';
        operator = operatorMultiply;
         }


function appendToDom(){
    $('#operations-list').empyty(
        $('#operations-list').append('${answer}')
    )
}