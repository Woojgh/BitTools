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
      oneChoice.value = toRender[a].goal >= 100 ? (toRender[a].baseVal / toRender[a].goal * 100) : toRender[a].baseVal;
      $('#show-choices').append(renderHeader(oneChoice));
    }
  });
}

// set up Cheer listeners
  // on Cheer, update the database
  // then draw the page again
