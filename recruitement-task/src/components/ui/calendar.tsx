"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("py-2", className)}
      classNames={{
        months: "relative flex flex-col gap-y-4 sm:flex-row sm:gap-y-0",
        month_caption: "relative mx-10 flex h-7 items-center justify-center",
        weekdays: "flex flex-row",
        weekday: "w-8 text-[0.8rem] font-normal text-muted-foreground",
        month: "w-full gap-y-4 overflow-x-hidden",
        caption_label: "truncate text-sm font-medium",
        button_next: cn(
          buttonVariants({
            variant: "outline",
            className:
              "absolute right-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          })
        ),
        button_previous: cn(
          buttonVariants({
            variant: "outline",
            className:
              "absolute left-0 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          })
        ),
        nav: "flex items-start",
        month_grid: "my-2 mx-2",
        week: "mt-2 flex w-full",
        day: "flex h-9 w-9 flex-1 items-center justify-center rounded-md p-0 text-sm [&:has(button)]:hover:!bg-accent [&:has(button)]:hover:text-accent-foreground [&:has(button)]:hover:aria-selected:!bg-primary [&:has(button)]:hover:aria-selected:text-primary-foreground",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal transition-none hover:bg-transparent hover:text-inherit aria-selected:opacity-100"
        ),
        range_start: "day-range-start rounded-s-md",
        range_end: "day-range-end rounded-e-md",
        selected:
          "bg-primary text-primary-foreground hover:!bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "rounded-none aria-selected:bg-accent aria-selected:text-accent-foreground hover:aria-selected:!bg-accent hover:aria-selected:text-accent-foreground",
        hidden: "invisible hidden",
        chevron: `inline-block fill-muted-foreground`,
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === "left") {
            return <ChevronLeft {...props} />;
          }
          return <ChevronRight {...props} />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
