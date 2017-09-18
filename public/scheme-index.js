var appModule = angular.module('app', ['ngRoute'])

appModule.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!')

    $routeProvider
        .when('/user', {
            templateUrl: 'template/scheme-user.html',
            controller: 'userCtrl'
        })
        .when('/place/:id', {
            templateUrl: 'template/scheme-place-info.html',
            controller: 'placeInfoCtrl'
        })
        .when('/place', {
            templateUrl: 'template/scheme-place.html',
            controller: 'placeCtrl'
        })
        .when('/diet', {
            templateUrl: 'template/scheme-diet.html',
            controller: 'dietCtrl'
        })
        .otherwise('/user')
}])

appModule.controller('initCtrl', function ($scope, $http) {})

appModule.controller('userCtrl', function ($scope, $http, $routeParams) {
    console.log('user controller')
})

appModule.controller('placeCtrl', function ($scope, $http) {
    $http({
        url: '/place',
        method: 'GET'
    }).then(function successCallBack(response) {
        $scope.placeList = response.data
    }, function errorCallback(response) {})
})

appModule.controller('placeInfoCtrl', function ($scope, $http, $routeParams) {
    console.log($routeParams.id)
})

appModule.controller('dietCtrl', function ($scope, $http) {
    console.log('diet controller')
})
