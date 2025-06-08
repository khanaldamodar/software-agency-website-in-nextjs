"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

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

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/software-development.jpg",
    category: "Web Development",
    author: "Alex Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Learn why mobile-first design is crucial for modern applications and how to implement it effectively.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/software-development.jpg",
    category: "Design",
    author: "Sarah Chen",
    date: "2024-01-10",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt: "A comprehensive guide to building robust and scalable APIs using Node.js and Express framework.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/software-development.jpg",
    category: "Backend",
    author: "Michael Rodriguez",
    date: "2024-01-05",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    title: "The Rise of AI in Software Development",
    excerpt: "How artificial intelligence is transforming the way we build and maintain software applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/software-development.jpg",
    category: "AI & ML",
    author: "Emily Davis",
    date: "2024-01-01",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 5,
    title: "React vs Vue vs Angular: Choosing the Right Framework",
    excerpt: "A detailed comparison of popular frontend frameworks to help you make the right choice for your project.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/software-development.jpg",
    category: "Frontend",
    author: "Alex Johnson",
    date: "2023-12-28",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Database Optimization Techniques for Better Performance",
    excerpt: "Learn essential database optimization techniques to improve your application performance.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/software-development.jpg",
    category: "Database",
    author: "Michael Rodriguez",
    date: "2023-12-25",
    readTime: "9 min read",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Design", "Backend", "Frontend", "AI & ML", "Database"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
                Our Blog
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Insights & Updates</h1>
              <p className="text-xl text-muted-foreground">
                Stay up-to-date with the latest trends, tips, and insights from the world of software development.
              </p>
            </motion.div>

            <motion.div className="max-w-md mx-auto" variants={fadeInUp}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Articles</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our most popular and insightful articles handpicked for you.
                </p>
              </motion.div>

              <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={staggerContainer}>
                {featuredPosts.map((post) => (
                  <motion.div key={post.id} variants={fadeInUp}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge>{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full group" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                 className={`${
                    selectedCategory === category ? "bg-[#2563EB] text-white" : "text-[#334155]"
                  } transition-colors duration-300`} 
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Latest Articles</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our complete collection of articles and tutorials.
              </p>
            </motion.div>

            {regularPosts.length > 0 ? (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
                {regularPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4 flex flex-col h-full">
                        <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{post.excerpt}</p>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <Button variant="outline" size="sm" className="w-full group" asChild>
                            <Link href={`/blog/${post.id}`}>
                              Read More
                              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div className="text-center py-12" variants={fadeInUp}>
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#2563EB] text-[#FFFFFF]">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center space-y-8 max-w-2xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="text-[#FFFFFF]/80">
                Subscribe to our newsletter and never miss our latest articles and updates.
              </p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" variants={fadeInUp}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground text-primary"
              />
              <Button variant="secondary">Subscribe</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
