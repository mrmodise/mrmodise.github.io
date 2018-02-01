/*jslint white:true */
/*global angular */
(function () {
    'use strict';
    var name = "appShell",
        requires = ["ngRoute","ngAnimate"],
        appShell = null;

    appShell = angular.module(name, requires);

    appShell.controller("ShellCtrl", function ($scope, $location, aboutService) {

        $scope.abouts = aboutService.getAbout();

        $scope.nav = {};

        $scope.nav.isActive = function (path) {
            if (path === $location.path()) {
                return true;
            }

            return false;
        };
    });

    appShell.config(function ($routeProvider) {
        $routeProvider.when("/projects", {
                templateUrl: "app/projects/projects.html",
                controller: "ProjectsCtrl"
            })
            .otherwise({
                redirectTo: "/projects"
            });
            
    });

    appShell.factory("aboutService", function () {
        var aboutList = [
            {
                careerTitle: "Career",
                career: "A highly skilled IT professional; Mr Modise is a passionate and enthusiastic Full Stack Web Designer and Developer, Mobile and Application Developer with a lot of interest in Research, Finance, Insurance and Banking. Mr Modise is always learning and equipping himself with the necessary skills to become a spearhead in his trade of solving problems on the Web, Research and Mobile development as well as speaking in code. His determination and love for what he does has landed him in some pretty interesting places with some smart and intelligent people. He has had the privilege of working with dedicated and inspiring developers and other teams in delivering solutions for numerous businesses, big and small, across Botswana, Namibia and South Africa. He has sat and shared knowledge with highly motivated and intelligent Computer Scientists in different research domains of Computer Science. He regularly explores and experiments with new technology as and when it arrives while maintaining growth in the technology he is already experienced in; in short, I never stop learning",
                educationTitle: "Education and Training",
                educationAndTraining: "Mr Modise holds a BSc honors degree in Computer Systems Engineering from "+
                "University of Sunderland, UK. He is an Oracle certified PL/SQL Developer, and he is currently "+
                "studying towards his Master of Science in Computer Science by Coursework and dissertation at the"+
                " University of Cape Town, South Africa. His research focuses on supporting African languages in "+
                "search engines such as Google. The research looks into leveraging the increase in use of Mobile devices"+
                " to better represent the so regarded underrepresented languages on the Web. In addition to his"+
                " academic background, Modise usually spends his spare time upgrading his technical and personal"+
                " skills through online short programs such as Introduction to Financial Accounting, and"+
                " Corporate Finance, AngularJS Masterclass, Microservices with Spring Cloud, Angular 2 Essential Training, Ionic: From Web to Mobile, Twitter Bootstrap, "+
                "Python Programming Specilization, JQuery and Java Spring courses as offered by ",
                connectTitle: "Let\'s connect",
                connect: "I love meeting hardworking and yet friendly people. If you fall in this category, be sure to connect with me on Twitter, LinkedIn and GitHub.",
                githubImg: "content/imgs/github.gif",
                richardQuote: "Do not be embarrassed by your failures, learn from them and start again.",
                richard: "Sir Richard Branson",
                mandelaQuote: "It always seems impossible until it's done.",
                mandela: "Nelson Mandela",
                obamaQuote: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
                obama: "Barack Obama",
                meQuote: "Every journey has a starting point, determine yours today",
                me: "M. R. Modise",
                martinQuote: "Faith is taking the first step even when you don't see the whole staircase",
                martin: "Martin Luther King, Jr."
        }];

        return {
            getAbout: function () {
                return aboutList;
            }
        };
    });
}());
