angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'அட்டை 1', id: 1 },
    { title: 'அட்டை 2', id: 2 },
    { title: 'அட்டை 3', id: 3 },
    { title: 'அட்டை 4', id: 4 },
    { title: 'அட்டை 5', id: 5 },
    { title: 'அட்டை 6', id: 6 },
    { title: 'அட்டை 7', id: 7 },
    { title: 'அட்டை 8', id: 8 },
    { title: 'அட்டை 9', id: 9 },
    { title: 'அட்டை 10', id: 10 },
    { title: 'அட்டை 11', id: 11 },
    { title: 'அட்டை 12', id: 12 },
    { title: 'அட்டை 13', id: 13 },
    { title: 'அட்டை 14', id: 14 },
    { title: 'அட்டை 15', id: 15 },
    { title: 'அட்டை 16', id: 16 },
    { title: 'அட்டை 17', id: 17 },
    { title: 'அட்டை 18', id: 18 },
    { title: 'அட்டை 19', id: 19 },
    { title: 'அட்டை 20', id: 20 },
    { title: 'அட்டை 21', id: 21 },
    { title: 'அட்டை 22', id: 22 },
    { title: 'அட்டை 23', id: 23 },
    { title: 'அட்டை 24', id: 24 },
    { title: 'அட்டை 25', id: 25 },
    { title: 'அட்டை 26', id: 26 },
    { title: 'அட்டை 27', id: 27 },
    { title: 'அட்டை 28', id: 28 },
    { title: 'அட்டை 29', id: 29 },
    { title: 'அட்டை 30', id: 30 },
    { title: 'அட்டை 31', id: 31 },
    { title: 'அட்டை 32', id: 32 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
