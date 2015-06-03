/*global App: true */
var App = angular.module('App', [
        'ui.router'
    ])
    .constant('conf', {
        locationsPath: '/locations'
    });