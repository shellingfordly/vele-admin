
export function isDevMode(): boolean {
  return process.env.NODE_ENV !== 'production'
}

export function isProdMode(): boolean {
  return import.meta.env.PROD;
}