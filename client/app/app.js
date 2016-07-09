angular.module('myApp', [
  'services',
  'userInput',
  'ngRoute'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/user/userInput.html',
      controller: 'userInputController'
    })
    .otherwise({
      redirectTo: '/',

    });

})
