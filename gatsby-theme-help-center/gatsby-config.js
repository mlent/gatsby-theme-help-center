module.exports = function (themeOptions) {
  return {
    siteMetadata: {
      htmlLang: 'en',
      contentLang: 'en-us',
      title: 'Helpsy Theme',
      titleTemplate: '%s · Helpsy Theme',
      description: 'A help center theme for Gatsby.',
      siteUrl: 'https://gatbsy-theme-help-center.netlify.app',
      siteName: 'Helpsy Theme · A Help Center Theme for Gatsby',
      searchText: 'Search',
      logoUrl: '/images/logo.png',
      logoLabel: 'Help Center',
      faviconUrl: '/images/favicon.png',
      socialSharingImageUrl: '/images/social-sharing-default.png',
      twitter: '@monicalent',
      facebookUrl: 'https://www.facebook.com',
      ctaButtonText: 'Open on GitHub',
      ctaButtonUrl: 'https://github.com/mlent/helpsy',
      linkText: 'See demo',
      linkUrl: 'https://gatbsy-theme-help-center.netlify.app',
      headline: 'How can we be helpful?',
      footerText: 'Back to main website',
      footerUrl: 'https://monicalent.com',
      googleTagManagerId: '',
      googleAnalyticsMeasurementId: ''
    },
    plugins: [
      'gatsby-plugin-typescript',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-highlight-code`,
              options: {
                theme: themeOptions.codeTheme
                  ? themeOptions.codeTheme
                  : 'dracula'
              }
            }
          ]
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: { path: 'src/data' }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: { path: 'src/pages' }
      },
      {
        resolve: 'gatsby-transformer-yaml',
        options: { typeName: 'Category', path: 'src/data/categeories' }
      },
      'gatsby-plugin-material-ui',
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet'
    ]
  };
};
