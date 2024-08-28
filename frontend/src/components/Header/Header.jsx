import "./Header.scss";
import logo from "../../assets/abstract.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-sec">
        <Link to="/">
          <img src={logo} alt="error-in-loading" />
        </Link>
        <Link to="/">
          <span>Abstract</span>
        </Link>

        <hr />
        <span>Help Center</span>
      </div>

      <Link to="/new-card">
        <button>Submit a request</button>
      </Link>
    </div>
  );
};

export default Header;
