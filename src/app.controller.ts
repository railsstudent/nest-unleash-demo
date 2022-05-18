import { Controller, Get } from '@nestjs/common'
import { FeatureToggleService, FEATURE_FLAGS } from '@/core'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private featureToggleService: FeatureToggleService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('i18n-feature')
  isTranslationSupported(): string {
    if (this.featureToggleService.isEnabled(FEATURE_FLAGS.IS_TRANSLATION_ENABLED)) {
      return 'i18n enabled'
    }
    return 'i18n disabled'
  }

  @Get('vue-feature')
  isVueCool(): string {
    if (this.featureToggleService.isEnabled(FEATURE_FLAGS.IS_VUE3_COOL)) {
      return 'Vue3 + Vite is cool'
    }
    return 'Use Vue2'
  }
}
