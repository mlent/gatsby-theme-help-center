import { Category } from "./Category";
import { Mdx } from "./Mdx";

export type Article = {
  id: string;
  frontmatter: {
    categories: Category["slug"][];
    title: string;
    description: string;
    date: string;
    featured: boolean;
    relatedArticles: Article["fields"]["slug"][];
  };
  fields: {
    slug: string;
  };
};

export type MdxArticle = Mdx<Article["frontmatter"], Article["fields"]>;
