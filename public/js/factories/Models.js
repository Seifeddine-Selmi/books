 /*--- factory ---*/


(function () {

  var Models = function () {
    var levels = function() {
      return [
        "", "very good", "good", "beginner"
      ];
    }

    return {
      levels : levels
    }
  };

  //Models.$inject = []; pas d'injection

  angular.module("booksApp").factory("Models", Models);

}());

