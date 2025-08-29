'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProjectsShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const projects = [
  //   {
  //     id: 'ecommerce-platform',
  //     title: 'E-commerce Platform',
  //     description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',
  //     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
  //     tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  //     category: 'Web Development',
  //     color: 'from-blue-400 to-cyan-400',
  //   },
  // ];
  const projects = [
 
  // ? Karnali Pradesh
  {
    id: 9,
          description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',

    title: "Pradesh Pramukh",
    category: "Karnali",
    image: "/websites/pradesh-pramukh.png",
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 10,
    title: "Dolpo Buddha Gaunpalika",
    category: "Karnali",
          description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',

    image: "/websites/project-3.png",
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 11,
    title: "She-Foksundo Gaunpalika",
    category: "Karnali",
          description: 'Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',

    image: "/clientlogo/sefoksundo.jpg",
    color: 'from-blue-400 to-cyan-400',
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
          className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
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
            <span className="text-sm font-medium text-cyan-300">Recent Projects</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="text-white">Our Latest </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover how we&apos;ve helped businesses transform their digital presence
            with innovative solutions and cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group overflow-hidden">
                <div className="relative">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                    {/* Project Links */}
                   

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        className={`bg-gradient-to-r ${project.color} text-gray-900 font-medium`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}

                    {/* Learn More Link */}
                    {/* <motion.div
                      className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div> */}
                  </CardContent>
                </div>
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
            Want to see more of our work? Explore our complete portfolio.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 px-8 py-4 text-lg shadow-lg hover:shadow-cyan-400/25 group"
            asChild
          >
            <Link href="/portfolio" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
