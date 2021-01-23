import { InjectionToken } from '@angular/core';
import { MockConfig } from './mock.type';

export interface NgMockConfig {
  mock?: MockConfig;
}

export type ConfigKey = keyof NgMockConfig;

export const _CONFIG = new InjectionToken<NgMockConfig>('-config', {
  providedIn: 'root',
  factory: _CONFIG_FACTORY,
});
export function _CONFIG_FACTORY(): NgMockConfig {
  return {};
}
