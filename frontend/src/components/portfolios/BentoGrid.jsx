import React, { useEffect, useRef } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, MapPin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const BentoGrid = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.bento-animate').forEach((el) => {
      el.style.opacity = '0';
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50" style={{ fontFamily: 'var(--font-sans)' }}>
      <GlobalNav variant="light" />
      
      {/* Hero Section - Bento Style */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bento-grid">
            {/* Main Hero Card */}
            <div className="bento-span-3 bento-row-2 bento-item bg-neutral-900 text-white p-10 flex flex-col justify-between bento-animate">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm mb-6">
                  {portfolioOwner.availability}
                </span>
                <h1 className="text-display-lg font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {portfolioOwner.name}
                </h1>
                <p className="text-2xl text-neutral-300 mb-4">
                  {portfolioOwner.role}
                </p>
                <p className="text-neutral-400 text-lg max-w-xl">
                  {portfolioOwner.tagline}
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button className="bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-6">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-neutral-600 text-white hover:bg-white/10 px-6 py-6">
                  Get in Touch
                </Button>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="bento-item bg-indigo-600 text-white p-6 flex flex-col justify-center bento-animate delay-100">
              <span className="text-5xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>8+</span>
              <span className="text-indigo-200 mt-2">Years Experience</span>
            </div>
            
            {/* Projects Count */}
            <div className="bento-item bg-emerald-500 text-white p-6 flex flex-col justify-center bento-animate delay-200">
              <span className="text-5xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>50+</span>
              <span className="text-emerald-100 mt-2">Projects Delivered</span>
            </div>
            
            {/* Image Card */}
            <div className="bento-span-2 bento-item overflow-hidden bento-animate delay-300">
              <img 
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&q=80" 
                alt="Design Process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Location Card */}
            <div className="bento-item bg-amber-400 text-neutral-900 p-6 flex flex-col justify-center bento-animate delay-400">
              <MapPin className="w-6 h-6 mb-2" />
              <span className="font-medium">{portfolioOwner.location}</span>
            </div>
            
            {/* Quick Contact */}
            <div className="bento-item bg-white border border-neutral-200 p-6 flex flex-col justify-center bento-animate delay-500">
              <Mail className="w-6 h-6 mb-2 text-neutral-600" />
              <span className="text-sm text-neutral-500">Email me at</span>
              <span className="font-medium truncate">{portfolioOwner.email}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Bento Grid */}
      <section id="work" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 bento-animate">
            <h2 className="text-display-md font-bold text-neutral-900" style={{ fontFamily: 'var(--font-display)' }}>
              Selected Work
            </h2>
            <p className="text-neutral-600 text-lg mt-4 max-w-2xl">
              A curated collection of projects showcasing my expertise in user-centered design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-neutral-100 rounded-2xl overflow-hidden group cursor-pointer bento-animate hover:-translate-y-2 transition-all duration-300 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${index === 0 ? 'h-full min-h-[400px]' : 'h-64'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs uppercase tracking-wider text-neutral-300">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                    <p className="text-sm text-neutral-300 mt-2 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white/20 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Color accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - About Me */}
            <div className="bento-item bg-white border border-neutral-200 p-10 bento-animate rounded-3xl">
              <h2 className="text-display-md font-bold text-neutral-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                About Me
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                {portfolioOwner.bio}
              </p>
              <blockquote className="border-l-4 border-indigo-500 pl-6 italic text-neutral-700 mb-8">
                "{portfolioOwner.philosophy}"
              </blockquote>
              
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
                <div className="text-center">
                  <span className="text-3xl font-bold text-indigo-600" style={{ fontFamily: 'var(--font-display)' }}>8+</span>
                  <p className="text-sm text-neutral-500 mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-indigo-600" style={{ fontFamily: 'var(--font-display)' }}>50+</span>
                  <p className="text-sm text-neutral-500 mt-1">Projects Done</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-indigo-600" style={{ fontFamily: 'var(--font-display)' }}>30+</span>
                  <p className="text-sm text-neutral-500 mt-1">Happy Clients</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Skills & Image */}
            <div className="flex flex-col gap-6">
              <div className="bento-item bg-neutral-900 text-white p-8 bento-animate delay-100 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioOwner.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bento-item overflow-hidden bento-animate delay-200 rounded-3xl h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80" 
                  alt="Design System"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 bento-animate">
            <h2 className="text-display-md font-bold text-neutral-900" style={{ fontFamily: 'var(--font-display)' }}>
              Client Testimonials
            </h2>
            <p className="text-neutral-600 text-lg mt-4">What people say about working with me</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-neutral-50 rounded-2xl p-8 bento-animate relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-10 h-10 text-neutral-200 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 bento-animate">
            <h2 className="text-display-md font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Let's Work Together
            </h2>
            <p className="text-neutral-400 text-lg mt-4">
              Have a project in mind? I'd love to hear about it.
            </p>
          </div>
          
          <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 bento-animate delay-100">
            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

      <Footer variant="dark" />
      
      {/* Design Concept Badge */}
      <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50">
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span className="text-sm font-medium text-neutral-700">Bento Grid Layout</span>
        <ExternalLink className="w-3 h-3 text-neutral-400" />
      </div>
    </div>
  );
};

export default BentoGrid;
