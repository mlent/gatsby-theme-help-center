module.exports = {
  siteMetadata: {
    title: 'Helpsy Theme',
    titleTemplate: '%s · Helpsy Theme',
    description: 'A help center theme for Gatsby.',
    siteUrl: 'https://mlent.github.io/gatsby-theme-helpsy',
    siteName: 'Helpsy Theme · A Help Center Theme for Gatsby',
    logoUrl: '/images/logo.png',
    faviconUrl: '/images/favicon.png',
    socialSharingImageUrl: '/images/social-sharing-default.png',
    twitter: '@monicalent',
    facebookUrl: 'https://www.facebook.com',
    ctaButtonText: 'Open on GitHub',
    ctaButtonUrl: 'https://github.com/mlent/helpsy',
    linkText: 'See demo',
    linkUrl: 'https://mlent.github.io/helpsy',
    headline: 'How can we be helpful?',
    footerText: 'Back to main website',
    footerUrl: 'https://monicalent.com',
    googleTagManagerId: '',
    googleAnalyticsMeasurementId: '',
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
      options: { typeName: 'Category', path: 'src/data/categeories' },
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
