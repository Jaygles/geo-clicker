import * as React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <p className="navbar-item">Geo Clicker</p>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">Item</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
