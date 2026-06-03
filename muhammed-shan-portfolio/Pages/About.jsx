import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Server,
  TerminalSquare,
  Workflow,
} from 'lucide-react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Image from '../src/assets/MuhammedShanAbout.jpeg';


/* ─── Tech Marquee Data ──────────────────────────────────────── */
const techRows = [
  [
    { name: 'React', icon: Code2, color: '#61dafb', glow: 'shadow-cyan-500/20' },
    { name: 'JavaScript', icon: Braces, color: '#f7df1e', glow: 'shadow-yellow-400/20' },
    { name: 'Django', icon: Server, color: '#44b78b', glow: 'shadow-emerald-500/20' },
    { name: 'Python', icon: TerminalSquare, color: '#3776ab', glow: 'shadow-blue-500/20' },
    { name: 'REST APIs', icon: Workflow, color: '#ff6b6b', glow: 'shadow-rose-500/20' },
    { name: 'PostgreSQL', icon: Database, color: '#4169e1', glow: 'shadow-indigo-500/20' },
  ],
  [
    { name: 'MongoDB', icon: Database, color: '#47a248', glow: 'shadow-green-500/20' },
    { name: 'AWS', icon: Cloud, color: '#ff9900', glow: 'shadow-orange-500/20' },
    { name: 'System Design', icon: Boxes, color: '#a78bfa', glow: 'shadow-violet-500/20' },
    { name: 'Git', icon: GitBranch, color: '#f05032', glow: 'shadow-red-500/20' },
    { name: 'Frontend', icon: Layers3, color: '#38bdf8', glow: 'shadow-sky-500/20' },
    { name: 'Backend', icon: Cpu, color: '#c084fc', glow: 'shadow-purple-500/20' },
  ],
  [
    { name: 'Tailwind CSS', icon: Layers3, color: '#38bdf8', glow: 'shadow-cyan-500/20' },
    { name: 'Framer Motion', icon: Workflow, color: '#f472b6', glow: 'shadow-pink-500/20' },
    { name: 'Django REST', icon: Globe2, color: '#10b981', glow: 'shadow-emerald-500/20' },
    { name: 'Architecture', icon: Boxes, color: '#818cf8', glow: 'shadow-indigo-500/20' },
    { name: 'Deployment', icon: Cloud, color: '#60a5fa', glow: 'shadow-blue-500/20' },
    { name: 'Clean Code', icon: Code2, color: '#f8fafc', glow: 'shadow-white/10' },
  ],
];

const MotionDiv = motion.div;

/* ─── Tech Card ──────────────────────────────────────────────── */
const TechCard = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <div
      className={`group relative flex h-14 w-36 shrink-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.055] px-3 shadow-xl ${tech.glow} backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09] sm:h-16 sm:w-44 sm:gap-3 sm:px-4`}
    >
      <div className="absolute inset-px rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />
      <div
        className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/40 sm:h-9 sm:w-9"
        style={{ boxShadow: `0 0 20px ${tech.color}33` }}
      >
        <Icon size={17} strokeWidth={1.8} style={{ color: tech.color }} />
      </div>
      <div className="relative min-w-0">
        <p className="truncate text-[12px] font-semibold text-white sm:text-[13px]">{tech.name}</p>
        <p className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.18em] text-white/35 sm:text-[9px] sm:tracking-[0.2em]">
          Stack
        </p>
      </div>
    </div>
  );
};

/* ─── Tech Marquee Row ───────────────────────────────────────── */
const TechMarqueeRow = ({ items, reverse = false, offset = 0, isActive = true }) => {
  const marqueeItems = [...items, ...items];
  const startX = reverse ? '-50%' : '0%';
  const endX = reverse ? '0%' : '-50%';
  return (
    <MotionDiv
      className="flex w-max gap-4"
      initial={{ x: startX }}
      animate={{ x: isActive ? endX : startX }}
      transition={{ duration: 28 + offset, repeat: Infinity, ease: 'linear' }}
    >
      {marqueeItems.map((tech, index) => (
        <TechCard key={`${tech.name}-${index}`} tech={tech} />
      ))}
    </MotionDiv>
  );
};

/* ─── Technology Showcase ────────────────────────────────────── */
const TechnologyShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '160px 0px 160px 0px' });
  const shouldReduceMotion = useReducedMotion();
  const isActive = isInView && !shouldReduceMotion;

  return (
    <section ref={sectionRef} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black px-3 py-6 shadow-2xl shadow-blue-950/30 sm:rounded-3xl sm:px-6 sm:py-8 md:py-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.16]" />
      <div className="absolute -left-28 top-4 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative -mx-4 space-y-2.5 overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:-mx-8 sm:space-y-3 sm:py-2">
        <div className="translate-x-4 sm:translate-x-8">
          <TechMarqueeRow items={techRows[0]} offset={0} isActive={isActive} />
        </div>
        <div className="-translate-x-12 sm:-translate-x-20">
          <TechMarqueeRow items={techRows[1]} reverse offset={6} isActive={isActive} />
        </div>
        <div className="translate-x-1 sm:translate-x-2">
          <TechMarqueeRow items={techRows[2]} offset={10} isActive={isActive} />
        </div>
      </div>
    </section>
  );
};

/* ─── Animated wrapper ───────────────────────────────────────── */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

/* ─── Mindset Data ───────────────────────────────────────────── */
const mindsetItems = [
  {
    num: '01',
    title: 'Plan for Scale & Future',
    body: 'I design the architecture with growth in mind, ensuring the solution can evolve as your business expands.',
  },
  {
    num: '02',
    title: 'Execute Efficiently',
    body: 'I turn the plan into clean, high‑quality code, delivering functional features on schedule.',
  },
  {
    num: '03',
    title: 'Gather Real Feedback',
    body: 'I release early to real users, listening to their experiences to refine and improve the product.',
  },
  {
    num: '04',
    title: 'Deliver Excellence',
    body: 'Combining research, testing, and continuous iteration, I ensure the final product meets the highest standards and delights users.',
  },
];

/* ─── About Page ─────────────────────────────────────────────── */
const AboutPage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden text-[#a1a1a1] selection:bg-white selection:text-black font-sans antialiased"
    >
      <Header />

      <main className="mx-auto mt-10 w-full max-w-5xl flex-grow px-6 pb-6 md:mt-14">

        {/* ───────── Hero Row ───────── */}
        <FadeUp>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
            {/* Image — compact circle */}
            <div className="group relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] shadow-lg shadow-blue-500/10 sm:h-32 sm:w-32">
              <img
                src={Image}
                alt="Muhammed Shan"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>

            {/* Heading block */}
            <div>
              <h1 className="text-[28px] font-bold leading-tight text-white md:text-[36px]">
                About me<span className="text-blue-500">.</span>
              </h1>
              <p className="mt-1 text-[13px] font-medium text-white/30">
                Full Stack Developer · Creative Builder
              </p>
              {/* Status pill */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                <span className="text-[11px] font-medium tracking-wide text-white/40">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* ───────── Thin divider ───────── */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-transparent md:my-8" />

        {/* ───────── Intro Text ───────── */}
        <FadeUp>
          <section className="max-w-2xl">
            <p className="text-[17px] font-light leading-[1.7] text-white/90 md:text-[19px]">
              I am a{' '}
              <span className="font-medium text-white border-b border-blue-500/40">
                Full Stack Developer & Creative Builder
              </span>{' '}
              focused on crafting modern digital experiences that feel fast,
              intelligent, and visually impactful.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/40 md:text-[15px]">
              I combine clean engineering with creative thinking to build
              products that are both functional and memorable. From responsive
              frontend interfaces to scalable backend systems, I focus on
              creating seamless digital experiences powered by modern
              technologies and thoughtful execution. My goal is not just to
              develop applications, but to create products people genuinely
              enjoy using.
            </p>
          </section>
        </FadeUp>

        {/* ───────── Quick Facts ───────── */}
        <FadeUp>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 md:mt-8">
            {[
              ['Based in', 'India'],
              ['Focus', 'Full Stack Development'],
              ['Stack', 'React · Django · Python'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">{label}</p>
                <p className="mt-0.5 text-[13px] font-medium text-white/55">{value}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* ───────── Mindset & Approach ───────── */}
        <div className="mt-10 md:mt-12">
          <FadeUp>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">
                How I Work
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/15 to-transparent" />
            </div>
          </FadeUp>

          {/* ── Compact numbered list ── */}
          <div className="space-y-px">
            {mindsetItems.map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.06}>
                <div className="group relative flex gap-5 rounded-xl px-4 py-5 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-6 sm:px-5 sm:py-6">
                  {/* Number */}
                  <span className="mt-0.5 shrink-0 text-[11px] font-bold tabular-nums tracking-wider text-white/15 transition-colors group-hover:text-blue-500/50">
                    {item.num}
                  </span>

                  {/* Vertical accent line */}
                  <div className="relative mt-0.5 w-px shrink-0 self-stretch bg-white/[0.05] transition-colors group-hover:bg-blue-500/20">
                    <span className="absolute left-0 top-0 h-3 w-px bg-blue-500/40 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-[14px] font-semibold text-white/80 transition-colors group-hover:text-white sm:text-[15px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/30 sm:text-[14px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ───────── Tech Showcase ───────── */}
        <div className="mt-10 md:mt-12">
          <FadeUp>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400">
                Technologies
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-blue-500/15 to-transparent" />
            </div>
          </FadeUp>
          <FadeUp>
            <TechnologyShowcase />
          </FadeUp>
        </div>

        <div className="h-8 md:h-12" />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
