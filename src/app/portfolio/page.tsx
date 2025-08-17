"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const portfolioItems = [
  {
    id: 1,
    title: "Karnali Province Department",
    category: "Web",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, payment processing, and admin dashboard.",
    image: "/websites/pradesh-pramukh.png",
    technologies: ["Next.js", "TypeScript", "tailwindcss", "Laravel", "MySql"],
    liveUrl: "https://karnali-pradesh.vercel.app",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "MAOIST Provionce Website",
    category: "Web",
    description:
      "Secure banking application with biometric authentication, transaction history, and real-time notifications. Built with React Native.",
    image: "/websites/maiost.png",
    technologies: ["Next.js", "TypeScript", "tailwindcss", "Laravel", "MySql"],
    liveUrl: "https://party-backend-deom.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "डोल्पो बुद्ध गाउँपालिका",
    category: "Web",
    description:
      "Comprehensive analytics dashboard for business intelligence with real-time data visualization and reporting capabilities.",
    image: "/websites/project-3.png",
    technologies: ["DotNet", "SQL", "Bootstrap"],
    liveUrl: "http://194.233.79.28:3/",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "शे-फोक्सुण्डो गाउँपालिका",
    category: "Web",
    description:
      "Health and fitness tracking mobile application with workout plans, progress tracking, and social features.",
    image: "/websites/project-5.png",
    technologies: ["DotNet", "SQL", "Bootstrap"],
    liveUrl: "http://194.233.79.28:5/",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "कुश्मा नगरपालिकाको डिजिटल प्रोफाइल",
    category: "Web",
    description:
      "Complete restaurant management solution with online ordering, table reservations, and inventory management.",
    image: "/websites/digital-profile.png",
    technologies: ["DotNet", "Angular", "SQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "बेरुजु व्यवस्थापन प्रणाली",
    category: "Web",
    description:
      "Comprehensive travel planning application with itinerary creation, booking integration, and offline maps.",
    image: "/websites/project-6.png",
    technologies: ["DotNet", "Angular", "SQL", "Bootstrap"],
    liveUrl: "http://194.233.79.28:6/",
    githubUrl: "#",
    featured: false,
  },
];

const totalProjects = [
  {
    id: 1,
    name: "ChandraGiri Municipality",
    category: "Bagmati",
    image: "/websites/chandragiri.png",
  },
  {
    id: 2,
    namw: "Samppati Suddhikaran Kendra",
    category: "Bagmati",
    image: "/websites/sampati.png",
  },
  {
    id: 3,
    name: "Soil Testing Lab",
    category: "Bagmati",
    image: "/websites/soil-testing.png",
  },
  // ? Gandaki Pradesh
  {
    id: 4,
    name: "Sundar bazar Municipality",
    category: "Gandaki",
    image: "/websites/sundar-bazar.png",
  },
  {
    id: 5,
    name: "Dudh Pokhari Muncipality",
    category: "Gandaki",
    image: "/websites/dudh-pokhari.png",
  },
  {
    id: 6,
    name: "Kusma Municipality",
    category: "Gandaki",
    image: "/websites/kusma.png",
  },
  // ? Lumbini Pradesh
  {
    id: 7,
    name: "MOAIST Lumbini",
    category: "Lumbini",
    image: "/websites/lumbini.png",
  },
  {
    id: 8,
    name: "thakurdada Municipality",
    category: "Lumbini",
    image: "/websites/thakurdada.png",
  },

  // ? Karnali Pradesh
  {
    id: 9,
    name: "PraDESH Pramukh",
    category: "Karnali",
    image: "/websites/pradesh-pramukh.png",
  },
  {
    id: 10,
    name: "Dolpo Buddha Gaunpalika",
    category: "Karnali",
    image: "/websites/project-3.png",
  },
  {
    id: 11,
    name: "She-Foksundo Gaunpalika",
    category: "Karnali",
    image: "/websites/project-5.png",
  },
  {
    id: 12,
    name: "Dilasaini Gaupalika",
    category: "Karnali",
    image: "/websites/dilasaini.png",
  },
  {
    id: 13,
    name: "Tatopani Gaunpalika",
    category: "Karnali",
    image: "/websites/karnali-pradesh.png",
  },

  // ? Sudurpashim
  {
    id: 14,
    name: "Dhangadi Amha Municipality",
    category: "Sudurpashim",
    image: "/websites/karnali-pradesh.png",
  },
  {
    id: 15,
    name: "AmarDadi Nagarpalika",
    category: "Sudurpashim",
    image: "/websites/dhangadi-amha.png",
  },
  {
    id: 16,
    name: "Bhageshwor Municipality",
    category: "Sudurpashim",
    image: "/websites/bhimdatta.png",
  },
  {
    id: 17,
    name: "गन्यापधुरा गाउँपालिका",
    category: "Sudurpashim",
    image: "/websites/bhimdatta.png",
  },
  {
    id: 18,
    name: "सिगास गाउँपालिका",
    category: "Sudurpashim",
    image: "/websites/bhimdatta.png",
  },
  {
    id: 19,
    name: "के.आई.सिंह गाउँपालिका",
    category: "Sudurpashim",
    image: "/websites/bhimdatta.png",
  },
  {
    id: 20,
    name: "तुर्माखाँद गाउँपालिका",
    category: "Sudurpashim",
    image: "/websites/bhimdatta.png",
  },
  {
    id: 21,
    name: "Koshi Pradesh",
    category: "Sudurpashim",
    image: "/websites/bhimdatta.png",
  },

  //  ? Bagmati
  {
    id: 22,
    name: "बाह्रविसे नगरपालिका",
    catergory: "Bagmati",
    image: "/websites/bhimdatta.png",
  },
  {
    id: 23,
    name: "लिसंखु पाखर गाउँपालिका",
    category: "Bagmati",
    image: "/websites/bhimdatta.png",
  },

];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);
  const featuredItems = portfolioItems.filter((item) => item.featured);

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
                Our Portfolio
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our Recent Work
              </h1>
              <p className="text-xl text-[#334155]">
                Explore our portfolio of successful projects and see how we've
                helped businesses achieve their digital goals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                Here are some of our most successful and innovative projects
                that showcase our expertise.
              </p>
            </motion.div>

            <motion.div className="space-y-12" variants={staggerContainer}>
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <Badge variant="secondary">{item.category}</Badge>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-[#334155]">{item.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <Button asChild>
                        <Link href={item.liveUrl} className="text-white">
                          View Live
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {/* <Button variant="outline" asChild>
                        <Link href={item.githubUrl}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button> */}
                    </div>
                  </div>

                  <div
                    className={`${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                All Projects
              </h2>
              <p className="mx-auto max-w-[700px] text-[#334155] md:text-xl">
                Browse through our complete portfolio of projects across
                different categories.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-4"
              variants={fadeInUp}
            >
              {["All", "Web", "Mobile"].map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`${
                    filter === category
                      ? "bg-[#2563EB] text-white"
                      : "text-[#334155]"
                  } transition-colors duration-300`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {displayedItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
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
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" asChild>
                          <Link href={item.liveUrl}>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                        {/* <Button size="sm" variant="outline" asChild>
                          <Link href={item.githubUrl}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button> */}
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#334155] mb-4 flex-1">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {!showAll && filteredItems.length > 6 && (
              <motion.div className="text-center" variants={fadeInUp}>
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  size="lg"
                >
                  Show More Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-[#334155]">
                Let's create something amazing together. Get in touch to discuss
                your project.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
