angular.module('starter.services', [])
.provider('Event', function() {
        this.$get = ['$resource', function ($resource) {
            var Event = $resource('http://localhost:3001/events/:id', {}, {

            });
            return Event;
        }];
}).provider('Booking', function() {
    this.$get = ['$resource', function($resource){
        var Booking = $resource('http://localhost:3001/bookings/:id', {} , {
            whereEventId : {
                method : 'GET',
                params : { eventId : '@eventId' },
                isArray: true
            },
            whereArtistId : {
                method : 'GET',
                params : { artistId : '@artistId' },
                isArray: true
            }
        });
        return Booking;
    }];
}).provider('Artist', function() {
    this.$get = ['$resource', function($resource){
        var artist = $resource('http://localhost:3001/artists/:id', {} , {
            whereBookingId : {
                method : 'GET',
                params : { bookingId : '@bookingId' },
                isArray: true
            }
        });
        return artist;
    }];
});