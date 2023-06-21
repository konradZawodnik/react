"use client"; // This is a client component
import Image from "next/image";
import firstServicesPhoto from '../../images/services1.png';
import secondServicesPhoto from '../../images/services2.png';
import thirdServicesPhoto from '../../images/services3.png';

import "./FeaturesSection.scss";

export const FeaturesSection = () => (
  <section className="features clearfix">
    <h1>Tworzę strony internetowe</h1>
    <div className="feature">
      <Image src={firstServicesPhoto} alt="loga html js i css" />
      <h2>Nowoczesne i zgodne z aktualnymi standardami</h2>
      <p className="description"></p>
    </div>
    <div className="feature">
      <Image src={secondServicesPhoto} alt="loga html js i css" />
      <h2>Zoptymalizowanie pod kątem wyszukiwarek internetowych</h2>
      <p className="description"></p>
    </div>
    <div className="feature">
      <Image src={thirdServicesPhoto} alt="loga html js i css" />
      <h2>Świetnie wyglądające na urzedziach mobilnych</h2>
      <p className="description"></p>
    </div>
  </section>
);
