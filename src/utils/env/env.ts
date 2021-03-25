
export function isDevMode(): boolean {
  return process.env.NODE_ENV !== 'production'
}