import TimeLine from "@/components/ui/timeline";
import SelectYear from "@/components/selectYear";

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
            <SelectYear />
          </div>

          <TimeLine year={2024} />
        </div>
      </div>
    </div>
  );
}
