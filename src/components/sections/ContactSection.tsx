import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import {
  Mail,
  Phone,
  // MapPin,
  Clock,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  interest: z.enum(["buying", "selling", "investing", "management", "other"], {
    required_error: "Please select an option",
    invalid_type_error: "Please select an option",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

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
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                Send Us a Message
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 text-black"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
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
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    I'm Interested In
                  </label>
                  <select
                    {...register("interest")}
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  >
                    <option value="">Please select...</option>
                    <option value="buying">Buying a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investing">Investment Opportunities</option>
                    <option value="management">Property Management</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && (
                    <p className="mt-1 text-sm text-red-600">
                      Please select an option
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D56A34]"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="secondary" className="w-full">
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
