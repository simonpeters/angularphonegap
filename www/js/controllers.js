angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Event, Booking, Artist) {
       $scope.events = Event.query();
       $scope.bookings = Booking.query();
       $scope.artists = Artist.query();
})
.controller('EventsCtrl', function($scope, Event) {
        $scope.events = Event.query();
})
.controller('ArtistsCtrl', function($scope, Artist) {
        $scope.artists = Artist.query();
})
.controller('EventDetailCtrl', function($scope , Event , Booking, Artist , $stateParams) {
        $scope.event = Event.get({id : $stateParams.eventId});
        $scope.bookings = Booking.whereEventId({event_id : $stateParams.eventId});

        $scope.bookings.$promise.then(function(bookings){
            bookings.forEach(function(booking){
                booking.artist = Artist.get({id : booking.artist_id});
            });
        });

        var activeBooking;

        $scope.dropDown = function(booking){
            if(activeBooking == booking){
                activeBooking = undefined;
            }else{
                activeBooking = booking;
            }
        }

        $scope.activeDropDown = function(booking){
            return (booking == activeBooking);
        }
})
.controller('ArtistDetailCtrl', function($scope, $stateParams, Artist, Booking, Event) {
        $scope.artist = Artist.get({id : $stateParams.artistId});

        $scope.bookings = Booking.whereArtistId({artist_id : $stateParams.artistId});

        $scope.bookings.$promise.then(function(bookings){
            bookings.forEach(function(booking){
                booking.event = Event.get({id : booking.event_id});
            });
        });

        var activeBooking;

        $scope.dropDown = function(booking){
            if(activeBooking == booking){
                activeBooking = undefined;
            }else{
                activeBooking = booking;
            }
        }

        $scope.activeDropDown = function(booking){
            return (booking == activeBooking);
        }

})
.controller('AccountCtrl', function($scope) {
});