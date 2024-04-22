import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { CaseDialog } from "../caseDialog";

export default function TimeLine({ cases }) {
  const [open, setOpen] = useState(false);

  const [selectedCase, setSelectedCase] = useState(null);

  const handleDetailClick = (caseData) => {
    setSelectedCase(caseData);
    setOpen(true);
  };

  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return (
    <div className="mt-10">
      {cases.length > 0 &&
        cases.map((caseRecord) => (
          <Card className="w-[850px] mb-10 pr-5" key={caseRecord.id}>
            <CardContent className="flex p-0 items-center ">
              <img
                className="object-contain h-30 w-40 rounded-lg sm:mb-0"
                src={caseRecord.image_url}
                alt={caseRecord.title}
              />
              <div className="text-gray-600 dark:text-gray-400 ml-10">
                <div className="text-md font-normal">
                  <span className="text-gray-900 dark:text-white">
                    {caseRecord.title}
                  </span>
                </div>
                <span className="mt-2 inline-flex items-center text-sm font-normal text-gray-300">
                  {new Date(
                    Date.parse(caseRecord.case_date)
                  ).toLocaleDateString("tr-TR", dateFormat)}
                </span>
                {caseRecord?.tags && (
                  <Badge className="mt-3 ml-5">{caseRecord.tags}</Badge>
                )}
              </div>
              <div className="ml-auto">
                <Button onClick={() => handleDetailClick(caseRecord)}>
                  Detay
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      <CaseDialog open={open} setOpen={setOpen} caseRecord={selectedCase} />
    </div>
  );
}
