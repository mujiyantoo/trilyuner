import React, { useEffect, useRef, useState } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, MousePointer } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const KineticTypography = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const AnimatedText = ({ text, className = '', delay = 0 }) => {
    return (
      <span className={`inline-block overflow-hidden ${className}`}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-fade-in-up"
            style={{ 
              animationDelay: `${delay + index * 50}ms`,
              animationFillMode: 'both'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  const WavyText = ({ text, className = '' }) => {
    return (
      <span className={`inline-block ${className}`}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block kinetic-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white" style={{ fontFamily: 'var(--font-display)' }}>
      <GlobalNav variant="dark" />
      
      {/* Hero Section - Kinetic Typography */}
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        {/* Animated Background Elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Typography Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <span 
            className="absolute text-[20vw] font-black text-white/5 select-none"
            style={{ 
              top: '10%', 
              left: '-5%',
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          >
            UI
          </span>
          <span 
            className="absolute text-[15vw] font-black text-white/5 select-none"
            style={{ 
              bottom: '10%', 
              right: '-5%',
              transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
            }}
          >
            UX
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 border border-neutral-700 rounded-full text-sm text-neutral-400 animate-fade-in">
              <MousePointer className="w-4 h-4 inline mr-2" />
              Move your cursor for interactive effects
            </span>
          </div>
          
          <h1 className="text-display-xl font-black mb-8 leading-none">
            <div className="overflow-hidden">
              <AnimatedText text="CRAFTING" className="block" delay={0} />
            </div>
            <div className="overflow-hidden">
              <AnimatedText 
                text="DIGITAL" 
                className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" 
                delay={400} 
              />
            </div>
            <div className="overflow-hidden">
              <AnimatedText text="EXPERIENCES" className="block" delay={800} />
            </div>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <WavyText text={portfolioOwner.tagline} />
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <Button className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-6 text-lg group">
              Explore Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-neutral-600 text-white hover:bg-white/10 px-8 py-6 text-lg">
              About Me
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-display-lg font-black">
              <span className="text-neutral-600">SELECTED</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">PROJECTS</span>
            </h2>
          </div>
          
          <div className="space-y-32">
            {projects.slice(0, 4).map((project, index) => (
              <div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
              >
                <div className="flex-1 relative overflow-hidden rounded-3xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
                  />
                </div>
                
                <div className="flex-1 space-y-6">
                  <span 
                    className="text-8xl font-black opacity-20"
                    style={{ color: project.color }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl font-bold -mt-16 relative">
                    <WavyText text={project.title} />
                  </h3>
                  <p className="text-neutral-400 text-lg">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral-500 uppercase tracking-wider">Challenge</p>
                    <p className="text-neutral-300">{project.challenge}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-300 hover:bg-neutral-700 transition-colors"
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

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display-md font-black mb-8">
                <span className="text-neutral-500">ABOUT</span>
                <br />
                <span>THE DESIGNER</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-8">
                {portfolioOwner.bio}
              </p>
              <blockquote className="text-2xl font-light italic text-neutral-300 border-l-4 border-indigo-500 pl-6">
                "{portfolioOwner.philosophy}"
              </blockquote>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">EXPERTISE</h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioOwner.skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="p-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-colors cursor-default group"
                  >
                    <span className="text-3xl font-black text-neutral-700 group-hover:text-indigo-500 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-neutral-300 mt-2">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-display-md font-black text-center mb-20">
            <span className="text-neutral-600">CLIENT</span>
            <br />
            <span>TESTIMONIALS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-neutral-900 rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                <Quote className="w-12 h-12 text-neutral-800 absolute top-6 right-6 group-hover:text-indigo-500/30 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-300 text-lg mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-neutral-700"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                    <p className="text-xs text-indigo-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-lg font-black mb-6">
            <span className="text-neutral-600">LET'S</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">CONNECT</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            Have a project in mind? Let's create something extraordinary together.
          </p>
          
          <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 text-left">
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

      <Footer variant="dark" />
      
      {/* Design Concept Badge */}
      <div className="fixed bottom-6 right-6 bg-neutral-800 border border-neutral-700 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50">
        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
        <span className="text-sm font-medium text-neutral-300">Kinetic Typography</span>
        <ExternalLink className="w-3 h-3 text-neutral-500" />
      </div>
    </div>
  );
};

export default KineticTypography;
