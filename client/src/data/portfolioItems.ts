import branding1 from '../assets/branding1.jpg';
import branding2 from '../assets/branding2.png';
import branding3 from '../assets/branding3.png';
import branding4 from '../assets/branding4.png';
import branding5 from '../assets/branding5.png';
import branding6 from '../assets/branding6.png';
import branding7 from '../assets/branding7.png';
import website1 from '../assets/website1.jpg';
import website2 from '../assets/website2.jpg';
import website3 from '../assets/website3.jpg';
import website5 from '../assets/website5.jpg';
import website6 from '../assets/website6.png';
import website7 from '../assets/website7.png';
import website8 from '../assets/website8.png';
import photography1 from '../assets/photography1.jpg';
import photography2 from '../assets/photography2.jpg';
import photography3 from '../assets/photography3.jpg';
import photography4 from '../assets/photography4.jpg';
import photography5 from '../assets/photography5.jpg';
import photography6 from '../assets/photography6.jpg';
import photography7 from '../assets/photography7.jpg';

export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Branding & Design' | 'Web Design' | 'Photography';
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Branding & Design
  {
    id: 1,
    title: "Modern Brand Identity",
    category: "Branding & Design",
    image: branding1,
    description: "Complete brand identity design with logo, color palette, and brand guidelines"
  },
  {
    id: 2,
    title: "Creative Brand Design",
    category: "Branding & Design",
    image: branding2,
    description: "Innovative branding solution with unique visual identity and messaging"
  },
  {
    id: 3,
    title: "Corporate Branding",
    category: "Branding & Design",
    image: branding3,
    description: "Professional corporate brand identity with cohesive design elements"
  },
  {
    id: 4,
    title: "Startup Brand Package",
    category: "Branding & Design",
    image: branding4,
    description: "Fresh and modern branding for emerging startups and new ventures"
  },
  {
    id: 5,
    title: "Luxury Brand Identity",
    category: "Branding & Design",
    image: branding5,
    description: "Premium branding design for high-end products and services"
  },
  {
    id: 6,
    title: "Brand Refresh",
    category: "Branding & Design",
    image: branding6,
    description: "Complete brand redesign and modernization for established businesses"
  },
  {
    id: 7,
    title: "Minimalist Branding",
    category: "Branding & Design",
    image: branding7,
    description: "Clean and sophisticated brand identity with minimalist design approach"
  },

  // Web Design
  {
    id: 8,
    title: "Portfolio Website",
    category: "Web Design",
    image: website1,
    description: "Clean and modern portfolio website showcasing creative work"
  },
  {
    id: 9,
    title: "Shopify Website",
    category: "Web Design",
    image: website2,
    description: "Custom Shopify e-commerce store with seamless shopping experience"
  },
  {
    id: 10,
    title: "Business Website",
    category: "Web Design",
    image: website3,
    description: "Professional corporate website with modern design and functionality"
  },
  {
    id: 11,
    title: "E-commerce Website",
    category: "Web Design",
    image: website5,
    description: "Full-featured online store with integrated payment and inventory management"
  },
  {
    id: 12,
    title: "SaaS Platform",
    category: "Web Design",
    image: website6,
    description: "Modern SaaS website with user-friendly interface and dashboard"
  },
  {
    id: 13,
    title: "Landing Page Design",
    category: "Web Design",
    image: website7,
    description: "High-converting landing page with compelling design and clear CTAs"
  },
  {
    id: 14,
    title: "Agency Website",
    category: "Web Design",
    image: website8,
    description: "Creative agency website with bold design and interactive elements"
  },

  // Food Photography
  {
    id: 15,
    title: "Gourmet Plating",
    category: "Photography",
    image: photography1,
    description: "Elegant fine dining presentation with artistic plating techniques"
  },
  {
    id: 16,
    title: "Dessert Delights",
    category: "Photography",
    image: photography2,
    description: "Mouth-watering dessert photography for bakery and cafe menus"
  },
  {
    id: 17,
    title: "Fresh Ingredients",
    category: "Photography",
    image: photography3,
    description: "Vibrant food photography highlighting fresh, organic ingredients"
  },
  {
    id: 18,
    title: "Culinary Artistry",
    category: "Photography",
    image: photography4,
    description: "Professional food styling and photography for restaurant marketing"
  },
  {
    id: 19,
    title: "Breakfast Spread",
    category: "Photography",
    image: photography5,
    description: "Appetizing breakfast photography perfect for cafe and brunch menus"
  },
  {
    id: 20,
    title: "Street Food",
    category: "Photography",
    image: photography6,
    description: "Dynamic street food photography capturing authentic culinary experiences"
  },
  {
    id: 21,
    title: "Fine Dining Experience",
    category: "Photography",
    image: photography7,
    description: "Luxury dining photography for upscale restaurant branding"
  }
];
