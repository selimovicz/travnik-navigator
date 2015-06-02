/*global App: true, angular:true */
App.controller('MasterController', [
    '$scope',
    '$log',
    '$rootScope',
    '$routeParams',
    'LocationService',
    function($scope, $log, $rootScope, $routeParams, LocationService) {
        'use strict';

        $scope.locations = [];

        LocationService.getLocations()
            .then(function(locationsResponse) {
                    angular.forEach(locationsResponse, function(locations) {
                        $scope.locations.push({
                            'id': locations._id,
                            'name': locations.name,
                        });
                    });
                },
                function(error) {
                    console.log('this');
                });

        if($routeParams.id) {
        	LocationService.getLocations($routeParams.id)
            .then(function(locationsResponse) {
                    angular.forEach(locationsResponse, function(locations) {
                        $scope.location = {
                            'id': locations._id,
                            'name': locations.name,
                        };
                    });

                    console.log('---', $scope.location);
                },
                function(error) {
                    console.log('this');
                });
        }

    }
]);