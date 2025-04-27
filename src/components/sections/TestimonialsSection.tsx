import React from 'react';
import Container from '../ui/Container';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl  font-bold text-white mb-3">
            Client Testimonials
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Hear directly from our clients about their experiences working with
            our team of real estate professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-[#0F172A] text-white px-8 py-4 rounded-lg">
            <div className="mr-6">
              <p className="text-3xl font-bold">350+</p>
              <p className="text-sm text-gray-300">Happy Clients</p>
            </div>
            {/* <div className="mx-6 border-r border-gray-600 h-12"></div>
            <div className="mx-6">
              <p className="text-3xl font-bold">$2B+</p>
              <p className="text-sm text-gray-300">Properties Sold</p>
            </div> */}
            <div className="mx-6 border-r border-gray-600 h-12"></div>
            <div className="ml-6">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;