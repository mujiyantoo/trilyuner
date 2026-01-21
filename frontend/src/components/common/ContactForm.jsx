import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = ({ variant = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDark = variant === 'dark';

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', project: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
          <CheckCircle className={`w-8 h-8 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className={isDark ? 'text-gray-300' : ''}>
            Your Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className={isDark ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' : ''}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className={isDark ? 'text-gray-300' : ''}>
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className={isDark ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' : ''}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="project" className={isDark ? 'text-gray-300' : ''}>
          Project Type
        </Label>
        <Input
          id="project"
          name="project"
          placeholder="e.g., Mobile App, Website Redesign, Design System"
          value={formData.project}
          onChange={handleChange}
          required
          className={isDark ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500' : ''}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className={isDark ? 'text-gray-300' : ''}>
          Tell me about your project
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your project, goals, and timeline..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={isDark ? 'bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 resize-none' : 'resize-none'}
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isLoading}
        className={`w-full md:w-auto px-8 py-6 text-base font-medium transition-all ${
          isDark 
            ? 'bg-white text-gray-900 hover:bg-gray-100' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Send Message
            <Send className="w-4 h-4" />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
