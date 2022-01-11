const express = require('express');
const Authors = require('./../models/authors.model');

const authorRoutes = express.Router();

authorRoutes.get('/all', function(req,res){
    res.send('Get All authors');
})

authorRoutes.post('/add', async function(req,res){
    req.body.dob = new Date(req.body.dob);
    let result = await Authors.insert(req.body);
    res.send({data: result});
})

authorRoutes.post('/add/bulk', function(req,res){
    res.send('Add Multiple authors');
})

authorRoutes.patch('/update', function(req,res){
    res.send('Update authors')
})

authorRoutes.delete('/remove', function(req,res){
    res.send('Delete Author')
})

module.exports = authorRoutes;