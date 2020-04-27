module.exports = {
  siteMetadata: {
    title: 'Helpsy Support Theme',
    description: 'A support center theme for Gatsby.',
    siteUrl: 'https://mlent.github.io/gatsby-theme-helpsy',
    logoUrl: '/images/logo.png',
    ctaButtonText: 'Sign up',
    ctaButtonUrl: 'https://mlent.github.io/#',
    loginLinkText: 'Log in',
    loginLinkUrl: 'https://mlent.github.io/#',
    headline: 'How can we be helpful?',
    footerText: 'Back to main website',
    footerUrl: 'https://monicalent.com',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'src/data' },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'src/pages' },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: { typeName: 'Category' },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: { injectFirst: true },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
  ],
};
