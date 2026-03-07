import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Twitter, Mail, Terminal, Database, Cpu, Globe, Send, User, Code, Layers, BookOpen, Award, MapPin, Phone, ArrowRight } from 'lucide-react';
import AsciiTorus from './components/AsciiTorus';
import AsciiFluid from './components/AsciiFluid';
import GlitchText from './components/GlitchText';
import Chatbot from './components/Chatbot';

const projects = [
  {
    id: "01",
    title: "UAV_THREAT_CLASSIFIER",
    category: "FPGA / DEFENSE",
    description: "Real-time UAV threat classifier using lightweight quantized CNN on AMD Xilinx FPGA (Zynq-7000). Achieved 93.97% accuracy with ~1.2 µs latency.",
    link: "#",
    tech: ["AMD Xilinx FPGA", "hls4ml", "CNN", "Python"],
    image: "https://picsum.photos/seed/uav/800/450"
  },
  {
    id: "02",
    title: "ECO_TRACKER",
    category: "AI / SUSTAINABILITY",
    description: "Automated ecological footprint analyzer processing utility bills via PaddleOCR and Gemini API to estimate household CO₂ emissions.",
    link: "#",
    tech: ["React", "FastAPI", "PaddleOCR", "Gemini API"],
    image: "https://picsum.photos/seed/eco/800/450"
  },
  {
    id: "03",
    title: "QUANTUM_PHARMA",
    category: "RESEARCH PLATFORM",
    description: "Pharmaceutical research platform designed to streamline drug discovery processes with chemical compound database management.",
    link: "https://quantum-pharma-discovery-platform-nine.vercel.app/",
    tech: ["Database", "Web Dev", "Search Algorithms"],
    image: "https://picsum.photos/seed/pharma/800/450"
  },
  {
    id: "04",
    title: "DIGITAL_MENU",
    category: "WEB APPLICATION",
    description: "Digital menu management system allowing restaurants to create, update, and display menu items dynamically.",
    link: "http://restaurant-menu-website-two.vercel.app",
    tech: ["Web Development", "Database", "UI/UX"],
    image: "https://picsum.photos/seed/menu/800/450"
  },
  {
    id: "05",
    title: "NO_FACE_REPORTING",
    category: "COLLEGE PROJECT // JULY 2025",
    description: "A secure anonymous reporting system for Mahindra University allowing users to submit complaints without revealing identity. Features encrypted submissions and case tracking.",
    link: "#",
    tech: ["Encryption", "Web Security", "Anonymous Systems"],
    image: "https://picsum.photos/seed/anonymous/800/450"
  }
];

const experiences = [
  {
    id: "HACK_04",
    title: "ISRO POLLUTION ANALYSIS",
    category: "HACKATHON // AUG 2025",
    description: "Developed an ML model to estimate particulate pollution using real ISRO-sourced datasets and visualized predictions on a custom canvas.",
    link: "#",
    tech: ["ML", "Data Visualization", "ISRO Datasets"],
    image: "https://picsum.photos/seed/pollution/800/450"
  },
  {
    id: "EXP_01",
    title: "AI/ML WORKSHOP",
    category: "INTERNSHIP / TRAINING",
    description: "Hands-on training in Applied ML (Supervised/Unsupervised learning, Model Evaluation) at IIIT Hyderabad. Built ML pipelines using Python, NumPy, Pandas, Scikit-learn.",
    link: "#",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "https://picsum.photos/seed/iiit/800/450",
    htmlId: "iiit-workshop"
  },
  {
    id: "HACK_01",
    title: "BICOPTER UAV CONCEPT",
    category: "IIT HYDERABAD HACKATHON",
    description: "Designed a 3D bicopter UAV and simulation model using virtual prototyping tools. Focused on aerodynamic efficiency and stability.",
    link: "#",
    tech: ["3D Modelling", "Simulation", "UAV Design"],
    image: "https://picsum.photos/seed/drone/800/450"
  },
  {
    id: "HACK_02",
    title: "AI SIGN LANGUAGE TRANSLATOR",
    category: "CBIT HACKATHON",
    description: "Advanced to Round 3. Built an AI-driven sign language translation system using NLP + speech-to-text models to bridge communication gaps.",
    link: "#",
    tech: ["NLP", "Computer Vision", "Python", "AI"],
    image: "https://picsum.photos/seed/signlang/800/450"
  },
  {
    id: "HACK_03",
    title: "CYBERSECURITY CHALLENGE",
    category: "SHELLSHOCK HACKATHON",
    description: "Cleared Round 1. Identified web vulnerabilities (SQLi, IDOR) to capture flags in a CTF-style competition.",
    link: "#",
    tech: ["Cybersecurity", "SQLi", "IDOR", "Web Sec"],
    image: "https://picsum.photos/seed/cyber/800/450"
  }
];

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-white selection:bg-terminal-green selection:text-terminal-black font-mono relative">
      <div className="scanline" />
      <Chatbot />
      
      {/* Technical Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                            linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-4 mix-blend-difference border-b border-white/10 bg-terminal-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-terminal-green" />
          <span className="font-bold tracking-tighter">G_HRISHIKESH_REDDY</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest">
          <a href="#index" className="hover:text-terminal-green transition-colors opacity-70 hover:opacity-100">[INDEX]</a>
          <a href="#iiit-workshop" className="hover:text-terminal-green transition-colors opacity-70 hover:opacity-100">[WORK]</a>
          <a href="#projects" className="hover:text-terminal-green transition-colors opacity-70 hover:opacity-100">[PROJECTS]</a>
          <a href="#blog" className="hover:text-terminal-green transition-colors opacity-70 hover:opacity-100">[BLOG]</a>
          <a href="#contact" className="hover:text-terminal-green transition-colors opacity-70 hover:opacity-100">[CONTACT]</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="index" className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
        {/* Background ASCII Fluid */}
        <div className="absolute inset-0 z-0 opacity-30">
          <AsciiFluid />
        </div>

        <div className="z-10 text-center space-y-6 max-w-4xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block border border-terminal-green/30 px-3 py-1 rounded-full text-xs text-terminal-green bg-terminal-green/5 mb-4"
          >
            CSE STUDENT // AI & ML ENTHUSIAST
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
            <GlitchText text="GAVINOLLA" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              <GlitchText text="HRISHIKESH REDDY" />
            </span>
          </h1>
          
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Engineering intelligent solutions at the intersection of AI and scalable software systems. 
            Focused on building robust applications and optimizing performance. Based in Hyderabad, India.
          </p>

          <div className="pt-8 flex justify-center gap-4">
            <a href="#projects" className="group relative px-6 py-3 bg-terminal-white text-terminal-black font-bold text-sm hover:bg-terminal-green transition-colors inline-flex items-center gap-2">
              <span>VIEW_PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
              <div className="absolute inset-0 border border-white group-hover:border-terminal-green translate-x-1 translate-y-1 -z-10 transition-transform" />
            </a>
            <a href="#contact" className="px-6 py-3 border border-white/20 text-sm hover:border-terminal-green hover:text-terminal-green transition-colors inline-flex items-center gap-2">
              <span>CONTACT_ME</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Floating ASCII Object */}
        <div className="absolute bottom-10 right-10 hidden lg:block opacity-50">
           <AsciiTorus />
        </div>
      </section>

      {/* Stats / Marquee */}
      <div className="border-y border-white/10 bg-terminal-black py-4 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 text-xs text-gray-500 font-mono"
        >
          {Array(10).fill("AI/ML // FPGA // PYTHON // REACT // DATA STRUCTURES // ALGORITHMS // WEB DEV //").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Selected Work */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">PROJECTS</h2>
            <p className="text-gray-500 text-xs">ACADEMIC & PERSONAL</p>
          </div>
          <div className="text-xs text-terminal-green">
            [4] RECORDS FOUND
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <a 
                href={project.link}
                target={project.link.startsWith('http') ? "_blank" : "_self"}
                rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="block group cursor-pointer"
              >
                <div className="aspect-video bg-white/5 border border-white/10 mb-6 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover terminal-img opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 text-[10px] border border-white/10 text-terminal-green">
                    {project.category}
                  </div>

                  {/* Scanline effect on hover */}
                  <div className="absolute inset-0 bg-terminal-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out pointer-events-none" />
                </div>

                <div className="flex justify-between items-start border-t border-white/10 pt-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-terminal-green text-xs font-bold">{project.id}</span>
                      <h3 className="text-xl font-bold group-hover:text-terminal-green transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 max-w-xs">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] border border-white/10 px-2 py-1 text-gray-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-terminal-green transition-colors" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section (Formerly Education) */}
      <section id="experience" className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">HACKATHONS & EXPERIENCE</h2>
              <p className="text-gray-500 text-xs">WORKSHOPS, INTERNSHIPS & COMPETITIONS</p>
            </div>
            <div className="text-xs text-terminal-green">
              [{experiences.length}] RECORDS FOUND
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                id={exp.htmlId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-32"
              >
                <div className="block group cursor-pointer">
                  <div className="aspect-video bg-white/5 border border-white/10 mb-6 relative overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={exp.title}
                      className="w-full h-full object-cover terminal-img opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />
                    
                    <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 text-[10px] border border-white/10 text-terminal-green">
                      {exp.category}
                    </div>

                    {/* Scanline effect on hover */}
                    <div className="absolute inset-0 bg-terminal-green/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out pointer-events-none" />
                  </div>

                  <div className="flex justify-between items-start border-t border-white/10 pt-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-terminal-green text-xs font-bold">{exp.id}</span>
                        <h3 className="text-xl font-bold group-hover:text-terminal-green transition-colors">{exp.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4 max-w-xs">{exp.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {exp.tech.map(t => (
                          <span key={t} className="text-[10px] border border-white/10 px-2 py-1 text-gray-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {exp.link !== "#" && <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-terminal-green transition-colors" />}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-terminal-green" />
              <h3 className="text-xl font-bold">LATEST_THOUGHTS</h3>
            </div>
            <a 
              href="https://blogs-pi-gilt.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-terminal-green hover:underline flex items-center gap-1"
            >
              VIEW_ALL_POSTS <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="https://blogs-pi-gilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 p-8 hover:border-terminal-green transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-terminal-green" />
              </div>
              <span className="text-xs text-terminal-green mb-2 block">[FEATURED_POST]</span>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-terminal-green transition-colors">Exploring the Future of FPGA Acceleration in AI</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                A deep dive into how Field Programmable Gate Arrays are revolutionizing edge AI inference, offering lower latency and higher energy efficiency compared to traditional GPUs.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <span>READ_TIME: 5 MIN</span>
                <span>//</span>
                <span>HARDWARE_ACCELERATION</span>
              </div>
            </a>

            <a 
              href="https://blogs-pi-gilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white/5 border border-white/10 p-8 hover:border-terminal-green transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-terminal-green" />
              </div>
              <span className="text-xs text-gray-500 mb-2 block">[RECENT_ENTRY]</span>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-terminal-green transition-colors">Building Scalable Microservices with FastAPI</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Lessons learned from architecting the Eco Tracker backend. Why Python's async capabilities and FastAPI's dependency injection system are a game changer for modern web APIs.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <span>READ_TIME: 4 MIN</span>
                <span>//</span>
                <span>BACKEND_ENGINEERING</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills / Capabilities */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-3xl font-bold">TECHNICAL_SKILLS</h2>
            <div className="text-xs text-terminal-green">[SKILL_MATRIX]</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-terminal-green group-hover:bg-terminal-green/10 transition-colors">
                <Code className="w-6 h-6 text-white group-hover:text-terminal-green" />
              </div>
              <h3 className="text-lg font-bold">LANGUAGES</h3>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>// Python</li>
                <li>// Java</li>
                <li>// C++</li>
                <li>// Javascript</li>
              </ul>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-terminal-green group-hover:bg-terminal-green/10 transition-colors">
                <Layers className="w-6 h-6 text-white group-hover:text-terminal-green" />
              </div>
              <h3 className="text-lg font-bold">TOOLS</h3>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>// n8n</li>
                <li>// OpenClaw</li>
                <li>// LangChain</li>
              </ul>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-terminal-green group-hover:bg-terminal-green/10 transition-colors">
                <Cpu className="w-6 h-6 text-white group-hover:text-terminal-green" />
              </div>
              <h3 className="text-lg font-bold">AI / ML</h3>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>// PyTorch</li>
                <li>// HuggingFace</li>
                <li>// CNNs</li>
                <li>// NLP</li>
              </ul>
            </div>
            <div className="space-y-4 group">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-terminal-green group-hover:bg-terminal-green/10 transition-colors">
                <Globe className="w-6 h-6 text-white group-hover:text-terminal-green" />
              </div>
              <h3 className="text-lg font-bold">DESIGN</h3>
              <ul className="text-xs text-gray-500 space-y-1 pt-2">
                <li>// Canva</li>
                <li>// Unity</li>
                <li>// Figma</li>
                <li>// Blender</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-24 border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Awards */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Award className="w-5 h-5 text-terminal-green" />
                <h3 className="text-xl font-bold">AWARDS_AND_ACHIEVEMENTS</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-terminal-black border border-terminal-green rounded-full" />
                  <span className="text-xs text-terminal-green mb-1 block">2025</span>
                  <h4 className="text-lg font-bold">AI Hackathon Winner</h4>
                  <p className="text-sm text-gray-400 mb-2">Mahindra University</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Built a multimodal AI web tool using Google Gemini API with support for text, images, audio, and custom features like dashboards and history.
                  </p>
                </div>
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-terminal-black border border-white/30 rounded-full" />
                  <span className="text-xs text-gray-500 mb-1 block">2025</span>
                  <h4 className="text-lg font-bold">Quantum Computing Hackathon — 3rd Prize</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Solved quantum logic and circuit problems in Python/Qiskit through Google Colab.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <BookOpen className="w-5 h-5 text-terminal-green" />
                <h3 className="text-xl font-bold">CERTIFICATIONS</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-terminal-black border border-white/10 p-6 hover:border-terminal-green transition-colors">
                  <h4 className="font-bold mb-1">Career Essentials in AI</h4>
                  <p className="text-xs text-gray-500 mb-2">Microsoft & LinkedIn</p>
                  <p className="text-xs text-gray-400">Verified foundational knowledge in AI, industry use cases, and ethical considerations.</p>
                </div>
                <div className="bg-terminal-black border border-white/10 p-6 hover:border-terminal-green transition-colors">
                  <h4 className="font-bold mb-1">Introduction to Model Context Protocol (MCP)</h4>
                  <p className="text-xs text-gray-500 mb-2">Anthropic | 2026</p>
                  <p className="text-xs text-gray-400">Learned how AI models integrate with external tools, APIs, and data sources.</p>
                </div>
                <div className="bg-terminal-black border border-white/10 p-6 hover:border-terminal-green transition-colors">
                  <h4 className="font-bold mb-1">MATLAB Certification</h4>
                  <p className="text-xs text-gray-500 mb-2">MathWorks | March 2025</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-terminal-green border border-terminal-green/30 px-3 py-1 rounded-full text-xs bg-terminal-green/5 mb-8">
            <Mail className="w-3 h-3" />
            <span>TRANSMISSION_LINK</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">GET_IN_TOUCH</h2>
          <p className="text-gray-400 mb-12 max-w-md">
            I am currently open to internships and project collaborations. 
            Feel free to reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center gap-4 text-gray-400 p-8 border border-white/10 bg-white/5 hover:border-terminal-green transition-colors h-full">
              <div className="w-12 h-12 rounded-full bg-terminal-green/10 flex items-center justify-center mb-2">
                <Mail className="w-6 h-6 text-terminal-green" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-xs text-terminal-green mb-3 tracking-widest font-bold">EMAIL</span>
                <a href="mailto:hrishikeshreddyg@gmail.com" className="text-white font-bold hover:text-terminal-green transition-colors">hrishikeshreddyg@gmail.com</a>
                <a href="mailto:se23ucse065@mahindrauniversity.edu.in" className="text-xs mt-1 hover:text-terminal-green transition-colors break-all">se23ucse065@mahindrauniversity.edu.in</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-gray-400 p-8 border border-white/10 bg-white/5 hover:border-terminal-green transition-colors h-full">
              <div className="w-12 h-12 rounded-full bg-terminal-green/10 flex items-center justify-center mb-2">
                <Phone className="w-6 h-6 text-terminal-green" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-xs text-terminal-green mb-3 tracking-widest font-bold">PHONE</span>
                <span className="text-white font-bold">+91 7799889259</span>
                <span className="text-xs mt-1">AVAILABLE 9AM - 6PM IST</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-gray-400 p-8 border border-white/10 bg-white/5 hover:border-terminal-green transition-colors h-full">
              <div className="w-12 h-12 rounded-full bg-terminal-green/10 flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-terminal-green" />
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-xs text-terminal-green mb-3 tracking-widest font-bold">LOCATION</span>
                <span className="text-white font-bold mb-1">Hyderabad, India</span>
                <span className="text-xs">Flat No-1101; Block-3, My Home Mangala</span>
                <span className="text-xs">Kondapur - 500084</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-terminal-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-terminal-green" />
              <span className="font-bold tracking-tighter">G_HRISHIKESH_REDDY</span>
            </div>
            <div className="flex gap-6 flex-wrap">
              <a href="https://github.com/hrishikesh-reddi" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors flex items-center gap-2 text-xs"><Github className="w-4 h-4" /> GITHUB</a>
              <a href="http://www.linkedin.com/in/gavinolla-hrishikesh-reddy-b3b800277/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors flex items-center gap-2 text-xs"><Globe className="w-4 h-4" /> LINKEDIN</a>
              <a href="https://x.com/hrishikeshRede" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors flex items-center gap-2 text-xs"><Twitter className="w-4 h-4" /> TWITTER</a>
              <a href="https://blogs-pi-gilt.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors flex items-center gap-2 text-xs"><Code className="w-4 h-4" /> BLOGS</a>
            </div>
          </div>
          
          <div className="text-right space-y-2">
            <p className="text-xs text-gray-500">
              HYDERABAD, INDIA
            </p>
            <p className="text-xs text-gray-600">
              © 2026 GAVINOLLA HRISHIKESH REDDY.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
