define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope', function ($scope) {
        $scope.helloOne = 'hello from controller 1'
        console.log('1')
    }]);
});
