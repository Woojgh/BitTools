'use strict';

(function(module) {
  const widgetController = {};
  widgetController.index = () => {

    $('main > section').hide();
    $('#instructions').show();
  };

  module.widgetController = widgetController;
})(window);
