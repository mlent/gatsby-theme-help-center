import React from 'react';
import { graphql, Link } from 'gatsby';
import { Breadcrumbs, Typography, Card, CardContent } from '@material-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Category } from '../types/Category';
import { MdxArticle } from '../types/Article';
import { SiteMetadata } from '../types/SiteMetadata';
import ArticleList from '../components/ArticleList';
import Layout from '../layouts/ArticleLayout';
import styled from '../styled';
import { SEO } from '../components/SEO';

type PageQueryData = {
  mdx: MdxArticle;
  allCategory: { nodes: Category[] };
  site: {
    siteMetadata: SiteMetadata;
  };
  allMdx: {
    edges: {
      node: MdxArticle;
    }[];
  };
};

export const pageQuery = graphql`
  query($articleId: String) {
    mdx(id: { eq: $articleId }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        categories
        description
        relatedArticles
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allCategory {
      nodes {
        name
        slug
        url
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

const stripSlug = (slug: string) => {
  const prefix = '/articles/';
  return slug
    .substr(prefix.length)
    .substring(0, slug.length - prefix.length - 1);
};

const RelatedArticlesWrapper = styled('div')`
  border-top: 1px solid #eee;
  margin-top: ${(p) => p.theme.spacing(4)}px;
  padding: ${(p) => p.theme.spacing(4)}px ${(p) => p.theme.spacing(4)}px 0
    ${(p) => p.theme.spacing(4)}px;
  margin-left: -${(p) => p.theme.spacing(4)}px;
  margin-right: -${(p) => p.theme.spacing(4)}px;
`;

const RelatedArticles: React.FC<{ articles: MdxArticle[] }> = ({
  articles,
}) => {
  return (
    <RelatedArticlesWrapper>
      <Typography variant="h5" component="p" paragraph>
        Related Articles
      </Typography>
      <ArticleList articles={articles} />
    </RelatedArticlesWrapper>
  );
};

const A = styled('a')`
  border-bottom: 2px solid ${(p) => p.theme.palette.primary.main};
  color: ${(p) => p.theme.palette.primary.main};
  transition: 0.1s border-bottom linear;
  font-size: inherit;
  line-height: inherit;

  &:hover {
    border-bottom: 4px solid ${(p) => p.theme.palette.primary.main};
  }

  p,
  ol,
  li & {
    font-size: ${(p) => p.theme.typography.body1.fontSize};
    line-height: ${(p) => p.theme.typography.body1.lineHeight};
  }
`;

const Ol = styled('ol')`
  font-size: ${(p) => p.theme.typography.body1.fontSize};
  line-height: ${(p) => p.theme.typography.body1.lineHeight};
`;

const Ul = styled('ul')`
  font-size: ${(p) => p.theme.typography.body1.fontSize};
  line-height: ${(p) => p.theme.typography.body1.lineHeight};
`;

const Code = styled('code')`
  display: block;
  font-family: Consolas, Menlo, Courier, monospace;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: ${(p) => p.theme.spacing(4)}px;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  overflow-x: auto;
`;

const P = styled(Typography)`
  code {
    display: inline-block;
    font-family: Consolas, Menlo, Courier, monospace;
    background-color: #f9f9f9;
    padding: ${(p) => p.theme.spacing(1) / 2}px;
    font-size: 0.9em;
  }
`;

const Blockquote = styled('blockquote')`
  margin: ${(p) => p.theme.spacing(1)}px 0;
  padding: ${(p) => p.theme.spacing(3)}px ${(p) => p.theme.spacing(2)}px;
  background-color: #f9f9f9;
  border-radius: ${(p) => p.theme.shape.borderRadius}px;
  border: 1px dashed #ddd;

  p {
    margin-bottom: 0;
  }
`;

const H1 = styled('h1')`
  margin-top: ${(p) => p.theme.spacing(6)}px;
`;

const H2 = styled('h2')`
  margin-top: ${(p) => p.theme.spacing(6)}px;
`;

const H3 = styled('h3')`
  margin-top: ${(p) => p.theme.spacing(6)}px;
`;

const mdxComponents = {
  a: A,
  p: (props: any) => <P variant="body1" {...props} paragraph />,
  blockquote: Blockquote,
  ol: Ol,
  ul: Ul,
  h1: H1,
  h2: H2,
  h3: H3,
  code: Code,
};

export default function ({ data }: { data: PageQueryData }) {
  const {
    mdx,
    site: { siteMetadata },
    allMdx,
  } = data;
  const { frontmatter, fields } = mdx;
  const { title, description } = frontmatter;
  const categories = data.allCategory.nodes.filter((c) =>
    mdx.frontmatter.categories.includes(c.slug)
  );

  const relatedArticles = allMdx.edges
    .filter(({ node }: { node: MdxArticle }) => {
      if (!frontmatter.relatedArticles) {
        return false;
      }

      const strippedSlug = stripSlug(node.fields.slug);
      return frontmatter.relatedArticles.includes(strippedSlug);
    })
    .map(({ node }: { node: MdxArticle }) => node);

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        pathname={fields.slug}
        siteUrl={siteMetadata.siteUrl}
      />
      <Card>
        <CardContent>
          <Breadcrumbs aria-label="Navigation">
            <Link to="/">Home</Link>
            {categories.map((category) => (
              <Link key={category.url} to={category.url}>
                {category.name}
              </Link>
            ))}
            <Typography color="textPrimary">{title}</Typography>
          </Breadcrumbs>
          <h1>{title}</h1>
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
          {relatedArticles.length > 0 && (
            <>
              <RelatedArticles articles={relatedArticles} />
            </>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
}
