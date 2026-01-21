import React, { useState, useEffect, useRef } from 'react';
import GlobalNav from '../common/GlobalNav';
import Footer from '../common/Footer';
import ContactForm from '../common/ContactForm';
import { portfolioOwner, projects, testimonials } from '../../data/mockData';
import { ArrowRight, Star, Quote, ExternalLink, Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '../ui/button';
import '../../styles/portfolios.css';

const DarkMode = () => {
  const [theme, setTheme] = useState('dark');
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

  const isDark = theme === 'dark';
  
  const bgColor = isDark ? 'bg-neutral-950' : 'bg-neutral-50';
  const textColor = isDark ? 'text-white' : 'text-neutral-900';
  const mutedText = isDark ? 'text-neutral-400' : 'text-neutral-600';
  const cardBg = isDark ? 'bg-neutral-900' : 'bg-white';
  const borderColor = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const accentGradient = isDark 
    ? 'from-indigo-500 via-purple-500 to-pink-500' 
    : 'from-indigo-600 via-purple-600 to-pink-600';

  return (
    <div 
      className={`min-h-screen ${bgColor} ${textColor} dark-mode-transition`}
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <GlobalNav variant={isDark ? 'dark' : 'light'} />
      
      {/* Theme Toggle */}
      <div className="fixed top-24 right-6 z-50">
        <div className={`${cardBg} ${borderColor} border rounded-full p-1 flex gap-1 shadow-lg`}>
          <button
            onClick={() => setTheme('light')}
            className={`p-2 rounded-full transition-colors ${
              theme === 'light' ? 'bg-yellow-100 text-yellow-600' : `${mutedText} hover:${textColor}`
            }`}
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTheme('dark')}
            className={`p-2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-indigo-500/20 text-indigo-400' : `${mutedText} hover:${textColor}`
            }`}
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${cardBg} ${borderColor} border rounded-full text-sm ${mutedText} mb-8`}>
                <Monitor className="w-4 h-4" />
                <span>Dark Mode Design</span>
              </div>
              
              <h1 
                className="text-display-lg font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Premium
                <br />
                <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>
                  Dark Experience
                </span>
              </h1>
              
              <p className={`text-xl ${mutedText} mb-8 max-w-lg`}>
                {portfolioOwner.tagline}. Designing interfaces that are easy on the eyes and beautiful to behold.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  className={`bg-gradient-to-r ${accentGradient} text-white hover:opacity-90 px-8 py-6 text-base border-0`}
                >
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className={`${borderColor} border ${textColor} hover:bg-white/10 px-8 py-6 text-base`}
                >
                  About Me
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16">
                {[
                  { value: '8+', label: 'Years' },
                  { value: '50+', label: 'Projects' },
                  { value: '4.9', label: 'Rating' }
                ].map((stat, index) => (
                  <div key={index}>
                    <span 
                      className={`text-4xl font-bold bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {stat.value}
                    </span>
                    <p className={`text-sm ${mutedText} mt-1`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <div className={`absolute inset-0 bg-gradient-to-r ${accentGradient} rounded-3xl blur-3xl opacity-20`} />
              <div className={`relative ${cardBg} ${borderColor} border rounded-3xl overflow-hidden p-4`}>
                <img 
                  src="https://images.unsplash.com/photo-1762340272058-cf69cad78602?w=800&q=80"
                  alt="Dark Mode Interface"
                  className="w-full aspect-video object-cover rounded-2xl"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${accentGradient} flex items-center justify-center`}>
                      <span className="text-white font-bold">AM</span>
                    </div>
                    <div>
                      <p className="font-medium">{portfolioOwner.name}</p>
                      <p className={`text-xs ${mutedText}`}>{portfolioOwner.role}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                    {portfolioOwner.availability}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-reveal">
            <h2 
              className="text-display-md font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Selected <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>Work</span>
            </h2>
            <p className={`${mutedText} mt-4 text-lg`}>Showcasing premium design solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`${cardBg} ${borderColor} border rounded-2xl overflow-hidden group cursor-pointer scroll-reveal hover:-translate-y-2 transition-all duration-300`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(to top, ${project.color}80, transparent)` }}
                  />
                </div>
                <div className="p-5">
                  <span className={`text-xs uppercase tracking-wider ${mutedText}`}>{project.category}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{project.title}</h3>
                  <p className={`text-sm ${mutedText} line-clamp-2 mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span 
                        key={tech} 
                        className={`text-xs px-2 py-1 rounded-full ${isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'}`}
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
      <section id="about" className={`py-32 px-6 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 
                className="text-display-md font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                About <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>Me</span>
              </h2>
              <p className={`text-lg ${mutedText} leading-relaxed mb-8`}>
                {portfolioOwner.bio}
              </p>
              <blockquote className={`${cardBg} ${borderColor} border rounded-2xl p-6`}>
                <p className="italic">"{portfolioOwner.philosophy}"</p>
              </blockquote>
            </div>
            
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-xl font-semibold mb-6">Skills & Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {portfolioOwner.skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className={`${cardBg} ${borderColor} border rounded-xl p-4 hover:border-indigo-500/50 transition-colors`}
                  >
                    <span className={`text-2xl font-bold ${mutedText}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-2 font-medium">{skill}</p>
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
          <div className="text-center mb-16 scroll-reveal">
            <h2 
              className="text-display-md font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>Clients Say</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`${cardBg} ${borderColor} border rounded-2xl p-6 scroll-reveal`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Quote className={`w-8 h-8 ${isDark ? 'text-neutral-700' : 'text-neutral-200'} mb-4`} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className={`${mutedText} mb-6`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className={`w-12 h-12 rounded-full object-cover ring-2 ${isDark ? 'ring-neutral-700' : 'ring-neutral-200'}`}
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className={`text-sm ${mutedText}`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 px-6 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 
              className="text-display-md font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's <span className={`bg-gradient-to-r ${accentGradient} bg-clip-text text-transparent`}>Connect</span>
            </h2>
            <p className={`${mutedText} mt-4 text-lg`}>Ready to bring your vision to life</p>
          </div>
          
          <div className={`${cardBg} ${borderColor} border rounded-3xl p-8 md:p-12 scroll-reveal`} style={{ transitionDelay: '100ms' }}>
            <ContactForm variant={isDark ? 'dark' : 'light'} />
          </div>
        </div>
      </section>

      <Footer variant={isDark ? 'dark' : 'light'} />
      
      {/* Design Concept Badge */}
      <div className={`fixed bottom-6 right-6 ${cardBg} ${borderColor} border shadow-lg rounded-full px-4 py-2 flex items-center gap-2 z-50`}>
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
        <span className="text-sm font-medium">Dark Mode</span>
        <ExternalLink className="w-3 h-3 opacity-50" />
      </div>
    </div>
  );
};

export default DarkMode;
