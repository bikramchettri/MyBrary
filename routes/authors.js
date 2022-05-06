const express = require('express');
const router = express();
const Author = require('../models/author');

//All Authors route
router.get('/', (req, res) => {
  res.render('authors/index');
});

//New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', {
    author: new Author(),
  });
});

//Create author route
router.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body.name);
});

module.exports = router;
