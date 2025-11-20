import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  BookOpen,
  Clock,
  MapPin,
  Target,
  Award,
  Users,
  FileText,
  Download,
  ExternalLink,
  CheckCircle,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function FIATADiploma() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const modules = [
    {
      en: 'Introduction to Freight Forwarding and Logistics Services',
      ar: 'مقدمة في وساطة الشحن وخدمات اللوجستيات'
    },
    {
      en: 'Land, Sea, Air, and Rail Transportation',
      ar: 'النقل البري، البحري، الجوي، والسككي'
    },
    {
      en: 'Supply Chain Management and Logistics Services',
      ar: 'إدارة سلسلة التوريد وخدمات اللوجستيات'
    },
    {
      en: 'Customs Procedures and Clearance',
      ar: 'إجراءات وتخليص الجمارك'
    },
    {
      en: 'Shipping Documents and International Trade',
      ar: 'مستندات الشحن والتجارة الدولية'
    },
    {
      en: 'Cargo Insurance and Risk Management',
      ar: 'تأمين البضائع وإدارة المخاطر'
    }
  ];

  const learningObjectives = [
    {
      en: 'Gain foundational knowledge of freight forwarding, global logistics organizations, and company operations',
      ar: 'اكتساب معرفة أساسية بوساطة الشحن، والمنظمات العالمية العاملة في مجال الخدمات اللوجستية، وآليات عمل الشركات'
    },
    {
      en: 'Understand international transport systems, including sea, air, road, rail, inland waterways, and multimodal networks',
      ar: 'فهم نظم النقل الدولية، بما يشمل النقل البحري والجوي والبري والسككي والنهري، إضافة إلى الشبكات متعددة الوسائط'
    },
    {
      en: 'Navigate global regulations and compliance, including customs procedures, safety standards, and legal frameworks',
      ar: 'الإلمام بالأنظمة والتشريعات العالمية، بما في ذلك إجراءات الجمارك، ومعايير السلامة، والأطر القانونية المنظمة'
    },
    {
      en: 'Master essential transport documentation, such as waybills, bills of lading, freight orders, customs forms, and FIATA documents',
      ar: 'إتقان الوثائق الأساسية في عمليات النقل، مثل بوالص الشحن، أوامر الشحن، مستندات الجمارك، ووثائق الفياتا'
    },
    {
      en: 'Develop pricing and cost estimation skills for diverse freight modes and containerized shipments',
      ar: 'تطوير مهارات التسعير وتقدير التكاليف لأنماط الشحن المختلفة والشحن بالحاويات'
    },
    {
      en: 'Boost operational efficiency through logistics planning, warehouse management, and inventory control',
      ar: 'تعزيز الكفاءة التشغيلية من خلال التخطيط اللوجستي، وإدارة المستودعات، وضبط المخزون'
    },
    {
      en: 'Apply principles of risk management and insurance across freight and logistics operations',
      ar: 'تطبيق مبادئ إدارة المخاطر والتأمين في مختلف عمليات الشحن والخدمات اللوجستية'
    },
    {
      en: 'Handle dangerous goods in accordance with international safety and regulatory requirements',
      ar: 'التعامل مع البضائع الخطرة بما يتوافق مع معايير السلامة الدولية والمتطلبات التنظيمية'
    },
    {
      en: 'Adopt digital tools and platforms such as barcoding, e-payments, and e-commerce for enhanced performance',
      ar: 'اعتماد الأدوات والمنصات الرقمية، مثل أنظمة الباركود، والدفع الإلكتروني، والتجارة الإلكترونية، لتحسين الأداء'
    },
    {
      en: 'Integrate sustainability practices, addressing freight\'s impact on the environment and meeting global emissions standards',
      ar: 'دمج ممارسات الاستدامة البيئية، ومعالجة أثر الشحن على البيئة، والامتثال للمعايير العالمية لانبعاثات الكربون'
    },
    {
      en: 'Gain real-world experience through applied case studies and exposure to current industry trends and technologies',
      ar: 'اكتساب خبرة عملية من خلال دراسات حالة تطبيقية والتعرض للاتجاهات والتقنيات الحديثة في القطاع'
    },
    {
      en: 'Enhance career potential with a qualification recognized by industry leaders and aligned with global standards',
      ar: 'تعزيز المسار المهني من خلال الحصول على مؤهل معترف به من قِبل الجهات الرائدة في القطاع ومتوافق مع المعايير العالمية'
    }
  ];

  const whoShouldEnroll = [
    {
      en: 'Fresh graduates seeking to enter the logistics sector',
      ar: 'الخريجين الجدد الراغبين في الدخول إلى قطاع اللوجستيات'
    },
    {
      en: 'Officials and/or professionals in the industry such as freight forwarders and logistics professionals',
      ar: 'المسؤولين والمهنيين في القطاع مثل وسطاء الشحن، ومتخصصي اللوجستيات'
    },
    {
      en: 'Employees and officials of transport and customs clearance',
      ar: 'موظفي النقل والتخليص الجمركي'
    },
    {
      en: 'Owners of small and medium-sized enterprises in logistics',
      ar: 'أصحاب المؤسسات الصغيرة والمتوسطة في مجال اللوجستيات'
    }
  ];

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[500px] bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl">
                  <GraduationCap className="w-20 h-20" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'دبلوم FIATA في وساطة الشحن' : 'FIATA Diploma in Freight Forwarding'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
                {isRTL
                  ? 'انضموا إلى برنامج دبلوم عالمي المستوى وارتقِوا بمسيرتكم المهنية في وساطة الشحن'
                  : 'Join a World-Class Diploma Program and Take Your Freight Forwarding Career to the Next Level'}
              </p>
              <a
                href="/fiata-application-form.pdf"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold hover:bg-indigo-50 transition-colors text-lg shadow-lg"
              >
                <FileText className="w-6 h-6" />
                {isRTL ? 'نموذج التقديم' : 'Application Form'}
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-12 h-12 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'نظرة عامة على البرنامج' : 'Program Overview'}
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  {isRTL ? (
                    <>
                      يُعدّ الاتحاد الدولي لشركات الشحن (FIATA)، ومقره زيورخ، سويسرا، الهيئة العالمية الرئيسية لصناعة وساطة الشحن. يتجسد التزام FIATA بالتميز في تعليم وساطة الشحن من خلال الهيئة الاستشارية للتدريب المهني (ABVT)، حيث تلعب دورًا محوريًا كجهة عالمية رائدة في المعرفة بمجال وساطة الشحن وإدارة اللوجستيات.
                    </>
                  ) : (
                    <>
                      The International Federation of Freight Forwarders Associations (FIATA) based in Zurich, Switzerland is the world umbrella body of the freight forwarding industry. FIATA's commitment to excellence in freight forwarding education is embodied in its Advisory Body Vocational Training (ABVT), where it plays a pivotal role as a global knowledge leader in the field of freight forwarding and logistics management.
                    </>
                  )}
                </p>

                <p>
                  {isRTL ? (
                    <>
                      كجزء من جهودها، قامت ABVT بوضع مجموعة شاملة من المعايير لمنح دبلوم FIATA في وساطة الشحن، وهو مؤهل معترف به دوليًا يغطي الأساسيات الرئيسية لصناعة وساطة الشحن وسلسلة الإمداد الدولية.
                    </>
                  ) : (
                    <>
                      As part of its efforts, the ABVT established a comprehensive set of standards for awarding the FIATA Diploma in Freight Forwarding—an internationally recognised qualification covering the cornerstones of the Freight Forwarding and international Supply Chain industry.
                    </>
                  )}
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                  <p className="font-semibold text-indigo-900">
                    {isRTL ? (
                      <>
                        منذ إطلاقه في عام 1996، حظي دبلوم FIATA باعتراف دولي كرمز للكفاءة المهنية في جميع مجالات عمليات وساطة الشحن، ويُعتبر الآن مؤهلًا مرجعيًا من قبل جميع الجهات الفاعلة في الصناعة حول العالم.
                      </>
                    ) : (
                      <>
                        Since its launch in 1996, the FIATA Diploma has gained international recognition as a mark of professional competence across all areas of freight forwarding operations. It is now regarded as a benchmark qualification by industry stakeholders around the world.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-600">
                <Clock className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? 'المدة' : 'Duration'}
                </h3>
                <p className="text-gray-700">
                  {isRTL ? '4-6 أشهر' : '4-6 months'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-600">
                <MapPin className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? 'الموقع' : 'Location'}
                </h3>
                <p className="text-gray-700">
                  {isRTL ? 'عمّان، الأردن' : 'Amman, Jordan'}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? 'نمط التعلم' : 'Delivery Mode'}
                </h3>
                <p className="text-gray-700">
                  {isRTL ? 'حضوري' : 'Face-to-face'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Target className="w-12 h-12 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'الأهداف التعليمية' : 'Learning Objectives'}
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {isRTL ? (
                  <>
                    يهدف هذا الدبلوم الدولي المعترف به في وساطة الشحن إلى تزويد المهنيين الحاليين والطامحين بالمعرفة الأساسية والمهارات العملية اللازمة للنجاح في قطاع النقل والخدمات اللوجستية العالمي.
                  </>
                ) : (
                  <>
                    This internationally recognized Diploma in Freight Forwarding aims to equip aspiring and current professionals with the critical knowledge and practical skills needed to thrive in the global transport and logistics industry.
                  </>
                )}
              </p>

              <div className="grid gap-4">
                {learningObjectives.map((objective, index) => (
                  <div key={index} className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      {isRTL ? objective.ar : objective.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-12">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-12 h-12" />
                <h2 className="text-3xl font-bold">
                  {isRTL ? 'منهج البرنامج والوحدات الأساسية' : 'Program Curriculum & Core Modules'}
                </h2>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                {isRTL ? (
                  <>
                    يجمع البرنامج بين تدريب مكثف يركز على ممارسات التجارة العالمية، وأنظمة الجمارك، وتحسين سلاسل التوريد. تعتمد منهجية التدريب على موازنة بين المحاضرات النظرية التقليدية ودراسات الحالة والمهام العملية.
                  </>
                ) : (
                  <>
                    The programme combines rigorous training with a focus on global trade practices, customs regulations, and supply chain optimization. The training methodology balances traditional theoretical classes with case studies and practical assignments.
                  </>
                )}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white text-indigo-600 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="font-semibold text-lg">
                        {isRTL ? module.ar : module.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-12 h-12 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'من يمكنه التسجيل؟' : 'Who Should Enroll'}
                </h2>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {isRTL ? 'يُوجه هذا الدبلوم إلى:' : 'The Diploma is intended for:'}
              </p>

              <div className="space-y-4 mb-8">
                {whoShouldEnroll.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center p-4 bg-indigo-50 rounded-lg">
                    <Award className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">
                      {isRTL ? item.ar : item.en}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-amber-900 text-xl mb-3">
                  {isRTL ? 'المتطلبات الأساسية للقبول:' : 'Essential Requirements for Admission:'}
                </h3>
                <ul className="space-y-2 text-amber-900">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{isRTL ? 'الحصول على شهادة التعليم الثانوي أو ما يعادلها' : 'To hold a secondary education certificate or its equivalent'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{isRTL ? 'الكفاءة في اللغة الإنجليزية' : 'To be competent in the English language'}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-12 h-12 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'الشهادة المعتمدة' : 'Certification'}
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                {isRTL ? (
                  <>
                    يحصل الخريجون على شهادة دبلوم معتمد موقعة من رئيس منظمة الفياتا والمدير العام للمنظمة، تتضمن تفاصيل مثل العنوان، رقم الدبلوم، اسم الخريج، وتاريخ ومكان الإصدار.
                  </>
                ) : (
                  <>
                    Graduates will receive diplomas signed by the FIATA President and FIATA Director General, with details including the title, diploma number, name of the graduate, and date and place of issuance.
                  </>
                )}
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                {isRTL ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                {isRTL
                  ? 'للمزيد من المعلومات حول الرسوم، ومتطلبات التسجيل، والجدول الزمني للبرنامج، يرجى التواصل معنا'
                  : 'For more information about course fees, requirements, and schedule, please contact us'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+96265658094"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-lg"
                >
                  <ExternalLink className="w-6 h-6" />
                  +962-6-5658094
                </a>

                <a
                  href="https://wa.me/962793555761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-lg"
                >
                  WhatsApp: +962 793555761
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:fiata@jla.jo"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors text-lg"
                >
                  fiata@jla.jo
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors text-lg"
                >
                  <FileText className="w-6 h-6" />
                  {isRTL ? 'نموذج الاستفسار' : 'Inquiry Form'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
