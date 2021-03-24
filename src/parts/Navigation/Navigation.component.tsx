import { useState, useEffect } from "react";
import { Dropdown } from "antd";
import { useLocation } from "react-router";

import S from "./Navigation.styles";

const menu = (
  <S.Menu>
    <S.MenuItem>
      <S.Link to="/pricing">Pricing</S.Link>
    </S.MenuItem>
    <S.MenuItem>
      <S.Link to="/explain">How it works</S.Link>
    </S.MenuItem>
    <S.MenuItem>
      <S.Link to="/careers">Careers</S.Link>
    </S.MenuItem>
  </S.Menu>
);

const Navigation = () => {
  const location = useLocation();
  const [moreActive, setMoreActive] = useState(false);

  useEffect(() => {
    setMoreActive(false);
  }, [location]);

  return (
    <S.Wrapper>
      <S.Content>
        <S.LogoHolder>
          <S.Link to="/">
            <S.LogoFull id="logo-full" />
            <S.Logo id="logo" />
          </S.Link>
        </S.LogoHolder>
        <S.Actions>
          <S.ActionItem forceActive={false}>
            <S.Link to="/blog">Blog</S.Link>
          </S.ActionItem>
          <S.ActionItem forceActive={false}>
            <S.Link to="/services">Services</S.Link>
          </S.ActionItem>
          <Dropdown
            onVisibleChange={(visible: boolean) => setMoreActive(visible)}
            arrow
            overlay={menu}
            placement="bottomRight"
          >
            <S.ActionItem forceActive={moreActive}>
              More <S.Down />
            </S.ActionItem>
          </Dropdown>
          <S.Link to={"/auth"}>
            <S.Join>Sign up</S.Join>
          </S.Link>
        </S.Actions>
      </S.Content>
    </S.Wrapper>
  );
};

export default Navigation;
