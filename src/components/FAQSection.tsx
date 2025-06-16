'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      id: 'faq-1',
      question: 'What services do you offer?',
      answer: 'We offer comprehensive software development services including web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, and cloud infrastructure. Our team specializes in modern technologies and frameworks to deliver cutting-edge solutions.',
    },
    {
      id: 'faq-2',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months or more. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.',
    },
    {
      id: 'faq-3',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support. We believe in long-term partnerships with our clients.',
    },
    {
      id: 'faq-4',
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, PostgreSQL, MongoDB, and many more. We stay updated with the latest technologies to provide the best solutions.',
    },
    {
      id: 'faq-5',
      question: 'How do you handle project communication?',
      answer: 'We maintain transparent communication through regular updates, scheduled meetings, and project management tools. You\'ll have direct access to your project team and receive weekly progress reports. We use tools like Slack, Zoom, and project dashboards.',
    },
    {
      id: 'faq-6',
      question: 'What is your development process?',
      answer: 'Our process includes discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We follow agile methodologies with regular sprints and client feedback integration throughout the project.',
    },
    {
      id: 'faq-7',
      question: 'Do you work with startups and enterprises?',
      answer: 'Yes, we work with businesses of all sizes from early-stage startups to large enterprises. We tailor our approach and solutions to match your specific needs, budget, and timeline requirements.',
    },
    {
      id: 'faq-8',
      question: 'How do you ensure project security?',
      answer: 'Security is a top priority in all our projects. We implement industry best practices including secure coding standards, data encryption, regular security audits, compliance with regulations like GDPR, and secure deployment practices.',
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
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-sm font-medium text-cyan-300">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-white">Got </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Find answers to common questions about our services, process, and how we can help
            transform your business with cutting-edge technology solutions.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <div className="flex items-center space-x-3 w-full">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-cyan-400 font-semibold text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-11">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
              Get in touch and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 px-8 py-3 group"
                asChild
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-3"
                asChild
              >
                <Link href="/faqs">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
