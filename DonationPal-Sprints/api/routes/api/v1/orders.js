var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "This is a secure page that might show a list of all orders for the logged in user",
        user: req.user
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: "This is a secure page that might show the detials of a specific orders for the user logged in",
        user: req.user,
        order_id: req.params.id
    });
});

module.exports = router;