import React from "react";
import { graphql } from "gatsby";
import { Card, CardContent } from "@material-ui/core";
import { Category } from "../types/Category";
import Layout from "../layouts/Layout";

export const query = graphql`
  query($categoryId: String!) {
    category(id: { eq: $categoryId }) {
      name
      url
      slug
    }
  }
`;

export default function({ data }: { data: { category: Category } }) {
  const { category } = data;

  return (
    <Layout>
      <Card>
        <h1>{category.name}</h1>
      </Card>
    </Layout>
  );
}
