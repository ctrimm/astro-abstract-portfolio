/**
 * Get path with base URL
 */
export function getPath(path: string) {
    const base = import.meta.env.BASE_URL;
    // remove trailing slash from base if present to avoid double slashes
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return cleanBase + path;
}
