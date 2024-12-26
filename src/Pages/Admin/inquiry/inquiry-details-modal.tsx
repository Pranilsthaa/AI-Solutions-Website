import postAuthData from "@/api/postAuthData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InquiryDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiry: {
    id: string;
    name: string;
    email: string;
    phone: string;
    company_name: string;
    country: string;
    job_title: string;
    job_detail: string;
    industry: string;
    budget_range: string;
    source_of_discovery: string;
    status: "pending" | "responded";
    created_at: string;
  };
}

export function InquiryDetailsModal({
  isOpen,
  onClose,
  inquiry,
}: InquiryDetailsModalProps) {
  if (!inquiry) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inquiry Details</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] mt-4 pr-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Name</h3>
              <p>{inquiry.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>{inquiry.email}</p>
            </div>
            <div>
              <h3 className="font-semibold">Subject</h3>
              <p>{inquiry.job_title}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{inquiry.status}</p>
            </div>
            <div>
              <h3 className="font-semibold">Message</h3>
              <p className="whitespace-pre-wrap">{inquiry.job_detail}</p>
            </div>
            <div>
              <h3 className="font-semibold">Created At</h3>
              <p>{inquiry.created_at.split("T")[0] || "ND"}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
