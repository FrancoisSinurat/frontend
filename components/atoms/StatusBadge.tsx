import { cn } from "@/lib/utils";

export default function StatusBadge({ value }: { value: string }) {
  const styles: Record<string, { bg: string; text: string }> = {
    Submit: { bg: "bg-gray-100", text: "text-gray-700" },
    Assesment: { bg: "bg-amber-100", text: "text-amber-800" },
    Implementasi: { bg: "bg-emerald-100", text: "text-emerald-800" },
    Migrasi: { bg: "bg-rose-100", text: "text-rose-800" },
  };
  const s = styles[value] || styles.Submit;
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", s.bg, s.text)}>
      {value}
    </span>
  );
}
