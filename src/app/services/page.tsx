"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Database,
  Cloud,
  Shield,
  BarChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

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

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    features: ["React & Next.js", "Node.js Backend", "Responsive Design", "SEO Optimization"],
    price: "Starting at $2,500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    price: "Starting at $5,000",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that convert visitors into customers",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting at $1,500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions and API development",
    features: ["RESTful APIs", "GraphQL", "Database Design", "Microservices"],
    price: "Starting at $3,000",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup and deployment services",
    features: ["AWS/Azure/GCP", "DevOps", "CI/CD Pipelines", "Monitoring"],
    price: "Starting at $2,000",
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments and vulnerability testing",
    features: ["Penetration Testing", "Code Review", "Security Consulting", "Compliance"],
    price: "Starting at $1,000",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience",
    features: ["Code Optimization", "Database Tuning", "CDN Setup", "Monitoring"],
    price: "Starting at $800",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Data-driven insights to help you make better business decisions",
    features: ["Google Analytics", "Custom Dashboards", "A/B Testing", "Reporting"],
    price: "Starting at $600",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals, target audience, and project requirements.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed project plan with timelines, milestones, and deliverables.",
  },
  {
    step: "03",
    title: "Design",
    description: "Our designers create beautiful, user-friendly interfaces that align with your brand.",
  },
  {
    step: "04",
    title: "Development",
    description: "Our developers bring the designs to life using the latest technologies and best practices.",
  },
  {
    step: "05",
    title: "Testing",
    description: "We thoroughly test your application to ensure it works perfectly across all devices.",
  },
  {
    step: "06",
    title: "Launch",
    description: "We deploy your application and provide ongoing support and maintenance.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#2563EB]/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-8 max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                Our Services
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Comprehensive Digital Solutions
              </h1>
              <p className="text-xl text-[#334155]">
                From concept to deployment, we provide end-to-end services to help your business succeed in the digital
                world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#2563EB]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors mb-4">
                      <service.icon className="h-6 w-6 text-[#2563EB]" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-[#334155]">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#2563EB]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t">
                      <p className="font-semibold text-[#2563EB]">{service.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#94a3b8]/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                We follow a proven process to ensure your project is delivered on time, within budget, and exceeds
                expectations.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer}>
              {process.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} >
                  <Card className="text-center p-6 h-full bg-white">
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-[#2563EB] text-[#FFFFFF] rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-[#334155]">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="text-xl text-[#334155]">
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
