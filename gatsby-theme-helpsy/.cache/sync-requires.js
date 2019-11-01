const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-home-tsx": hot(preferDefault(require("/opt/affilimate/help/gatsby-theme-helpsy/src/home.tsx"))),
  "component---src-templates-category-tsx": hot(preferDefault(require("/opt/affilimate/help/gatsby-theme-helpsy/src/templates/category.tsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/opt/affilimate/help/gatsby-theme-helpsy/.cache/dev-404-page.js")))
}

