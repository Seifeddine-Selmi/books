 (function () {
  var FavoriteBooksCtrl = function ($scope) {
    $scope.title = "My Favorite Books";
    $scope.items = [
      { title:"Learn AngularJS" }
      , { title:"Learn NodeJS" }
      , { title:"Learn ExpressJS" }
    ];
  };

  FavoriteBooksCtrl.$inject = ["$scope"];

  angular.module("booksApp").controller("FavoriteBooksCtrl", FavoriteBooksCtrl);
}());

