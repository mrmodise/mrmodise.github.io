/*jslint white:true */
/*global angular */
(function () {
    'use strict';
    var name = "appProjects",
        requires = ["ngAnimate"],
        appProjects = null;

    appProjects = angular.module(name, requires);

    appProjects.controller("ProjectsCtrl", function ($scope, projectService) {
        $scope.projects = projectService.getProjects();
    });

    appProjects.factory("projectService", function () {
        var projects = [{
            paraOne: 'Hi, welcome. The section below highlights my past, current and future projects, in some cases experiments, in the areas of Mobile and Web development. I love experimenting with new technologies as and when they arrive, while maintaining growth on technologies am already familiar with. I have tried to keep this website as simple as possible but I do welcome suggestions, if you have anything in mind, please do not hesitate to contact me.',
            paraTwo: 'My technology stack: Back-end (Java Spring MVC / Spring Boot / Spring Cloud, NodeJS, Go lang), Front-end (HTML5, Thymeleaf, Primeng, CSS,Sass, Less, Twitter Bootstrap, AngularJS, Angular2, JQuery, EJS, Basic JavaScript), Native Mobile Apps: (Android), Hybrid Mobile Apps (Ionic), Application Developer (Oracle PL/SQL, Oracle ADF/OAF/MAF), Databases (SAP HANA, Oracle, MongoDB, MySQL, SQLite, H2, HSQL)',
            lastUpdate: 'Last Updated: 01 Feb. 2018',
            angularFormImg: "content/imgs/angular-form.png",
            angularFormTitle: "AngularJS Complete Contact Form",
            angularFormInstr: "View Source Code",
            angularFormLink: "https://github.com/mrmodise/autoValidate-AngularJS-Form",
            angularSearchImg: "content/imgs/search-sort.png",
            angularSearchTitle: "Search and sort Lists in AngularJS",
            angularSearchInstr: "View Source Code",
            angularSearchLink: "https://github.com/mrmodise/search-sort-lists-angularjs",
            mitImg: "content/imgs/mit_website.png",
            mitTitle: "UCT MIT Website",
            mitLink: "https://www.cs.uct.ac.za/mit",
            mitInstr: "Visit the live project",
            infoImg: "content/imgs/infoSettlement.png",
            infoTitle: "Informal Settlement",
            infoLink: "https://www.youtube.com/watch?v=g82HFg9Hqws&feature=youtu.be",
            infoLinkTitle: "An android application targeting tablet devices to assist an NGO in Namibia and South Africa to capture fault reports in Informal Settlements",
            infoInstr: "View short video demo",
            xhosaImg: "content/imgs/isixhosa.png",
            xhosaTitle: "isiXhosa Speech Recognizer",
            xhosaLink: "https://www.youtube.com/watch?v=vDjoj5B5BEc&feature=youtu.be",
            xhosaLinkTitle: "A speech recognizer to assist Xhosa speaking communities in South Africa to search the Web using voice",
            xhosaInstr: "View short video demo",
            ionicListImg: "content/imgs/ionic.png",
            ionicListTitle: "Mobile Hybrid Apps Development",
            ionicListLink: "https://github.com/mrmodise/ionic-lists",
            ionicListInstr: "View Source Code",
            rekzImg: "content/imgs/personal.png",
            meImg: "content/imgs/rekz.png",
            rekzLink: "https://www.youtube.com/watch?v=-v3Yjy-U1c0&feature=youtu.be",
            rekzTitle: "Personal Website",
            rekzLinkTitle: "An explanation of the core technologies used in developing this website",
            rekzInstr: "View short video demo",
            dashImg: "content/imgs/weather-dash.png",
            dashTitle: "Weather Dashboard",
            dashLink: "https://www.youtube.com/watch?v=s-3xkOlCPgg&feature=youtu.be",
            dashLinkTitle: "An AngularJS weather application developed as part of my Udemy tutorial on AngularJS Masterclass by Sandip Gothan",
            dashInstr: "View short video demo",
            bookCartImg: "content/imgs/bookart.png",
            bookCartTitle: "Books Cart",
            bookCartLink: "https://www.youtube.com/watch?v=NRvcXKOkLdU&feature=youtu.be",
            bookCartLinkTitle: "Book cart tutorial developed as part of my AngularJS Quickstart tutorial on Udemy offered by Sandip Gothan",
            bookCartInstr: "View short video demo",
            aureliaImg: "content/imgs/aurelia-exp.png",
            aureliaTitle: "Aurelia Experiment",
            aureliaLink: "https://www.youtube.com/watch?v=uWCsxoQ04EU&feature=youtu.be",
            aureliaLinkTitle: "An experiment on the future generation JavaScript framework called Aurelia",
            aureliaInstr: "View short video demo",
            bootstrapImg: "content/imgs/boot.png",
            bootstrapTitle: "Twitter Bootstrap",
            bootstrapLink: "https://www.youtube.com/watch?v=cBAxmESLspo&feature=youtu.be",
            bootstrapLinkTitle: "Twitter Bootstrap tutorial as developed in my Udemy tutorial offered by Edwin Diaz",
            bootstrapInstr: "View short video demo",
            springFileUploadImg: "content/imgs/fileupload.png",
            springFileUploadTitle: "Java Spring MVC",
            springFileUploadLink: "https://github.com/mrmodise/java-spring-file-upload",
            springFileUploadInstr: "View Source Code",
            homeMeImg: "content/imgs/me.jpeg",
            ngFormTitle: "Angular 2 Forms",
            ngFormLink: "https://github.com/mrmodise/angular2-form",
            ngFormLinkInstr: "View Source Code",
            ngFormImg: "content/imgs/angular2-form.png",
            ngHelloTitle: "Hello Angular2",
            ngHelloLink: "https://github.com/mrmodise/hello-angular-2",
            ngHelloInstr: "View Source Code",
            ngHelloImg: "content/imgs/hello-angular.png",
            nodeTitle: "NodeJS login form",
            nodeLink: "https://github.com/mrmodise/login-menu-nodejs",
            nodeImg: "content/imgs/node-form.png",
            nodeInstr: "View Source Code",
            mongoTitle: "CRUD Functions MongoDB",
            mongoLink: "https://github.com/mrmodise/book-manager-mongodb-nodejs",
            mongoImg: "content/imgs/listBooks.png",
            mongoInstr: "View Source Code",
            eTswanaTitle: "eTswana e-commerce store",
            eTswanaLink: "https://nameless-eyrie-75082.herokuapp.com/",
            eTswanaImg: "content/imgs/etswana.png",
            eTswanaInstr: "View live project",
            senepeTitle: "Senepe Photo Sharing App",
            senepeLink: "https://github.com/mrmodise/senepe",
            senepeImg: "content/imgs/senepe.png",
            senepeInstr: "View Source Code",
            a2routerTitle: "Angular2 RC Router",
            a2routerLink: "https://github.com/mrmodise/angular2.rc4-router",
            a2routerImg: "content/imgs/angular2router.png",
            a2routerInstr: "View source code",
            expBwTitle: "Explore Botswana Culture",
            expBwLink: "https://explorebw.herokuapp.com/",
            expBwImg: "content/imgs/explorebw.png",
            expBwInstr: "View underconstruction site"
        }];

        return {
            getProjects: function () {
                return projects;
            }
        };
    });
}());
