import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Users, Award, Heart, Zap } from "lucide-react"

export default function CareersPage() {
  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Kuleshwor, Kathmandu Nepal",
      type: "Full-time",
      description:
        "Join our frontend team to build cutting-edge user interfaces using React, TypeScript, and modern web technologies.",
      requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design sense"],
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "Kuleshwor, Kathmandu Nepal",
      type: "Full-time",
      description:
        "Create intuitive and beautiful user experiences that delight our customers and drive business growth.",
      requirements: ["Portfolio of UX work", "Figma expertise", "User research experience"],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Kuleshwor, Kathmandu Nepal",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure, ensuring scalability, security, and reliability.",
      requirements: ["AWS/GCP experience", "Kubernetes knowledge", "CI/CD expertise"],
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data",
      location: "Kuleshwor, Kathmandu Nepal",
      type: "Full-time",
      description: "Extract insights from complex datasets to inform product decisions and business strategy.",
      requirements: ["Python/R proficiency", "Machine learning experience", "Statistics background"],
    },
  ]

  const companyValues = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe great things happen when diverse minds work together.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We're always pushing boundaries and exploring new possibilities.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empathy",
      description: "We care deeply about our customers, colleagues, and community.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for quality in everything we do, from code to customer service.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Engineer",
      quote:
        "The learning opportunities here are incredible. I've grown more in two years than I did in my previous five.",
      avatar: "/professional-woman-smiling.png",
    },
    {
      name: "Marcus Johnson",
      role: "Product Designer",
      quote: "The collaborative culture makes every project exciting. We truly build amazing things together.",
      avatar: "/professional-man-smiling.png",
    },
    {
      name: "Elena Rodriguez",
      role: "Data Scientist",
      quote: "I love how we're encouraged to experiment and take calculated risks. Innovation is in our DNA.",
      avatar: "/professional-woman-glasses.png",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FBF9D1]">
      {/* Job Listings Section */}
      <section id="jobs" className="py-36">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Open Positions</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover your next career opportunity with us. We're always looking for talented individuals to join our
              growing team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{job.department}</Badge>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
                  <CardDescription className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <Button className="w-full text-white cursor-pointer">Apply Now</Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section id="culture" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Culture & Values</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're more than just a workplace. We're a community of innovators, creators, and problem-solvers.
            </p>
          </div>

          {/* Company Values */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-balance">
            Don't see the perfect role? We're always interested in hearing from talented individuals. Send us your
            resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Submit Your Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
            >
              Subscribe to Job Alerts
            </Button>
          </div>
        </div>
      </section>

    
    </div>
  )
}
