import Shoppingmallnavbar from './shoppingmallnavbar';
// ...
import './header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Mobiledisplayproducts from './mobiledisplayproducts';

const Header = () => {
  return (
    <header>
       <div className="nav-area">
        <Shoppingmallnavbar />
        
      </div>
      <div className='mobiledisplayproducts'>
         <Mobiledisplayproducts/>
      </div>
       <div className="mainsellonfindam">
        <Link to="/signupformforuser" className="sellonfindam">
           Sell On Find Am
        </Link>
      </div>
      <div className='shopping-cart'>
      <Link to="/signupfromcart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} className="icon-large"/>
        </Link>
      </div>
    </header>
  );
};

export default Header;
