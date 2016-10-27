'use strict';

/**
 * Removes server error when user updates input
 */

angular.module('chatOperationApp')
.directive('autoScroll', function ($timeout) {
  return {
    scope: {
      autoScroll: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('autoScroll', function (newValue) {
        if (newValue) {
          $timeout(function(){ $(element).scrollTop($(element)[0].scrollHeight)}, 1);
        }
      });
    }
  }
});
