import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  FileText,
  Check,
  Copy,
  Eye,
  X,
  Code2,
  Server,
  TerminalSquare,
  Workflow,
  Database,
  Cloud,
  Boxes,
  GitBranch,
  Layers3,
  Cpu,
  Globe2,
  Braces,
  Download,
  ChevronDown,
  ShieldCheck,
  Terminal,
  Smartphone,
  ShoppingBag,
  Bot,
  Zap,
  Star,
} from 'lucide-react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/useTheme';
import ImageHero from '../src/assets/MuhammedShan.jpg';
import ResumePDF from '../src/assets/resume.pdf';

const MotionDiv = motion.div;

/* ─── Animated Section FadeUp ────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '', immediate = false }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionDiv
      initial={shouldReduceMotion || immediate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

/* ─── Technology Marquee Data ────────────────────────────────── */
const techRows = [
  [
    { name: 'React', icon: Code2, color: '#61dafb' },
    { name: 'JavaScript', icon: Braces, color: '#f7df1e' },
    { name: 'Django', icon: Server, color: '#44b78b' },
    { name: 'Python', icon: TerminalSquare, color: '#3776ab' },
    { name: 'REST APIs', icon: Workflow, color: '#ff6b6b' },
    { name: 'PostgreSQL', icon: Database, color: '#4169e1' },
  ],
  [
    { name: 'MongoDB', icon: Database, color: '#47a248' },
    { name: 'AWS', icon: Cloud, color: '#ff9900' },
    { name: 'System Design', icon: Boxes, color: '#a78bfa' },
    { name: 'Git', icon: GitBranch, color: '#f05032' },
    { name: 'Next.js', icon: Globe2, color: '#ffffff' },
    { name: 'Backend', icon: Cpu, color: '#c084fc' },
  ],
  [
    { name: 'Tailwind CSS', icon: Layers3, color: '#38bdf8' },
    { name: 'Framer Motion', icon: Workflow, color: '#f472b6' },
    { name: 'Django REST', icon: Globe2, color: '#10b981' },
    { name: 'Supabase', icon: Database, color: '#3ecf8e' },
    { name: 'Deployment', icon: Cloud, color: '#60a5fa' },
    { name: 'Clean Code', icon: Code2, color: '#C6FD50' },
  ],
];

/* ─── Tech Card (ProjectOne Style) ───────────────────────────── */
const TechCard = ({ tech, isDarkMode }) => {
  const Icon = tech.icon;
  return (
    <div
      className={`flex h-14 w-36 shrink-0 items-center gap-2.5 rounded-[12px] border-[1.5px] px-3 shadow-[2.5px_2px_0px_0px_#131311] dark:shadow-none transition-transform duration-200 hover:-translate-y-0.5 sm:h-16 sm:w-44 sm:gap-3 sm:px-4 ${
        isDarkMode
          ? 'border-white/20 bg-[#161714] text-white'
          : 'border-[#131311] bg-white text-[#131311]'
      }`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border-[1.5px] sm:h-9 sm:w-9 ${
          isDarkMode
            ? 'border-white/20 bg-[#20201D]'
            : 'border-[#131311] bg-[#F3F2EA]'
        }`}
      >
        <Icon size={17} strokeWidth={2} style={{ color: tech.color }} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[12px] font-bold uppercase tracking-tight sm:text-[13px]">{tech.name}</p>
        <p className={`text-[8.5px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-white/50' : 'text-[#41413E]'}`}>
          Stack
        </p>
      </div>
    </div>
  );
};

/* ─── Tech Marquee Row ───────────────────────────────────────── */
const TechMarqueeRow = ({ items, reverse = false, offset = 0, isActive = true, isDarkMode }) => {
  const marqueeItems = [...items, ...items];
  const startX = reverse ? '-50%' : '0%';
  const endX = reverse ? '0%' : '-50%';
  return (
    <MotionDiv
      className="flex w-max gap-3.5"
      initial={{ x: startX }}
      animate={{ x: isActive ? endX : startX }}
      transition={{ duration: 32 + offset, repeat: Infinity, ease: 'linear' }}
    >
      {marqueeItems.map((tech, index) => (
        <TechCard key={`${tech.name}-${index}`} tech={tech} isDarkMode={isDarkMode} />
      ))}
    </MotionDiv>
  );
};

/* ─── Projects Data ──────────────────────────────────────────── */
const projectsData = [
  {
    title: "VelVault",
    category: "Full Stack",
    badge: "Digital Marketplace",
    accent: "#3b82f6",
    description: "A digital products marketplace where users browse across categories, purchase digital goods, and securely download and keep them in a personal library. Engineered per-request authorized file delivery with a Razorpay-powered checkout and entitlement system.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "React", "Razorpay"],
    github: "https://github.com/shanmuhammedd03-web/velvault",
    liveUrl: "https://velvault.vercel.app/"
  },
  {
    title: "Indiagram",
    category: "Social & Mobile",
    badge: "Social Platform",
    accent: "#ec4899",
    description: "A full-scale, Instagram-style social media platform with posts, reels, 24-hour stories, real-time direct messaging, and a personalised home feed. Built with row-level security on every table for a secure, multi-user experience.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Native", "Expo"],
    github: "https://github.com/shanmuhammedd03-web/indiagram",
    liveUrl: "https://indiagram-six.vercel.app/"
  },
  {
    title: "EduFlow",
    category: "Full Stack",
    badge: "EdTech Platform",
    accent: "#a855f7",
    description: "A comprehensive educational productivity ecosystem. Engineered modular features including smart note-taking, integrated AI assistance, and real-time community engagement tools.",
    tags: ["Python", "Django", "PostgreSQL", "React", "Razorpay"],
    github: "https://github.com/muhammedshann/EduFlow.git",
    liveUrl: "https://fresheasy.online/"
  },
  {
    title: "Fresh Easy",
    category: "Full Stack",
    badge: "E-Commerce",
    accent: "#10b981",
    description: "Architected a full-scale E-commerce platform managing the complete order lifecycle—from secure Razorpay payment integration to dynamic inventory management.",
    tags: ["Python", "Django", "PostgreSQL", "Razorpay", "Tailwind"],
    github: "https://github.com/muhammedshann/fresheasy.git",
    liveUrl: ""
  },
  {
    title: "Echo Note",
    category: "AI & Tools",
    badge: "AI Transcription",
    accent: "#06b6d4",
    description: "A specialized AI-driven transcription service. Implemented OpenAI Whisper for high-precision, real-time speech-to-text conversion with a focus on low-latency processing.",
    tags: ["Python", "Django", "React", "OpenAI", "PostgreSQL"],
    github: "https://github.com/muhammedshann/echo-note",
    liveUrl: ""
  },
  {
    title: "WhereIsMyMenu",
    category: "Full Stack",
    badge: "Restaurant Tech",
    accent: "#f59e0b",
    description: "A modern restaurant discovery and digital menu platform that helps users instantly access restaurant menus, explore dishes, and improve the dining experience through a clean and responsive interface.",
    tags: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "REST API"],
    github: "https://github.com/muhammedshann/whereismymenu",
    liveUrl: "https://whereismymenu.muhammedshan.info"
  },
  {
    title: "Findiff",
    category: "AI & Tools",
    badge: "Developer CLI",
    accent: "#8b5cf6",
    description: "An AI powered Git commit message generator designed for developers. Built a professional CLI tool published to npm that analyzes staged Git changes and generates clean, conventional commit messages.",
    tags: ["Node.js", "JavaScript", "CLI", "AI", "OpenAI", "Gemini", "Git"],
    github: "https://github.com/muhammedshann/findiff",
    liveUrl: "https://www.npmjs.com/package/findiff"
  },
];

/* ─── FAQs Data ──────────────────────────────────────────────── */
const faqsData = [
  {
    q: "What is your core tech stack and specialization?",
    a: "My primary specialization is full stack web engineering with Python & Django on the backend (including Django REST Framework, PostgreSQL, and background task queues) and modern React / Next.js / TypeScript on the frontend with Tailwind CSS."
  },
  {
    q: "Are you available for contract or full-time opportunities?",
    a: "Yes! I am actively available for both full-time software engineering roles and high-impact contract or freelance projects. I work remotely with clients and teams worldwide."
  },
  {
    q: "How do you handle backend scalability and security?",
    a: "I design database schemas with indexed queries, normalized relational data, and row-level security. For APIs, I implement strict JWT/token authentication, CORS policies, rate limiting, and atomic transactions for sensitive operations like payment processing."
  },
  {
    q: "Can you handle both the UI design and full backend implementation?",
    a: "Yes, exactly like ProjectOne's full-service philosophy: I handle the end-to-end cycle. From user flow wireframing and responsive UI craft, to database modeling, third-party payment integration (Razorpay/Stripe), and production deployment."
  },
  {
    q: "How quickly can you ship a functional MVP or custom web app?",
    a: "Most custom web applications and MVPs can be built and deployed in 2 to 3 weeks of focused sprints, with clear milestones, clean Git commits, and zero communication barriers."
  },
  {
    q: "Do I get full ownership of the source code and repository?",
    a: "100% yes. You receive complete ownership of the private Git repository, database migration scripts, environment variables, documentation, and automated deployment configurations. No lock-in, ever."
  }
];

/* ─── Hero Project Mockups (Real Built Projects) ──────────────── */
const VelVaultMockup = () => (
  <div className="w-full h-full bg-[#0b1120] text-white p-2.5 sm:p-3 flex flex-col justify-between font-sans select-none relative overflow-hidden">
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />

    {/* Mini Store Header */}
    <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-[10px] font-black tracking-tight text-white">VelVault</span>
      </div>
      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/30 text-[8px] font-bold text-blue-300">
        <ShoppingBag size={9} />
        <span>Marketplace</span>
      </div>
    </div>

    {/* Digital Product Hero Preview */}
    <div className="my-auto py-1">
      <div className="p-2 rounded-[8px] bg-white/[0.06] border border-white/10 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-1 mb-1">
          <div>
            <p className="text-[10px] font-black leading-tight text-white">SaaS UI Kit & API</p>
            <p className="text-[8px] text-blue-200/70">Python • Django • React</p>
          </div>
          <span className="text-[11px] font-black text-[#C6FD50] font-mono">$29</span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-white/10">
          <span className="text-[7.5px] font-bold text-emerald-300 flex items-center gap-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Razorpay Verified
          </span>
          <span className="text-[7.5px] font-bold px-1.5 py-0.5 rounded bg-blue-500 text-white">
            Download
          </span>
        </div>
      </div>
    </div>

    {/* Bottom status */}
    <div className="flex items-center justify-between text-[7.5px] text-slate-400 pt-1 border-t border-white/10">
      <span>Secure File Delivery</span>
      <span className="font-mono text-blue-300">v2.4 Live</span>
    </div>
  </div>
);

const IndiagramMockup = () => (
  <div className="w-full h-full bg-[#0a0a0f] text-white p-2.5 sm:p-3 flex flex-col justify-between font-sans select-none relative overflow-hidden">
    {/* Top Stories row */}
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-black tracking-tight text-white flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600" />
          Indiagram
        </span>
        <span className="text-[7.5px] font-mono font-bold text-rose-400 bg-rose-500/10 px-1 py-0.5 rounded border border-rose-500/20">
          Supabase RLS
        </span>
      </div>

      {/* Stories Avatars */}
      <div className="flex items-center gap-1.5 pb-1">
        {[
          { name: 'You', color: 'from-amber-400 via-rose-500 to-purple-600' },
          { name: 'alex', color: 'from-blue-400 to-emerald-400' },
          { name: 'nina', color: 'from-fuchsia-500 to-pink-500' },
          { name: 'dev', color: 'from-violet-500 to-indigo-500' },
        ].map((story, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <div className={`w-5 h-5 rounded-full p-[1px] bg-gradient-to-tr ${story.color}`}>
              <div className="w-full h-full rounded-full bg-[#16161f] flex items-center justify-center text-[7px] font-bold text-white uppercase">
                {story.name[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Mini Post Card */}
    <div className="p-1.5 rounded-[7px] bg-white/[0.05] border border-white/10 my-auto">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-[7px] font-bold">
            S
          </div>
          <span className="text-[8.5px] font-bold text-white">@shan</span>
        </div>
        <span className="text-[7.5px] text-slate-400">12m ago</span>
      </div>
      <div className="h-7 rounded bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-slate-900 border border-white/10 flex items-center justify-center">
        <span className="text-[8px] font-semibold text-rose-200">Reels & Feed UI</span>
      </div>
      <div className="flex items-center gap-2 mt-1 text-[7.5px] text-slate-300">
        <span className="text-rose-400 font-bold">♥ 1,428</span>
        <span>💬 84</span>
        <span className="ml-auto font-mono text-[7px] text-slate-400">Next.js + Expo</span>
      </div>
    </div>

    {/* Bottom security watermark */}
    <div className="flex items-center justify-between text-[7.5px] text-slate-400 pt-0.5 border-t border-white/10">
      <span>Realtime Messaging</span>
      <span className="text-emerald-400 font-mono">100% RLS</span>
    </div>
  </div>
);

const EduFlowMockup = () => (
  <div className="w-full h-full bg-[#110d1f] text-white p-2.5 sm:p-3 flex flex-col justify-between font-sans select-none relative overflow-hidden">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-purple-500/20 pb-1.5">
      <div className="flex items-center gap-1.5">
        <div className="w-3.5 h-3.5 rounded bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-[8px] font-bold text-purple-300">
          E
        </div>
        <span className="text-[10px] font-black tracking-tight text-white">EduFlow</span>
      </div>
      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
        EdTech
      </span>
    </div>

    {/* Sprint / Course Progress */}
    <div className="my-auto py-1">
      <div className="p-2 rounded-[8px] bg-purple-950/40 border border-purple-500/20">
        <div className="flex items-center justify-between text-[9px] font-bold mb-1">
          <span className="text-purple-100">Full Stack Sprint</span>
          <span className="text-[#C6FD50] font-mono">88%</span>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-purple-900/60 overflow-hidden mb-1.5">
          <div className="w-[88%] h-full bg-gradient-to-r from-purple-400 to-[#C6FD50] rounded-full" />
        </div>
        <div className="space-y-0.5 text-[7.5px] text-purple-200/80">
          <div className="flex items-center gap-1">
            <span className="text-[#C6FD50] font-bold">✓</span>
            <span>Django REST & PostgreSQL</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#C6FD50] font-bold">✓</span>
            <span>AI Summarization & Flashcards</span>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between text-[7.5px] text-purple-300/70 pt-1 border-t border-purple-500/20">
      <span>Smart Study Ecosystem</span>
      <span className="font-mono text-purple-200">Active</span>
    </div>
  </div>
);

const FindiffMockup = () => (
  <div className="w-full h-full bg-[#0a0c10] text-[#FAFAFA] p-2.5 sm:p-3 flex flex-col justify-between font-mono select-none relative overflow-hidden border border-emerald-500/20">
    {/* macOS Terminal Window Title Bar */}
    <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
        <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
      </div>
      <span className="text-[8px] font-bold text-slate-400">findiff — bash</span>
      <span className="text-[7.5px] text-emerald-400 font-bold">npm v1.2</span>
    </div>

    {/* Terminal Command & AI Output */}
    <div className="my-auto py-1 space-y-1 text-[8px] leading-tight">
      <div className="flex items-center gap-1 text-slate-300">
        <span className="text-emerald-400 font-bold">$</span>
        <span>npx findiff</span>
      </div>
      <div className="text-slate-400 text-[7.5px]">
        🔍 Analyzing staged git changes (3 files)...
      </div>
      <div className="p-1.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
        <p className="text-[7px] font-bold text-emerald-400 uppercase tracking-wider mb-0.5">✨ AI Commit Generated</p>
        <p className="text-[8px] font-bold text-white truncate">&gt; feat(auth): add jwt refresh rotation</p>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between text-[7px] text-slate-400 pt-1 border-t border-white/10">
      <span className="text-emerald-400 font-bold">✔ Ready to commit</span>
      <span>1k+ Installs</span>
    </div>
  </div>
);

const WhereIsMyMenuMockup = () => (
  <div className="w-full h-full bg-[#16110d] text-white p-2.5 sm:p-3 flex flex-col justify-between font-sans select-none relative overflow-hidden">
    {/* Restaurant Header */}
    <div className="flex items-center justify-between border-b border-amber-500/20 pb-1.5">
      <div className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-[10px] font-black tracking-tight text-white">WhereIsMyMenu</span>
      </div>
      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[8px] font-bold">
        <Star size={9} className="fill-amber-400 text-amber-400" />
        <span>4.9</span>
      </div>
    </div>

    {/* Dish Showcase Card */}
    <div className="my-auto py-1">
      <div className="p-2 rounded-[8px] bg-amber-950/40 border border-amber-500/20">
        <div className="flex items-start justify-between gap-1 mb-1">
          <div>
            <p className="text-[10px] font-black leading-tight text-white">Truffle Burger</p>
            <p className="text-[8px] text-amber-200/70">Artisan Brioche • Wagyu</p>
          </div>
          <span className="text-[11px] font-black text-amber-400 font-mono">$14.50</span>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-amber-500/20 text-[7.5px]">
          <span className="text-emerald-300 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Table 04 QR Live
          </span>
          <span className="px-1.5 py-0.5 rounded bg-amber-500 text-[#131311] font-bold">
            Order
          </span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between text-[7.5px] text-amber-200/70 pt-1 border-t border-amber-500/20">
      <span>Digital Restaurant Menus</span>
      <span className="font-mono text-amber-300">Fast Scan</span>
    </div>
  </div>
);

export default function HomePage({ initialSection = null }) {
  const { isDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Handle direct section links (e.g., /projects, /about)
  useEffect(() => {
    const targetId = initialSection || (window.location.hash ? window.location.hash.replace('#', '') : null);
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [initialSection]);

  // ScrollSpy listener
  useEffect(() => {
    const sections = ['home', 'problem', 'solution', 'why-me', 'process', 'projects', 'about', 'faqs', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('muhammedshan930o@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className={`min-h-screen font-sans antialiased ${isDarkMode ? 'dark text-[#FAFAFA]' : 'text-[#131311]'}`}>
      <Header activeSection={activeSection} onNavigate={scrollTo} />

      {/* ══════════════════════════════════════════════════════════════
          1. HERO SECTION (Exact ProjectOne recreation with floating mockups)
          ══════════════════════════════════════════════════════════════ */}
      <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-38 lg:pb-36 px-4 sm:px-6 min-h-[860px] lg:min-h-[940px] xl:min-h-[980px] flex flex-col justify-center items-center overflow-hidden">
        {/* Giant background circular orbit matching ProjectOne (subtle low-opacity whisper line) */}
        <div
          className="hidden lg:block absolute top-[46%] xl:top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] lg:w-[780px] lg:h-[780px] xl:w-[840px] xl:h-[840px] rounded-full border border-[#131311]/[0.07] dark:border-white/[0.06] bg-[#131311]/[0.004] dark:bg-white/[0.004] pointer-events-none"
          aria-hidden="true"
        />

        {/* ─── Hero Centerpiece ─── */}
        <div className="relative z-20 max-w-xl mx-auto text-center px-4">
          <FadeUp delay={0.05} immediate={true}>
            {/* Eyebrow Pill Badge */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131311] text-white text-[11px] sm:text-[12px] font-bold tracking-tight shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#C6FD50] animate-pulse" />
                <span>Full Stack Python & React Expert</span>
              </div>
              <p className="text-[11.5px] sm:text-[12px] font-[800] uppercase tracking-[0.2em] text-[#131311] dark:text-[#B9B9B7]">
                ONE DEVELOPER. FULL STACK. DONE RIGHT.
              </p>
            </div>
          </FadeUp>

          {/* Main Massive Headline */}
          <FadeUp delay={0.1} immediate={true}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-[900] tracking-[-0.035em] leading-[0.94] text-[#131311] dark:text-[#FAFAFA] mt-4 mb-5">
              Your Web App,<br />Handled.
            </h1>
          </FadeUp>

          {/* Hero Description */}
          <FadeUp delay={0.15} immediate={true}>
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed text-[#2E2E2B] dark:text-[#B9B9B7] max-w-lg mx-auto mb-8 font-normal">
              A custom-built web application, live in weeks, not months. No junior freelancers. No bloated templates. No hassles, and no more sending people to broken links and hoping for the best.
            </p>
          </FadeUp>

          {/* CTA Button & Guarantee */}
          <FadeUp delay={0.2} immediate={true}>
            <div className="flex flex-col items-center justify-center gap-3.5">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-[12px] border-[2px] border-[#131311] bg-[#C6FD50] text-[#131311] text-[13px] font-[800] uppercase tracking-wider shadow-[4px_4px_0px_0px_#131311] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#131311] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all group cursor-pointer"
              >
                <span>Get Started Now</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-[5px] bg-[#131311] text-[#C6FD50] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={13} strokeWidth={3} />
                </span>
              </button>

              {/* Checkbox Guarantee Icon from ProjectOne */}
              <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#131311] dark:text-[#FAFAFA]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <rect width="16" height="16" rx="8" fill="#131311" />
                  <path d="M4.91696 8.14849L6.92282 10.0801L11.083 5.91992" stroke="#C6FD50" strokeLinecap="round" strokeWidth="1.6" />
                </svg>
                <span>100% Quality & Production Code Guarantee</span>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ─── Hero Polaroid Mockup Cards (5 Orbital Positions Featuring Muhammed Shan's Actual Built Projects) ─── */}

        {/* Card 1: Top-Left (VelVault) tilted -9deg */}
        <div
          onClick={() => scrollTo('projects')}
          className="hidden lg:block absolute top-[5%] xl:top-[6%] left-[17%] xl:left-[20%] -rotate-[9deg] hover:-rotate-2 hover:scale-105 transition-all duration-300 z-10 cursor-pointer w-[185px] xl:w-[215px]"
          title="VelVault — Digital Products Marketplace"
        >
          <div className="card-projectone p-2.5 sm:p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] dark:border-white/20 rounded-[18px] shadow-[5px_5px_0px_0px_#131311] dark:shadow-[5px_5px_0px_0px_#000000]">
            <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
              <VelVaultMockup />
            </div>
            <div className="mt-2.5 px-1 flex items-center justify-between">
              <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">
                VelVault
              </p>
              <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
                Marketplace
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Mid-Left (Indiagram) tilted -7deg */}
        <div
          onClick={() => scrollTo('projects')}
          className="hidden lg:block absolute top-[32%] xl:top-[33%] left-[3%] xl:left-[5%] -rotate-[7deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 cursor-pointer w-[195px] xl:w-[225px]"
          title="Indiagram — Social Media Platform"
        >
          <div className="card-projectone p-2.5 sm:p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] dark:border-white/20 rounded-[18px] shadow-[5px_5px_0px_0px_#131311] dark:shadow-[5px_5px_0px_0px_#000000]">
            <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
              <IndiagramMockup />
            </div>
            <div className="mt-2.5 px-1 flex items-center justify-between">
              <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">
                Indiagram
              </p>
              <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
                Social App
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Bottom-Left (EduFlow) tilted -22deg */}
        <div
          onClick={() => scrollTo('projects')}
          className="hidden lg:block absolute bottom-[7.5%] lg:bottom-[8.5%] xl:bottom-[9.5%] left-[13%] xl:left-[16%] -rotate-[22deg] hover:-rotate-12 hover:scale-105 transition-all duration-300 z-10 cursor-pointer w-[190px] xl:w-[220px]"
          title="EduFlow — EdTech Platform"
        >
          <div className="card-projectone p-2.5 sm:p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] dark:border-white/20 rounded-[18px] shadow-[5px_5px_0px_0px_#131311] dark:shadow-[5px_5px_0px_0px_#000000]">
            <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
              <EduFlowMockup />
            </div>
            <div className="mt-2.5 px-1 flex items-center justify-between">
              <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">
                EduFlow
              </p>
              <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
                EdTech
              </span>
            </div>
          </div>
        </div>

        {/* Card 4: Top-Right (Findiff CLI) tilted +32deg */}
        <div
          onClick={() => scrollTo('projects')}
          className="hidden lg:block absolute top-[12%] xl:top-[14%] right-[8%] xl:right-[11%] rotate-[32deg] hover:rotate-16 hover:scale-105 transition-all duration-300 z-10 cursor-pointer w-[190px] xl:w-[220px]"
          title="Findiff — AI Git Commit CLI on npm"
        >
          <div className="card-projectone p-2.5 sm:p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] dark:border-white/20 rounded-[18px] shadow-[5px_5px_0px_0px_#131311] dark:shadow-[5px_5px_0px_0px_#000000]">
            <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
              <FindiffMockup />
            </div>
            <div className="mt-2.5 px-1 flex items-center justify-between">
              <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">
                Findiff CLI
              </p>
              <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
                npm Tool
              </span>
            </div>
          </div>
        </div>

        {/* Card 5: Bottom-Right (WhereIsMyMenu) tilted +5deg */}
        <div
          onClick={() => scrollTo('projects')}
          className="hidden lg:block absolute bottom-[8.5%] lg:bottom-[9.5%] xl:bottom-[10.5%] right-[7%] xl:right-[10%] rotate-[5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 cursor-pointer w-[195px] xl:w-[225px]"
          title="WhereIsMyMenu — Restaurant Discovery & Menu"
        >
          <div className="card-projectone p-2.5 sm:p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] dark:border-white/20 rounded-[18px] shadow-[5px_5px_0px_0px_#131311] dark:shadow-[5px_5px_0px_0px_#000000]">
            <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
              <WhereIsMyMenuMockup />
            </div>
            <div className="mt-2.5 px-1 flex items-center justify-between">
              <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">
                WhereIsMyMenu
              </p>
              <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
                QR Discovery
              </span>
            </div>
          </div>
        </div>

        {/* Handwritten Annotation & Curved Arrow pointing up-right directly at Card 5 */}
        <div className="hidden lg:flex flex-col items-center absolute bottom-[12%] lg:bottom-[13%] xl:bottom-[14%] right-[22%] xl:right-[25%] z-20 select-none pointer-events-none">
          <p className="font-handwriting text-[20px] xl:text-[23px] text-[#131311] dark:text-[#C6FD50] -rotate-[12deg] leading-tight text-center">
            Who wouldn’t want<br />a site like this?!
          </p>
          <svg
            width="58"
            height="60"
            viewBox="0 0 67 74"
            fill="none"
            className="text-[#131311] dark:text-[#C6FD50] mt-1 -rotate-[15deg] translate-x-2"
          >
            <path
              d="M0 55.1964C7.38356 44.372 30.5771 21.3569 64.2827 15.892M50.735 11.0675C53.7053 13.6222 61.0045 15.3483 64.2827 15.892C63.5109 16.179 61.5176 18.0155 59.7191 23.0658"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* ─── Mobile & Tablet Showcase Reel (< 1024px) ─── */}
        <div className="lg:hidden mt-10 w-full max-w-xl mx-auto px-2">
          {/* Mobile Handwritten Note */}
          <div className="flex flex-col items-center justify-center mb-6 select-none">
            <p className="font-handwriting text-2xl text-[#131311] dark:text-[#C6FD50] -rotate-3 text-center">
              Who wouldn’t want a site like this?!
            </p>
            <svg width="45" height="50" viewBox="0 0 67 74" fill="none" className="text-[#131311] dark:text-[#C6FD50] rotate-12 -mt-1">
              <path d="M0 55.1964C7.38356 44.372 30.5771 21.3569 64.2827 15.892M50.735 11.0675C53.7053 13.6222 61.0045 15.3483 64.2827 15.892C63.5109 16.179 61.5176 18.0155 59.7191 23.0658" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Horizontal scroll cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory">
            {/* Mobile Card 1: VelVault */}
            <div onClick={() => scrollTo('projects')} className="shrink-0 w-[210px] snap-center cursor-pointer">
              <div className="card-projectone p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] rounded-[16px] shadow-[4px_4px_0px_0px_#131311]">
                <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
                  <VelVaultMockup />
                </div>
                <div className="mt-2 px-0.5 flex items-center justify-between">
                  <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">VelVault</p>
                  <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">Marketplace</span>
                </div>
              </div>
            </div>
            {/* Mobile Card 2: Indiagram */}
            <div onClick={() => scrollTo('projects')} className="shrink-0 w-[210px] snap-center cursor-pointer">
              <div className="card-projectone p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] rounded-[16px] shadow-[4px_4px_0px_0px_#131311]">
                <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
                  <IndiagramMockup />
                </div>
                <div className="mt-2 px-0.5 flex items-center justify-between">
                  <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">Indiagram</p>
                  <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">Social App</span>
                </div>
              </div>
            </div>
            {/* Mobile Card 3: EduFlow */}
            <div onClick={() => scrollTo('projects')} className="shrink-0 w-[210px] snap-center cursor-pointer">
              <div className="card-projectone p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] rounded-[16px] shadow-[4px_4px_0px_0px_#131311]">
                <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
                  <EduFlowMockup />
                </div>
                <div className="mt-2 px-0.5 flex items-center justify-between">
                  <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">EduFlow</p>
                  <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">EdTech</span>
                </div>
              </div>
            </div>
            {/* Mobile Card 4: Findiff CLI */}
            <div onClick={() => scrollTo('projects')} className="shrink-0 w-[210px] snap-center cursor-pointer">
              <div className="card-projectone p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] rounded-[16px] shadow-[4px_4px_0px_0px_#131311]">
                <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
                  <FindiffMockup />
                </div>
                <div className="mt-2 px-0.5 flex items-center justify-between">
                  <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">Findiff CLI</p>
                  <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">npm Tool</span>
                </div>
              </div>
            </div>
            {/* Mobile Card 5: WhereIsMyMenu */}
            <div onClick={() => scrollTo('projects')} className="shrink-0 w-[210px] snap-center cursor-pointer">
              <div className="card-projectone p-3 bg-white dark:bg-[#161714] border-[2px] border-[#131311] rounded-[16px] shadow-[4px_4px_0px_0px_#131311]">
                <div className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#EAE8DD] dark:bg-[#20201D] border border-[#131311]/15">
                  <WhereIsMyMenuMockup />
                </div>
                <div className="mt-2 px-0.5 flex items-center justify-between">
                  <p className="text-[13px] font-[800] text-[#131311] dark:text-[#FAFAFA]">WhereIsMyMenu</p>
                  <span className="text-[9px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">QR Discovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. PROBLEM / REALITY CHECK ("Sound Familiar?")
          ══════════════════════════════════════════════════════════════ */}
      <section id="problem" className="mt-8 sm:mt-12 lg:mt-16 py-16 md:py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-white border border-[#131311]/20 dark:border-white/20 mb-3">
              Sound Familiar?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight leading-tight text-[#131311] dark:text-[#FAFAFA]">
              Web Development Shouldn’t Feel Like an Endless Struggle.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed">
              You’ve got a product to launch. You shouldn’t have to spend your weekends debugging SQL models, fixing CSS alignment, wrestling with broken webhooks, or chasing down freelancers who disappeared.
            </p>
          </div>
        </FadeUp>

        {/* The Checklist Ticker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Fragile Freelancer Code", desc: "The last developer built on fragile hacks that break under real user load." },
            { title: "Database Architecture", desc: "Un-indexed queries, missing foreign keys, and zero relational scaling." },
            { title: "Payment Webhook Failures", desc: "Stuck transactions and broken Razorpay/Stripe webhooks losing revenue." },
            { title: "Broken on Mobile", desc: "Looked acceptable on desktop until opened on an iPhone or Android." },
            { title: "Agency Telephone Game", desc: "Paying for 4 account managers while actual junior coders stumble along." },
            { title: "Slow Clunky APIs", desc: "Endpoints that take 3+ seconds to respond and stall the user interface." },
            { title: "Zero Documentation", desc: "No Git branch strategy, no environment variable guides, and complete lock-in." },
            { title: "Endless Project Delays", desc: "A 'two-week sprint' that stretches into 6 months of lost opportunity." },
          ].map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.04}>
              <div className="card-projectone p-4 h-full flex flex-col justify-between bg-white dark:bg-[#161714]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-[4px] bg-[#131311] text-[#C6FD50] shrink-0 font-bold text-xs">
                      ✕
                    </span>
                    <h3 className="text-[13px] font-bold leading-snug text-[#131311] dark:text-[#FAFAFA]">{item.title}</h3>
                  </div>
                  <p className="text-[11.5px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Punchline Pill */}
        <FadeUp delay={0.2} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-[1.5px] border-[#131311] dark:border-white/20 bg-[#F3F2EA] dark:bg-[#1C1D1A] font-bold text-[13px] tracking-tight shadow-[2px_2px_0px_0px_#131311] dark:shadow-none text-[#131311] dark:text-[#FAFAFA]">
            <span className="text-[#C6FD50] bg-[#131311] px-2 py-0.5 rounded text-[11px] font-extrabold uppercase">
              Solution
            </span>
            <span>One decision and you're done.</span>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. SOLUTION SECTION ("We Make Launching Insanely Simple")
          ══════════════════════════════════════════════════════════════ */}
      <section id="solution" className="py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-white border border-[#131311]/20 dark:border-white/20 mb-3">
              The Antidote
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-[#131311] dark:text-[#FAFAFA]">
              We Make Launching Custom Web Apps Insanely Simple.
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#2E2E2B] dark:text-[#B9B9B7]">
              One senior developer. No junior handoffs. No excuses.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Code2,
              step: "ONE",
              title: "Senior Full Stack Dev",
              desc: "Deep Python/Django backend architecture paired with modern React/Next.js UI. No fragmented handoffs.",
            },
            {
              icon: Zap,
              step: "ONE",
              title: "Strategic Business Engine",
              desc: "Not a static brochure. A transactional, authenticated web application built to convert users and scale.",
            },
            {
              icon: ShieldCheck,
              step: "ONE",
              title: "Direct Point of Contact",
              desc: "Talk directly to the person writing every line of code. Daily async updates and clear Git milestone logs.",
            },
            {
              icon: Boxes,
              step: "ONE",
              title: "Production Ready Codebase",
              desc: "100% owned by you. Clean Git repo, relational DB migrations, environment setups, and zero vendor lock-in.",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={idx * 0.06}>
                <div className="card-projectone p-6 h-full flex flex-col justify-between bg-white dark:bg-[#161714]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-[900] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C6FD50] text-[#131311] border border-[#131311]">
                        {item.step}
                      </span>
                      <Icon size={20} className="text-[#131311] dark:text-[#C6FD50]" />
                    </div>
                    <h3 className="text-[18px] font-bold mb-2 text-[#131311] dark:text-[#FAFAFA]">{item.title}</h3>
                    <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. WHY PARTNER WITH ME & SKILLS SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section id="why-me" className="py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#41413E] dark:text-[#B9B9B7] mb-2 block">
              Why Partner With Me?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-[#131311] dark:text-[#FAFAFA]">
              Engineering Precision. Full-Stack Mastery.
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#2E2E2B] dark:text-[#B9B9B7] max-w-2xl mx-auto">
              You don’t just get code—you get scalable architecture, sub-second APIs, and pixel-perfect UI engineered to take your product from idea to production.
            </p>
            <p className="font-handwriting text-xl text-[#131311] dark:text-[#C6FD50] mt-3 -rotate-2 select-none">
              "Built to perform under real production traffic!"
            </p>
          </div>
        </FadeUp>

        {/* ─── The 4 "Why Me" Core Advantages ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            {
              step: "01",
              title: "End-to-End Ownership",
              desc: "From database normalization and relational modeling to API endpoints, payment webhooks, and responsive frontend interaction—handled cleanly without lost context.",
            },
            {
              step: "02",
              title: "Senior Code Standards",
              desc: "Zero fragile hacks or junior bloat. Indexed PostgreSQL queries, strict JWT auth, atomic transaction safety, and clean Git conventional commits.",
            },
            {
              step: "03",
              title: "Direct Async Velocity",
              desc: "Collaborate directly with the engineer writing every line of code. Fast turnaround, transparent daily progress logs, and clear milestone staging previews.",
            },
            {
              step: "04",
              title: "100% Code Ownership",
              desc: "You retain full ownership of the private Git repository, database migration scripts, environment variables, and deployment pipelines. Zero lock-in.",
            },
          ].map((item, i) => (
            <FadeUp key={item.step} delay={i * 0.05}>
              <div className="card-projectone p-6 h-full flex flex-col justify-between bg-white dark:bg-[#161714]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[26px] font-[900] text-[#131311] dark:text-[#C6FD50] font-mono">
                      {item.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6FD50] border border-[#131311]" />
                  </div>
                  <h3 className="text-[17px] font-bold mb-2 text-[#131311] dark:text-[#FAFAFA]">{item.title}</h3>
                  <p className="text-[12.5px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* ─── Categorized Skills Bento (4 Deep Technical Domains) ─── */}
        <FadeUp delay={0.1}>
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#41413E] dark:text-[#B9B9B7]">
              Technical Skills & Superpowers
            </span>
            <span className="text-[11px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
              Production Battle-Tested
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Domain 1: Backend Architecture */}
            <div className="card-projectone p-7 bg-white dark:bg-[#161714] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#131311]/15 dark:border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-[10px] border border-[#131311] dark:border-white/20 bg-[#F3F2EA] dark:bg-[#20201D] text-[#131311] dark:text-[#C6FD50]">
                      <Server size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[18px] text-[#131311] dark:text-[#FAFAFA]">Backend Architecture & APIs</h3>
                      <p className="text-[11px] text-[#41413E] dark:text-[#B9B9B7]">Python, Django, DRF, Node.js & REST</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#C6FD50] text-[#131311] border border-[#131311]">
                    Core
                  </span>
                </div>

                <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed mb-5">
                  Architecting high-throughput server systems, modular monolithic codebases, and sub-second RESTful endpoints. Specializing in Python & Django with complex relational models and automated business logic.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    "Django REST Framework (DRF) with custom serialization and viewsets",
                    "JWT token authentication, session management, and granular permission classes",
                    "Razorpay & Stripe payment gateway integration with signature verification webhooks",
                    "Background task processing with Celery/Redis for emails and long-running jobs",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] text-[#1A1A18] dark:text-[#E0E0DE]">
                      <span className="flex items-center justify-center w-4 h-4 rounded bg-[#131311] text-[#C6FD50] shrink-0 font-bold text-[9px] mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-[#131311]/15 dark:border-white/15">
                {["Python", "Django", "Django REST", "Node.js", "Express", "REST APIs", "Celery", "JWT Auth"].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-[#131311]/20 dark:border-white/20 bg-[#F3F2EA] dark:bg-white/5 text-[#131311] dark:text-[#FAFAFA]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 2: Modern Frontend & Reactive UI */}
            <div className="card-projectone p-7 bg-white dark:bg-[#161714] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#131311]/15 dark:border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-[10px] border border-[#131311] dark:border-white/20 bg-[#F3F2EA] dark:bg-[#20201D] text-[#131311] dark:text-[#C6FD50]">
                      <Code2 size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[18px] text-[#131311] dark:text-[#FAFAFA]">Modern Frontend & Reactive UI</h3>
                      <p className="text-[11px] text-[#41413E] dark:text-[#B9B9B7]">React 19, Next.js, Tailwind & Motion</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#131311] text-[#C6FD50] border border-[#131311]">
                    Pixel-Perfect
                  </span>
                </div>

                <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed mb-5">
                  Building fluid, responsive user interfaces that delight users and drive conversion. Combining micro-animations, accessible state management, and modern component architecture.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    "Next.js and React 19 component trees with client/server state separation",
                    "Custom Tailwind CSS design systems with consistent typography and tokens",
                    "Framer Motion layout transitions, gestural interactions, and spring physics",
                    "Mobile-first responsive architecture tested across iOS Safari and Chrome",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] text-[#1A1A18] dark:text-[#E0E0DE]">
                      <span className="flex items-center justify-center w-4 h-4 rounded bg-[#131311] text-[#C6FD50] shrink-0 font-bold text-[9px] mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-[#131311]/15 dark:border-white/15">
                {["React 19", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "UI Systems"].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-[#131311]/20 dark:border-white/20 bg-[#F3F2EA] dark:bg-white/5 text-[#131311] dark:text-[#FAFAFA]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 3: Databases, Cloud & Security */}
            <div className="card-projectone p-7 bg-white dark:bg-[#161714] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#131311]/15 dark:border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-[10px] border border-[#131311] dark:border-white/20 bg-[#F3F2EA] dark:bg-[#20201D] text-[#131311] dark:text-[#C6FD50]">
                      <Database size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[18px] text-[#131311] dark:text-[#FAFAFA]">Databases, Cloud & Security</h3>
                      <p className="text-[11px] text-[#4F4F4C] dark:text-[#B9B9B7]">PostgreSQL, MongoDB, Supabase & AWS</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-white border border-[#131311]">
                    Rock-Solid
                  </span>
                </div>

                <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed mb-5">
                  Engineering rock-solid data layers where user data, entitlements, and order lifecycles are safe. Designing relational schemas with indexing, foreign key constraints, and multi-tenant security.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    "PostgreSQL relational design with index tuning and ACID transaction safety",
                    "Supabase Row-Level Security (RLS) policies guaranteeing data privacy",
                    "MongoDB document modeling for flexible catalogs and logging systems",
                    "Automated CI/CD deployment workflows on AWS, Vercel, and Docker",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] text-[#1A1A18] dark:text-[#E0E0DE]">
                      <span className="flex items-center justify-center w-4 h-4 rounded bg-[#131311] text-[#C6FD50] shrink-0 font-bold text-[9px] mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-[#131311]/15 dark:border-white/15">
                {["PostgreSQL", "Supabase RLS", "MongoDB", "Redis", "AWS", "Vercel", "Docker", "Database Migrations"].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-[#131311]/20 dark:border-white/20 bg-[#F3F2EA] dark:bg-white/5 text-[#131311] dark:text-[#FAFAFA]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 4: AI Systems & Developer Tooling */}
            <div className="card-projectone p-7 bg-white dark:bg-[#161714] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#131311]/15 dark:border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-[10px] border border-[#131311] dark:border-white/20 bg-[#F3F2EA] dark:bg-[#20201D] text-[#131311] dark:text-[#C6FD50]">
                      <TerminalSquare size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[18px] text-[#131311] dark:text-[#FAFAFA]">AI Systems & Developer Tooling</h3>
                      <p className="text-[11px] text-[#4F4F4C] dark:text-[#B9B9B7]">OpenAI, Gemini, Whisper & npm CLI</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-[#5DB7B7] text-[#131311] border border-[#131311]">
                    Next-Gen
                  </span>
                </div>

                <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed mb-5">
                  Integrating intelligent machine learning capabilities into production web products and building specialized developer productivity tools published to npm.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    "OpenAI & Google Gemini API integrations with structured JSON streaming",
                    "Real-time audio-to-text processing pipelines with OpenAI Whisper",
                    "Author of published npm packages with interactive CLI prompts (findiff)",
                    "Automated git diff analysis and conventional commit generation engines",
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[12px] text-[#1A1A18] dark:text-[#E0E0DE]">
                      <span className="flex items-center justify-center w-4 h-4 rounded bg-[#131311] text-[#C6FD50] shrink-0 font-bold text-[9px] mt-0.5">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-[#131311]/15 dark:border-white/15">
                {["OpenAI", "Google Gemini", "Whisper STT", "npm Package CLI", "Git Tooling", "Prompt Architecture", "Linux"].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase px-2.5 py-1 rounded border border-[#131311]/20 dark:border-white/20 bg-[#F3F2EA] dark:bg-white/5 text-[#131311] dark:text-[#FAFAFA]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ─── Capability Benchmarks Strip ─── */}
        <FadeUp delay={0.15} className="mt-8">
          <div className="p-4 sm:p-5 rounded-[14px] border-[1.5px] border-[#131311] dark:border-white/20 bg-white dark:bg-[#1C1D1A] flex flex-wrap items-center justify-around gap-4 shadow-[3px_3px_0px_0px_#131311] dark:shadow-none text-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#131311] dark:bg-[#C6FD50] border border-[#131311]" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#131311] dark:text-[#FAFAFA]">Sub-Second API Responses</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-[#131311]/20 dark:bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#131311] dark:bg-[#C6FD50] border border-[#131311]" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#131311] dark:text-[#FAFAFA]">Row-Level Database Security</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-[#131311]/20 dark:bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#131311] dark:bg-[#C6FD50] border border-[#131311]" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#131311] dark:text-[#FAFAFA]">Razorpay Entitlement Systems</span>
            </div>
            <div className="hidden lg:block h-4 w-px bg-[#131311]/20 dark:bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#131311] dark:bg-[#C6FD50] border border-[#131311]" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#131311] dark:text-[#FAFAFA]">Published NPM Author</span>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. PROCESS / TIMELINE SECTION ("The 4-Step Production Sprint")
          ══════════════════════════════════════════════════════════════ */}
      <section id="process" className="py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-white border border-[#131311]/20 dark:border-white/20 mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-[#131311] dark:text-[#FAFAFA]">
              The 4-Step Production Sprint.
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#2E2E2B] dark:text-[#B9B9B7]">
              From kickoff call to live production deployment in 14 focused days.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discuss & Scope",
              desc: "Share your business goals, user flows, and tech requirements. We define schemas and milestones with zero fluff.",
              tag: "Days 1-3"
            },
            {
              step: "02",
              title: "Full-Stack Build",
              desc: "Engineering high-performance Django REST APIs, relational PostgreSQL tables, and clean interactive React UI.",
              tag: "Days 4-10"
            },
            {
              step: "03",
              title: "Testing & Security QA",
              desc: "Cross-device stress testing, payment webhook verification, token auth hardening, and API latency audit.",
              tag: "Days 11-13"
            },
            {
              step: "04",
              title: "Launch & Handover",
              desc: "Production deployment with automated CI/CD, complete private Git handoff, and full architectural documentation.",
              tag: "Day 14"
            },
          ].map((item, idx) => (
            <FadeUp key={item.step} delay={idx * 0.06}>
              <div className="card-projectone p-6 h-full flex flex-col justify-between bg-white dark:bg-[#161714]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[28px] font-[900] text-[#131311] dark:text-[#FAFAFA] font-mono">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#C6FD50] text-[#131311] border border-[#131311]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-bold mb-2 text-[#131311] dark:text-[#FAFAFA]">{item.title}</h3>
                  <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. WORK / SELECTED PROJECTS SECTION ("See Work")
          ══════════════════════════════════════════════════════════════ */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#41413E] dark:text-[#B9B9B7] mb-2">
                Proven In Production
              </p>
              <h2 className="text-4xl sm:text-5xl font-[900] tracking-tight text-[#131311] dark:text-[#FAFAFA]">
                See Work<span className="text-[#96D411]">.</span>
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-[#2E2E2B] dark:text-[#B9B9B7] max-w-lg">
                Real web applications engineered with clean code, scalable architecture, and delightful user experiences.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-[12px] border-[1.5px] border-[#131311] dark:border-white/20 bg-white dark:bg-[#1C1D1A]">
              {['All', 'Full Stack', 'AI & Tools', 'Social & Mobile'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1 rounded-[8px] text-[12px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#131311] text-[#C6FD50]'
                      : 'text-[#41413E] hover:text-[#131311] hover:bg-[#F3F2EA] dark:text-[#B9B9B7] dark:hover:text-white dark:hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.05}>
              <div className="card-projectone p-6 h-full flex flex-col justify-between group bg-white dark:bg-[#161714]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#131311] dark:border-white/20 bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-[#FAFAFA]">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl font-[800] mb-2.5 text-[#131311] dark:text-[#FAFAFA] group-hover:underline dark:group-hover:text-[#C6FD50] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[13px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase px-2 py-0.5 rounded border border-[#131311]/20 dark:border-white/20 bg-[#F3F2EA] dark:bg-white/5 text-[#131311] dark:text-[#FAFAFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#131311]/20 dark:border-white/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-[#131311] dark:text-white hover:underline"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-projectone-lime !py-1.5 !px-3.5 !text-[11px]"
                    >
                      <span>Live</span>
                      <ExternalLink size={12} strokeWidth={2.5} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-[#41413E] dark:text-[#B9B9B7]">Production App</span>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. ABOUT / WHY US SECTION ("Why Trust Me with Your Code?")
          ══════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#41413E] dark:text-[#B9B9B7] mb-2 block">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] tracking-tight text-[#131311] dark:text-[#FAFAFA]">
              Why Trust Me with Your Code & Architecture?
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#2E2E2B] dark:text-[#B9B9B7]">
              Because great products deserve senior engineering, robust foundations, and zero fluff.
            </p>
          </div>
        </FadeUp>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {[
            { num: "7+", label: "Production Apps Built" },
            { num: "100%", label: "Clean Code & Conventions" },
            { num: "10k+", label: "Hours of Engineering" },
            { num: "0", label: "AI Templates or Fluff" },
          ].map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.05}>
              <div className="card-projectone p-6 text-center bg-white dark:bg-[#161714]">
                <p className="text-4xl sm:text-5xl font-[900] tracking-tight mb-2 text-[#131311] dark:text-[#C6FD50] font-mono">
                  {stat.num}
                </p>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#41413E] dark:text-[#B9B9B7]">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Narrative & Portrait Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <FadeUp delay={0.1} className="lg:col-span-4">
            <div className="card-projectone overflow-hidden p-3 bg-white dark:bg-[#161714]">
              <img
                src={ImageHero}
                alt="Muhammed Shan"
                className="w-full h-80 object-cover rounded-[10px]"
              />
              <div className="pt-3 px-2 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#131311] dark:text-[#FAFAFA]">Muhammed Shan</h4>
                  <p className="text-[11px] text-[#41413E] dark:text-[#B9B9B7]">Full Stack Developer</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6FD50] border border-[#131311]" />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-8">
            <div className="card-projectone p-8 bg-white dark:bg-[#161714]">
              <h3 className="text-2xl font-[900] mb-4 text-[#131311] dark:text-[#FAFAFA]">
                "When your software foundation is rock solid, everything shifts."
              </h3>
              <p className="text-[15px] leading-relaxed text-[#2E2E2B] dark:text-[#B9B9B7] mb-4">
                I am a Full Stack Developer & Creative Builder dedicated to engineering web applications that feel fast, intelligent, and visually striking. I combine clean Python & React engineering with thoughtful design to build software that solves real business problems.
              </p>
              <p className="text-[15px] leading-relaxed text-[#2E2E2B] dark:text-[#B9B9B7] mb-6">
                From scalable Django and Node.js backend systems with complex database relationships, to modern interactive interfaces with delightful micro-interactions, I treat every project as a flagship.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-dashed border-[#131311]/20 dark:border-white/20">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F4F4C] dark:text-[#B9B9B7]">Location</span>
                  <p className="text-sm font-bold mt-0.5 text-[#131311] dark:text-[#FAFAFA]">Kerala, India (Remote Worldwide)</p>
                </div>
                <div className="h-8 w-px bg-[#131311]/15 dark:bg-white/15" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F4F4C] dark:text-[#B9B9B7]">Focus</span>
                  <p className="text-sm font-bold mt-0.5 text-[#131311] dark:text-[#FAFAFA]">Python · Django · React · APIs · PostgreSQL</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Technology Marquee */}
        <FadeUp delay={0.2}>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#41413E] dark:text-[#B9B9B7]">
              Tools & Frameworks
            </span>
            <span className="text-[11px] font-mono font-bold text-[#41413E] dark:text-[#B9B9B7]">
              18+ Core Technologies
            </span>
          </div>
          <div className="card-projectone p-6 overflow-hidden bg-white dark:bg-[#161714]">
            <div className="space-y-4">
              <TechMarqueeRow items={techRows[0]} offset={0} isDarkMode={isDarkMode} />
              <TechMarqueeRow items={techRows[1]} reverse offset={6} isDarkMode={isDarkMode} />
              <TechMarqueeRow items={techRows[2]} offset={12} isDarkMode={isDarkMode} />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. FAQS SECTION (ProjectOne FAQs Style)
          ══════════════════════════════════════════════════════════════ */}
      <section id="faqs" className="py-20 px-6 max-w-4xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#41413E] dark:text-[#B9B9B7] mb-2">
              Common Questions
            </p>
            <h2 className="text-4xl sm:text-5xl font-[900] tracking-tight text-[#131311] dark:text-[#FAFAFA]">
              FAQs<span className="text-[#96D411]">.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <FadeUp key={faq.q} delay={idx * 0.05}>
                <div className="card-projectone overflow-hidden transition-all bg-white dark:bg-[#161714]">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[16px] sm:text-[17px] text-[#131311] dark:text-[#FAFAFA] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`p-1.5 rounded-[6px] border border-[#131311] dark:border-white/20 transition-transform duration-200 ${isOpen ? 'bg-[#C6FD50] text-[#131311] rotate-180' : 'bg-[#F3F2EA] dark:bg-[#20201D] text-[#131311] dark:text-white'}`}>
                      <ChevronDown size={14} strokeWidth={3} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed border-t border-dashed border-[#131311]/15 dark:border-white/15">
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          9. FINAL CTA & CONTACT SECTION ("Your App Won't Build Itself")
          ══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t-[1.5px] border-[#131311] dark:border-white/15">
        <FadeUp>
          <div className="rounded-3xl border-[2px] border-[#131311] dark:border-[#C6FD50] bg-white dark:bg-[#161714] text-[#131311] dark:text-[#FAFAFA] p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_#131311] dark:shadow-[8px_8px_0px_0px_#C6FD50] text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-[#C6FD50] border border-[#131311]/20 dark:border-white/20 mb-4">
                Let's Build Something
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tight leading-tight mb-5 text-[#131311] dark:text-[#FAFAFA]">
                Your Web App Won’t Build Itself. Good Thing I Will.
              </h2>

              <p className="text-[15px] sm:text-[17px] text-[#2E2E2B] dark:text-[#B9B9B7] leading-relaxed max-w-xl mx-auto mb-10">
                Whether you have an upcoming project, are looking for a full stack engineer on your team, or want to discuss architecture ideas — my inbox is always open.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <a
                  href="mailto:muhammedshan930o@gmail.com"
                  className="btn-projectone-lime !text-[14px] !py-3.5 !px-7"
                >
                  <Mail size={16} strokeWidth={2.5} />
                  <span>Send Me an Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider px-5 py-3.5 rounded-[10px] border-[1.5px] border-[#131311] dark:border-white/30 bg-[#F3F2EA] dark:bg-white/10 text-[#131311] dark:text-white hover:bg-[#EAE8DD] dark:hover:bg-white/20 shadow-[2.5px_2px_0px_0px_#131311] dark:shadow-none transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={15} className="text-[#16a34a] dark:text-[#C6FD50]" strokeWidth={3} />
                      <span className="text-[#16a34a] dark:text-[#C6FD50]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links & Resume */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#131311]/15 dark:border-white/15 text-[13px] font-bold uppercase tracking-wider">
                <a
                  href="https://www.linkedin.com/in/muhammedshan-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#131311] dark:text-white hover:text-[#96D411] dark:hover:text-[#C6FD50] flex items-center gap-1.5 transition-colors"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://github.com/muhammedshann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#131311] dark:text-white hover:text-[#96D411] dark:hover:text-[#C6FD50] flex items-center gap-1.5 transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={13} />
                </a>

                <button
                  onClick={() => setShowResume(!showResume)}
                  className="text-[#131311] dark:text-white hover:text-[#96D411] dark:hover:text-[#C6FD50] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText size={15} />
                  <span>Curriculum Vitae</span>
                  <Eye size={13} />
                </button>

                <a
                  href={ResumePDF}
                  download="Muhammed_Shan_Resume.pdf"
                  className="text-[#131311] dark:text-white hover:text-[#96D411] dark:hover:text-[#C6FD50] flex items-center gap-1.5 transition-colors"
                >
                  <Download size={15} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Resume Modal */}
        {showResume && (
          <FadeUp>
            <div className="mt-8 card-projectone p-6 sm:p-8 relative bg-white dark:bg-[#131311]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#131311]/15 dark:border-white/15">
                <div className="flex items-center gap-2.5">
                  <FileText size={20} className="text-[#131311] dark:text-[#C6FD50]" />
                  <h3 className="font-bold text-lg text-[#131311] dark:text-[#FAFAFA]">Muhammed Shan — Resume</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={ResumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-bold uppercase text-[#131311] dark:text-[#C6FD50] hover:underline flex items-center gap-1"
                  >
                    Open PDF <ExternalLink size={13} />
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="p-1.5 rounded-md border border-[#131311] dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 text-[#131311] dark:text-white cursor-pointer"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <div className="w-full h-[750px] rounded-[10px] overflow-hidden border border-[#131311]/20 dark:border-white/20">
                <iframe src={ResumePDF} title="Resume Preview" className="w-full h-full border-none" />
              </div>
            </div>
          </FadeUp>
        )}
      </section>

      <Footer />
    </div>
  );
}
