import { Module } from '@nestjs/common'
import { FEATURE_TOGGLE_FACTORY } from './core.provider'
import { AppConfigService, FeatureToggleService } from './services'

@Module({
  providers: [AppConfigService, FeatureToggleService, FEATURE_TOGGLE_FACTORY],
  exports: [AppConfigService, FeatureToggleService],
})
export class CoreModule {}
