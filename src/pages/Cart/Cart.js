import { FaTrash } from "react-icons/fa";
import "./cart.css";
import { useGlobalContext } from "../../components/context/context";

const CartBox = ({ cartItem }) => {
  const { id, title, img, inStock, price, quantity } = cartItem;
  const {
    removeFromCartHandler,
    quantityIncreaseHandler,
    quantityDecreaseHandler,
  } = useGlobalContext();

  return (
    <div className="cart-box">
      <div className="cart-box-img">
        <img
          src={img ? img : ""}
          alt={title ? title.substring(0, 40) : ""}
          className="img-fluid"
        />
      </div>
      <div className="cart-box-body">
        <h4 className="cart-box-title">{title}</h4>
        <h5 className="cart-box-price">${price}</h5>
        <span className="cart-box-inStock">
          {inStock ? (
            <i>In Stock</i>
          ) : (
            <i className="text-danger">Out of Stock</i>
          )}
        </span>
        <div className="quantity-container">
          <button
            onClick={() => quantityDecreaseHandler(id)}
            className="decrease-btn"
          >
            {quantity === 1 ? (
              <i>
                <FaTrash />
              </i>
            ) : (
              "-"
            )}
          </button>
          <input
            className="quantity-input"
            type="number"
            readOnly
            value={quantity}
          />
          <button
            onClick={() => quantityIncreaseHandler(id)}
            className="increase-btn"
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-box-footer">
        <button
          onClick={() => removeFromCartHandler(id)}
          className="btn-base cart-box-remove-btn"
        >
          <i>
            <FaTrash />
          </i>
        </button>
      </div>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total price</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ cartItems }) => {
  const row = cartItems.map((item) => {
    let itemTotal = item.quantity * item.price;
    return (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.quantity}</td>
        <td>${item.price}</td>
        <td>${itemTotal.toFixed(2)}</td>
      </tr>
    );
  });
  return <tbody>{row}</tbody>;
};

const Cart = () => {
  const { cartItems, totalCost } = useGlobalContext();

  return (
    <section className="cart">
      <div className="container-fluid">
        <div className="section-title">
          <h3>Seleted Products</h3>
        </div>
        <div className="cart-inner">
          <div className="cart-left">
            <div className="cart-items">
              {cartItems.length ? (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <CartBox cartItem={item} />
                  </div>
                ))
              ) : (
                <h4>Cart is Empty</h4>
              )}
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-amount">
              <table className="table text-center">
                <TableHead />
                <TableBody cartItems={cartItems} />
                <tfoot>
                  <tr>
                    <td
                      style={{ textAlign: "center", fontWeight: 600 }}
                      colSpan="3"
                    >
                      Total
                    </td>
                    <td className="total-cost" style={{ fontWeight: 600 }}>
                      ${totalCost}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* Cart Checkout area  */}
            <div className="cart-checkout">
              <button className="btn-base bg-yellow cart-checkout-btn">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
