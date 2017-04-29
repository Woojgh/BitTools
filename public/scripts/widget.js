'use strict';
function addInputs(choices) {
  var result = document.querySelector('#choice-result');
  result.innerHTML = '';
  for (var i = 0; i < parseInt(choices.value); i++) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<input type="text" placeholder="choice ' + i + '" /> <input class="fill-color" type="color" name="barfillcolor">';
    result.appendChild(wrapper);
  }
}
$('#poll-choices').on('change', function () {
	addInputs(this);
});
$('#fillcheckbox').on('click', function () {
	$('.fill-color').toggle();
});
$('#test-button').on('click', function (){
	$('.widget-display').toggle();
});