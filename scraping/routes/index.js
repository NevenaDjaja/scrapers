var scraper = require('../test_scraper');
var nodeio = require('node.io');

exports.index = function(req, res){
  res.render('index', { title: 'My little scraper' });

};

exports.scrape = function(req, res){
  console.log("myscrape");
  var ar = [];
  var url = req.body.url;
  // the job 
  ar.push(url);
  console.log(ar);
  var myscraper = scraper.scraperJob(ar);
  nodeio.start(myscraper,function(err,dataToEmit) {
    console.log(dataToEmit);
  });
};