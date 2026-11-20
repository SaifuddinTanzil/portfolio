import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Md Saifuddin Tanjil",
  initials: "ST",
  url: "https://saifuddintanzil.vercel.app",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka,+Bangladesh",
  description:
    "Technical & Data Analyst | Machine Learning & Web Developer",
  summary:
    "Computer Science graduate from Brac University (Oct 2026) specializing in Web Development & Machine Learning. Experienced Technical & Data Analyst Intern at the BRAC Health Programme (BHP), where I engineered executive Looker Studio dashboards, reverse-engineered mHealth database schemas, standardized digital data collection via CommCare & KoboToolbox, and executed cross-platform manual UAT. Author of undergraduate thesis research introducing HSRD for 3D pediatric brain tumor segmentation using deep learning (nnU-Net v2). Passionate about bridging data analytics, machine learning, and robust web engineering to build scalable solutions.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "PyTorch", icon: Icons.flame },
    { name: "SQL", icon: Icons.database },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Looker Studio", icon: Icons.barChart },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "HTML/CSS", icon: Icons.code },
    { name: "ConvNeXt", icon: Icons.layers },
    { name: "Transformers", icon: Icons.cpu },
    { name: "DBeaver", icon: Icons.table },
    { name: "CommCare", icon: Icons.smartphone },
    { name: "KoboToolbox", icon: Icons.clipboardList },
    { name: "Git", icon: Icons.gitBranch },
    { name: "Google Colab", icon: Icons.terminal },
    { name: "PyCharm", icon: Icons.boxes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: Icons.brain, label: "Projects" },
    { href: "/Saifuddin_Tanjil_Resume.pdf", icon: Icons.fileText, label: "Resume (PDF)" },
  ],
  contact: {
    email: "s.ddin.tanzil@gmail.com",
    tel: "+8801633718921",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saifuddintanzil",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saifuddin-tanzil-07132a275/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:s.ddin.tanzil@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "BRAC Health Programme (BHP), mHealth Product Team",
      href: "https://www.brac.net",
      badges: ["mHealth", "UAT", "Looker Studio", "SQL"],
      location: "Dhaka, Bangladesh",
      title: "Technical & Data Analyst Intern",
      logoUrl: "",
      iconType: "brac",
      start: "Feb 2026",
      end: "Sep 2026",
      description:
        "Engineered two Looker Studio dashboards for the Mental Healthcare and FA Incentive Calculation programs, giving Area Managers and Head Office leadership real-time insights for decision-making. Reverse-engineered undocumented Urban mHealth database schemas, creating technical documentation and writing SQL queries to compile Monthly Progress Reports (MPRs). Executed manual User Acceptance Testing (UAT) across three health platforms (UHIS, Urban mHealth, Rural mHealth), validating functionality against formal PRDs and liaising between developers and business teams to align system logic. Developed digital data-collection forms in CommCare and KoboToolbox for the 2026 Ward Mapping initiative, standardizing geographic data capture for field health workers. Drafted enterprise-grade Terms of Reference (ToRs) and researched security-obfuscation strategies for BI dashboards, strengthening data governance while translating complex data flows into executive-ready decks for senior leadership.",
    },
    {
      company: "The Study Town",
      href: "#",
      badges: ["Teaching", "O & A Level"],
      location: "Dhaka, Bangladesh",
      title: "Teaching Assistant for O & A Level Mathematics",
      logoUrl: "",
      iconType: "math",
      start: "Aug 2021",
      end: "Apr 2022",
      description:
        "Delivered Mathematics instruction to O and A Level classes of 50 to 100 students, adapting teaching pace and materials for large, mixed-ability groups.",
    },
    {
      company: "The Coach",
      href: "#",
      badges: ["Teaching", "O & A Level"],
      location: "Dhaka, Bangladesh",
      title: "Teaching Assistant for O & A Level Physics",
      logoUrl: "",
      iconType: "physics",
      start: "Aug 2020",
      end: "Jul 2021",
      description:
        "Tutored O and A Level Physics to classes of up to 20 students, breaking down mechanics and electromagnetism concepts into clear, exam-focused explanations.",
    },
  ],
  education: [
    {
      school: "Brac University",
      href: "https://www.bracu.ac.bd",
      degree: "B.S. in Computer Science (Concentrations: Web Development & ML) — CGPA: 3.18",
      logoUrl: "",
      iconType: "university",
      start: "2022",
      end: "Oct 2026",
      coursework: "Data Structures & Algorithms, Machine Learning, Artificial Intelligence, Statistics, Combinatorics",
    },
  ],
  projects: [
    {
      title: "Automated 3D Segmentation of Pediatric Brain Tumors Using Deep Learning",
      projectType: "brain-tumor",
      href: "#",
      dates: "Oct 2025 - Oct 2026",
      active: true,
      badge: "BraTS-PEDs 2025",
      description:
        "Undergraduate Thesis at Brac University. Proposed Hybrid Sigmoid-Softmax Region Decomposition (HSRD), an nnU-Net v2 output-head modification with zero added parameters, evaluated on 257 multi-parametric MRI cases (BraTS-PEDs 2025), eliminating the baseline's sibling-class co-activation in 48 of 52 cases. Diagnosed and fixed a rare-class (cyst) loss failure; across 5-fold cross-validation, cut false enhancing-tumor alarms (53 vs. 27 of 86 ET-free cases kept empty) with a statistically significant gain in official BraTS detection ranking (instance F1, p < 0.0001).",
      technologies: [
        "Python",
        "PyTorch",
        "nnU-Net v2",
        "Deep Learning",
        "BraTS-PEDs",
        "Medical Imaging",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Flood Damage Detection Using Satellite Imagery",
      projectType: "satellite-flood",
      href: "#",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      badge: "Sentinel & SpaceNet",
      description:
        "Developed a flood damage detection system using PyTorch with ConvNeXt and transformer-based models, trained on Sentinel and SpaceNet (Germany) datasets to identify flood-affected regions from pre- and post-disaster imagery.",
      technologies: [
        "Python",
        "PyTorch",
        "ConvNeXt",
        "Transformers",
        "Computer Vision",
        "Satellite Remote Sensing",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
