"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Code,
  Smartphone,
  Globe,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services#web" },
      { name: "Mobile Apps", href: "/services#mobile" },
      { name: "UI/UX Design", href: "/services#design" },
      { name: "Digital Marketing", href: "/services#marketing" },
      { name: "E-commerce", href: "/services#ecommerce" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
    resources: [
      { name: "Portfolio", href: "/portfolio" },
      { name: "Case Studies", href: "/portfolio#case-studies" },
      { name: "FAQs", href: "/faqs" },
      { name: "Support", href: "/support" },
      { name: "Documentation", href: "/docs" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/", label: "GitHub" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/Shakta Technology",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://github.com/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com",
      label: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
        </div>
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <motion.div
                className="flex items-center space-x-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-42 h-20">
                <Image
                  src={"/logo.png"}
                  fill
                  alt="Shakta Technology Logo"

                  className="object-contain"
                />
                </div>
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into digital excellence. We craft cutting-edge
              software solutions that drive innovation and empower businesses to
              thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-lg flex items-center justify-center group transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-cyan-400" />
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>hello@Shakta Technology.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+977 9866437014</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Kathmandu Nepal</span>
              </div>
            </div>
            <h4 className="text-md font-medium text-white mb-3">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.slice(0, 3).map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 Shakta Technology. All rights reserved. Crafted with ❤️ for the
            future.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 text-gray-900" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
