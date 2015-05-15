var app = angular.module('app', ['ui.router', 'templates']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'assets/app/home/_home.html',
        controller: 'MainController'
      })
      .state('receipts', {
        url: '/receipts/{id}',
        templateUrl: 'assets/app/receipts/_receipts.html',
        controller: 'ReceiptsController'
      });
    $urlRouterProvider.otherwise('home');
}])
