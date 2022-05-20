import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as express from 'express'
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import { AppModule } from './app.module'
import { AppConfigService } from './core'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(helmet())
  app.use(morgan('combined'))
  app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb', extended: true }))
  app.use(compression())

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  const configService = app.get(AppConfigService)
  await app.listen(configService.portNumber)
}
bootstrap()
