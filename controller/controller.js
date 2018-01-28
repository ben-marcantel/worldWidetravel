"use strict";


angular.module("BookApp")
.controller("BookController", function($scope, BookFactory){
    BookFactory.getBooks()
    .then((bookData)=>{    
        $scope.books = Object.values(bookData.data); 
    }) 
});