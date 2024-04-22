import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectYear({ years, currentYear, changeYear }) {
  const handleChange = (value) => {
    changeYear(value);
  };

  return (
    <Select
      value={currentYear}
      onValueChange={handleChange}
      className="text-center"
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue className="text-center">{currentYear}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {years.map((y) => (
            <SelectItem key={y} value={y}>
              {y}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
