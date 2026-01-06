import { Target, TrendingUp, Heart, Lightbulb, CheckCircle, Rocket, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, fadeInScale } from '../utils/animations';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="pt-16">
      <SEO
        title="About Us - Award-Winning Digital Marketing Experts"
        description="Meet Inovix, a leading digital marketing agency with 15+ years of experience. 500+ successful projects, 98% client retention. Discover our mission, values, and proven process for driving business growth."
        keywords="about digital marketing agency, marketing experts, digital agency team, marketing company, award-winning agency, digital marketing professionals"
      />
      <section className="relative min-h-[500px] overflow-hidden bg-blue-900">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="About Inovix"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-3xl">
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" variants={fadeInUp}>
              About Inovix
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-blue-100 leading-relaxed" variants={fadeInUp}>
              We're a passionate team of digital marketing experts dedicated to helping businesses thrive in the digital age. With over 15 years of combined experience, we've helped hundreds of brands achieve their goals.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2009, Inovix was born from a simple yet powerful vision: to help businesses navigate the complex world of digital marketing with clarity, creativity, and measurable results.
                </p>
                <p>
                  What started as a small team of three passionate marketers has grown into a full-service digital agency with over 50 specialists. We've worked with startups finding their footing, established brands looking to innovate, and everything in between.
                </p>
                <p>
                  Our approach has always been rooted in understanding that every business is unique. We don't believe in cookie-cutter solutions. Instead, we take the time to understand your goals, your audience, and your challenges to craft strategies that truly move the needle.
                </p>
                <p>
                  Today, we're proud to be recognized as one of the leading digital marketing agencies, with a portfolio of successful campaigns across diverse industries and a team that's as passionate about your success as you are.
                </p>
              </div>
            </motion.div>
            <motion.div className="relative" variants={fadeInScale}>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="bg-white rounded-2xl p-8 shadow-lg" variants={staggerItem} whileHover={{ y: -8 }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses of all sizes to achieve their full potential through innovative digital marketing strategies, cutting-edge technology, and unwavering commitment to excellence. We're here to transform challenges into opportunities and goals into achievements.
              </p>
            </motion.div>

            <motion.div className="bg-white rounded-2xl p-8 shadow-lg" variants={staggerItem} whileHover={{ y: -8 }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted and innovative digital marketing partner globally, setting new standards for creativity, results, and client success. We envision a future where every business, regardless of size, has access to world-class digital marketing expertise.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { icon: Heart, title: "Client-Centric", description: "Your success is our success. We put your goals at the heart of everything we do." },
              { icon: CheckCircle, title: "Integrity", description: "Honesty and transparency in all our relationships and communications." },
              { icon: Lightbulb, title: "Innovation", description: "Constantly evolving and staying ahead of digital marketing trends." },
              { icon: TrendingUp, title: "Excellence", description: "Delivering outstanding results through expertise and dedication." }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "350+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Our Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How We Drive
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Your Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology combines strategy, creativity, and data to deliver exceptional results at every stage.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-500 transform -translate-x-1/2 hidden lg:block"></div>

            {[
              {
                icon: Target,
                number: "01",
                title: "Discovery & Strategy",
                description: "We dive deep into your business, industry, and goals. Through comprehensive research and competitive analysis, we craft a customized roadmap designed specifically for your success.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Sparkles,
                number: "02",
                title: "Creative Development",
                description: "Our expert team brings your vision to life with compelling content, stunning visuals, and engaging campaigns that resonate with your target audience and reflect your brand identity.",
                gradient: "from-cyan-500 to-blue-600"
              },
              {
                icon: Rocket,
                number: "03",
                title: "Launch & Execute",
                description: "With everything in place, we launch your campaigns across all channels. Our agile approach ensures flawless execution with continuous monitoring and rapid optimization.",
                gradient: "from-blue-600 to-indigo-500"
              },
              {
                icon: TrendingUp,
                number: "04",
                title: "Optimize & Scale",
                description: "Using real-time data and insights, we continuously refine and scale your campaigns. We identify what works, double down on success, and maximize your ROI month after month.",
                gradient: "from-indigo-500 to-cyan-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative mb-16 last:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <motion.div
                      className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
                      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                    >
                      <div className="flex items-center gap-6 mb-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl animate-float`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        <div className={`text-8xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-20`}>
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className={`hidden lg:block ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <img
                        src={`https://images.pexels.com/photos/${index === 0 ? '3184292' :
                          index === 1 ? '3183197' :
                            index === 2 ? '3184465' :
                              '3183150'
                          }/pexels-photo-${index === 0 ? '3184292' :
                            index === 1 ? '3183197' :
                              index === 2 ? '3184465' :
                                '3183150'
                          }.jpeg?auto=compress&cs=tinysrgb&w=800`}
                        alt={step.title}
                        className="rounded-3xl shadow-2xl w-full h-80 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 rounded-3xl`}></div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.gradient} shadow-xl border-4 border-white flex items-center justify-center`}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeInUp}>
              Ready to Work Together?
            </motion.h2>
            <motion.p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" variants={fadeInUp}>
              Let's create something extraordinary. Get in touch to discuss how we can help your business grow.
            </motion.p>
            <motion.button
              onClick={() => navigate('/consultation')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
