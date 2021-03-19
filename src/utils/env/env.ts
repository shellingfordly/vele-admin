
/**
 * @description: Is it a development mode
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return process.env.NODE_ENV !== 'production'
}