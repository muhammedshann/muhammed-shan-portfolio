import React, { useState } from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';
import { Search, ArrowRight, MessageSquare, X } from 'lucide-react';

const BlogPage = () => {
    const { isDarkMode } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedPost, setSelectedPost] = useState(null);

    // Your Blog Data
    const posts = [
        {
            title: "The Future of Modular Education",
            excerpt: "Exploring how micro-services and modular UI components are changing the way we build EdTech ecosystems.",
            content: "Modular education isn't just about breaking down subjects; it's about breaking down the tech stack. By using isolated components for smart note-taking and real-time community tools, we can create a personalized learning experience that scales. This approach allows developers to swap out AI engines or payment gateways without rebuilding the entire architecture.",
            date: "May 2026",
            category: "Ideas",
            readingTime: "4 min read"
        },
        {
            title: "Why I'm Moving Away from Heavy Frameworks",
            excerpt: "A shout regarding the bloat in modern web dev. Sometimes, keeping it light with vanilla logic is all you need.",
            content: "We've reached a point where 'Hello World' apps are 50MB. I'm starting to appreciate the simplicity of Vite and minimal dependencies. If the project doesn't require complex state management, why are we forcing heavy libraries into it? Let's get back to writing clean, high-performance code that doesn't punish the user's browser.",
            date: "April 2026",
            category: "Shouts",
            readingTime: "3 min read"
        },
        {
            title: "Scaling Payments in Real-time",
            excerpt: "Deep dive into managing payment lifecycles and inventory webhooks without losing sleep.",
            content: "Integration is the easy part; handling the edge cases is where the work lies. From partial refunds to expired sessions, your backend needs to be resilient. I've found that implementing a robust logging system for webhooks is the only way to maintain sanity when managing high-volume transactions.",
            date: "March 2026",
            category: "Tech",
            readingTime: "6 min read"
        }
    ];

    const categories = ["All", "Shouts", "Ideas", "Tech"];

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || post.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode
            ? 'bg-[#050505] text-[#a1a1a1] selection:bg-white selection:text-black'
            : 'bg-[#fafafa] text-neutral-600 selection:bg-black selection:text-white'
            } font-sans antialiased`}>

            <Header />

            <main className="flex-grow max-w-4xl mx-auto px-6 mt-16 md:mt-24 w-full mb-20">
                <header className="mb-12">
                    <h1 className={`text-[28px] md:text-[32px] font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        Shouts & Ideas<span className="text-blue-500">.</span>
                    </h1>
                    <p className="text-[15px] opacity-70">A space for my latest thoughts, tech rants, and architectural ideas.</p>
                </header>

                {/* Filter & Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" size={16} />
                        <input
                            type="text"
                            placeholder="Search thoughts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border transition-all outline-none ${isDarkMode
                                ? 'bg-[#0a0a0a] border-[#1a1a1a] focus:border-blue-500/50 text-white'
                                : 'bg-white border-neutral-200 focus:border-blue-500/50 text-black'
                                }`}
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : isDarkMode ? 'bg-[#111] text-[#666] border border-[#1a1a1a]' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog List */}
                <div className="space-y-6">
                    {filteredPosts.map((post, index) => (
                        <article
                            key={index}
                            onClick={() => setSelectedPost(post)}
                            className={`group p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${isDarkMode
                                ? 'border-[#1a1a1a] bg-[#0a0a0a] hover:border-blue-500/20'
                                : 'border-neutral-200 bg-white hover:border-blue-500/20 shadow-sm'
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-500">{post.category}</span>
                                <span className="text-[11px] opacity-40">•</span>
                                <span className="text-[11px] opacity-40 font-medium">{post.date}</span>
                            </div>

                            <h2 className={`text-[20px] md:text-[22px] font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-black'} group-hover:text-blue-500`}>
                                {post.title}
                            </h2>

                            <p className="text-[15px] leading-relaxed mb-6 opacity-70 line-clamp-2">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4 text-[12px] font-medium opacity-50">
                                    <span className="flex items-center gap-1.5"><MessageSquare size={14} /> {post.readingTime}</span>
                                </div>
                                <div className={`flex items-center gap-2 text-[13px] font-bold transition-all ${isDarkMode ? 'text-white' : 'text-black'}`}>
                                    Read more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 opacity-50 italic text-[14px]">
                            No matching thoughts found.
                        </div>
                    )}
                </div>

                {/* Full Post Modal */}
                {selectedPost && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300">
                        <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12 rounded-3xl border shadow-2xl ${isDarkMode ? 'bg-[#0a0a0a] border-[#1a1a1a] text-white' : 'bg-white border-neutral-200 text-black'
                            }`}>

                            <button
                                onClick={() => setSelectedPost(null)}
                                className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'
                                    }`}
                            >
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-500">{selectedPost.category}</span>
                                <span className="text-[11px] opacity-40">• {selectedPost.date} • {selectedPost.readingTime}</span>
                            </div>

                            <h2 className="text-[24px] md:text-[32px] font-bold mb-8 leading-tight">
                                {selectedPost.title}
                            </h2>

                            <div className={`text-[16px] md:text-[18px] leading-relaxed space-y-6 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                                {/* Content split into paragraphs for better reading */}
                                {selectedPost.content.split('\n').map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-neutral-500/10">
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="px-6 py-2 rounded-xl bg-blue-600 text-white text-[14px] font-bold hover:bg-blue-700 transition-colors"
                                >
                                    Close Reading
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;