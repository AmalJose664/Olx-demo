import React, { useContext,  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {getAuth,signOut} from '../../firebase/config'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';

function Header() {
	const navigate = useNavigate()
	const {user} = useContext(AuthContext)
	const auth = getAuth()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? "Hi  "+user.displayName : <Link to="/login">Log in</Link>}
          <hr />
		  
        </div>
		{user && <span style={{cursor:"pointer"}} onClick={ ()=>{
			signOut(auth).then(()=>{
				navigate('/login')
			}).catch(err=>alert(err.message))
		} }>Log out</span> }
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{navigate('/create')}}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
