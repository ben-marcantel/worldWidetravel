"use strict";

 
 angular.module("BookApp", ["ngRoute"])
 .config($routeProvider=>{
    $routeProvider
    .when("/", {
        templateUrl: "partials/books.html",
        controller: "BookController",
    })
    .otherwise("/");
    });