'use strict';
function addInputs(choices) {
  var result = document.querySelector('#choice-result');
  result.innerHTML = '';
  for (var i = 0; i < parseInt(choices.value); i++) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = '<input class="fillcheckbox" type="checkbox"> <input class="choice-input" type="text"  style="margin:1vw; color:colorValue;" placeholder="choice' + i + '" /> <input class="fill-color" value="#00FFFF" type="color" name="barfillcolor' + i + '">';
    result.appendChild(wrapper);
  }
};

function addPreview(choices) {
  var result = document.querySelector('#container');
  result.innerHTML = ' ';
  for (var i = 0; i < parseInt(choices.value); i++) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = '<span>0</span> <a id="a' + i + '" href="#">Vote</a>';
    result.appendChild(wrapper);
  }
};


$('#poll-choices').on('change', function () {
  addInputs(this);
  addPreview(this);
});
$('#fillcheckboxall').on('click', function () {
  $('.fill-color').toggle();
});
$('#test-button').on('click', function (e){
  e.preventDefault();
  $('#widget-display').toggle();
}); 

var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector(".fill-color");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

// $('#raidenbutton').on('click', function(event) {
//   event.preventDefault();
//   $('.raiden').hide();
// });


$(function(){
  $(".increment").click(function(){
    var count = parseInt($("~ .count", this).text());
    
    if($(this).hasClass("up")) {
      var count = count + 1;
      
       $("~ .count", this).text(count);
    } else {
      var count = count - 1;
       $("~ .count", this).text(count);     
    }
    
    $(this).parent().addClass("bump");
    
    setTimeout(function(){
      $(this).parent().removeClass("bump");    
    }, 400);
  });
});

$(document).ready(function() {
    $("#choice-result div a").click(function() {
        $(this).parent().animate({
           width: '+=100px'
        }, 500);

        $(this).prev().html(parseInt($(this).prev().html()) + 1);
        return false;
    });
});