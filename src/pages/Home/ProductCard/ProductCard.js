import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from '../../../components/context/context';
import './product-card.css';

const ProductCard = ({ products }) => {
    const { addToCartHandler } = useGlobalContext();
    const { title, img, price, id } = products;

    return (
        <article className="pd-card">
            <div className="pd-card-header">
                <a href='/' className="pd-card-img">
                    <img src={img} alt={title} className="pd-img" />
                </a>
            </div>
            <div className="pd-card-body">
                <a href='/' className="pd-card-title">{title}</a>
            </div>
            <div className="pd-card-footer">
                <div className="pd-card-footer-top">
                    <div className="pd-card-rating">
                        <i className="rating-icon"><FaStar /></i>
                        <span className="rating-icon-label">4.5</span>
                    </div>
                </div>
                <div className="pd-card-footer-main">
                    <h4 className="price">${price}</h4>
                    {/* {quantity && (
                        <div className="quantity-container">
                            <button className='decrease-btn'>-</button>
                            <input className='quantity-input' type="number" />
                            <button className='increase-btn'>+</button>
                        </div>
                    )} */}
                    <button
                        onClick={() => addToCartHandler(id)}
                        className="btn-base bg-yellow pd-card-cart-btn"
                    >
                        Add to Cart
                        <i><FaShoppingCart /></i>
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard