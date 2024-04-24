"use client";

import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-6 gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mt-10"
        />
      </div>
    </div>
  );
}
