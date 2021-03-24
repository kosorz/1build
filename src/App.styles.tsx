import styled from "styled-components";
import media from "./styling/media";
import { pixelize } from "./util/fns";

const DummyPage = styled.nav`
    text-align: center;
    padding: 370px 0;
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => pixelize(theme.fontSize.headline)};

    ${media.phone`
        padding: 300px 0;
    `};
`;

const S = {
    DummyPage
  };

export default S;