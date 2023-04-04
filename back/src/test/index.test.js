const server = require('../server')
const request = require('supertest')

describe("GET rickandmorti{id}",()=>{
    it('Responde con status:200', async()=>{
        const res = await request(server).get('/rickandmorty/onsearch/1');
        expect(res.statusCode).toBe(200)
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"',  async ()=>{
        const response = await request(server).get('/rickandmorty/onsearch/1');
            expect(response.body.id).toEqual(1)
            expect(response.body.name).toEqual('Rick Sanchez')
            expect(response.body.gender).toEqual('Male')
            expect(response.body.species).toEqual('Human')
            //Falata imagen
        })
    })
