"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Application Process",
      faqs: [
        {
          question: "How do I apply for a position?",
          answer:
            "You can apply directly through our careers page by clicking the 'Apply Now' button on any job listing. You'll need to submit your resume, cover letter, and complete our online application form.",
        },
        {
          question: "How long does the hiring process take?",
          answer:
            "Our typical hiring process takes 2-4 weeks from application to final decision. This includes initial screening, technical interviews, and final interviews with the team.",
        },
        {
          question: "What should I expect during the interview process?",
          answer:
            "Our interview process typically includes a phone screening, technical assessment (for technical roles), and 2-3 rounds of interviews with team members and managers. We'll provide detailed information about each step when you're selected to move forward.",
        },
        {
          question: "Can I apply for multiple positions?",
          answer:
            "Yes, you can apply for multiple positions that match your skills and interests. However, we recommend focusing on roles that best align with your experience and career goals.",
        },
      ],
    },
    {
      title: "Company Culture & Benefits",
      faqs: [
        {
          question: "What benefits do you offer?",
          answer:
            "We offer comprehensive benefits including health, dental, and vision insurance, 401(k) with company matching, unlimited PTO, flexible work arrangements, professional development budget, and stock options for eligible employees.",
        },
        {
          question: "Do you offer remote work options?",
          answer:
            "Yes, we offer flexible work arrangements including fully remote, hybrid, and in-office options depending on the role and team requirements. Many of our positions are location-flexible.",
        },
        {
          question: "What is the company culture like?",
          answer:
            "Our culture is built on collaboration, innovation, empathy, and excellence. We believe in work-life balance, continuous learning, and creating an inclusive environment where everyone can thrive.",
        },
        {
          question: "Do you provide professional development opportunities?",
          answer:
            "We provide annual learning budgets, conference attendance, internal training programs, mentorship opportunities, and support for continuing education and certifications.",
        },
      ],
    },
    {
      title: "Compensation & Career Growth",
      faqs: [
        {
          question: "How do you determine salary ranges?",
          answer:
            "Our compensation is competitive and based on market research, role requirements, experience level, and location. We believe in pay equity and regularly review our compensation structure to ensure fairness.",
        },
        {
          question: "Do you offer equity or stock options?",
          answer:
            "Yes, eligible employees receive equity packages as part of their compensation. The specific details vary by role level and are discussed during the offer process.",
        },
        {
          question: "What are the opportunities for career advancement?",
          answer:
            "We strongly believe in promoting from within and provide clear career progression paths. We offer regular performance reviews, goal setting, and work with employees to identify growth opportunities.",
        },
        {
          question: "Do you offer internship programs?",
          answer:
            "Yes, we offer internship programs for students and recent graduates in various departments including engineering, design, product, and marketing. Our internships are designed to provide meaningful work experience and potential full-time opportunities.",
        },
      ],
    },
    {
      title: "Work Environment & Policies",
      faqs: [
        {
          question: "What is your diversity and inclusion policy?",
          answer:
            "We are committed to creating a diverse, equitable, and inclusive workplace. We have employee resource groups, unconscious bias training, and actively work to ensure our hiring and promotion practices are fair and inclusive.",
        },
        {
          question: "What are your working hours?",
          answer:
            "We offer flexible working hours with core collaboration hours typically between 10 AM - 3 PM in your local timezone. Most teams work standard business hours but we accommodate different schedules when possible.",
        },
        {
          question: "Do you have a dress code?",
          answer:
            "We have a casual dress code. We believe in comfort and self-expression, so you can dress in a way that makes you feel confident and comfortable while being appropriate for client meetings when necessary.",
        },
        {
          question: "What technology and equipment do you provide?",
          answer:
            "We provide all necessary equipment including laptop, monitor, and any specialized tools needed for your role. We also offer stipends for home office setup for remote employees.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-[#FBF9D1] py-36 font-poppins">
      {/* FAQ Content */}
      <h1 className="font-bold text-center text-3xl">Frequently Asked Questions</h1>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No FAQs found matching your search.</p>
              <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const itemIndex = categoryIndex * 100 + faqIndex
                      const isOpen = openItems.includes(itemIndex)

                      return (
                        <Card key={faqIndex} className="overflow-hidden">
                          <CardHeader
                            className="cursor-pointer hover:bg-muted/50 transition-colors"
                            onClick={() => toggleItem(itemIndex)}
                          >
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                              )}
                            </div>
                          </CardHeader>
                          {isOpen && (
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </CardContent>
                          )}
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our HR team is here to help with any additional questions about careers
            at TechCorp.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-sm text-muted-foreground mb-4">Get detailed answers via email</p>
                <Button variant="outline" size="sm">
                  careers@techcorp.com
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-sm text-muted-foreground mb-4">Speak with our HR team directly</p>
                <Button variant="outline" size="sm">
                  (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-4">Chat with us during business hours</p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  )
}
