import styled, { css } from "styled-components";
import { Menu as MenuBase } from "antd";
import { Link as LinkBase } from "react-router-dom";

import { ReactComponent as LogoFullIcon } from "../../assets/logo-full.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as DownIcon } from "../../assets/down.svg";

import media from "../../styling/media";
import { pixelize } from "../../util/fns";
import { Theme } from "../../styling/theme";

const clickable = css`
  cursor: pointer;
`;

const Wrapper = styled.nav`
  width: 100%;
  height: ${({ theme }) => pixelize(theme.uiDimensions.menuHeight)};
  border-bottom: 3px solid ${({ theme }) => theme.color.dividing};
  position: sticky;
  background: ${({ theme }) => theme.color.pageBackground};
  top: 0;
  z-index: 1;
  font-family: "Open Sans", "Poppins", sans-serif;
`;

const Content = styled.div`
  max-width: ${({ theme }) => pixelize(theme.uiDimensions.menuContentWidth)};
  padding: ${({ theme }) => pixelize(theme.spacing.small)};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const LogoHolder = styled.div`
  ${clickable};
`;

const LogoFull = styled(LogoFullIcon)`
  ${media.phone`
    display: none;
  `};
`;

const Logo = styled(LogoIcon)`
  display: none;

  ${media.phone`
    display: block;
  `};
`;

const Down = styled(DownIcon)`
  margin: 0 ${({ theme }) => pixelize(theme.spacing.base)};

  ${media.phone`
    margin: 0;
    margin-left: ${({ theme }: { theme: Theme }) =>
      pixelize(theme.spacing.small)};
  `};
`;

const Actions = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  display: flex;
  position: relative;
  align-items: center;
`;

const ActionItem = styled.div<{ forceActive: boolean }>`
  ${clickable}
  font-weight: 600;
  font-size: ${({ theme }) => pixelize(theme.fontSize.normal)};
  letter-spacing: 0.02em;
  color: ${({ forceActive, theme }: { theme: Theme; forceActive: boolean }) =>
    forceActive ? theme.color.primary : "auto"};
  display: flex;
  align-items: center;

  & + & {
    margin-left: ${({ theme }) => pixelize(theme.spacing.base)};

    ${media.phone`
      margin-left: ${({ theme }: { theme: Theme }) =>
        pixelize(theme.spacing.small)};
    `};
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Menu = styled(MenuBase)`
  border-radius: ${({ theme }) => pixelize(theme.borderRadius.base)};
  padding-top: 12px;
  padding-right: 72px;
  padding-left: 24px;
  padding-bottom: 24px;
`;

const MenuItem = styled(Menu.Item)`
  &:hover {
    a {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const Link = styled(LinkBase)`
  color: ${({ theme }) => theme.color.text};
`;

const Join = styled.button`
  ${clickable}
  border-radius: ${({ theme }) => pixelize(theme.uiDimensions.buttonHeight)};
  height: ${({ theme }) => pixelize(theme.uiDimensions.buttonHeight)};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => pixelize(2 * theme.spacing.small)} ${({ theme }) => 
    pixelize(2.5 * theme.spacing.base)};
  margin-left: ${({ theme }) => pixelize(3 * theme.spacing.base)};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.color.primary} 0%,
    ${({ theme }) => theme.color.primaryGradientCompletion} 100%
  );
  text-transform: uppercase;
  letter-spacing: 0.17em;
  border: 0;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => pixelize(theme.fontSize.small)};

  ${media.phone`
    margin-left: ${({ theme }: { theme: Theme }) =>
      pixelize(theme.spacing.small)};
    padding: ${({ theme }: { theme: Theme }) =>
      pixelize(theme.spacing.small)} ${({ theme }: { theme: Theme }) =>
    pixelize(theme.spacing.base)};
  `};

  &:hover {
    filter: contrast(150%);
  }
`;

const S = {
  Wrapper,
  Content,
  LogoHolder,
  LogoFull,
  Logo,
  Down,
  Actions,
  ActionItem,
  Menu,
  MenuItem,
  Join,
  Link,
};

export default S;
