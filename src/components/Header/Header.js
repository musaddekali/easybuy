import NavBelt from './NavBelt/NavBelt';
// import NavMain from './NavMain/NavMain';

import './header.css';

const Header = () => {
  return (
    <header className="header">
      <NavBelt />
      {/* <NavMain /> */}
    </header>
  )
}

export default Header