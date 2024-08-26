import React, { useState } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Define the type for each testimonial
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

// Define the testimonials array with type safety
const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Blockchain Developer",
    company: "DeFi Solutions",
    image: "https://pbs.twimg.com/profile_images/1742907058091884544/9e2It_B7_400x400.jpg",
    quote: "This platform connected me with cutting-edge projects in the Web3 space. It&apos;s been instrumental in advancing my career in blockchain technology."
  },
  {
    name: "Samantha Lee",
    role: "Crypto Analyst",
    company: "Token Metrics",
    image: "https://pbs.twimg.com/profile_images/1819839466342666240/c2LjEDMG_400x400.jpg",
    quote: "The community here is unparalleled. I&apos;ve found not just job opportunities, but a network of like-minded professionals passionate about decentralized finance."
  },
  {
    name: "Marcus Wei",
    role: "Smart Contract Auditor",
    company: "Secure Chain",
    image: "https://pbs.twimg.com/profile_images/1699539409979187200/PwvGMG32_400x400.jpg",
    quote: "As a security expert, I appreciate the focus on quality projects. This platform has consistently connected me with serious players in the Web3 ecosystem."
  }
];

const Testimonials: React.FC = () => {
  // Type the state properly
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dragControls = useDragControls();

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Add type annotations to the event handler
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (info.offset.x > 100) {
      prevTestimonial();
    } else if (info.offset.x < -100) {
      nextTestimonial();
    }
  };

  return (
    <section className="relative ">
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L1440,32L1440,0L0,0Z"></path>
        </svg>
      </div>
      <div className="relative px-4 pt-24 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="relative overflow-hidden">
          <motion.div
            drag="x"
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-3xl mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                    <p className="text-purple-300">{testimonials[currentIndex].role}</p>
                    <p className="text-indigo-300">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                <blockquote className="text-lg italic mb-4">&ldquo;{testimonials[currentIndex].quote}&rdquo;</blockquote>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-purple-400' : 'bg-purple-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
