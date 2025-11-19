// import { Menu, X, LogIn, UserPlus, LogOut, User } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Link, useLocation } from 'react-router-dom';

// // import { useAuth } from '../contexts/AuthContext';

// export default function Navbar() {
//    const [language, setLanguage] = useState("ar")
//   const { t , i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   // const { user, signOut } = useAuth();
//   const location = useLocation();

//   const navItems = [t('home'),t('courses'),t('news'),t('contactUs')];
//   const navItemsMap: { [key: string]: string } = {
//     home:t('home'),
//      courses: t('courses'),
//     news:t('news'),
//     contact:t('contactUs')
//   };
//   const changeLanguage = () => {
//     if (language == "en") {
//       setLanguage("ar");
//       i18n.changeLanguage("ar");
//     }else{
//       setLanguage("en");
//       i18n.changeLanguage("en");
//     }
    
//     console.log(language)
    
//     document.dir = language === 'ar' ? 'rtl' : 'ltr';
//   };
//   useEffect(()=>{
//     i18n.changeLanguage(language);
//   },[])

//  
//     const element = document.getElementById(navItemsMap[section]);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsOpen(false);
//     }
//   };

//   const handleSignOut = async () => {
//     // await signOut();
//     window.location.href = '/';
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0">
//             <img src="/logo (1).png" alt="Jordanian Logistics Association" className="h-12" />
//           </div>

//           <div className="hidden md:flex items-center gap-4">
//             <div className="flex items-baseline space-x-reverse space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className="text-slate-600 hover:text-red-600 px-3 py-2 text-base font-medium transition-colors duration-200"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <div className="flex items-center gap-2 mr-4">
//               {true ? (
//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg">
//                     <User size={18} className="text-slate-600" />
//                     <span className="text-sm text-slate-600">user@gmail.com</span>
//                   </div>
//                   <button
//                     onClick={handleSignOut}
//                     className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
//                   >
//                     <LogOut size={18} />
//                     <span>{t('signOut')}</span>
//                   </button>
                
//                    <button onClick={() => changeLanguage()} className=" px-2 py-1 bg-slate-100 rounded-lg ">
//                     {language=="en"?"Arabic":"الإنجليزية"}

//                    </button>
                  
                
//                  {/* {language=="en"&& <button className=" px-2 py-1 bg-slate-100 rounded-lg " onClick={() => changeLanguage('en')} >English</button>} */}
                  
//                 </div>
                
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 transition-colors duration-200"
//                   >
//                     <LogIn size={18} />
//                     <span>تسجيل الدخول</span>
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200"
//                   >
//                     <UserPlus size={18} />
//                     <span>التسجيل كعضو</span>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="text-slate-600 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left"
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="border-t pt-2 space-y-2">
//               {false ? (
//                 <>
//                   <div className="px-3 py-2 bg-slate-100 rounded-lg">
//                     <div className="flex items-center gap-2">
//                       <User size={18} className="text-slate-600" />
//                       <span className="text-sm text-slate-600">{/*user.email*/}</span>
//                     </div>
//                   </div>
//                   <button
//                     onClick={handleSignOut}
//                     className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
//                   >
//                     <LogOut size={18} />
//                     <span>{t('signOut')}</span>
//                   </button>
                  
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:text-red-600 transition-colors duration-200 border border-slate-300 rounded-lg"
//                   >
//                     <LogIn size={18} />
//                     <span>تسجيل الدخول</span>
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="flex items-center justify-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200"
//                   >
//                     <UserPlus size={18} />
//                     <span >التسجيل كعضو</span>
//                   </Link>
                  
    
//                   <button onClick={() => changeLanguage()} className=" w-full gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200  ">
//                     {language=="en"?"Arabic":"الإنجليزية"}

//                    </button>
//                 </>
                
                
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut , ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpeg';




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
 
  const [language, setLanguage] = useState("ar")
  const location = useLocation();
  const { t, i18n } = useTranslation();
 
//    const [language, setLanguage] = useState("ar")
//   const { t , i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
//   // const { user, signOut } = useAuth();
//   const location = useLocation();

//   const navItems = [t('home'),t('courses'),t('news'),t('contactUs')];
  const navItemsMap: { [key: string]: string } = {
    home:t('home'),
     courses: t('courses'),
    news:t('news'),
    contact:'contactUs'
  };

 const navigation = [
    { name: 'header.home', href: '/' },
    { name: 'header.about', href: '/about' },
    { name: 'FIATA', href: '/fiata' },
  ];

  const moreNavigation = [
    { name: 'FIATA Diploma', href: '/fiata-diploma' },
    { name: 'Experts', href: '/experts' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'header.news', href: '/all-news' },
    { name: 'Media Centre', href: '/media-centre' },
    { name: 'header.contact', href: '/contact' },
  ];
  const allNavigation = [
    { name: 'header.home', href: '/' },
    { name: 'header.about', href: '/about' },
    { name: 'FIATA', href: '/fiata' },
    { name: 'FIATA Diploma', href: '/fiata-diploma' },
    { name: 'Experts', href: '/experts' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'header.news', href: '/all-news' },
    { name: 'header.contact', href: '/contact' },
  ];


   const memberNavigation = [
    { name: 'header.dashboard', href: '/member-dashboard' },
    { name: 'header.directory', href: '/member-directory' },
    { name: 'header.resources', href: '/member-resources' },
  ];

  const isActive = (path: string) => location.pathname === path;
    const changeLanguage = () => {
    if (language == "en") {
      setLanguage("ar");
      i18n.changeLanguage("ar");
    }else{
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  }


 const scrollToSection = (section: any) => {
  const id = navItemsMap[section];
  if (!id) return; // Prevent errors if the key doesn't exist

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  }
};

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt={t("header.associationName")} className="h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xs lg:text-sm font-semibold text-gray-900"> 
                {t("header.associationName")}
              </h1>
              <p className="text-sm text-gray-600">{t("header.associationArabic")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-2">
            {allNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-2 text-xs  font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
            
            {false? (
           <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
                {memberNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-green-600 border-b-2 border-green-600'
                        : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {t(item.name)}
                  </Link>
                ))}
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700">{t("header.memberName")}</span>
                  <button
                    // onClick={logout}
                    className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                    title={t("header.logout")}
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/member-login"
                className="ml-8 bg-red-600 text-white px-2 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                {t("header.memberLogin")}
              </Link>
            )}
              <button onClick={() => changeLanguage()} className=" text-sm font-medium px-1 py-2 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200  ">
                    {language=="en"?"العربيه":"English"}
                  </button>
          </nav>

          {/* Mobile Navigation */}
         <div className="lg:hidden flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-1 text-xs md:text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-red-600 bg-red-50 rounded'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
             <button onClick={() => changeLanguage()} className=" text-xs px-1 py-1 text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors duration-200  ">                     {language=="en"?"Arabic":"الإنجليزية"}
                   </button>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center px-2 py-1 text-xs  text-gray-700 hover:text-red-600"
              >
                {t("header.more")}
                <ChevronDown
                  className={`h-3 w-3 ml-1 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMoreOpen && (
                <div className="absolute left-3 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  {moreNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-2 text-sm ${
                        isActive(item.href)
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {t(item.name)}
                    </Link>
                  ))}

                  {false ? (
                    <>
                      <div className="border-t my-2"></div>
                      <div className="px-4 py-2 text-xs text-gray-500 font-medium">
                        {t("header.memberArea")}
                      </div>

                      {memberNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`block px-4 py-2 text-sm ${
                            isActive(item.href)
                              ? 'text-green-600 bg-green-50'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsMoreOpen(false)}
                        >
                          {t(item.name)}
                        </Link>
                      ))}

                      <button
                        onClick={() => {
                          // logout();
                          setIsMoreOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        {t("header.logout")}
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="border-t my-2"></div>
                      <Link
                        to="/member-login"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {t("header.memberLogin")}
                      </Link>
                    </>
                  )}
                </div>
              )}
             
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;