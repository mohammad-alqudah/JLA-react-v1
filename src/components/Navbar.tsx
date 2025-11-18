import { Menu, X, LogIn, UserPlus, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { user, signOut } = useAuth();
  const location = useLocation();

  const navItems = ['الرئيسية', 'الدورات', 'الأخبار', 'اتصل بنا'];
  const navItemsMap: { [key: string]: string } = {
    'الرئيسية': 'home',
    'الدورات': 'courses',
    'الأخبار': 'news',
    'اتصل بنا': 'contact'
  };

  const scrollToSection = (section: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${navItemsMap[section]}`;
      return;
    }
    const element = document.getElementById(navItemsMap[section]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleSignOut = async () => {
    // await signOut();
    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/logo (1).png" alt="Jordanian Logistics Association" className="h-12" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-reverse space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-600 hover:text-red-600 px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 mr-4">
              {/* {user ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg">
                    <User size={18} className="text-slate-600" />
                    <span className="text-sm text-slate-600">{user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <LogOut size={18} />
                    <span>تسجيل الخروج</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 transition-colors duration-200"
                  >
                    <LogIn size={18} />
                    <span>تسجيل الدخول</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200"
                  >
                    <UserPlus size={18} />
                    <span>التسجيل كعضو</span>
                  </Link>
                </>
              )} */}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-600 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
            <div className="border-t pt-2 space-y-2">
              {false ? (
                <>
                  <div className="px-3 py-2 bg-slate-100 rounded-lg">
                    <div className="flex items-center gap-2">
                      <User size={18} className="text-slate-600" />
                      <span className="text-sm text-slate-600">{/*user.email*/}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <LogOut size={18} />
                    <span>تسجيل الخروج</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 transition-colors duration-200 border border-slate-300 rounded-lg"
                  >
                    <LogIn size={18} />
                    <span>تسجيل الدخول</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200"
                  >
                    <UserPlus size={18} />
                    <span>التسجيل كعضو</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
