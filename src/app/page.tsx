"use client";

/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import {
  ArrowUpRight,
  Download,
  GraduationCap,
  Search,
  Sparkles,
} from "lucide-react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { WordRotate } from "@/components/magicui/word-rotate";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { CommandPalette, openCommandPalette } from "@/components/command-palette";

const BLUR_FADE_DELAY = 0.04;

const ROTATING_ROLES = [
  "Technical & Data Analyst (Looker Studio & SQL)",
  "Deep Learning Researcher (BraTS Pediatric Tumors)",
  "Product & UAT Specialist (mHealth Platforms)",
  "Full-Stack Web Developer (Next.js & Python)",
] as const;

export default function Page() {
  return (
    <>
      <ScrollProgress className="top-0 z-50 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />
      <CommandPalette />

      <main className="min-h-dvh flex flex-col gap-14 relative">
        {/* HERO SECTION */}
        <section id="hero" className="relative">
          {/* Subtle hero background grid with radial fade mask */}
          <div className="absolute -inset-x-8 -top-8 -bottom-8 overflow-hidden pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] opacity-35 dark:opacity-25">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={3}
              gridGap={4}
              color="#6366f1"
              maxOpacity={0.35}
              flickerChance={0.2}
            />
          </div>

          <div className="mx-auto w-full max-w-2xl space-y-6">
            <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
              <div className="gap-3 flex flex-col order-2 md:order-1">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />

                {/* Dynamic Rotating Role Titles */}
                <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
                  <div className="text-muted-foreground font-medium text-base sm:text-lg flex items-center gap-1.5 flex-wrap">
                    <Sparkles className="size-4 text-cyan-500 shrink-0" />
                    <WordRotate
                      words={ROTATING_ROLES}
                      duration={2800}
                      className="text-foreground font-semibold"
                    />
                  </div>
                </BlurFade>

                <BlurFadeText
                  className="text-muted-foreground max-w-[600px] text-sm md:text-base leading-relaxed"
                  delay={BLUR_FADE_DELAY * 2}
                  text={DATA.description}
                />

                {/* Quick Action Buttons */}
                <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                  <div className="flex items-center gap-2.5 pt-1 flex-wrap">
                    <a
                      href="/Saifuddin_Tanjil_Resume.pdf"
                      target="_blank"
                      download="Saifuddin_Tanjil_Resume.pdf"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium px-3.5 py-2 rounded-xl shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Download className="size-3.5" />
                      <span>Download CV</span>
                    </a>
                    <button
                      onClick={() => openCommandPalette()}
                      className="inline-flex items-center gap-2 bg-muted/70 hover:bg-muted text-foreground text-xs font-medium px-3 py-2 rounded-xl border border-border shadow-xs transition-colors"
                      aria-label="Open Command Palette"
                    >
                      <Search className="size-3.5 text-muted-foreground" />
                      <span>Quick Search</span>
                      <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-background border border-border rounded text-muted-foreground">
                        ⌘K
                      </kbd>
                    </button>
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 self-start md:self-auto">
                <Avatar className="size-24 md:size-32 border rounded-full shadow-xl ring-4 ring-muted">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{DATA.summary}</Markdown>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* BALANCED 4-CARD IMPACT METRICS SECTION */}
        <section id="impact" className="relative">
          <div className="flex flex-col gap-4">
            <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <span>Impact &amp; Key Metrics</span>
                </h2>
                <span className="text-xs text-muted-foreground font-mono">Research &amp; Industry</span>
              </div>
            </BlurFade>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Card 1: Pediatric MRI Cases */}
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="border border-border/70 rounded-2xl p-4 bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-3 h-full hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-muted-foreground">MRI Cohort</span>
                    <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                      p &lt; 0.0001
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      <NumberTicker value={257} />
                    </div>
                    <p className="text-xs font-semibold text-foreground/90 mt-1">
                      Pediatric MRI Cases Analyzed
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      BraTS-PEDs 2025 cohort evaluated across 5-fold CV
                    </p>
                  </div>
                </div>
              </BlurFade>

              {/* Card 2: Co-activations Eliminated */}
              <BlurFade delay={BLUR_FADE_DELAY * 5.2}>
                <div className="border border-border/70 rounded-2xl p-4 bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-3 h-full hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-muted-foreground">Thesis Head</span>
                    <span className="text-[10px] font-semibold text-cyan-500 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      HSRD
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground flex items-baseline gap-1">
                      <NumberTicker value={48} />
                      <span className="text-base font-normal text-muted-foreground">/ 52</span>
                    </div>
                    <p className="text-xs font-semibold text-foreground/90 mt-1">
                      Co-Activations Eliminated
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      Sibling-class overlap resolved with zero added parameters
                    </p>
                  </div>
                </div>
              </BlurFade>

              {/* Card 3: BRAC Health Platforms */}
              <BlurFade delay={BLUR_FADE_DELAY * 5.4}>
                <div className="border border-border/70 rounded-2xl p-4 bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-3 h-full hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-muted-foreground">BRAC mHealth</span>
                    <span className="text-[10px] font-semibold text-blue-500 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                      UAT
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      <NumberTicker value={3} />
                    </div>
                    <p className="text-xs font-semibold text-foreground/90 mt-1">
                      Health Platforms Validated
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      Manual UAT across UHIS, Urban, &amp; Rural mHealth
                    </p>
                  </div>
                </div>
              </BlurFade>

              {/* Card 4: Enterprise BI Dashboards */}
              <BlurFade delay={BLUR_FADE_DELAY * 5.6}>
                <div className="border border-border/70 rounded-2xl p-4 bg-card/60 backdrop-blur-xs flex flex-col justify-between gap-3 h-full hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-mono text-muted-foreground">BI Analytics</span>
                    <span className="text-[10px] font-semibold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                      Looker Studio
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground">
                      <NumberTicker value={2} />
                    </div>
                    <p className="text-xs font-semibold text-foreground/90 mt-1">
                      Enterprise BI Dashboards
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      Engineered for Mental Healthcare &amp; FA Incentive Calculation
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <WorkSection />
            </BlurFade>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            <div className="flex flex-col gap-8">
              {DATA.education.map((education, index) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1.5 border rounded-full shadow ring-2 ring-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-none">
                          <GraduationCap className="size-4 md:size-5" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                        {"coursework" in education && (
                          <div className="text-xs text-muted-foreground/80 mt-1">
                            <span className="font-medium text-foreground/80">Coursework: </span>
                            {(education as any).coursework}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.04}>
                  <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-3.5 flex items-center gap-2 hover:border-primary/40 transition-colors">
                    {skill.icon && (
                      <skill.icon className="size-4 rounded overflow-hidden object-contain text-muted-foreground" />
                    )}
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <ProjectsSection />
          </BlurFade>
        </section>

        {/* HACKATHONS (conditionally rendered only if present) */}
        {DATA.hackathons && DATA.hackathons.length > 0 && (
          <section id="hackathons">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <HackathonsSection />
            </BlurFade>
          </section>
        )}

        {/* CONTACT */}
        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ContactSection />
          </BlurFade>
        </section>
      </main>
    </>
  );
}
