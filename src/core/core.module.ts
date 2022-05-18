import { Module } from '@nestjs/common'
import { AppConfigService, FeatureToggleService } from './services'

@Module({
  providers: [AppConfigService, FeatureToggleService],
  exports: [AppConfigService, FeatureToggleService],
})
export class CoreModule {}
