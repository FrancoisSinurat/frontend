import { cn } from "@/lib/utils";
import React from "react";

export default function Td({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <td className={cn("px-4 py-3 align-top text-gray-700", className)}>{children}</td>;
}
