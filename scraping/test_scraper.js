var nodeio = require('node.io');

var scraperJob = function(url) {
    return new nodeio.Job({
    input: url,
    run: function (url) {
    // specify arguments from command line
     //   var url = this.options.args[0];
        this.get(url, function(err, data) {
            if (err) {
                this.exit(err);
            } else {
                this.emit(data);
            }
        });
    }
});
};

// NOTE: It only works with exports.job
exports.scraperJob = scraperJob;