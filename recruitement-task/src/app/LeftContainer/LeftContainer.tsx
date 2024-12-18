"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Avatar from "../../../public/Avatar.png";
import {
  LucideBriefcaseMedical,
  LucideCalendarDays,
  LucideChartNoAxesCombined,
  LucideCircleHelp,
  LucideHeadset,
  LucideHospital,
  LucideHouse,
  LucideLayers,
  LucideLogOut,
  LucideNotebookTabs,
  LucideSettings,
} from "lucide-react";

export default function LeftContainer() {
  return (
    <div className="bg-[#fefefe] flex flex-col h-1/2 mt-8 ml-8 pt-8">
      <div className="bg-[#fefefe] flex flex-col ml-4 mr-4 h-40 w-60">
        <Image
          className="dark:invert hover:bg-white mr-2 my-1"
          src={Avatar}
          alt="Avatar"
          width={80}
          height={80}
          priority
        />
        <Label className="font-[700] text-[18px] text-[#1a3f7a]">
          Imię Nazwisko
        </Label>
        <Label className="text-[16px]">Operator</Label>
        <Label className="text-[16px]">name@gmail.com</Label>
      </div>
      <div className="bg-[#d7d8db] border mt-4 w-60"></div>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideHouse className="font-bold text-black" width={24} height={24} />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Strona Główna
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideHeadset
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Wizyty inline
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideBriefcaseMedical
          className="font-bold text-[#0068fa]"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[700] text-[16px] text-[#0068fa]">
          Wizyty domowe
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideHospital
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Wizyty stacjonarne
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideLayers className="font-bold text-black" width={24} height={24} />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Druga opinia
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideNotebookTabs
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Dziennik aktywności
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideCalendarDays
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Kalendarz specjalistów
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideChartNoAxesCombined
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Raporty
        </Label>
      </Button>
      <div className="bg-[#d7d8db] border w-60"></div>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideSettings
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Ustawienia
        </Label>
      </Button>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideCircleHelp
          className="font-bold text-black"
          width={24}
          height={24}
        />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          FAQ
        </Label>
      </Button>
      <div className="bg-[#d7d8db] border w-60"></div>
      <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none">
        <LucideLogOut className="font-bold text-black" width={24} height={24} />
        <Label className="cursor-pointer font-[500] text-[16px] text-[#242628]">
          Wyloguj się
        </Label>
      </Button>
      <div className="bg-[#fefefe] h-2/5 mb-8"></div>
    </div>
  );
}
