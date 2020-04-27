import React from "react";
import { Helmet } from "react-helmet";

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
  publishedDate,
  googleAnalytics = "UA-134992074-3"
}: {
  title?: string;
  description?: string;
  image?: string;
  socialSharingImage?: string;
  siteUrl: string;
  pathname?: string;
  isArticle?: boolean;
  publishedDate?: string;
  googleAnalytics?: string;
}) => {
  const defaultTitle =
    "Affiliate marketing analytics tool for bloggers · Affilimate";
  const defeaultDescription =
    "Get help for your most common questions about Affilimate, the affiliate analytics and optimization tool for professional bloggers.";
  const titleTemplate = "%s · Affilimate Help Center";
  const twitterUsername = "affilimateio";
  const defaultImage = "/images/social-image.jpg";
  const img = socialSharingImage || image || defaultImage;

  const seo = {
    title: title || defaultTitle,
    description: description || defeaultDescription,
    image: `${siteUrl}${img}`,
    url: `${siteUrl}${pathname || "/"}`
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.title !== defaultTitle ? titleTemplate : "%s"}
    >
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link
        href="https://fonts.googleapis.com/css?family=Lato&display=swap"
        rel="stylesheet"
      />
      <meta name="p:domain_verify" content="7bd87f7fc3b2b4522c006a4b24ac9866" />
      <meta
        property="og:site_name"
        content="Affilimate · Affiliate marketing analytics tool for bloggers"
      />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {isArticle && <meta property="og:type" content="article" />}
      {isArticle && (
        <meta
          property="article:author"
          content="https://www.facebook.com/affilimate/"
        />
      )}
      {isArticle && (
        <meta
          property="article:author"
          content="https://www.facebook.com/affilimate/"
        />
      )}
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
      {twitterUsername && (
        <meta name="twitter:creator" content={`@${twitterUsername}`} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="canonical" href={seo.url} />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-134992074-1"
      />
      <script>{injectGoogleAnalytics(googleAnalytics)}</script>
    </Helmet>
  );
};
