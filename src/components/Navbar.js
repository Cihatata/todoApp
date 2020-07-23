import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I from 'immutable';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

class Navbar extends PureComponent {
  render() {
    console.log('nav', window.location.pathname);
    const { showForm, navbarButtons, navbarButtonsEvent } = this.props;
    return (
      <header className="header">
        <div className="header__logo">KodTodo</div>
        <nav className="header__menu">
          {navbarButtons ? (
            <Link onClick={navbarButtonsEvent} to="/">Ana Sayfa</Link>
          ) : (
            <>
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
            </>)
        }
        </nav>
      </header>
    );
  }
}
Navbar.propTypes = {
  showForm: PropTypes.func.isRequired,
  navbarButtons: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    navbarButtons: I.Map(state).get('navbarButtons', false),
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
    navbarButtonsEvent: () => 
      dispatch({
        type: 'NAVBAR_BUTTONS',
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
