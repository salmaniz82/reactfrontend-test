// pages/PropertyDetails.tsx
import { Link } from "react-router";
import { useProperty } from "./context/PropertyContext";

export default function PropertyDetails() {
  const { selectedProperty } = useProperty();

  if (!selectedProperty) {
    return (
      <div className="p-6">
        <p>No property selected.</p>
        <Link to="/" className="text-blue-500 underline">
          ← Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Listings
      </Link>
      <div className="border rounded-lg overflow-hidden shadow-md max-w-2xl mx-auto">
        <img
          src={selectedProperty.image}
          alt={selectedProperty.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-2">{selectedProperty.title}</h1>
          <p className="text-gray-700 mb-1">
            Price: ${selectedProperty.price.toLocaleString()}
          </p>
          <p className="text-gray-700 mb-1">
            Bedrooms: {selectedProperty.bedrooms}
          </p>
          <p className="text-gray-700 mb-1">
            Location: {selectedProperty.location}
          </p>
        </div>
      </div>
    </div>
  );
}
