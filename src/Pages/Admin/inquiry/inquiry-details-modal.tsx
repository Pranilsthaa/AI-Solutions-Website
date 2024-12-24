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
    subject: string;
    status: string;
    message: string;
    createdAt: string;
  } | null;
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
              <p>{inquiry.subject}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{inquiry.status}</p>
            </div>
            <div>
              <h3 className="font-semibold">Message</h3>
              <p className="whitespace-pre-wrap">{inquiry.message}</p>
            </div>
            <div>
              <h3 className="font-semibold">Created At</h3>
              <p>{new Date(inquiry.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
