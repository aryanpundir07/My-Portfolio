"use client"

import { useEffect, useRef, useState } from "react"

import { MailIcon, MapPinIcon, PhoneIcon, SendIcon } from "@/components/icons"
import { EMAIL_ADDRESS, LOCATION, PHONE_NUMBER } from "@/lib/site"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `Portfolio contact from ${formData.name}`
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      "Message:",
      formData.message,
    ].join("\n")

    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setMessage("Your email app should open with the message pre-filled. Send it there to reach me.")
  }

  return (
    <section id="contact" ref={sectionRef} className="section-shell py-24">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-800 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="eyebrow mb-4 text-center">Contact</div>
          <h2 className="section-title mx-auto mb-6 text-center text-4xl font-semibold md:text-5xl">Open to conversations, collaborations, and serious opportunities.</h2>
          <p className="section-copy mx-auto mb-12 text-center">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Let&apos;s
            create something amazing together.
          </p>

          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">Let&apos;s Connect</h3>
                <p className="mb-8 max-w-xl leading-8 text-muted-foreground">
                  I&apos;m always open to discussing new opportunities, creative projects, or just
                  having a friendly chat about technology and design.
                </p>
              </div>

              <div className="space-y-6">
                <ContactRow icon={<MailIcon className="h-6 w-6 text-primary" />} label="Email" value={EMAIL_ADDRESS} />
                <ContactRow icon={<PhoneIcon className="h-6 w-6 text-primary" />} label="Phone" value={PHONE_NUMBER} />
                <ContactRow icon={<MapPinIcon className="h-6 w-6 text-primary" />} label="Location" value={LOCATION} />
              </div>
            </div>

            <div className="panel-surface rounded-[1.8rem] p-8 md:p-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-11 w-full rounded-xl border border-border/75 bg-background/55 px-4 py-2 text-base outline-none transition-all duration-200 focus:border-secondary/45 focus:ring-2 focus:ring-primary/12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="h-11 w-full rounded-xl border border-border/75 bg-background/55 px-4 py-2 text-base outline-none transition-all duration-200 focus:border-secondary/45 focus:ring-2 focus:ring-primary/12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    className="min-h-16 w-full rounded-xl border border-border/75 bg-background/55 px-4 py-3 text-base outline-none transition-all duration-200 focus:border-secondary/45 focus:ring-2 focus:ring-primary/12"
                  />
                </div>

                <button
                  type="submit"
                  className="hover-lift inline-flex w-full items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-medium tracking-wide text-secondary-foreground transition-all shadow-[0_20px_45px_-30px_rgba(47,93,149,0.9)]"
                >
                  <SendIcon className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Send Message
                </button>

                {message ? <p className="text-sm text-primary">{message}</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="panel-surface flex items-center space-x-4 rounded-2xl px-4 py-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">{icon}</div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}
