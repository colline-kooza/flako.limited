import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-email">
        <h1>
          <FaRegPaperPlane />
          Whatsapp : +256 774 522363 | Long side mitiyana Road
        </h1>
        <form>
          <input type="email" placeholder="Enter your Email Adress" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="Footer-container">
        <div className="footer-logo">
          <img src="./images/flako.png" alt="" />
          <a href="">
            <BiPhoneCall />
            +256 774 522363
          </a>
          <a href="">
            <BiPhoneCall />
            +256 774 522363
          </a>
          <a href="">
            <BiPhoneCall />
            +256 774 522363
          </a>
          <a href="">
            <BiPhoneCall />
            +256 774 522363
          </a>
          <img className="paypal" src="./images/paypal.png" alt="" />
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <a href="">Our story</a>
          <a href="">Contact</a>
          <a href="">Quick help</a>
          <a href="">Our store Location</a>
        </div>
        <div className="our-products">
          <h2>Our Products</h2>
          <a href="">Hen care</a>
          <a href="">creal care</a>
          <a href="">Products</a>
        </div>
        <div className="terms-links">
          <h2>Terms and conditions</h2>
          <a href="">privacy policy</a>
          <a href="">Returns Policy</a>
        </div>
        <div className="useful-links">
          <h2>Useful Links</h2>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Returns Policy</a>
        </div>
      </div>
      <div className="end-footer">
        <p>© Flako-limited Uganda - All Rights Reserved</p>
      </div>
    </div>
  );
}
