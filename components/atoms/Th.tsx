import { cn } from "@/lib/utils";
import React from "react";

export default function Th({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <th className={cn("px-4 py-3 text-xs font-semibold", className)}>{children}</th>;
}
