import React, { useEffect, useRef, useState } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, Box, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const Immersive3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const Card3D = ({ children, className = '' }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setRotation({
        x: (y - 0.5) * 10,
        y: (x - 0.5) * -10,
      });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    return (
      <div
        ref={cardRef}
        className={`transition-transform duration-300 ${className}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-neutral-950 text-white overflow-hidden" 
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <GlobalNav variant="dark" />
      
      {/* Hero Section with 3D Elements */}
      <section className="min-h-screen relative flex items-center pt-20 px-6">
        {/* Parallax Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating 3D shapes */}
          <div 
            className="absolute w-64 h-64 border border-indigo-500/30 rounded-3xl"
            style={{ 
              top: '10%',
              right: '10%',
              transform: `translate(${(mousePosition.x - 0.5) * -50}px, ${(mousePosition.y - 0.5) * -50}px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
              transformStyle: 'preserve-3d',
            }}
          />
          <div 
            className="absolute w-48 h-48 border border-purple-500/30 rounded-full"
            style={{ 
              bottom: '20%',
              left: '5%',
              transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
            }}
          />
          <div 
            className="absolute w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl"
            style={{ 
              top: '40%',
              right: '20%',
              transform: `translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px) rotate(45deg)`,
            }}
          />
          {/* Grid lines */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 border border-neutral-700 rounded-full text-sm text-neutral-400 mb-8">
                <Box className="w-4 h-4" />
                <span>3D Immersive Design</span>
              </div>
              
              <h1 className="text-display-lg font-bold mb-6">
                Enter the
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Third Dimension
                </span>
              </h1>
              
              <p className="text-xl text-neutral-400 mb-8 max-w-lg">
                {portfolioOwner.tagline}. Creating immersive digital experiences that push the boundaries of web design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 px-8 py-6 text-base border-0">
                  Explore in 3D
                  <Sparkles className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-neutral-700 text-white hover:bg-white/10 px-8 py-6 text-base">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* 3D Card Hero */}
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <Card3D className="cursor-pointer">
                <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-30" />
                  
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1754738381783-f9a2847bfef2?w=800&q=80"
                      alt="3D Design"
                      className="w-full aspect-video object-cover rounded-2xl mb-6"
                    />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">{portfolioOwner.name}</p>
                        <p className="text-sm text-neutral-400">{portfolioOwner.role}</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <span className="text-indigo-400 font-bold">8+</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-400 font-bold">50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section with 3D Cards */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-reveal">
            <h2 className="text-display-md font-bold">
              Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-neutral-400 mt-4 text-lg">Hover to experience the depth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <Card3D 
                key={project.id}
                className="scroll-reveal"
              >
                <div 
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to top, ${project.color}60, transparent)` }}
                    />
                    {/* Floating number */}
                    <div 
                      className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
                      style={{ 
                        backgroundColor: project.color + '30',
                        color: project.color,
                        transform: 'translateZ(20px)',
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wider text-neutral-500">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs px-3 py-1 bg-neutral-800 rounded-full text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="text-display-md font-bold mb-6">
                About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                {portfolioOwner.bio}
              </p>
              <blockquote className="bg-neutral-800 border-l-4 border-indigo-500 rounded-r-2xl p-6">
                <p className="italic text-neutral-300">"{portfolioOwner.philosophy}"</p>
              </blockquote>
            </div>
            
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-bold mb-6">Technical Arsenal</h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioOwner.skills.slice(0, 8).map((skill, index) => (
                  <Card3D key={skill}>
                    <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 hover:border-indigo-500/50 transition-colors">
                      <span className="text-3xl font-bold text-neutral-700">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="mt-2 font-medium">{skill}</p>
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-display-md font-bold">
              Client <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Reviews</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card3D key={testimonial.id}>
                <div 
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 scroll-reveal h-full"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Quote className="w-8 h-8 text-neutral-700 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-neutral-300 mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-neutral-700"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-display-md font-bold">
              Start a <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Project</span>
            </h2>
            <p className="text-neutral-400 mt-4 text-lg">Let's create something extraordinary</p>
          </div>
          
          <Card3D>
            <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 md:p-12 scroll-reveal relative" style={{ transitionDelay: '100ms' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20" />
              <div className="relative">
                <ContactForm variant="dark" />
              </div>
            </div>
          </Card3D>
        </div>
      </section>

      <Footer variant="dark" />
      
      {/* Design Concept Badge */}
      <div className="fixed bottom-6 right-6 bg-neutral-800 border border-neutral-700 shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50">
        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
        <span className="text-sm font-medium">3D Immersive</span>
        <ExternalLink className="w-3 h-3 text-neutral-500" />
      </div>
    </div>
  );
};

export default Immersive3D;
