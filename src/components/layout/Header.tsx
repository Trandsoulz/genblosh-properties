import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import {
  Menu,
  X,
  Phone,
  // Building2,
  //Search,
  // MapPin,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              {" "}
              <img
                src="/logo.webp"
                alt="logo"
                height={70}
                width={70}
                className={`${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                } mr-2 w-[55px] md:w-[70px]`}
              />
            </a>
            {/* <Building2 
              size={32} 
              className={`${isScrolled ? 'text-[#0F172A]' : 'text-white'} mr-2`} 
            /> */}
            {/* <span
              className={` text-xl font-bold ${
                isScrolled ? "text-[#0F172A]" : "text-white"
              }`}
            >
              Genblosh Properties
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`${
                isScrolled
                  ? "text-[#0F172A] hover:text-[#D56A34]"
                  : "text-white hover:text-[#D56A34]"
              } transition-colors flex items-center gap-2`}
            >
              <Search size={18} />
              <span>Search</span>
            </button> */}
            {/* <a
              href="#properties"
              className={`${
                isScrolled
                  ? "text-[#0F172A] hover:text-[#D56A34]"
                  : "text-white hover:text-[#D56A34]"
              } transition-colors`}
            >
              Properties
            </a> */}
            <a
              href="/"
              className={`${
                isScrolled
                  ? "text-[#0F172A] hover:text-[#D56A34]"
                  : "text-white hover:text-[#D56A34]"
              } transition-colors`}
            >
              Home
            </a>
            <a
              href="#services"
              className={`${
                isScrolled
                  ? "text-[#0F172A] hover:text-[#D56A34]"
                  : "text-white hover:text-[#D56A34]"
              } transition-colors`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`${
                isScrolled
                  ? "text-[#0F172A] hover:text-[#D56A34]"
                  : "text-white hover:text-[#D56A34]"
              } transition-colors`}
            >
              About Us
            </a>
            <a
              href="#whychooseus"
              className={`${
                isScrolled
                  ? "text-[#0F172A] hover:text-[#D56A34]"
                  : "text-white hover:text-[#D56A34]"
              } transition-colors`}
            >
              Why Choose Us
            </a>
            {/* <div className="flex items-center ml-6">
              <Phone
                size={16}
                className={`${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                } mr-2`}
              />
              <span
                className={`${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                } font-medium`}
              >
                (555) 123-4567
              </span>
            </div> */}
            <a
              href="#services"
              className={`${
                isScrolled
                  ? "bg-[#0F172A] text-white hover:bg-[#1E293B] dark:bg-[#D56A34] dark:text-[#0F172A] dark:hover:bg-[#C9A54E] "
                  : "bg-[#D56A34] text-[#0F172A] hover:bg-[#C9A54E] transform"
              } px-5 py-2 rounded-lg hover:-translate-y-1 transition duration-200`}
            >
              Contact Us
            </a>

            {/* <Button
              variant={isScrolled ? "secondary" : "primary"}
              className="ml-4"
            >
              Contact Us
            </Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                size={35}
                className={isScrolled ? "text-[#0F172A]" : "text-white"}
              />
            ) : (
              <Menu
                size={35}
                className={isScrolled ? "text-[#0F172A]" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Quick Search Bar */}
        {/* {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-b-lg p-4 animate-fade-in">
            <Container>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <MapPin
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Enter location or property type..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  />
                </div>
                <Button variant="secondary" className="whitespace-nowrap">
                  Search Now
                </Button>
              </div>
            </Container>
          </div>
        )} */}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 m-4 top-full mt-2 bg-white rounded-lg shadow-lg animate-fade-in">
            <nav className="flex flex-col divide-y divide-gray-100">
              {/* <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="flex items-center gap-2 px-6 py-4 text-[#0F172A] hover:bg-gray-50"
              >
                <Search size={18} />
                <span>Search Properties</span>
              </button> */}
              {/* <a
                href="#properties"
                className="px-6 py-4 text-[#0F172A] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </a> */}
              <a
                href="/"
                className="px-6 py-4 text-[#0F172A] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="px-6 py-4 text-[#0F172A] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="px-6 py-4 text-[#0F172A] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#whychooseus"
                className="px-6 py-4 text-[#0F172A] hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </a>
              <div className="px-6 py-4 flex items-center">
                <Phone size={16} className="text-[#0F172A] mr-2" />
                <span className="text-[#0F172A] font-medium">
                  (555) 123-4567
                </span>
              </div>
              <div className="p-6">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
