"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function RightContainer() {
  return (
    <Accordion className="bg-white border-0 h-full max-h-[550px] max-w-[190px] mt-8 ml-4 mr-4 w-full" type="single" collapsible>
      <AccordionItem className="ml-4 mr-4 text-[#003e94]" value="firstItem">
        <AccordionTrigger>Przejdź do</AccordionTrigger>
      </AccordionItem>
      <div className="bg-[#d7d8db] border w-30"></div>
      <AccordionItem className="border-0 ml-4 mr-4" value="secondItem">
        <AccordionTrigger>Wizyta</AccordionTrigger>
        <AccordionContent>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Numer zgłoszenia
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Rodzaj wizyty
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Specjalizacja
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Data Wizyty
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Temat
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              <span>Dodatkowe</span>
              <span>informacje</span>
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Język wizyty
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Kod rabatowy
            </Label>
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="border-0 ml-4 mr-4" value="thirdItem">
        <AccordionTrigger>Pacjent</AccordionTrigger>
        <AccordionContent>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Kraj
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Wiek pacjenta
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Dane pacjenta
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Objawy
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Dokument
            </Label>
          </Button>
          <Button className="bg-white border-0 flex flex-row hover:bg-white justify-start pt-4 rounded-none w-full">
            <Label className="cursor-pointer font-[500] text-[14px] text-[#242628]">
              Dane adresowe
            </Label>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
