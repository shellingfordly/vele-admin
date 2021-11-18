import { warn } from "/@/utils/help/log";

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_APP_TITLE: string;
  // Service interface url
  VITE_API_URL: string;
  // Service interface url prefix
  VITE_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_APP_SHORT_NAME: string;
  // Upload url
  VITE_UPLOAD_URL?: string;
}

export const getConfigFileName = (env: Record<string, any>) => {
  return `__PRODUCTION__${env.VITE_APP_SHORT_NAME || "__APP"}__CONF__`
    .toUpperCase()
    .replace(/\s/g, "");
};

export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

export function getAppEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = (isDevMode()
    ? // Get the global configuration (the configuration will be extracted independently when packaging)
      (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any] || {}) as unknown as GlobEnvConfig;

  return ENV;
}

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_APP_TITLE,
    VITE_API_URL,
    VITE_APP_SHORT_NAME,
    VITE_API_URL_PREFIX,
    VITE_UPLOAD_URL,
  } = getAppEnvConfig();

  if (!/[a-zA-Z\_]*/.test(VITE_APP_SHORT_NAME)) {
    warn(
      `VITE_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`
    );
  }

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_APP_TITLE,
    apiUrl: VITE_API_URL,
    shortName: VITE_APP_SHORT_NAME,
    urlPrefix: VITE_API_URL_PREFIX,
    uploadUrl: VITE_UPLOAD_URL,
  };
  return glob as Readonly<GlobConfig>;
};
