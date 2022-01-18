const movie = require('../../utilities/movie')
const express = require('express');
const router = express.Router();

// @route  GET api/graphql
router.get('/', (req, res) => {
    res.json(movie)
});

module.exports = router;