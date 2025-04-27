import React, { useState } from 'react';
import Container from '../ui/Container';
import PropertyCard from '../ui/PropertyCard';
import Button from '../ui/Button';
import { properties } from '../../data/properties';
// import { Property } from '../../types';

const FeaturedProperties: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sale' | 'rent'>('all');
  
  const filteredProperties = properties.filter(property => {
    if (filter === 'all') return true;
    return property.type === filter;
  });

  const featuredProperties = filteredProperties.filter(property => property.featured);
  
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-bold text-[#0F172A] mb-3">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our selection of premium properties available for sale and rent,
            carefully curated to meet the highest standards of quality and luxury.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('sale')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'sale'
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter('rent')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'rent'
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProperties;