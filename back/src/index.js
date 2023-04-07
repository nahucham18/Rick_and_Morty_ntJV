const server = require('./server')
const PORT= 3001;
const database = require('./db');


database
.sync({ force:true })
.then(()=>{
    server.listen(PORT,()=>{
        console.log('Server raised in port '+ PORT);
    });
})
.catch((err)=> console.log(err));