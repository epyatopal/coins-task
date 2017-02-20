'use strict';

(function () {
    CalculationController.$inject = ['$scope', '$interval', '$state', 'CategoryService'];
    
    function CalculationController($scope, $interval, $state, CategoryService) {
        var seconds = 120;

        $scope.categories = CategoryService.get();
        $scope.free_coins = CategoryService.free_coins;

        $scope.changeCoin = CategoryService.changeCoin;
        $scope.getCoins = CategoryService.getCoins;
        $scope.goNext = goNext;


        var timer = $interval(function() {
            --seconds;

            if(seconds<0) {
                $scope.time = "0:00"
                $interval.cancel(timer);
                return goNext();
            }

            var past_minutes = parseInt(seconds/60);
            var past_seconds = seconds%60;

            $scope.time = past_minutes + (past_seconds<10 ? ":0" : ":") + past_seconds;
        }, 1000)

        $scope.$on('$destroy', function() {
            $interval.cancel(timer);
        });

        function goNext() {
            $state.go('result');
        }



    }
    
    
    angular.module('coins')
        .controller('CalculationController', CalculationController);
    
}).call();