(function () {

  var NewsCtrl = function ($scope) {
    $scope.title = "News";
    $scope.news = [
      { title:"Learn ReactJS And Webpack" }
      , { title:"Learn Laravel And AngularJS" }
      , { title:"Learn Django And AngularJS" }
    ];
  };

  NewsCtrl.$inject = ["$scope"];

  angular.module("booksApp").controller("NewsCtrl", NewsCtrl);

}());




