import express from 'express'
import UserController from '@controllers/user.controller'

const app = express()

app.get('/', UserController.show)

app.listen(8000)
