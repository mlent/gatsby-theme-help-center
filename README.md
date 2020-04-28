This Gatsby theme is designed for creating a knowledge base or help center for your product.

![Gatsby Help Center theme](https://gatbsy-theme-help-center.netlify.app/images/social-sharing-preview.png)

You can see a demo here: https://gatbsy-theme-help-center.netlify.app

# gatsby-theme-help-center :warning: WIP

## Features

- **Categories** - Incl. images, titles, descriptions
- **SEO and Sharing metadata** - Rich previews, social markdup, and SEO metadata
- **MDX** - For writing the articles
- **Customization** - Logo, links, colors, and a few terms
- **Featured articles** - Shown on the home page
- **Related articles** - Which display at the bottom of other articles

## Installation

### Using `gatsby new`

The easiest way to create a new Gatsby site with this theme is to use the [gatsby-starter-help-center](https://github.com/mlent/gatsby-starter-help-center) repo:

```bash
gatsby new https://github.com/mlent/gatsby-starter-help-center
```

### Manually

The most up-to-date docs on installing a Gatsby theme can be found [on the Gatsby website](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/),
but here's a summary using this theme as an example:

```bash
yarn add @mlent/gatsby-theme-help-center

# or

npm install --save @mlent/gatsby-theme-help-center
```

Then edit your `gatsby-config.js` file:

```javascript
module.exports = {
  plugins: [
    {
      resolve: '@mlent/gatsby-theme-help-center',
      options: {
        basePath: '/'
      }
    }
  ]
};
```

## Customization

### Site Metadata

You will want to customize all the site metadata:

```javascript
module.exports = {
  plugins: [
    {
      resolve: '@mlent/gatsby-theme-help-center',
      options: {
        basePath: '/'
      }
    }
  ],
  siteMetadata: {
    // Language settings
    htmlLang: 'en',
    contentLang: 'en-us',

    // Fallback title in case a title is not defined for the page
    title: 'Gatsby Help Center Theme',

    // Aside from the home page, this template will be used for all category/article pages
    titleTemplate: '%s · Gatsby Help Center Theme',

    // Meta description
    description: 'A help center theme for Gatsby.',

    // Base URL for your help center
    siteUrl: 'https://gatbsy-theme-helpsy.netlify.app',

    // Use for the og:site_name property
    siteName: 'A Help Center Theme for Gatsby',

    // Logo that appears in the top left corner
    logoUrl: '/images/logo.png',

    // Text that appears next to the logo
    logoLabel: 'Help Center',

    // Placeholder for search input field
    searchText: 'Search',

    // Your favicon 
    faviconUrl: '/images/favicon.png',

    // Image to be used when sharing articles on social media
    socialSharingImageUrl: '/images/social-sharing-default.png',

    // Your product's twitter handle
    twitter: '@monicalent',

    // Your product's Facebook page
    facebookUrl: 'https://www.facebook.com/yourpage',

    // Text/url for main call-to-action button
    ctaButtonText: 'Open on GitHub',
    ctaButtonUrl: 'https://github.com/mlent/gatsby-theme-help-center',

    // Text/url for secondary link next to call-to-action button
    linkText: 'See demo',
    linkUrl: 'https://gatbsy-theme-help-center.netlify.app/',

    // Main headline
    headline: 'How can we be helpful?',

    // Footer
    footerText: 'Back to main website',
    footerUrl: 'https://monicalent.com',

    // Google Analytics setup (Optional)
    googleTagManagerId: '',
    googleAnalyticsMeasurementId: '',
  }
}
```

> TODO: Organize components so it's easier to extend data in the `<head>` for e.g.
> site verification purposes or adding custom scripts.

### Content: Categories

Create your own YML file at `src/data/categories/data.yml` and provide as many categories
as you'd like in the following format:

```yml
- name: Get Started
  slug: getting-started
  description: Write helpful content about how to start using your product.
  image: /images/getting-started.svg
- name: FAQs
  slug: faqs
  description: Frequently asked questions that your user email you about.
  image: /images/faqs.svg
- name: Tutorials
  slug: tutorials
  description: Step-by-step guides for using various features in your app.
  image: /images/tutorials.svg
```

The illustrations from the sample site are from [Undraw](https://undraw.co/illustrations).

### Content: Articles

Create new articles by creating mdx files in `src/data/pages` and providing the following frontmatter:

```
---
title: Example Article No. 2
description: Example description that will go in the SEO description
author: Monica
categories: ["faqs"]
date: 2019-01-29
featured: true
relatedArticles: ["example-article"]
---

## What's up!

Hello fellow kids, this is another article.
```

> Note: The Author field is currently not used in the layout but may be in the future.

You may associate articles with more than one category and it will appear in both sections.

### Look and feel: Colors

Edit or create a file at `src/@mlent/gatsby-theme-help-center/themes/colors.ts` to customize colors:

```
export const COLORS = {
  // This is used for the header stripe
  primary: {
    light: '#63ccff',
    main: '#4285f4',
    dark: '#006db3',
    contrastText: 'white',
  },
  secondary: {
    light: '#ff8cb3',
    dark: '#c51162',
    main: '#f50057',
    contrastText: 'white',
  },
  success: {
    light: '#ADE488',
    dark: '#237804',
    main: '#52c41a',
    contrastText: 'white',
  },
  pending: {
    light: '#F5E18C',
    dark: '#F6CC1B',
    main: '#F6CC1B',
    contrastText: 'white',
  },
  error: {
    light: '#F7CACA',
    dark: '#DB4D4D',
    main: '#DB4D4D',
    contrastText: 'white',
  },
};

```

`COLORS.primary` is used for the hero stripe and the colors of links. Just be sure to edit the `contrastText` so your
text has enough contrast to be legible depending on the primary colors you choose.

> **NOTE:** The other colors aren't used as part of the theme, but you're encouraged to use them
> for any custom components you end up developing.

If you like these colors and want some alternatives, you can find them on https://ant.design/docs/spec/colors

## Development

If you want to run this repo locally after cloning:

```
yarn
yarn workspace site develop # To run the demo site
yarn workspace @mlent/gatsby-theme-help-center # To run the theme itself
```

## Troubleshooting

## Issues
