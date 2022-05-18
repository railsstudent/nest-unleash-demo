import { Inject, Injectable } from '@nestjs/common'
import { Unleash, Context } from 'unleash-client'
import { FEATURE_TOGGLE } from '../constants'

@Injectable()
export class FeatureToggleService {
  constructor(@Inject(FEATURE_TOGGLE) private featureToggleFactory: Unleash) {}

  isEnabled(featureFlag: string, context?: Context): boolean {
    return this.featureToggleFactory.isEnabled(featureFlag, context)
  }
}
