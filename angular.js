'use strict';

var x =5;
var webapp =angular.module('webApp', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'index.html', controller: 'EventController'});
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
