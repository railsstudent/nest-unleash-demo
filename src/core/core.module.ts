import { Module } from '@nestjs/common'
import { AppConfigService } from './services'

@Module({
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class CoreModule {}
