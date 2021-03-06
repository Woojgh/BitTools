'use strict';

function modInputs(numChoices, allChoices) {
  var result = $('.choice-wrapper');
  var renderFunc = Handlebars.compile($('#choice-template').html());
  if (numChoices > result.length) {
    var toAdd = numChoices - result.length;
    for (var a = 0; a < toAdd; a++) {
      if (!allChoices) {
        var choiceToAdd = renderFunc({choiceText: '#choice', choiceColor: '#ffffff', baseVal: 0});
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


$('#poll-choices').on('change', function () {
  modInputs(this.value);
});

$('#test-button').on('click', function (e){
  e.preventDefault();
  window.open(`https://bittoolscod301.herokuapp.com/user=${userInfo.currentUser}`,'pagename','resizable,height=400,width=260,screenX=1000,left=700,screenY=1000,top=350');
  return false;
});

var userChoices;

function renderWidget() {
  $.get(`/choices/${userInfo.currentUser}`, function (data) {
    userChoices = data;
    var renderFunc = Handlebars.compile($('#form-template').html());
    console.log(userChoices);
    if (userChoices.length === 0) {
      var theForm = renderFunc({widgetText: '', textColor: '#000000', fillColor: '#666666', googleFont: 'Baloo'});
      $('#widget-form').prepend(theForm);
      modInputs(2, null);
      $('#poll-choices').val(2);
      // $('#goal').val(500);
    } else {
      var theForm = renderFunc({widgetText: userChoices[0].widget_text, textColor: userChoices[0].text_color, goal: 500, fillColor: userChoices[0].fill_color, googleFont: userChoices[0].google_font});
      $('#widget-form').prepend(theForm);
      modInputs(userChoices.length, userChoices);
      $('#poll-choices').val(userChoices.length);
    }
    $('#browser-source').val(`https://bittoolscod301.herokuapp.com/user=${userInfo.currentUser}`);
  });
};

$('#save-all').click(function(e) {
  e.preventDefault();
  console.log('You clicked SAVE');
  deleteChoices(insertRows);
});

function insertRows() {
  var widgetText = $('#widget-title').val();
  var textColor = $('#widget-color').val();
  var fillColor = $('#fill-color').val();
  var goal = '500';
  var totalChoices = $('.choice-wrapper');
  var userFont = $('#google-font').val();

  for (var a = 0; a < totalChoices.length; a++) {
    var thisChoice = totalChoices.eq(a).find('.choice-input').val();
    var thisColor = totalChoices.eq(a).find('.choice-color').val();
    var thisVal = totalChoices.eq(a).find('.base-value').val();
    insertChoice(userInfo.currentUser, widgetText, textColor, fillColor, goal, thisChoice, thisColor, thisVal, userFont);
  }
}

$('#logout').click(function(e) {
  e.preventDefault();
  localStorage.clear();
  checkLogin();
});

$('#clear-all').click(function(e) {
  e.preventDefault();
  $('#widget-title').val('');
  $('#widget-color').val('#000000');
  $('#fill-color').val('#666666');
  // $('#goal').val(500);
  $('#google-font').val('Baloo');
  var totalChoices = $('.choice-wrapper');

  for (var a = 0; a < totalChoices.length; a++) {
    totalChoices.eq(a).find('.choice-input').val('');
    totalChoices.eq(a).find('.choice-color').val('#ffffff');
    totalChoices.eq(a).find('.base-value').val(0);
  }
});

$('#hamburger').on('click', function() {
  $('.overlay').toggle();
});
