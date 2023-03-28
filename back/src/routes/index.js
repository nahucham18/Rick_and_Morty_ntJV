const express = require('express')
const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const postFav = require('../controllers/postFav')
const getFav = require ('../controllers/getFav')

const router = Router();

router.get('/onsearch/:id',getCharById)

router.get('/detail/:id',getCharDetail)

router.post('/rickandmorty/fav',postFav)

router.get('/rickandmorty/fav',getFav)

router.delete('rickandmorty/fav/:id',(req,res)=>{

})


module.exports = router;