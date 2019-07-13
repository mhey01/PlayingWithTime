(function() { // IIFE
    function showTime(){
        var now, hour, min, sec, selectTime, otherHour, selectOther; // Declaring variables
    
        now = new Date(); // Allowing JS to access time parameters
        
        // Set variables to time parameters
        hour = now.getHours();
        min = now.getMinutes();
        sec = now.getSeconds();
        selectTime = document.querySelector('.time');

        // Add 0 before time parameters if less than 10 i.e. 05 seconds rather than 5 seconds
        if (hour < 10) {
            hour = "0" + hour;
        } else {
            hour = hour;
        };
    
        if (min < 10) {
            min = "0" + min;
        } else {
            min = min;
        };

        if (sec < 10) {
            sec = "0" + sec;
        } else {
            sec = sec;
        };
    
        // Add time to display
        selectTime.innerText = hour + ':' + min + ':' + sec;
    
        otherHour = hour - 8;
    
        selectOther = document.querySelector('.timeSeattle');
    
        selectOther.innerText = otherHour + ':' + min + ':' + sec;
    
        setTimeout(showTime, 1000);

        // Update counter to display how long you have been on the page for

        var counter = function() {
            var selectCount = document.querySelector('.count');
            var countHour = 0;
            var countMin = 0;
            var countSec = 0;
            var tick = 0;
            var spaceStation = 0;
            
                function add() {                    
                    countSec++;

                    tick++;
                    
                    var timeOnSite = selectCount.innerHTML = "You have been here for " + countHour + " hours " + countMin + " minutes and " + countSec + " seconds.";
                        if (countSec < 60) {
                            timeOnSite;
                        } else if (countSec >= 60) {
                            countMin++;
                            countSec = 0;
                            timeOnSite;
                        } else if (countMin >= 60) {
                            countMin = 0;
                            countSec = 0;
                            countHour++;
                            timeOnSite;
                        }
                        
                        if (tick >= 5520) { // 5520 seconds is 92 minutes
                            tick = 0;
                            spaceStation++;
                            document.querySelector('.spaceStation').innerHTML = "The International Space Station has orbited the Earth " + spaceStation + " times since you arrived."
                        }
                    
                }
            setInterval(add, 1000);
           
        };
        counter();

        
    };
    
    showTime();

        

        

}());