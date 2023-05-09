const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ict-consulting', { title: 'ICT Consulting Services' });
});

module.exports = router;