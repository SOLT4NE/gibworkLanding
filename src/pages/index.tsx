import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "~/components/ui/button";
import { Navbar } from "~/components/layout/nav";
import HeroCop from "~/components/Home/hero";
import Info from "~/components/Home/info";
import MovingPartners from "~/components/Home/movingLin";
import Testimonials from "~/components/Home/testemonials";
import  AccordionDemo  from "~/components/Home/faq";
import FooterComp from "~/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col gap-4 ">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroCop />
      </div>
      <MovingPartners />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Info />
      </div>

      <div className="bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
        <Testimonials />
        <AccordionDemo />
        <FooterComp /> 

      </div>


      {/* Rest of your home page content */}
    </div>
  );
}
