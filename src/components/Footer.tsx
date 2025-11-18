import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, X, Instagram } from 'lucide-react';
import { t, use } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo (1).png" 
                alt="Jordanian Logistics Association" 
                className="h-10 w-auto"
              />
              <div className='px-2'>
                <h3 className="text-lg font-bold">Jordanian Logistics Association</h3>
                <p className="text-sm text-gray-400">النقابة اللوجستية الأردنية</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('footer')}
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Quick Links')}</h4>
            <ul className="space-y-2">
              <li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link to="/all-news" className="text-gray-300 hover:text-white transition-colors">
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  {t(' Login')}
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  {t('Register')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactUs')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Amman, Jordan</p>
                  <p className="text-gray-300">King Abdullah II Street</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-300">+962 6 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-gray-300">info@jla.jo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Jordanian Logistics Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
