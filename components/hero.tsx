"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download, Eye, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const titles = [
    "Software Engineer",
    "AI/ML Enthusiast", 
    "Computer Science Student",
    "Tech Innovator"
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000) // Change title every 3 seconds

    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
              <img
                src="/aryan-profile.jpg"
                alt="Aryan Pundir - Computer Science Student"
                className="w-full h-full rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Aryan Pundir</span>
          </motion.h1>

          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-xl md:text-2xl font-medium mb-2 h-8 flex items-center justify-center">
              <motion.span
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center text-gradient bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"
              >
                {titles[currentTitleIndex]}
              </motion.span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Passionate about AI and Full-Stack Development. I'm a third-year Computer Science Engineering 
              student with hands-on experience in building real-world solutions.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-medium hover-lift group"
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Projects
            </Button>
            <Button
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/18yvq0Ld3e7g7N-1ApCQvEH_9eIyTCWi-/view?usp=drive_link', '_blank')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-medium hover-lift group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://github.com/aryanpundir07', '_blank')}
              className="h-12 w-12 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 hover-lift"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.linkedin.com/in/aryanpundir07/', '_blank')}
              className="h-12 w-12 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 hover-lift"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('mailto:infoaryan2025@gmail.com', '_blank')}
              className="h-12 w-12 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300 hover-lift"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Progress Meter */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-muted-foreground/20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-secondary transition-all duration-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${scrollProgress}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute inset-0 h-16 w-16 rounded-full hover:bg-secondary/10 transition-all duration-300"
            >
              <ChevronUp className="h-5 w-5 text-foreground" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
