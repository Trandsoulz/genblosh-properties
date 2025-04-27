import React from 'react';
import { Testimonial } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.name}
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="font-semibold text-[#0F172A]">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        </div>
        <Quote className="text-[#D56A34] flex-shrink-0" size={24} />
      </div>
      <p className="text-gray-700 italic">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialCard;