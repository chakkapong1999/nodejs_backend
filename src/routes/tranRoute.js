const { Router } = require('express')
const controller = require('../controller/tranController')

const TranRouter = Router()

TranRouter.get('/getTran', controller.getTran)


module.exports = TranRouter
