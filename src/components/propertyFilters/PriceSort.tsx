import type { Dispatch, SetStateAction } from "react";

type SortOrder = "asc" | "desc";

type PriceSortProps = {
  sortOrder: string;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
};

export default function PriceSort({ sortOrder, setSortOrder }: PriceSortProps) {
  return (
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
      className="border rounded px-3 py-2 w-full sm:w-1/4"
    >
      <option value="asc">Sort by Price ↑</option>
      <option value="desc">Sort by Price ↓</option>
    </select>
  );
}
