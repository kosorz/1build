import styled from "styled-components";
import { pixelize } from "../../util/fns";

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.color.footerBackground};
  min-height: ${({ theme }) => pixelize(theme.uiDimensions.minFooterHeight)};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => pixelize(theme.fontSize.subHeadline)};
`;

const S = {
  Wrapper,
};

export default S;
