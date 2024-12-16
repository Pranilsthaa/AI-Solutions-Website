import React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomButton = React.forwardRef(({ value, onClick }: any, ref) => (
  <Button
    variant="outline"
    className="w-full justify-start text-left font-normal"
    onClick={onClick}
    ref={ref}
  >
    <CalendarIcon className="mr-2 h-4 w-4" />
    {value ? new Date(value).toDateString() : "Pick a date"}
  </Button>
));

CustomButton.displayName = "CustomButton";

export default CustomButton;
