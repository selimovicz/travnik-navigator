/*global App: true, angular:true */
App.controller('MasterController', [
    '$scope',
    '$log',
    '$rootScope',
    '$stateParams',
    'LocationService',
    'getLocations',
    function($scope, $log, $rootScope, $stateParams, LocationService, getLocations) {
        'use strict';

        $scope.locations = getLocations.data;

    }
]);