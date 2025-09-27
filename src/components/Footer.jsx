import React from "react";
import Container from "./container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-neutral">
      <Container>
        <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-neutral-content py-10 ml-2">
          <aside className="mr-10 ">
            <h1 className="text-xl font-semibold">CS Ticket System</h1>
            <p className=" text-[#FFFF]">
              We provide an intuitive ticketing platform that helps teams manage
              support requests seamlessly. Our goal is faster resolution, better
              communication, and happier customers
            </p>
          </aside>

          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Saled</a>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social Links</h6>
            <div className="flex items-center gap-4 cursor-pointer">
              <a className="link link-hover bg-neutral text-neutral-content rounded-full">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-blue-500 text-2xl"
                />
              </a>
              <h3>@CS — Ticket System</h3>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
              <a className="link link-hover bg-neutral text-neutral-content rounded-full">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-blue-500 text-2xl"
                />
              </a>
              <h3>@CS — Ticket System</h3>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
              <a className="link link-hover bg-neutral text-neutral-content rounded-full">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" text-blue-500 bg-neutral text-2xl"
                />
              </a>
              <h3>@CS — Ticket System</h3>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
              <a className="link link-hover bg-neutral text-neutral-content rounded-full">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="bg-neutral text-neutral-content text-2xl rounded-full"
                />
              </a>
              <h3>contact@example.com</h3>
            </div>
          </nav>
        </div>
        <aside className="text-center p-3 text-neutral-content">
          <p>
            Copyright © {new Date().getFullYear()} CS — Ticket System. All
            rights reserved.
          </p>
        </aside>
      </Container>
    </footer>
  );
};

export default Footer;
