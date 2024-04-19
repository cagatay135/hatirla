"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectYear() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleChange = (value) => {
    setSelectedYear(value);
  };

  return (
    <Select value={selectedYear} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>{selectedYear || "Select a year"}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="2024">2024</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
          <SelectItem value="2021">2021</SelectItem>
          <SelectItem value="2020">2020</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
