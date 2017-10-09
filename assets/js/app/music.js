'use strict';
var module = angular.module('music', []);
module.controller("MusicController", function ($scope, $http, MusicService) {

    $scope.listVoices = [];
    $scope.isPlay = 'N';

    $scope.loadInit = function () {
        $scope.listVoices = MusicService.loadList();

    }

    $scope.play = function (id) {
        MusicService.play(id);
    }
    $scope.loadInit();

});

module.factory('MusicService', ['$http', function ($http) {
    return {
        loadList: function () {
            return [{id: "1", name: "dddd"}, {id: "2", name: "dddd"}];
        },
        play: function (id) {
            $http({
                method: 'GET',
                url: '',
                params: id
            }).then(function (res) {
                //$scope.taskData = res.data;
            });
        }
    }
}]);
