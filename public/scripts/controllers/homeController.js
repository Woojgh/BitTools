'use strict';

$('#home').on('click', function() {
  $('#widgets').show().siblings().hide();
  checkLogin();
});
