"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  Share2,
  BookmarkPlus,
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Twitter,
  Facebook,
  Linkedin,
  LinkIcon,
  Eye,
  TrendingUp,
  Tag,
  Search,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

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

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will reshape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that developers and businesses should watch.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, ChatGPT, and other AI assistants are helping developers write code faster and more efficiently than ever before.</p>

      <h3>Key Benefits:</h3>
      <ul>
        <li>Faster code generation and completion</li>
        <li>Automated bug detection and fixes</li>
        <li>Intelligent code suggestions</li>
        <li>Enhanced productivity and reduced development time</li>
      </ul>

      <h2>2. Progressive Web Apps (PWAs) Evolution</h2>
      <p>Progressive Web Apps continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the preferred choice for many businesses.</p>

      <h2>3. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly is enabling high-performance applications in the browser, allowing developers to run code written in languages like C++, Rust, and Go directly in web browsers with near-native performance.</p>

      <h2>4. Micro-Frontends Architecture</h2>
      <p>As applications grow in complexity, micro-frontends are becoming popular for breaking down large applications into smaller, manageable pieces that can be developed and deployed independently.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright, with these trends promising to make development more efficient, applications more powerful, and user experiences more engaging. Staying ahead of these trends will be crucial for developers and businesses looking to remain competitive in the digital landscape.</p>
    `,
    image: "/software-development.jpg",
    category: "Web Development",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Full-stack developer with 10+ years of experience in building scalable web applications.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    date: "2024-01-15",
    readTime: "5 min read",
    views: 1250,
    likes: 89,
    comments: 23,
    tags: ["Web Development", "AI", "PWA", "WebAssembly", "Trends"],
    featured: true,
  },
  {
    id: "2",
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Learn why mobile-first design is crucial for modern applications and how to implement it effectively.",
    content: `
      <p>In today's digital landscape, mobile-first design isn't just a trend—it's a necessity. With mobile devices accounting for over 50% of web traffic globally, designing for mobile first has become critical for success.</p>

      <h2>Understanding Mobile-First Design</h2>
      <p>Mobile-first design is an approach where you design for the smallest screen first, then progressively enhance the experience for larger screens. This methodology ensures that your core content and functionality work perfectly on mobile devices.</p>

      <h2>Why Mobile-First Matters</h2>
      <h3>1. User Behavior</h3>
      <p>Users increasingly rely on mobile devices for browsing, shopping, and consuming content. A poor mobile experience can lead to high bounce rates and lost conversions.</p>

      <h3>2. SEO Benefits</h3>
      <p>Google's mobile-first indexing means that the mobile version of your site is considered the primary version for ranking purposes.</p>

      <h3>3. Performance</h3>
      <p>Mobile-first design forces you to prioritize content and optimize performance, resulting in faster loading times across all devices.</p>

      <h2>Implementation Strategies</h2>
      <ul>
        <li>Start with a mobile wireframe</li>
        <li>Use responsive breakpoints effectively</li>
        <li>Optimize images and media</li>
        <li>Implement touch-friendly interactions</li>
        <li>Test on real devices</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mobile-first design is no longer optional—it's essential for creating successful digital experiences. By prioritizing mobile users, you'll create better experiences for all users while improving your search rankings and conversion rates.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Design",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "Creative designer specializing in user experience and interface design for web and mobile.",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    date: "2024-01-10",
    readTime: "4 min read",
    views: 980,
    likes: 67,
    comments: 15,
    tags: ["Design", "Mobile", "UX", "Responsive", "UI"],
    featured: true,
  },
]

const relatedPosts = [
  {
    id: "3",
    title: "Building Scalable APIs with Node.js",
    image: "/placeholder.svg?height=200&width=300",
    category: "Backend",
    readTime: "8 min read",
  },
  {
    id: "4",
    title: "React Performance Optimization Tips",
    image: "/placeholder.svg?height=200&width=300",
    category: "Frontend",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Database Design Best Practices",
    image: "/placeholder.svg?height=200&width=300",
    category: "Database",
    readTime: "7 min read",
  },
]

const popularPosts = [
  {
    id: "6",
    title: "Complete Guide to TypeScript",
    views: 2340,
    category: "Frontend",
  },
  {
    id: "7",
    title: "Docker for Developers",
    views: 1890,
    category: "DevOps",
  },
  {
    id: "8",
    title: "GraphQL vs REST APIs",
    views: 1650,
    category: "Backend",
  },
]

const categories = [
  { name: "Web Development", count: 12 },
  { name: "Design", count: 8 },
  { name: "Backend", count: 15 },
  { name: "Frontend", count: 10 },
  { name: "DevOps", count: 6 },
  { name: "AI & ML", count: 4 },
]

export default function BlogPostPage() {
  const params = useParams()
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [comment, setComment] = useState("")
  const [readingProgress, setReadingProgress] = useState(0)

  const post = blogPosts.find((p) => p.id === params.id) || blogPosts[0]

  // Reading progress calculation
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  const sharePost = (platform: string) => {
    const url = window.location.href
    const title = post.title

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }

    if (platform === "copy") {
      navigator.clipboard.writeText(url)
      return
    }

    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-muted z-50">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <motion.div className="max-w-4xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
            {/* Breadcrumb */}
            <motion.div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" variants={fadeInUp}>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </motion.div>

            {/* Post Meta */}
            <motion.div className="flex flex-wrap items-center gap-4 mb-6" variants={fadeInUp}>
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6" variants={fadeInUp}>
              {post.title}
            </motion.h1>

            {/* Author & Actions */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500 border-red-500" : ""}
                >
                  <ThumbsUp className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  {post.likes + (isLiked ? 1 : 0)}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-primary border-primary" : ""}
                >
                  <BookmarkPlus className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div className="relative overflow-hidden rounded-lg mb-8" variants={fadeInUp}>
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <motion.div
              className="lg:col-span-3"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className="p-8">
                <div
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" onClick={() => sharePost("twitter")}>
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => sharePost("facebook")}>
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => sharePost("linkedin")}>
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => sharePost("copy")}>
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Author Bio */}
              <motion.div
                className="mt-8"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                      <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                      <div className="flex space-x-4">
                        <Link href={post.author.social.twitter} className="text-muted-foreground hover:text-primary">
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href={post.author.social.linkedin} className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              {/* Search Widget */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </Card>

              {/* Categories Widget */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog?category=${category.name}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Popular Posts Widget */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h4 className="font-medium text-sm mb-2 line-clamp-2">{post.title}</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Newsletter Widget */}
              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="font-semibold mb-4">Stay Updated</h3>
                <p className="text-sm mb-4 text-primary-foreground/80">
                  Get the latest articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Your email" className="bg-primary-foreground text-primary" />
                  <Button variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Articles</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Continue reading with these related articles
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer}>
              {relatedPosts.map((post) => (
                <motion.div key={post.id} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog/2">
                Next Article
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
