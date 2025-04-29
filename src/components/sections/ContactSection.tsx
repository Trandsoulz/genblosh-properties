import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import {
  Mail,
  Phone,
  // MapPin,
  Clock,
} from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl  font-bold text-[#0F172A] mb-6">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-8">
              Whether you're looking to buy, sell, or invest in real estate, our
              team is here to help. Complete the form below, and one of our
              experts will get back to you shortly.
            </p>

            <div className="space-y-6 mb-8">
              {/* <div className="flex items-start">
                <div className="bg-[#0F172A] p-3 rounded-full mr-4">
                  <MapPin className="text-[#D56A34]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Office Location</h4>
                  <p className="text-gray-600">123 Luxury Avenue, New York, NY 10001</p>
                </div>
              </div> */}

              <div className="flex items-start">
                <div className="bg-[#0F172A] p-3 rounded-full mr-4">
                  <Phone className="text-[#D56A34]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">Phone Number</h4>
                  <a href="tel:07497109117" className="text-gray-600">
                    074971-09117
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0F172A] p-3 rounded-full mr-4">
                  <Mail className="text-[#D56A34]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    Email Address
                  </h4>
                  {/* <p className="text-gray-600">info@genbloshproperties.com</p> */}
                  <a
                    href="mailto:info@genbloshproperties.com"
                    className="text-gray-600"
                  >
                    info@genbloshproperties.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0F172A] p-3 rounded-full mr-4">
                  <Clock className="text-[#D56A34]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday-Friday: 9am-6pm
                    <br />
                    Saturday: 10am-4pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  >
                    <option value="" disabled selected>
                      Please select...
                    </option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investing">Investment Opportunities</option>
                    <option value="management">Property Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  ></textarea>
                </div>

                <Button variant="secondary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
