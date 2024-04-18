import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import NoPage from "./pages/NoPage";
import "./index.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} className="layout">
          <Route index element={<Home />} className="home" />
          <Route path="posts" element={<Posts />} className="posts" />
          <Route path="Users" element={<Users />} className="users" />
          <Route path="*" element={<NoPage />} className="no-page" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);