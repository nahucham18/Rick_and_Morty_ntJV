const express = require('express')
const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const postFav = require('../controllers/postFav')
const getFav = require ('../controllers/getFav')
const deleteFav = require ('../controllers/deleteFav')
const router = Router();
let fav = require('../utils/fav')

router.get('/rickandmorty/onsearch/:id',getCharById)

router.get('/detail/:id',getCharDetail)

router.post('/rickandmorty/fav',postFav)

router.get('/rickandmorty/fav',getFav)

router.delete('/rickandmorty/fav/:id', (req,res)=>{
    console.log('hola');
    const { id } = req.params
    fav = fav.filter(fav => { fav.id !== Number(id)})
    res.status(200).json(fav)
})


module.exports = router;