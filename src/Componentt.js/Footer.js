import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-icon"></div>
        <div className="footer-contact">
          {" "}
          <h4 className="footer-containt-heading">Contact Us</h4>
          {/* <h4 className="footer-containt-heading"></h4> */}
          <div>
            <ul className="footer-list">
              <li>
                <a href="#" className="footer-containt">
                  Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                  Market, XYZ-343434
                </a>
              </li>
              <li>
                <a href="#" className="footer-containt">
                  example2020@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="footer-containt">
                  (904) 443-0343
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-more">
          {" "}
          <h4 className="footer-containt-heading">More</h4>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-containt">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-containt">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="footer-containt">
                Career
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="footer-containt">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-media">
          <h4 className="footer-containt-heading">Social Links</h4>

          <ul className="footer-list-social">
            <li>
              <a href="#" className="footer-containt">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="footer-containt">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="footer-containt">
                <i class="fa fa-facebook-f"></i>
              </a>
            </li>
          </ul>
          <p className="footer-containt">© 2022 Food Truck Example</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
