import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonical?: string;
}

export default function SEO({
    title,
    description,
    keywords = 'digital marketing, web design, branding, SEO services, social media marketing',
    ogImage = '/og-image.jpg',
    ogType = 'website',
    canonical
}: SEOProps) {
    const location = useLocation();
    const siteUrl = 'https://inovix.com.au/'; // Update with your actual domain
    const fullUrl = canonical || `${siteUrl}${location.pathname}`;
    const fullTitle = `${title} | Digital Marketing Agency`;

    useEffect(() => {
        // Update document title
        document.title = fullTitle;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Standard meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Open Graph tags
        updateMetaTag('og:title', fullTitle, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:image', `${siteUrl}${ogImage}`, true);
        updateMetaTag('og:site_name', 'Digital Marketing Agency', true);

        // Twitter Card tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', fullTitle);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', `${siteUrl}${ogImage}`);

        // Canonical URL
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', fullUrl);

    }, [title, description, keywords, ogImage, ogType, fullUrl, fullTitle]);

    return null;
}
