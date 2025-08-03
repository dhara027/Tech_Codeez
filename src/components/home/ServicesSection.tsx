import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Web Development",
    description: "Build fast, secure, and scalable websites with modern technologies for optimal performance and user experience.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Responsive Design",
      "Frontend Development (React, Vue, Angular)",
      "Backend Development (Node.js, Python, PHP)",
      "E-commerce Solutions",
      "Website Maintenance"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Create powerful native and cross-platform mobile applications that deliver seamless user experiences.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "Cross-Platform (React Native, Flutter)",
      "App UI/UX Design",
      "App Store Optimization",
      "API Integration"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Create intuitive and visually stunning interfaces that enhance user engagement and satisfaction.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "E-commerce Development",
    description: "Build powerful online stores with seamless checkout experiences and integrated payment solutions.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Shopify Development",
      "WooCommerce Solutions",
      "Custom Cart Development",
      "Payment Gateway Integration",
      "Inventory Management"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Data Analytics",
    description: "Transform raw data into actionable insights to drive business decisions and marketing strategies.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Dashboard Development",
      "KPI Tracking",
      "Customer Segmentation",
      "Predictive Modeling",
      "Data Visualization"
    ]
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-noor-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Web Scraping",
    description: "Automate data collection from websites to gather market intelligence and competitive insights.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Custom Scraping Solutions",
      "Data Cleaning & Processing",
      "API Development",
      "Competitor Monitoring",
      "Price Intelligence"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-noor-lightGray">
      <div className="container-width section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-noor-brown">
            Our Services
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-noor-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We deliver cutting-edge technology solutions engineered to accelerate your business growth and enhance customer engagement.
            Here's how we can supercharge your success:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group"
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  {service.icon}
                </div>
              </div>

              <CardHeader className="pb-2 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-noor-brown">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow px-4 sm:px-6">
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-noor-gold rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-noor-gold font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </CardContent>

              <CardFooter className="px-4 sm:px-6 pt-4">
                <Link
                  to="/services"
                  className="text-noor-gold font-medium flex items-center hover:text-noor-brown transition-colors duration-200 text-sm sm:text-base"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button asChild className="bg-noor-brown hover:bg-noor-darkBrown px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;