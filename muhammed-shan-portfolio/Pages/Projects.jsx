import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';

const ProjectsPage = () => {
  const { isDarkMode } = useTheme(); // Access global theme state

  const projects = [
    {
      title: "Analytics Dashboard",
      description: "Modular dashboard with role-based access and real-time charts. Focused on performance and clarity.",
      tags: ["Next.js", "React", "TypeScript"]
    },
    {
      title: "E-commerce Platform",
      description: "Checkout, product catalog, and order management with strong accessibility and reliability.",
      tags: ["Django", "PostgreSQL", "Stripe"]
    },
    {
      title: "API Gateway",
      description: "Scalable gateway with caching, rate limiting, and observability; clean interfaces and tests.",
      tags: ["Node.js", "Redis", "OpenAPI"]
    },
    {
      title: "Design System",
      description: "Monochrome-first component library emphasizing readability and motion restraint.",
      tags: ["React", "Tailwind"]
    }
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-[#888888]' : 'bg-white text-neutral-600'
    } font-sans antialiased`}>
      
      {/* 1. Navigation */}
      <Header />

      {/* 2. Main Content - flex-grow pushes footer down */}
      <main className="flex-grow max-w-5xl mx-auto px-6 mt-16 w-full mb-16">
        <h1 className={`text-[28px] font-bold mb-10 transition-colors ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Projects
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-5 flex flex-col h-full transition-all duration-300 ${
                isDarkMode 
                ? 'border-[#1a1a1a] bg-black hover:border-[#333]' 
                : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 shadow-sm'
              }`}
            >
              <h3 className={`text-[16px] font-semibold mb-3 transition-colors ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                {project.title}
              </h3>
              
              <p className={`text-[13px] leading-relaxed mb-5 flex-grow transition-colors ${
                isDarkMode ? 'text-[#888888]' : 'text-neutral-500'
              }`}>
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`text-[11px] px-2 py-1 border rounded transition-colors ${
                      isDarkMode 
                      ? 'border-[#222] text-[#888888]' 
                      : 'border-neutral-300 text-neutral-500 bg-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-fit text-[13px] border px-4 py-1.5 rounded-md transition-all ${
                isDarkMode 
                ? 'text-white border-[#222] hover:bg-[#111]' 
                : 'text-black border-neutral-300 hover:bg-neutral-100'
              }`}>
                View Project
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;