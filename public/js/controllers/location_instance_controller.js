/*global App: true, angular:true */
App.controller('LocationInstanceController', [
    '$scope',
    '$log',
    '$rootScope',
    '$stateParams',
    'LocationService',
    'getLocationInstance',
    function($scope, $log, $rootScope, $stateParams, LocationService, getLocationInstance) {
        'use strict';

        $scope.locationInstance = getLocationInstance.data[0];

        console.log($scope.locationInstance);

    }
]);