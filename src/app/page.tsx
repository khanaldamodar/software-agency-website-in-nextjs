"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Palette, Zap, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import Hero from "@/components/Hero"
import Blog from "@/components/Blog"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert visitors into customers",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast applications optimized for speed and efficiency",
  },
]

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    image: "/websites/ecom.jpg",
    description: "Modern e-commerce solution with advanced features",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "/websites/wallet.jpg",
    description: "Secure banking application with biometric authentication",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web",
    image: "/websites/saas.jpg",
    description: "Analytics dashboard for business intelligence",
  },
  {
    id: 4,
    title: "Restaurant Website",
    category: "Web",
    image: "/websites/resturant.jpg",
    description: "Modern restaurant website with online ordering",
  },
  {
    id: 5,
    title: "Travel App",
    category: "Mobile",
    image: "/websites/travel.jpg",
    description: "Travel planning and booking mobile application",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    content:
      "Exceptional work! They delivered our project on time and exceeded our expectations. The attention to detail was remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Digital Solutions",
    content:
      "Professional team with great communication. Our mobile app has received fantastic user feedback since launch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Creative Agency",
    content:
      "Outstanding design and development skills. They transformed our vision into a beautiful, functional website.",
    rating: 5,
  },
]

export default function HomePage() {
  const [portfolioFilter, setPortfolioFilter] = useState("All")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const filteredPortfolio =
    portfolioFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === portfolioFilter)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
    <Hero/>

      {/* Intro Section */}
      <section className="py-24 bg-[#94a3b8]/50">
        <div className="container container-centered px-4 md:px-6">
          <motion.div
            className="text-center space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We Transform Ideas Into Reality
              </h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                With over a decade of experience, we specialize in creating digital solutions that make a difference.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer}>
              <motion.div className="text-center space-y-2" variants={fadeInUp}>
                <div className="text-4xl font-bold text-[#2563EB]">
                  <AnimatedCounter end={50} />+
                </div>
                <p className="text-[#334155]">Projects Completed</p>
              </motion.div>
              <motion.div className="text-center space-y-2" variants={fadeInUp}>
                <div className="text-4xl font-bold text-[#2563EB]">
                  <AnimatedCounter end={25} />+
                </div>
                <p className="text-[#334155]">Happy Clients</p>
              </motion.div>
              <motion.div className="text-center space-y-2" variants={fadeInUp}>
                <div className="text-4xl font-bold text-[#2563EB]">
                  <AnimatedCounter end={5} />+
                </div>
                <p className="text-[#334155]">Years Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                We offer comprehensive digital solutions to help your business thrive in the modern world.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-[#2563EB]" />
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-[#334155]">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 bg-[#94a3b8]/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                Explore some of our recent projects and see how we've helped businesses achieve their goals.
              </p>
            </motion.div>

            <motion.div className="flex justify-center space-x-4" variants={fadeInUp}>
              {["All", "Web", "Mobile"].map((filter) => (
                <Button
                  key={filter}
                  variant={portfolioFilter === filter ? "default" : "outline"}
                  onClick={() => setPortfolioFilter(filter)}
                  className={`${
                    portfolioFilter === filter ? "bg-[#2563EB] text-white" : "text-[#334155]"
                  } transition-colors duration-300`} 
                >
                  {filter}
                </Button>
              ))}
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
              {filteredPortfolio.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{item.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-[#334155]">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </motion.div>

            <motion.div className="relative max-w-4xl mx-auto" variants={fadeInUp}>
              <Card className="p-8">
                <CardContent className="text-center space-y-6">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-[#2563EB]" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic">"{testimonials[currentTestimonial].content}"</blockquote>
                  <div>
                    <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-[#334155]">{testimonials[currentTestimonial].company}</p>
                  </div>
                </CardContent>
              </Card>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Blog/>

      {/* CTA Section */}
      <section className="py-24 bg-[#2563EB] text-[#FFFFFF]">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto max-w-[700px] text-[#FFFFFF]/80 md:text-xl">
                Let's discuss how we can help bring your vision to life. Get in touch with us today.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#FFFFFF] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#2563EB]"
                asChild
              >
                <Link href="/portfolio" className="text-black">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
