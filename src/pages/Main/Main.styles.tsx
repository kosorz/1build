import styled from "styled-components";

import { ReactComponent as PatternBase } from "../../assets/pattern.svg";

import media from "../../styling/media";
import { pixelize } from "../../util/fns";

const Wrapper = styled.section`
  position: relative;
  padding: ${({ theme }) => pixelize(theme.spacing.small)};
  padding-top: ${({ theme }) => pixelize(5 * theme.spacing.base)};
  color: ${({ theme }) => theme.color.text};
  font-family: "Poppins", "Open Sans", sans-serif;

  ${media.tablet`
    padding-top: 0;
  `};
`;

const Content = styled.article`
  margin: auto;
  max-width: ${({ theme }) => pixelize(theme.uiDimensions.contentWidth)};
  display: flex;
  flex-direction: row;

  ${media.tablet`
    flex-wrap: wrap;
    padding-top: 0;
  `};
`;

const Pattern = styled(PatternBase)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const S = {
  Wrapper,
  Content,
  Pattern,
};

export default S;
