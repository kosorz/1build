import styled from "styled-components";

import media from "../../../../styling/media";
import { pixelize } from "../../../../util/fns";
import { Theme } from "../../../../styling/theme";

const Wrapper = styled.article`
  position: relative;
  flex: 50%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0
    ${({ theme }: { theme: Theme }) => pixelize(4 * theme.spacing.base)}
    ${({ theme }: { theme: Theme }) => pixelize(4 * theme.spacing.base)};

  ${media.tablet`
        flex: 100%;
    `};

  ${media.phone`
      padding: 0 ${({ theme }: { theme: Theme }) =>
        pixelize(theme.spacing.base)} ${({ theme }: { theme: Theme }) =>
    pixelize(2 * theme.spacing.base)};
  `};
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0px 40px 70px -35px #000;

  ${media.phone`
    box-shadow: 0px 40px 20px -35px #000;
  `};
`;

const Lenses = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(/assets/renovation-lenses.svg);
  top: 10px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const S = {
  Wrapper,
  Photo,
  Lenses,
};

export default S;
