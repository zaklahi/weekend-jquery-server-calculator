

$(document).ready(onReady);



function onReady() {
    getNumber();
    $('#equal-btn').on('click', calculate)
    $('.operator').on('click', handleOperator)
    appendToDom;
    $('#clear-btn').on('click',clearInputs )
    //console.log('ready') 
}


let operator;
function handleOperator() {
    operator = $(this).text();
    console.log(operator);


}
// When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST.
function calculate() {
    console.log('its working')

        let firstNum = Number($('#first-input').val())
        let  secondNum = Number($('#second-input').val())
       

        $.ajax({
            method: 'POST',
            url: '/numbers',
            data: {
                firstNum: firstNum,
                secondNum: secondNum,
                operator: operator

            }
        }).then(function (response) {
            console.log('this is the respoonse', response)
            getNumber();
            console.log(response)
        }

        )
}

function getNumber() {

    $.ajax({
        method: 'GET',
        url: '/numbers',

    }).then(function (response) {
        console.log('This is the response from the server for /numbers', response);

    }).catch(function (response) {
        console.log(response);
        appendToDom(response)
    })
}



function appendToDom(array) {
    console.log(array);
    $('#history').empty();
    for (let calc of array) {
        $('#history').append(` 
        <li> "${calc.firstNum}" "${calc.secondNum}" = ${calc.answer}</li>

        `)

    }

}


function clearInputs(){
    console.log('clear');
    $('#first-input').val('');
    $('#second-input').val('');
}



// Addition function
// function add(){
// let operatorAdd = '+';
// operator = operatorAdd;
// }

// function subtract(){
//     let operatorMinus = '-';
//     operator = operatorMinus;
//     }

// function multiply(){
//     let operatorMultiply = '+';
//     operator = operatorMultiply;
//      }

//      function divide(){
//         let operatorMultiply = '/';
//         operator = operatorMultiply;
//          }


// function appendToDom(array){
//     $('#operations-list').empyty();
//        //$('#operations-list').append
//     for(let userInput of array){
//        // $('#operations-list').empyty()
//     $('#operations-list').append(`
//     `)
//     }

// }