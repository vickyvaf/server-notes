const express = require('express')
const { index, find, create, update, destroy, } = require('./controller')

const router = express()

router.get('/users', index)
router.get('/users/:id', find)
router.post('/users', create)
router.put('/users/:id', update)
router.delete('/users/:id', destroy)

module.exports = router
