'use strict';

function drawUserPage() {
  // GET all info for the userInfo
  console.log(dynamicUser);
  $.get(`/choices/${dynamicUser}`, function (data) {
    var toRender = data;
    console.log(toRender);
    var renderFunc = Handlebars.compile($('#widget-text-template').html());
    var theForm = renderFunc({widgetText: toRender[0].widget_text});
    $('body').prepend(theForm);
    // if (userChoices.length === 0) {
    //   var theForm = renderFunc({widgetText: '', textColor: '#000000', goal: 100, fillColor: '#666666'});
    //   $('#widget-form').prepend(theForm);
    //   modInputs(2, null);
    //   $('#poll-choices').val(2);
    // } else {
    //   var theForm = renderFunc({widgetText: userChoices[0].widget_text, textColor: userChoices[0].text_color, goal: userChoices[0].goal, fillColor: userChoices[0].fill_color});
    //   $('#widget-form').prepend(theForm);
    //   modInputs(userChoices.length, userChoices);
    //   $('#poll-choices').val(userChoices.length);
    // }
  });
}

// set up Cheer listeners
  // on Cheer, update the database
  // then draw the page again
