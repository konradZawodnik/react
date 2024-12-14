"use client";
import { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { convertToRomainNumber, peselDecode } from "../helpers/helpers";
import { Form } from "@/components/ui/form";
import VisitData from "./VisitData/VisitData";
import { VisitDataType } from "../types/types";

export default function PatientForm() {
  const { control, register } = useForm();
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [selectedDocument, setSelectedDocument] = useState<string>("PESEL");
  const [selectedAgePatient, setSelectedAgePatient] =
    useState<string>("Dorosły");
  const [peselValue, setPeselValue] = useState<number | undefined>(undefined);
  const documents = ["PESEL", "Paszport"];
  const possibleAges = ["Dorosły", "Dziecko"];

  const handleChooseDocumentType = (value: string) => {
    setSelectedDocument(value);
  };

  const handleChoosePatientAgeType = (value: string) => {
    setSelectedAgePatient(value);
  };

  const onSubmit = (data: VisitDataType) => {
    return data;
  };

  const returnDateOfBirth = (peselNumber?: number) => {
    if (selectedDocument === "PESEL" && peselNumber) {
      return peselDecode(peselNumber).toString();
    }
    if (birthDate) {
      return format(birthDate, "PPP").toString();
    } else {
      return "Data urodzenia";
    }
  };

  const fieldSchema = z.object({
    age: z.string({
      required_error: "Proszę wybrać wiek",
    }),
    addressCountry: z.string({
      required_error: "Proszę wybrać kraj",
    }),
    addressStreet: z.string({
      required_error: "Proszę wpisać adres",
    }),
    addressNumber: z.string({
      required_error: "Proszę wpisać numer adresu",
    }),
    firstName: z.string({
      required_error: "Proszę podać imię pacjenta",
    }),
    isAnotherVisitAddress: z.boolean().default(false).optional(),
    peselNumber: z
      .string({
        required_error: "Niewłaściwy numer PESEL",
      })
      .default("")
      .optional(),
    passportNumber: z
      .string({
        required_error: "Niewłaściwy numer PESEL",
      })
      .default("")
      .optional(),
    surname: z.string({
      required_error: "Proszę podać nazwisko pacjenta",
    }),
    symptoms: z.string().default("").optional(),
    visitAddressCountry: z.string().default("").optional(),
    visitAddressStreet: z.string().default("").optional(),
    visitAddressNumber: z.string().default("").optional(),
  });

  const FormSchema = z.object({
    additionalInformations: z.string().default("").optional(),
    isTimeSlotChecked: z.boolean().default(false).optional(),
    language: z.string({
      required_error: "Proszę wybrać język",
    }),
    fields: z.array(fieldSchema),
    reportNumber: z.string({
      required_error: "Proszę podać numer zgłoszenia",
    }),
    specialization: z.string({
      required_error: "Proszę wybrać specjalizację",
    }),
    topic: z.string({
      required_error: "Proszę wybrać temat",
    }),
    visitDate: z.date({
      required_error: "Proszę wybrać datę wizyty",
    }),
    visitFrom: z.string().default("").optional(),
    visitTo: z.string().default("").optional(),
    visitType: z.string({
      required_error: "Proszę wybrać rodzaj wizyty",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    control,
    name: "patientData",
  });

  const value = useWatch({
    name: "patientData",
    control,
  });

  return (
    <div className="flex flex-col items-start ml-2 mr-4 w-full">
      <Label className="flex items-start font-[400] mb-2 mt-8 pl-4 text-[#6d7178] text-[14px] w-full">
        Wizyty domowe{" "}
        <ChevronRight className="mt-[2px]" height={18} width={18} /> Umawianie
        wizyty
      </Label>
      <Label className="flex items-start font-[300] mb-2 pl-4 text-[#112950] text-4xl w-full">
        Umawianie wizyty
      </Label>
      <Form {...form}>
        <div className="bg-white flex flex-col ml-4 mr-4 p-16 max-w-[715px] w-full">
          <Label className="font-[300] leading-7 mb-4 text-[24px] text-[#112950]">
            Wizyta
          </Label>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <VisitData
              control={form?.control}
              isTimeSlotChecked={form.getValues().isTimeSlotChecked}
            />

            {fields.map((item, index) => (
              <div key={item.id} className="space-y-6">
                <div className="font-bold">
                  Pacjent {convertToRomainNumber(index + 1)}
                </div>

                <div className="space-y-4">
                  <Label className="font-[700] text-[#112950] text-[#112950]">
                    Wiek pacjenta
                  </Label>
                  <ToggleGroup
                    className="w-full"
                    defaultValue={selectedAgePatient}
                    value={selectedAgePatient}
                    onValueChange={(value: string) =>
                      handleChoosePatientAgeType(value)
                    }
                    type="single"
                  >
                    {possibleAges.map((value) => {
                      return (
                        <ToggleGroupItem
                          {...register(`fields.${index}.age`)}
                          key={item.id}
                          variant="outline"
                          value={value}
                          aria-label={`Toggle ${value}`}
                          className={
                            selectedAgePatient === value
                              ? "bg-[#112950] text-white mr-2 w-full"
                              : "bg-white hover:bg-white hover:text-[#112950] text-[#112950] w-full"
                          }
                        >
                          {value}
                        </ToggleGroupItem>
                      );
                    })}
                  </ToggleGroup>
                </div>

                <div className="space-y-4">
                  <Label className="font-[700] text-[#112950]">
                    Dane pacjenta
                  </Label>
                  <div className="flex flex-row">
                    <Input
                      className="mr-2"
                      key={item.id}
                      {...register(`fields.${index}.firstName`, {
                        required: "Proszę podać imię",
                      })}
                      placeholder="Imię"
                      type="text"
                    />
                    <Input
                      {...register(`fields.${index}.surname`, {
                        required: "Proszę podać nazwisko",
                      })}
                      key={item.id}
                      placeholder="Nazwisko"
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="font-[700] text-[#112950]">
                    Objawy (opcjonalnie)
                  </Label>
                  <Select
                    key={item.id}
                    {...register(`fields.${index}.symptoms`, {
                      required: "Proszę wybrać symptom",
                    })}
                  >
                    <SelectTrigger className="border-0 w-full">
                      <SelectValue placeholder="Wybierz z listy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="fever">Gorączka</SelectItem>
                        <SelectItem value="cough">Kaszel</SelectItem>
                        <SelectItem value="headache">Ból głowy</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label className="font-[700] text-[#112950]">Dokument</Label>
                  <div className="flex flex-row">
                    <ToggleGroup
                      key={item.id}
                      className="w-full"
                      defaultValue={selectedDocument}
                      value={selectedDocument}
                      onValueChange={(value) => handleChooseDocumentType(value)}
                      {...register(`fields.${index}.age`, {
                        required: "Proszę wybrać wiek",
                      })}
                      type="single"
                    >
                      {documents.map((value) => {
                        return (
                          <ToggleGroupItem
                            key={value}
                            variant="outline"
                            value={value.toString()}
                            aria-label={`Toggle ${value}`}
                            className={
                              selectedDocument === value
                                ? "bg-[#e5f0ff] hover:bg-white hover:text-[#112950] text-[#112950] w-full"
                                : "bg-white hover:bg-white hover:text-[#112950] text-[#112950] w-full"
                            }
                          >
                            {value}
                          </ToggleGroupItem>
                        );
                      })}
                    </ToggleGroup>
                  </div>
                  <div className="flex flex-row">
                    {selectedDocument === "PESEL" ? (
                      <Input
                        {...register(`fields.${index}.peselNumber`, {
                          pattern: /^[0-9]{11}$/,
                        })}
                        key={item.id}
                        className="mr-2"
                        placeholder="Wpisz numer PESEL"
                        minLength={11}
                        maxLength={11}
                        onChange={() => setPeselValue(peselValue)}
                        type="number"
                        value={peselValue}
                      />
                    ) : (
                      <Input
                        {...register(`fields.${index}.passportNumber`, {
                          pattern: /^[A-Z][0-9]{8}$/,
                        })}
                        key={item.id}
                        className="mr-2"
                        minLength={8}
                        maxLength={8}
                        placeholder={"Wpisz numer paszportu"}
                      />
                    )}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "border-0 w-full justify-start text-left font-normal",
                            !birthDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDateOfBirth(peselValue)}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          {...register(`fields.${index}.dateOfBirth`)}
                          mode="single"
                          selected={birthDate}
                          required={true}
                          onSelect={setBirthDate}
                          autoFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="font-[700] text-[#112950]">
                    Dane adresowe
                  </Label>
                  <Select
                    {...register(`fields.${index}.addressCountry`, {
                      required: "Proszę wybrać kraj zamieszkania",
                    })}
                    key={item.id}
                  >
                    <SelectTrigger className="border-0 w-full">
                      <SelectValue placeholder="Kraj" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Polska">Polska</SelectItem>
                        <SelectItem value="Niemcy">Niemcy</SelectItem>
                        <SelectItem value="Francja">Francja</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="flex flex-row">
                    <Input
                      {...register(`fields.${index}.addressStreet`, {
                        required: "Proszę wpisać ulicę zamieszkania",
                      })}
                      key={item.id}
                      placeholder="Ulica"
                      type="text"
                    />
                    <Input
                      {...register(`fields.${index}.addressNumber`, {
                        required: "Proszę podać numer lokalu zamieszkania",
                      })}
                      key={item.id}
                      className="w-[16rem]"
                      placeholder="Numer lokalu"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Checkbox
                    {...register(`fields.${index}.isAnotherVisitAddress`)}
                    className="mr-2"
                    key={item.id}
                  />
                  <Label htmlFor="isAnotherVisitAddress">
                    Wizyta ma się odbyć na inny adres
                  </Label>
                </div>

                {value?.[index]?.isAnotherVisitAddress && (
                  <div className="space-y-4">
                    <Label className="font-[700] text-[#112950]">
                      Dane adresowe do wizyty
                    </Label>
                    <Select
                      {...register(`fields.${index}.visitAddressCountry`)}
                    >
                      <SelectTrigger className="border-0 w-full">
                        <SelectValue placeholder="Kraj" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Polska">Polska</SelectItem>
                          <SelectItem value="Niemcy">Niemcy</SelectItem>
                          <SelectItem value="Francja">Francja</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <div className="flex flex-row">
                      <Input
                        {...register(`fields.${index}.visitAddressStreet`)}
                        placeholder="Ulica"
                        type="text"
                      />
                      <Input
                        {...register(`fields.${index}.visitAddressNumber`)}
                        className="w-[16rem]"
                        placeholder="Numer lokalu"
                        type="text"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col justify-end w-full">
              <Button
                className="bg-white hover:bg-white text-[#0068fA] w-full"
                onClick={() =>
                  append({
                    addressCountry: "",
                    addressStreet: "",
                    addressNumber: "",
                    age: "",
                    firstName: "",
                    isAnotherVisitAddress: "",
                    lastName: "",
                    passportNumber: "",
                    peselNumber: "",
                    visitAddressCountry: "",
                    visitAddressStreet: "",
                    visitAddressNumber: "",
                  })
                }
              >
                Dodaj pacjenta
              </Button>
              <Button
                className="bg-[#0068fa] hover:bg-[#0068fa] ml-0 mt-4 text-white w-full"
                type="submit"
              >
                Dalej <ChevronRight />
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </div>
  );
}
