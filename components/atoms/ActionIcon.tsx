import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  color: "blue" | "green" | "gray";
};

export default function ActionIcon({ icon, label, onClick, color }: Props) {
  const colors: Record<string, string> = {
    blue: "text-blue-600 hover:bg-blue-50",
    green: "text-green-600 hover:bg-green-50",
    gray: "text-gray-600 hover:bg-gray-50",
  };
  return (
    <button
      onClick={onClick}
      className={cn("rounded-full p-2 transition shadow-sm hover:shadow", colors[color])}
      title={label}
    >
      {icon}
    </button>
  );
}
