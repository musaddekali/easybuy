import { BiLocationPlus, BiSearch, BiCart, BiFlag, BiChevronDown } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-belt container-fluid">
      <div className="nav-left">
        <div className="nav-logo">
          <a href="/" className="logo">
            <h3>easyBuy</h3>
          </a>
        </div>
        <div className="nav-global-location">
          <span className="ngl-icon">
            <BiLocationPlus />
          </span>
          <div className="ngl-ingress">
            <span className="nav-line-1">Deliver to</span>
            <span className="nav-line-2">Bangladesh</span>
          </div>
        </div>
      </div>
      <div className="nav-fill">
        <div className="nav-search">
          <form className="nav-search-bar-form">
            <div className="nav-left">
              <div className="nav-search-dropdown-card">
                <div className="nav-search-facade">
                  <span className="nav-search-label">All</span>
                  <i className="nav-icon">
                    <BiChevronDown />
                  </i>
                </div>
                <select className="nav-search-select-dropdown" name="product-category">
                  <option value="all">All Departments</option>
                  <option value="grossery">Gorssery</option>
                  <option value="electronic">Electronic</option>
                  <option value="beauty">Mans fashion</option>
                  <option value="beauty">Book</option>
                  <option value="beauty">Beauty and personal care</option>
                  <option value="beauty">Atrs</option>
                  <option value="beauty">Beauty</option>
                  <option value="beauty">Computer</option>
                  <option value="beauty">Leptop</option>
                  <option value="beauty">Girl's fashion</option>
                  <option value="beauty">Toys & Game</option>
                  <option value="beauty">Softwere</option>
                </select>
              </div>
            </div>
            <div className="nav-fill">
              <div className="nav-search-field">
                <input type="text" className="nav-input" />
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-search-submit">
                <input type="submit" value="Go" className="nav-search-submit-btn" />
                <span className="nav-search-submit-icon">
                  <BiSearch />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-tools">
          <div className="nav-a" id="selectLanguage" aria-label='Select a language'>
            <div className="nav-select-language-container">
              <span className="nav-select-lang-icon">
                <BiFlag />
              </span>
              <select className="nav-select-language" name="language" aria-describedby="selectLanguage">
                <option value="us">English</option>
                <option value="frk">Fanch</option>
                <option value="bd">Bangla</option>
                <option value="in">Hindi</option>
                <option value="ur">Urdu</option>
                <option value="jp">Japan</option>
              </select>
            </div>
          </div>
          <a href="/" className="nav-a nav-link-accountList">
            <span className="nav-line-1">Hello, Login</span>
            <span className="nav-line-2">Account & Lists  <BiChevronDown /></span>
          </a>
          <a href="/" className="nav-a">
            <span className="nav-line-1">Returns</span>
            <span className="nav-line-2">& Orders</span>
          </a>
          <a href="/" className="nav-a" id="nav-cart" aria-label="cart">
            <div className="nav-cart-count-container">
              <span className="nav-cart-count" id="progressive-content">8</span>
              <span className="nav-cart-icon">
                <BiCart />
              </span>
            </div>
            <div className="nav-cart-text-container">Cart</div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;