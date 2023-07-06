"use client"; // This is a client component
import Image from "next/image";
import firstContactImage from "../../images/contact1.png";
import secondContactImage from "../../images/contact2.png";
import thirdContactImage from "../../images/contact3.png";

import "./ContactSection.scss";

export const ContactSection = () => {
  return (
    <section className="contact">
      <h1>Skontaktuj się ze mną</h1>
      <div className="wrap clearfix">
        <div className="socials">
          <div className="social clearfix">
            <Image src={firstContactImage} alt="kontakt" />
            <span>konrad.zawodnik@wp.pl</span>
          </div>
          <div className="social clearfix">
            <Image src={secondContactImage} alt="kontakt" />
            <span>514851101</span>
          </div>
          <a href="https://www.linkedin.com/in/konrad-zawodnik-095066148/">
            <div className="social clearfix">
              <Image src={thirdContactImage} alt="kontakt" />
              <span>konradzawodnik</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
