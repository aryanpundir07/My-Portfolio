"use client"

import { useEffect, useState } from "react"

import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@/components/icons"
import { useTheme } from "@/components/theme-provider"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href)
    section?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "glass-effect border-b border-border/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">
            <span className="text-primary">Aryan</span>
            <span className="text-secondary/90"> Pundir</span>
          </div>

          <div className="hidden items-center space-x-10 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="group relative text-sm font-medium tracking-[0.14em] text-foreground/82 uppercase transition-all duration-300 hover:text-secondary"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-10 w-10 rounded-full border border-border/70 bg-card/35 transition-colors duration-300 hover:border-secondary/50 hover:bg-secondary/10"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <SunIcon className="mx-auto h-4 w-4" /> : <MoonIcon className="mx-auto h-4 w-4" />}
              </button>
            ) : null}
          </div>

          <button
            className="rounded-full border border-border/70 bg-card/40 p-2 transition-colors duration-300 hover:bg-secondary/10 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="animate-fade-in mt-6 pb-6 md:hidden">
            <div className="panel-surface flex flex-col space-y-6 rounded-2xl p-6 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-base font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-secondary"
                >
                  {item.label}
                </button>
              ))}

              {mounted ? (
                <div className="border-t border-border pt-4">
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex w-full items-center justify-start gap-2"
                  >
                    {theme === "dark" ? (
                      <>
                        <SunIcon className="h-4 w-4" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-4 w-4" />
                        Dark Mode
                      </>
                    )}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
