import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function CaseDialog({ open, setOpen, caseRecord }) {
  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Olay : {caseRecord?.title}</DialogTitle>
          <DialogDescription>
            <div className="mt-2">
              <p className="text-gray-100">
                Tarih :{" "}
                {new Date(Date.parse(caseRecord.case_date)).toLocaleDateString(
                  "tr-TR",
                  dateFormat
                )}
              </p>
              {caseRecord?.tags && (
                <p className="text-gray-100 mt-3">
                  Türü : <Badge className="ml-2">{caseRecord?.tags}</Badge>
                </p>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid">
            <span>
              Kaynak :{" "}
              <a href={caseRecord?.news_link}>{caseRecord?.news_link}</a>
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
