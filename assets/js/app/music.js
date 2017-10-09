'use strict';
var module = angular.module('music', []);
module.controller("MusicController", function ($scope, $http, MusicService, $location) {

    $scope.listVoices = [];

    $scope.loadInit = function () {
        $scope.listVoices = MusicService.loadList();

    }

    $scope.play = function (id) {
        $scope.audioPlay = '';
        $scope.audioPlay = $location.protocol() + '://' + $location.host() + ':' + $location.port() + "/audio/play?fileName=" + id;
    }
    $scope.loadInit();

});

module.factory('MusicService', ['$http', function ($http) {
    return {
        loadList: function () {
            return [{id: "convertResult1", name: "convertResult 1"},
                {id: "convertResult2", name: "convertResult 2"}];
        }
    }
}]);
