import { User } from 'src/modules/users/domain/types'

declare global {
  namespace Express {
    export interface Request {
      user?: User
    }
  }
}

export { }
//
