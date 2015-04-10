var nodeio = require('node.io');
var fs = require('fs');

nodeio.scrape(function() {
  this.getHtml('http://pinterest.com/mecitygirl/cute-summerish/', function(err,$) {
    var stories = [];
    // loop through array of a.title
    $('img[src]').each(function(title) {
      stories.push(title.raw);
    });
  //  this.emit(stories); // emit terminates writing to file
 //   console.log(stories.toString());
    fs.writeFile('pint.txt',stories.toString(),function(err) {
      if (err) throw err;
      console.log("SAVED");
    });
  });
});

