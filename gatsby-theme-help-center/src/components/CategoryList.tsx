import React from 'react';
import styled from '../styled';
import { Link } from 'gatsby';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Category } from '../types/Category';

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${(p) => p.theme.spacing(3)}px;
  grid-row-gap: ${(p) => p.theme.spacing(4)}px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    margin: ${(p) => p.theme.spacing(2)}px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    margin: ${(p) => p.theme.spacing(2)}px;
  }

  & > div {
    text-align: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Img = styled('img')`
  height: 180px;
  margin-bottom: ${(p) => p.theme.spacing(4)}px;

  @media (max-width: 800px) {
    height: 100px;
    margin-bottom: ${(p) => p.theme.spacing(2)}px;
  }
`;

const StyledCardContent = styled(CardContent)`
  padding: ${(p) => p.theme.spacing(8)}px ${(p) => p.theme.spacing(4)}px
    ${(p) => p.theme.spacing(12)}px ${(p) => p.theme.spacing(4)}px;
`;

const CategoryList: React.FC<{ categories: Category[] }> = ({ categories }) => (
  <Grid>
    {categories.map((category) => (
      <Card key={category.slug}>
        <StyledCardContent>
          <Link to={`${category.url}/`}>
            <Img
              src={category.image}
              title={category.name}
              alt={category.name}
            />
          </Link>
          <Typography variant="h5" component="h2" paragraph>
            <Link to={`${category.url}/`}>{category.name}</Link>
          </Typography>
          <Typography variant="body1" component="p">
            {category.description}
          </Typography>
        </StyledCardContent>
      </Card>
    ))}
  </Grid>
);

export default CategoryList;
