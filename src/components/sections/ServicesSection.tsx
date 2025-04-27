import React from 'react';
import Container from '../ui/Container';
import { services } from '../../data/services';
import { Search, TrendingUp, Home, BarChart } from 'lucide-react';

const ServicesSection: React.FC = () => {
  // Map of icon names to Lucide React icon components
  const iconMap: Record<string, React.ReactNode> = {
    'search': <Search size={40} className="text-[#D56A34]" />,
    'trending-up': <TrendingUp size={40} className="text-[#D56A34]" />,
    'home': <Home size={40} className="text-[#D56A34]" />,
    'bar-chart': <BarChart size={40} className="text-[#D56A34]" />
  };

  return (
    <section id="services" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl  font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            We offer a comprehensive suite of real estate services designed to maximize value
            and minimize hassle for investors and property owners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#0F172A] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl  font-bold text-white mb-4">
                Property Management Excellence
              </h3>
              <p className="text-gray-300 mb-6">
                Our full-service property management solutions ensure your investment properties 
                operate at peak performance with minimal effort on your part.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#D56A34] mr-2">✓</span>
                  <span>Tenant screening and placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D56A34] mr-2">✓</span>
                  <span>Rent collection and financial reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D56A34] mr-2">✓</span>
                  <span>Property maintenance and inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D56A34] mr-2">✓</span>
                  <span>Legal compliance and documentation</span>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" 
                alt="Property Management" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;