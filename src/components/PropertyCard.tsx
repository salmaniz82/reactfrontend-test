import type { Property } from "../types/property.ts";

type PropertyCardProps = {
  property: Property;
  setPropertyForContext: (property: Property) => void;
};

export default function PropertyCard({
  property,
  setPropertyForContext,
}: PropertyCardProps) {
  return (
    <div
      onClick={() => setPropertyForContext(property)}
      key={property.id}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:scale-105"
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-600">${property.price.toLocaleString()}</p>
        <p className="text-gray-500">
          {property.bedrooms} Beds • {property.location}
        </p>
      </div>
    </div>
  );
}
