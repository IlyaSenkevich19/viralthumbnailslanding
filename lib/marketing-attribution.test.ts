import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  appendMarketingAttributionToAppUrl,
  captureMarketingAttribution,
  getMarketingAttributionSearch,
} from "./marketing-attribution";

function createStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear() {
      map.clear();
    },
    getItem(key: string) {
      return map.get(key) ?? null;
    },
    key(index: number) {
      return Array.from(map.keys())[index] ?? null;
    },
    removeItem(key: string) {
      map.delete(key);
    },
    setItem(key: string, value: string) {
      map.set(key, value);
    },
  };
}

describe("marketing-attribution", () => {
  beforeEach(() => {
    const localStorage = createStorage();
    vi.stubGlobal("window", {
      localStorage,
      location: { search: "" },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("forwards UTM and Google click ids to app signup URL", () => {
    const href = appendMarketingAttributionToAppUrl(
      "https://app.viralthumblify.com/auth/register",
      "?utm_source=google&utm_medium=cpc&gclid=abc123&gbraid=gb123&wbraid=wb123",
    );
    const url = new URL(href);
    expect(url.searchParams.get("utm_source")).toBe("google");
    expect(url.searchParams.get("utm_medium")).toBe("cpc");
    expect(url.searchParams.get("gclid")).toBe("abc123");
    expect(url.searchParams.get("gbraid")).toBe("gb123");
    expect(url.searchParams.get("wbraid")).toBe("wb123");
  });

  it("does not overwrite params already on the app URL", () => {
    const href = appendMarketingAttributionToAppUrl(
      "https://app.viralthumblify.com/auth/register?utm_source=existing",
      "?utm_source=google",
    );
    expect(new URL(href).searchParams.get("utm_source")).toBe("existing");
  });

  it("persists first-touch gclid and decorates later app URLs with empty search", () => {
    captureMarketingAttribution("?gclid=test&utm_source=google");
    const mergedSearch = getMarketingAttributionSearch("");
    const href = appendMarketingAttributionToAppUrl(
      "https://app.viralthumblify.com/auth/register",
      mergedSearch,
    );
    const url = new URL(href);
    expect(url.searchParams.get("gclid")).toBe("test");
    expect(url.searchParams.get("utm_source")).toBe("google");
  });

  it("keeps first-touch values and fills missing keys from the current URL", () => {
    captureMarketingAttribution("?gclid=first&utm_source=google");
    const mergedSearch = getMarketingAttributionSearch("?gclid=second&utm_medium=cpc");
    const params = new URLSearchParams(mergedSearch.slice(1));
    expect(params.get("gclid")).toBe("first");
    expect(params.get("utm_source")).toBe("google");
    expect(params.get("utm_medium")).toBe("cpc");
  });
});
