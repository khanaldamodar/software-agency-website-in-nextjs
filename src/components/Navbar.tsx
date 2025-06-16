'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
    <Link href={href}>
      <motion.div
        className={`relative group cursor-pointer ${mobile ? 'py-2' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={`${mobile ? 'text-lg font-medium' : 'font-medium'} text-gray-300 hover:text-cyan-400 transition-colors duration-300`}>
          {children}
        </span>
        {!mobile && (
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </Link>
  );

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/95 border-b border-gray-800'
          : 'bg-gray-900/95 border-b border-gray-800'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
              src={"/logo.png"}
              width={100}
              height={40}
              alt="Shakta Technology Logo"
              className='object-contain'
              
              
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink href={item.href}>{item.name}</NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 pb-6 border-b border-gray-800">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-gray-900" />
                    </div>
                    <span className="text-xl font-bold text-white">
                      Wired<span className="text-cyan-400">Yatra</span>
                    </span>
                  </div>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <NavLink href={item.href} mobile>{item.name}</NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="pt-4"
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
                      asChild
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
