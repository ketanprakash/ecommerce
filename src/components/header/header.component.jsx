import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({currentUser}) => (
  <div className="header">
    <Link to='/'>
      <Logo className="logo"/>
    </Link>
    <div className="options">
      <Link className="option" to='/'>
        HOME
      </Link>
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option" to='/shop'>
        CONTACT  
      </Link>
      {
        currentUser ? 
        <div className ='option' onClick={() => {auth.signOut()}}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    <CartDropdown/>
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(Header);