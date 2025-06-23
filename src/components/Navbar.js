import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="navbar-menu">
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button>Sign Up</button>
      </nav>
    );
  }
}

export default Navbar;
