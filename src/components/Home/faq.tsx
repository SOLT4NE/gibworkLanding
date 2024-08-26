import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Web3 and why is it important?",
    answer: "Web3 refers to the next generation of the internet, built on decentralized technologies like blockchain. It's important because it promises greater user control, improved privacy, and new economic models."
  },
  {
    question: "How do I get started in a Web3 career?",
    answer: "To start a Web3 career, focus on learning blockchain fundamentals, smart contract development, and decentralized application (dApp) creation. Familiarize yourself with languages like Solidity and tools like Web3.js."
  },
  {
    question: "What types of jobs are available in the Web3 space?",
    answer: "Web3 offers diverse roles including blockchain developers, smart contract auditors, tokenomics experts, community managers, DeFi analysts, and NFT artists, among others."
  },
  {
    question: "Do I need a background in finance or computer science for Web3 jobs?",
    answer: "While a background in these fields can be helpful, it's not always necessary. Many Web3 roles value skills in problem-solving, innovation, and adaptability. There are opportunities for various backgrounds."
  }
];

const FAQItem = ({ question, answer } : { question : string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="mb-4 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden"
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)" }}
    >
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-4 pt-0">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="">
     
      <div className="relative px-4 pt-24 pb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;