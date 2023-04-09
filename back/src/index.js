const server = require('./server')
const PORT= 3001;
const { conn } = require('./DB_connection');

conn
.sync({ alter:true })
.then(()=>{
    server.listen(PORT,()=>{
        console.log('Server raised in port '+ PORT);
    });
})
.catch((err)=> console.log(err));