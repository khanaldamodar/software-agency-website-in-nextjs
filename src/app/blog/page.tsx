"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Heart, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
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

const values = [
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients to understand their needs and deliver solutions that exceed expectations.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from code quality to customer service and project delivery.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We stay at the forefront of technology trends and continuously innovate to provide cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate about technology and love creating digital experiences that make a real difference.",
  },
]

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer with 10+ years of experience in building scalable web applications.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative designer specializing in user experience and interface design for web and mobile.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Backend specialist with expertise in cloud architecture and database optimization.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Experienced project manager ensuring smooth delivery and client satisfaction.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "25+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-8 max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                About Us
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">We're Building the Future</h1>
              <p className="text-xl text-[#334155]">
                A passionate team of developers, designers, and innovators dedicated to creating exceptional digital
                experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <div className="space-y-4 text-[#334155]">
                <p>
                  Founded in 2019, DigitalCraft started as a small team of passionate developers who believed that great
                  software could make a real difference in people's lives. What began as a side project quickly grew
                  into a full-service digital agency.
                </p>
                <p>
                  Today, we're proud to have worked with startups, established businesses, and everything in between.
                  Our mission remains the same: to transform ideas into powerful digital solutions that drive growth and
                  create value.
                </p>
                <p>
                  We believe that the best software is built through collaboration, innovation, and a deep understanding
                  of our clients' needs and goals.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our team working together"
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="space-y-4">
                      <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-[#2563EB]" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-[#334155]">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center space-y-2" variants={fadeInUp}>
                <div className="text-4xl font-bold text-[#2563EB]">{stat.number}</div>
                <p className="text-[#334155]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                The talented individuals behind our success. Each team member brings unique skills and perspectives to
                every project.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer}>
              {team.map((member, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-[#2563EB]">{member.role}</p>
                      </div>
                      <p className="text-[#334155] text-sm">{member.bio}</p>
                      <div className="flex justify-center space-x-4">
                        <Link href={member.social.linkedin} className="text-[#334155] hover:text-[#2563EB]">
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href={member.social.twitter} className="text-[#334155] hover:text-[#2563EB]">
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href={member.social.github} className="text-[#334155] hover:text-[#2563EB]">
                          <Github className="h-5 w-5" />
                        </Link>
                      </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Want to Work With Us?</h2>
              <p className="text-xl text-[#334155]">
                We're always excited to work on new projects and help businesses achieve their digital goals.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
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
