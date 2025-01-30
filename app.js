const express = require('express')
const swaggerUi = require("swagger-ui-express");
const app = express()
const cors = require('cors')
const { swaggerDocument } = require('./docs/swagger')

const { sequelize } = require('./database/configuration')
const { auth } = require('./middlewares/authMiddlewares')


const jobsRouter = require('./routes/jobroutes')
const userRouter = require('./routes/userroutes')

// const bodyParser = require('body-parser')
// const connection = require('./database/configuration')
// app.use((err, req, res, next)=>{
//     console.error('Global error handler:',error.message)
//     res.status(500).json({message: error.message})
// })
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(userRouter)
app.use(auth, jobsRouter)


const port = 1995

const init = async () => {
    try {
        await sequelize.authenticate()
        //await sequelize.sync({alter:true})
        app.listen(port)
        console.log(`connected to MYSQL DB`)
        console.log(`Server is listening to port ${port}`)

    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

init()









