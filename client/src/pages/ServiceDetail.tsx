import { ArrowRight, CheckCircle, BarChart3, Users, Target, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { useParams, useNavigate } from 'react-router-dom';

const serviceDetails: Record<string, {
  tagline: string;
  overview: string;
  benefits: string[];
  process: { step: string; description: string }[];
  deliverables: string[];
}> = {
  'seo': {
    tagline: 'Dominate search rankings and drive organic growth',
    overview: 'Our comprehensive SEO strategies combine technical excellence, content optimization, and authority building to boost your search rankings and drive qualified organic traffic. We focus on sustainable, white-hat techniques that deliver long-term results.',
    benefits: [
      'Increased organic traffic and visibility',
      'Higher search engine rankings',
      'Better user experience and site performance',
      'Improved conversion rates',
      'Long-term sustainable growth',
      'Competitive advantage in your industry'
    ],
    process: [
      { step: 'Discovery & Audit', description: 'Comprehensive analysis of your website, competitors, and current search performance to identify opportunities.' },
      { step: 'Strategy Development', description: 'Custom SEO roadmap based on your goals, target audience, and industry landscape.' },
      { step: 'Technical Optimization', description: 'Fix technical issues, improve site speed, mobile responsiveness, and search engine crawlability.' },
      { step: 'Content & On-Page SEO', description: 'Optimize existing content and create new SEO-optimized content targeting high-value keywords.' },
      { step: 'Link Building', description: 'Strategic outreach and relationship building to earn high-quality backlinks from authoritative sites.' },
      { step: 'Monitoring & Reporting', description: 'Track rankings, traffic, and conversions with regular reports and continuous optimization.' }
    ],
    deliverables: [
      'Comprehensive SEO audit report',
      'Keyword research and strategy document',
      'Technical SEO implementation',
      'Optimized content and meta data',
      'Monthly performance reports',
      'Ongoing strategy recommendations'
    ]
  },
  'google-ads': {
    tagline: 'Maximize ROI with data-driven Google Ads campaigns',
    overview: 'Our Google Ads management delivers immediate visibility and qualified leads through strategic campaign setup, continuous optimization, and advanced targeting. We focus on maximizing your return on ad spend while scaling your business.',
    benefits: [
      'Immediate visibility in search results',
      'Highly targeted audience reach',
      'Complete budget control',
      'Measurable ROI and performance',
      'Quick testing and optimization',
      'Scalable growth'
    ],
    process: [
      { step: 'Account Setup & Strategy', description: 'Establish campaign structure, set goals, define KPIs, and create a comprehensive advertising strategy.' },
      { step: 'Keyword Research', description: 'Identify high-intent keywords and negative keywords to maximize relevance and minimize waste.' },
      { step: 'Ad Creation', description: 'Write compelling ad copy with strong CTAs and create responsive search ads for maximum performance.' },
      { step: 'Landing Page Optimization', description: 'Ensure landing pages are optimized for conversions and aligned with ad messaging.' },
      { step: 'Campaign Launch', description: 'Deploy campaigns with proper tracking, conversion setup, and bid strategies.' },
      { step: 'Optimization & Scaling', description: 'Continuous testing, bid adjustments, and budget optimization to improve performance.' }
    ],
    deliverables: [
      'Campaign structure and strategy document',
      'Ad copy and creative assets',
      'Conversion tracking setup',
      'Weekly performance monitoring',
      'Monthly optimization reports',
      'ROI analysis and recommendations'
    ]
  },
  'facebook-ads': {
    tagline: 'Reach your ideal audience with precision targeting',
    overview: 'Leverage the power of Facebook and Instagram advertising to connect with your target audience. Our data-driven approach combines creative excellence with advanced targeting to drive engagement, leads, and sales.',
    benefits: [
      'Precise audience targeting',
      'Visual storytelling at scale',
      'Cross-platform reach (Facebook & Instagram)',
      'Detailed performance analytics',
      'Cost-effective customer acquisition',
      'Retargeting capabilities'
    ],
    process: [
      { step: 'Audience Research', description: 'Deep dive into your target demographics, interests, behaviors, and custom audiences.' },
      { step: 'Creative Development', description: 'Design eye-catching ad creatives, write compelling copy, and develop video content.' },
      { step: 'Campaign Structure', description: 'Build optimized campaign structure with proper audience segmentation and budget allocation.' },
      { step: 'Pixel & Tracking Setup', description: 'Implement Facebook Pixel, conversion tracking, and integration with your CRM.' },
      { step: 'Testing & Launch', description: 'A/B test multiple ad variations to identify winning combinations.' },
      { step: 'Scale & Optimize', description: 'Scale winning campaigns while continuously testing new audiences and creative.' }
    ],
    deliverables: [
      'Audience targeting strategy',
      'Custom ad creatives and copy',
      'Pixel and conversion tracking',
      'Campaign management dashboard',
      'Bi-weekly performance reports',
      'Creative refresh recommendations'
    ]
  },
  'ppc-marketing': {
    tagline: 'Drive immediate results across all paid channels',
    overview: 'Our comprehensive PPC management spans Google, Bing, social platforms, and display networks. We create integrated paid advertising strategies that maximize your reach, minimize costs, and drive qualified conversions.',
    benefits: [
      'Multi-channel visibility',
      'Immediate traffic generation',
      'Flexible budget allocation',
      'Advanced audience targeting',
      'Real-time performance tracking',
      'Rapid testing and iteration'
    ],
    process: [
      { step: 'Platform Selection', description: 'Identify the most effective paid channels for your business and audience.' },
      { step: 'Competitive Analysis', description: 'Analyze competitor strategies and identify opportunities for differentiation.' },
      { step: 'Campaign Architecture', description: 'Design optimized campaign structures across all selected platforms.' },
      { step: 'Creative & Copy Development', description: 'Develop platform-specific ad creative and messaging.' },
      { step: 'Multi-Platform Launch', description: 'Deploy coordinated campaigns across all channels with proper tracking.' },
      { step: 'Cross-Channel Optimization', description: 'Analyze performance across platforms and optimize budget allocation.' }
    ],
    deliverables: [
      'Multi-channel PPC strategy',
      'Platform-specific ad creative',
      'Unified tracking dashboard',
      'Weekly performance updates',
      'Monthly strategic reviews',
      'Budget allocation recommendations'
    ]
  },
  'branding-design': {
    tagline: 'Create a memorable brand that stands out',
    overview: 'Transform your brand identity with strategic design that resonates with your audience. From logos to complete brand systems, we create cohesive visual identities that tell your story and drive recognition.',
    benefits: [
      'Distinctive brand identity',
      'Increased brand recognition',
      'Professional market presence',
      'Consistent brand experience',
      'Competitive differentiation',
      'Enhanced customer trust'
    ],
    process: [
      { step: 'Brand Discovery', description: 'Understand your values, mission, target audience, and competitive landscape.' },
      { step: 'Strategy Development', description: 'Define brand positioning, personality, and visual direction.' },
      { step: 'Concept Creation', description: 'Develop multiple logo and identity concepts aligned with your brand strategy.' },
      { step: 'Refinement', description: 'Collaborate on revisions to perfect your chosen direction.' },
      { step: 'Brand System Development', description: 'Create comprehensive brand guidelines and supporting materials.' },
      { step: 'Implementation Support', description: 'Guide the rollout of your new brand across all touchpoints.' }
    ],
    deliverables: [
      'Logo design (multiple formats)',
      'Color palette and typography',
      'Brand guidelines document',
      'Business card and stationery design',
      'Social media templates',
      'Brand application examples'
    ]
  },
  'web-design-development': {
    tagline: 'Build stunning websites that convert',
    overview: 'Create high-performance websites that combine beautiful design with flawless functionality. Our development process ensures your site is fast, secure, mobile-responsive, and optimized for conversions.',
    benefits: [
      'Modern, responsive design',
      'Fast loading speeds',
      'SEO-friendly architecture',
      'Secure and scalable',
      'Conversion-optimized',
      'Easy content management'
    ],
    process: [
      { step: 'Planning & Strategy', description: 'Define goals, site map, user flows, and technical requirements.' },
      { step: 'UX/UI Design', description: 'Create wireframes and high-fidelity designs focused on user experience.' },
      { step: 'Development', description: 'Build your site using modern frameworks and best practices.' },
      { step: 'Content Integration', description: 'Add and optimize all content, images, and multimedia.' },
      { step: 'Testing & QA', description: 'Comprehensive testing across devices, browsers, and user scenarios.' },
      { step: 'Launch & Training', description: 'Deploy your site and train your team on content management.' }
    ],
    deliverables: [
      'Custom website design',
      'Responsive development',
      'CMS integration',
      'SEO optimization',
      'Performance optimization',
      'Training documentation'
    ]
  },
  'content-marketing': {
    tagline: 'Engage your audience with compelling content',
    overview: 'Build authority and drive engagement with strategic content marketing. From blog posts to video content, we create valuable content that attracts, engages, and converts your target audience.',
    benefits: [
      'Increased brand authority',
      'Higher organic traffic',
      'Improved audience engagement',
      'Lead generation',
      'Better SEO performance',
      'Thought leadership positioning'
    ],
    process: [
      { step: 'Content Audit', description: 'Analyze existing content and identify gaps and opportunities.' },
      { step: 'Strategy Development', description: 'Create comprehensive content plan aligned with business goals.' },
      { step: 'Content Calendar', description: 'Plan topics, formats, and publishing schedule.' },
      { step: 'Content Creation', description: 'Produce high-quality content optimized for search and engagement.' },
      { step: 'Distribution', description: 'Share content across owned and earned channels.' },
      { step: 'Analysis & Optimization', description: 'Track performance and refine strategy based on data.' }
    ],
    deliverables: [
      'Content strategy document',
      'Editorial calendar',
      'Blog posts and articles',
      'Social media content',
      'Email newsletters',
      'Performance reports'
    ]
  },
  'email-marketing': {
    tagline: 'Nurture leads and drive conversions',
    overview: 'Build meaningful relationships with your audience through strategic email marketing. From automated workflows to compelling campaigns, we help you engage subscribers and drive revenue.',
    benefits: [
      'Direct audience communication',
      'High ROI (avg $42 per $1 spent)',
      'Personalized messaging',
      'Automated nurture sequences',
      'Measurable results',
      'Customer retention'
    ],
    process: [
      { step: 'List Strategy', description: 'Audit existing lists, develop segmentation strategy, and plan growth tactics.' },
      { step: 'Platform Setup', description: 'Configure email platform, integrations, and tracking.' },
      { step: 'Campaign Planning', description: 'Design email calendar and automation workflows.' },
      { step: 'Template Design', description: 'Create branded, mobile-responsive email templates.' },
      { step: 'Content Creation', description: 'Write compelling copy with clear calls-to-action.' },
      { step: 'Testing & Optimization', description: 'A/B test subject lines, content, and send times for maximum performance.' }
    ],
    deliverables: [
      'Email marketing strategy',
      'Custom email templates',
      'Automation workflows',
      'Campaign copywriting',
      'List management',
      'Performance analytics'
    ]
  },
  'video-photo-production': {
    tagline: 'Captivate your audience with visual storytelling',
    overview: 'Create professional video and photography that captures attention and drives engagement. From brand videos to motion graphics, we produce compelling visual content that elevates your marketing.',
    benefits: [
      'Professional brand image',
      'Higher engagement rates',
      'Versatile content assets',
      'Social media ready',
      'Increased conversions',
      'Memorable brand storytelling'
    ],
    process: [
      { step: 'Creative Brief', description: 'Define objectives, messaging, style, and deliverables.' },
      { step: 'Pre-Production', description: 'Concept development, scripting, storyboarding, and logistics planning.' },
      { step: 'Production', description: 'Professional filming and photography on location or in studio.' },
      { step: 'Post-Production', description: 'Editing, color grading, motion graphics, and sound design.' },
      { step: 'Revisions', description: 'Collaborate on edits to perfect the final product.' },
      { step: 'Delivery & Distribution', description: 'Provide files in multiple formats optimized for different channels.' }
    ],
    deliverables: [
      'Professional video production',
      'High-quality photography',
      'Motion graphics and animation',
      'Video editing and post-production',
      'Social media cut-downs',
      'Multi-format file delivery'
    ]
  }
};

const serviceImages: Record<string, string> = {
  'seo': 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'google-ads': 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'facebook-ads': 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'ppc-marketing': 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'branding-design': 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'web-design-development': 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'content-marketing': 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'email-marketing': 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'video-photo-production': 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1920'
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? services.find(s => s.slug === slug) : undefined;
  const details = slug ? serviceDetails[slug] : undefined;

  if (!service || !details) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  const heroImage = slug && serviceImages[slug] ? serviceImages[slug] : 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920';

  return (
    <div className="pt-16">
      <section className="relative min-h-[500px] overflow-hidden bg-blue-900">
        <img
          src={heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white">{service.title}</h1>
              </div>
            </div>
            <p className="text-2xl text-blue-100 mb-8 font-medium animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{details.tagline}</p>
            <button
              onClick={() => navigate('/consultation')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{details.overview}</p>
              <div className="space-y-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">250%</h3>
                <p className="text-gray-600">Avg Growth</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
                <Users className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Clients Served</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 text-center">
                <Zap className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures exceptional results and seamless collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.process.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.step}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What You'll Receive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive deliverables designed to drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {details.deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 animate-fade-in-scale" style={{ animationDelay: `${index * 0.05}s` }}>
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's discuss how our {service.title} services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => navigate('/consultation')}
              className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-2xl hover:-translate-y-1"
            >
              Get Free Consultation
              <ArrowRight className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="border-2 border-white/40 backdrop-blur-md px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
