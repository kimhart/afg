angular.module('modelApp').controller('ImagesController', ImagesController)

function ImagesController($scope, $http) {
  $http.get('/images.json').success(function(response){
    $scope.images = response;
  })
}