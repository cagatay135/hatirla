import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ChangeCaseView({ setViewType }) {
  const handleViewChange = (value) => {
    setViewType(value);
  };

  return (
    <RadioGroup
      defaultValue="list"
      className="flex mt-5"
      onValueChange={handleViewChange}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="list" id="r1" />
        <Label htmlFor="r1">Liste</Label>
      </div>
      <div className="flex items-center space-x-2 ml-5">
        <RadioGroupItem value="calendar" id="r2" />
        <Label htmlFor="r2">Takvim</Label>
      </div>
    </RadioGroup>
  );
}
