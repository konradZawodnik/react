"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisitDataInterface } from "@/app/types/types";

export default function VisitData({
  control,
  isTimeSlotChecked,
}:
VisitDataInterface) {
  return (
    <>
      <div className="space-y-4 w-full">
        <FormField
          control={control}
          name="reportNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[700] text-[#112950]">Numer zgłoszenia</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-0"
                  placeholder="Wpisz numer zgłoszenia"
                  type="number"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="space-y-4 w-full">
        <FormField
          control={control}
          name="visitType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[700] text-[#112950]">Rodzaj wizyty</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="border-0 w-full">
                    <SelectValue placeholder="Wybierz z listy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="homeVisit">Wizyta domowa</SelectItem>
                      <SelectItem value="onlineVisit">Wizyta online</SelectItem>
                      <SelectItem value="stationaryVisit">
                        Wizyta stacjonarna
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4 w-full">
        <FormField
          name="specialization"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[700] text-[#112950]">Specjalizacja</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="border-0 w-full">
                    <SelectValue placeholder="Wybierz z listy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="general">Ogólna</SelectItem>
                      <SelectItem value="cardiology">Kardiolog</SelectItem>
                      <SelectItem value="neurology">Neurolog</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <FormField
          name="visitDate"
          control={control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-[700] text-[#112950]">Data wizyty</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "border-0 w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Jak najszybciej</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      {...field}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      required
                      autoFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex flex-row w-full">
        <FormField
          control={control}
          name="isTimeSlotChecked"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel
                className="border-0 font-[400] ml-2 mt-0 text-[14px] text-[#112950] text-[#112950]"
                htmlFor="isTimeSlotChecked"
              >
                Wybierz konkrenty przedział godzinowy
              </FormLabel>
            </FormItem>
          )}
        />

        {isTimeSlotChecked && (
          <div className="flex flex-row w-full">
            <FormField
              name="visitFrom"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger className="border-0 w-full">
                        <SelectValue placeholder="Od" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="0.00">0.00</SelectItem>
                          <SelectItem value="1.00">1.00</SelectItem>
                          <SelectItem value="2.00">2.00</SelectItem>
                          <SelectItem value="3.00">3.00</SelectItem>
                          <SelectItem value="4.00">4.00</SelectItem>
                          <SelectItem value="5.00">5.00</SelectItem>
                          <SelectItem value="6.00">6.00</SelectItem>
                          <SelectItem value="7.00">7.00</SelectItem>
                          <SelectItem value="8.00">8.00</SelectItem>
                          <SelectItem value="9.00">9.00</SelectItem>
                          <SelectItem value="10.00">10.00</SelectItem>
                          <SelectItem value="11.00">11.00</SelectItem>
                          <SelectItem value="12.00">12.00</SelectItem>
                          <SelectItem value="13.00">13.00</SelectItem>
                          <SelectItem value="14.00">14.00</SelectItem>
                          <SelectItem value="15.00">15.00</SelectItem>
                          <SelectItem value="16.00">16.00</SelectItem>
                          <SelectItem value="17.00">17.00</SelectItem>
                          <SelectItem value="18.00">18.00</SelectItem>
                          <SelectItem value="19.00">19.00</SelectItem>
                          <SelectItem value="20.00">20.00</SelectItem>
                          <SelectItem value="21.00">21.00</SelectItem>
                          <SelectItem value="22.00">22.00</SelectItem>
                          <SelectItem value="23.00">23.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="visitTo"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger className="border-0 w-full">
                        <SelectValue placeholder="Do" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="0.00">0.00</SelectItem>
                          <SelectItem value="1.00">1.00</SelectItem>
                          <SelectItem value="2.00">2.00</SelectItem>
                          <SelectItem value="3.00">3.00</SelectItem>
                          <SelectItem value="4.00">4.00</SelectItem>
                          <SelectItem value="5.00">5.00</SelectItem>
                          <SelectItem value="6.00">6.00</SelectItem>
                          <SelectItem value="7.00">7.00</SelectItem>
                          <SelectItem value="8.00">8.00</SelectItem>
                          <SelectItem value="9.00">9.00</SelectItem>
                          <SelectItem value="10.00">10.00</SelectItem>
                          <SelectItem value="11.00">11.00</SelectItem>
                          <SelectItem value="12.00">12.00</SelectItem>
                          <SelectItem value="13.00">13.00</SelectItem>
                          <SelectItem value="14.00">14.00</SelectItem>
                          <SelectItem value="15.00">15.00</SelectItem>
                          <SelectItem value="16.00">16.00</SelectItem>
                          <SelectItem value="17.00">17.00</SelectItem>
                          <SelectItem value="18.00">18.00</SelectItem>
                          <SelectItem value="19.00">19.00</SelectItem>
                          <SelectItem value="20.00">20.00</SelectItem>
                          <SelectItem value="21.00">21.00</SelectItem>
                          <SelectItem value="22.00">22.00</SelectItem>
                          <SelectItem value="23.00">23.00</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
      </div>

      <div className="space-y-4 w-full">
        <FormField
          name="topic"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[700] text-[#112950]">Temat</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="border-0 w-full">
                    <SelectValue placeholder="Wybierz z listy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="healthCheck">Badania</SelectItem>
                      <SelectItem value="emergency">Wypadek</SelectItem>
                      <SelectItem value="followUp">Konsultacja</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4 w-full">
        <FormField
          name="additionalInformations"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="border-0 font-[700] text-[#112950]">
                Dodatkowe informacje (opcjonalnie)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Opisz problem"
                  {...field}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4 w-full">
        <FormField
          name="language"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[700] text-[#112950]">Język wizyty</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="border-0 w-full">
                    <SelectValue placeholder="Wybierz z listy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="english">Angielski</SelectItem>
                      <SelectItem value="polish">Polski</SelectItem>
                      <SelectItem value="spanish">Hiszpański</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
