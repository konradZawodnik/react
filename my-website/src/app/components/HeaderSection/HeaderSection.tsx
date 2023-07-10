"use client"; // This is a client component
import Image from "next/image";
import headerPhoto from "../../images/photo1.jpg";

import "./HeaderSection.scss";

type HeaderSectionProps = {
  clock?: string;
};

export const HeaderSection = ({ clock }: HeaderSectionProps) => {
  return (
    <header>
      <div className="clock">{clock}</div>
      <div className="welcome">
        <p>Witam!</p>
        <h1>Jestem Konrad Zawodnik</h1>
        <h2>Front-end Developer</h2>
        <form>
          <button formAction="https://github.com/konradZawodnik">
            Zobacz moje portfolio
          </button>
        </form>
      </div>
      <Image src={headerPhoto} alt="Zdjęcie Konrad Zawodnik" />
    </header>
  );
};
