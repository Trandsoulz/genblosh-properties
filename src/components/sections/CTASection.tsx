import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F172A]">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl  font-bold text-white mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-gray-300 mb-8">
            Whether you're looking to buy, sell, or invest in real estate, our team of experts
            is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">
              View Properties
            </Button>
            <Button variant="outline" size="lg" className="border-[#D56A34] text-[#D56A34]">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;