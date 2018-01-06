'use strict';


eventsApp.filter('durations',function(){
    return function(duration){
        switch(duration){
            case 1:
                return "Half Hour";
            case 2:
                return "One Full Day";
            case 3:
                return "One and Half Day";
            case 4:
                return "Two Days Full"
        }
    }
});