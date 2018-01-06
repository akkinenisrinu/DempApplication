'use strict';

eventsApp.factory('eventData', function (){
    return {
        event: {
            name : "AngularJs BootCamp Application",
            location: {
                Street: 'Gachibowli',
                City: 'Hyderabad',
                PinCode: '500032'
            },
            ImageURL: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Topic about Declaritive functions',
                    CreatorName: 'KiranRaj',
                    Duration: 1,
                    Level:'Advanced',
                    upVoteCount:0
                },
                {
                    name: 'Important Notes on the Directives and their importance',
                    CreatorName: 'RahulRaj',
                    Duration: 3,
                    Level:'Beginner',
                    upVoteCount:0
                },
                {
                    name: 'Session on the API calls ',
                    CreatorName: 'Ashok Reddy',
                    Duration: 4,
                    Level:'Moderate',
                    upVoteCount:0
                }
            ]

        }
    }
});