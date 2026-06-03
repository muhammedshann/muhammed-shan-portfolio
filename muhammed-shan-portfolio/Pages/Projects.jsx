import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/useTheme';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "EduFlow",
      description: "A comprehensive educational productivity ecosystem. Engineered modular features including smart note-taking, integrated AI assistance, and real-time community engagement tools.",
      tags: ["Python", "Django", "PostgreSQL", "React", "Razorpay"],
      github: "https://github.com/muhammedshann/EduFlow.git",
      liveUrl: "https://fresheasy.online/"
    },
    {
      title: "Fresh Easy",
      description: "Architected a full-scale E-commerce platform managing the complete order lifecycle—from secure Razorpay payment integration to dynamic inventory management.",
      tags: ["Python", "Django", "PostgreSQL", "Razorpay", "Tailwind"],
      github: "https://github.com/muhammedshann/fresheasy.git",
      liveUrl: ""
    },
    {
      title: "Echo Note",
      description: "A specialized AI-driven transcription service. Implemented OpenAI Whisper for high-precision, real-time speech-to-text conversion with a focus on low-latency processing.",
      tags: ["Python", "Django", "React", "OpenAI", "PostgreSQL"],
      github: "https://github.com/muhammedshann/echo-note",
      liveUrl: ""
    },
    {
      title: "WhereIsMyMenu",
      description: "A modern restaurant discovery and digital menu platform that helps users instantly access restaurant menus, explore dishes, and improve the dining experience through a clean and responsive interface.",
      tags: ["React", "Node.js", "JavaScript", "MongoDB", "Express", "REST API", "UI/UX"],
      github: "https://github.com/muhammedshann/whereismymenu",
      liveUrl: "https://whereismymenu.muhammedshan.info"
    },
    {
      title: "Findiff",
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
        <h1 className={`text-[28px] md:text-[32px] font-bold mb-10 transition-colors ${isDarkMode ? 'text-white' : 'text-black'
          }`}>
          Projects<span className="text-blue-500">.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative border rounded-2xl p-7 flex flex-col h-full transition-all duration-500 ${isDarkMode
                ? 'border-[#1a1a1a] bg-[#0a0a0a] hover:border-blue-500/20'
                : 'border-neutral-200 bg-white hover:border-blue-500/20 shadow-sm'
                }`}
            >
              <h3 className={`text-[17px] font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
                {project.title}
              </h3>

              <p className="text-[14px] leading-relaxed mb-6 flex-grow opacity-80">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md ${isDarkMode
                      ? 'bg-[#111] text-[#666] border border-[#1a1a1a]'
                      : 'bg-neutral-100 text-neutral-500 border border-neutral-200'
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-transparent group-hover:border-inherit transition-colors">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 ${isDarkMode
                    ? 'hover:bg-white hover:text-black text-[#888]'
                    : 'hover:bg-black hover:text-white text-neutral-400'}`}
                  title="View Source Code"
                >
                  <Github size={18} />
                </a>

                {/* Live Link Button (Only shows if liveUrl exists) */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[12px] font-bold px-4 py-2 rounded-lg transition-all ${isDarkMode
                      ? 'bg-[#1a1a1a] text-white hover:bg-blue-600'
                      : 'bg-neutral-100 text-black hover:bg-blue-600 hover:text-white'
                      }`}
                  >
                    Visit
                    <ExternalLink size={14} />
                  </a>
                )}

                {/* {!project.liveUrl && (
                  <span className="text-[11px] font-medium opacity-40 italic">Deployment pending</span>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
