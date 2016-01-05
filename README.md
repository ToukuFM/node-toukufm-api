# node-toukufm-api
ToukuFM API wrapper for anyone to use in Node projects.

## Installation

    $ npm install node-toukufm-api
    
## Usage

You can see the JSON output if you log them to the console.

```javascript    
var ToukuFM = require('node-toukufm-api');

// Set up your callback function
// Or use it like api.get_team(function (result) { // do something with result });
var callback = function(result) {
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
```