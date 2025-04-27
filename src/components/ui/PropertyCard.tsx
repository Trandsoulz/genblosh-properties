import React from 'react';
import { Property } from '../../types';
import { BedDouble, Bath, Maximize, Home } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number, type: 'sale' | 'rent') => {
    return type === 'sale'
      ? `$${price.toLocaleString()}`
      : `$${price.toLocaleString()}/mo`;
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            property.type === 'sale' ? 'bg-[#D56A34] text-[#0F172A]' : 'bg-[#0F172A] text-white'
          }`}>
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </span>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-white text-[#0F172A] text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-4 text-sm truncate">{property.address}</p>
        <p className="text-2xl font-bold text-[#0F172A] mb-4">
          {formatPrice(property.price, property.type)}
        </p>
        
        <div className="border-t border-gray-100 pt-4">
          <div className="flex justify-between">
            <div className="flex items-center text-gray-600">
              <BedDouble size={18} className="mr-1" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath size={18} className="mr-1" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Maximize size={18} className="mr-1" />
              <span className="text-sm">{property.squareFeet} sqft</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Home size={18} className="mr-1" />
              <span className="text-sm">{property.built}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;