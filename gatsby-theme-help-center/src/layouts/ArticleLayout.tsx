import React from 'react';
import withRoot from '../withRoot';
import styled from '../styled';
import Stripe from '../components/Stripe';
import Navigation from '../components/Navigation';

const Wrapper = styled('div')`
  max-width: 800px;
  margin: ${(p) => p.theme.spacing(10)}px auto;
  padding: ${(p) => p.theme.spacing(1)}px;

  @media (max-width: 800px) {
    margin: ${(p) => p.theme.spacing(10)}px auto;
  }
`;

const Layout: React.FC<{ basePath: string }> = ({ children, basePath }) => (
  <>
    <Stripe />
    <Navigation basePath={basePath} />
    <Wrapper>{children}</Wrapper>
  </>
);

export default withRoot(Layout);
