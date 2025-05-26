import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-14 flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
          alt="Luxury real estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      <Container className="relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl  font-bold text-white mb-6 leading-tight animate-fade-in">
            GENBLOSH <span className="text-[#D56A34]">PROPERTIES</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8  animate-slide-up">
            MAKING YOUR MONEY WORK HARDER FOR YOU
          </p>
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in sourcing premium investment properties and
            providing comprehensive property management services to maximize
            your returns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] group cursor-pointer"
              // onClick={() }
            >
              <a href="#services">
                <span className="flex items-center justify-center gap-2">
                  Our Services
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] hover:!border-[#C9A54E] cursor-pointer hover:!bg-transparent hover:!text-[#C9A54E] duration-200 "
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2   gap-8 mt-12">
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#D56A34]  text-xl mb-2">
                Property Sourcing
              </h3>
              <p className="text-gray-200">
                Access exclusive investment opportunities through our extensive
                network.
              </p>
            </div>
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#D56A34]  text-xl mb-2">
                Property Management
              </h3>
              <p className="text-gray-200">
                Comprehensive management services to maximize your rental
                returns.
              </p>
            </div>
            {/* <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-[#D56A34]  text-xl mb-2">
                Investment Advisory
              </h3>
              <p className="text-gray-200">
                Expert guidance to help you make informed investment decisions.
              </p>
            </div> */}
          </div>
        </div>
      </Container>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
