import styled from "../styled";

const Stripe = styled("div")`
  width: 100%;
  height: 600px;
  overflow: hidden;
  transform: skewY(-8deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: linear-gradient(
    45deg,
    ${p => p.theme.palette.primary.main} 30%,
    ${p => p.theme.palette.primary.light} 90%
  );
  position: absolute;
  top: -10px;
  z-index: -1;

  @media (max-width: 1100px) {
    height: 820px;
  }

  @media (max-width: 800px) {
    height: 720px;
  }

  @media (max-width: 500px) {
    height: 730px;
  }

  @media (max-width: 400px) {
    height: 650px;
  }
`;

export default Stripe;
