var nodeio = require('node.io');

nodeio.scrape(function() {
    this.getHtml('http://www.reddit.com/', function(err, $) {
        var stories = [];
        $('a.title').each(function(title) {
            stories.push(title.text);
        }); // each
        this.emit(stories);
    }); // getHtml
}); // scrape