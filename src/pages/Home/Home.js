import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../FakeProduct/fakeProduct";
import './home.css';

const Home = () => {
  return (
    <>
      <section className="products-wrapper">
        <div className="section-title">
          <h3>Letest Products</h3>
        </div>
        <div className="product-list">
          {
            products.map(item => (
              <div key={item.id} className="product">
                <ProductCard products={item} />
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Home;
