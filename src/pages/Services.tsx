
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "Web Development",
      title: "Web Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "We design and develop websites that not only look beautiful but also convert visitors into customers. Our websites are fully responsive, optimized for search engines, and built with user experience in mind.",
      deliverables: [
        "Custom Website Design",
        "Mobile Responsive Development",
        "E-commerce Solutions",
        "User Experience Optimization",
        "Website Maintenance & Support",
        "Performance Optimization",
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
{
  id: "mobile-app-development",
  title: "Mobile App Development",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-noor-gold"
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
  description:
    "Transform your business with custom mobile applications that engage users and drive growth. Our end-to-end development services cover everything from concept to deployment, delivering secure, scalable, and high-performance apps for both iOS and Android platforms.",
  deliverables: [
    "iOS App Development (Swift/SwiftUI)",
    "Android App Development (Kotlin/Java)",
    "Cross-Platform Development (Flutter/React Native)",
    "UI/UX Design & Prototyping",
    "API Integration & Backend Development",
    "Push Notifications & In-App Messaging",
    "In-App Purchases & Payment Gateways",
    "App Store Optimization (ASO)",
    "Quality Assurance & Performance Testing",
    "App Analytics & Performance Monitoring",
    "Enterprise Mobility Solutions",
    "IoT & Wearable App Integration",
    "App Maintenance & Updates",
    "Cloud Integration & Sync Solutions"
  ],
  image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},


    {
      id: "UI/UX Design",
      title: " UI/UX Design",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-noor-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      description:
        "Our UI/UX Design services help you attract,We craft intuitive, visually stunning interfaces that enhance user engagement and drive conversions. From wireframing to prototyping, we ensure every click feels effortless..",
      deliverables: [
       "User Research & Persona Development",
       "Interactive Prototyping (Figma, Adobe XD, Sketch)",
       " Conversion-Focused Design Strategies",
       " Usability Testing & Iterative Improvements",
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  {
  id: "ecommerce-marketing",
  title: "E-commerce Marketing",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-noor-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  ),
  description:
    "Boost your online store's performance with our comprehensive e-commerce marketing solutions. We specialize in driving targeted traffic, increasing conversions, and maximizing customer lifetime value through data-driven strategies across all digital channels.",
  deliverables: [
    "E-commerce Strategy Development",
    "Product Listing Optimization",
    "Shopping Campaign Management",
    "Conversion Rate Optimization",
    "Email Marketing Automation",
    "Retargeting Campaigns",
    "Marketplace Optimization (Amazon, eBay, etc.)",
    "Customer Retention Programs",
    "Upsell/Cross-sell Strategies",
    "E-commerce Analytics & Reporting"
  ],
  image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},
   {
  id: "data-analytics",
  title: "Data Analytics",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-noor-gold"
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
  description:
    "Transform raw data into actionable insights with our advanced analytics services. We help you measure performance, uncover trends, and make data-driven decisions to optimize your marketing ROI and business growth.",
  deliverables: [
    "Custom Dashboard Development",
    "Marketing Performance Analysis",
    "Customer Behavior Tracking",
    "Conversion Funnel Analysis",
    "ROI & Attribution Modeling",
    "Predictive Analytics",
    "Data Visualization & Reporting",
    "KPI Identification & Tracking",
    "Competitive Benchmarking",
    "Data Integration & Automation"
  ],
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},
{
  id: "web-scraping",
  title: "Web Scraping & Data Extraction",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-noor-gold"
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
  description:
    "Extract valuable business intelligence from websites with our professional web scraping services. We collect, structure, and deliver web data for competitive analysis, lead generation, market research, and more.",
  deliverables: [
    "Custom Web Scraping Solutions",
    "Competitor Price Monitoring",
    "Lead Generation & Contact Extraction",
    "Product Data Collection",
    "Real Estate Listings Aggregation",
    "Job Postings Data Extraction",
    "News & Article Scraping",
    "API Development for Data Access",
    "Data Cleaning & Normalization",
    "Automated Data Delivery"
  ],
 image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},

  {
  id: "ai-marketing",
  title: "AI-Powered Digital Marketing",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-noor-gold"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  description:
    "Leverage cutting-edge artificial intelligence to supercharge your marketing efforts. Our AI solutions deliver predictive analytics, hyper-personalization, and automated optimization across all digital channels for maximum ROI.",
  deliverables: [
    "AI-Powered Customer Segmentation",
    "Predictive Analytics & Forecasting",
    "Chatbot & Conversational AI Solutions",
    "Dynamic Content Personalization",
    "Automated Campaign Optimization",
    "AI-Generated Marketing Content",
    "Sentiment Analysis & Brand Monitoring",
    "Programmatic Media Buying with AI",
    "Voice Search Optimization",
    "Marketing Automation with Machine Learning"
  ],
 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noor-brown to-noor-darkBrown py-20">
        <div className="container-width section-padding text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide end-to-end IT solutions designed 
            to drive business growth and operational efficiency.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">
              How We Help Your Business Grow
            </h2>
            <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
             We deliver end-to-end IT solutions customized to your goals, 
             industry, and audience—built for growth and scalability.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex justify-center lg:justify-start mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-noor-brown text-center lg:text-left">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="text-lg font-semibold mb-3 text-noor-brown">
                    What's Included:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-noor-gold mr-2 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-right-4" : "-left-4"
                      } -bottom-4 w-full h-full bg-noor-gold rounded-lg opacity-30`}
                    ></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg shadow-lg relative z-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-noor-lightGray">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-noor-brown">Our Process</h2>
            <div className="w-20 h-1 bg-noor-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
             Our proven methodology ensures successful delivery of reliable
             and scalable IT solutions for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, target audience, and competition.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a customized strategy based on your objectives and our research findings.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "We execute the strategy with precision, creativity, and attention to detail.",
              },
              {
                number: "04",
                title: "Optimization",
                description:
                  "We continuously monitor, analyze, and optimize to improve performance and results.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <span className="text-6xl font-bold text-noor-gold opacity-30">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-2 text-noor-brown">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noor-brown">
        <div className="container-width section-padding text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch to explore
             how our IT services can support your growth.
          </p>
          <Button
            asChild
            className="bg-noor-gold hover:bg-opacity-90 text-white px-8 py-6 text-lg"
          >
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
