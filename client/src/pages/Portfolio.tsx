import { Grid, Camera, Palette, Code } from 'lucide-react';
import { portfolioItems } from '../data/portfolioItems';
import { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, staggerItemScale } from '../utils/animations';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { name: 'All', icon: Grid },
    { name: 'Branding & Design', icon: Palette },
    { name: 'Web Design', icon: Code },
    { name: 'Photography', icon: Camera }
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-16">
      <SEO
        title="Portfolio - Our Best Work in Branding, Web Design & Photography"
        description="Explore our portfolio of successful digital marketing projects. View our best work in branding & design, web design & development, and professional photography. See how we've helped businesses transform their digital presence."
        keywords="digital marketing portfolio, branding projects, web design portfolio, photography portfolio, case studies, marketing campaigns, design work"
      />
      <section className="relative min-h-[500px] overflow-hidden bg-blue-900">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Our Portfolio"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" variants={fadeInUp}>
            Our Portfolio
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-blue-100" variants={fadeInUp}>
            Showcasing our best work across branding, web design, and photography
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-2 md:gap-3 text-sm md:text-base ${activeFilter === category.name
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:scale-105'
                    }`}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  variants={staggerItemScale}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -12 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-blue-600">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
