// This file was automatically added by edgio deploy.
// You should commit this file to source control.
import { CustomCacheKey, Router } from "@edgio/core/router";
import { nextRoutes } from "@edgio/next";

// Remove this line to suppress Next's default behavior of removing trailing slashes via a redirect.
// If trailingSlash: true is set in next.config.js, removing this line will remove the redirect that adds the trailing slash.
nextRoutes.setEnforceTrailingSlash(true);

const ONE_MINUTE = 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

export default new Router()
  // Prevent search engines from indexing permalink URLs
  .noIndexPermalink()
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .match("/api/:path*", ({ proxy, cache, removeUpstreamResponseHeader }) => {
    proxy("api", { path: "/:path" });
    removeUpstreamResponseHeader("cache-control");
    cache({
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_HOUR,
      },
      edge: {
        maxAgeSeconds: ONE_MINUTE,
        staleWhileRevalidateSeconds: ONE_DAY,
      },
      // key: new CustomCacheKey().excludeAllQueryParametersExcept(
      //   "x",
      //   "y",
      //   "operator"
      // ),
    });
  })
  .get("/tables/:table", ({ cache }) => {
    cache({
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_HOUR,
      },
      edge: {
        maxAgeSeconds: ONE_DAY,
        staleWhileRevalidateSeconds: ONE_HOUR,
      },
    });
  })
  // Products - getServerSideProps
  .get("/_next/data/:version/tables/:table.json", ({ cache }) => {
    cache({
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: ONE_DAY,
      },
      edge: {
        maxAgeSeconds: ONE_DAY,
        staleWhileRevalidateSeconds: ONE_HOUR,
      },
    });
  })
  .use(nextRoutes); // automatically adds routes for all files under /pages
