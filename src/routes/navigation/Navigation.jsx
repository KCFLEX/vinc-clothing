import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './Navigation.styles.scss'
import CartIcon from "../../components/cart-icon/CartIcon";
import { UserContext } from "../../contexts/user.context";
import { CartContext, CartProvider } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

const Navigation = () => {
  const { currentUser  } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
         <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
         
          
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>)
              :
             ( <Link className="nav-link" to='/auth'>
                SIGN IN 
              </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
