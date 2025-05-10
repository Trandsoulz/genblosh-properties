import React from "react";
import Container from "../ui/Container";
import {
  Shield,
  Target,
  Users,
  // Award,
  Clock,
  Headphones,
} from "lucide-react";

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24" id="whychooseus">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Genblosh Properties?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            With decades of experience in luxury real estate and a commitment to
            excellence, we deliver exceptional results for our clients through
            innovative solutions and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300">
            <Shield className="text-[#D56A34] mb-6" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4">
              Trusted Excellence
            </h3>
            <p className="text-gray-300">
              Our reputation is built on trust, transparency, and delivering
              exceptional results for every client we serve.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300">
            <Target className="text-[#D56A34] mb-6" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4">
              Strategic Approach
            </h3>
            <p className="text-gray-300">
              We combine market intelligence with innovative strategies to
              maximize your investment potential.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300">
            <Users className="text-[#D56A34] mb-6" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4">
              Expert Team
            </h3>
            <p className="text-gray-300">
              Our seasoned professionals bring decades of combined experience in
              real estate investment and management.
            </p>
          </div>

          {/* <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300">
            <Award className="text-[#D56A34] mb-6" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-gray-300">
              With over $5 million in successful transactions, our results speak
              for themselves.
            </p>
          </div> */}

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300">
            <Clock className="text-[#D56A34] mb-6" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4">
              Timely Execution
            </h3>
            <p className="text-gray-300">
              We understand the importance of timing in real estate and ensure
              swift, efficient transactions.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-all duration-300">
            <Headphones className="text-[#D56A34] mb-6" size={40} />
            <h3 className="text-xl font-semibold text-white mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-300">
              Our dedicated team is always available to address your needs and
              concerns promptly.
            </p>
          </div>
        </div>

        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <p className="text-3xl font-bold text-[#D56A34] mb-2">15+</p>
            <p className="text-white">Years Experience</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <p className="text-3xl font-bold text-[#D56A34] mb-2">2B+</p>
            <p className="text-white">Properties Sold</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <p className="text-3xl font-bold text-[#D56A34] mb-2">350+</p>
            <p className="text-white">Happy Clients</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <p className="text-3xl font-bold text-[#D56A34] mb-2">98%</p>
            <p className="text-white">Client Satisfaction</p>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
