$(document).ready(readyNow);

function readyNow() {
    //click listeners
    console.log('jquery is working');
    $('#plus-button').on('click', plusFunction);
    $('#minus-button').on('click', minusFunction);
    $('#multiply-button').on('click', multiplyFunction);
    $('#divide-button').on('click', divideFunction);
    $('#equals-button').on('click', equalsFunction);
    //$('#clear-button').on('click', clearFunction);

}; // end readyNow

let symbol;
//------- Assign the operator ----------
function plusFunction(){
    symbol= '+';
};
function minusFunction() {
    symbol= '-';
};
function multiplyFunction() {
    symbol= '*';
};
function divideFunction() {
    symbol= '/';
};
//------- End operator assignment ----------


//------------- Posts to server---------------
function equalsFunction() {
    // use AJAX to make a POST request to server
    $.ajax({
        method: 'POST', // type of request
        url: '/calculator-inputs', // route we will match on
        data: { // must be an object
            mathProblem : {
                valueOne: $('#number1').val(),
                valueTwo: $('#number2').val(),
                operator: symbol
            }
            
        }
    }).then(function(response) {
        console.log('Client received confirmation from server');
        // Code in here gets run when this gets a response from the server

    }).catch(function(response) {
        console.log('Client has\'nt heard back from the server');
        //code in here gets run if client doesn't get a response
    })
}
//-------------- End posts to server-------------
// --------------Gets from server----------------
function name(params) {
    

$.ajax({
    method: 'GET',
    url: '/quotes'
  }).then(function(response) {
    console.log('Great success!', response);
    // TODO append quotes to DOM
    renderToDom(response);
  }).catch(function(response) {
    console.log('OPE no luck', response);
  })
}

// Function to post
//     //ajax request
//         //If it got a response
//             // Trigger a function that sends a get request
//         //if it didn't

// function to GET 
//     //ajax request