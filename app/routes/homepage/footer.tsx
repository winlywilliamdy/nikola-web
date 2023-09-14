import { Link } from "@remix-run/react/dist/components";
import logo from "~/assets/logo.png"

interface Footer {
}

function Footer({ }: Footer) {
  return (
    <div className="footer-container">
      <div className='image-container-footer'>
        <img className="footer-logo"
          src={logo} alt="Logo" />
        <div className="text-footer">Nikola<br></br>Academy</div>
      </div>
      <div className="footer-item">
        <div className="item">
          <div className="subitem-container-menu">
            <div className="item-title">
              Menu
            </div>
            <Link className='subitem-button' to='/'>
              <button type="button">
                Home
              </button>
            </Link>
            <Link className='subitem-button' to='/about'>
              <button type="button">
                About Us
              </button>
            </Link>
            <Link className='subitem-button' to='https://react.school'>
              <button type="button">
                Our Facility
              </button>
            </Link>
            <Link className='subitem-button' to='https://react.school'>
              <button type="button">
                Nikola Maker Shop
              </button>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="subitem-container">
            <div className="item-title">
              Contact Us
            </div>
            <div className="subitem">
              academy.nikola@gmail.com
            </div>
            <div className="subitem">
              (+62) 813-1732-1451
            </div>
            <div className="subitem">
              Jl. Pluit Karang Permai XII B9 Barat No.1
            </div>
            <div className="subitem">
              Pluit Kec. Penjaringan, Jakarta Utara, 14450
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">
            {/* Follow */}
          </div>
        </div>
        <div className="item">
          <a className="try-button" href='https://forms.gle/5c9mZDkQFCjNGeCR6' target="popup">
            Try Us for Free
          </a>
        </div>
      </div>
    </div >
  );
}

export default Footer;
