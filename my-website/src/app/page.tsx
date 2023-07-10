"use client"; // This is a client component
import { useEffect, useState } from "react";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";
import { FeaturesSection } from "./components/FeaturesSection/FeaturesSection";
import { SloganSection } from "./components/SloganSection/SloganSection";
import { HobbySection } from "./components/HobbySection/HobbySection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { FooterSection } from "./components/FooterSection/FooterSection";

export default function Home() {
  const [clock, setClock] = useState<string>("");
  const startTime = () => {
    let today = new Date();
    today.toISOString();
    let year: number = today.getFullYear();
    let month: number = today.getMonth() + 1;
    let day: number = today.getDate();
    let hour: number = today.getHours();
    let minute: string | number = today.getMinutes();
    let second: string | number = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    let nameOfDay;
    switch (today.getDay()) {
      case 0:
        nameOfDay = "Niedziela";
        break;
      case 1:
        nameOfDay = "Poniedziałek";
        break;
      case 2:
        nameOfDay = "Wtorek";
        break;
      case 3:
        nameOfDay = "Środa";
        break;
      case 4:
        nameOfDay = "Czwartek";
        break;
      case 5:
        nameOfDay = "Piątek";
        break;
      case 6:
        nameOfDay = "Sobota";
        break;
    }
    let nameOfMonth;
    switch (month) {
      case 1:
        nameOfMonth = "Stycznia";
        break;
      case 2:
        nameOfMonth = "Lutego";
        break;
      case 3:
        nameOfMonth = "Marca";
        break;
      case 4:
        nameOfMonth = "Kwietnia";
        break;
      case 5:
        nameOfMonth = "Maja";
        break;
      case 6:
        nameOfMonth = "Czerwca";
        break;
      case 7:
        nameOfMonth = "Lipca";
        break;
      case 8:
        nameOfMonth = "Sierpnia";
        break;
      case 9:
        nameOfMonth = "Września";
        break;
      case 10:
        nameOfMonth = "Października";
        break;
      case 11:
        nameOfMonth = "Listopada";
        break;
      case 12:
        nameOfMonth = "Grudnia";
        break;
    }
    setClock(
      `Dzisiaj jest ${nameOfDay} ${day} ${nameOfMonth} ${year}. Godzina: ${hour}:${minute}:${second}`,
    );
    setTimeout(startTime, 500);
  };
  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");
  const checkTime = (i: number) => {
    return i < 10 ? zeroPad(i, 2) : i;
  };

  useEffect(() => {
    startTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderSection clock={clock} />
      <FeaturesSection />
      <SloganSection />
      <HobbySection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
