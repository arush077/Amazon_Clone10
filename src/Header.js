import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {

  const[{basket},dispatch]=useStateValue();



  return (
    <div className='header'>

{/* home pe aajana on clicking the header logo */}
<Link to='/'>
      <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
</Link>
    
    <div className="header__search">
        {/* <input className='header__searchInput' type="text" /> */}
        {/* <SearchIcon className='header__searchIcon' /> */}
    </div>

    <div className="header__nav">
        {/* navbar has 3 parts hello orderd prime  */}
        <div className='header__option'>
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">
              <a href='https://www.amazon.in/-/hi/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fgift&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'>Sign in</a></span>
            
            </div>

            <div className='header__option'>
            <span className="header__optionLineOne">Returns</span>
            <Link to='/checkout'>
            <span className="header__optionLineTwo">Orders</span>
            </Link>
            </div>

            <div className='header__option'>
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>


{/* use link tag to link anything with react router dom */}
          <Link to='/checkout'>
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
            </div>
            </Link>
      
    </div>

    </div>
  )
}

export default Header
