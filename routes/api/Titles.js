const titles = require('../../utilities/titles')
const express = require('express');
const router = express.Router();

// @route  GET api/titles
router.get('/', (req, res) => {
    res.json(titles)
});

module.exports = router;
