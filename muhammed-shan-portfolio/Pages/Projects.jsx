import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "EduFlow",
      description: "Educational productivity platform. Built modular features including smart notes, AI chatbot, Pomodoro timer, habit tracker, and community groups.",
      tags: ["Python", "Django", "Postgres", "React", "Razorpay"],
      link: "https://github.com/muhammedshann/EduFlow.git"
    },
    {
      title: "Fresh Easy",
      description: "E-commerce Platform featuring product catalog, cart, wishlist, Razorpay payments, and a complete order lifecycle management system.",
      tags: ["Python", "Django", "PostgreSQL", "Razorpay", "Tailwind"],
      link: "https://github.com/muhammedshann/fresheasy.git"
    },
    {
      title: "Echo Note",
      description: "Full-stack AI powered speech-to-text application supporting real-time and file-based audio transcription using OpenAI Whisper.",
      tags: ["Python", "Django", "React", "OpenAPI", "Postgres"],
      link: "https://github.com/muhammedshann/echo-note"
    }
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#050505] text-[#a1a1a1] selection:bg-white selection:text-black' 
        : 'bg-[#fafafa] text-neutral-600 selection:bg-black selection:text-white'
    } font-sans antialiased`}>

      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 mt-16 md:mt-24 w-full mb-20">
        <h1 className={`text-[28px] md:text-[32px] font-bold mb-10 transition-colors ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Projects<span className="text-blue-500">.</span>
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group border rounded-2xl p-6 flex flex-col h-full transition-all duration-300 ${
                isDarkMode
                  ? 'border-[#1a1a1a] bg-[#0a0a0a] hover:border-blue-500/30'
                  : 'border-neutral-200 bg-white hover:border-blue-500/30 shadow-sm shadow-neutral-200/50'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-[16px] font-semibold transition-colors ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}>
                  {project.title}
                </h3>
                <Github size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-[13px] md:text-[14px] leading-relaxed mb-6 flex-grow opacity-90">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-medium px-2.5 py-0.5 border rounded-lg transition-colors ${
                      isDarkMode
                        ? 'border-[#1a1a1a] bg-[#111] text-[#888888]'
                        : 'border-neutral-100 bg-neutral-50 text-neutral-500'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 w-fit text-[12px] font-semibold transition-all ${
                  isDarkMode
                    ? 'text-white hover:text-blue-400'
                    : 'text-black hover:text-blue-600'
                }`}
              >
                View Project
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;