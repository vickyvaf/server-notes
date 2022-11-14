const express = require('express')
const cors = require('cors')
const dotenvConfig = require('./app/dotenv.config')

const port = process.env.PORT

app = express()

app.use(cors())
app.use(express.json())

const sequelize = require('./app/db/index')
sequelize.sync().then(() => {
  console.log('database ready...')
})

const v1 = '/api/v1'

const usersRoutes = require('./app/api/v1/users/router')

app.get('/', (_, res) => {
  res.status(200).json({
    message: 'api ready'
  })
})

app.use(v1, usersRoutes)

app.listen(port)
