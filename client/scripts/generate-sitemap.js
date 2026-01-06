import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://inovix.com.au';

// Data from services.ts
const services = [
    {
        id: '1',
        title: 'SEO',
        slug: 'seo',
        description: 'Boost your organic visibility and dominate search rankings with data-driven SEO strategies.',
        icon: 'Search'
    },
    {
        id: '2',
        title: 'Google Ads',
        slug: 'google-ads',
        description: 'Maximize ROI with targeted Google Ads campaigns that convert clicks into customers.',
        icon: 'Target'
    },
    {
        id: '3',
        title: 'Facebook Ads',
        slug: 'facebook-ads',
        description: 'Reach your ideal audience with high-performing Facebook and Instagram ad campaigns.',
        icon: 'Facebook'
    },
    {
        id: '4',
        title: 'PPC Marketing',
        slug: 'ppc-marketing',
        description: 'Drive immediate results with strategic pay-per-click campaigns across multiple platforms.',
        icon: 'MousePointerClick'
    },
    {
        id: '5',
        title: 'Branding & Design',
        slug: 'branding-design',
        description: 'Create a memorable brand identity that resonates with your audience and stands out.',
        icon: 'Palette'
    },
    {
        id: '6',
        title: 'Web Design & Development',
        slug: 'web-design-development',
        description: 'Build stunning, high-performance websites that deliver exceptional user experiences.',
        icon: 'Globe'
    },
    {
        id: '7',
        title: 'Content Marketing',
        slug: 'content-marketing',
        description: 'Engage your audience with compelling content that drives traffic and builds authority.',
        icon: 'FileText'
    },
    {
        id: '8',
        title: 'Email Marketing',
        slug: 'email-marketing',
        description: 'Nurture leads and drive conversions with personalized email campaigns that deliver results.',
        icon: 'Mail'
    },
    {
        id: '9',
        title: 'Video & Photo Production',
        slug: 'video-photo-production',
        description: 'Captivate your audience with professional photography, videography, and motion graphics.',
        icon: 'Video'
    }
];

// Data from blogPosts.ts
const blogPosts = [
    {
        id: '1',
        title: '10 SEO Strategies That Will Dominate Search Rankings in 2024',
        excerpt: 'Discover the latest SEO tactics that are driving real results in today\'s competitive landscape. From AI-powered optimization to E-E-A-T principles.',
        category: 'SEO',
        author: 'Alex Thompson',
        date: '2024-01-15',
        image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'seo-strategies-2024'
    },
    {
        id: '2',
        title: 'The Ultimate Guide to Google Ads Performance Max Campaigns',
        excerpt: 'Learn how to leverage Google\'s AI-powered Performance Max campaigns to maximize your advertising ROI and reach customers across all Google channels.',
        category: 'Google Ads',
        author: 'Sarah Mitchell',
        date: '2024-01-10',
        image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'google-ads-performance-max-guide'
    },
    {
        id: '3',
        title: 'How to Create Viral Video Content for Social Media Marketing',
        excerpt: 'Master the art of creating engaging video content that captures attention, drives shares, and builds your brand across Instagram, TikTok, and Facebook.',
        category: 'Video Marketing',
        author: 'Marcus Lee',
        date: '2024-01-05',
        image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'viral-video-content-guide'
    },
    {
        id: '4',
        title: 'Branding 101: Building a Brand Identity That Resonates',
        excerpt: 'From logo design to brand voice, discover the essential elements of creating a powerful brand identity that connects with your target audience.',
        category: 'Branding',
        author: 'Emma Rodriguez',
        date: '2023-12-28',
        image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'building-brand-identity'
    },
    {
        id: '5',
        title: 'Facebook Ads vs. Instagram Ads: Which Platform Delivers Better ROI?',
        excerpt: 'A comprehensive comparison of Facebook and Instagram advertising, including cost analysis, audience demographics, and performance benchmarks.',
        category: 'Social Media Ads',
        author: 'David Park',
        date: '2023-12-20',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'facebook-vs-instagram-ads'
    },
    {
        id: '6',
        title: 'Email Marketing Automation: Converting Subscribers into Customers',
        excerpt: 'Unlock the power of email automation with proven workflows, segmentation strategies, and personalization tactics that drive conversions.',
        category: 'Email Marketing',
        author: 'Jennifer Wong',
        date: '2023-12-15',
        image: 'https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'email-marketing-automation'
    },
    {
        id: '7',
        title: 'Content Marketing Strategy: A Complete Guide for 2024',
        excerpt: 'Build a winning content marketing strategy that attracts, engages, and converts your target audience with proven frameworks and actionable tactics.',
        category: 'Content Marketing',
        author: 'Rachel Green',
        date: '2024-01-20',
        image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'content-marketing-strategy-2024'
    },
    {
        id: '8',
        title: 'Instagram Marketing: How to Grow Your Following and Increase Engagement',
        excerpt: 'Learn proven Instagram growth strategies, content ideas, and engagement tactics that will help you build an authentic following and drive business results.',
        category: 'Social Media',
        author: 'Tyler Chen',
        date: '2024-01-18',
        image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'instagram-marketing-growth-guide'
    },
    {
        id: '9',
        title: 'Local SEO: Complete Guide to Ranking in Local Search Results',
        excerpt: 'Master local SEO with our comprehensive guide covering Google Business Profile optimization, local citations, reviews, and location-specific content strategies.',
        category: 'SEO',
        author: 'Michael Santos',
        date: '2024-01-12',
        image: 'https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'local-seo-complete-guide'
    },
    {
        id: '10',
        title: 'LinkedIn Lead Generation: B2B Marketing Strategies That Work',
        excerpt: 'Discover how to use LinkedIn for effective B2B lead generation with proven strategies for content, networking, and LinkedIn Ads that drive quality leads.',
        category: 'B2B Marketing',
        author: 'Amanda Foster',
        date: '2024-01-08',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'linkedin-lead-generation-b2b'
    },
    {
        id: '11',
        title: 'TikTok Marketing: How to Build Your Brand on TikTok in 2024',
        excerpt: 'Learn how to leverage TikTok\'s algorithm, create engaging content, and build a loyal following that translates into real business growth.',
        category: 'Social Media',
        author: 'Jordan Taylor',
        date: '2024-01-03',
        image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'tiktok-marketing-brand-building'
    },
    {
        id: '12',
        title: 'Conversion Rate Optimization: Proven Tactics to Boost Website Conversions',
        excerpt: 'Increase your website conversion rate with data-driven CRO strategies, A/B testing frameworks, and psychological principles that drive action.',
        category: 'CRO',
        author: 'Daniel Kim',
        date: '2023-12-30',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'conversion-rate-optimization-tactics'
    },
    {
        id: '13',
        title: 'Influencer Marketing: How to Find and Work with the Right Influencers',
        excerpt: 'Navigate the world of influencer marketing with strategies for finding authentic influencers, negotiating partnerships, and measuring campaign ROI.',
        category: 'Influencer Marketing',
        author: 'Sophia Martinez',
        date: '2023-12-25',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'influencer-marketing-guide'
    },
    {
        id: '14',
        title: 'Marketing Analytics: Essential Metrics Every Marketer Should Track',
        excerpt: 'Master marketing analytics with our guide to the most important KPIs, tracking tools, and data interpretation strategies for better decision-making.',
        category: 'Analytics',
        author: 'Chris Anderson',
        date: '2023-12-18',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'marketing-analytics-essential-metrics'
    },
    {
        id: '15',
        title: 'Pay-Per-Click Advertising: PPC Best Practices for Maximum ROI',
        excerpt: 'Learn PPC advertising fundamentals, advanced bidding strategies, and campaign optimization techniques that maximize your return on ad spend.',
        category: 'PPC',
        author: 'Nicole Brown',
        date: '2023-12-10',
        image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1200',
        slug: 'ppc-advertising-best-practices'
    }
];

const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/case-studies',
    '/blog',
    '/contact',
    '/consultation',
    '/privacy-policy'
];

const generateSitemap = () => {
    const routes = [
        ...staticRoutes,
        ...services.map(service => `/services/${service.slug}`),
        ...blogPosts.map(post => `/blog/${post.slug}`)
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    const outputPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
