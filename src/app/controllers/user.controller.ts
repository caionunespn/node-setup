/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import User from '@models/User'

class UserController {
  show (request: Request, response: Response) {
    const user = new User()

    return response.json(user.toJSON())
  }
}

export default new UserController()
