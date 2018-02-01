/*jslint white:true */
/*global angular */
(function () {
    'use strict';
    var name = "app",
        requires = ["appShell", "appProjects"];

    angular.module(name, requires).run(['$route', function ($route) {
        $route.reload();
    }]);
}());