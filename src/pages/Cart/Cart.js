import { FaTrash } from 'react-icons/fa';
import './cart.css';
import img1 from '../../FakeProduct/images/bike (1).jpg';

const CartBox = () => {
    return (
        <div className="cart-box">
            <div className="cart-box-img">
                <img src={img1} alt="" className='img-fluid' />
            </div>
            <div className="cart-box-body">
                <h4 className="cart-box-title">Fat bike in cart-box</h4>
                <h5 className="cart-box-price">$545</h5>
                <span className="cart-box-inStock">In Stock</span>
                <div className="quantity-container">
                    <button className='decrease-btn'>-</button>
                    <input className='quantity-input' type="number" />
                    <button className='increase-btn'>+</button>
                </div>
            </div>
            <div className="cart-box-footer">
                <button className="btn-base cart-box-remove-btn"><i><FaTrash /></i></button>
            </div>
        </div>
    )
}

const Cart = () => {
    return (
        <section className="cart">
            <div className="container-fluid">
                <div className="section-title">
                    <h3>Seleted Products</h3>
                </div>
                <div className="cart-inner">
                    <div className="cart-left">
                        <div className="cart-items">
                            <div className="cart-item">
                                <CartBox />
                            </div>
                            <div className="cart-item">
                                <CartBox />
                            </div>
                            <div className="cart-item">
                                <CartBox />
                            </div>
                            <div className="cart-item">
                                <CartBox />
                            </div>
                        </div>
                    </div>
                    <div className="cart-right">
                        <div className="cart-ammount">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Car</td>
                                        <td>3</td>
                                        <td>$30</td>
                                        <td>$90</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', fontWeight: 600 }} colSpan='3'>Total</td>
                                        <td style={{ fontWeight: 600 }}>$9548</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Cart Checkout area  */}
                        <div className="cart-checkout">
                            <button className="btn-base bg-yellow cart-checkout-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;