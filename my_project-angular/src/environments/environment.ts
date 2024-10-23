export interface EnvConfig {
  apiUrl?: string;
}

const envConfig: EnvConfig = (window as any).__env || {};

export const environment = {
  production: false,
  apiUrl: envConfig.apiUrl || 'http://localhost:8000'
};