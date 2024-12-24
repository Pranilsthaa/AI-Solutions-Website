import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface ConfirmTerminationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  accountName: string;
}

export default function ConfirmTerminationModal({
  isOpen,
  onClose,
  onConfirm,
  accountName,
}: ConfirmTerminationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Account Termination</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>
            Are you sure you want to terminate the admin account for{" "}
            <strong>{accountName}</strong>?
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This action cannot be undone.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Terminate Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
