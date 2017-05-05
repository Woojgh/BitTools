'use strict';

// $(document).ready(function() {
//   $('#instructions').hide();
// });
$('#instructionsNav').on('click', function() {
  $('#instructions').show().siblings().hide();
});
