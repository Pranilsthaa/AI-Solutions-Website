import { useState } from "react";

import { Button } from "@/components/ui/button";
import { LuMessageSquare } from "react-icons/lu";
import { FeedbackForm } from "./feedbackForm";

export const FeedbackIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 min-w-20 min-h-20 rounded-full bg-[#01EBC4] hover:bg-blue-800 transition-colors duration-200 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <LuMessageSquare className="h-20 w-20 text-white" />

        <span className="sr-only">Open Feedback Form</span>
      </Button>
      <FeedbackForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
