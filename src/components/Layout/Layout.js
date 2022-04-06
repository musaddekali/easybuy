import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;