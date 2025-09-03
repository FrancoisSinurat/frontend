type Props = { value: string; onChange: (v: string) => void };

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari ID/Nama/Kontak…"
        className="w-full sm:w-64 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-blue-100"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
        ⌘K
      </span>
    </div>
  );
}
