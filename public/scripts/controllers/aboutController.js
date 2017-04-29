'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    
  };

  module.aboutController = aboutController;
})(window);
