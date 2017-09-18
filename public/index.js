var appModule = angular.module('app', ['ngRoute'])

appModule.controller('indexCtrl', function ($scope, $http) {

    $scope.search = function () {
        $http({
            url: '/search',
            method: 'POST',
            data: {keyword: $scope.keyword}
        }).then(function successCallBack(response) {
            console.log(response.data)
        }, function errorCallback(response) {})
    }
})
