import { describe, expect, it } from 'vitest';
import { appendMarketingAttributionToAppUrl } from './marketing-attribution';

describe('marketing-attribution', () => {
  it('forwards UTM and gclid to app signup URL', () => {
    const href = appendMarketingAttributionToAppUrl(
      'https://app.viralthumblify.com/auth/register',
      '?utm_source=google&utm_medium=cpc&gclid=abc123',
    );
    const url = new URL(href);
    expect(url.searchParams.get('utm_source')).toBe('google');
    expect(url.searchParams.get('utm_medium')).toBe('cpc');
    expect(url.searchParams.get('gclid')).toBe('abc123');
  });

  it('does not overwrite params already on the app URL', () => {
    const href = appendMarketingAttributionToAppUrl(
      'https://app.viralthumblify.com/auth/register?utm_source=existing',
      '?utm_source=google',
    );
    expect(new URL(href).searchParams.get('utm_source')).toBe('existing');
  });
});
