'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 'john-doe',
      name: 'John Smith',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Shakta Technology transformed our vision into reality with their exceptional development skills. The team's attention to detail and innovative approach exceeded our expectations. Our platform now serves over 10,000 users daily.",
      project: 'E-commerce Platform',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "The mobile app they developed for us is phenomenal. Users love the intuitive design and seamless performance. Shakta Technology's expertise in mobile development is truly world-class.",
      project: 'Mobile Banking App',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      position: 'CTO',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Working with Shakta Technology was a game-changer for our business. Their AI-powered analytics dashboard provided insights we never thought possible. Revenue increased by 40% within six months.",
      project: 'AI Analytics Dashboard',
      color: 'from-green-400 to-blue-400',
    },
    {
      id: 'emily-davis',
      name: 'Emily Davis',
      position: 'Founder',
      company: 'HealthTech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "The healthcare management system Shakta Technology built revolutionized our operations. Patient satisfaction increased dramatically, and our workflow efficiency improved by 60%. Absolutely outstanding work!",
      project: 'Healthcare Management',
      color: 'from-indigo-400 to-purple-400',
    },
    {
      id: 'david-wilson',
      name: 'David Wilson',
      position: 'VP Technology',
      company: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Their SaaS platform exceeded all our requirements. The scalability, security, and user experience are top-notch. Shakta Technology's technical expertise and project management skills are unmatched.",
      project: 'SaaS Management Platform',
      color: 'from-orange-400 to-red-400',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-400/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-4 py-2 mb-6"
            variants={itemVariants}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Client Testimonials</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about their experience working with Shakta Technology.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 p-8 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 opacity-20">
                  <Quote className="w-16 h-16 text-cyan-400" />
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.color} opacity-5`} />

                <CardContent className="relative p-0">
                  <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Client Info */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <motion.div
                        className="relative mx-auto lg:mx-0 mb-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                        />
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentTestimonial.color} opacity-20 blur-sm`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </motion.div>

                      <h4 className="text-xl font-bold text-white mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-cyan-400 font-medium mb-1">
                        {currentTestimonial.position}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {currentTestimonial.company}
                      </p>

                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start space-x-1 mb-2">
                        {Array.from({ length: currentTestimonial.rating }, (_, i) => (
                          <Star key={`${currentTestimonial.id}-star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${currentTestimonial.color} text-gray-900 text-xs font-medium rounded-full`}>
                        {currentTestimonial.project}
                      </span>
                    </div>

                    {/* Testimonial Text */}
                    <div className="flex-1">
                      <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                        &ldquo;{currentTestimonial.text}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation and Indicators */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-gray-700 text-black hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-gray-700 text-black hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Progress */}
          <div className="text-sm text-gray-400">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
