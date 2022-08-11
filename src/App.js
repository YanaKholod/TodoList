import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Main from "./components/Main/Main";
import CreateTodo from "./components/Main/CreateTodo";
import EditTodo from "./components/Main/EditTodo";
import Statics from "./components/Main/Statics";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">
          <Menu />
        </div>
        <div className="content">
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
