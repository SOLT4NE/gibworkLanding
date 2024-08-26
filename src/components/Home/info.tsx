import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const InfoItem = ({ title, description }) => (
  <motion.div 
    className="mb-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="flex items-center text-xl font-semibold mb-2 text-purple-600">
      <Zap className="mr-2 h-5 w-5" />
      {title}
    </h2>
    <p className="text-gray-700 text-lg">{description}</p>
  </motion.div>
);

const Info = () => {
  const infoItems = [
    {
      title: "Only for Web3 Nerds",
      description: "This is your first website to get a Web3 job and show off your crypto knowledge."
    },
    {
      title: "Cutting-Edge Opportunities",
      description: "Discover roles at the forefront of blockchain technology and decentralized finance."
    },
    {
      title: "Community-Driven Platform",
      description: "Connect with like-minded professionals and build your network in the Web3 space."
    }
  ];

  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/img/info.png" 
              alt="Web3 Jobs Info" 
              width={700} 
              height={700} 
              className="rounded-lg "
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-12">
            <motion.h1 
              className="text-3xl font-bold mb-8 text-purple-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Revolutionize Your Career in Web3
            </motion.h1>
            {infoItems.map((item, index) => (
              <InfoItem key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;