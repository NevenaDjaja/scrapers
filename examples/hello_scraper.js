var nodeio = require('node.io');

var job = new nodeio.Job({
  input: false,
  run: function() {
    this.emit("Hello Scraper!");

  }
});


exports.job = job;
