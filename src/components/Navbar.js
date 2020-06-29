import React, { PureComponent } from 'react';
import '../styles/Navbar.scss';

class Navbar extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header-logo">KodTodo</div>
        <nav className="header-menu">
          <button type="button" className="header-menu-button">
            Etkinlik Ekle
          </button>
          <button type="button" className="header-menu-button">
            Grup Ekle
          </button>
        </nav>
      </header>
    );
  }
}

export default Navbar;
