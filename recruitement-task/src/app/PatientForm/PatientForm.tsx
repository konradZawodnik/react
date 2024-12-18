"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import { Form } from "@/components/ui/form";
import VisitData from "./VisitData/VisitData";
import { VisitDataType } from "../types/types";

export default function PatientForm() {

  const onSubmit = (data: VisitDataType) => {
    return data;
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

  //TODO Rest of form

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

            <div className="flex flex-col justify-end w-full">
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
