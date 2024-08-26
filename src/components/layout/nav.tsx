import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";
import { CirclePlus, CheckSquare, HelpCircle, Gift, User, Menu } from 'lucide-react';

// Define the types for the NavItem component props
interface NavItemProps {
  href: string;
  icon: ReactNode;
  text: string;
}

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  [key: string]: any; // Accepts any additional props
}

// Navbar Component
export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      className="bg-white border-b border-gray-200"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="text-purple-600 font-bold text-2xl flex items-center gap-3">
              <Image src="/img/logo.png" alt="logo" width={48} height={48} /> Work
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavItem href="/task" icon={<CheckSquare size={20} />} text="Task" />
            <NavItem href="/questions" icon={<HelpCircle size={20} />} text="Questions" />
            <NavItem href="/bounties" icon={<Gift size={20} />} text="Bounties" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <AnimatedButton className='bg-[#8151FD] text-white border border-[#8151FD]' size="lg">
              <CirclePlus size={20} className="mr-2" />
              Create
            </AnimatedButton>
            <AnimatedButton className='bg-white text-[#8151FD] border border-[#8151FD]' size="lg">
              <User size={20} className="mr-2" />
              Profile
            </AnimatedButton>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-6">
                  <MobileNavItem href="/task" icon={<CheckSquare size={24} />} text="Task" />
                  <MobileNavItem href="/questions" icon={<HelpCircle size={24} />} text="Questions" />
                  <MobileNavItem href="/bounties" icon={<Gift size={24} />} text="Bounties" />
                  <MobileNavItem href="/profile" icon={<User size={24} />} text="Profile" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// NavItem Component
const NavItem: React.FC<NavItemProps> = ({ href, icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={href} className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md">
      <span className='text-[#8151FD]'>{icon}</span>
      <span className="ml-2 font-medium">{text}</span>
    </Link>
  </motion.div>
);

// MobileNavItem Component with same props as NavItem
const MobileNavItem: React.FC<NavItemProps> = ({ href, icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={href} className="flex items-center px-4 py-3 text-xl text-gray-700 hover:bg-gray-100 rounded-md">
      <span className='text-[#8151FD]'>{icon}</span>
      <span className="ml-3 font-medium">{text}</span>
    </Link>
  </motion.div>
);

// AnimatedButton Component
const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button className={`text-base font-medium ${className}`} {...props}>
      {children}
    </Button>
  </motion.div>
);

export default Navbar;
