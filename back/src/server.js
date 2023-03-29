// const http = require("http")
// const characters = require ('./utils/data')

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
    
//     if(req.url.includes('rickandmorty/character')){
//         const {url} = req
//         const id = url.split('/').pop()

//         const character = characters.find((char)=> char.id == id)
            
//         if(character){
//             console.log(character);
//             res.writeHead(200, {"Content-type":"application/json"})
//             return res.end(JSON.stringify(character))
//         }else{
//             res.writeHead(404,{ 'Content-type':'application/json'});
//             return res.end(JSON.stringify({error: "character not found"}));

//         }
//         characters.forEach((char)=>{
//             if(char.id === id){
//                 res.writeHead(200,{ 'Content-type':'application/json'}).end(JSON.stringify(char))
//             }
//         })
//         res.end(`Estoy en la ruta con el ID: ${id}`)
        
        
        
//     }

    
// }).listen(3001,'Localhost')

// const http = require('http')
// const getCharById = require('./controllers/getCharById')
// const getCharDetail = require ('./controllers/getCharDetail')

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     console.log('entramos');
//     const { url } = req
//     console.log(req.url);

//     if(url.includes('onsearch')){
//         console.log('aca estoy');
//         const id = url.split('/').pop()
//         console.log(id);
//         getCharById(res,id)
//     }

//     if(url.includes('detail')){
//         const id = url.split('/').pop()
//         getCharDetail(res,id)
//     }

// }).listen(3001,'localhost')

const express = require('express')
const morgan = require('morgan')
const router = require('./routes/index')
const cors = require('cors')

const server = express();

server.use(cors());

server.use(express.json())

server.use(morgan("dev"))

server.use('/',router)

module.exports = server;