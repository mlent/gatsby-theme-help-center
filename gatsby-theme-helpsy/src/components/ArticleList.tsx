import React from "react";
import { Star as StarIcon } from "react-feather";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";
import { MdxArticle } from "../types/Article";
import styled from "../styled";

const ArticleTitle = styled(Typography)`
  font-weight: ${p => p.theme.typography.fontWeightBold};
`;

const ArticleWrapper = styled("div")`
  margin-left: -${p => p.theme.spacing(4)}px;
  margin-right: -${p => p.theme.spacing(4)}px;
  padding: ${p => p.theme.spacing(4)}px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.03);
  }
`;

const ArticleList: React.FC<{ articles: MdxArticle[] }> = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <Link
          key={article.fields.slug}
          to={article.fields.slug}
          title={article.frontmatter.title}
        >
          <ArticleWrapper>
            <ArticleTitle variant="h6" component="h2">
              {article.frontmatter.title}{" "}
              {article.frontmatter.featured && (
                <StarIcon
                  color="#faad14"
                  style={{ position: "relative", top: "5px" }}
                />
              )}
            </ArticleTitle>
            <Typography variant="body1" component="p">
              {article.frontmatter.description}
            </Typography>
          </ArticleWrapper>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
