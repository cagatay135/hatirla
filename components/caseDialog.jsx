import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function CaseDialog({ open, setOpen, caseRecord }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Olay : {caseRecord?.title}</DialogTitle>
          <DialogDescription>
            <div className="mt-2">
              <p> Tarih : {caseRecord?.case_date}</p>
              {caseRecord?.tags && (
                <p className="mt-3">
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
