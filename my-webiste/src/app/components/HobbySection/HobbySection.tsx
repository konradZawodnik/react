"use client"; // This is a client component
import "./HobbySection.scss";

export const HobbySection = () => (
  <section className="hobby clearfix">
    <h1>W wolnym czasie uwielbiam</h1>
    <div className="item">
      <p>Grać w piłkę nożną</p>
    </div>
    <div className="item">
      <p>Chodzić na siłownię</p>
    </div>
    <div className="item">
      <p>Programować</p>
    </div>
    <div className="item">
      <p>Zdrowo się odżywiać</p>
    </div>
  </section>
);
