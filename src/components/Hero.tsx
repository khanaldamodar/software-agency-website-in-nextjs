
import React from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
    const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  return (
     <section id="home" className="pt-20 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -25, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 bg-blue-700/10 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6 lg:space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Innovating the Future
                </span>
                <br />
                <span className="text-gray-800">with Technology</span>
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-gray-600 max-w-xl"
                variants={fadeInUp}
              >
                Leading IT solutions company in Kuleshwar, Kathmandu, Nepal.
                We transform businesses through cutting-edge technology and innovative digital solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://ugc.same-assets.com/MeA2CnMEYQcdePhTM-xy8DZIB7sPsoHI.jpeg"
                  alt="Digital Technology Innovation"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default Hero