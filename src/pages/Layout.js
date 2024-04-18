import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css"; // Importowanie pliku CSS

const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Comments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts" className="nav-link" activeClassName="active">Posts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link" activeClassName="active">Users</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
