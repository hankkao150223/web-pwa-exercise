const ghpages = require('gh-pages');

ghpages.publish('public', function (err) {
  if (err) {
    console.log('====== deploy happen error =====');
    console.log(err);
    return;
  }
  console.log('====== deploy done =====');
});
