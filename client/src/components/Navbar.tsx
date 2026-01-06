import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { services } from '../data/services';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClose = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo(0, 0);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              navigate('/');
              handleLinkClose();
            }}
          >
            <img
              src="/Finalized-Inovix-Logo-01-scaled-e1747393859272.png"
              alt="Inovix Logo"
              className="h-8 md:h-10 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavLink
              to="/"
              onClick={handleLinkClose}
              className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleLinkClose}
              className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About Us
            </NavLink>

            <div className="relative group">
              <button
                className={`font-medium transition-colors flex items-center gap-1 ${
                  isServicesActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-[520px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
                <div className="p-4">
                  <Link
                    to="/services"
                    onClick={handleLinkClose}
                    className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl transition-all font-bold border-b border-gray-200 mb-3 hover:shadow-sm group/all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base">View All Services</span>
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover/all:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {services.map((service) => {
                      const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
                      return (
                        <Link
                          to={`/services/${service.slug}`}
                          onClick={handleLinkClose}
                          key={service.id}
                          className="group/item w-full text-left px-3 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-lg transition-all"
                        >
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4 text-blue-600 group-hover/item:scale-110 transition-transform flex-shrink-0" />
                            <div className="font-semibold text-sm text-gray-900 group-hover/item:text-blue-600 transition-colors">
                              {service.title}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/portfolio"
              onClick={handleLinkClose}
              className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/case-studies"
              onClick={handleLinkClose}
              className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/blog"
              onClick={handleLinkClose}
              className={({ isActive }) => `font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Blog
            </NavLink>
            <Link
              to="/contact"
              onClick={handleLinkClose}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                onClick={handleLinkClose}
                className={({ isActive }) => `text-left font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={handleLinkClose}
                className={({ isActive }) => `text-left font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
              >
                About Us
              </NavLink>

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center gap-1 font-medium ${
                    isServicesActive ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/services"
                      onClick={handleLinkClose}
                      className="block text-left text-gray-600 hover:text-blue-600 py-1"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={handleLinkClose}
                        className="block text-left text-gray-600 hover:text-blue-600 py-1"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/portfolio"
                onClick={handleLinkClose}
                className={({ isActive }) => `text-left font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/case-studies"
                onClick={handleLinkClose}
                className={({ isActive }) => `text-left font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
              >
                Case Studies
              </NavLink>
              <NavLink
                to="/blog"
                onClick={handleLinkClose}
                className={({ isActive }) => `text-left font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
              >
                Blog
              </NavLink>
              <Link
                to="/contact"
                onClick={handleLinkClose}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium text-left"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
