import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Button } from "@material-ui/core";
import { SiteMetadata } from "../types/SiteMetadata";
import styled from "../styled";

type Data = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

const NavBarInner = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 60px;
  color: #fff;
  transition: 0.7s;
  padding: 0 ${p => p.theme.spacing(2)}px;

  a {
    transition: none;
  }

  @media (max-width: 800px) {
    padding: 0 ${p => p.theme.spacing(1)}px;
    grid-template-columns: 1fr 1fr;
  }
`;

const RightColumn = styled("div")`
  text-align: right;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const Navigation = () => {
  const data: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, siteUrl, logoUrl } = data.site.siteMetadata;

  return (
    <div style={{ zIndex: 100, width: "100%" }}>
      <NavBarInner>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to={siteUrl}>
            <img src={logoUrl} height="20px" title={title} alt={title} />
          </Link>
        </div>
        <RightColumn>
          <Link to="/beta">
            <Button variant="contained" color="secondary" size="small">
              Apply for beta
            </Button>
          </Link>
          <a
            href="https://app.affilimate.io"
            style={{ display: "inline-block", marginLeft: "12px" }}
          >
            Log in
          </a>
        </RightColumn>
      </NavBarInner>
    </div>
  );
};

export default Navigation;
