'use strict';

function insertChoice(paramName, paramWidgetText, paramTextColor, paramFillColor, paramGoal, paramChoiceText, paramChoiceColor, paramValue, paramFont) {
  var theChoice = {
    username:paramName,
    widgetText:paramWidgetText,
    textColor:paramTextColor,
    fillColor:paramFillColor,
    goal:paramGoal,
    choiceText:paramChoiceText,
    choiceColor:paramChoiceColor,
    value:paramValue,
    googleFont:paramFont
  }
  $.post('/choices', theChoice);
}

function deleteChoices(callback) {
  $.ajax({
    url: `/choices/${userInfo.currentUser}`,
    method: 'DELETE'
  }).then(callback());
}

// function getPageInfo() {
//   return $.get(`/choices/${userInfo.currentUser}`);
// }
// Article.prototype.insertRecord = function(callback) {
//   $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
//   .then(console.log)
//   .then(callback);
// };
