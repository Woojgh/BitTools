'use strict';

$('#hamburger').on('click', function() {
  $('#nav-bar').width('100%');
});

$('#hamburgerClose').on('click', function() {
  $('#nav-bar').width('0%');
});
