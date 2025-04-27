import React from "react";
import Container from "../ui/Container";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Building2 size={32} className="text-[#D56A34] mr-2" />
              <span className=" text-xl font-bold">Genblosh Properties</span>
            </div>
            <p className="text-gray-300 mb-6">
              Providing exceptional real estate services and investment
              opportunities for clients worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#D56A34] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D56A34] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D56A34] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#D56A34] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {/* <li>
                <a href="#properties" className="text-gray-300 hover:text-[#D56A34] transition-colors">
                  Properties
                </a>
              </li> */}
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#D56A34] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#D56A34] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-[#D56A34] transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#D56A34] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-[#D56A34] mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  123 Luxury Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-[#D56A34] mr-3 flex-shrink-0"
                />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#D56A34] mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  info@genbloshproperties.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property listings and
              investment insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-[#1E293B] border border-gray-700 text-white focus:outline-none focus:border-[#D56A34] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#D56A34] text-[#0F172A] py-2 rounded-md font-medium hover:bg-[#C9A54E] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} genblosh Properties. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
