/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { BorderBeam } from "@/components/magicui/border-beam";

function BrainTumorVisualHeader() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden flex items-center justify-center border-b border-border select-none">
      {/* Background coordinate grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Stylized MRI crosshairs & axes */}
      <svg
        className="absolute inset-0 size-full text-indigo-400/25 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="currentColor" strokeDasharray="3 3" />
        <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeDasharray="3 3" />
        <circle cx="50%" cy="50%" r="55" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <circle cx="50%" cy="50%" r="72" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      </svg>

      {/* Stylized Axial MRI Skull / Brain Contours */}
      <svg
        viewBox="0 0 200 160"
        className="absolute size-40 text-cyan-400/80 pointer-events-none drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]"
        fill="none"
      >
        {/* Outer cranial contour */}
        <path
          d="M 100 20 C 145 20, 165 50, 165 95 C 165 130, 140 148, 100 148 C 60 148, 35 130, 35 95 C 35 50, 55 20, 100 20 Z"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-indigo-400/60"
        />
        {/* Ventricles / Sulci lines */}
        <path
          d="M 85 65 Q 95 85 90 105 M 115 65 Q 105 85 110 105"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-slate-400/40"
        />
        {/* HSRD Targeted Lesion ROI (Pediatric Tumor ROI) */}
        <ellipse
          cx="124"
          cy="82"
          rx="18"
          ry="15"
          className="fill-rose-500/20 stroke-rose-400"
          strokeWidth="1.8"
        />
        <circle cx="124" cy="82" r="3" className="fill-rose-400 animate-ping opacity-75" />
        <circle cx="124" cy="82" r="2.5" className="fill-rose-400" />

        {/* Neural Network Output-head Decomp lines */}
        <line x1="124" y1="82" x2="160" y2="40" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="160" cy="40" r="3" fill="#06b6d4" />
        <line x1="124" y1="82" x2="160" y2="120" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="160" cy="120" r="3" fill="#8b5cf6" />
      </svg>

      {/* Floating Meta Badges */}
      <div className="absolute top-2.5 left-3 flex items-center gap-1.5 font-mono text-[10px] text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>BraTS-PEDs 2025</span>
      </div>
      <div className="absolute top-2.5 right-3 flex items-center gap-1 font-mono text-[10px] text-indigo-300 bg-slate-900/80 px-2 py-0.5 rounded border border-indigo-500/30 backdrop-blur-sm">
        <span>nnU-Net v2 · HSRD</span>
      </div>
      <div className="absolute bottom-2 left-3 font-mono text-[9px] text-slate-400 flex items-center gap-2">
        <span>AXIAL T1c/T2/FLAIR</span>
        <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-1 rounded border border-emerald-500/30">p &lt; 0.0001</span>
      </div>
      <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-400">
        <span>48/52 Resolved</span>
      </div>
    </div>
  );
}

function SatelliteFloodVisualHeader() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 overflow-hidden flex items-center justify-center border-b border-border select-none">
      {/* Background satellite radar grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      {/* Split Radar View */}
      <svg
        className="absolute inset-0 size-full text-cyan-500/30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Radar concentric sweep rings */}
        <circle cx="50%" cy="50%" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="75" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        {/* Bi-temporal division line */}
        <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
      </svg>

      {/* Terrain and Water Inundation Polygon Overlays */}
      <svg
        viewBox="0 0 200 160"
        className="absolute size-40 pointer-events-none"
        fill="none"
      >
        {/* Left Side: Pre-disaster Baseline topography */}
        <path
          d="M 10 110 Q 40 85 70 100 Q 90 110 100 95"
          stroke="#0284c7"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 15 130 Q 50 115 80 125 L 100 120"
          stroke="#0284c7"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.4"
        />

        {/* Right Side: Post-disaster Inundation (Flood Extent) */}
        <path
          d="M 100 95 Q 120 70 150 78 Q 180 85 195 65 L 195 150 L 100 150 Z"
          className="fill-cyan-400/25 stroke-cyan-300"
          strokeWidth="1.8"
        />
        {/* Ripple rings */}
        <circle cx="145" cy="110" r="14" stroke="#38bdf8" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <circle cx="145" cy="110" r="6" fill="#38bdf8" opacity="0.7" />
      </svg>

      {/* Telemetry Labels */}
      <div className="absolute top-2.5 left-3 flex items-center gap-1.5 font-mono text-[10px] text-cyan-300 bg-slate-900/80 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-sm">
        <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>Sentinel-1/2 SAR</span>
      </div>
      <div className="absolute top-2.5 right-3 flex items-center gap-1 font-mono text-[10px] text-teal-300 bg-slate-900/80 px-2 py-0.5 rounded border border-teal-500/30 backdrop-blur-sm">
        <span>SpaceNet Germany</span>
      </div>
      <div className="absolute bottom-2 left-3 font-mono text-[9px] text-slate-400 flex items-center gap-1">
        <span>T0: Pre-disaster</span>
        <span className="text-cyan-400">|</span>
        <span className="text-cyan-300 font-semibold">T1: Post-disaster</span>
      </div>
      <div className="absolute bottom-2 right-3 font-mono text-[9px] text-cyan-400 font-semibold bg-cyan-950/70 px-1.5 py-0.5 rounded border border-cyan-500/30">
        <span>ConvNeXt · Transformers</span>
      </div>
    </div>
  );
}

function ProjectImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    if (title.toLowerCase().includes("brain") || title.toLowerCase().includes("tumor")) {
      return <BrainTumorVisualHeader />;
    }
    if (title.toLowerCase().includes("flood") || title.toLowerCase().includes("satellite")) {
      return <SatelliteFloodVisualHeader />;
    }
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-300 bg-card",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : (
            <ProjectImage src={image || ""} alt={title} title={title} />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2 z-10">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1 relative">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold tracking-tight text-base group-hover:text-primary transition-colors">
              {title}
            </h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm shrink-0"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2 bg-background/80"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* BorderBeam on hover */}
      <BorderBeam
        size={240}
        duration={8}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}
