'use strict';

var toRender;

function drawUserPage() {
  $.get(`/choices/${dynamicUser}`, function (data) {
    toRender = data;
    console.log(toRender);
    var renderHeader = Handlebars.compile($('#widget-text-template').html());
    var renderChoice = Handlebars.compile($('#user-template').html());
    var theForm = renderHeader({widgetText: toRender[0].widget_text, textColor: toRender[0].text_color});
    $('body').prepend(theForm);

    for (var a = 0; a < toRender.length; a++) {
      var oneChoice = {};
      oneChoice.fillColor = toRender[a].fill_color;
      oneChoice.textColor = toRender[a].text_color;
      oneChoice.choiceColor = toRender[a].choice_color;
      oneChoice.choiceText = toRender[a].choice_text;
      oneChoice.value = parseInt(toRender[a].goal) >= 100 ? (parseInt(toRender[a].baseVal) / parseInt(toRender[a].goal) * 100) : parseInt(toRender[a].baseVal);
      debugger;
      $('#show-choices').append(renderChoice(oneChoice));
    }
  });
}

// set up Cheer listeners
  // on Cheer, update the database
  // then draw the page again
