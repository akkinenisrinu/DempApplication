'use strict';

eventsApp.controller('EventsController',
    function ($scope, eventData){
    $scope.sortorder = 'name';
        $scope.event = eventData.event;

        $scope.date = new Date();
        $scope.upVoteButton = function(session){
            session.upVoteCount++;
        };
        $scope.downVoteButton = function (session) {
            session.upVoteCount--;
        }
});