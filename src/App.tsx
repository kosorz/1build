import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";

import SetUp from "./parts/SetUp/SetUp.component";
import Main from "./pages/Main/Main.component";
import Navigation from "./parts/Navigation/Navigation.component";
import Footer from "./parts/Footer/Footer.component";

import S from "./App.styles";

const App = () => (
  <SetUp>
    <Navigation />
    <Switch>
      <Route path="/careers">
        <S.DummyPage>Careers</S.DummyPage>
      </Route>
      <Route path="/pricing">
        <S.DummyPage>Pricing</S.DummyPage>
      </Route>
      <Route path="/explain">
        <S.DummyPage>How it works</S.DummyPage>
      </Route>
      <Route path="/services">
        <S.DummyPage>Services</S.DummyPage>
      </Route>
      <Route path="/blog">
        <S.DummyPage>Blog</S.DummyPage>
      </Route>
      <Route path="/auth">
        <S.DummyPage>Auth</S.DummyPage>
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
    <Footer />
  </SetUp>
);

export default App;
