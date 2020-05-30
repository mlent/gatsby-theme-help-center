import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadata } from '../types/SiteMetadata';
import { CustomHead } from './CustomHead';

type Data = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

const injectGoogleAnalytics = (measurementId: string) => `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', '${measurementId}', { anonymize_ip: true, allowAdFeatures: false });
`;

export const SEO = ({
  title,
  description,
  image,
  socialSharingImage,
  siteUrl,
  pathname,
  isArticle = false,
  publishedDate
}: {
  title?: string;
  description?: string;
  image?: string;
  socialSharingImage?: string;
  siteUrl: string;
  pathname?: string;
  isArticle?: boolean;
  publishedDate?: string;
}) => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          htmlLang
          contentLang
          description
          siteUrl
          siteName
          faviconUrl
          facebookUrl
          socialSharingImageUrl
          titleTemplate
          twitter
          googleTagManagerId
          googleAnalyticsMeasurementId
        }
      }
    }
  `);

  const {
    htmlLang,
    contentLang,
    title: defaultTitle,
    description: defaultDescription,
    siteUrl: defaultUrl,
    titleTemplate,
    faviconUrl,
    facebookUrl,
    socialSharingImageUrl: defaultSocialSharingImageUrl,
    googleTagManagerId,
    googleAnalyticsMeasurementId,
    twitter,
    siteName
  } = data.site.siteMetadata;

  const img = socialSharingImage || image || defaultSocialSharingImageUrl;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${img}`,
    url: `${siteUrl || defaultUrl}${pathname || ''}/`
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={seo.title !== defaultTitle ? titleTemplate : '%s'}
      >
        <html lang={htmlLang} />
        <meta charSet="utf-8" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta httpEquiv="content-language" content={contentLang} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        <meta property="og:site_name" content={siteName} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.url && <link rel="canonical" href={seo.url} />}
        {isArticle && <meta property="og:type" content="article" />}
        {isArticle && <meta property="article:author" content={facebookUrl} />}
        {isArticle && (
          <meta property="article:published_time" content={publishedDate} />
        )}

        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        {twitter && <meta name="twitter:creator" content={twitter} />}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <link rel="shortcut icon" href={faviconUrl} />
        <link rel="canonical" href={seo.url} />
        {googleTagManagerId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagManagerId}`}
          />
        )}
        {googleAnalyticsMeasurementId && (
          <script>{injectGoogleAnalytics(googleAnalyticsMeasurementId)}</script>
        )}
      </Helmet>
      <CustomHead />
    </>
  );
};
