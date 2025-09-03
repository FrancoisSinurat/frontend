type Props = {
  value: string;
  onChange: (v: string) => void;
  options?: string[];
  ariaLabel?: string;
};

export default function SelectNative({ value, onChange, options, ariaLabel }: Props) {
  return (
    <select
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-800 outline-none transition focus:border-gray-300 focus:ring-2 focus:ring-blue-100"
    >
      {options?.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </select>
  );
}
