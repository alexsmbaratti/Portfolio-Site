var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    var json = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
    var softwareProjects = json['software-projects']
    var diyProjects = json['diy-projects']

    res.render('index', {title: 'Alex Baratti', softwareProjects: softwareProjects, diyProjects: diyProjects});
});

module.exports = router;
