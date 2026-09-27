let mapsReady: Promise<void> | null = null;

export function getGoogleMapsApiKey(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() || undefined;
}

export function getGoogleMapsMapId(): string | undefined {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID?.trim() || undefined;
}

export function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('ssr'));
  if (typeof window.google?.maps?.importLibrary === 'function') return Promise.resolve();
  if (mapsReady) return mapsReady;
  mapsReady = new Promise<void>((resolve, reject) => {
    const cb = '__gmapsReady';
    (window as unknown as Record<string, () => void>)[cb] = () => resolve();
    (window as unknown as { gm_authFailure?: () => void }).gm_authFailure = () => {
      window.dispatchEvent(new Event('gmaps:auth-failure'));
      reject(new Error('gm_authFailure'));
    };
    const s = document.createElement('script');
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly&loading=async&callback=${cb}`;
    s.async = true;
    s.dataset.googleMapsLoader = 'true';
    s.onerror = () => {
      mapsReady = null;
      reject(new Error('maps script failed'));
    };
    document.head.appendChild(s);
  });
  return mapsReady;
}

export let mapsAuthFailed = false;
if (typeof window !== 'undefined') {
  window.addEventListener('gmaps:auth-failure', () => {
    mapsAuthFailed = true;
  });
}

/** Loads Maps using the configured public API key env var. */
export function loadGoogleMapsFromEnv(): Promise<void> {
  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    return Promise.reject(new Error('Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'));
  }
  return loadGoogleMaps(apiKey);
}
