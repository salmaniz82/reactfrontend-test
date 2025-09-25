import type { Dispatch, SetStateAction } from "react";

type BedroomProps = {
  bedrooms: number;
  setBedrooms: Dispatch<SetStateAction<number>>;
};

export default function Bedrooms({ bedrooms, setBedrooms }: BedroomProps) {
  return (
    <input
      type="number"
      min={0}
      placeholder="Min bedrooms"
      value={bedrooms}
      onChange={(e) => setBedrooms(Number(e.target.value))}
      className="border rounded px-3 py-2 w-full sm:w-1/4"
    />
  );
}
