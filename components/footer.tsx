"use client"

import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site"

const quickLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
]

export function Footer() {
  const year = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-2xl font-semibold tracking-tight">
              <span className="text-primary">Aryan</span>
              <span className="text-secondary/90"> Pundir</span>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Computer Science Engineering student at VIT Vellore passionate about AI and Full-Stack
              Development. Based in Gurugram, Haryana.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-secondary"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <FooterIconButton href={GITHUB_URL} label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </FooterIconButton>
              <FooterIconButton href={LINKEDIN_URL} label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </FooterIconButton>
              <FooterIconButton href={EMAIL_URL} label="Email">
                <MailIcon className="h-5 w-5" />
              </FooterIconButton>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">© {year} Aryan Pundir. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterIconButton({
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
      className="panel-surface inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-secondary"
    >
      {children}
    </button>
  )
}
