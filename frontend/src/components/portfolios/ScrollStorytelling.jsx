import React, { useEffect, useRef, useState } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const ScrollStorytelling = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Determine active section
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const chapters = [
    { title: 'Intro', color: '#6366F1' },
    { title: 'Work', color: '#10B981' },
    { title: 'About', color: '#F59E0B' },
    { title: 'Words', color: '#EC4899' },
    { title: 'Connect', color: '#8B5CF6' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white" style={{ fontFamily: 'var(--font-sans)' }}>
      <GlobalNav variant="dark" />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-[7px] top-0 w-0.5 h-full bg-neutral-800">
            <div 
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
          
          {/* Chapter dots */}
          <div className="space-y-16">
            {chapters.map((chapter, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    activeSection >= index 
                      ? 'border-transparent scale-100' 
                      : 'border-neutral-700 scale-75'
                  }`}
                  style={{ backgroundColor: activeSection >= index ? chapter.color : 'transparent' }}
                />
                <span className={`text-xs uppercase tracking-wider transition-opacity ${
                  activeSection === index ? 'opacity-100' : 'opacity-30'
                }`}>
                  {chapter.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Chapter 1: Hero / Intro */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center justify-center relative pt-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-neutral-400 mb-8">
              <BookOpen className="w-4 h-4" />
              <span>Chapter 01 — The Beginning</span>
            </div>
            
            <h1 
              className="text-display-xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Every great design
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                tells a story
              </span>
            </h1>
            
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
              I'm {portfolioOwner.name}, a {portfolioOwner.role.toLowerCase()}. 
              {portfolioOwner.tagline}. Scroll down to discover my journey.
            </p>
            
            <div className="flex justify-center gap-4">
              <Button className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-6">
                Begin the Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 text-neutral-500" />
        </div>
      </section>

      {/* Chapter 2: Work */}
      <section 
        ref={(el) => (sectionsRef.current[1] = el)}
        id="work" 
        className="min-h-screen py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 scroll-reveal">
            <span className="text-emerald-400 text-sm uppercase tracking-wider">Chapter 02</span>
            <h2 
              className="text-display-lg font-bold mt-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Work
            </h2>
            <p className="text-neutral-400 text-xl mt-4 max-w-2xl">
              Each project is a new chapter, a new challenge, a new opportunity to create something meaningful.
            </p>
          </div>
          
          {/* Staggered project cards */}
          <div className="space-y-32">
            {projects.slice(0, 3).map((project, index) => (
              <div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-reveal`}
              >
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <span 
                    className="text-7xl font-black opacity-20"
                    style={{ color: project.color }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl font-bold -mt-8">{project.title}</h3>
                  <p className="text-neutral-400">{project.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral-500 uppercase tracking-wider">The Challenge</p>
                    <p className="text-neutral-300">{project.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral-500 uppercase tracking-wider">The Solution</p>
                    <p className="text-neutral-300">{project.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: About */}
      <section 
        ref={(el) => (sectionsRef.current[2] = el)}
        id="about" 
        className="min-h-screen py-32 px-6 bg-neutral-900"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-amber-400 text-sm uppercase tracking-wider">Chapter 03</span>
            <h2 
              className="text-display-lg font-bold mt-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Designer
            </h2>
          </div>
          
          <div className="space-y-12 scroll-reveal">
            <p className="text-2xl text-neutral-300 leading-relaxed text-center">
              {portfolioOwner.bio}
            </p>
            
            <blockquote className="text-3xl italic text-center text-neutral-400 border-l-4 border-amber-500 pl-8 py-4">
              "{portfolioOwner.philosophy}"
            </blockquote>
            
            <div className="pt-12">
              <h3 className="text-center text-sm uppercase tracking-wider text-neutral-500 mb-8">Skills Acquired Along the Way</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {portfolioOwner.skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-5 py-2 bg-neutral-800 rounded-full text-neutral-300 hover:bg-neutral-700 transition-colors"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Testimonials */}
      <section 
        ref={(el) => (sectionsRef.current[3] = el)}
        id="testimonials" 
        className="min-h-screen py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <span className="text-pink-400 text-sm uppercase tracking-wider">Chapter 04</span>
            <h2 
              className="text-display-lg font-bold mt-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Kind Words
            </h2>
            <p className="text-neutral-400 mt-4">From those who've been part of the journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-neutral-900 rounded-2xl p-8 scroll-reveal"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Quote className="w-10 h-10 text-pink-500/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 5: Contact */}
      <section 
        ref={(el) => (sectionsRef.current[4] = el)}
        id="contact" 
        className="min-h-screen py-32 px-6 bg-neutral-900"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <span className="text-purple-400 text-sm uppercase tracking-wider">Chapter 05</span>
            <h2 
              className="text-display-lg font-bold mt-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Write Your Chapter
            </h2>
            <p className="text-neutral-400 mt-4 text-lg">
              Every great collaboration starts with a conversation.
            </p>
          </div>
          
          <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 scroll-reveal">
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

      {/* Epilogue */}
      <section className="py-20 px-6 text-center">
        <p className="text-neutral-600 text-sm">
          The End — For Now
        </p>
      </section>

      <Footer variant="dark" />
      
      {/* Design Concept Badge */}
      <div className="fixed bottom-6 right-6 bg-neutral-800 border border-neutral-700 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50">
        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-sm font-medium">Scroll Storytelling</span>
        <ExternalLink className="w-3 h-3 text-neutral-500" />
      </div>
    </div>
  );
};

export default ScrollStorytelling;
