import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/logo (1).png" alt="Jordanian Logistics Association" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-slate-400">
              نقدم التميز من خلال الابتكار والتفاني لعملائنا في جميع أنحاء العالم.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors duration-200">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#courses" className="text-slate-400 hover:text-white transition-colors duration-200">
                  الدورات
                </a>
              </li>
              <li>
                <a href="#news" className="text-slate-400 hover:text-white transition-colors duration-200">
                  الأخبار
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-red-600 p-2 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-red-600 p-2 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-red-600 p-2 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-green-600 p-2 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 النقابة اللوجستية الأردنية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
