import { CheckCircle, ArrowRight, Calendar, Users, BarChart3, Sparkles, Clock, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, fadeInScale, slideInLeft, slideInRight } from '../utils/animations';

export default function Consultation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [serviceInterest, setServiceInterest] = useState('');
  const [challenge, setChallenge] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const apiBase = (
    (typeof import.meta !== 'undefined' && (import.meta as unknown as { env?: { VITE_API_URL?: string } }).env?.VITE_API_URL) ||
    'http://localhost:4000'
  );
  const apiOrigin = String(apiBase)
    .trim()
    .replace(/^['"]|['"]$/g, '')
    .replace(/\/+$/, '');
  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full mb-8 border border-white/20">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <span className="text-sm font-bold">Limited Spots Available This Month</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Get Your Free
                <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                  Strategy Session
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Discover exactly how to grow your business with a personalized digital marketing strategy - completely free, no strings attached.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">60-Minute Deep Dive Session</div>
                    <div className="text-blue-200">Comprehensive analysis of your current marketing efforts</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Custom Growth Strategy</div>
                    <div className="text-blue-200">Tailored recommendations specific to your business goals</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Competitive Analysis Report</div>
                    <div className="text-blue-200">See how you stack up against your competition (Worth $500)</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-200 text-sm">Consultations Done</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$2.5M+</div>
                  <div className="text-blue-200 text-sm">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">4.9★</div>
                  <div className="text-blue-200 text-sm">Average Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Free Session</h2>
                  <p className="text-gray-600">Fill out the form below and we'll be in touch within 24 hours</p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setResult(null);
                    setLoading(true);
                    const msg = [
                      `Consultation Request`,
                      `\nPhone: ${phone}`,
                      company ? `\nCompany: ${company}` : '',
                      serviceInterest ? `\nService Interested In: ${serviceInterest}` : '',
                      `\nChallenge: ${challenge}`
                    ].join('');
                    try {
                      const res = await fetch(`${apiOrigin}/api/contact`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, message: msg, service: 'Consultation' })
                      });
                      const data = await res.json();
                      if (res.ok && data?.success) {
                        setResult({ ok: true, msg: data.message || 'Request submitted successfully.' });
                        setName('');
                        setEmail('');
                        setPhone('');
                        setCompany('');
                        setServiceInterest('');
                        setChallenge('');
                      } else {
                        setResult({ ok: false, msg: data?.message || 'Failed to submit request.' });
                      }
                    } catch {
                      setResult({ ok: false, msg: 'Network error. Please try again later.' });
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Company Name</label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      type="text"
                      placeholder="Your Company"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Service Interested In *</label>
                    <select value={serviceInterest} onChange={(e) => setServiceInterest(e.target.value)} required className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-lg">
                      <option value="">Select a service...</option>
                      <option value="SEO">SEO</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Facebook Ads">Facebook Ads</option>
                      <option value="PPC Marketing">PPC Marketing</option>
                      <option value="Branding & Design">Branding & Design</option>
                      <option value="Web Design & Development">Web Design & Development</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Video & Photo Production">Video & Photo Production</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Biggest Challenge *</label>
                    <textarea
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      required
                      rows={4}
                      placeholder="Tell us about your biggest marketing challenge..."
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all text-lg"
                    ></textarea>
                  </div>

                  {result && (
                    <div className={result.ok ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {result.msg}
                    </div>
                  )}
                  <button
                    disabled={loading}
                    type="submit"
                    className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Submitting...' : 'Book My Free Session'}
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </div>

              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Happens During Your Consultation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 60-minute session designed to understand your business and create a winning strategy
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={staggerItem} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, target audience, and current marketing efforts
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analysis</h3>
              <p className="text-gray-600">
                We analyze your market position, competitors, and identify quick wins and growth opportunities
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="text-6xl font-bold text-gray-200 mb-4">03</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                We present a customized growth strategy with specific tactics and expected results
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
              <div className="text-6xl font-bold text-gray-200 mb-4">04</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Next Steps</h3>
              <p className="text-gray-600">
                We outline clear action items you can implement immediately, with or without us
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Inovix?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another agency - we're your growth partners
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Obligation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our consultation is genuinely free. No pressure, no sales pitch. Just honest advice to help your business grow.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Most clients see measurable improvements within 30-60 days. We focus on quick wins while building long-term success.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with specialists who have generated over $50M in revenue for clients across diverse industries.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInScale}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Success stories"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Results From Real Businesses
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Don't just take our word for it. Our consultation process has helped hundreds of businesses identify and fix critical marketing gaps.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">E-commerce Store</div>
                    <div className="text-gray-600">Increased revenue by 340% in 6 months after implementing our strategy</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">SaaS Company</div>
                    <div className="text-gray-600">Generated 1,200+ qualified leads and $2.8M pipeline in first quarter</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Local Service Business</div>
                    <div className="text-gray-600">Achieved #1 rankings for 45 local keywords, 600+ new customers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full mb-8 border border-white/20">
              <Calendar className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-bold">Only 5 Consultation Spots Left This Week</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Book your free strategy session now and discover your business's true growth potential. No risk, no obligation, just results-focused insights.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-12 py-6 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-2xl hover:-translate-y-1"
            >
              Book Your Free Session Now
              <ArrowRight className="w-7 h-7" />
            </button>

            <p className="text-blue-200 mt-6">
              💯 100% Free • 🚀 No Commitment • ⚡ Instant Value
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
