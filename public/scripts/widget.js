'use strict';

function insertChoice(paramName, paramWidgetText, paramTextColor, paramFillColor, paramGoal, paramChoiceText, paramChoiceColor, paramValue) {
  var theChoice = {
    username:paramName,
    widgetText:paramWidgetText,
    textColor:paramTextColor,
    fillColor:paramFillColor,
    goal:paramGoal,
    choiceText:paramChoiceText,
    choiceColor:paramChoiceColor,
    value:paramValue
  }
  console.log(theChoice);
  console.log(JSON.stringify(theChoice));
  $.post('/choices', theChoice);
}

function deleteChoices() {
  $.ajax({
    url: `/choices/${userInfo.currentUser}`,
    method: 'DELETE'
  })
}

// function getPageInfo() {
//   return $.get(`/choices/${userInfo.currentUser}`);
// }
// Article.prototype.insertRecord = function(callback) {
//   $.post('/articles', {author: this.author, authorUrl: this.authorUrl, body: this.body, category: this.category, publishedOn: this.publishedOn, title: this.title})
//   .then(console.log)
//   .then(callback);
// };
