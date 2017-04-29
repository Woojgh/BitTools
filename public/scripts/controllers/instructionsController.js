'use strict';

(function(module) {
  const instructionsController = {};

  instructionsController.index = () => {
    $('#instructions').show().siblings().hide();
    
  };

  module.instructionsController = instructionsController;
})(window);
