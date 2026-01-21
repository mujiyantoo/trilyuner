import React, { useEffect, useRef } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, Pencil, Heart } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const HandDrawn = () => {
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

  // Sketchy border style
  const sketchyBorder = (variant = 1) => {
    const styles = [
      '255px 15px 225px 15px/15px 225px 15px 255px',
      '15px 225px 15px 255px/255px 15px 225px 15px',
      '225px 25px 205px 25px/25px 205px 25px 225px',
    ];
    return styles[variant % styles.length];
  };

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        fontFamily: 'var(--font-sans)',
        background: '#FDFBF7',
      }}
    >
      <GlobalNav variant="light" />
      
      {/* Decorative elements - sketchy lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg className="absolute top-20 left-10 w-32 h-32" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-40 right-20 w-24 h-24" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#374151" strokeWidth="2" fill="none" strokeDasharray="5,5" />
        </svg>
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-neutral-800 text-sm text-neutral-600 mb-8"
                style={{ borderRadius: sketchyBorder(0) }}
              >
                <Pencil className="w-4 h-4" />
                <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.1rem' }}>Hand-crafted with love</span>
              </div>
              
              <h1 
                className="text-display-lg font-bold text-neutral-800 mb-6"
                style={{ fontFamily: 'var(--font-handwritten)', fontSize: 'clamp(3rem, 10vw, 6rem)' }}
              >
                Design with a
                <br />
                <span className="relative inline-block">
                  human touch
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,2 100,8 T200,6" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed">
                {portfolioOwner.tagline}. I believe design should feel warm, approachable, and authentically
                <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem' }}> human</span>.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-6 text-base"
                  style={{ borderRadius: sketchyBorder(0) }}
                >
                  <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.2rem' }}>See my work</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-neutral-800 text-neutral-800 hover:bg-neutral-100 px-8 py-6 text-base"
                  style={{ borderRadius: sketchyBorder(1) }}
                >
                  <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.2rem' }}>Say hello</span>
                  <Heart className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Hero Image with sketch frame */}
            <div className="relative scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div 
                className="relative p-4 bg-white border-3 border-neutral-800"
                style={{ 
                  borderWidth: '3px',
                  borderRadius: sketchyBorder(2),
                  transform: 'rotate(2deg)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1763575648485-adc77574d7bf?w=800&q=80"
                  alt="Hand-drawn design"
                  className="w-full aspect-square object-cover"
                  style={{ borderRadius: '10px' }}
                />
                
                {/* Sticky note */}
                <div 
                  className="absolute -top-8 -right-8 bg-amber-200 p-4 shadow-lg"
                  style={{ 
                    transform: 'rotate(6deg)',
                    fontFamily: 'var(--font-handwritten)',
                  }}
                >
                  <p className="text-neutral-800 text-lg">8+ years of</p>
                  <p className="text-neutral-800 text-lg">creative magic! ✨</p>
                </div>
              </div>
              
              {/* Doodle arrow */}
              <svg className="absolute -bottom-16 -left-8 w-24 h-24" viewBox="0 0 100 100">
                <path d="M80,20 Q60,40 40,60 T20,80" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4,4" />
                <path d="M15,70 L20,80 L30,75" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 
              className="text-display-md text-neutral-800 mb-4"
              style={{ fontFamily: 'var(--font-handwritten)' }}
            >
              My Creative Adventures
            </h2>
            <p className="text-neutral-600">Each project is a unique story</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <div 
                key={project.id}
                className="bg-white border-2 border-neutral-800 p-6 scroll-reveal group cursor-pointer hover:-translate-y-2 transition-transform"
                style={{ 
                  borderRadius: sketchyBorder(index),
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className="overflow-hidden mb-4"
                  style={{ borderRadius: '10px' }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span 
                  className="text-xs uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: 'var(--font-handwritten)', fontSize: '0.9rem' }}
                >
                  {project.category}
                </span>
                <h3 
                  className="text-2xl text-neutral-800 mt-2 mb-3"
                  style={{ fontFamily: 'var(--font-handwritten)' }}
                >
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs"
                      style={{ borderRadius: sketchyBorder(1) }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center scroll-reveal">
            <h2 
              className="text-display-md text-neutral-800 mb-8"
              style={{ fontFamily: 'var(--font-handwritten)' }}
            >
              A little about me...
            </h2>
            
            <div 
              className="bg-white border-2 border-neutral-800 p-8 md:p-12 mb-12"
              style={{ 
                borderRadius: sketchyBorder(0),
                transform: 'rotate(-1deg)'
              }}
            >
              <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                {portfolioOwner.bio}
              </p>
              
              <blockquote 
                className="text-2xl italic text-neutral-600 relative"
                style={{ fontFamily: 'var(--font-handwritten)' }}
              >
                "{portfolioOwner.philosophy}"
                <svg className="absolute -bottom-4 right-0 w-16 h-8" viewBox="0 0 60 30">
                  <path d="M5,15 Q15,5 30,15 T55,15" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </blockquote>
            </div>
            
            {/* Skills as doodle tags */}
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <h3 
                className="text-lg text-neutral-600 mb-6"
                style={{ fontFamily: 'var(--font-handwritten)' }}
              >
                Things I'm good at:
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {portfolioOwner.skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-5 py-2 bg-white border-2 border-neutral-800 text-neutral-700 hover:bg-amber-100 transition-colors cursor-default"
                    style={{ 
                      fontFamily: index % 3 === 0 ? 'var(--font-handwritten)' : 'var(--font-sans)',
                      fontSize: index % 3 === 0 ? '1.1rem' : '0.875rem',
                      borderRadius: sketchyBorder(index),
                      transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index % 3)}deg)`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 
              className="text-display-md text-neutral-800"
              style={{ fontFamily: 'var(--font-handwritten)' }}
            >
              Nice things people said
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white border-2 border-neutral-800 p-6 scroll-reveal"
                style={{ 
                  borderRadius: sketchyBorder(index),
                  transitionDelay: `${index * 100}ms`,
                  transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`
                }}
              >
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p 
                  className="text-neutral-700 mb-6"
                  style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.1rem' }}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 overflow-hidden border-2 border-neutral-800"
                    style={{ borderRadius: '50%' }}
                  >
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-amber-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 
              className="text-display-md text-neutral-800"
              style={{ fontFamily: 'var(--font-handwritten)' }}
            >
              Let's chat!
            </h2>
            <p className="text-neutral-600 mt-4" style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.2rem' }}>
              I'd love to hear about your project
            </p>
          </div>
          
          <div 
            className="bg-white border-2 border-neutral-800 p-8 md:p-12 scroll-reveal"
            style={{ borderRadius: sketchyBorder(2), transitionDelay: '100ms' }}
          >
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      <Footer variant="light" />
      
      {/* Design Concept Badge */}
      <div 
        className="fixed bottom-6 right-6 bg-white border-2 border-neutral-800 shadow-lg px-4 py-2 flex items-center gap-2 z-50"
        style={{ borderRadius: sketchyBorder(0) }}
      >
        <Pencil className="w-4 h-4 text-amber-500" />
        <span className="text-sm font-medium text-neutral-700" style={{ fontFamily: 'var(--font-handwritten)' }}>Hand-Drawn</span>
        <ExternalLink className="w-3 h-3 text-neutral-400" />
      </div>
    </div>
  );
};

export default HandDrawn;
