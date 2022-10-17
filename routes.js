// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
import { Router } from "@layer0/core/router";
import { nextRoutes } from "@layer0/next";

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
  .match("/api/:path*", ({ proxy }) => {
    proxy("api", { path: "/:path" });
  })
  .use(nextRoutes); // automatically adds routes for all files under /pages
