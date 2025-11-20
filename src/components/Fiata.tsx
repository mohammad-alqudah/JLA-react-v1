
import fiata from '../assets/fiata-removebg-preview.png';
import { useTranslation } from 'react-i18next';

export default function Fiata() {
  const { t } = useTranslation();
  return (
    <div>
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full mb-6">
               <img
                    src={fiata}
                    alt="FIATA - International  Federation of Freight Forwarders Associations"
                    className="h-20 w-auto mx-auto  p-3 rounded-full"
                  />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('fiata.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('fiata.description')}
            </p>
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fiata from '../assets/fiata-removebg-preview.png';
import { GraduationCap, Award, Globe, Users, TrendingUp, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export default function Fiata() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: { en: 'Globally Recognized', ar: 'معترف به عالمياً' },
      desc: { en: 'FIATA is the world umbrella body for freight forwarding', ar: 'الاتحاد الدولي الرئيسي لوساطة الشحن في العالم' }
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: { en: 'Industry Benchmark', ar: 'معيار صناعي' },
      desc: { en: 'Recognized since 1996 as a mark of professional competence', ar: 'معترف به منذ 1996 كرمز للكفاءة المهنية' }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: { en: 'Expert Trainers', ar: 'مدربون خبراء' },
      desc: { en: 'FIATA-validated instructors with decades of experience', ar: 'مدربون معتمدون من FIATA بخبرات عقود' }
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: { en: 'Career Growth', ar: 'نمو مهني' },
      desc: { en: 'Opens doors to international opportunities', ar: 'يفتح أبواب الفرص الدولية' }
    }
  ];

  const keyFeatures = [
    { en: '15 comprehensive modules covering all freight forwarding aspects', ar: '15 وحدة شاملة تغطي جميع جوانب وساطة الشحن' },
    { en: '4-6 months intensive training in Amman, Jordan', ar: 'تدريب مكثف من 4-6 أشهر في عمّان، الأردن' },
    { en: 'International standards aligned with FIATA requirements', ar: 'معايير دولية متوافقة مع متطلبات FIATA' },
    { en: 'Practical case studies and real-world applications', ar: 'دراسات حالة عملية وتطبيقات واقعية' },
    { en: 'Certificate signed by FIATA President & Director General', ar: 'شهادة موقعة من رئيس والمدير العام لـ FIATA' },
    { en: 'Networking with industry professionals', ar: 'بناء شبكة علاقات مع محترفي القطاع' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50"></div>
              <img
                src={fiata}
                alt="FIATA - International Federation of Freight Forwarders Associations"
                className="h-32 w-auto mx-auto relative z-10"
              />
            </div>
          </div>

          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              {isRTL ? 'الاتحاد الدولي لشركات الشحن' : 'FIATA - International Federation of Freight Forwarders Associations'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {isRTL ? 'دبلوم FIATA في وساطة الشحن' : 'FIATA Diploma in Freight Forwarding'}
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {isRTL ? (
              <>
                تقدم النقابة اللوجستية الأردنية (JLA) دبلوم FIATA المعترف به عالمياً في وساطة الشحن، وهو المؤهل الرائد عالمياً للمهنيين في مجال اللوجستيات والنقل. هذا الدبلوم يزود المتعلمين بالمعرفة والكفاءات اللازمة لإدارة وتنسيق وتنفيذ العمليات اللوجستية المعقدة عبر النقل الجوي والبري والبحري.
              </>
            ) : (
              <>
                The Jordanian Logistics Association (JLA) offers the globally recognized FIATA Diploma in Freight Forwarding,
                the world's leading qualification for logistics and transport professionals. This diploma equips learners with
                the knowledge and competencies required to manage, coordinate, and execute complex logistics operations across
                air, land, and sea transport.
              </>
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/fiata-diploma"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <GraduationCap className="w-6 h-6" />
              {isRTL ? 'اكتشف البرنامج' : 'Explore Program'}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg text-lg"
            >
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-blue-600"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4 text-blue-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {isRTL ? item.title.ar : item.title.en}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {isRTL ? item.desc.ar : item.desc.en}
              </p>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl shadow-2xl p-8 md:p-12 ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">
                {isRTL ? 'لماذا دبلوم FIATA؟' : 'Why FIATA Diploma?'}
              </h3>
              <p className="text-lg mb-8 text-blue-100 leading-relaxed">
                {isRTL ? (
                  <>
                    منذ إطلاقه في عام 1996، حظي دبلوم FIATA باعتراف دولي كرمز للكفاءة المهنية في جميع مجالات عمليات وساطة الشحن. النقابة اللوجستية الأردنية (JLA) هي العضو المعتمد الوحيد في الأردن وواحدة من عدد قليل من الأعضاء المعتمدين في المنطقة العربية لتقديم هذا البرنامج المرموق.
                  </>
                ) : (
                  <>
                    Since its launch in 1996, the FIATA Diploma has gained international recognition as a mark of professional
                    competence across all areas of freight forwarding operations. JLA is the only accredited member in Jordan
                    and one of few accredited members in the Arab Region to deliver this prestigious program.
                  </>
                )}
              </p>

              <div className="flex gap-4">
                <Link
                  to="/jla-member"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {isRTL ? 'JLA كعضو في FIATA' : 'JLA as FIATA Member'}
                </Link>

                <Link
                  to="/experts"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  {isRTL ? 'الخبراء' : 'Our Experts'}
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">
                {isRTL ? 'مميزات رئيسية' : 'Key Features'}
              </h4>
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <p className="text-white text-sm leading-relaxed">
                      {isRTL ? feature.ar : feature.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 grid md:grid-cols-3 gap-6 ${isRTL ? 'rtl' : 'ltr'}`}>
          <Link
            to="/faqs"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              {isRTL ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isRTL ? 'إجابات شاملة لأهم الأسئلة حول البرنامج' : 'Comprehensive answers to common questions about the program'}
            </p>
            <span className="text-green-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
              {isRTL ? 'اقرأ المزيد' : 'Learn More'} <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link
            to="/media-centre"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-orange-500"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              {isRTL ? 'المركز الإعلامي' : 'Media Centre'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isRTL ? 'آخر الأخبار والتحديثات من البرنامج' : 'Latest news and updates from the program'}
            </p>
            <span className="text-orange-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
              {isRTL ? 'شاهد المزيد' : 'View More'} <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <a
            href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {isRTL ? 'مجلة FIATA' : 'FIATA Magazine'}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isRTL ? 'اطلع على أحدث إصدار من مجلة FIATA' : 'Check out the latest FIATA Review magazine'}
            </p>
            <span className="text-purple-600 font-semibold group-hover:gap-3 inline-flex items-center gap-2 transition-all">
              {isRTL ? 'اقرأ الآن' : 'Read Now'} <ExternalLink className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
