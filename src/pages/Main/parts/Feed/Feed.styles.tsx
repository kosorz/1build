import styled, { keyframes } from "styled-components";
import { CursorPagination } from "@zendeskgarden/react-pagination";

import { ReactComponent as ArrowBase } from "../../../../assets/arrow.svg";

import media from "../../../../styling/media";
import { pixelize } from "../../../../util/fns";

const Wrapper = styled.article`
  padding: ${({ theme }) => pixelize(theme.spacing.base)};
  flex: auto;
  flex-grow: 1;
  padding-top: 0;

  ${media.tablet`
    order: -1;
    padding-top: 0;
  `};
`;

const FeedItem = styled.div`
  padding-bottom: ${({ theme }) => pixelize(theme.spacing.base)};
  padding-top: ${({ theme }) => pixelize(theme.spacing.normal)};
  display: flex;
  align-items: center;

  & + & {
    border-top: 2px solid ${({ theme }) => theme.color.dividing};
  }
`;

const FeedItemDecor = styled.div`
  transform: rotate(45deg);
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => pixelize(theme.borderRadius.small)};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const FeedItemIterator = styled.div`
  transform: rotate(-45deg);
  font-size: ${({ theme }) => pixelize(theme.fontSize.small)};
`;

const FeedItemContent = styled.div`
  margin-left: ${({ theme }) => pixelize(theme.spacing.base)};
  flex-direction: column;
`;

const FeedItemTitle = styled.p``;

const FeedItemMeta = styled.p`
  color: ${({ theme }) => theme.color.meta};
  font-size: ${({ theme }) => pixelize(theme.fontSize.copy)};
  text-transform: uppercase;
`;

const Motto = styled.p`
  font-size: ${({ theme }) => pixelize(theme.fontSize.headline)};
  margin-bottom: ${({ theme }) => pixelize(theme.spacing.base)};
  padding-top: ${({ theme }) => pixelize(3 * theme.spacing.base)};
  line-height: 40px;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

const Arrow = styled(ArrowBase)`
  margin-left: 10px;
`;

const animateArrow = keyframes`
 0% { margin-left: 10px; }
 50% { margin-left: 20px; }
 100% { margin-left: 10px; }
`;

const Encouragement = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => pixelize(theme.fontSize.small)};
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;

    ${Arrow} {
      animation: ${animateArrow};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
  }
`;

const Pagination = styled(CursorPagination)`
  color: ${({ theme }) => theme.color.meta};
  display: flex;
  justify-content: flex-start;

  > button {
    color: ${({ theme }) => theme.color.meta};

    &:hover {
      background: ${({ theme }) => theme.color.gray};;
    }

    &:hover:not([disabled]) {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const S = {
  Wrapper,
  FeedItem,
  FeedItemDecor,
  FeedItemIterator,
  FeedItemContent,
  FeedItemMeta,
  FeedItemTitle,
  Motto,
  Encouragement,
  Arrow,
  Pagination,
};

export default S;
