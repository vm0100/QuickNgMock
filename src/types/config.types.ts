import { InjectionToken } from '@angular/core';
import { MockConfig } from './mock.type';

export interface Config {
  mock?: MockConfig;
}

export type ConfigKey = keyof Config;

export const _CONFIG = new InjectionToken<Config>('-config', {
  providedIn: 'root',
  factory: _CONFIG_FACTORY,
});
export function _CONFIG_FACTORY(): Config {
  return {};
}
