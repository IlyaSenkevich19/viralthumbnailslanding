/** Tiny inline bootstrap so early engagement context is queued before gtm.js loads. */
export function GtmDataLayerBootstrap() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'landing_context',page_location:location.href,page_referrer:document.referrer});`,
      }}
    />
  );
}
