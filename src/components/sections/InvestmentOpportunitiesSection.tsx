import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { TrendingUp, Shield, BarChart3, Building2 } from "lucide-react";

const InvestmentOpportunitiesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
            Premium Real Estate Investment Opportunities
          </h2>
          <p className="text-gray-600 text-lg">
            Discover carefully curated investment properties that offer strong
            potential for capital appreciation and reliable rental income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden group rounded-2xl">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
              alt="Residential Investment"
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl  text-white mb-3">
                  Residential Properties
                </h3>
                <p className="text-gray-200 mb-4">
                  High-yield residential properties in prime locations with
                  strong rental demand.
                </p>
                <Button variant="secondary" size="lg">
                  Explore Residential
                </Button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-2xl">
            <img
              src="https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg"
              alt="Commercial Investment"
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl  text-white mb-3">
                  Commercial Properties
                </h3>
                <p className="text-gray-200 mb-4">
                  Strategic commercial properties offering stable long-term
                  returns.
                </p>
                <Button variant="secondary" size="lg">
                  Explore Commercial
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp size={40} className="text-[#D56A34] mb-4" />
            <h4 className="text-xl font-semibold text-[#0F172A] mb-3">
              High ROI
            </h4>
            <p className="text-gray-600">
              Properties selected for their potential to deliver above-market
              returns.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield size={40} className="text-[#D56A34] mb-4" />
            <h4 className="text-xl font-semibold text-[#0F172A] mb-3">
              Secure Investment
            </h4>
            <p className="text-gray-600">
              Thoroughly vetted properties in stable markets with strong growth
              potential.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BarChart3 size={40} className="text-[#D56A34] mb-4" />
            <h4 className="text-xl font-semibold text-[#0F172A] mb-3">
              Market Analysis
            </h4>
            <p className="text-gray-600">
              Comprehensive market research and performance projections for each
              property.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Building2 size={40} className="text-[#D56A34] mb-4" />
            <h4 className="text-xl font-semibold text-[#0F172A] mb-3">
              Property Management
            </h4>
            <p className="text-gray-600">
              Full-service management solutions to maximize your investment
              returns.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InvestmentOpportunitiesSection;
