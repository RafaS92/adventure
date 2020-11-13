import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription ">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-link">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/sign-up">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
