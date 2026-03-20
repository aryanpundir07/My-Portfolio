"use client"

import { useEffect, useState } from "react"

import {
  ChevronUpIcon,
  DownloadIcon,
  EyeIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/site"

const roles = ["Software Engineer", "AI/ML Enthusiast", "Computer Science Student", "Tech Innovator"]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 3000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--background)_94%,transparent),color-mix(in_srgb,var(--muted)_52%,transparent))]" />

      <div className="absolute inset-0 opacity-40">
        <div className="animate-float absolute left-20 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div
          className="animate-float absolute right-20 top-40 h-72 w-72 rounded-full bg-primary/8 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-float absolute -bottom-8 left-40 h-72 w-72 rounded-full bg-accent/8 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="eyebrow mb-6">Portfolio</div>

          <div className="mb-8 animate-scale-in">
            <div className="mx-auto h-34 w-34 rounded-full bg-gradient-to-br from-secondary/80 via-primary/60 to-accent/70 p-[2px] shadow-[0_30px_80px_-35px_rgba(3,10,24,0.8)]">
              <img
                src="/aryan.jpeg"
                alt="Aryan Pundir - Computer Science Student"
                className="h-full w-full rounded-full border-[6px] border-background object-cover"
              />
            </div>
          </div>

          <h1
            className="mx-auto mb-6 max-w-5xl text-5xl font-semibold leading-[0.98] text-balance md:text-7xl lg:text-[5.5rem]"
            style={{ opacity: 1, transform: isVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            <span className="text-gradient">Aryan Pundir</span>
          </h1>

          <div className="mb-4" style={{ opacity: 1, transform: isVisible ? "translateY(0)" : "translateY(30px)" }}>
            <div className="mb-3 flex h-8 items-center justify-center text-xl font-medium md:text-2xl">
              <span
                key={roles[roleIndex]}
                className="animate-fade-in bg-gradient-to-r from-secondary to-primary bg-clip-text text-center text-transparent"
              >
                {roles[roleIndex]}
              </span>
            </div>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground text-pretty md:text-[1.18rem]">
              Passionate about AI and Full-Stack Development. I&apos;m a third-year Computer Science
              Engineering student with hands-on experience in building real-world solutions.
            </p>
          </div>

          <div
            className="mb-12 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ opacity: 1, transform: isVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="hover-lift inline-flex items-center rounded-full bg-secondary px-8 py-3.5 text-base font-medium tracking-wide text-secondary-foreground shadow-[0_20px_45px_-28px_rgba(47,93,149,0.9)]"
            >
              <EyeIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View Projects
            </button>
            <button
              onClick={() => window.open(RESUME_URL, "_blank")}
              className="hover-lift inline-flex items-center rounded-full border border-border/75 bg-card/75 px-8 py-3.5 text-base font-medium tracking-wide text-foreground"
            >
              <DownloadIcon className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>

          <div
            className="mb-12 flex justify-center space-x-4"
            style={{ opacity: 1, transform: isVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            <SocialButton href={GITHUB_URL} label="GitHub">
              <GithubIcon className="h-6 w-6" />
            </SocialButton>
            <SocialButton href={LINKEDIN_URL} label="LinkedIn">
              <LinkedinIcon className="h-6 w-6" />
            </SocialButton>
            <SocialButton href={EMAIL_URL} label="Email">
              <MailIcon className="h-6 w-6" />
            </SocialButton>
          </div>
        </div>

        <div className="fixed bottom-8 right-8 z-50">
          <div className="relative h-16 w-16">
            <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 36 36">
              <path
                className="text-muted-foreground/20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-secondary transition-all duration-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${scrollProgress}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="panel-surface absolute inset-0 h-16 w-16 rounded-full transition-all duration-300 hover:bg-secondary/10"
              aria-label="Scroll to top"
            >
              <ChevronUpIcon className="mx-auto h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={() => window.open(href, "_blank")}
      aria-label={label}
      className="hover-lift panel-surface inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:text-secondary"
    >
      {children}
    </button>
  )
}
