# node-toukufm-api
ToukuFM API wrapper for anyone to use in Node projects.

## Installation

    $ npm install node-toukufm-api
    
## Usage

You can see the JSON output if you log them to the console.

```javascript
// Require the module
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

// Not implemented yet, coming soon
ToukuFM.get_zones(callback);
```

## API

| Method | Parameters | URL |
|---|---|---|
| `ToukuFM.get_team` | `callback` | <http://toukufm.com/data/team> |
| `ToukuFM.get_now_playing` | `callback` | <http://toukufm.com/data/nowplaying> |
| `ToukuFM.get_schedule` | `callback` | <http://toukufm.com/data/schedule> |
| `ToukuFM.get_schedule_days_ahead` | `days:int`, `callback` | <http://toukufm.com/data/schedule/14> |
| `ToukuFM.get_zones` | `callback` | <http://toukufm.com/data/zones> |

Note: all the callback functions should have two arguments; `err` and `result`.
`err` is a boolean so if it is true, you can find the error log in `result`.

## License

This program is licensed under the GPL-3.0 license.