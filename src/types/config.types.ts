import { InjectionToken } from '@angular/core';
import { MockConfig } from './mock.type';

export interface NgMockConfig {
  mock?: MockConfig;
}

export type ConfigKey = keyof NgMockConfig;

export const MOCK_CONFIG_CONFIG = new InjectionToken<NgMockConfig>('-config', {
  providedIn: 'root',
  factory: MOCK_CONFIG_CONFIG_FACTORY,
});
export function MOCK_CONFIG_CONFIG_FACTORY(): NgMockConfig {
  return {};
}
