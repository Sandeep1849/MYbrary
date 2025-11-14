console.log('authors router file loaded');
const express = require('express');
const router = express.Router();
const Author = require('../models/author');

//All authors route
router.get('/', async(req, res) => {
    try {
    const searchOptions = {};
    if(req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i');
    }
    const authors = await Author.find(searchOptions);
     console.log('authors found:', authors.length, authors); 
    res.render('authors/index', 
        {authors: authors,
        searchOptions: req.query
        });
    } catch (err) {
    console.error(err);
    res.redirect('/');
    }
})
//new author route
router.get('/new', (req, res) => {
      console.log('GET /authors/new -> rendering authors/new');

    res.render('authors/new', {author: new Author()});
})

//create author route
router.post('/', async(req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save();
        //res.redirect(`/authors/${newAuthor.id}`);
        res.redirect('/authors')
    }
    catch {
            res.render('authors/new', {
                author: author,
                errorMessage: 'Error creating Author'
            }
        );
    }
});

module.exports = router;    