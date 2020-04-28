import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Category } from './types/Category';
import { SiteMetadata } from './types/SiteMetadata';
import { MdxArticle } from './types/Article';
import styled from './styled';
import Layout from './layouts/Layout';
import CategoryList from './components/CategoryList';
import FeaturedArticles from './components/FeaturedArticles';
import { SEO } from './components/SEO';

type Data = {
  allCategory: {
    nodes: Category[];
  };
  allMdx: {
    edges: {
      node: MdxArticle;
    }[];
  };
  site: {
    siteMetadata: SiteMetadata;
  };
};

const Title = styled('div')`
  text-align: center;
  color: ${(p) => p.theme.palette.primary.contrastText};
  font-size: 1.5em;
  margin-bottom: 0;
`;

const Footer = styled('footer')`
  text-align: center;
  margin: ${(p) => p.theme.spacing(6)}px auto;

  a {
    border-bottom: 2px solid black;
  }
`;

export default function ({
  pageContext,
}: {
  pageContext: { basePath: string };
}) {
  const { basePath } = pageContext;

  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          headline
          footerText
          footerUrl
        }
      }
      allCategory(sort: { fields: order, order: ASC }) {
        nodes {
          id
          name
          description
          slug
          url
          image
        }
      }
      allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              categories
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const categories = data.allCategory.nodes;
  const siteMetadata = data.site.siteMetadata;
  const featuredArticles = data.allMdx.edges.map(
    (edge) => edge.node
  ) as MdxArticle[];

  return (
    <Layout basePath={basePath} styles={{ maxWidth: 950 }}>
      <SEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        siteUrl={siteMetadata.siteUrl}
      />
      <Title>
        <h1>{siteMetadata.headline}</h1>
      </Title>
      <FeaturedArticles articles={featuredArticles} />
      <CategoryList categories={categories} />
      <Footer>
        <a href={siteMetadata.footerUrl}>{siteMetadata.footerText}</a>
      </Footer>
    </Layout>
  );
}
