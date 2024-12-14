"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import TCLogo from "../../../public/TClogo.png";
import { useForm, Controller } from "react-hook-form";
import { LucideBug, LucideCalendar1, LucideGlobe } from "lucide-react";

export default function Header() {
  const { control } = useForm();
  return (
    <header className="bg-[#fefefe] border flex flex-row justify-between p-6 p-16 h-full max-h-24 w-full max-w-full">
      <Image
        className="dark:invert"
        src={TCLogo}
        alt="TC Logo"
        width={191}
        height={48}
        priority
      />
      <div className="flex flex-row h-1/2">
        <Button className="bg-white border border-red-600 flex flex-row items-center justify-center h-12 rounded-lg mx-2 p-3 p-6 text-red-600 w-46">
          <LucideBug className="font-bold" width={16} height={16} />
          <Label className="cursor-pointer font-bold">Zgłoś Problem</Label>
        </Button>
        <Button className="bg-blue-600 flex flex-row items-center justify-center h-12 rounded-lg ml-4 mr-4 p-3 p-6 text-white w-44">
          <LucideCalendar1 className="font-bold" width={16} height={16} />
          <Label className="cursor-pointer font-bold">Umów Wizytę</Label>
        </Button>
        <Controller
          name="selectedLangugae"
          control={control}
          render={({ field }) => (
            <Select {...field}>
              <SelectTrigger className="h-12 text-blue-500 w-24">
                <LucideGlobe className="font-bold" width={16} height={16} />
                <SelectValue placeholder="PL" />
              </SelectTrigger>
              <SelectContent className="w-24">
                <SelectGroup>
                  <SelectItem value="PL">PL</SelectItem>
                  <SelectItem value="EN">EN</SelectItem>
                  <SelectItem value="DE">DE</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </header>
  );
}
