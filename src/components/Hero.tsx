'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Rocket, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const floatingIcons = [
    { icon: Zap, delay: 0.2, x: 20, y: 30 },
    { icon: Code2, delay: 0.4, x: -30, y: 50 },
    { icon: Rocket, delay: 0.6, x: 40, y: -20 },
    { icon: Sparkles, delay: 0.8, x: -20, y: -40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/5 to-blue-500/5" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-3/4 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={item.icon.name || index}
          className="absolute z-10 hidden lg:block"
          style={{
            left: `${50 + item.x}%`,
            top: `${50 + item.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -20, -40, -60],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-400/30">
            <item.icon className="w-6 h-6 text-cyan-400" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Innovating the Future of Technology</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Build the</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Future Today
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We craft cutting-edge software solutions that transform ideas into digital excellence.
            From web applications to mobile apps, we&apos;re your partner in innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 px-8 py-4 text-lg shadow-lg hover:shadow-cyan-400/25 group"
              asChild
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-700 text-black hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-4 text-lg backdrop-blur-sm"
              asChild
            >
              <Link  href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
