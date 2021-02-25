export interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
  samesite?: 'strict' | 'lax' | 'none'
  secure?: boolean
}

export function get(): {[key: string]: string}
export function get(key: string): string
export function set(key: string, value: string, options?: CookieOptions): void
export function remove(key: string, options?: CookieOptions): void
