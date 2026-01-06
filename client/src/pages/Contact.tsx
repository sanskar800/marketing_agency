import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
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
      <SEO
        title="Contact Us - Get Your Free Digital Marketing Consultation"
        description="Ready to transform your digital presence? Contact Inovix for a free consultation. Based in Sydney, Australia. We respond within 24 hours. Call +61 410 592 287 or email info@inovix.com.au. Let's discuss your growth strategy."
        keywords="contact digital marketing agency, free consultation, digital marketing Sydney, marketing agency contact, get in touch, request quote"
      />
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-3xl">
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6" variants={fadeInUp}>
              Let's Start Your Growth Journey
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-blue-100" variants={fadeInUp}>
              Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your goals.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="lg:col-span-2" variants={staggerItem}>
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setResult(null);
                    setLoading(true);
                    const composedMessage = [
                      message,
                      phone ? `\nPhone: ${phone}` : '',
                      company ? `\nCompany: ${company}` : ''
                    ].join('');
                    try {
                      const res = await fetch(`${apiOrigin}/api/contact`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, message: composedMessage, service })
                      });
                      const data = await res.json();
                      if (res.ok && data?.success) {
                        setResult({ ok: true, msg: data.message || 'Message sent successfully.' });
                        setName('');
                        setEmail('');
                        setPhone('');
                        setCompany('');
                        setService('');
                        setMessage('');
                      } else {
                        setResult({ ok: false, msg: data?.message || 'Failed to send message.' });
                      }
                    } catch {
                      setResult({ ok: false, msg: 'Network error. Please try again later.' });
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder="John Doe" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="john@company.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                      <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                      <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Your Company" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Service Interested In *</label>
                    <select value={service} onChange={(e) => setService(e.target.value)} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors">
                      <option value="">Select a service...</option>
                      <option value="seo">SEO</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="facebook-ads">Facebook & Instagram Ads</option>
                      <option value="ppc">PPC Marketing</option>
                      <option value="branding">Branding & Design</option>
                      <option value="web-design">Web Design & Development</option>
                      <option value="content">Content Marketing</option>
                      <option value="email">Email Marketing</option>
                      <option value="video">Video & Photo Production</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Tell Us About Your Project *</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} placeholder="Tell us about your goals, challenges, and what you're looking to achieve..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"></textarea>
                  </div>

                  {result && (
                    <div className={result.ok ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {result.msg}
                    </div>
                  )}
                  <motion.button
                    disabled={loading}
                    type="submit"
                    className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    whileHover={!loading ? { y: -2 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div className="space-y-6" variants={staggerItem}>
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Email Us</div>
                      <a href="mailto:info@inovix.com.au" className="text-blue-100 hover:text-white transition-colors block">info@inovix.com.au</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Call Us</div>
                      <a href="tel:+61410592287" className="text-blue-100 hover:text-white transition-colors block">+61 410 592 287</a>
                      <div className="text-blue-100 text-sm">Mon-Fri 9am-6pm AEST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Location</div>
                      <div className="text-blue-100">Sydney, Australia</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <div className="font-semibold text-gray-900">We Review Your Info</div>
                      <div className="text-sm text-gray-600">Our team analyzes your requirements</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <div className="font-semibold text-gray-900">Schedule a Call</div>
                      <div className="text-sm text-gray-600">We reach out within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <div className="font-semibold text-gray-900">Get Your Strategy</div>
                      <div className="text-sm text-gray-600">Receive a customized plan & proposal</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
