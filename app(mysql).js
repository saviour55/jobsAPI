const express = require('express')
const app = express()


const {databaseconfig} =require('./database/configuration')
const {router} =require('./routes/jobroutes')



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)


app.get('/', (req, res) => {
    res.send('hi')
})

const port = 7800
app.listen(port, ()=>{
    databaseconfig.getConnection()
    console.log('Server is running')
})