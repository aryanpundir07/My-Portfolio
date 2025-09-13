"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-primary">Aryan</span>
              <span className="text-secondary"> Pundir</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science Engineering student at VIT Vellore passionate about AI 
              and Full-Stack Development. Based in Gurugram, Haryana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                Experience
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://github.com/aryanpundir07', '_blank')}
                className="h-10 w-10 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/in/aryanpundir07/', '_blank')}
                className="h-10 w-10 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('mailto:infoaryan2025@gmail.com', '_blank')}
                className="h-10 w-10 rounded-full hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Aryan Pundir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
