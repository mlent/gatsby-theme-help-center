import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Category } from "./types/Category";
import { SiteMetadata } from "./types/SiteMetadata";
import Layout from "./layouts/Layout";
import CategoryList from "./components/CategoryList";

type Data = {
  allCategory: {
    nodes: Category[];
  };
  site: {
    siteMetadata: SiteMetadata;
  };
};

export default function() {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      allCategory(sort: { fields: order, order: ASC }) {
        nodes {
          id
          name
          description
          slug
          url
        }
      }
    }
  `);

  const categories = data.allCategory.nodes;
  const siteMetadata = data.site.siteMetadata;

  return (
    <Layout>
      <h1>{siteMetadata.title}</h1>
      <CategoryList categories={categories} />
    </Layout>
  );
}
