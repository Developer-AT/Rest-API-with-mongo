const express = require('express');

const bookRoutes = express.Router();

bookRoutes.get('/all', function(req,res){
    res.send('Get All books');
})

bookRoutes.post('/add', function(req,res){
    res.send('Add Book');
})

bookRoutes.post('/add/bulk', function(req,res){
    res.send('Add Multiple books');
})

bookRoutes.patch('/update', function(req,res){
    res.send('Update Books')
})

bookRoutes.delete('/remove', function(req,res){
    res.send('Deelte Book')
})

module.exports = bookRoutes;