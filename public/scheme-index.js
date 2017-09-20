var appModule = angular.module('app', ['ngRoute'])

appModule.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!')

    $routeProvider
        .when('/user', {
            templateUrl: 'template/scheme-user.html',
            controller: 'userCtrl'
        })
        .when('/place/add', {
            templateUrl: 'template/scheme-place-info.html',
            controller: 'placeAddCtrl'
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

appModule.controller('placeAddCtrl', function ($scope, $http) {
    $scope.placeInfo = null

    $scope.submit = function () {
        console.log('add')
        $http({
            url: 'place/add',
            method: 'POST',
            data: $scope.placeInfo
        }).then(function successCallBack(response) {
            console.log(response.data)
        }, function errorCallback(response) {})
    }
})

appModule.controller('placeInfoCtrl', function ($scope, $http, $routeParams) {
    $http({
        url: '/place/' + $routeParams.id,
        method: 'GET'
    }).then(function successCallBack(response) {
        console.log(response.data)
        $scope.placeInfo = response.data
    }, function errorCallback(response) {})

    $scope.submit = function () {
        $http({
            url: 'place/' + $routeParams.id,
            method: 'PUT',
            data: $scope.placeInfo
            // data: $scope.placeInfo
        }).then(function successCallBack(response) {
            if (response.data.message == 'OK') {
                if (window.confirm('修改成功，是否转回上级页面？')) {
                    window.location = '#!/place'
                }
            }
        }, function errorCallback(response) {})
    }
})

appModule.controller('placeCtrl', function ($scope, $http) {
    $http({
        url: '/place',
        method: 'GET'
    }).then(function successCallBack(response) {
        $scope.placeList = response.data
    }, function errorCallback(response) {})
})

appModule.controller('dietCtrl', function ($scope, $http) {
    console.log('diet controller')
})
