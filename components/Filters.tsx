import SearchInput from "./atoms/SearchInput";
import SelectNative from "./atoms/SelectNative";
import { STATUS_OPTIONS, PRODUCT_OPTIONS } from "@/lib/types";

type Props = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  filterStatus: string;
  setFilterStatus: (v: string) => void;
  filterProduct: string;
  setFilterProduct: (v: string) => void;
  resetPage: () => void;
};

export default function Filters({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
  filterProduct,
  setFilterProduct,
  resetPage,
}: Props) {
  return (
    <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <SearchInput value={searchQuery} onChange={(v) => { setSearchQuery(v); resetPage(); }} />
        <SelectNative value={filterStatus} onChange={(v) => { setFilterStatus(v); resetPage(); }} options={["all", ...STATUS_OPTIONS]} ariaLabel="Filter Status" />
        <SelectNative value={filterProduct} onChange={(v) => { setFilterProduct(v); resetPage(); }} options={["all", ...PRODUCT_OPTIONS]} ariaLabel="Filter Produk" />
      </div>
    </div>
  );
}
