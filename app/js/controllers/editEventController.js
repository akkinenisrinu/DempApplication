'use strict';


eventsApp.controller('editEventsController',
    function($scope){
    $scope.event ={
        // imageUrl: "../img/angularjs-logo.png"
    };

        $scope.saveEvent = function(event, newEventForm){
            console.log(newEventForm);
            window.alert(event.name + "has created an event ");
        };

        $scope.cancelEvent = function(){
            window.location= "eventDetails.html";
        };
    });