import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../styles/Navbar.scss';

class Navbar extends PureComponent {
  render() {
    const { showForm } = this.props;
    return (
      <header className="header">
        <div className="header-logo">KodTodo</div>
        <nav className="header-menu">
          <button
            onClick={() => showForm()}
            type="button"
            className="header-menu-button"
          >
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
Navbar.propTypes = {
  showForm: PropTypes.func.isRequired,
};
export default Navbar;
