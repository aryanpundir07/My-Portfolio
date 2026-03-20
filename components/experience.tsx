"use client"

import { useEffect, useRef, useState } from "react"

import { CalendarIcon, MapPinIcon } from "@/components/icons"

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
      "Gained exposure to professional workflows, including daily meets, Git-based version control, and stakeholder demos.",
    ],
    skills: ["Generative AI", "Agile", "Git", "Team Collaboration", "Product Development"],
  },
]

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          experiences.forEach((_, index) => {
            window.setTimeout(() => {
              setVisibleItems((current) => [...current, index])
            }, 200 * index)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section-shell bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="eyebrow mb-4 text-center">Experience</div>
          <h2 className="section-title mx-auto mb-6 text-center text-4xl font-semibold md:text-5xl">Hands-on experience in collaborative software delivery.</h2>
          <p className="section-copy mx-auto mb-12 text-center">
            My professional journey and the experiences that have shaped my skills and expertise.
          </p>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-border" />

              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="relative mb-12"
                  style={{
                    opacity: visibleItems.includes(index) ? 1 : 0,
                    transform: visibleItems.includes(index) ? "translateX(0)" : "translateX(-50px)",
                    transition: `all 0.8s ease ${index * 200}ms`,
                  }}
                >
                  <div className="absolute left-2 h-4 w-4 rounded-full border-4 border-background bg-primary" />

                  <div className="ml-12">
                    <article className="panel-surface card-hover group rounded-[1.6rem] py-6">
                      <div className="px-6">
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
                          <span className="inline-flex w-fit items-center rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium">
                            <CalendarIcon className="mr-1 h-3 w-3" />
                            {experience.period}
                          </span>
                          <span className="inline-flex w-fit items-center rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium">
                            <MapPinIcon className="mr-1 h-3 w-3" />
                            {experience.location}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-lg font-medium text-secondary">{experience.company}</p>
                      </div>

                      <div className="px-6">
                        <ul className="mb-4 space-y-2 leading-relaxed text-muted-foreground">
                          {experience.description.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="mr-2 mt-1 text-secondary">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span key={skill} className="rounded-full border border-secondary/10 bg-secondary/12 px-3 py-1 text-xs font-medium text-foreground">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
