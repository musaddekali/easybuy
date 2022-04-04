import { FaStar, FaShoppingCart } from 'react-icons/fa';
import './product-card.css';

const ProductCard = ({ products }) => {
    const { title, img, price } = products;
    return (
        <article className="pd-card">
            <div className="pd-card-header">
                <a href='/' className="pd-card-img">
                    <img src={img} alt={title}  className="pd-img"/>
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
                    <button className="pd-card-cart-btn">Add to Cart <i><FaShoppingCart /></i></button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard