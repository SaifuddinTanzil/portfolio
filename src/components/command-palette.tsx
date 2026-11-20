"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import {
  Search,
  Brain,
  Satellite,
  Building2,
  GraduationCap,
  Sparkles,
  FileDown,
  Mail,
  Linkedin,
  Github,
  SunMoon,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { DATA } from "@/data/resume";

export function openCommandPalette() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }
}

interface CommandItem {
  id: string;
  category: "Navigation" | "Actions" | "Social";
  label: string;
  sublabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  perform: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        handleClose();
      }
    };

    const handleCustomOpen = () => handleOpen();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [handleClose, handleOpen]);

  const scrollTo = useCallback((id: string) => {
    handleClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, [handleClose]);

  const items: CommandItem[] = useMemo(
    () => [
      {
        id: "thesis",
        category: "Navigation",
        label: "Brain Tumor Thesis (HSRD Research)",
        sublabel: "3D Pediatric Brain Tumor Segmentation · nnU-Net v2",
        icon: Brain,
        perform: () => scrollTo("projects"),
      },
      {
        id: "flood",
        category: "Navigation",
        label: "Satellite Flood Damage Detection",
        sublabel: "Bi-temporal Remote Sensing · ConvNeXt & Transformers",
        icon: Satellite,
        perform: () => scrollTo("projects"),
      },
      {
        id: "brac",
        category: "Navigation",
        label: "BRAC Health Programme Experience",
        sublabel: "Technical & Data Analyst Intern · Looker Studio & UAT",
        icon: Building2,
        perform: () => scrollTo("work"),
      },
      {
        id: "education",
        category: "Navigation",
        label: "Education & Teaching Roles",
        sublabel: "Brac University CS · O/A Level Math & Physics TA",
        icon: GraduationCap,
        perform: () => scrollTo("education"),
      },
      {
        id: "skills",
        category: "Navigation",
        label: "Technical Skills & Stack",
        sublabel: "Data & BI, Machine Learning, Web Development",
        icon: Sparkles,
        perform: () => scrollTo("skills"),
      },
      {
        id: "resume",
        category: "Actions",
        label: "Download Resume (PDF)",
        sublabel: "Saifuddin_Tanjil_Resume.pdf",
        icon: FileDown,
        perform: () => {
          handleClose();
          const link = document.createElement("a");
          link.href = "/Saifuddin_Tanjil_Resume.pdf";
          link.download = "Saifuddin_Tanjil_Resume.pdf";
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
      },
      {
        id: "copy-email",
        category: "Actions",
        label: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
        sublabel: DATA.contact.email,
        icon: copied ? Check : Mail,
        perform: () => {
          navigator.clipboard.writeText(DATA.contact.email);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
            handleClose();
          }, 800);
        },
      },
      {
        id: "theme",
        category: "Actions",
        label: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        sublabel: `Currently in ${theme ?? "system"} mode`,
        icon: SunMoon,
        perform: () => {
          setTheme(theme === "dark" ? "light" : "dark");
          handleClose();
        },
      },
      {
        id: "linkedin",
        category: "Social",
        label: "Open LinkedIn Profile",
        sublabel: "Connect with Saifuddin Tanjil",
        icon: Linkedin,
        perform: () => {
          handleClose();
          window.open(DATA.contact.social.LinkedIn.url, "_blank");
        },
      },
      {
        id: "github",
        category: "Social",
        label: "Open GitHub Profile",
        sublabel: "Browse repositories and open-source code",
        icon: Github,
        perform: () => {
          handleClose();
          window.open(DATA.contact.social.GitHub.url, "_blank");
        },
      },
    ],
    [scrollTo, handleClose, copied, theme, setTheme]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.sublabel && item.sublabel.toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setSelectedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredItems.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const current = filteredItems[selectedIndex];
      if (current) current.perform();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-muted/40">
              <Search className="size-4 text-muted-foreground shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search thesis, BRAC, skills..."
                className="w-full bg-transparent text-sm font-sans placeholder:text-muted-foreground focus:outline-none text-foreground"
              />
              <button
                onClick={handleClose}
                className="size-6 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground transition-colors"
                aria-label="Close Command Palette"
              >
                <X className="size-3.5" />
              </button>
            </div>

            <div className="overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-muted-foreground">
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      onClick={() => item.perform()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer text-sm transition-colors ${
                        isSelected
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`size-8 rounded-lg flex items-center justify-center border shrink-0 ${
                            isSelected
                              ? "bg-background border-border text-foreground"
                              : "bg-muted/60 border-border/50 text-muted-foreground"
                          }`}
                        >
                          <Icon className="size-4" />
                        </div>
                        <div className="flex flex-col min-w-0 text-left">
                          <span className="truncate text-foreground font-medium">
                            {item.label}
                          </span>
                          {item.sublabel && (
                            <span className="text-xs text-muted-foreground truncate">
                              {item.sublabel}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight
                        className={`size-3.5 shrink-0 transition-transform ${
                          isSelected
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-1"
                        }`}
                      />
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 border-t border-border bg-muted/30 flex items-center justify-between text-[11px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">
                  ↑
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">
                  ↓
                </kbd>
                <span>Select</span>
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">
                  ↵
                </kbd>
              </div>
              <div className="flex items-center gap-1.5 font-mono">
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
