import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
export const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");
