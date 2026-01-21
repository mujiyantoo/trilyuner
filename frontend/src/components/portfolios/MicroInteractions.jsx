import React, { useState, useEffect, useRef } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, Zap, MousePointer, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const MicroInteractions = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);
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

  const handleButtonClick = (id) => {
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 600);
  };

  // Interactive button component with micro-interactions
  const InteractiveButton = ({ children, variant = 'primary', className = '', onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { x, y, id: Date.now() };
      setRipples([...ripples, newRipple]);
      setTimeout(() => {
        setRipples(r => r.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
      onClick?.();
    };

    return (
      <button
        className={`relative overflow-hidden px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
          variant === 'primary' 
            ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
            : 'bg-white border-2 border-neutral-200 text-neutral-900 hover:border-neutral-300'
        } ${isHovered ? 'shadow-lg -translate-y-0.5' : 'shadow-md'} ${
          isPressed ? 'scale-95' : 'scale-100'
        } ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onClick={handleClick}
      >
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 animate-ping"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
        <span className={`relative z-10 flex items-center gap-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
          {children}
          {variant === 'primary' && (
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          )}
        </span>
      </button>
    );
  };

  // Animated skill tag
  const SkillTag = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <span
        className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-default ${
          isHovered 
            ? 'bg-neutral-900 text-white shadow-lg -translate-y-1' 
            : 'bg-neutral-100 text-neutral-700'
        }`}
        style={{ transitionDelay: `${index * 20}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {skill}
      </span>
    );
  };

  // Project card with hover effects
  const ProjectCard = ({ project, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <div
        ref={cardRef}
        className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`,
          }}
        />
        
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-56 object-cover transition-transform duration-700 ${
              hoveredProject === project.id ? 'scale-110' : 'scale-100'
            }`}
          />
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: `linear-gradient(to top, ${project.color}80, transparent)` }}
          />
          
          {/* Floating badge */}
          <div 
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white transition-all duration-500 ${
              hoveredProject === project.id ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
            style={{ backgroundColor: project.color }}
          >
            View Project
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400">{project.category}</span>
              <h3 className={`text-xl font-semibold mt-1 transition-colors duration-300 ${
                hoveredProject === project.id ? 'text-indigo-600' : 'text-neutral-900'
              }`}>
                {project.title}
              </h3>
            </div>
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                hoveredProject === project.id ? 'rotate-45 bg-neutral-900' : 'rotate-0 bg-neutral-100'
              }`}
            >
              <ArrowRight className={`w-4 h-4 transition-colors ${
                hoveredProject === project.id ? 'text-white' : 'text-neutral-600'
              }`} />
            </div>
          </div>
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={tech}
                className={`text-xs px-2 py-1 rounded-md transition-all duration-300 ${
                  hoveredProject === project.id 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'bg-neutral-100 text-neutral-600'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50" style={{ fontFamily: 'var(--font-sans)' }}>
      <GlobalNav variant="light" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-sm text-indigo-600 mb-8 hover:bg-indigo-100 transition-colors cursor-default">
                <Zap className="w-4 h-4" />
                <span>Micro-interactions Design</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              
              <h1 
                className="text-display-lg font-bold text-neutral-900 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Design that
                <br />
                <span className="text-indigo-600 relative">
                  feels alive
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                    <path 
                      d="M0,4 Q50,0 100,4 T200,4" 
                      stroke="#818CF8" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-8 max-w-lg">
                {portfolioOwner.tagline}. Every hover, click, and scroll should feel delightfully responsive.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <InteractiveButton variant="primary">
                  Explore Work
                </InteractiveButton>
                <InteractiveButton variant="secondary">
                  <MousePointer className="w-4 h-4" />
                  Hover me!
                </InteractiveButton>
              </div>
              
              {/* Interactive stats */}
              <div className="grid grid-cols-3 gap-8 mt-16">
                {[
                  { value: '8+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '4.9', label: 'Rating' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="group cursor-default"
                  >
                    <span 
                      className="text-4xl font-bold text-neutral-900 block group-hover:text-indigo-600 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-sm text-neutral-500 group-hover:text-neutral-700 transition-colors">{stat.label}</span>
                    <div className="h-0.5 bg-neutral-200 mt-2 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interactive Card Preview */}
            <div className="relative scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-shadow duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                  alt="Interactive Design"
                  className="w-full aspect-video object-cover rounded-2xl mb-6"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-neutral-900">{portfolioOwner.name}</p>
                    <p className="text-sm text-neutral-500">{portfolioOwner.role}</p>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium animate-pulse">
                    {portfolioOwner.availability}
                  </div>
                </div>
                
                {/* Floating interaction hints */}
                <div className="absolute -top-4 -right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-bounce">
                  ✨ Hover & Click!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-reveal">
            <h2 
              className="text-display-md font-bold text-neutral-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Featured <span className="text-indigo-600">Projects</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-lg">Hover over cards to see micro-interactions in action</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 
                className="text-display-md font-bold text-neutral-900 mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                About <span className="text-indigo-600">Me</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {portfolioOwner.bio}
              </p>
              <blockquote className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-indigo-500">
                <p className="italic text-neutral-700">"{portfolioOwner.philosophy}"</p>
              </blockquote>
            </div>
            
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioOwner.skills.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 
              className="text-display-md font-bold text-neutral-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Client <span className="text-indigo-600">Feedback</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-neutral-50 rounded-2xl p-6 scroll-reveal hover:bg-white hover:shadow-lg transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-indigo-200 mb-4 group-hover:text-indigo-400 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white group-hover:ring-indigo-200 transition-all"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 
              className="text-display-md font-bold text-neutral-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's <span className="text-indigo-600">Connect</span>
            </h2>
            <p className="text-neutral-600 mt-4 text-lg">Experience interactive design firsthand</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 scroll-reveal hover:shadow-2xl transition-shadow duration-500" style={{ transitionDelay: '100ms' }}>
            <ContactForm variant="light" />
          </div>
        </div>
      </section>

      <Footer variant="light" />
      
      {/* Design Concept Badge */}
      <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group">
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse group-hover:scale-150 transition-transform" />
        <span className="text-sm font-medium text-neutral-700 group-hover:text-indigo-600 transition-colors">Micro-interactions</span>
        <ExternalLink className="w-3 h-3 text-neutral-400 group-hover:text-indigo-500 transition-colors" />
      </div>
    </div>
  );
};

export default MicroInteractions;
