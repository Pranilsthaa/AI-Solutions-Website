import React from "react";
import { Button } from "@/components/ui/button";

interface CarouselDotsProps {
  itemsCount: number;
  selectedIndex: number;
  onClick: (index: number) => void;
}

export function CarouselDots({
  itemsCount,
  selectedIndex,
  onClick,
}: CarouselDotsProps) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: itemsCount }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={`w-3 h-3 p-0 rounded-full ${
            index === selectedIndex ? "bg-primary" : "bg-gray-300"
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}
