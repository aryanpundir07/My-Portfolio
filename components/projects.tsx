"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, dark/light theme support, and mobile-first responsive design.",
    image: "/portfolio-website-design.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    category: "Web Development",
    liveUrl: "https://project1pundir.vercel.app/",
    githubUrl: "https://github.com/aryanpundir07/My-Portfolio",
  },
]

const categories = ["All", "Web Development"]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl font-bold text-center mb-8 text-balance">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital
            experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="group cursor-pointer card-hover"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full h-48 object-cover transition-transform duration-300 ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Button 
                        size="icon" 
                        variant="secondary"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      {project.githubUrl && (
                        <Button 
                          size="icon" 
                          variant="secondary"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="hover:scale-110 transition-transform"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4 text-pretty">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
