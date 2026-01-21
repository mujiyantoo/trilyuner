import React from 'react';
import { Link } from 'react-router-dom';
import { designConcepts, portfolioOwner } from '../../data/mockData';
import { ArrowRight, Sparkles, Grid3X3, Type, Circle, Layers, Moon, Box, BookOpen, Pencil, Zap, Send } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const LandingPage = () => {
  const conceptIcons = {
    'bento-grid': Grid3X3,
    'kinetic-typography': Type,
    'organic-shapes': Circle,
    'glassmorphism': Layers,
    'dark-mode': Moon,
    'immersive-3d': Box,
    'scroll-storytelling': BookOpen,
    'hand-drawn': Pencil,
    'micro-interactions': Zap,
  };

  const conceptColors = {
    'bento-grid': '#6366F1',
    'kinetic-typography': '#8B5CF6',
    'organic-shapes': '#10B981',
    'glassmorphism': '#06B6D4',
    'dark-mode': '#6366F1',
    'immersive-3d': '#A855F7',
    'scroll-storytelling': '#F59E0B',
    'hand-drawn': '#F59E0B',
    'micro-interactions': '#6366F1',
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-neutral-300 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>9 Design Trends for 2025/2026</span>
          </div>

          <h1
            className="text-display-xl font-bold mb-8 animate-fade-in-up"
            style={{ fontFamily: 'var(--font-display)', animationDelay: '100ms' }}
          >
            Portfolio Design
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trends Showcase
            </span>
          </h1>

          <p
            className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Explore 9 unique UI/UX portfolio concepts, each demonstrating a cutting-edge web design trend.
            Perfect for standing out on platforms like Upwork.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              asChild
              className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-6 text-base"
            >
              <a href="#concepts">
                Explore Concepts
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-neutral-700 text-white hover:bg-white/10 px-8 py-6 text-base"
            >
              About This Project
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            {[
              { value: '9', label: 'Design Concepts' },
              { value: '2025', label: 'Trend Year' },
              { value: '100%', label: 'Responsive' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span
                  className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {stat.value}
                </span>
                <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section id="concepts" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-display-md font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Design <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Concepts</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Each portfolio demonstrates a unique design trend. Click to explore the full experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designConcepts.map((concept, index) => {
              const Icon = conceptIcons[concept.id];
              const color = conceptColors[concept.id];

              return (
                <Link
                  key={concept.id}
                  to={concept.path}
                  className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${color}20, transparent 70%)`
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color }} />
                    </div>

                    <span
                      className="text-xs uppercase tracking-wider mb-2 block"
                      style={{ color }}
                    >
                      Trend #{String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {concept.trend}
                    </h3>

                    <p className="text-neutral-400 text-sm mb-6">
                      {concept.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors" style={{ color }}>
                      Explore Design
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-display-md font-bold mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About This <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Project</span>
          </h2>

          <p className="text-xl text-neutral-400 leading-relaxed mb-8">
            This showcase features 9 distinct portfolio concepts, each highlighting a leading web design trend for 2025/2026.
            From Bento Grid layouts to Micro-interactions, each design is crafted to help UI/UX designers stand out
            on freelancing platforms like Upwork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { title: 'Modern Trends', description: 'Each portfolio showcases cutting-edge design patterns' },
              { title: 'Fully Responsive', description: 'Optimized for all devices and screen sizes' },
              { title: 'Ready to Use', description: 'Easy to customize with placeholder content' },
            ].map((feature, index) => (
              <div key={index} className="bg-neutral-800/50 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-medium text-neutral-200 mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Have a project in mind? Let's create something extraordinary together.
            </h2>
          </div>

          <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12 border border-neutral-800 shadow-2xl">
            <form action="https://formspree.io/f/xlggovye" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-400 block ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#252525] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-neutral-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-400 block ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#252525] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-neutral-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-medium text-neutral-400 block ml-1">Project Type</label>
                <input
                  type="text"
                  id="project-type"
                  name="project_type"
                  placeholder="e.g., Mobile App, Website Redesign, Design System"
                  className="w-full bg-[#252525] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-neutral-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400 block ml-1">Tell me about your project</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your project, goals, and timeline..."
                  className="w-full bg-[#252525] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all hover:border-neutral-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-white text-black font-semibold rounded-lg px-8 py-3 flex items-center gap-2 hover:bg-neutral-200 transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold">Portfolio Trends 2025</span>
          </div>
          <p className="text-neutral-500 text-sm">
            9 Design Concepts • Built for UI/UX Designers
          </p>
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} {portfolioOwner.name}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
