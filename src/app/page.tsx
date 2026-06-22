"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  ArrowRight,
  Code2,
  Database,
  Cloud,
  Workflow,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import ClickSpark from "@/components/ClickSpark";
import TechLogoLoop from "@/components/TechLogoLoop";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    items: ["PHP / Laravel", "ASP.NET Core", "Next.js", "Razor Pages", "Shadcn"],
  },
  {
    icon: Workflow,
    title: "CRM & Automation",
    items: ["Dynamics 365", "Zoho CRM", "PowerApps", "Deluge"],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    items: ["AWS", "Docker", "GitHub", "REST APIs"],
  },
  {
    icon: Database,
    title: "Data & Integrations",
    items: ["MySQL", "Dataverse", "Stripe", "Postman", "Webhook"],
  },
];

const projects = [
  {
    name: "Education Services",
    role: "LMS, CMS & CRM Platform",
    stack: ["Laravel", "Next.js", "MariaDB", "AWS", "shadcn", "Tailwind", "REST API", "Webhooks", "Stripe" ],
    desc: "SEO-optimized compliance training ecosystem with LMS, Provider Panel, CMS, and CRM — built end-to-end.",
    icon: GraduationCap,
    accent: "from-primary/30 to-primary/5",
    link: "https://hurak.com/",
  },
  {
    name: "WeFundAnyone",
    role: "Secure Loan Platform",
    stack: ["ASP.NET Core", "Razor", "REST APIs"],
    desc: "Integrated KYC (Alloy), credit checks (Experian), and disbursements (Fiserv) — reduced loan processing time by 40%.",
    icon: ShieldCheck,
    accent: "from-accent/30 to-accent/5",
    link: "https://wefundanyone.com/",
  },
  {
    name: "Hospitality Job Portal",
    role: "Laravel Job Marketplace",
    stack: ["Laravel", "MySQL", "jQuery"],
    desc: "Job portal serving 500+ active users in hospitality & F&B, driving a 20% lift in user engagement.",
    icon: TrendingUp,
    accent: "from-primary/30 to-accent/10",
    link: "https://hungryforjobs.com/",
  },
  {
    name: "Pingfares",
    role: "Travel Booking Interface",
    stack: ["Next.js", "REST APIs"],
    desc: "Real-time flight and hotel booking experience powered by integrated travel APIs.",
    icon: Sparkles,
    accent: "from-accent/25 to-primary/10",
    link: "",
  },
];

const navLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const experience = [
  {
    company: "Hurak Tech",
    role: "Full-Stack Laravel Developer",
    period: "Dec 2024 — Present",
    stack: "PHP · Laravel · Next.js · MySQL · Webhook · Stripe · AWS · Docker · GTM · GA4",
  },
  {
    company: "ADB Word",
    role: "ASP.NET Developer",
    period: "10 months",
    stack: "PHP · MySQL · Tailwind · REST APIs · Postman",
  },
  {
    company: "Dynasole Tech",
    role: "Dynamics 365 / PowerApps Developer",
    period: "1.6 months",
    stack: "PowerApps · Microsoft CRM · Dataverse",
  },
  {
    company: "Fair Chance for CRM",
    role: "Zoho CRM Developer",
    period: "7 months",
    stack: "Zoho CRM · Creator · Pagesense · Deluge",
  },
  {
    company: "Crescent Technologies",
    role: "Laravel Intern",
    period: "4 months",
    stack: "Laravel · ASP.NET · MySQL · Bootstrap · JS",
  },
];

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const updateActiveSection = () => {
      const probeY = window.scrollY + window.innerHeight * 0.35;
      const activeLink = navLinks.find(({ href }) => {
        const section = document.querySelector(href);
        if (!section) return false;

        const { top, bottom } = section.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;
        return probeY >= sectionTop && probeY < sectionBottom;
      });

      setActive(activeLink?.href ?? "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return [active, setActive] as const;
}

function NavHeader() {
  const [active, setActive] = useActiveSection();

  const goToTop = () => {
    setActive("");
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-border overflow-visible">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <button
          type="button"
          onClick={goToTop}
          className="font-display text-lg font-semibold tracking-tight"
        >
          M<span className="text-primary">.</span>Shakil
        </button>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <li key={href} className="relative">
                <a
                  href={href}
                  onClick={() => setActive(href)}
                  className={`relative z-10 transition-colors ${isActive ? "text-foreground font-medium" : "hover:text-foreground"}`}
                >
                  {label}
                </a>
                {isActive && (
                  <>
                    {/* Spotlight beam cone from top of header */}
                    <span
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-20"
                      style={{
                        height: "calc(100% + 1.25rem)",
                        background:
                          "linear-gradient(180deg, var(--color-primary) 0%, color-mix(in oklch, var(--color-primary) 20%, transparent) 50%, transparent 100%)",
                        clipPath:
                          "polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%)",
                        filter: "blur(1px)",
                        opacity: 0.55,
                      }}
                    />
                    {/* Bright source dot at top */}
                    <span
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-3 h-[3px] rounded-full bg-primary"
                      style={{
                        bottom: "calc(100% + 1.1rem)",
                        boxShadow:
                          "0 0 10px 3px var(--color-primary), 0 0 20px 6px color-mix(in oklch, var(--color-primary) 40%, transparent)",
                      }}
                    />
                    {/* Bottom glow line */}
                    <span
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-primary"
                      style={{
                        boxShadow:
                          "0 0 8px 2px var(--color-primary), 0 2px 12px 4px color-mix(in oklch, var(--color-primary) 30%, transparent)",
                      }}
                    />
                  </>
                )}
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          Hire me <ArrowRight className="h-4 w-4" />
        </a>
      </nav>
    </header>
  );
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
        {title}
      </h2>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-4 hover:border-primary/40 hover:bg-surface transition">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <ClickSpark />

      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Nav */}
      <NavHeader />

      <main id="main">
        {/* Hero */}
        <section
          id="top"
          className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="h-px w-8 bg-primary" />
            Lahore, Pakistan — Available for work
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-4xl">
            Building{" "}
            <span className="gradient-text">scalable web apps</span> &
            automating business with clean code.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I&apos;m{" "}
            <strong className="text-foreground">Muhammad Shakil</strong> — a
            Full-Stack Developer and CRM specialist with hands-on experience in{" "}
            <strong className="text-foreground">PHP/Laravel</strong>,{" "}
            <strong className="text-foreground">ASP.NET Core</strong>,{" "}
            <strong className="text-foreground">Next.js</strong>, and{" "}
            <strong className="text-foreground">
              Microsoft Dynamics 365
            </strong>
            . I ship secure fintech platforms, LMS ecosystems, and CRM
            automations that move metrics.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-surface transition"
            >
              Get in touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { k: "500+", v: "Users served" },
              { k: "20%", v: "Engagement lift" },
              { k: "40%", v: "Faster loan processing" },
              { k: "5+", v: "Production platforms" },
            ].map((s) => (
              <div key={s.v} className="bg-surface p-6">
                <div className="font-display text-3xl md:text-4xl font-semibold text-primary">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech logo loop */}
        <TechLogoLoop />

        {/* Expertise */}
        <section
          id="expertise"
          className="mx-auto max-w-6xl px-6 py-20 scroll-mt-20"
        >
          <SectionHeader eyebrow="Core expertise" title="The stack I ship with" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <article
                key={title}
                className="glass-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-20 scroll-mt-20"
        >
          <SectionHeader eyebrow="Selected work" title="High-impact projects" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map(({ icon: Icon, name, role, stack, desc, accent, link }) => (
              <article
                key={name}
                className="glass-card p-8 relative overflow-hidden group"
              >
                <div
                  className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Open project link" >
                      <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                    </a>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{role}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-xs font-mono text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-6 py-20 scroll-mt-20"
        >
          <SectionHeader eyebrow="Career" title="Where I've built things" />
          <ol className="mt-12 relative border-l border-border ml-3">
            {experience.map((e) => (
              <li key={e.company} className="mb-10 ml-8">
                <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{e.company}</h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-primary">{e.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.stack}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 glass-card p-6 flex items-start gap-4">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent shrink-0">
              <Briefcase className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Education</h3>
              <p className="text-muted-foreground mt-1">
                Bachelor of Computer Science —{" "}
                <span className="text-foreground">
                  NCBA&amp;E University, Lahore
                </span>{" "}
                · 2025
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-24 scroll-mt-20"
        >
          <div className="glass-card p-10 md:p-14 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <SectionHeader
                  eyebrow="Let's build"
                  title="Have a project in mind?"
                />
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Whether it&apos;s a Laravel platform, a Dynamics 365 rollout,
                  or a fintech integration — I&apos;d love to hear about it.
                </p>
              </div>
              <ul className="space-y-4">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="malikshakil449@gmail.com"
                  href="mailto:malikshakil449@gmail.com"
                />
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+92 307 4526026"
                  href="tel:+923074526026"
                />
                {/* <ContactItem
                  icon={MapPin}
                  label="Location"
                  value="Lahore"
                /> */}
                <ContactItem
                  icon={Linkedin}
                  label="LinkedIn"
                  value="Muhammad Shakil"
                  href="https://www.linkedin.com/in/muhammad-shakil-hanif/"
                />
                <ContactItem
                  icon={Github}
                  label="GitHub"
                  value="github.com/mshakil"
                  href="https://github.com"
                />
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Shakil. Crafted with care.</p>
          <p className="font-mono">Built with Next.js · Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
