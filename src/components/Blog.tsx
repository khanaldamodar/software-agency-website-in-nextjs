import React from 'react'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Calendar, Clock, User,ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Blog = () => {
    const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return (
       <section id="blog" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
              Latest <span className="text-blue-600">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, insights, and innovations from our experts
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "The Future of Web Development: Trends to Watch in 2024",
                excerpt: "Explore the cutting-edge technologies and frameworks shaping the future of web development, from AI integration to serverless architectures.",
                category: "Web Development",
                author: "Shakta Team",
                date: "2024-01-15",
                readTime: "5 min read",
                image: "https://ugc.same-assets.com/VkxqAWZnMbzCpHWR0yvP8TC4YEv1c8fJ.jpeg"
              },
              {
                title: "Mobile App Development Best Practices for Startups",
                excerpt: "Learn essential strategies for building successful mobile applications that scale with your business growth and user demands.",
                category: "App Development",
                author: "Dev Team",
                date: "2024-01-10",
                readTime: "7 min read",
                image: "https://ugc.same-assets.com/47KQ0UAuGXgUy0_oTsRbTLCpNF4ipWo1.jpeg"
              },
              {
                title: "Cloud Migration: A Complete Guide for Businesses",
                excerpt: "Discover how to successfully migrate your business operations to the cloud while maintaining security and optimizing costs.",
                category: "Cloud Solutions",
                author: "Cloud Team",
                date: "2024-01-05",
                readTime: "8 min read",
                image: "https://ugc.same-assets.com/BeANzAIwqscNwdyGXow6KzXKc8kZyio6.png"
              },
              {
                title: "UI/UX Design Principles for Modern Applications",
                excerpt: "Master the fundamental design principles that create exceptional user experiences in today's digital landscape.",
                category: "UI/UX Design",
                author: "Design Team",
                date: "2024-01-01",
                readTime: "6 min read",
                image: "https://ugc.same-assets.com/oUbPXAbmtYrs99WKTe5pUGdYl6tWDuxn.png"
              },
              {
                title: "The Rise of AI in Software Development",
                excerpt: "How artificial intelligence is revolutionizing the way we build software and what it means for developers and businesses.",
                category: "Technology",
                author: "Tech Team",
                date: "2023-12-28",
                readTime: "9 min read",
                image: "https://ugc.same-assets.com/HNX7lFTBfBdCN2jm5j83f0W_JfJUp99P.jpeg"
              },
              {
                title: "Cybersecurity Best Practices for Small Businesses",
                excerpt: "Essential security measures every small business should implement to protect their digital assets and customer data.",
                category: "Security",
                author: "Security Team",
                date: "2023-12-25",
                readTime: "10 min read",
                image: "https://ugc.same-assets.com/xG18HOV7U7upKJ64WVPjpk3yCdd3fS9f.jpeg"
              }
            ].map((article) => (
              <motion.div key={article.title} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all"
                    >
                      Read More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
  )
}

export default Blog