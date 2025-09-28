import { Injectable, Logger, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

const RESET = '\x1b[0m'
const colorFor = (status: number) =>
  status >= 500
    ? '\x1b[31m' // red
    : status >= 400
      ? '\x1b[33m' // yellow
      : status >= 300
        ? '\x1b[36m' // cyan
        : '\x1b[32m' // green

@Injectable()
export default class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP')

  use(req: Request, res: Response, next: NextFunction) {
    const start = process.hrtime.bigint()
    const method = req.method
    const path = req.originalUrl.split('?')[0]

    let finished = false

    const logLine = (status: number, suffix = '') => {
      const color = colorFor(status)
      const ms = Number(process.hrtime.bigint() - start) / 1e6
      const msg = `${method} ${path} ${color}${status}${RESET} - ${ms.toFixed(1)}ms${suffix}`
      if (status >= 500) this.logger.error(msg)
      else if (status >= 400) this.logger.warn(msg)
      else this.logger.log(msg)
    }

    res.once('finish', () => {
      finished = true
      logLine(res.statusCode)
    })

    res.once('close', () => {
      if (!finished) {
        logLine(499, ' (aborted)')
      }
    })

    next()
  }
}
