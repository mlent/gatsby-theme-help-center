module.exports = {
  siteMetadata: {
    htmlLang: 'en',
    contentLang: 'en-us',
    title: 'Gatsby Help Center Theme',
    titleTemplate: '%s · Gatsby Help Center Theme',
    description: 'A help center theme for Gatsby.',
    siteUrl: 'https://gatbsy-theme-help-center.netlify.app',
    siteName: 'A Help Center Theme for Gatsby',
    logoUrl: '/images/logo.png',
    logoLabel: 'Help Center',
    searchText: 'Search',
    faviconUrl: '/images/favicon.png',
    socialSharingImageUrl: '/images/social-sharing-preview.png',
    twitter: '@monicalent',
    facebookUrl: 'https://www.facebook.com/yourpage',
    ctaButtonText: 'Open on GitHub',
    ctaButtonUrl: 'https://github.com/mlent/gatsby-theme-help-center',
    linkText: 'See demo',
    linkUrl: 'https://gatbsy-theme-help-center.netlify.app',
    headline: 'How can we be helpful?',
    footerText: 'Back to main website',
    footerUrl: 'https://monicalent.com',
    googleTagManagerId: 'UA-164700569-1',
    googleAnalyticsMeasurementId: 'UA-164700569-1'
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: '@mlent/gatsby-theme-help-center',
      options: {
        basePath: '/',
        codeTheme: 'dracula'
      }
    }
  ]
};
