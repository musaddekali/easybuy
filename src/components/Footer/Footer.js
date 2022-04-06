import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-links-container">
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">Get to Know Us</h3>
                        <ul>
                            <li><Link to="#">Careers</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">About easyBuy</Link></li>
                            <li><Link to="#">Investor Relations</Link></li>
                            <li><Link to="#">easyBuy Devices</Link></li>
                            <li><Link to="#">easyBuy Science</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">Make Money with Us</h3>
                        <ul>
                            <li><Link to="#">Sell products on easyBuy</Link></li>
                            <li><Link to="#">Sell on easyBuy Business</Link></li>
                            <li><Link to="#">Sell apps on easyBuy</Link></li>
                            <li><Link to="#">Become an Affiliate</Link></li>
                            <li><Link to="#">Advertise Your Products</Link></li>
                            <li><Link to="#">Self-Publish with Us</Link></li>
                            <li><Link to="#">Host an easyBuy Hub</Link></li>
                            <li><Link to="/" className="nav-a-last"><i><BiChevronRight /></i> See More Make Money with Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">easyBuy Payment Products</h3>
                        <ul>
                            <li><Link to="#">easyBuy Business Card</Link></li>
                            <li><Link to="#">Shop with Points</Link></li>
                            <li><Link to="#">Reload Your Balance</Link></li>
                            <li><Link to="#">easyBuy Currency Converter</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">Let Us Help You</h3>
                        <ul>
                            <li><Link to="#">Amazon and COVID-19</Link></li>
                            <li><Link to="#">Your Account</Link></li>
                            <li><Link to="#">Your Orders</Link></li>
                            <li><Link to="#">Shipping Rates & Policies</Link></li>
                            <li><Link to="#">Returns & Replacements</Link></li>
                            <li><Link to="#">Manage Your Content and Devices</Link></li>
                            <li><Link to="#">Amazon Assistant</Link></li>
                            <li><Link to="#">Help</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer