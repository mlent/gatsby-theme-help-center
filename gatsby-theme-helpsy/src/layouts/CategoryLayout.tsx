import React from "react";
import withRoot from "../withRoot";
import styled from "../styled";
import Stripe from "../components/Stripe";
import Navigation from "../components/Navigation";

const Wrapper = styled("div")`
  max-width: 800px;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => (
  <>
    <Stripe />
    <Navigation />
    <Wrapper>{children}</Wrapper>
  </>
);

export default withRoot(Layout);
