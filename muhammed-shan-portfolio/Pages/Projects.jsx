import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/useTheme';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index, isDarkMode, isMobile = false }) => {
  return (
    <a
      href={project.liveUrl || project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden border rounded-2xl p-7 flex flex-col h-full transition-all duration-500 ${
        isMobile
          ? 'shadow-2xl hover:scale-[1.01]'
          : 'hover:-translate-y-1.5'
      } ${
        isDarkMode
          ? 'border-[#1a1a1a] bg-[#0a0a0a]'
          : 'border-neutral-200 bg-white shadow-sm'
      }`}
      style={{ '--accent': project.accent }}
    >
      {/* Animated top accent bar */}
      <span
        className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      {/* Hover glow blob */}
      <span
        className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: project.accent }}
      />

      {/* Accent border on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${project.accent}55` }}
      />

      {/* Ghosted index number watermark */}
      <span
        className="absolute -top-3 right-4 text-[72px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110"
        style={{ color: project.accent, opacity: isDarkMode ? 0.07 : 0.08 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Header: category + arrow */}
      <div className="relative flex items-start justify-between mb-5">
        <span
          className="text-[10px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 rounded-full border"
          style={{
            color: project.accent,
            borderColor: `${project.accent}40`,
            background: `${project.accent}12`,
          }}
        >
          {project.category}
        </span>
        <ArrowUpRight
          size={20}
          className="shrink-0 opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1"
          style={{ color: project.accent }}
        />
      </div>

      {/* Title */}
      <h3 className={`relative text-[20px] font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {project.title}
      </h3>

      <p className="relative text-[13.5px] leading-relaxed mb-6 flex-grow opacity-75">
        {project.description}
      </p>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-2 mb-7">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md transition-colors duration-300 ${isDarkMode
              ? 'bg-[#111] text-[#666] border border-[#1a1a1a]'
              : 'bg-neutral-100 text-neutral-500 border border-neutral-200'
              }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="relative flex items-center gap-3 mt-auto pt-4 border-t border-dashed border-current/10">
        {/* GitHub Button */}
        <span
          onClick={(e) => {
            e.preventDefault();
            window.open(project.github, '_blank', 'noopener,noreferrer');
          }}
          className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${isDarkMode
            ? 'hover:bg-white hover:text-black text-[#888]'
            : 'hover:bg-black hover:text-white text-neutral-400'}`}
          title="View Source Code"
        >
          <Github size={18} />
        </span>

        {/* Live Link Button (Only shows if liveUrl exists) */}
        {project.liveUrl && (
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 text-[12px] font-bold px-4 py-2 rounded-lg text-white transition-all duration-300 cursor-pointer"
            style={{ background: project.accent }}
          >
            Visit
            <ExternalLink size={14} />
          </span>
        )}

        {/* View label pushed right */}
        <span
          className="ml-auto text-[11px] font-semibold uppercase tracking-wider opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
          style={{ color: project.accent }}
        >
          {project.liveUrl ? 'Live' : 'Explore'}
        </span>
      </div>
    </a>
  );
};

const ProjectsPage = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "VelVault",
      category: "Digital Marketplace",
      accent: "#3b82f6",
      description: "A digital products marketplace where users browse across categories, purchase digital goods, and securely download and keep them in a personal library. Engineered per-request authorized file delivery with a Razorpay-powered checkout and entitlement system.",
      tags: ["Python", "Django", "DRF", "PostgreSQL", "React", "Razorpay"],
      github: "https://github.com/shanmuhammedd03-web/velvault",
      liveUrl: "https://velvault.vercel.app/"
    },
    {
      title: "Indiagram",
      category: "Social Platform",
      accent: "#ec4899",
      description: "A full-scale, Instagram-style social media platform with posts, reels, 24-hour stories, real-time direct messaging, and a personalised home feed. Built with row-level security on every table for a secure, multi-user experience.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase","Native", "expo"],
      github: "https://github.com/shanmuhammedd03-web/indiagram",
      liveUrl: "https://indiagram-six.vercel.app/"
    },
    {
      title: "EduFlow",
      category: "EdTech Platform",
      accent: "#a855f7",
      description: "A comprehensive educational productivity ecosystem. Engineered modular features including smart note-taking, integrated AI assistance, and real-time community engagement tools.",
      tags: ["Python", "Django", "PostgreSQL", "React", "Razorpay"],
      github: "https://github.com/muhammedshann/EduFlow.git",
      liveUrl: "https://fresheasy.online/"
    },
    {
      title: "Fresh Easy",
      category: "E-Commerce",
      accent: "#10b981",
      description: "Architected a full-scale E-commerce platform managing the complete order lifecycle—from secure Razorpay payment integration to dynamic inventory management.",
      tags: ["Python", "Django", "PostgreSQL", "Razorpay", "Tailwind"],
      github: "https://github.com/muhammedshann/fresheasy.git",
      liveUrl: ""
    },
    {
      title: "Echo Note",
      category: "AI Transcription",
      accent: "#06b6d4",
      description: "A specialized AI-driven transcription service. Implemented OpenAI Whisper for high-precision, real-time speech-to-text conversion with a focus on low-latency processing.",
      tags: ["Python", "Django", "React", "OpenAI", "PostgreSQL"],
      github: "https://github.com/muhammedshann/echo-note",
      liveUrl: ""
    },
    {
      title: "WhereIsMyMenu",
      category: "Restaurant Tech",
      accent: "#f59e0b",
      description: "A modern restaurant discovery and digital menu platform that helps users instantly access restaurant menus, explore dishes, and improve the dining experience through a clean and responsive interface.",
      tags: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "REST API", "UI/UX"],
      github: "https://github.com/muhammedshann/whereismymenu",
      liveUrl: "https://whereismymenu.muhammedshan.info"
    },
    {
      title: "Findiff",
      category: "Developer Tool",
      accent: "#8b5cf6",
      description: "An AI powered Git commit message generator designed for developers. Built a professional CLI tool that analyzes staged Git changes and generates clean, conventional commit messages.",
      tags: ["Node.js", "JavaScript", "CLI", "AI", "OpenAI", "Gemini", "NVIDIA", "Git"],
      github: "https://github.com/muhammedshann/findiff",
      liveUrl: "https://www.npmjs.com/package/findiff"
    },
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode
      ? 'text-[#a1a1a1] selection:bg-white selection:text-black'
      : 'text-neutral-600 selection:bg-black selection:text-white'
      } font-sans antialiased`}>

      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 mt-16 md:mt-24 w-full mb-20">
        {/* Section intro */}
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-blue-500 mb-3">
            Selected Work
          </p>
          <h1 className={`text-[32px] md:text-[44px] font-bold leading-[1.05] tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-black'
            }`}>
            Projects<span className="text-blue-500">.</span>
          </h1>
          <p className="mt-4 text-[15px] max-w-lg opacity-70">
            A collection of products I've designed and engineered — from marketplaces and social platforms to AI-powered developer tools.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* Mobile Stacking Card Deck Layout */}
        <div className="block md:hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky w-full mb-28"
              style={{
                top: `calc(5rem + ${index * 16}px)`,
                zIndex: index + 1,
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                isDarkMode={isDarkMode}
                isMobile={true}
              />
            </div>
          ))}
          {/* Spacer at the bottom so cards can scroll all the way up and stack */}
          <div className="h-[45vh]" aria-hidden="true" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
