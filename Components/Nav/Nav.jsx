import * as React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="#" className="navbar-item">
              GeoClicker
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="#" className="navbar-item">
                Help
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
