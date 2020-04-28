import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import styled from '../styled';
import { MdxArticle } from '../types/Article';
import Grid from './Grid';

const ArticleWrapper = styled('div')`
  color: ${(p) => p.theme.palette.primary.contrastText};
  padding: ${(p) => p.theme.spacing(3)}px;

  @media (max-width: 600px) {
    padding: 0 ${(p) => p.theme.spacing(2)}px;
  }
`;

const ArticleName = styled(Typography)`
  font-weight: ${(p) => p.theme.typography.fontWeightMedium};
`;

const WrappedGrid = styled(Grid)`
  margin: 0 auto ${(p) => p.theme.spacing(4)}px;
  text-align: center;
  max-width: 700px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedArticles: React.FC<{ articles: MdxArticle[] }> = ({
  articles,
}) => {
  return (
    <WrappedGrid>
      {articles.map((a) => (
        <ArticleWrapper key={a.fields.slug}>
          <ArticleName variant="body1" component="p">
            <Link to={a.fields.slug}>{a.frontmatter.title}</Link>
          </ArticleName>
        </ArticleWrapper>
      ))}
    </WrappedGrid>
  );
};

export default FeaturedArticles;
