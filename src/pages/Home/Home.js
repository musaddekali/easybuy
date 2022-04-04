import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../FakeProduct/fakeProduct";
import './home.css';

const Home = () => {
  console.log(products);

  return (
    <>
      <h1>Home Page</h1>
      <section className="products-wrapper">
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
