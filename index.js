var request = require('request');

var ToukuFM = (function () {

    var _exec = function (path, callback) {
        if (typeof callback !== 'function')
            callback = console.log;
        
        var url = 'http://www.toukufm.com/data/' + path;

        request.get(url, function (err, req, body) {
            if (err) {
                // TODO: err is always undefined?
                console.log("Error");
                callback({status: req.status});
            }
            
            callback(JSON.parse(body));
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
            _exec('zones', callback);
        }
    };
})();

module.exports = ToukuFM;