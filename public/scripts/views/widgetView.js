'use strict';

function modInputs(numChoices) {
  var result = $('#choice-result');
  if (numChoices > result.length) {
    var toAdd = numChoices - result.length;
    for (var a = 0; a < toAdd; a++) {

    }
  } elseif (numChoices < result.length) {
    var toRemove = result.length - numChoices;
    for (var a = 1; a <= toRemove; a++) {
      result.eq(result.length - a).remove();
    }
  }
  // result.innerHTML = '';
  // for (var i = 0; i < parseInt(numChoices); i++) {
  //   var wrapper = document.createElement('div');
  //   wrapper.innerHTML = '<input class="choice-input" type="text" placeholder="#choice' + i + '" required/> <input class="choice-color" value="#00FF00" type="color"> <input class="base-value" type="number" required/>';
  //   result.appendChild(wrapper);
  // }
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
  modInputs(this.value);
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
function renderWidget() {
  var userChoices = $.get(`/choices/${userInfo.currentUser}`);
  // If no rows are returned, then just draw a blank form
  if (userChoices) {

  } else {  // If there are rows, then draw those rows to the page first

  }
};

// Save or update the database by deleting all the choices first, and then adding the new ones
$('#save-button').click(function() {
  deleteChoices();
  var widgetText = $('#widget-title').val();
  var textColor = $('#widget-color').val();
  var fillColor = $('#fill-color').val();
  var goal = $('#goal').val();
  var choicesText = $('.choice-input');
  var choicesColor = $('.choice-color');
  var choicesVal = $('.base-value');

  for (let a = 0; a < choicesText.length; a++) {
    var thisChoice = choicesText.eq(a);
    var thisColor = choicesColor.eq(a);
    var thisVal = choicesVal.eq(a);
    insertChoice(userInfo.currentUser, widgetText, textColor, fillColor, goal, thisChoice, thisColor, thisVal);
  }
});

// Clear button: Clear all fields, and delete the choices from the database
$('#clear-button').click(function() {
  deleteChoices();
  modInputs(0);
  modInputs(2);
});
