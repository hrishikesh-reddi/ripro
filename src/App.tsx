import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Terminal, Cpu, Globe, Code, Layers, BookOpen, Award, MapPin, ArrowRight, FileText, Twitter, Menu, X, ChevronUp } from 'lucide-react';
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
    category: "WEB SECURITY / PRIVACY",
    description: "Anonymous complaint reporting system built for Mahindra University. Enables students to submit grievances without revealing their identity, with encrypted submissions and real-time case tracking.",
    link: "#",
    tech: ["Encryption", "Web Security", "Anonymous Systems"],
    image: "https://picsum.photos/seed/anonymous/800/450"
  }
];

const experiences = [
  {
    id: "HACK_04",
    title: "ISRO POLLUTION ANALYSIS",
    category: "HACKATHON / SMART INDIA",
    description: "Developed an ML model to estimate particulate matter pollution using real ISRO-sourced satellite datasets, with interactive prediction visualizations rendered on a custom canvas.",
    link: "#",
    tech: ["ML", "Data Visualization", "ISRO Datasets"],
    image: "https://picsum.photos/seed/pollution/800/450"
  },
  {
    id: "EXP_01",
    title: "AI/ML TRAINING PROGRAM",
    category: "IIIT HYDERABAD / WORKSHOP",
    description: "Intensive applied ML training at IIIT Hyderabad covering supervised and unsupervised learning, model evaluation, and end-to-end pipeline development using Python, NumPy, Pandas, and Scikit-learn.",
    link: "#",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "https://picsum.photos/seed/iiit/800/450",
    htmlId: "iiit-workshop"
  },
  {
    id: "HACK_01",
    title: "BICOPTER UAV CONCEPT",
    category: "IIT HYDERABAD HACKATHON",
    description: "Designed and prototyped a 3D bicopter UAV simulation model, focusing on aerodynamic efficiency, structural stability, and virtual performance analysis using CAD and simulation tools.",
    link: "#",
    tech: ["3D Modelling", "Simulation", "UAV Design"],
    image: "https://picsum.photos/seed/drone/800/450"
  },
  {
    id: "HACK_02",
    title: "AI SIGN LANGUAGE TRANSLATOR",
    category: "CBIT HACKATHON / ROUND 3",
    description: "Reached Round 3. Developed an AI-powered sign language translation system combining computer vision and speech-to-text models to improve accessibility for the hearing impaired.",
    link: "#",
    tech: ["NLP", "Computer Vision", "Python", "AI"],
    image: "https://picsum.photos/seed/signlang/800/450"
  },
  {
    id: "HACK_03",
    title: "CYBERSECURITY CHALLENGE",
    category: "SHELLSHOCK CTF / ROUND 1",
    description: "Competed in a CTF-style cybersecurity challenge, successfully identifying and exploiting web vulnerabilities including SQL injection and Insecure Direct Object Reference (IDOR) to capture flags.",
    link: "#",
    tech: ["Cybersecurity", "SQLi", "IDOR", "Web Sec"],
    image: "https://picsum.photos/seed/cyber/800/450"
  }
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [activeSection, setActiveSection] = useState('index');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setShowBackTop(scrollTop > 400);

      // active section detection
      const sections = ['index', 'projects', 'experience', 'blog', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && scrollTop >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top  = `${e.clientY}px`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${e.clientX}px`;
        cursorRingRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const navLinks = [
    { href: '#index', label: 'HOME', id: 'index' },
    { href: '#experience', label: 'EXPERIENCE', id: 'experience' },
    { href: '#projects', label: 'PROJECTS', id: 'projects' },
    { href: '#blog', label: 'BLOG', id: 'blog' },
    { href: '#contact', label: 'CONTACT', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-white selection:bg-terminal-green selection:text-terminal-black font-mono relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-white/5">
        <motion.div
          className="h-full bg-terminal-green"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      {/* Custom Cursor */}
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />

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
      <nav className="fixed top-[2px] left-0 right-0 z-40 flex justify-between items-center px-6 md:px-10 py-4 border-b border-terminal-green/20 bg-black/90 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-[#f7d13b]" />
          <span className="text-[#f7d13b] font-bold text-sm tracking-widest hidden sm:block">HRG</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-sm tracking-widest">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className={`pb-1.5 transition-colors border-b-2 ${
                activeSection === link.id
                  ? 'text-[#f7d13b] border-[#f7d13b]'
                  : 'text-terminal-white/70 border-transparent hover:text-[#f7d13b] hover:border-[#f7d13b]/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-terminal-green font-mono">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse inline-block" />
            Open to Opportunities
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-terminal-green p-1"
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[57px] left-0 right-0 z-30 bg-black/95 border-b border-terminal-green/30 backdrop-blur-md flex flex-col py-6 px-8 gap-5"
          >
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-widest text-terminal-white/80 hover:text-terminal-green transition-colors py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 text-xs text-terminal-green pt-2">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse inline-block" />
              Open to Opportunities
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="index" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        {/* Background ASCII Fluid */}
        <div className="absolute inset-0 z-0 opacity-[0.13]">
          <AsciiFluid />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: 'radial-gradient(circle, #00ff4122 1px, transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_70%_48%,rgba(0,255,65,0.18),transparent_28%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.92)_38%,rgba(0,0,0,0.62)_100%)]" />

        <div className="z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1480px] mx-auto px-6 md:px-10 w-full gap-10 lg:gap-6">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-7 max-w-[560px] w-full lg:pt-10">

            {/* Badge Pills */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <span className="inline-flex items-center gap-1.5 border border-terminal-green/50 px-4 py-2 text-[12px] text-terminal-green font-bold tracking-widest bg-black/50">
                <span className="text-terminal-green">+</span> FULL STACK DEVELOPER
              </span>
              <span className="inline-flex items-center gap-1.5 border border-terminal-green/50 px-4 py-2 text-[12px] text-terminal-green font-bold tracking-widest bg-black/50">
                <span className="text-terminal-green">+</span> AI &amp; ML ENTHUSIAST
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-terminal-green font-mono text-xl mb-3 tracking-widest">HELLO, I AM</p>
              <h1 className="text-6xl md:text-7xl lg:text-[86px] font-black tracking-tight leading-[0.95] uppercase">
                <span className="text-[#f5f4e8] block">HRISHIKESH</span>
                <span className="text-[#f5f4e8] block">REDDY</span>
                <span className="text-terminal-green block"><GlitchText text="GAVINOLLA" /></span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300/85 text-lg leading-relaxed font-mono max-w-[520px]"
            >
              Engineering intelligent solutions at the intersection of AI and scalable software systems.
              Focused on building robust applications and optimizing performance.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 text-terminal-green text-base font-mono"
            >
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, India</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-terminal-green text-terminal-black border border-terminal-green font-bold text-base hover:bg-terminal-white hover:text-terminal-black transition-all inline-flex items-center gap-3"
              >
                VIEW PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 border border-terminal-green/30 translate-x-1 translate-y-1 -z-10" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-terminal-green/30 text-base font-bold hover:border-terminal-green hover:text-terminal-green transition-colors inline-flex items-center gap-3 bg-black/35"
              >
                CONTACT ME <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN – Portrait + floating labels ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex-shrink-0 w-full lg:flex-1 max-w-[780px]"
          >
            <div className="profile-frame relative">
              <img
                src="/hero-portrait-scene.jpg"
                alt="Gavinolla Hrishikesh Reddy - Pixel Art Portrait"
                className="profile-scene w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Social icons bottom right – matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 right-8 flex gap-4 z-10"
        >
          {[
            { href: "https://github.com/hrishikesh-reddi", icon: <Github className="w-5 h-5" /> },
            { href: "http://www.linkedin.com/in/gavinolla-hrishikesh-reddy-b3b800277/", icon: <Linkedin className="w-5 h-5" /> },
            { href: "mailto:hrishikeshreddyg@gmail.com", icon: <Mail className="w-5 h-5" /> },
            { href: "https://blogs-pi-gilt.vercel.app", icon: <FileText className="w-5 h-5" /> },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-terminal-green/50 bg-black/70 flex items-center justify-center text-terminal-green hover:border-terminal-green hover:bg-terminal-green/10 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Stats / Marquee */}
      <div className="border-y border-white/10 bg-terminal-black py-4 overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="flex gap-12 text-xs text-gray-500 font-mono"
        >
          {Array(12).fill("AI/ML ✦ FPGA ✦ PYTHON ✦ REACT ✦ TYPESCRIPT ✦ DATA STRUCTURES ✦ ALGORITHMS ✦ WEB DEV ✦").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Quick Stats */}
      <div className="border-b border-white/10 bg-white/[0.02] py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '5+', label: 'Hackathons Participated' },
            { value: '3+', label: 'Certifications' },
            { value: '2+', label: 'Years of Coding' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 bg-white/5 p-6 hover:border-terminal-green/50 transition-colors group"
            >
              <p className="text-3xl font-black text-terminal-green group-hover:scale-105 transition-transform inline-block">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1 tracking-widest">{stat.label.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selected Work */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">PROJECTS</h2>
            <p className="text-gray-500 text-xs">ACADEMIC & PERSONAL</p>
          </div>
          <div className="text-xs text-terminal-green">
            [{projects.length}] RECORDS FOUND
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
          <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">BLOG</h2>
              <p className="text-gray-500 text-xs">THOUGHTS & TECHNICAL ARTICLES</p>
            </div>
            <a
              href="https://blogs-pi-gilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-terminal-green hover:underline flex items-center gap-1 border border-terminal-green/30 px-3 py-1.5 hover:bg-terminal-green/10 transition-colors"
            >
              VIEW ALL POSTS <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="https://blogs-pi-gilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group block glow-border p-8 hover:bg-terminal-green/5 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-terminal-green" />
              </div>
              <span className="text-xs text-terminal-green mb-2 block font-bold tracking-widest">★ FEATURED</span>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-terminal-green transition-colors">Exploring the Future of FPGA Acceleration in AI</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                A deep dive into how Field Programmable Gate Arrays are revolutionizing edge AI inference, offering lower latency and higher energy efficiency compared to traditional GPUs.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span className="border border-white/10 px-2 py-0.5">5 MIN READ</span>
                <span className="text-terminal-green/60">//</span>
                <span>HARDWARE &amp; AI</span>
              </div>
            </motion.a>

            <motion.a
              href="https://blogs-pi-gilt.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group block bg-white/5 border border-white/10 p-8 hover:border-terminal-green transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-terminal-green" />
              </div>
              <span className="text-xs text-gray-500 mb-2 block font-bold tracking-widest">RECENT</span>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-terminal-green transition-colors">Building Scalable Microservices with FastAPI</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Lessons learned from architecting the Eco Tracker backend — why Python's async capabilities and FastAPI's dependency injection are a game changer for modern web APIs.
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                <span className="border border-white/10 px-2 py-0.5">4 MIN READ</span>
                <span className="text-terminal-green/60">//</span>
                <span>BACKEND ENGINEERING</span>
              </div>
            </motion.a>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: 'LANGUAGES',
                skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: 'FRAMEWORKS & TOOLS',
                skills: ['React', 'FastAPI', 'n8n', 'LangChain', 'Git'],
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: 'AI / ML',
                skills: ['PyTorch', 'HuggingFace', 'Scikit-learn', 'CNNs', 'NLP'],
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'DESIGN & MISC',
                skills: ['Figma', 'Blender', 'Unity', 'Canva', 'hls4ml'],
              },
            ].map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="group space-y-5 border border-white/10 p-6 hover:border-terminal-green/40 transition-colors bg-white/[0.02]"
              >
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-terminal-green group-hover:bg-terminal-green/10 transition-colors text-white group-hover:text-terminal-green">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold tracking-widest text-white/90">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="text-[11px] border border-terminal-green/30 bg-terminal-green/5 text-terminal-green px-2.5 py-1 hover:bg-terminal-green hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
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
            <span>CONTACT</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">LET'S CONNECT</h2>
          <p className="text-gray-400 mb-12 max-w-lg">
            I'm actively seeking internship and full-time opportunities in software engineering, AI/ML, and related fields.
            If you'd like to discuss a role, collaboration, or project, I'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
            {/* Email Card */}
            <a
              href="mailto:hrishikeshreddyg@gmail.com"
              className="group flex items-start gap-4 text-gray-400 p-6 border border-white/10 bg-white/5 hover:border-terminal-green transition-colors text-left"
            >
              <div className="w-10 h-10 rounded bg-terminal-green/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-terminal-green" />
              </div>
              <div>
                <span className="text-[10px] text-terminal-green tracking-widest font-bold block mb-2">EMAIL</span>
                <span className="text-white font-bold text-sm group-hover:text-terminal-green transition-colors block">hrishikeshreddyg@gmail.com</span>
                <span className="text-xs text-gray-500 mt-1 block">Preferred contact channel</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="http://www.linkedin.com/in/gavinolla-hrishikesh-reddy-b3b800277/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 text-gray-400 p-6 border border-white/10 bg-white/5 hover:border-terminal-green transition-colors text-left"
            >
              <div className="w-10 h-10 rounded bg-terminal-green/10 flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5 text-terminal-green" />
              </div>
              <div>
                <span className="text-[10px] text-terminal-green tracking-widest font-bold block mb-2">LINKEDIN</span>
                <span className="text-white font-bold text-sm group-hover:text-terminal-green transition-colors block">Gavinolla Hrishikesh Reddy</span>
                <span className="text-xs text-gray-500 mt-1 block">Connect professionally</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/hrishikesh-reddi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 text-gray-400 p-6 border border-white/10 bg-white/5 hover:border-terminal-green transition-colors text-left"
            >
              <div className="w-10 h-10 rounded bg-terminal-green/10 flex items-center justify-center shrink-0">
                <Github className="w-5 h-5 text-terminal-green" />
              </div>
              <div>
                <span className="text-[10px] text-terminal-green tracking-widest font-bold block mb-2">GITHUB</span>
                <span className="text-white font-bold text-sm group-hover:text-terminal-green transition-colors block">github.com/hrishikesh-reddi</span>
                <span className="text-xs text-gray-500 mt-1 block">View source &amp; projects</span>
              </div>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:hrishikeshreddyg@gmail.com"
            className="group relative px-10 py-4 bg-terminal-green text-terminal-black border border-terminal-green font-bold text-base hover:bg-terminal-white hover:text-terminal-black transition-all inline-flex items-center gap-3"
          >
            <Mail className="w-4 h-4" />
            SEND AN EMAIL
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 border border-terminal-green/30 translate-x-1 translate-y-1 -z-10" />
          </a>

          <p className="text-xs text-gray-600 mt-6">Based in Hyderabad, India — open to remote and on-site roles.</p>
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

      {/* Back to Top */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 left-8 z-50 w-11 h-11 border border-terminal-green/60 bg-black/80 backdrop-blur flex items-center justify-center text-terminal-green hover:bg-terminal-green hover:text-black transition-all"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
