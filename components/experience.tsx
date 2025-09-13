"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "Deutsche Telekom Digital Labs Pvt. Ltd.",
    location: "On Site",
    period: "May 2025 – Jun 2025",
    description: [
      "Worked on a commerce-focused web platform at Deutsche Telekom Digital Labs as a Summer Intern.",
      "Collaborated in a 5-member agile team to build and test modules for product recommendations and cart functionalities.",
      "Gained exposure to professional workflows, including daily meets, Git-based version control, and stakeholder demos."
    ],
    skills: ["Generative AI", "Agile", "Git", "Team Collaboration", "Product Development"],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items one by one
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-8 text-balance">Experience</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            My professional journey and the experiences that have shaped my skills and expertise.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={visibleItems.includes(index) ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <div className="ml-12">
                    <Card className="group card-hover">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <Badge variant="outline" className="w-fit">
                            <Calendar className="h-3 w-3 mr-1" />
                            {experience.period}
                          </Badge>
                          <Badge variant="outline" className="w-fit">
                            <MapPin className="h-3 w-3 mr-1" />
                            {experience.location}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{experience.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">
                          {experience.company}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-muted-foreground mb-4 leading-relaxed space-y-2">
                          {Array.isArray(experience.description) ? (
                            experience.description.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-secondary mr-2 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))
                          ) : (
                            <li className="flex items-start">
                              <span className="text-secondary mr-2 mt-1">•</span>
                              <span>{experience.description}</span>
                            </li>
                          )}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
