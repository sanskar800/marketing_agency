import { ArrowRight, Star, ChevronDown, CheckCircle, Target, Sparkles, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useState, useEffect } from 'react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import BlogHome from '../components/BlogHome';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, fadeInScale, staggerItemScale } from '../utils/animations';

import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const featuredServices = services.slice(0, 4);

  const faqs = [
    {
      question: "What makes Inovix different from other digital marketing agencies?",
      answer: "We combine data-driven strategies with creative excellence. Our team focuses on measurable ROI, transparent reporting, and personalized strategies tailored to your unique business goals. We're not just service providers - we're growth partners committed to your long-term success."
    },
    {
      question: "How long does it take to see results?",
      answer: "Timeline varies by service. PPC campaigns can show results within 2-4 weeks, while SEO typically takes 3-6 months for significant impact. Social media campaigns show engagement within days but audience growth takes consistency. We provide detailed timelines during our initial consultation and keep you updated with regular performance reports."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Absolutely! We've successfully partnered with startups, mid-sized companies, and enterprise brands across Australia and internationally. Our scalable solutions are designed to fit your budget while delivering maximum impact, regardless of your business size or industry."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across diverse industries including e-commerce, healthcare, technology, finance, real estate, hospitality, professional services, retail, and education. Our adaptable approach and industry research allow us to quickly understand your unique market dynamics and competition."
    },
    {
      question: "How do you measure success?",
      answer: "We define success metrics with you upfront based on your business goals - whether it's ROI, qualified leads, website traffic, conversions, brand awareness, or customer acquisition cost. You'll receive comprehensive monthly reports with clear KPIs, actionable insights, and transparent communication about campaign performance."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing based on your specific needs, goals, and budget. After understanding your requirements during a free consultation, we provide a customized proposal with transparent pricing and no hidden fees. We offer both project-based and monthly retainer options to suit different business models."
    },
    {
      question: "Do you offer ongoing support and optimization?",
      answer: "Yes! Digital marketing requires continuous monitoring and optimization. All our packages include ongoing performance analysis, A/B testing, strategy refinement, and regular reporting. We're always available for questions and provide dedicated account management to ensure your campaigns stay optimized."
    },
    {
      question: "What tools and platforms do you use?",
      answer: "We use industry-leading tools including Google Ads, Facebook Ads Manager, Google Analytics, SEMrush, Ahrefs, Hootsuite, Mailchimp, HubSpot, and many more. We stay current with the latest marketing technologies and select the best tools for each client's specific needs and goals."
    },
    {
      question: "Can you work with my existing marketing team?",
      answer: "Absolutely! We're experienced at collaborating with in-house marketing teams. We can complement your team's efforts, handle overflow work, provide specialized expertise, or manage specific channels while your team focuses on other priorities. We're flexible and adapt to your preferred working style."
    },
    {
      question: "What's included in your free consultation?",
      answer: "Our free consultation includes a thorough audit of your current digital presence, competitor analysis, identification of growth opportunities, custom strategy recommendations, and a transparent proposal with no obligations. It's a risk-free way to see how we can help grow your business."
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Digital Marketing Agency - SEO, PPC, Social Media & Web Design"
        description="Transform your business with data-driven digital marketing strategies. Expert SEO, PPC, social media marketing, web design, and branding services. 500+ successful projects, 98% client retention. Get your free consultation today."
        keywords="digital marketing agency, SEO services, PPC advertising, social media marketing, web design, branding, content marketing, email marketing, online marketing, digital strategy"
      />
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-10"
            poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="https://cdn.coverr.co/videos/coverr-business-team-working-together-6663/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-indigo-900/90 to-cyan-950/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-600/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-6 py-3.5 rounded-full mb-8 border border-cyan-400/30 shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">Leading Digital Marketing Agency</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.15]"
              >
                <span className="text-white">Accelerate Your</span>
                <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                  Digital Growth
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-blue-100/90 mb-12 leading-relaxed max-w-2xl"
              >
                Transform your brand with innovative strategies that drive real results. From SEO to social media, we deliver 360° digital marketing excellence.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 mb-16"
              >
                <button
                  onClick={() => navigate('/consultation')}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-2 text-lg overflow-hidden whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative">Get Free Consultation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative" />
                </button>
                <button
                  onClick={() => navigate('/services')}
                  className="group relative border-2 border-white/40 backdrop-blur-xl px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-500 flex items-center justify-center gap-3 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 text-lg hover:border-white/60 whitespace-nowrap"
                >
                  <Rocket className="w-6 h-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform" />
                  <span>Explore Services</span>
                </button>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 md:gap-10 pt-12 border-t border-white/20"
              >
                <motion.div variants={staggerItem} className="group cursor-default">
                  <div className="text-4xl md:text-6xl font-black mb-3 bg-gradient-to-br from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-blue-100 text-xs md:text-base font-semibold uppercase tracking-wide">Projects<br className="sm:hidden" /> Delivered</div>
                </motion.div>
                <motion.div variants={staggerItem} className="group cursor-default">
                  <div className="text-4xl md:text-6xl font-black mb-3 bg-gradient-to-br from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">98%</div>
                  <div className="text-blue-100 text-xs md:text-base font-semibold uppercase tracking-wide">Client<br className="sm:hidden" /> Retention</div>
                </motion.div>
                <motion.div variants={staggerItem} className="group cursor-default">
                  <div className="text-4xl md:text-6xl font-black mb-3 bg-gradient-to-br from-cyan-300 via-blue-200 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-blue-100 text-xs md:text-base font-semibold uppercase tracking-wide">Years<br className="sm:hidden" /> Experience</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Team collaboration"
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-600/20 to-transparent group-hover:from-cyan-600/60 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-lg">Team Collaboration</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500">
                    <img
                      src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Digital strategy"
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/60 via-cyan-600/20 to-transparent group-hover:from-blue-600/60 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-lg">Digital Strategy</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-16">
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500">
                    <img
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Marketing analytics"
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/60 via-indigo-600/20 to-transparent group-hover:from-blue-600/60 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-lg">Marketing Analytics</p>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
                    <img
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Creative design"
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/60 via-cyan-600/20 to-transparent group-hover:from-indigo-600/60 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-bold text-lg">Creative Design</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Inovix
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just run campaigns—we build growth engines that transform businesses and deliver measurable, lasting impact.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <motion.div variants={staggerItemScale} className="md:col-span-2 lg:row-span-2 group">
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-10 h-full shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-300 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-white">
                    Data-Driven Results
                  </h3>
                  <p className="text-xl text-blue-100 leading-relaxed mb-8">
                    Every strategy backed by deep analytics, market research, and proven methodologies for maximum ROI.
                  </p>
                  <div className="mt-auto grid grid-cols-2 gap-6 pt-8 border-t border-white/30">
                    <div>
                      <div className="text-4xl font-black text-white mb-2">340%</div>
                      <div className="text-blue-100 text-sm">Avg ROI Increase</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-white mb-2">500+</div>
                      <div className="text-blue-100 text-sm">Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {[
              {
                icon: Sparkles,
                title: "Expert Team",
                description: "Certified specialists with 15+ years of experience across all digital marketing disciplines.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "500+ successful campaigns delivered with excellence and measurable results.",
                gradient: "from-blue-600 to-indigo-500",
              },
              {
                icon: Rocket,
                title: "Agile Execution",
                description: "Rapid implementation with continuous optimization for faster results.",
                gradient: "from-cyan-600 to-blue-600",
              },
              {
                icon: Icons.TrendingUp,
                title: "Scalable Growth",
                description: "Strategies that grow with your business from startup to enterprise.",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: Icons.Award,
                title: "Award-Winning",
                description: "Industry leaders with 98% client retention and multiple awards.",
                gradient: "from-indigo-500 to-cyan-500",
              },
              {
                icon: Icons.Shield,
                title: "Transparent Reporting",
                description: "Clear KPIs and regular updates so you always know your ROI.",
                gradient: "from-cyan-500 to-blue-600",
              }
            ].map((item, index) => (
              <motion.div variants={staggerItemScale} key={index} className="group">
                <div className="relative bg-white rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <button
              onClick={() => navigate('/about')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-3"
            >
              Learn More About Us
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business With
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Our Expert Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand and drive measurable growth
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {featuredServices.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <motion.div
                  key={service.id}
                  variants={staggerItem}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/services/${service.slug}`)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500 transform translate-x-32 -translate-y-32"></div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-4 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <button
              onClick={() => navigate('/services')}
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-12 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-500 inline-flex items-center gap-3 text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Explore All Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-bold text-white uppercase tracking-wide">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Client Success
              <span className="block mt-2">Stories</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real results from real clients. See how we've transformed businesses across industries.
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="transition-transform duration-500 ease-in-out">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInScale}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl"
                >
                  <div className="flex gap-2 mb-8 justify-center">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed text-center italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div className="flex items-center justify-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-2xl">{testimonials[currentTestimonial].name}</div>
                      <div className="text-blue-200 text-lg">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all ${index === currentTestimonial
                      ? 'w-12 h-3 bg-white rounded-full'
                      : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-xl"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BlogHome />

      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about working with Inovix
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {faqs.map((faq, index) => (
              <motion.div variants={staggerItem} key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 mt-1 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Let's create a customized digital marketing strategy that drives real growth. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/consultation')}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl hover:-translate-y-1 text-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="border-2 border-white/40 backdrop-blur-md px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg"
              >
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
