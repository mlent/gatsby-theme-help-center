import React from "react";
import styled from "../styled";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Category } from "../types/Category";

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${p => p.theme.spacing(3)}px;
  grid-row-gap: ${p => p.theme.spacing(4)}px;

  & > div {
    height: 250px;
  }
`;

const CategoryList: React.FC<{ categories: Category[] }> = ({ categories }) => (
  <Grid>
    {categories.map(category => (
      <Card key={category.slug}>
        <CardContent>
          <Typography variant="h5" component="h2" paragraph>
            <a href={category.url}>{category.name}</a>
          </Typography>
          <Typography variant="body1" component="p">
            {category.description}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Grid>
);

export default CategoryList;
