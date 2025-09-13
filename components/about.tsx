"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

const skills = [
  { name: "React/JavaScript", level: 90 },
  { name: "Python", level: 85 },
  { name: "AWS", level: 75 },
  { name: "MySQL", level: 85 },
  { name: "Flask", level: 80 },
  { name: "Git/GitHub", level: 90 },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setSkillsVisible(true), 500)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/aryan-profile.jpg"
                    alt="Aryan Pundir - Computer Science Student"
                    className="w-full h-auto object-cover object-top"
                  />
                </CardContent>
              </Card>
            </div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing Computer Science Engineering at VIT Vellore. I'm curious about how technology can 
                solve real-world problems and have a keen interest in AI/ML, IoT, and scalable systems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I love working on AI, IoT, and web-based applications. When I'm not coding, you'll find me exploring 
                new technologies, participating in hackathons, or contributing to open-source projects.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skillsVisible ? skill.level : 0}
                      className="h-2 transition-all duration-1000"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
