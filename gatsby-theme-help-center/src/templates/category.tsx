import React from 'react';
import { Link, graphql } from 'gatsby';
import { Breadcrumbs, Typography, Card, CardContent } from '@material-ui/core';
import { Category } from '../types/Category';
import { MdxArticle } from '../types/Article';
import { SiteMetadata } from '../types/SiteMetadata';
import ArticleList from '../components/ArticleList';
import CategoryLayout from '../layouts/CategoryLayout';
import { SEO } from '../components/SEO';

export const query = graphql`
  query($categoryId: String!) {
    category(id: { eq: $categoryId }) {
      name
      description
      url
      slug
      image
    }
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            description
            categories
            featured
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default function ({
  data,
  pageContext,
}: {
  pageContext: { basePath: string };
  data: {
    site: { siteMetadata: SiteMetadata };
    category: Category;
    allMdx: { edges: { node: MdxArticle }[] };
  };
}) {
  const { basePath } = pageContext;
  const {
    category,
    site: { siteMetadata },
    allMdx,
  } = data;
  const articles = allMdx.edges
    .filter((edge) => edge.node.frontmatter.categories.includes(category.slug))
    .map((edge) => edge.node);

  return (
    <CategoryLayout basePath={basePath}>
      <SEO
        title={category.name}
        description={category.description}
        siteUrl={siteMetadata.siteUrl}
        pathname={`/categories/${category.slug}`}
      />
      <div>
        <Card>
          <CardContent>
            <Breadcrumbs aria-label="Navigation">
              <Link to="/">Home</Link>
              <Typography color="textPrimary">{category.name}</Typography>
            </Breadcrumbs>
            <h1>{category.name}</h1>
            <Typography variant="body1" component="p" paragraph>
              {category.description}
            </Typography>
            <ArticleList articles={articles} />
          </CardContent>
        </Card>
      </div>
    </CategoryLayout>
  );
}
