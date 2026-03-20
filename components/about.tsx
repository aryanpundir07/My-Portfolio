"use client"

import { useEffect, useRef, useState } from "react"

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
  const [animateBars, setAnimateBars] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          window.setTimeout(() => setAnimateBars(true), 500)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-shell bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="eyebrow mb-4 text-center">About</div>
          <h2 className="section-title mx-auto mb-6 text-center text-4xl font-semibold md:text-5xl">Skills, engineering depth, and product focus.</h2>
          <p className="section-copy mx-auto mb-16 text-center text-base leading-8">
            A concise snapshot of the tools, systems thinking, and execution style behind my work.
          </p>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="panel-surface overflow-hidden rounded-[1.75rem]">
                <div className="p-0">
                  <img
                    src="/aryan.jpeg"
                    alt="Aryan Pundir - Computer Science Student"
                    className="h-auto w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div
              className="space-y-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently pursuing Computer Science Engineering at VIT Vellore. I&apos;m curious
                about how technology can solve real-world problems and have a keen interest in
                AI/ML, IoT, and scalable systems.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I love working on AI, IoT, and web-based applications. When I&apos;m not coding,
                you&apos;ll find me exploring new technologies, participating in hackathons, or
                contributing to open-source projects.
              </p>

              <div className="space-y-4">
                <h3 className="mb-6 text-2xl font-semibold">Skills &amp; Expertise</h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-[1.05rem]">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div
                      className="relative h-2.5 w-full overflow-hidden rounded-full bg-foreground/10 transition-all duration-1000 dark:bg-white/10"
                      style={{ transitionDelay: `${200 * index}ms` }}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-secondary/70 via-secondary/50 to-accent/65 transition-all duration-1000"
                        style={{
                          transform: `translateX(-${100 - (animateBars ? skill.level : 0)}%)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
