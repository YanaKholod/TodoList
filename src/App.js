import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import CreateTodo from "./pages/CreateTodo";
import Statics from "./pages/Statics";
import styled from "styled-components";

const Styled = {
  App: styled.div`
    display: flex;
    height: 100vh;
  `,
  SideBar: styled.div`
    display: flex;
    height: 100%;
  `,
  Content: styled.div`
    display: flex;
    width: 100%;
  `,
};
function App() {
  return (
    <BrowserRouter>
      <Styled.App>
        <Styled.SideBar>
          <Menu />
        </Styled.SideBar>
        <Styled.Content>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/statics" element={<Statics />} />
          </Routes>
        </Styled.Content>
      </Styled.App>
    </BrowserRouter>
  );
}

export default App;
