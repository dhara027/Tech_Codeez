
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-noor-gold">
      <div className="container-width section-padding text-center text-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">
          Ready to Transform Your Tech Infrastructure?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
         Leverage our expert engineering team to build scalable solutions that deliver measurable business outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button
            asChild
            variant="outline"
            className="bg-white text-noor-brown hover:bg-opacity-90 px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white text-noor-brown hover:bg-opacity-90 px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg"
            >
            <Link to="/services">Our Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
