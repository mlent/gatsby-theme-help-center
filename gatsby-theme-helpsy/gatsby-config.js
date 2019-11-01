module.exports = {
  siteMetadata: {
    title: "Helpsy Support Theme",
    description: "A support center theme for Gatsby.",
    siteUrl: "https://mlent.github.io/supportsy",
    logoUrl: "/images/logo.png"
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "src/data" }
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: { typeName: "Category" }
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: { injectFirst: true }
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet"
  ]
};
