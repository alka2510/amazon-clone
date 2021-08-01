import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_nav">
      <a href="#" id="navBackToTop">
        <div className="FooterBackToTop">
          <span className="navFooterBackToTopText">Back to top</span>
        </div>
      </a>
      <div className="footer" id="navFooter">
        <div className="footerVerticalColumn">
          <div className="footerLinkCol">
            <div className="footerColHead">Get to Know Us</div>
            <ul>
              <li className="nav_first">
                <a href="#" className="nav_a">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  About Amazon
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Investor Relations
                </a>
              </li>
              <li className="nav_last">
                <a href="#" className="nav_a">
                  Amazon Devices
                </a>
              </li>
            </ul>
          </div>

          <div className="footerLinkCol">
            <div className="footerColHead">Make Money With us</div>
            <ul>
              <li className="nav_first">
                <a href="#" className="nav_a">
                  Sell products in Amazon
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Sell on Amazon Business
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Sell apps on Amazon
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Advertise Your Products
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Self-Publish with us
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Host an Amazon Hub
                </a>
              </li>
              <li className="nav_last">
                <a href="#" className="nav_a">
                  See More MAke Money with Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footerLinkCol">
            <div className="footerColHead">Amazon Payment Products</div>
            <ul>
              <li className="nav_first">
                <a href="#" className="nav_a">
                  Amazon Business Card
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Shop withPoints
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Reload Your Balance
                </a>
              </li>
              <li className="nav_last">
                <a href="#" className="nav_a">
                  Amazon Currency Convertor
                </a>
              </li>
            </ul>
          </div>

          <div className="footerLinkCol">
            <div className="footerColHead">Let Us Help You</div>
            <ul>
              <li className="nav_first">
                <a href="#" className="nav_a">
                  Amazon ans COVID-19
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Your Orders
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Shipping Rates and policis
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Returns and Replacements
                </a>
              </li>
              <li>
                <a href="#" className="nav_a">
                  Manage Your Content and DEvices
                </a>
              </li>
              <li className="nav_last">
                <a href="#" className="nav_a">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
