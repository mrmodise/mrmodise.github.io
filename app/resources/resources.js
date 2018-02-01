/*jslint white:true */
/*global angular */
(function () {
    'use strict';
    var name = "appResources",
        requires = ["ngAnimate"],
        appResources = null;

    appResources = angular.module(name, requires);

    appResources.controller("ResourcesCtrl", function ($scope, resourceService) {
        $scope.resources = resourceService.getResources();
    });

    appResources.factory("resourceService", function () {
        var resourceList = [
            {
                title: "Recommended Resources",
                intro: "Below is a list of tools I use everytime I work on my projects, I hope you will find them useful",
                bracketsImg: "content/imgs/brackets.png",
                bracketsTitle: "Brackets",
                bracketsBody: "Lightweight, easy Git commits, easy to learn and lots of plugins makes Brackets my number one choice " +
                "Editor when it comes to developing Web applications. It's built in HTML, CSS, and JavaScript.",
                studioImg: "content/imgs/studio.png",
                studioTitle: "Android Studio",
                studioBody: "Developing Android applications has never been made easy like it is in AS. Drop and drag UI components," +
                " default definition of Interface callbacks in Fragments, code completion, Android material..this is the tool 4 you ",
                eclipseImg: "content/imgs/eclipse.png",
                eclipseTitle: "Eclipse/Spring Tool Suite",
                eclipseBody: "This is to me by far the most developer friendly IDE to use when coding Java applications. " +
                "I usually install the J2EE version which has all the necessary tools I need to develop both desktop and Web applications in Java.",
                lastUpdate: "Last Updated: 12 August 2016",
                trainingTitle: "Training",
                trainingBody: "I have learn't to quickly grow as a Software Development Engineer by engaging in online tutorials, " +
                "commonly referred to as MOOCs: ",
                courseraTitle: "Coursera",
                courseraBody: "This is the best online platform for two reasons: they offer financial aid to those who do not afford " +
                "certificates as well as offering a broad range of specialization courses which give a thorough training experience",
                udemyTitle: "Udemy",
                udemyBody: "My career has been transformed at the blink of an eye in the past years through following tutorials on Udemy." +
                " What makes Udemy different from other MOOCs is that most of their courses/tutorials are based on industry skills taught" +
                " by well experienced Software Developers (am talking Team leads, Project Managers, Technical Directors, Consultants, " +
                "Contractors etc). Most of their tutorials are paid for, however, they do offer discounts of $10 - $20 once in a while. " +
                "Additionally, they have a broad range of free courses, especially in IT.",
                blogsTitle: "Blogs",
                blogsBody: "My believe is that to be a successful Software Developer, one has to stay up-to-date with new technologies; " +
                "how would you know what's new or not? the answer to that is through reading blogs, books etc:",
                blogOne: "Jenkov Tutorials",
                blogTwo: "Dzone",
                blogThree: "Java Code Geeks",
                blogFour: "Tutorials Point",
                blogFive: "Cave of Programming",
                blogSix: "Luv2Code",
                intelliJImg: "content/imgs/idea.png",
                intelliJTitle: "IntelliJ IDEA",
                intelliJBody: "The most recommended version of IntelliJ IDEA is the ultimate version. " +
                "I have been using it for the past two years under my University licence. A bit costly to purchase but really worth it. Its my replacement for" +
                " eclipse. Use IntelliJ and become a productive developer",
                atomImg: "content/imgs/atom.png",
                atomTitle: "Atom",
                atomBody: "Atom is a text editor that's modern, approachable, yet hackable to the core, a tool you" +
                " can customize to do anything but also use productively without ever touching a config file ~ atom.io. I could have not said it better",
                ubuntuImg: "content/imgs/ubuntu.png",
                ubuntuBody: "Ubuntu, in particular, the long term support (LTS), is a very resourceful operating system. I have" +
                " noticed over the years that it truly supports software development better - 2nd to Mac :). You want to become" +
                " productive and cannot afford a Mac? Ubuntu Linux is for you!",
                bootsTitle: "Bootstrapious",
                bootsBody: "You will find here great collection of original free Bootstrap themes and "+
                "templates prepared for your next project. All themes are fully responsive, HTML valid, premium"+
                " quality and last but not least - all of the are free to use! ~ Ondrej",
                bootsImg: "content/imgs/boots.png"
            }
        ];

        return {
            getResources: function () {
                return resourceList;
            }
        };
    });
}());
