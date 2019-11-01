// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-home-tsx": () => import("../src/home.tsx" /* webpackChunkName: "component---src-home-tsx" */),
  "component---src-templates-category-tsx": () => import("../src/templates/category.tsx" /* webpackChunkName: "component---src-templates-category-tsx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

