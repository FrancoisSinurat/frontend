"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main
      className={cn(
        "flex-1 ",
        pathname === "/register" && "flex items-center justify-center"
      )}
    >
      {children}
    </main>
  );
}
