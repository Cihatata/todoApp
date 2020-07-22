import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Navbar.scss';

class Navbar extends PureComponent {
  render() {
    const { showForm } = this.props;
    return (
      <header className="header">
        <div className="header__logo">KodTodo</div>
        <nav className="header__menu">
          <button
            value="ifClickEvent"
            onClick={showForm}
            type="button"
            className="header__menu--button"
            name="ifClickEvent"
          >
            Etkinlik Ekle
          </button>
          <button
            onClick={showForm}
            value="ifClickGroup"
            name="ifClickGroup"
            type="button"
            className="header__menu--button"
          >
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

const mapStateToProps = (state) => {
  return {
    // ifClickEvent: state.ifClickEvent,
    // ifClickGroup: state.ifClickGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: (e) =>
      dispatch({
        type: 'SHOW_FORM',
        name: e.target.name,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
