const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/', (req, res) => {
    res.render('authors/authors')
});

router.get('/new_author', (req, res) => {
    res.render('authors/new_author')
})

router.post('/', (req, res) => {
    res.send('Create Author')
})

module.exports = router;
