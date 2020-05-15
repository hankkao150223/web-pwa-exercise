const ghpages = require('gh-pages');

ghpages.publish('public', function (err) {
  if (!err) return;
  console.log('====== deploy happen error =====');
  console.log(err);
});
