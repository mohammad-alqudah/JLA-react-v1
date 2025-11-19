import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, Award, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function FIATA() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[400px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'حول الاتحاد الدولي لشركات الشحن (FIATA)' : 'About FIATA'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                {isRTL
                  ? 'الاتحاد الدولي لشركات الشحن، منظمة غير حكومية قائمة على العضوية، تمثل مصالح شركات الشحن في جميع أنحاء العالم'
                  : 'The International Federation of Freight Forwarders Associations, representing the interest of freight forwarders worldwide'}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'نظرة عامة' : 'Overview'}
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {isRTL ? (
                    <>
                      الاتحاد الدولي لشركات الشحن (FIATA) هو منظمة غير حكومية قائمة على العضوية. يلتزم الاتحاد بالدفاع عن مصالح أعضائه من خلال الانخراط الفعّال مع منظمة التجارة العالمية ووكالات الأمم المتحدة والمنظمات الدولية الأخرى وهيئات النقل والشركاء العالميين والحكومات، بهدف تعزيز وحماية مصالح قطاع الشحن والخدمات اللوجستية.
                    </>
                  ) : (
                    <>
                      FIATA, the International Federation of Freight Forwarders Associations, is a non-governmental, membership-based organisation. FIATA is committed to representing the interest of its members by actively engaging with the World Trade Organization, United Nations agencies and other international organisations, transport organisations, global partners and governments to promote and protect the interest of the industry.
                    </>
                  )}
                </p>

                <p className="text-lg">
                  {isRTL ? (
                    <>
                      يُعتبر الاتحاد مرجعًا أساسيًا للسياسات والأنظمة الدولية التي تنظّم صناعة الشحن والخدمات اللوجستية. ويعمل على المستوى الدولي لتمثيل مقدّمي الخدمات العاملين في مجالات لوجستيات التجارة وإدارة سلاسل الإمداد.
                    </>
                  ) : (
                    <>
                      FIATA is a reference source on international policies and regulations governing the freight forwarding and logistics industry. FIATA works at the international level to represent service providers who operate in trade logistics and supply chain management.
                    </>
                  )}
                </p>

                <p className="text-lg">
                  {isRTL ? (
                    <>
                      ومن خلال وثائقه ونماذجه الرسمية، وجهوده في رقمنة المستندات التجارية الأساسية، وعقد مؤتمره السنوي واجتماع مقره الرئيسي، وبرامجه التدريبية ومنشوراته، يسعى الاتحاد إلى تعزيز تسهيل التجارة وتطبيق أفضل الممارسات ضمن مجتمع شركات الشحن والخدمات اللوجستية.
                    </>
                  ) : (
                    <>
                      Through its FIATA documents and forms, digitalisation of key trade documents, annual congress and headquarters meeting, training and publications, it promotes trade facilitation and best practices among the freight forwarding community.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-8">
                <TrendingUp className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'أهداف الاتحاد' : "FIATA's Objectives"}
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    en: 'To unite the freight forwarding industry worldwide',
                    ar: 'توحيد وساطة الشحن والخدمات اللوجستية على مستوى العالم'
                  },
                  {
                    en: 'To represent, promote and protect the interests of the industry by participating as advisors or experts in meetings of international bodies dealing with transportation',
                    ar: 'تمثيل وتعزيز وحماية مصالح هذا القطاع من خلال المشاركة بصفة مستشارين أو خبراء في اجتماعات الهيئات الدولية المعنية بالنقل'
                  },
                  {
                    en: 'To familiarise trade and industry and the public at large with the services rendered by freight forwarders through the dissemination of information, distribution of publications, etc.',
                    ar: 'تعريف قطاعات التجارة والصناعة والجمهور عامةً بالخدمات التي يقدمها وكلاء الشحن، من خلال نشر المعلومات وتوزيع المطبوعات وغيرها من الوسائل'
                  },
                  {
                    en: 'To standardise and improve the quality of services rendered by freight forwarders by developing and promoting uniform forwarding documents, standard trading conditions, etc.',
                    ar: 'توحيد وتحسين جودة الخدمات المقدّمة من قبل وكلاء الشحن عبر تطوير وتعزيز استخدام وثائق شحن موحدة وشروط تجارية قياسية وغيرها من الأدوات التنظيمية'
                  },
                  {
                    en: 'To assist with vocational training for freight forwarders, liability insurance problems, tools for electronic commerce including electronic data interchange (EDI) and barcode',
                    ar: 'المساهمة في التدريب المهني للعاملين في قطاع الشحن، تأمين المسؤولية، وتوفير أدوات التجارة الإلكترونية بما في ذلك التبادل الإلكتروني للبيانات (EDI) واستخدام الرموز الشريطية (الباركود)'
                  }
                ].map((objective, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg flex-1">
                      {isRTL ? objective.ar : objective.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 md:p-12 text-white mb-12">
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-12 h-12" />
                <h2 className="text-3xl font-bold">
                  {isRTL ? 'معهد فياتا للوجستيات (FLI)' : 'FIATA Logistics Institute (FLI)'}
                </h2>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                {isRTL ? (
                  <>
                    تنفذ أنشطة التدريب والتعليم في FIATA تحت مظلة معهد فياتا للوجستيات (FLI). يعمل المعهد على تزويد القوى العاملة في هذا القطاع بالمهارات والكفاءات اللازمة من خلال مبادرات وبرامج رائدة مثل دبلومات الفياتا، والبرنامج التدريبي المشترك بين منظمة الطيران المدني الدولي (ICAO) والاتحاد الدولي لشركات الشحن حول نقل البضائع الخطرة جوًّا، بالإضافة إلى جائزة المهنيين الشباب في مجال اللوجستيات.
                  </>
                ) : (
                  <>
                    At FIATA, training and education activities take place under the umbrella of the FIATA Logistics Institute (FLI). FLI equips the industry workforces with the necessary skills and competences through initiatives such as the FIATA Diplomas, the ICAO-FIATA Dangerous Goods by Air Training Programme, and the Young Logistics Professionals Award.
                  </>
                )}
              </p>

              <a
                href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                {isRTL ? 'اطلع على أحدث إصدار من مجلة FIATA' : 'View Latest FIATA Magazine'}
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Users className="w-12 h-12 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  {isRTL ? 'العضوية الفردية في FIATA' : 'FIATA Individual Membership'}
                </h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                <p className="text-lg">
                  {isRTL ? (
                    <>
                      تشمل العضوية الفردية شركات الشحن والخدمات اللوجستية، بالإضافة إلى المنشآت المسجلة في قطاع وساطة الشحن والخدمات اللوجستية. تُعد العضوية الفردية في FIATA خيارًا طوعيًا من قبل رواد الأعمال في مجال الشحن لإظهار الالتزام والانتماء.
                    </>
                  ) : (
                    <>
                      Individual Members are forwarding and logistics companies, as well as legal entities closely associated with the forwarding and logistics branch. Individual Membership with FIATA is the result of a free choice by a freight forwarding entrepreneur to show a sense of compliance and belonging.
                    </>
                  )}
                </p>

                <p className="text-lg">
                  {isRTL ? (
                    <>
                      تكمن أهمية التقدم للعضوية الفردية بالحفاظ على سمعة مرموقة من خلال مدى التزام الأعضاء الفرديين بأهداف وقواعد الاتحاد. يختار معظم الأعضاء الانضمام إلى FIATA للاستفادة من تلك السمعة المرموقة التي توفرها علامة تجارية محمية وعالية المصداقية مثل FIATA.
                    </>
                  ) : (
                    <>
                      The most important consequence of Individual Membership is connected with the reputation of the Individual Member, in as much as the Individual Member identifies itself in the objectives and rules of FIATA. Most Individual Members decide to get affiliated with FIATA because they want to benefit from the reputation that a highly protected brand such as the FIATA one affords.
                    </>
                  )}
                </p>
              </div>

              <a
                href="https://join.fiata.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                <Award className="w-6 h-6" />
                {isRTL ? 'بادروا بالانضمام إلى عضوية الفياتا اليوم' : 'Join FIATA and Become a Member Today'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
