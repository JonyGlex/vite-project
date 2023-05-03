import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="containerfooter">
        <div className="top">
          <div className="itemfooter">
            <h2 className="footile">Categories</h2>
            <span className="foospan">Graphics & Design</span>
            <span className="foospan">Digital Marketing</span>
            <span className="foospan">Writing & Translation</span>
            <span className="foospan">Video & Animation</span>
            <span className="foospan">Music & Audio</span>
            <span className="foospan">Programming & Tech</span>
            <span className="foospan">Data</span>
            <span className="foospan">Business</span>
            <span className="foospan">Lifestyle</span>
            <span className="foospan">Photography</span>
            <span className="foospan">Sitemap</span>
          </div>
          <div className="itemfooter">
            <h2 className="footile"> About</h2>
            <span className="foospan">Press & News</span>
            <span className="foospan">Partnerships</span>
            <span className="foospan">Privacy Policy</span>
            <span className="foospan">Terms of Service</span>
            <span className="foospan">Intellectual Property Claims</span>
            <span className="foospan">Investor Relations</span>
            <span className="foospan">Contact Sales</span>
          </div>
          <div className="itemfooter">
            <h2 className="footile">Support</h2>
            <span className="foospan">Help & Support</span>
            <span className="foospan">Trust & Safety</span>
            <span className="foospan">Selling on Liverr</span>
            <span className="foospan">Buying on Liverr</span>
          </div>
          <div className="itemfooter">
            <h2 className="footile">Community</h2>
            <span className="foospan">Customer Success Stories</span>
            <span className="foospan">Community hub</span>
            <span className="foospan">Forum</span>
            <span className="foospan">Events</span>
            <span className="foospan">Blog</span>
            <span className="foospan">Influencers</span>
            <span className="foospan">Affiliates</span>
            <span className="foospan">Podcast</span>
            <span className="foospan">Invite a Friend</span>
            <span className="foospan">Become a Seller</span>
            <span className="foospan">Community Standards</span>
          </div>
          <div className="itemfooter">
            <h2 className="footile">More From Fiverr</h2>
            <span className="foospan">Liverr Business</span>
            <span className="foospan">Liverr Pro</span>
            <span className="foospan">Liverr Logo Maker</span>
            <span className="foospan">Liverr Guides</span>
            <span className="foospan">Get Inspired</span>
            <span className="foospan">Liverr Select</span>
            <span className="foospan">ClearVoice</span>
            <span className="foospan">Liverr Workspace</span>
            <span className="foospan">Learn</span>
            <span className="foospan">Working Not Working</span>
          </div>
        </div>
        <hr className="hrfooter" />
        <div className="bottom">
          <div className="leftfooter">
            <h2 className="footile">liverr</h2>
            <span>© Liverr International Ltd. 2023</span>
          </div>
          <div className="rightfooter">
            <div className="social">
              <img src="/img/twitter.png" alt="" className="fooimg" />
              <img src="/img/facebook.png" alt="" className="fooimg" />
              <img src="/img/linkedin.png" alt="" className="fooimg" />
              <img src="/img/pinterest.png" alt="" className="fooimg" />
              <img src="/img/instagram.png" alt="" className="fooimg" />
            </div>
            <div className="linkfo">
              <img src="/img/language.png" alt="" className="fooimg" />
              <span>English</span>
            </div>
            <div className="linkfo">
              <img src="/img/coin.png" alt="" className="fooimg" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" className="fooimg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
