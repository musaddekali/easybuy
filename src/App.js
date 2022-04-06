import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import './global-styles/global.css';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';

const App = () => {
    return (
        <>
            <Layout>
                {/* <Home /> */}
                <ProductDetails/>
            </Layout>
        </>
    )
}

export default App;
