import React, { useEffect, useRef } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, Leaf } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const OrganicShapes = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div 
      className="min-h-screen overflow-hidden" 
      style={{ 
        fontFamily: 'var(--font-serif)',
        background: 'linear-gradient(135deg, var(--cloud-dancer) 0%, var(--cloud-lavender) 50%, var(--cloud-cream) 100%)'
      }}
    >
      <GlobalNav variant="light" />
      
      {/* Hero Section - Organic Shapes */}
      <section className="min-h-screen relative flex items-center pt-20 px-6">
        {/* Organic Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large blob top right */}
          <div 
            className="absolute -top-20 -right-40 w-[600px] h-[600px] organic-blob animate-blob"
            style={{ background: 'linear-gradient(135deg, rgba(200, 195, 220, 0.6), rgba(180, 190, 210, 0.4))' }}
          />
          {/* Medium blob bottom left */}
          <div 
            className="absolute -bottom-40 -left-20 w-[500px] h-[500px] animate-morph"
            style={{ 
              background: 'linear-gradient(225deg, rgba(220, 215, 200, 0.5), rgba(200, 210, 220, 0.3))',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
            }}
          />
          {/* Small floating blob */}
          <div 
            className="absolute top-1/3 left-1/4 w-[200px] h-[200px] animate-float organic-blob"
            style={{ background: 'rgba(180, 175, 190, 0.3)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-neutral-600 mb-8">
                <Leaf className="w-4 h-4" />
                <span>Organic Design Philosophy</span>
              </div>
              
              <h1 
                className="text-display-lg font-light text-neutral-800 mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Design that
                <br />
                <span className="italic">flows</span> naturally
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                {portfolioOwner.tagline}. Creating digital experiences that feel human, intuitive, and alive.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-6 text-base"
                  style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neutral-400 text-neutral-700 hover:bg-white/50 px-8 py-6 text-base"
                  style={{ borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px' }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Organic Image Composition */}
            <div className="relative scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div 
                className="relative w-full aspect-square animate-morph overflow-hidden"
                style={{ background: 'linear-gradient(135deg, var(--cloud-blue-gray), var(--cloud-lavender))' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1725352566305-7b8ca9346771?w=800&q=80"
                  alt="Organic Design"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              {/* Floating accent shape */}
              <div 
                className="absolute -bottom-8 -left-8 w-32 h-32 organic-blob animate-float bg-white/80 backdrop-blur-sm flex items-center justify-center"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-3xl font-bold text-neutral-800" style={{ fontFamily: 'var(--font-display)' }}>8+</span>
                <span className="text-xs text-neutral-600 ml-1">Years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <h2 
              className="text-display-md font-light text-neutral-800"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Selected <span className="italic">Works</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              Projects crafted with care and attention to organic flow
            </p>
          </div>
          
          {/* Anti-Grid Layout */}
          <div className="space-y-24">
            {projects.slice(0, 4).map((project, index) => (
              <div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-reveal`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image with organic shape */}
                <div className="flex-1 relative">
                  <div 
                    className="overflow-hidden animate-morph"
                    style={{ 
                      borderRadius: index % 2 === 0 
                        ? '60% 40% 30% 70% / 60% 30% 70% 40%' 
                        : '40% 60% 70% 30% / 30% 70% 40% 60%'
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Project number accent */}
                  <div 
                    className={`absolute ${index % 2 === 0 ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} w-24 h-24 organic-blob flex items-center justify-center`}
                    style={{ background: project.color + '30' }}
                  >
                    <span className="text-3xl font-bold" style={{ color: project.color }}>0{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <span 
                    className="text-sm uppercase tracking-wider text-neutral-500"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {project.category}
                  </span>
                  <h3 
                    className="text-3xl font-light text-neutral-800 mt-2 mb-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm text-neutral-700"
                        style={{ fontFamily: 'var(--font-sans)' }}
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
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        {/* Background organic shape */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-morph opacity-30"
          style={{ background: 'linear-gradient(135deg, var(--cloud-lavender), var(--cloud-cream))' }}
        />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center scroll-reveal">
            <h2 
              className="text-display-md font-light text-neutral-800 mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              About <span className="italic">Me</span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed mb-12" style={{ fontFamily: 'var(--font-sans)' }}>
              {portfolioOwner.bio}
            </p>
            
            <blockquote 
              className="text-2xl italic text-neutral-700 max-w-2xl mx-auto relative"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <span className="absolute -top-8 -left-4 text-8xl text-neutral-200 font-serif">"</span>
              {portfolioOwner.philosophy}
            </blockquote>
          </div>
          
          {/* Skills as organic tags */}
          <div className="mt-20 scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-center text-lg text-neutral-500 mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioOwner.skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-white/70 backdrop-blur-sm text-neutral-700 hover:bg-white transition-colors cursor-default"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    borderRadius: index % 3 === 0 
                      ? '255px 15px 225px 15px/15px 225px 15px 255px'
                      : index % 3 === 1
                      ? '15px 225px 15px 255px/255px 15px 225px 15px'
                      : '50px'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 
              className="text-display-md font-light text-neutral-800"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Kind <span className="italic">Words</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white/60 backdrop-blur-sm p-8 scroll-reveal relative"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  borderRadius: index % 3 === 0 
                    ? '60px 20px 60px 20px'
                    : index % 3 === 1
                    ? '20px 60px 20px 60px'
                    : '40px'
                }}
              >
                <Quote className="w-8 h-8 text-neutral-300 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p 
                  className="text-neutral-700 mb-6 italic"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 overflow-hidden organic-blob"
                  >
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)' }}>
                    <p className="font-medium text-neutral-800">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background blob */}
        <div 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] organic-blob animate-blob opacity-40"
          style={{ background: 'linear-gradient(135deg, var(--cloud-lavender), var(--cloud-blue-gray))' }}
        />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12 scroll-reveal">
            <h2 
              className="text-display-md font-light text-neutral-800"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let's <span className="italic">Connect</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-lg" style={{ fontFamily: 'var(--font-sans)' }}>
              Have a project in mind? I'd love to hear from you.
            </p>
          </div>
          
          <div 
            className="bg-white/70 backdrop-blur-sm p-8 md:p-12 scroll-reveal"
            style={{ borderRadius: '60px 20px 60px 20px', transitionDelay: '100ms' }}
          >
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      <Footer variant="light" />
      
      {/* Design Concept Badge */}
      <div 
        className="fixed bottom-6 right-6 bg-white/80 backdrop-blur-sm shadow-lg px-4 py-2 flex items-center gap-2 z-50"
        style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}
      >
        <div className="w-2 h-2 organic-blob bg-emerald-500 animate-pulse" />
        <span className="text-sm font-medium text-neutral-700" style={{ fontFamily: 'var(--font-sans)' }}>Organic Shapes</span>
        <ExternalLink className="w-3 h-3 text-neutral-400" />
      </div>
    </div>
  );
};

export default OrganicShapes;
