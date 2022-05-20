import { Controller, Get, Logger } from '@nestjs/common'
import { FeatureToggleService, FEATURE_FLAGS } from '@/core'
import { AppService } from './app.service'

@Controller()
export class AppController {
  private logger = new Logger(AppController.name)

  constructor(private readonly appService: AppService, private featureToggleService: FeatureToggleService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('feature-toggle')
  testFeatureToggle(): { i18nStatus: string; opinionOfVue: string } {
    const isTranslationEnabled = this.featureToggleService.isEnabled(FEATURE_FLAGS.IS_TRANSLATION_ENABLED)
    const isVueCool = this.featureToggleService.isEnabled(FEATURE_FLAGS.IS_VUE3_COOL)
    this.logger.log('info', `isTranslationEnabled: ${isTranslationEnabled}`)
    this.logger.log('info', `isVueCool: ${isVueCool}`)

    const i18nStatus = isTranslationEnabled ? 'i18n enabled' : 'i18n disabled'
    const opinionOfVue = isVueCool ? 'Vue3 + Vite is cool' : "Use Vue2 but I won't like it very much"

    return {
      i18nStatus,
      opinionOfVue,
    }
  }
}
