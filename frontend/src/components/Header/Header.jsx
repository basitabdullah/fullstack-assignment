import "./Header.scss";
import logo from "../../assets/abstract.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-sec">
        <img src={logo} alt="error-in-loading" />
        <span>Abstract</span>
        <hr />
        <span>Help Center</span>
      </div>

      <button>Submit a request</button>
    </div>
  );
};

export default Header;
