'use strict';

function modInputs(numChoices, allChoices) {
  var result = $('.choice-wrapper');
  var renderFunc = Handlebars.compile($('#choice-template').html());
  if (numChoices > result.length) {
    var toAdd = numChoices - result.length;
    for (var a = 0; a < toAdd; a++) {
      if (!allChoices) {
        var choiceToAdd = renderFunc({choiceText: '#choice', choiceColor: '#666666', baseVal: 0});
        $('#choice-result').append(choiceToAdd);
      }
      else {
        var choiceToAdd = renderFunc({choiceText: allChoices[a].choice_text, choiceColor: allChoices[a].choice_color, baseVal: allChoices[a].value});
        $('#choice-result').append(choiceToAdd);
      }
    }
  } else if (numChoices < result.length) {
    var toRemove = result.length - numChoices;
    for (var a = 1; a <= toRemove; a++) {
      result.eq(result.length - a).remove();
    }
  }
}

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
var userChoices;

function renderWidget() {
  $.get(`/choices/${userInfo.currentUser}`, function (data) {
    userChoices = data;
    var renderFunc = Handlebars.compile($('#form-template').html());
    console.log(userChoices);
    if (userChoices.length === 0) {
      var theForm = renderFunc({widgetText: '', textColor: '#000000', goal: 100, fillColor: '#666666'});
      $('#widget-form').prepend(theForm);
      modInputs(2, null);
      $('#poll-choices').val(2);
    } else {
      var theForm = renderFunc({widgetText: userChoices[0].widget_text, textColor: userChoices[0].text_color, goal: userChoices[0].goal, fillColor: userChoices[0].fill_color});
      $('#widget-form').prepend(theForm);
      modInputs(userChoices.length, userChoices);
      $('#poll-choices').val(userChoices.length);
    }
  });
};

// Save or update the database by deleting all the choices first, and then adding the new ones
$('#save-button').click(function(e) {
  e.preventDefault();
  console.log('You clicked SAVE');
  deleteChoices(insertRows);
  // $.ajax({
  //   url: `/choices/${userInfo.currentUser}`,
  //   method: 'DELETE'
  // }).then(function() {
  //   var widgetText = $('#widget-title').val();
  //   var textColor = $('#widget-color').val();
  //   var fillColor = $('#fill-color').val();
  //   var goal = $('#goal').val();
  //   var totalChoices = $('.choice-wrapper');
  //
  //   for (var a = 0; a < totalChoices.length; a++) {
  //     var thisChoice = totalChoices.eq(a).find('.choice-input').val();
  //     var thisColor = totalChoices.eq(a).find('.choice-color').val();
  //     var thisVal = totalChoices.eq(a).find('.base-value').val();
  //     insertChoice(userInfo.currentUser, widgetText, textColor, fillColor, goal, thisChoice, thisColor, thisVal);
  //   }
  // });
});

function insertRows() {
  var widgetText = $('#widget-title').val();
  var textColor = $('#widget-color').val();
  var fillColor = $('#fill-color').val();
  var goal = $('#goal').val();
  var totalChoices = $('.choice-wrapper');

  for (var a = 0; a < totalChoices.length; a++) {
    var thisChoice = totalChoices.eq(a).find('.choice-input').val();
    var thisColor = totalChoices.eq(a).find('.choice-color').val();
    var thisVal = totalChoices.eq(a).find('.base-value').val();
    insertChoice(userInfo.currentUser, widgetText, textColor, fillColor, goal, thisChoice, thisColor, thisVal);
  }
}

// Clear button: Clear all fields, and delete the choices from the database
// $('#clear-button').click(function() {
//   deleteChoices();
//   modInputs(0, null);
//   modInputs(2, null);
// });
