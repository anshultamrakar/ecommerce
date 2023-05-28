import React from "react";
import facebook from "../Assets/Icons/icons8-facebook-50.png"
import insta from "../Assets/Icons/icons8-instagram-50.png"

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="about_brand">
          <h4>Furn_It store </h4>
          <br />
          <p>
            The Furn_It store are a family-owned business that has been open
            since 2005. we are custom designers and manufacturers of furniture ;
            our extraordinarily high standard of quality and craftsmanship have
            been passed to the third generation of the family
          </p>
        </div>
        <div className="contact">
          <h4> Get in Touch </h4>
          <br />
          <ul>
            <li>3333 W Touhy Ave H04</li>
            <li> (847) 6744-800</li>
            <li>furnitF@scglobal.net</li>
          </ul>
        </div>
        <div className="more-info">
          <h4> More Information </h4>
          <br />
          <ul>
            <li>Contact us</li>
            <li> Blog</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="social_handles">
          <h4>Follow US On</h4>
          <br />
          <ul>
            <li><img src = {facebook} width= "30" height = "30"/></li>
            <li><img src = {insta} width= "30" height = "30"/></li>
          </ul>
        </div>
      </div>
      <p className="footer_copyright">
        Furn_It Furnitures &copy; 2023 All Right Reserved Designed and Developed
        by : Anshul Tamrakar
      </p>
    </div>
  );
};

export default Footer;
{
  /*  */
}
