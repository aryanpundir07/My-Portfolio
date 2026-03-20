"use client"

import { useEffect, useRef, useState } from "react"

import { ExternalLinkIcon, GithubIcon } from "@/components/icons"
import { GITHUB_PORTFOLIO_URL, LIVE_PORTFOLIO_URL } from "@/lib/site"

const categories = ["All", "Web Development"]

const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, dark/light theme support, and mobile-first responsive design.",
    image: "/screenshot.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    category: "Web Development",
    liveUrl: LIVE_PORTFOLIO_URL,
    githubUrl: GITHUB_PORTFOLIO_URL,
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" ref={sectionRef} className="section-shell py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="eyebrow mb-4 text-center">Projects</div>
          <h2 className="section-title mx-auto mb-6 text-center text-4xl font-semibold md:text-5xl">Selected work with a strong product presentation.</h2>
          <p className="section-copy mx-auto mb-12 text-center">
            Here are some of my recent projects that showcase my skills and passion for creating
            exceptional digital experiences.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "rounded-full bg-primary px-5 text-primary-foreground shadow-[0_18px_40px_-26px_rgba(23,32,51,0.7)]"
                    : "rounded-full border border-border/80 bg-background/70 px-5 hover:border-secondary/40 hover:bg-card hover:text-accent-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${index * 100}ms`,
                }}
              >
                <article
                  className="panel-surface card-hover group cursor-pointer rounded-[1.6rem] py-6"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`h-48 w-full object-cover transition-transform duration-300 ${
                          hoveredId === project.id ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div
                        className={`absolute inset-0 flex items-center justify-center gap-4 bg-[linear-gradient(180deg,rgba(16,32,59,0.18),rgba(16,32,59,0.82))] transition-opacity duration-300 ${
                          hoveredId === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <IconActionButton
                          label="Open project"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                        </IconActionButton>
                        <IconActionButton
                          label="Open GitHub repository"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <GithubIcon className="h-4 w-4" />
                        </IconActionButton>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold leading-none">{project.title}</h3>
                    <p className="mb-4 text-sm leading-7 text-muted-foreground text-pretty">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-secondary/10 bg-secondary/12 px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IconActionButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground transition-transform hover:scale-110"
    >
      {children}
    </button>
  )
}
