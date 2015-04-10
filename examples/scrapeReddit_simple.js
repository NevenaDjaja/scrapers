var nodeio = require('node.io');

nodeio.scrape(function() {
  this.getHtml('http://www.reddit.com', function(err,$) {
    var stories = [];
    // loop through array of a.title
    $('a.title').each(function(title) {
      stories.push(title.text);
    });
    this.emit(stories);
  });
});

