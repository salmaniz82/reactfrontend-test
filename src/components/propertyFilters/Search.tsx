import type { Dispatch, SetStateAction } from "react";

type SearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search properties..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded px-3 py-2 w-full sm:w-1/3"
    />
  );
}
