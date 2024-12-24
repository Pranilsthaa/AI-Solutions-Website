import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScaleLoader } from "react-spinners";

interface ConfirmTerminationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  accountName: string;
  loading: boolean;
}

export default function ConfirmTerminationModal({
  isOpen,
  onClose,
  onConfirm,
  accountName,
  loading,
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
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={loading}
            className="min-w-[150px]"
          >
            {loading ? (
              <ScaleLoader color="white" height={8} />
            ) : (
              "Terminate Account"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
