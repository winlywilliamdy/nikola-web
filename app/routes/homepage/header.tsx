import { Link } from "@remix-run/react/dist/components";
import logo from "~/assets/logo.png"

interface HeaderProps {
}

function clickMe() {
  alert("You clicked me!");
}

function Header({}: HeaderProps) {
  return (
    <div className="header-container">
      <div className='image-container'>
        <img
          style={{width:"60%", alignContent:"center", justifyContent:"center"}}
          src={logo} alt="Logo" />
      </div>
      <div className="website-name-container">
        <div className="text">Nikola</div>
        <div className="text">Academy</div>
      </div>
      <div className='expanded-whitespace'></div>
      <div className='menu-bar'>
        <Link className='link-button' to='/'>
          <button type="button">
            Home
          </button>
        </Link>
        <Link className='link-button' to='/about'>
          <button type="button">
            About Us
          </button>
        </Link>
        <Link className='link-button' to='/facility'>
          <button type="button">
            Our Facility
          </button>
        </Link>
        <Link className='link-button' to='/shop'>
          <button type="button">
            Nikola Maker Shop
          </button>
        </Link>
      </div>
    </div >
  );
}

export default Header;
