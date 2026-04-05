export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Daventech Computers",
    legalName: "Daventech Computers",
    tagline: "Smart Tech Solutions for Growing Businesses",
    description: "Daventech Computers delivers reliable IT solutions from the heart of Harare. From laptop repairs and network setups to custom software and cybersecurity, we keep businesses connected, protected, and productive.",
    phone: "+263 77 239 5807",
    phoneRaw: "+263772395807",
    whatsappNumber: "263772395807",
    email: "info@daventechcomputers.co.zw",
    address: "KAYLA MALL, 1st flr, Shop M17, R Mugabe st, Simon Muzenda St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.3,
    ratingRounded: 4,
    reviewCount: 7,
    established: "2017",
    yearsExperience: "7+",
    projectsCompleted: "500+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "daventech-computers-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Daventech",
    logoLine2: "Computers",
  },

  hero: {
    badge: "Harare's Trusted IT Partner Since 2017",
    titleParts: [
      { text: "SMART TECH" },
      { text: "SOLUTIONS", highlight: true },
      { text: "FOR GROWING BUSINESSES." },
    ],
    subtitle: "Daventech Computers delivers reliable IT solutions from the heart of Harare. From laptop repairs and network setups to custom software and cybersecurity, we keep businesses connected, protected, and productive.",
    ctaPrimary: "Get IT Support",
    ctaSecondary: "Our Solutions",
    trustBadge: "500+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=85", alt: "Modern tech workspace with monitors" },
      { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=85", alt: "Server room with blue LED lighting" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85", alt: "Data analytics dashboard on screen" },
    ],
  },

  stats: [
    { number: "500+", label: "Clients Served" },
    { number: "7+", label: "Years in Tech" },
    { number: "99%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ],

  servicesPreview: [
    { title: "Software Development", desc: "Custom web applications, mobile apps, and enterprise software built with modern technologies and agile methodology.", icon: "Lightbulb" },
    { title: "Network Infrastructure", desc: "LAN/WAN design, server setup, cloud migration, and network security for businesses of every scale.", icon: "Buildings" },
    { title: "IT Support & Maintenance", desc: "Proactive monitoring, helpdesk support, hardware repair, and system administration to keep your operations running.", icon: "Briefcase" },
    { title: "Cybersecurity Solutions", desc: "Threat assessment, firewall configuration, endpoint protection, and compliance auditing to safeguard your data.", icon: "Star" },
    { title: "Cloud Services", desc: "Migration to AWS, Azure, and Google Cloud. Infrastructure as code, backup solutions, and disaster recovery planning.", icon: "Heart" },
    { title: "Hardware Sales & Repair", desc: "Laptops, desktops, printers, and peripherals. Sales, configuration, repair, and warranty support.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs.",
    items: [
      {
        title: "Software Development",
        slug: "software-development",
        desc: "We build custom software that solves real business problems. From internal tools and workflow automation to customer-facing web and mobile applications, our development team delivers clean, scalable code using modern frameworks and agile methodology. Every project starts with understanding your business logic, not just your feature list.",
        features: ["Web Applications", "Mobile Apps", "API Development", "Database Design", "UI/UX Design", "Quality Assurance"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Network Infrastructure",
        slug: "network-infrastructure",
        desc: "Your network is the backbone of your business. We design, install, and maintain LAN and WAN infrastructure that is fast, secure, and reliable. From structured cabling and switch configuration to cloud connectivity and VPN setup, we ensure your team stays connected.",
        features: ["LAN/WAN Design", "Server Setup", "Cloud Migration", "VPN Configuration", "Structured Cabling", "Network Monitoring"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "IT Support & Maintenance",
        slug: "it-support-maintenance",
        desc: "Technology should enable your business, not slow it down. Our IT support team provides proactive monitoring, remote and on-site helpdesk, hardware troubleshooting, and system administration. We become your outsourced IT department, so you can focus on growth.",
        features: ["Helpdesk Support", "Remote Monitoring", "Hardware Repair", "System Updates", "Backup Management", "Performance Tuning"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      {
        title: "Cybersecurity Solutions",
        slug: "cybersecurity-solutions",
        desc: "In an era of increasing cyber threats, protecting your data is not optional. We provide comprehensive security audits, firewall configuration, endpoint protection, and staff training to build a security posture that protects your business and satisfies compliance requirements.",
        features: ["Threat Assessment", "Firewall Setup", "Endpoint Protection", "Security Audits", "Staff Training", "Incident Response"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      },
      {
        title: "Cloud Services",
        slug: "cloud-services",
        desc: "The cloud is not just about storage -- it is about flexibility, scalability, and resilience. We help businesses migrate to cloud platforms, optimize their infrastructure, implement disaster recovery, and manage ongoing cloud operations.",
        features: ["Cloud Migration", "Infrastructure as Code", "Backup & Recovery", "Cost Optimization", "Multi-Cloud Strategy", "Managed Services"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      },
      {
        title: "Hardware Sales & Repair",
        slug: "hardware-sales-repair",
        desc: "We supply and support the hardware your business needs. Laptops, desktops, servers, printers, and networking equipment from leading brands. Our repair workshop handles everything from screen replacements to motherboard-level diagnostics.",
        features: ["Laptop Sales", "Desktop Setup", "Printer Support", "Screen Replacement", "Data Recovery", "Warranty Service"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our work that showcases our capabilities.",
    items: [
      {
        title: "Corporate Network Overhaul",
        slug: "corporate-network-overhaul",
        category: "networking",
        location: "Harare, Zimbabwe",
        desc: "Redesigned LAN infrastructure for a 200-seat office with redundant switches and fibre backbone.",
        client: "Corporate Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"],
      },
      {
        title: "Cloud Migration Project",
        slug: "cloud-migration-project",
        category: "cloud",
        location: "Harare, Zimbabwe",
        desc: "Migrated 15 on-premise servers to AWS with zero downtime using phased cutover strategy.",
        client: "Financial Services",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
      },
      {
        title: "Cybersecurity Audit",
        slug: "cybersecurity-audit",
        category: "security",
        location: "Harare, Zimbabwe",
        desc: "Comprehensive penetration testing and security hardening for a government-adjacent organisation.",
        client: "Government Agency",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"],
      },
      {
        title: "Custom ERP Development",
        slug: "custom-erp-development",
        category: "software",
        location: "Harare, Zimbabwe",
        desc: "Built a tailored inventory and invoicing system replacing three legacy applications.",
        client: "Manufacturing Company",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"],
      },
      {
        title: "CCTV & Network Integration",
        slug: "cctv-and-network-integration",
        category: "infrastructure",
        location: "Harare, Zimbabwe",
        desc: "Installed 48-camera IP surveillance system integrated with existing network infrastructure.",
        client: "Retail Chain",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"],
      },
      {
        title: "Disaster Recovery Setup",
        slug: "disaster-recovery-setup",
        category: "cloud",
        location: "Harare, Zimbabwe",
        desc: "Designed and implemented automated backup and disaster recovery across two data centres.",
        client: "Insurance Provider",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"],
      },
    ],
  },

  homeTestimonials: [
    { text: "Daventech Computers fixed our entire network in one day. We had been struggling with connectivity issues for months and they diagnosed and resolved everything in a single visit.", name: "Tendai Moyo", role: "IT Manager, Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "The software Daventech Computers built for us replaced three separate systems. It is faster, cleaner, and our staff actually enjoy using it. Best IT investment we have made.", name: "Grace Chipunza", role: "CEO, SME Business", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "After a ransomware scare, Daventech Computers secured our entire infrastructure. Their cybersecurity audit was thorough and their recommendations were practical, not paranoid.", name: "Robert Manyame", role: "Finance Director, Bank", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "We outsourced our entire IT support to Daventech Computers and have not looked back. Response times are excellent and they actually explain things in language we understand.", name: "Farai Chisango", role: "Office Manager, Law Firm", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise, driven by results.",
    story: [
      "Founded in 2017 from a small shop in Kayla Mall, Daventech Computers has grown into one of Harare's most trusted IT service providers. We started with laptop repairs and evolved into a full-service technology partner.",
      "Today we serve over 500 businesses across Zimbabwe with everything from hardware supply to enterprise network infrastructure. Our growth was built on one principle: solve the problem properly the first time.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work. Every project receives our full attention and best effort." },
      { title: "Transparent Pricing", desc: "No hidden fees, no surprises. We quote honestly and invoice accurately." },
      { title: "Expert Team", desc: "Our team brings years of specialist experience to every project we undertake." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, adapt, and deliver." },
    ],
    team: [
      { name: "Team Leader", role: "Director", bio: "Leading Daventech Computers with expertise and vision.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Operations Manager", role: "Operations", bio: "Ensuring every project runs smoothly and on schedule.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Technical Lead", role: "Technical", bio: "Bringing specialist expertise to every engagement.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important needs.",
    items: [
      { text: "Daventech Computers fixed our entire network in one day. We had been struggling with connectivity issues for months and they diagnosed and resolved everything in a single visit.", name: "Tendai Moyo", role: "IT Manager, Corporate Client", rating: 5 },
      { text: "The software Daventech Computers built for us replaced three separate systems. It is faster, cleaner, and our staff actually enjoy using it. Best IT investment we have made.", name: "Grace Chipunza", role: "CEO, SME Business", rating: 5 },
      { text: "After a ransomware scare, Daventech Computers secured our entire infrastructure. Their cybersecurity audit was thorough and their recommendations were practical, not paranoid.", name: "Robert Manyame", role: "Finance Director, Bank", rating: 5 },
      { text: "We outsourced our entire IT support to Daventech Computers and have not looked back. Response times are excellent and they actually explain things in language we understand.", name: "Farai Chisango", role: "Office Manager, Law Firm", rating: 5 },
      { text: "Excellent hardware supply and setup. Daventech Computers configured 20 new workstations for our office and everything worked perfectly from day one.", name: "Patricia Mhizha", role: "Office Manager", rating: 5 },
      { text: "Data recovery heroes! I thought my thesis was gone forever but Daventech Computers recovered everything from my crashed hard drive.", name: "Simba Karonga", role: "University Student", rating: 5 },
      { text: "Daventech Computers set up our cloud backup and now I sleep at night knowing our data is safe. Should have done this years ago.", name: "Douglas Chirume", role: "Business Owner", rating: 5 },
      { text: "Responsive and knowledgeable. Daventech Computers is on speed dial for every tech issue and they never let us down.", name: "Linda Masuku", role: "HR Director", rating: 5 },
      { text: "The website Daventech Computers built for us generates more leads than our previous three marketing campaigns combined.", name: "Patrick Makoni", role: "Marketing Manager", rating: 5 },
      { text: "Excellent pricing and no surprises on the invoice. Daventech Computers quoted fairly and delivered exactly what was promised.", name: "Angela Mhembere", role: "Finance Manager", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [],
  },

  contact: {
    heroTitle: "Get in Touch",
    heroSubtitle: "We would love to hear from you. Reach out and let us discuss how we can help.",
    branches: [
      { name: "Main Office", address: "KAYLA MALL, 1st flr, Shop M17, R Mugabe st, Simon Muzenda St, Harare, Zimbabwe", phone: "+263 77 239 5807", email: "info@daventechcomputers.co.zw" },
    ],
  },

  homeCta: {
    title: "YOUR BUSINESS, OUR TECHNOLOGY",
    subtitle: "Daventech Computers delivers reliable IT solutions from the heart of Harare. From laptop repairs and network setups to custom software and cybersecurity, we keep businesses connected, protected, and productive.",
    ctaPrimary: "Get IT Support",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Daventech! I need IT support for my business.",
    backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85",
  },

  footer: {
    description: "Daventech Computers delivers reliable IT solutions from the heart of Harare. From laptop repairs and network setups to c...",
    copyright: "Daventech Computers",
  },
};

export default siteData;