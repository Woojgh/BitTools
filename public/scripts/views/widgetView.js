'use strict';

function renderWidget() {
  console.log('You got here!');
};

function addInputs(numChoices) {
  var result = $('#choice-result');
  result.innerHTML = '';
  for (var i = 0; i < parseInt(numChoices); i++) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<input class="choice-input" type="text" placeholder="#choice' + i + '" required/> <input class="choice-color" value="#00FF00" type="color"> <input class="base-value" type="number" required/>';
    result.appendChild(wrapper);
  }
};

// function addPreview(choices) {
//   var result = document.querySelector('#container');
//   result.innerHTML = ' ';
//   for (var i = 0; i < parseInt(choices.value); i++) {
//     var wrapper = document.createElement('div');
//     wrapper.innerHTML = '<span>0</span> <a id="a' + i + '" href="#">Vote</a>';
//     result.appendChild(wrapper);
//   }
// };

$('#poll-choices').on('change', function () {
  addInputs(this.value);
  // addPreview(this);
});

// $('#fillcheckboxall').on('click', function () {
//   $('.fill-color').toggle();
// });

// $('#test-button').on('click', function (e){
//   e.preventDefault();
//   $('#widget-display').toggle();
// });

// Check to see if there are existing choices in the database, and draw the page appropriately if so

// Save or update the database by deleting all the choices first, and then adding the new ones
$('#save-button').click(function() {
  deleteChoices();
  let widgetText = $('#widget-title').val();
  let textColor = $('#widget-color').val();
  let fillColor = $('#fill-color').val();
  let goal = $('#goal').val();
  let choicesText = $('.choice-input');
  let choicesColor = $('.choice-color');
  let choicesVal = $('.base-value');

  for (let a = 0; a < choicesText.length; a++) {
    let thisChoice = choicesText.eq(a);
    let thisColor = choicesColor.eq(a);
    let thisVal = choicesVal.eq(a);
    insertChoice(currentUser, widgetText, textColor, fillColor, goal, thisChoice, thisColor, thisVal);
  }
});

// Clear button: Clear all fields, and delete the choices from the database
