const express = require("express");

const router = express.Router();

const { ensureAuthenticated } = require("/home/ubuntu/environment/config/auth");

//Welcome page
router.get('/' , (req, res) => res.render('welcome'));
//Dashbord
router.get('/dashbord' , ensureAuthenticated, (req, res) => 
    res.render('dashbord', {
        name: req.user.name
    }));

module.exports = router;