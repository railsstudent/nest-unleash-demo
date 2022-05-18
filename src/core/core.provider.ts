import { initialize, Unleash } from 'unleash-client'
import { FEATURE_TOGGLE } from './constants'
import { AppConfigService } from './services'

export const FEATURE_TOGGLE_FACTORY = {
  provide: FEATURE_TOGGLE,
  useFactory: (configService: AppConfigService): Unleash => {
    const init = initialize({
      url: configService.featureToggleUrl,
      appName: configService.featureToggleAppName,
      environment: configService.appEnv,
      customHeaders: { Authorization: configService.featureToggleApiToken },
    })

    return init
  },
  inject: [AppConfigService],
}
