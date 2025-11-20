import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Award, Globe, GraduationCap, Target, TrendingUp, ExternalLink } from 'lucide-react';

export default function JLAMember() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[400px] bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'النقابة اللوجستية الأردنية كعضو فاعل في فياتا' : 'JLA as FIATA Association Member'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                {isRTL
                  ? 'العضو المعتمد الوحيد في الأردن لتقديم دبلوم FIATA في وساطة الشحن'
                  : 'The only accredited member in Jordan to deliver the FIATA Diploma in Freight Forwarding'}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-12 h-12 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'حول النقابة اللوجستية الأردنية' : 'About Jordanian Logistics Association'}
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {isRTL ? (
                    <>
                      تأسست النقابة اللوجستية الأردنية (JLA) في أكتوبر 2007 بهدف تمثيل وساطة الشحن والخدمات اللوجستية في الأردن. وعلى الرغم من الدور البارز الذي يلعبه وكلاء الشحن في قطاع النقل في الأردن، لم يكن هناك أي كيان رسمي مخصص يعمل كمتحدث باسمهم لدى الحكومة، ومستخدمي النقل، والمنظمات الأخرى قبل تأسيس النقابة.
                    </>
                  ) : (
                    <>
                      The Jordanian Logistics Association (JLA) was established in October 2007, with the aim of representing the Freight Forwarding industry in Jordan. Although Freight Forwarders play a significant role in the Transportation industry in Jordan, no official dedicated entity was acting as a spokesman for them with the government, transport users and other organizations that deal with them before the establishment of the JLA.
                    </>
                  )}
                </p>

                <p className="text-lg">
                  {isRTL ? (
                    <>
                      ومنذ نشأتها، تلقت النقابة دعمًا مستمرًا من الجهات الرسمية مثل وزارة النقل الأردنية، وكذلك من الاتحاد الدولي لشركات الشحن (FIATA).
                    </>
                  ) : (
                    <>
                      Since its inception, the JLA continually received the support and approval of official entities such as Jordan's Ministry of Transport and the International Federation of Freight Forwarding Associations (FIATA).
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-12 h-12" />
                <h2 className="text-3xl font-bold">
                  {isRTL ? 'الاعتماد والتميز' : 'Accreditation & Excellence'}
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  {isRTL ? (
                    <>
                      النقابة اللوجستية الأردنية (JLA) هي عضو الاتحاد الدولي لشركات الشحن (FIATA) في الأردن المعتمد لتنفيذ برنامج تدريبي للحصول على دبلوم FIATA في وساطة الشحن والنقل الدولي.
                    </>
                  ) : (
                    <>
                      The Jordanian Logistics Association (JLA) is the FIATA Association Member in Jordan accredited to conduct a validated training program leading to the FIATA Diploma in Freight Forwarding.
                    </>
                  )}
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-xl font-semibold mb-4">
                    {isRTL ? 'حقائق رئيسية:' : 'Key Facts:'}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">•</span>
                      <span>
                        {isRTL
                          ? 'يقدم نحو 50 عضوًا من أعضاء الاتحاد الدورات المؤهلة للحصول على دبلوم FIATA في الشحن والنقل الدولي'
                          : 'Almost 50 Association Members deliver the courses leading to the FIATA Diploma in Freight Forwarding'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">•</span>
                      <span>
                        {isRTL
                          ? 'يقدم حوالي 15 عضوًا الدورات المؤهلة للحصول على الدبلوم العالي في إدارة سلسلة التوريد من FIATA'
                          : 'About 15 Association Members deliver the courses leading to the FIATA Higher Diploma in Supply Management'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">•</span>
                      <span className="font-bold text-yellow-300">
                        {isRTL
                          ? 'النقابة اللوجستية الأردنية (JLA) هي العضو المعتمد الوحيد في الأردن وواحدة من عدد قليل من الأعضاء المعتمدين في المنطقة العربية'
                          : 'JLA is the only accredited member in Jordan and one of few accredited members in the Arab Region'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Target className="w-12 h-12 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'الأهداف والرسالة' : 'Mission & Goals'}
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {isRTL ? (
                    <>
                      من خلال هذا البرنامج التدريبي المؤدي إلى الدبلوم، تهدف النقابة اللوجستية الأردنية (JLA) والمجلس الوطني للمهارات لقطاع اللوجستيات (Logiskills) إلى سد الفجوة في المهارات داخل قطاع اللوجستيات في الأردن والمنطقة، بما يضمن توافقًا أفضل بين متطلبات سوق العمل ومهارات القوى العاملة.
                    </>
                  ) : (
                    <>
                      Through this Diploma program, JLA and the National Sector Skills Council for Logistics (Logiskills) aim to bridge the skills gap in the logistics sector in Jordan and the region, better aligning labor market demands with workforce skills.
                    </>
                  )}
                </p>

                <p className="text-lg">
                  {isRTL ? (
                    <>
                      تدعم هذه المبادرة قطاع اللوجستيات في الأردن الذي يشهد توسعًا سريعًا، من خلال خلق فرص عمل وتعزيز التنمية الاقتصادية للبلاد.
                    </>
                  ) : (
                    <>
                      This initiative supports the logistics sector in Jordan that is expanding rapidly; generating employment opportunities and supporting the country's economic development.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-12 h-12 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'دبلوم FIATA في وساطة الشحن' : 'FIATA Diploma in Freight Forwarding'}
                </h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {isRTL ? (
                  <>
                    يقدم دبلوم FIATA في وساطة الشحن، الذي تقدمه النقابة اللوجستية الأردنية (JLA)، تدريبًا شاملاً للمهنيين في مجال اللوجستيات حول أفضل الممارسات في الشحن والنقل الدولي. تم تطوير هذا الدبلوم بما يتوافق مع المعايير الدولية التي يضعها الاتحاد الدولي لشركات الشحن (FIATA)، ويزود المتعلمين بالمعرفة والكفاءات اللازمة لإدارة وتنسيق وتنفيذ العمليات اللوجستية المعقدة عبر النقل الجوي والبري والبحري.
                  </>
                ) : (
                  <>
                    The FIATA Diploma in Freight Forwarding, offered by the Jordanian Logistics Association (JLA), provides logistics professionals with comprehensive training in international freight forwarding practices. Developed in alignment with international standards set by FIATA, this diploma equips learners with the knowledge and competencies required to manage, coordinate, and execute complex logistics operations across air, land, and sea transport.
                  </>
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/fiata-diploma"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-lg"
                >
                  <GraduationCap className="w-6 h-6" />
                  {isRTL ? 'استكشف برنامج الدبلوم' : 'Explore Diploma Program'}
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-lg"
                >
                  <ExternalLink className="w-6 h-6" />
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
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
