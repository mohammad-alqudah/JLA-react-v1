import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Globe } from 'lucide-react';

export default function Experts() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const experts = [
    {
      name: isRTL ? 'أمجد سماوي' : 'Amjad Samawi',
      bio: {
        en: 'An expert in logistics and procurement, Amjad has more than 30 years of experience in freight forwarding, all modes of transportation, customs clearance, procurement, warehousing & inventory management, Incoterms, project logistics, military cargo handling, and training. He holds a Bachelor of Science in Mathematics, a Diploma in Military Sciences, and several professional certificates such as TOT, Customs Clearance, and Transportation.',
        ar: 'خبير في اللوجستيات والمشتريات، يمتلك أمجد أكثر من 30 عامًا من الخبرة في وساطة الشحن، جميع وسائل النقل، التخليص الجمركي، المشتريات، إدارة المخازن والمخزون، قواعد Incoterms، لوجستيات المشاريع، مناولة الشحن العسكري، والتدريب. حاصل على بكالوريوس علوم في الرياضيات، ودبلوم في العلوم العسكرية، وعدة شهادات مهنية مثل TOT، والتخليص الجمركي، والنقل.'
      }
    },
    {
      name: isRTL ? 'د. نداء حبيب' : 'Dr. Nidaa Habeeb',
      bio: {
        en: 'An expert in RoRo/LoLo shipping with over 25 years of experience. Starting in documentation and progressing through operations, she currently serves as Assistant General Manager. She holds a Ph.D. in Education, a Diploma in Executive Personal Assistance, and certifications in TOT, DACUM, USAID, and HR Projects.',
        ar: 'خبيرة في الشحن RoRo/LoLo وتمتلك أكثر من 25 عامًا من الخبرة. بدأت مسيرتها المهنية في مجال الوثائق وتقدمت لتشمل العمليات، وتشغل حاليًا منصب مساعدة المدير العام. حاصلة على دكتوراه في التربية، ودبلوم في المساعدة التنفيذية الشخصية، وشهادات في TOT، وDACUM، وUSAID، ومشاريع الموارد البشرية.'
      }
    },
    {
      name: isRTL ? 'إيناس أحمد عبده سوسان' : 'Enas Ahmad Abdo Sousan',
      bio: {
        en: 'Enas is a logistics and supply chain expert with over 15 years of experience in freight forwarding, operations, sales, shipping, and training supervision. She holds a BA in Journalism and Media (Public Relations) with a minor in English Literature from Yarmouk University, Jordan, and certificates in DGR Category (3&6), CBET Training, TOT, and Sea Freight Shipping.',
        ar: 'خبيرة في اللوجستيات وسلسلة الإمداد، تمتلك أكثر من 15 عامًا من الخبرة في وساطة الشحن، العمليات، المبيعات، الشحن، والإشراف على التدريب. حاصلة على بكالوريوس في الصحافة والإعلام (العلاقات العامة) مع تخصص فرعي في الأدب الإنجليزي من جامعة اليرموك، الأردن، بالإضافة إلى شهادات في فئات DGR (3 و6)، وتدريب CBET، وTOT، والشحن البحري.'
      }
    },
    {
      name: isRTL ? 'فراس الرمحي' : 'Firas Alramahi',
      bio: {
        en: 'A seasoned air cargo specialist since 2004, Feras has worked with Royal Jordanian Airlines and Kuwait Airways in cargo operations and sales. He holds a BA in English Language and Literature from Mu\'ta University and is a certified Dangerous Goods and Air Freight trainer (CARC/IATA), TOT graduate, and certified load sheeter.',
        ar: 'أخصائي في الشحن الجوي منذ عام 2004، عمل مع الخطوط الجوية الملكية الأردنية وKuwait Airways في عمليات الشحن والمبيعات. حاصل على بكالوريوس في اللغة الإنجليزية وآدابها من جامعة مؤتة، وهو مدرب معتمد للبضائع الخطرة والشحن الجوي (CARC/IATA)، وخريج TOT، ومعتمد في إعداد جداول التحميل (Load Sheeter).'
      }
    },
    {
      name: isRTL ? 'فراس صوان' : 'Feras Sawan',
      bio: {
        en: 'An Electrical Engineer with over 17 years of experience in switchgear and power systems design, project management, and consultancy. He holds a B.Sc. in Electrical Engineering from Hashemite University and certifications in Ecodial, ISO 9001 internal auditing, and TOT. Feras also mentors apprentices at Al Hussein Technical University (HTU).',
        ar: 'مهندس كهرباء يمتلك أكثر من 17 عامًا من الخبرة في تصميم أنظمة التبديل والطاقة، إدارة المشاريع، والاستشارات. حاصل على بكالوريوس في الهندسة الكهربائية من الجامعة الهاشمية، بالإضافة إلى شهادات في Ecodial، والتدقيق الداخلي ISO 9001، وبرنامج TOT. كما يقوم بتوجيه المتدربين في جامعة الحسين التقنية (HTU).'
      }
    },
    {
      name: isRTL ? 'هاني ف. البنّا' : 'Hani F. Al-Banna',
      bio: {
        en: 'Hani brings over 17 years of logistics and supply chain experience across Jordan and Saudi Arabia, working with multinational companies in procurement, freight forwarding, and shipping operations. He holds a Bachelor\'s in Water Resources Management and Environment from Hashemite University and certifications in Supply Chain, Logistics Management, and Strategic Planning.',
        ar: 'يمتلك هاني أكثر من 17 عامًا من الخبرة في اللوجستيات وسلسلة الإمداد في الأردن والمملكة العربية السعودية، حيث عمل مع شركات متعددة الجنسيات في المشتريات، وساطة الشحن، وعمليات الشحن. حاصل على بكالوريوس في إدارة الموارد المائية والبيئة من الجامعة الهاشمية، بالإضافة إلى شهادات في إدارة سلسلة الإمداد، وإدارة اللوجستيات، والتخطيط الاستراتيجي.'
      }
    },
    {
      name: isRTL ? 'إيمان بكيرات' : 'Iman Bkyrat',
      bio: {
        en: 'A seasoned C-level entrepreneur and logistics leader with 20 years of experience, including with UTi, DSV, and ECU Worldwide. She is the founder of Tristar Cargo Systems. Iman is also a humanitarian advocate, founding Al Maydan for Community Development and leading Think About Others NGO, spearheading community and CSR initiatives.',
        ar: 'رائدة أعمال وخبيرة لوجستيات على مستوى C-level تمتلك 20 عامًا من الخبرة، شملت العمل مع UTi، DSV، وECU Worldwide. وهي مؤسسة شركة Tristar Cargo Systems. إيمان ناشطة مجتمعية أسست المدى للتنمية المجتمعية وتقود جمعية Think About Others، وتقود مبادرات المجتمع والمسؤولية الاجتماعية للشركات (CSR).'
      }
    },
    {
      name: isRTL ? 'محمد عارف عيسى حسين' : 'Mohammad Aref Issa Hussein',
      bio: {
        en: 'With over 30 years in shipping, transportation, freight forwarding, and integrated logistics, Mohammad leads trade operations, contracts, market research, and team development. He is focused on market growth, client relationship management, and staff training across multiple company divisions.',
        ar: 'يمتلك محمد أكثر من 30 عامًا من الخبرة في الشحن، والنقل، ووساطة الشحن، والخدمات اللوجستية المتكاملة، حيث يقود عمليات التجارة، وإدارة العقود، وأبحاث السوق، وتطوير الفرق. يركز على نمو السوق، وإدارة علاقات العملاء، وتدريب الموظفين عبر عدة أقسام في الشركة.'
      }
    },
    {
      name: isRTL ? 'منى دعاس' : 'Muna Da\'as',
      bio: {
        en: 'Muna has worked in logistics since 2002, combining field experience with extensive training and coaching in airfreight and general logistics. She holds a BA in Business Administration from Amity University, a Diploma in IATA Cargo, and numerous certifications including Freight Forwarding, DGR CAT3, Aviation Law, CLCP, and TOT.',
        ar: 'تعمل منى في مجال اللوجستيات منذ عام 2002، حيث تجمع بين الخبرة الميدانية والتدريب والإشراف المكثف في الشحن الجوي واللوجستيات العامة. حاصلة على بكالوريوس في إدارة الأعمال من جامعة أميتي، ودبلوم في شحن IATA، بالإضافة إلى العديد من الشهادات مثل: وساطة الشحن، DGR الفئة 3، قانون الطيران، CLCP، وTOT.'
      }
    },
    {
      name: isRTL ? 'قصي عبد الدين' : 'Qusai Abed Aldeen',
      bio: {
        en: 'With over 15 years in freight forwarding, Qusai specializes in logistics operations, customs compliance, and optimizing service delivery across the global supply chain. He holds a Bachelor of Business Administration (BBA) and has a strong focus on operational efficiency and customer service.',
        ar: 'يمتلك قصي أكثر من 15 عامًا من الخبرة في وساطة الشحن، ويختص في عمليات اللوجستيات، الامتثال الجمركي، وتحسين تقديم الخدمات عبر سلسلة الإمداد العالمية. حاصل على بكالوريوس في إدارة الأعمال (BBA)، ويركز بشكل كبير على الكفاءة التشغيلية وخدمة العملاء.'
      }
    },
    {
      name: isRTL ? 'سامر تلّ' : 'Samer Tell',
      bio: {
        en: 'Samer is a seasoned consultant and trainer with over 25 years of experience in logistics, procurement, freight forwarding, transport, customs, warehousing, and business administration. He holds a Master\'s in Procurement, Logistics, and Supply Chain Management (Salford University, UK), a BA in Business Administration (University of Jordan), and certifications including CSCL, CIPS, PMP, CISCM, and CITL.',
        ar: 'سامر مستشار ومدرب، ويمتلك أكثر من 25 عامًا من الخبرة في اللوجستيات، والمشتريات، ووساطة الشحن، والنقل، والتخليص الجمركي، والمخازن، وإدارة الأعمال. حاصل على ماجستير في المشتريات واللوجستيات وإدارة سلسلة الإمداد من جامعة سالفورد، المملكة المتحدة، وبكالوريوس في إدارة الأعمال من جامعة الأردن، بالإضافة إلى شهادات CSCL، CIPS، PMP، CISCM، وCITL.'
      }
    },
    {
      name: isRTL ? 'م. سهى نضال أبو زيد' : 'Eng. Suha Nedhal Abu Zeid',
      bio: {
        en: 'Suha is an environmental engineer and logistics trainer with extensive experience in maritime operations, chartering, procurement, and green supply chains. She is a YEP MED instructor and a speaker at international events like the IMO GloFouling R&D Forum. Suha holds certifications in leadership, safety, climate change, and auditing from institutions like IMO and UNITAR.',
        ar: 'سهى مهندسة بيئية ومدربة لوجستيات، تمتلك خبرة واسعة في العمليات البحرية، والتأجير (Chartering)، والمشتريات، وسلاسل الإمداد الخضراء. هي مدرّبة في برنامج YEP MED ومتحدثة في فعاليات دولية مثل منتدى IMO GloFouling للأبحاث والتطوير. حاصلة على شهادات في القيادة، والسلامة، وتغير المناخ، والتدقيق من مؤسسات مثل IMO وUNITAR.'
      }
    },
    {
      name: isRTL ? 'تمارا قعوار' : 'Tamara Kawar',
      bio: {
        en: 'With over 20 years in logistics, freight forwarding, and transport, Tamara specializes in Dangerous Goods handling and compliance. She holds a BA in Risk Management and Insurance and multiple certifications in aviation safety, crisis management, and DGR (Categories 3 and 6). Tamara is also a certified trainer delivering specialized logistics and safety programs.',
        ar: 'تمتلك تمارا أكثر من 20 عامًا من الخبرة في اللوجستيات، ووساطة الشحن، والنقل، وتختص في مناولة البضائع الخطرة والامتثال لها. حاصلة على بكالوريوس في إدارة المخاطر والتأمين، والعديد من الشهادات في سلامة الطيران، إدارة الأزمات، وفئات DGR (3 و6). كما أنها مدربة معتمدة تقدم برامج متخصصة في اللوجستيات والسلامة.'
      }
    }
  ];

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[400px] bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <div className="flex justify-center mb-6">
                <Award className="w-16 h-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'تعرف على خبرائنا المعتمدين من FIATA' : 'Meet Our FIATA Validated Experts'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                {isRTL
                  ? 'مدربون معتمدون من FIATA يقدمون خبرات عالمية ومعرفة متخصصة'
                  : 'FIATA-certified trainers delivering world-class expertise and specialized knowledge'}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          {expert.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {expert.name}
                        </h3>
                        <Globe className="w-6 h-6 text-purple-600" />
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg">
                        {isRTL ? expert.bio.ar : expert.bio.en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
