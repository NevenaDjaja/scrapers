var nodeio = require('node.io');

var scraperJob = new nodeio.Job({
    input: false,
    run: function () {
    // specify arguments from command line
        var url = this.options.args[0];
        this.get(url, function(err, data) {
            if (err) {
                this.exit(err);
            } else {
                this.emit(data);
            }
        });
    }
});

// NOTE: It only works with exports.job
exports.job = scraperJob;