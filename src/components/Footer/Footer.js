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
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">About easyBuy</a></li>
                            <li><a href="/">Investor Relations</a></li>
                            <li><a href="/">easyBuy Devices</a></li>
                            <li><a href="/">easyBuy Science</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">Make Money with Us</h3>
                        <ul>
                            <li><a href="/">Sell products on easyBuy</a></li>
                            <li><a href="/">Sell on easyBuy Business</a></li>
                            <li><a href="/">Sell apps on easyBuy</a></li>
                            <li><a href="/">Become an Affiliate</a></li>
                            <li><a href="/">Advertise Your Products</a></li>
                            <li><a href="/">Self-Publish with Us</a></li>
                            <li><a href="/">Host an easyBuy Hub</a></li>
                            <li><a className="nav-a-last" href="/"><i><BiChevronRight /></i> See More Make Money with Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">easyBuy Payment Products</h3>
                        <ul>
                            <li><a href="/">easyBuy Business Card</a></li>
                            <li><a href="/">Shop with Points</a></li>
                            <li><a href="/">Reload Your Balance</a></li>
                            <li><a href="/">easyBuy Currency Converter</a></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h3 className="footer-links-col-header">Let Us Help You</h3>
                        <ul>
                            <li><a href="/">Amazon and COVID-19</a></li>
                            <li><a href="/">Your Account</a></li>
                            <li><a href="/">Your Orders</a></li>
                            <li><a href="/">Shipping Rates & Policies</a></li>
                            <li><a href="/">Returns & Replacements</a></li>
                            <li><a href="/">Manage Your Content and Devices</a></li>
                            <li><a href="/">Amazon Assistant</a></li>
                            <li><a href="/">Help</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer