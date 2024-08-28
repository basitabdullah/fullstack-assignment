import Card from "../../components/Card/Card";
import "./HelpCenter.scss";
import { IoMdArrowForward } from "react-icons/io";
const HelpCenter = () => {
  return (
    <div className="helpCenter">
      <div className="help-sec">
        <h1>How can we help?</h1>
        <div className="input-container">
          <input type="text" placeholder="Search" />
          <IoMdArrowForward />
        </div>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HelpCenter;
