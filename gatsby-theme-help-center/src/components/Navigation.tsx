import React from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SiteMetadata } from '../types/SiteMetadata';
import { MdxArticle } from '../types/Article';
import styled, { css } from '../styled';
import { useMediaQuery } from '../hooks/useMediaQuery';

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

const NavBarInner = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'left center right';
  align-items: center;
  height: 60px;
  color: ${(p) => p.theme.palette.primary.contrastText};
  transition: 0.7s;
  padding: ${(p) => p.theme.spacing(4)}px ${(p) => p.theme.spacing(4)}px;

  a {
    transition: none;
  }

  @media (max-width: 800px) {
    padding: 0 ${(p) => p.theme.spacing(1)}px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'left right'
      'center center';

    & > div {
      padding-top: ${(p) => p.theme.spacing(2)}px;
    }
  }
`;

const RightColumn = styled('div')`
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

const Navigation = ({ basePath }: { basePath: string }) => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          logoUrl
          ctaButtonUrl
          ctaButtonText
          linkUrl
          linkText
          searchText
          logoLabel
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
    logoUrl,
    logoLabel,
    searchText,
    ctaButtonUrl,
    ctaButtonText,
    linkUrl,
    linkText,
  } = data.site.siteMetadata;

  const {
    allMdx: { edges },
  } = data;

  const searchOptions: AutocompleteOption[] = edges
    .map((e) => ({
      slug: e.node.fields.slug,
      title: e.node.frontmatter.title,
    }))
    .sort((a, b) => -b.title.localeCompare(a.title));

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <div style={{ zIndex: 100, width: '100%' }}>
      <NavBarInner>
        <div
          style={{ gridArea: 'left', display: 'flex', alignItems: 'center' }}
        >
          <Link to={basePath} style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logoUrl}
              height={isMobile ? '20px' : '30px'}
              title={title}
              alt={title}
            />
            <div style={{ marginLeft: '12px' }}>{logoLabel}</div>
          </Link>
        </div>
        <div style={{ textAlign: 'center', gridArea: 'center' }}>
          <Autocomplete
            options={searchOptions}
            getOptionLabel={(option: AutocompleteOption) => option.title}
            onChange={(_, value: AutocompleteOption) => {
              navigate(value.slug);
            }}
            classes={{
              paper: css(() => ({
                boxShadow:
                  '0px 1px 5px 1px rgba(0,0,0,0.05), 2px 5px 9px 2px rgba(0,0,0,0.01)',
              })),
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={searchText}
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    focused: css((t) => ({
                      color: `${t.palette.primary.contrastText} !important`,
                    })),
                    root: css((t) => ({
                      color: t.palette.primary.contrastText,
                    })),
                  },
                }}
                classes={{
                  root: css((t) => ({
                    input: {
                      color: t.palette.primary.contrastText,
                    },
                    fieldset: {
                      borderColor: t.palette.primary.contrastText,
                    },
                    button: { color: t.palette.primary.contrastText },
                  })),
                }}
                fullWidth
              />
            )}
          />
        </div>
        <RightColumn style={{ gridArea: 'right' }}>
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener"
            style={{ display: 'inline-block', marginRight: '12px' }}
          >
            {linkText}
          </a>
          <a href={ctaButtonUrl} target="_blank" rel="noopener">
            <CtaButton variant="contained" size={isMobile ? 'small' : 'medium'}>
              {ctaButtonText}
            </CtaButton>
          </a>
        </RightColumn>
      </NavBarInner>
    </div>
  );
};

export default Navigation;
