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
    flex-direction: column;
    justify-content: space-between;
  `,
  SideBar: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
  Content: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      h1 {
        font-size: 23px;
      }
    }
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
