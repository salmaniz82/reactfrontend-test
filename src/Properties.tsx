import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useProperty } from "./context/PropertyContext";
import PropertyCard from "./components/PropertyCard";
import type { Property } from "./types/property.ts";
import Search from "./components/propertyFilters/Search.tsx";
import Bedrooms from "./components/propertyFilters/Bedrooms.tsx";
import PriceSort from "./components/propertyFilters/PriceSort.tsx";

export default function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [search, setSearch] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const { setSelectedProperty } = useProperty();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://s3.us-central-1.wasabisys.com/mashvisor-cdn/task-fe-listings.json"
      );
      const data = await res.json();
      setProperties(data);
    }
    fetchData();
  }, []);

  // Filtering & sorting
  const filtered = properties
    .filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) &&
        p.bedrooms >= bedrooms
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  function setPropertyForContext(property: Property) {
    setSelectedProperty(property);
    navigate(`/property/${property.id}`);
  }

  return (
    <div>
      <h1 className="text-800 font-bold text-2xl py-3">Properties</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Search search={search} setSearch={setSearch} />
        <Bedrooms bedrooms={bedrooms} setBedrooms={setBedrooms} />
        <PriceSort sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">
          No properties found. Try adjusting your filters.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              setPropertyForContext={setPropertyForContext}
            />
          ))}
        </div>
      )}
    </div>
  );
}
