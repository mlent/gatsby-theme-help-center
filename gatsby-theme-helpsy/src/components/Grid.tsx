import styled from "../styled";

const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${p => p.theme.spacing(3)}px;
  grid-row-gap: ${p => p.theme.spacing(4)}px;

  @media (max-width: 600px) {
    grid-column-gap: ${p => p.theme.spacing(1)}px;
    grid-row-gap: ${p => p.theme.spacing(2)}px;
  }
`;

export default Grid;
