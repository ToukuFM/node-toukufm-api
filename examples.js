var ToukuFM = require('node-toukufm-api');

// Set up your callback function
var callback = function(err, result) {
    if (err) {
        console.log(err.status);
        console.log(err.error);
        return;
    }
    console.log(result);
}

// Get the current playing song
ToukuFM.get_now_playing(callback);

// Get the team information
ToukuFM.get_team(callback);

// Get the schedule
ToukuFM.get_schedule(callback);

// Schedule from now until 10 days ahead
ToukuFM.get_schedule_days_ahead(10, callback);

// Get "zones"? - not implemented yet
ToukuFM.get_zones(callback);