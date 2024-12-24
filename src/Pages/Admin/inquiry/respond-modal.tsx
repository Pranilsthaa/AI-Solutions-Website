import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface RespondModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (response: string) => void;
  inquirySubject: string;
}

export function RespondModal({
  isOpen,
  onClose,
  onSend,
  inquirySubject,
}: RespondModalProps) {
  const [response, setResponse] = useState("");

  const handleSend = () => {
    onSend(response);
    setResponse("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Respond to Inquiry</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            Subject: {inquirySubject}
          </p>
          <Textarea
            placeholder="Type your response here..."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            rows={5}
          />
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSend}>
            Send Response
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
