// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngResource' , 'starter.controllers', 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })
  .state('tab.events', {
      url: '/events',
      views: {
          'tab-events': {
              templateUrl: 'templates/tab-events.html',
              controller: 'EventsCtrl'
          }
      }
  })
  .state('tab.event-detail', {
      url: '/event/:eventId',
      views: {
          'tab-events': {
              templateUrl: 'templates/event-detail.html',
              controller: 'EventDetailCtrl'
          }
      }
  })
  .state('tab.artists', {
      url: '/artists',
      views: {
          'tab-artists': {
              templateUrl: 'templates/tab-artists.html',
              controller: 'ArtistsCtrl'
          }
      }
  })
  .state('tab.artist-detail', {
      url: '/artist/:artistId',
      views: {
          'tab-artists': {
              templateUrl: 'templates/artist-detail.html',
              controller: 'ArtistDetailCtrl'
          }
      }
  })
  .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});

