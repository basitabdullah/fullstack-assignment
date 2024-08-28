import "./Footer.scss";
import abstractImg from "../../assets/abstract.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sec-one">
        <h4>Abstract</h4>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div className="sec-two">
        <h4>Resources </h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="sec-three">
        <h4>Community </h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="sec-four">
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>

        <div className="sub-sec">
          <h5>Contact Us</h5>
          <span>info@abstract.com</span>
        </div>
      </div>
      <div className="sec-five">
        <img src={abstractImg} alt="loading-error" />
        <p>@Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
