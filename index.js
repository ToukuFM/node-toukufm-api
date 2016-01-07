var request = require('request');

var ToukuFM = (function () {

    // Make the API call and give it to the callback
    var _exec = function (path, callback) {
        if (typeof callback !== 'function')
            callback = console.log;
        
        var url = 'http://www.toukufm.com/data/' + path;

        request.get(url, function (err, req, body) {
            // For some reason, ToukuFM errors don't show up properly here
            if (err) {
                callback(true, {error: body, status: req.status});
            } else {
                try {
                    callback(false, JSON.parse(body));
                } catch (err) {
                    callback(true, {error: body, status: req.status});
                }
            }
        });
    };

    // Public methods
    return {
        get_team: function (callback) {
            _exec('team', callback);
        },
        get_now_playing: function (callback) {
            _exec('nowplaying', callback);
        },
        get_schedule: function (callback) {
            _exec('schedule', callback);
        },
        get_schedule_days_ahead: function (days, callback) {
            if (!(typeof days === 'number' && (days % 1) === 0))
                throw new Error("ToukuFM.get_schedule_days_ahead(): Days must be an integer.");
            var url = 'schedule/' + days;
            _exec(url, callback);
        },
        get_zones: function (callback) {
            throw new Error("Toukufm.get_zones(): Function has not yet been implemented.");
            // _exec('zones', callback);
        }
    };
})();

module.exports = ToukuFM;