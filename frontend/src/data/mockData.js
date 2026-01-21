// Mock Data for 9 UI/UX Designer Portfolio Concepts

export const portfolioOwner = {
  name: "Alex Morgan",
  role: "Senior UI/UX Designer",
  tagline: "Crafting digital experiences that inspire and delight",
  email: "hello@alexmorgan.design",
  location: "San Francisco, CA",
  availability: "Open for Freelance",
  bio: "I'm a passionate UI/UX designer with 8+ years of experience creating intuitive, user-centered digital products. I specialize in transforming complex problems into elegant, accessible solutions. My approach combines strategic thinking with aesthetic excellence to deliver experiences that not only look beautiful but drive real business results.",
  philosophy: "Great design is invisible. It guides users effortlessly, anticipates their needs, and creates moments of delight without them even realizing it.",
  skills: [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Design Systems",
    "Interaction Design",
    "Usability Testing",
    "Figma",
    "Adobe Creative Suite",
    "Framer",
    "Webflow"
  ],
  social: {
    linkedin: "https://linkedin.com/in/alexmorgan",
    dribbble: "https://dribbble.com/alexmorgan",
    behance: "https://behance.net/alexmorgan",
    twitter: "https://twitter.com/alexmorganux"
  }
};

export const projects = [
  {
    id: 1,
    title: "Finova Banking App",
    category: "Mobile App Design",
    description: "A comprehensive redesign of a mobile banking experience, focusing on accessibility and seamless transactions.",
    challenge: "Legacy app had 40% abandonment rate during onboarding. Users found navigation confusing and security features intimidating.",
    solution: "Implemented progressive disclosure, biometric shortcuts, and a conversational UI that reduced cognitive load while maintaining security.",
    result: "68% reduction in onboarding abandonment, 4.8★ App Store rating",
    technologies: ["Figma", "Protopie", "User Testing", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&q=80",
    color: "#6366F1"
  },
  {
    id: 2,
    title: "Pulse Health Dashboard",
    category: "Web Application",
    description: "Enterprise health analytics platform for healthcare providers to monitor patient wellness metrics.",
    challenge: "Medical staff needed to track 50+ data points across hundreds of patients without information overload.",
    solution: "Created an intelligent dashboard with AI-powered anomaly detection, customizable widgets, and priority-based alerts.",
    result: "30% faster critical case identification, adopted by 12 major hospitals",
    technologies: ["Sketch", "InVision", "D3.js Charts", "Design System"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    color: "#10B981"
  },
  {
    id: 3,
    title: "Nomad Travel Platform",
    category: "Website Redesign",
    description: "End-to-end travel booking experience for digital nomads seeking long-term stays and workspaces.",
    challenge: "Existing platforms didn't cater to remote workers' unique needs: reliable WiFi, workspace access, monthly stays.",
    solution: "Designed a specialized booking flow with workspace ratings, connectivity scores, and community reviews from verified nomads.",
    result: "200% increase in bookings, featured in TechCrunch",
    technologies: ["Figma", "Webflow", "Lottie Animations", "Hotjar"],
    image: "https://images.unsplash.com/photo-1604409273943-ed5b1a083a51?w=800&q=80",
    color: "#F59E0B"
  },
  {
    id: 4,
    title: "Zenith Design System",
    category: "Design System",
    description: "Comprehensive component library and design language for a SaaS startup scaling across products.",
    challenge: "5 product teams, inconsistent UI patterns, designers spending 60% time recreating components.",
    solution: "Built a token-based design system with 200+ components, detailed documentation, and Figma-to-code pipeline.",
    result: "40% faster design-to-development handoff, unified brand experience",
    technologies: ["Figma", "Storybook", "Tokens Studio", "Zeroheight"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    color: "#8B5CF6"
  },
  {
    id: 5,
    title: "Echo Smart Home",
    category: "IoT Interface",
    description: "Unified control interface for managing smart home devices across multiple ecosystems.",
    challenge: "Users juggled 6+ apps to control different smart devices. No unified view of home automation.",
    solution: "Created a spatial interface that mirrors the physical home layout, with room-based controls and automation recipes.",
    result: "92% user satisfaction, partnership with 3 major IoT brands",
    technologies: ["Figma", "Principle", "ARKit Prototypes", "Voice UI"],
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&q=80",
    color: "#EC4899"
  },
  {
    id: 6,
    title: "Artisan E-Commerce",
    category: "E-Commerce",
    description: "Premium marketplace connecting artisans with collectors seeking handcrafted luxury goods.",
    challenge: "Handmade products needed storytelling, not just product pages. Standard e-commerce felt impersonal.",
    solution: "Designed immersive product stories with artisan profiles, crafting process videos, and provenance tracking.",
    result: "150% increase in average order value, 85% repeat customer rate",
    technologies: ["Adobe XD", "Shopify Plus", "3D Product Views", "AR Try-On"],
    image: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=800&q=80",
    color: "#14B8A6"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CPO at Finova",
    company: "Finova",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    quote: "Alex transformed our entire mobile experience. The attention to detail and user research depth was exceptional. Our app ratings went from 3.2 to 4.8 stars within three months of launch.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Founder & CEO",
    company: "Nomad Platform",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    quote: "Working with Alex was a game-changer. They didn't just design screens—they understood our users deeply and created an experience that truly resonates with digital nomads worldwide.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Chief Medical Officer",
    company: "HealthFirst Network",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    quote: "The Pulse dashboard has revolutionized how our medical staff monitors patients. Complex data is now intuitive. Alex's design literally helps save lives by enabling faster interventions.",
    rating: 5
  }
];

export const designConcepts = [
  {
    id: "bento-grid",
    name: "Bento Grid",
    trend: "Bento Grid Layouts",
    description: "Modular layouts inspired by Japanese bento boxes—asymmetric yet organized, perfect for showcasing diverse work.",
    path: "/bento-grid"
  },
  {
    id: "kinetic-typography",
    name: "Kinetic Type",
    trend: "Kinetic & Expressive Typography",
    description: "Living text and typographic animations that guide attention and create memorable experiences.",
    path: "/kinetic-typography"
  },
  {
    id: "organic-shapes",
    name: "Organic Shapes",
    trend: "Organic Shapes & Anti-Grid",
    description: "Biomorphic forms and asymmetric layouts that feel natural, human, and distinctly anti-corporate.",
    path: "/organic-shapes"
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    trend: "Glassmorphism & Soft Transparency",
    description: "Translucent UI layers with frosted blur effects creating elegant depth and modern sophistication.",
    path: "/glassmorphism"
  },
  {
    id: "dark-mode",
    name: "Dark Mode",
    trend: "Dark Mode as Standard",
    description: "Premium dark theme with comfortable contrast and toggleable themes for accessibility.",
    path: "/dark-mode"
  },
  {
    id: "immersive-3d",
    name: "3D Immersive",
    trend: "3D & Immersive Elements",
    description: "Lightweight 3D visuals and parallax effects for engaging experiences without sacrificing speed.",
    path: "/immersive-3d"
  },
  {
    id: "scroll-storytelling",
    name: "Scroll Story",
    trend: "Scroll Storytelling",
    description: "Cinematic narratives that unfold through scroll, with timed animations and content reveals.",
    path: "/scroll-storytelling"
  },
  {
    id: "hand-drawn",
    name: "Hand-Drawn",
    trend: "Human Scribble Elements",
    description: "Hand-drawn illustrations and handwritten fonts adding warmth and authentic human touch.",
    path: "/hand-drawn"
  },
  {
    id: "micro-interactions",
    name: "Micro-interactions",
    trend: "Designs That Feel Alive",
    description: "Subtle animations and micro-interactions providing feedback and making UI feel responsive.",
    path: "/micro-interactions"
  }
];

export const images = {
  uiux: [
    "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&q=80",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
  ],
  tech3d: [
    "https://images.unsplash.com/photo-1754738381783-f9a2847bfef2?w=800&q=80",
    "https://images.unsplash.com/photo-1754738381739-5efb94a4525b?w=800&q=80",
    "https://images.unsplash.com/photo-1669790139501-cbac2019bbb3?w=800&q=80"
  ],
  glassmorphism: [
    "https://images.unsplash.com/photo-1725267196915-7700df784ba6?w=800&q=80",
    "https://images.unsplash.com/photo-1725267030724-de666807734e?w=800&q=80",
    "https://images.unsplash.com/photo-1725267030559-7f34ddbc7216?w=800&q=80"
  ],
  darkMode: [
    "https://images.unsplash.com/photo-1762340272058-cf69cad78602?w=800&q=80",
    "https://images.unsplash.com/photo-1762340276397-db7ca4ee6ab6?w=800&q=80"
  ],
  devices: [
    "https://images.unsplash.com/photo-1604409273943-ed5b1a083a51?w=800&q=80",
    "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&q=80",
    "https://images.unsplash.com/photo-1740591526503-54ae91793a1a?w=800&q=80"
  ],
  organic: [
    "https://images.unsplash.com/photo-1725352566305-7b8ca9346771?w=800&q=80",
    "https://images.unsplash.com/photo-1761058240432-1dbd1db26d02?w=800&q=80"
  ],
  handDrawn: [
    "https://images.unsplash.com/photo-1763575648485-adc77574d7bf?w=800&q=80",
    "https://images.unsplash.com/photo-1761746395593-5662bc22ca6b?w=800&q=80"
  ],
  typography: [
    "https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?w=800&q=80",
    "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=800&q=80"
  ],
  workspace: [
    "https://images.unsplash.com/photo-1519217651866-847339e674d4?w=800&q=80",
    "https://images.unsplash.com/photo-1502810190503-8303352d0dd1?w=800&q=80",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
  ]
};
