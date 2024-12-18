import Image from "next/image";

import { Label } from "@/components/ui/label";
import TCLogo from "../../public/TClogo.png";
import Header from "./Header/Header";
import LeftContainer from "./LeftContainer/LeftContainer";
import PatientForm from "./PatientForm/PatientForm";
import RightContainer from "./RightContainer/RightContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center ont-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="bg-slate-100 flex flex-row h-full w-full">
        <LeftContainer />
        <PatientForm />
        <RightContainer />
      </main>
      <footer className="bg-slate-100 flex justify-start pb-8 flex-col items-start pl-16 w-full">
        <Image
          className="dark:invert mb-2"
          src={TCLogo}
          alt="TC Logo"
          width={126}
          height={31}
          priority
        />
        <Label>© www.takes-care.com 2024</Label>
      </footer>
    </div>
  );
}
