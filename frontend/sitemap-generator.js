const Sitemap = require('react-router-sitemap').default;
const router = require('./path/to/your/router').default;

(
  new Sitemap(router)
    .build('https://votresite.com')
    .save('./public/sitemap.xml')
);
