import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItemScale } from '../utils/animations';

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="pt-16">
      <SEO
        title="Digital Marketing Services - SEO, PPC, Social Media & More"
        description="Comprehensive digital marketing services tailored to your success. Expert SEO, Google Ads, Facebook advertising, PPC, branding, web design, content marketing, email campaigns, and video production. Get results-driven strategies."
        keywords="digital marketing services, SEO services, PPC management, social media marketing, Google Ads, Facebook ads, web design services, content marketing, email marketing services"
      />
      <section className="relative min-h-[500px] overflow-hidden bg-blue-900">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Our Services"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" variants={fadeInUp}>
            Our Services
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-blue-100" variants={fadeInUp}>
            Comprehensive digital marketing solutions tailored to your success
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
              return (
                <motion.div
                  key={service.id}
                  className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  variants={staggerItemScale}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(`/services/${service.slug}`)}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button className="text-blue-600 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
