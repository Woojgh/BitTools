'use strict';

function insertChoice(paramName, paramWidgetText, paramTextColor, paramFillColor, paramGoal, paramChoiceText, paramChoiceColor, paramValue) {
  $.post('/choices', {name:paramName, widgetText:paramWidgetText, textColor:paramTextColor, fillColor:paramFillColor, goal:paramGoal, choiceText:paramChoiceText, choiceColor:paramChoiceColor, value:paramValue});
}

function deleteChoices() {
  $.ajax({
    url: `/choices/${userInfo.currentUser}`,
    method: 'DELETE'
  })
}

function getPageInfo() {
  return $.get(`/choices/${userInfo.currentUser}`);
}
