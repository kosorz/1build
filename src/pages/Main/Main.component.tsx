import Feed from "./parts/Feed/Feed.component";
import Frame from "./parts/Frame/Frame.component";

import S from "./Main.styles";

const Main = () => (
  <S.Wrapper>
    <S.Content>
      <S.Pattern />
      <Frame />
      <Feed />
    </S.Content>
  </S.Wrapper>
);

export default Main;
