import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl  font-bold text-[#0F172A] mb-6">
              About Genblosh Properties
            </h2>
            <p className="text-gray-700 mb-6">
              Founded on principles of integrity, expertise, and exceptional service, Genblosh Properties 
              has established itself as a leader in luxury real estate and property management.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of seasoned professionals brings decades of combined experience in real estate 
              investment, property development, and asset management to every client interaction.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-[#D56A34] mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Industry Expertise</h4>
                  <p className="text-gray-600">
                    Our team has deep knowledge of local and international property markets.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#D56A34] mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Exclusive Network</h4>
                  <p className="text-gray-600">
                    Access to off-market properties and a global network of investors and developers.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-[#D56A34] mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Personalized Service</h4>
                  <p className="text-gray-600">
                    Tailored solutions designed to meet your specific real estate objectives.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="secondary">Learn More About Us</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg" 
                alt="Luxury property exterior" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                alt="Modern interior design" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                alt="Luxury bathroom" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg" 
                alt="Modern architecture" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;