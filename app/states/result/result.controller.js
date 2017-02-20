'use strict';

(function () {
    ResultController.$inject = ['$scope', 'CategoryService'];

    function ResultController($scope, CategoryService) {
        console.log("$scope.categories", $scope.categories)
        $scope.categories = CategoryService.get();
    }


    angular.module('coins')
        .controller('ResultController', ResultController);

}).call();