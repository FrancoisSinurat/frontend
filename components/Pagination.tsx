import { cn } from "@/lib/utils";

type Props = {
  page: number;
  totalPages: number;
  totalData: number;
  pageSize: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({ page, totalPages, totalData, pageSize, setPage }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 p-3">
      <p className="text-xs text-gray-500">
        Menampilkan {(page - 1) * pageSize + 1} - {Math.min(page * pageSize, totalData)} dari {totalData} data
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={cn("rounded-xl px-3 py-2 text-xs font-medium transition", page === 1 ? "bg-gray-50 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200")}
        >
          Sebelumnya
        </button>
        <span className="text-xs text-gray-600">Hal. {page} / {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className={cn("rounded-xl px-3 py-2 text-xs font-medium transition", page === totalPages ? "bg-gray-50 text-gray-400 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-50 ring-1 ring-gray-200")}
        >
          Berikutnya
        </button>
      </div>
    </div>
  );
}
