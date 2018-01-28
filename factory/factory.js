"use strict";


angular.module("BookApp")
.factory("BookFactory", function($q, $http) {
  let getBooks = () => {
    return $q( (resolve, reject) => {
      $http
      .get("https://cohort23-exercises.firebaseio.com/worldwide/guides.json")
      .then(bookData => {
        resolve(bookData);
      })
      .catch(err => {
        reject(err);
      });
    });
  };
  return {getBooks};
});