(function () {
  var booksApp = angular.module("booksApp", ["ngResource", "ngRoute"]);

  booksApp.config(['$routeProvider',
    function($routeProvider) {

      $routeProvider.
        when('/news', {
          templateUrl: "templates/news.html",
          controller: "NewsCtrl"
        })
        .when('/favoritebooks', {
          templateUrl: "templates/favoritebooks.html",
          controller: "FavoriteBooksCtrl"
        })
        .when('/addition/:a/:b', {
          templateUrl: "templates/addition.html",
          controller: "AdditionCtrl"
        })
        .otherwise({
          redirectTo: "/"
        })

    }
  ]);

  booksApp.filter("stars", function() {
    return function(data) {
      switch (data) {
        case "very good":
          return "***";
          break;
        case "good":
          return "**";
          break;
        case "beginner":
          return "*";
          break;
        default:
          return "";
      }
    }
  });

})();