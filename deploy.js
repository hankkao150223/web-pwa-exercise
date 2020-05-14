var ghpages = require('gh-pages');

ghpages.publish('public', function(err) {
  console.log('====== deploy happen error =====');
  if(!err) return;
  console.log(err);
});
