import S from "./Frame.styles";

const Frame = () => (
  <S.Wrapper>
    <S.Photo src={"/assets/renovation.png"} alt={"renovation"} />
    <S.Lenses />
  </S.Wrapper>
);

export default Frame;
