import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Main from "./components/Main";
import CreateTodo from "./components/CreateTodo";
import EditTodo from "./components/EditTodo";
import Statics from "./components/Statics";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Menu />
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
