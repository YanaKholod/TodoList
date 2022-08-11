import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import CreateTodo from "./pages/CreateTodo";
import EditTodo from "./pages/EditTodo";
import Statics from "./pages/Statics";
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
            <Route path="/" exact={true} element={<HomePage />} />
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
