'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  ShoppingCart,
  Cloud,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServicesShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'web-development',
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React/Next.js', 'Node.js', 'Full-Stack Solutions', 'API Integration'],
      color: 'from-blue-400 to-cyan-400',
      delay: 0.1,
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      color: 'from-purple-400 to-pink-400',
      delay: 0.2,
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality to create memorable experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-green-400 to-blue-400',
      delay: 0.3,
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that help your business grow and reach the right audience effectively.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'Analytics'],
      color: 'from-orange-400 to-red-400',
      delay: 0.4,
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'CRM Systems'],
      color: 'from-yellow-400 to-orange-400',
      delay: 0.5,
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for modern applications and businesses.',
      features: ['AWS/Azure', 'DevOps', 'Scalability', 'Security'],
      color: 'from-indigo-400 to-purple-400',
      delay: 0.6,
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
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400/5 to-blue-500/5" />
        </div>
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-cyan-400/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
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
            <span className="text-sm font-medium text-cyan-300">Our Services</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-white">What We </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Create
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            From concept to deployment, we deliver comprehensive digital solutions
            that drive innovation and accelerate your business growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className="w-8 h-8 text-gray-900" />
                    </motion.div>
                    <motion.div
                      className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl opacity-20 blur-lg`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: service.delay }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.5, delay: service.delay }}
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`} />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <motion.div
                    className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-400 mb-8">
            Ready to bring your vision to life? Let&apos;s discuss your project.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 px-8 py-4 text-lg shadow-lg hover:shadow-cyan-400/25 group"
            asChild
          >
            <Link href="/services" className="flex items-center space-x-2">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
