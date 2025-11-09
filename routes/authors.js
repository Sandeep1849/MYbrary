console.log('authors router file loaded');
const express = require('express');
const router = express.Router();

//All authors route
router.get('/', (req, res) => {
    console.log('GET /authors -> rendering authors/index');
    res.render('authors/index');
})
//new author route
router.get('/new', (req, res) => {
      console.log('GET /authors/new -> rendering authors/new');

    res.render('authors/new');
})

//create author route
router.post('/', (req, res) => {
    res.send('Create');
});

module.exports = router;