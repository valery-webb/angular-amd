define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.helloTwo = 'hello from controller 2';
        console.log('2')
    }]);
});
