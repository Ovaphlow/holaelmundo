var appModule = angular.module('app', ['ngRoute'])

appModule.controller('indexCtrl', function ($scope, $http) {
    console.log('index controller')

    $scope.search = function () {
        console.log('search')
    }
})
