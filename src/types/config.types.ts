import { InjectionToken } from '@angular/core';
import { MockConfig } from './mock.type';

export interface NgMockConfig {
  mock?: MockConfig;
}

export type ConfigKey = keyof NgMockConfig;

export const ALAIN_CONFIG_CONFIG = new InjectionToken<NgMockConfig>('-config', {
  providedIn: 'root',
  factory: ALAIN_CONFIG_CONFIG_FACTORY,
});
export function ALAIN_CONFIG_CONFIG_FACTORY(): NgMockConfig {
  return {};
}
