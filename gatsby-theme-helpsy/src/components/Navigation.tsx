import React from "react";
import { Link, navigate, graphql, useStaticQuery } from "gatsby";
import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { SiteMetadata } from "../types/SiteMetadata";
import { MdxArticle } from "../types/Article";
import styled, { css } from "../styled";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Data = {
  allMdx: {
    edges: {
      node: MdxArticle;
    }[];
  };
  site: {
    siteMetadata: SiteMetadata;
  };
};

const NavBarInner = styled("div")`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: "left center right";
  align-items: center;
  height: 60px;
  color: #fff;
  transition: 0.7s;
  padding: ${p => p.theme.spacing(4)}px ${p => p.theme.spacing(4)}px;

  a {
    transition: none;
  }

  @media (max-width: 800px) {
    padding: 0 ${p => p.theme.spacing(1)}px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "left right"
      "center center";

    & > div {
      padding-top: ${p => p.theme.spacing(2)}px;
    }
  }
`;

const RightColumn = styled("div")`
  text-align: right;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const CtaButton = styled(Button)`
  background-color: white;
  color: black;

  &:hover {
    background-color: #eee;
    color: black;
  }
`;

interface AutocompleteOption {
  title: string;
  slug: string;
}

const Navigation = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          logoUrl
          ctaButtonUrl
          ctaButtonText
          loginLinkUrl
          loginLinkText
        }
      }
      allMdx {
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

  const {
    title,
    siteUrl,
    logoUrl,
    ctaButtonUrl,
    ctaButtonText,
    loginLinkUrl,
    loginLinkText
  } = data.site.siteMetadata;

  const {
    allMdx: { edges }
  } = data;

  const searchOptions: AutocompleteOption[] = edges
    .map(e => ({
      slug: e.node.fields.slug,
      title: e.node.frontmatter.title
    }))
    .sort((a, b) => -b.title.localeCompare(a.title));

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div style={{ zIndex: 100, width: "100%" }}>
      <NavBarInner>
        <div
          style={{ gridArea: "left", display: "flex", alignItems: "center" }}
        >
          <Link to={siteUrl} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoUrl}
              height={isMobile ? "20px" : "30px"}
              title={title}
              alt={title}
            />
            <div style={{ marginLeft: "12px" }}>Help Center</div>
          </Link>
        </div>
        <div style={{ textAlign: "center", gridArea: "center" }}>
          <Autocomplete
            options={searchOptions}
            getOptionLabel={(option: AutocompleteOption) => option.title}
            onChange={(_, value: AutocompleteOption) => {
              navigate(value.slug);
            }}
            classes={{
              paper: css(() => ({
                boxShadow:
                  "0px 1px 5px 1px rgba(0,0,0,0.05), 2px 5px 9px 2px rgba(0,0,0,0.01)"
              }))
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    focused: css(() => ({
                      color: "white !important"
                    })),
                    root: css(() => ({
                      color: "white"
                    }))
                  }
                }}
                classes={{
                  root: css(() => ({
                    input: {
                      color: "white"
                    },
                    fieldset: {
                      borderColor: "white"
                    },
                    button: { color: "white" }
                  }))
                }}
                fullWidth
              />
            )}
          />
        </div>
        <RightColumn style={{ gridArea: "right" }}>
          <a
            href={loginLinkUrl}
            target="_blank"
            rel="noopener"
            style={{ display: "inline-block", marginRight: "12px" }}
          >
            {loginLinkText}
          </a>
          <a href={ctaButtonUrl} target="_blank" rel="noopener">
            <CtaButton variant="contained" size={isMobile ? "small" : "medium"}>
              {ctaButtonText}
            </CtaButton>
          </a>
        </RightColumn>
      </NavBarInner>
    </div>
  );
};

export default Navigation;
