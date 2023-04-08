const express = require('express')
const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const postFav = require('../controllers/postFav')
const getFav = require ('../controllers/getFav')
const deleteFav = require ('../controllers/deleteFav')
const postUser = require('../controllers/postUser')
const login = require('../controllers/login')
const router = Router();

router.get('/rickandmorty/login',async(req,res)=>{
    const { email, password} =req.query;
    try {
        const logging = await login(email,password)
        res.status(200).json(logging)
    } catch (error) {
        res.status(400).json(error.message)
    }

})

router.post('/rickandmorty/user',async(req,res)=>{
    const { user, password } =req.body;
    console.log( user);
    console.log(password);
    try {
        const newUser = await postUser(user,password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get('/rickandmorty/onsearch/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const newCharacter = await getCharById(id)
        res.status(200).json(newCharacter)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


router.get('/rickandmorty/detail/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const newCharacterDetail = await getCharDetail(id)
        res.status(200).json(newCharacterDetail)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

router.get('/rickandmorty/fav',async(req, res)=>{
        const favs = await getFav();
        res.status(200).json(favs)
})

router.post('/rickandmorty/fav',async (req,res)=>{
    try {
        const character = req.body;
        const favs = await postFav(character);
        res.status(200).json(favs) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})


router.delete('/rickandmorty/fav/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const favs = await deleteFav(id)
        res.status(200).json(favs);
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


module.exports = router;