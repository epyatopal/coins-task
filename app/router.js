'use strict';

angular.module('coins')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('main', {
                url: '',
                templateUrl: 'app/states/calculation/calculation.html',
                controller: 'CalculationController'
            })
            .state('result', {
                url: '/result',
                templateUrl: 'app/states/result/result.html',
                controller: 'ResultController'
            })
            
    });
