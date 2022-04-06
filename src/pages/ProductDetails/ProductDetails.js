import { FaStar, FaShoppingCart } from 'react-icons/fa';
import './product-details.css';
import { products } from '../../FakeProduct/fakeProduct';

const ProductDetails = () => {
    const { title, img, desc, price } = products[0];
    return (
        <section className="product-details-wrapper">
            <div className="product-details">
                {/* images area  */}
                <div className="product-details-left">
                    <div className="product-details-img-container">
                        <div className="img-thumbs">
                            <img src={img} alt={title} className="img-thumb img-thumb-active" />
                            <img src={img} alt={title} className="img-thumb" />
                            <img src={img} alt={title} className="img-thumb" />
                            <img src={img} alt={title} className="img-thumb" />
                            <img src={img} alt={title} className="img-thumb" />
                        </div>
                        <div className="img-main">
                            <img src={img} alt={title} />
                        </div>
                    </div>
                </div>
                {/* text area  */}
                <div className="product-details-right">
                    <div className="product-details-text-container">
                        <div className="product-details-text">
                            <h4 className="title">{title}</h4>
                            <div className="rating">
                                <i className="rating-icon"><FaStar /></i>
                                <span className="rating-icon-label">4.5</span>
                            </div>
                            <h5 className="desc-title">About this item</h5>
                            <p className="desc">{desc}</p>
                            <h4 className="main-price">${price}</h4>
                            {/* product quantity  */}
                            <h6 className="quantity-title">Product quantity</h6>
                            <div className="quantity-container">
                                <button className='decrease-btn'>-</button>
                                <input className='quantity-input' type="number" />
                                <button className='increase-btn'>+</button>
                            </div>
                            {/* add to cart and buy area  */}
                            <div className="buy-item">
                                <button className="add-to-cart-btn bg-orange">Add to cart <FaShoppingCart /></button>
                                <button className="buy-now-btn bg-yellow">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails