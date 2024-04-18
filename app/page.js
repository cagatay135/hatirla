import TimeLine from "@/components/ui/timeline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function Home() {
  return (
    <div className="p-10">
      <div className="grid gap-4 place-items-center">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            Hatırla!
          </h2>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </blockquote>
          <div className="grid gap-4 place-items-center mt-5">
            <Select defaultValue="2024">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TimeLine year={2024} />
        </div>
      </div>
    </div>
  );
}
