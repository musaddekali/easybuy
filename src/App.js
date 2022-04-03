import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import './global-styles/global.css';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <>
            <Layout>
                <Home />
            </Layout>
        </>
    )
}

export default App;
