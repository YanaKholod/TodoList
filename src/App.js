import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Main from "./components/Main";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import Statics from "./components/Statics";
import s from "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className={s.app}>
        <Menu />
        <div
          className={s.content}
          style={{
            backgroundColor: "rgba(116, 10, 114, 0.609)",
          }}
        >
          <Routes>
            <Route path="/" exact={true} element={<Main />} />
            <Route path="/create" element={<CreateTodo />} />
            <Route path="/edit" element={<EditTodo />} />
            <Route path="/statics" element={<Statics />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
