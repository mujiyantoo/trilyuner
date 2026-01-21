import React, { useEffect, useRef } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, Layers } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const Glassmorphism = () => {
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
      className="min-h-screen relative overflow-hidden" 
      style={{ 
        fontFamily: 'var(--font-sans)',
        background: 'linear-gradient(135deg, #E8E4F0 0%, #D8DDE6 30%, #F0EDE5 60%, #F5F0E6 100%)'
      }}
    >
      {/* Animated Background Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full animate-float opacity-60"
          style={{ 
            background: 'radial-gradient(circle, rgba(180, 170, 200, 0.5) 0%, transparent 70%)',
            top: '-10%',
            right: '-10%',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full animate-float opacity-50"
          style={{ 
            background: 'radial-gradient(circle, rgba(170, 185, 200, 0.5) 0%, transparent 70%)',
            bottom: '10%',
            left: '-10%',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full animate-float opacity-40"
          style={{ 
            background: 'radial-gradient(circle, rgba(200, 195, 180, 0.5) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: '4s'
          }}
        />
      </div>
      
      <GlobalNav variant="light" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-neutral-600 mb-8">
                <Layers className="w-4 h-4" />
                <span>Glassmorphism Design</span>
              </div>
              
              <h1 
                className="text-display-lg font-bold text-neutral-800 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Elegant
                <br />
                <span className="text-neutral-500">Transparency</span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 max-w-lg">
                {portfolioOwner.tagline}. Crafting interfaces with depth, clarity, and modern sophistication.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="glass-card text-neutral-800 hover:bg-white/30 px-8 py-6 text-base border-0">
                  Explore Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-white/30 px-8 py-6 text-base">
                  Contact Me
                </Button>
              </div>
            </div>
            
            {/* Glass Card Stack */}
            <div className="relative h-[500px] scroll-reveal" style={{ transitionDelay: '200ms' }}>
              {/* Back Card */}
              <div 
                className="absolute top-8 left-8 right-0 bottom-0 glass-card rounded-3xl"
                style={{ transform: 'rotate(6deg)' }}
              />
              {/* Middle Card */}
              <div 
                className="absolute top-4 left-4 right-4 bottom-4 glass-card rounded-3xl"
                style={{ transform: 'rotate(3deg)' }}
              />
              {/* Front Card */}
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1725267196915-7700df784ba6?w=800&q=80"
                  alt="Glass Design"
                  className="flex-1 w-full object-cover rounded-2xl"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-neutral-800">{portfolioOwner.name}</p>
                    <p className="text-sm text-neutral-500">{portfolioOwner.role}</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-neutral-700">{portfolioOwner.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '4.9', label: 'Average Rating' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-6 text-center scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl font-bold text-neutral-800" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </span>
                <p className="text-sm text-neutral-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-display-md font-bold text-neutral-800" style={{ fontFamily: 'var(--font-display)' }}>
              Featured <span className="text-neutral-500">Work</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-lg">Selected projects showcasing design excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <div 
                key={project.id}
                className={`glass-card rounded-3xl overflow-hidden group cursor-pointer scroll-reveal ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? 'h-[400px]' : 'h-[300px]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-500">{project.category}</span>
                      <h3 className="text-xl font-bold text-neutral-800 mt-1">{project.title}</h3>
                    </div>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center glass"
                      style={{ backgroundColor: project.color + '20' }}
                    >
                      <ArrowRight className="w-4 h-4" style={{ color: project.color }} />
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 glass rounded-full text-xs text-neutral-600">
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
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 scroll-reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-md font-bold text-neutral-800 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  About <span className="text-neutral-500">Me</span>
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  {portfolioOwner.bio}
                </p>
                <blockquote className="glass rounded-2xl p-6 italic text-neutral-700">
                  "{portfolioOwner.philosophy}"
                </blockquote>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-6">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioOwner.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 glass rounded-full text-sm text-neutral-700 hover:bg-white/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-display-md font-bold text-neutral-800" style={{ fontFamily: 'var(--font-display)' }}>
              Client <span className="text-neutral-500">Testimonials</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="glass-card rounded-2xl p-6 scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-neutral-300 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/50"
                  />
                  <div>
                    <p className="font-semibold text-neutral-800">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-display-md font-bold text-neutral-800" style={{ fontFamily: 'var(--font-display)' }}>
              Get In <span className="text-neutral-500">Touch</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-lg">Let's create something beautiful together</p>
          </div>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 scroll-reveal" style={{ transitionDelay: '100ms' }}>
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      <Footer variant="light" />
      
      {/* Design Concept Badge */}
      <div className="fixed bottom-6 right-6 glass-card rounded-full px-4 py-2 flex items-center gap-2 z-50">
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-sm font-medium text-neutral-700">Glassmorphism</span>
        <ExternalLink className="w-3 h-3 text-neutral-400" />
      </div>
    </div>
  );
};

export default Glassmorphism;
