/*global App: true */
var App = angular.module('App', [
        'ngRoute'
    ])
    .constant('conf', {
        locationsPath: '/locations'
    });