import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: {
        en: 'What is the FIATA Diploma in Freight Forwarding?',
        ar: 'ما هو دبلوم الفياتا في وساطة الشحن؟'
      },
      answer: {
        en: 'The FIATA Diploma is an internationally recognized qualification awarded by the International Federation of Freight Forwarders Associations (FIATA), equipping professionals with the essential skills and knowledge for the global freight forwarding and logistics industry.',
        ar: 'دبلوم الفياتا هو مؤهل معترف به دولياً تمنحه الاتحاد الدولي لوكلاء ووسطاء الشحن (FIATA)، يزود المهنيين بالمهارات والمعرفة الأساسية لوساطة الشحن واللوجستيات.'
      }
    },
    {
      question: {
        en: 'Who can apply for the JLA FIATA Diploma program?',
        ar: 'من يمكنه التقدم لبرنامج دبلوم الفياتا لدى النقابة اللوجستية الأردنية؟'
      },
      answer: {
        en: 'The program is ideal for: Fresh graduates seeking a career in logistics, Freight forwarders and logistics professionals, Customs clearance officers, Transport officials, and SME owners in the logistics sector. Applicants must have at least a high school certificate and basic English proficiency.',
        ar: 'البرنامج موجه لـ: الخريجين الجدد الراغبين في العمل بمجال اللوجستيات، وكلاء ووسطاء الشحن والمهنيين في اللوجستيات، موظفي التخليص الجمركي، مسؤولي النقل، وأصحاب المشاريع الصغيرة والمتوسطة في قطاع اللوجستيات. يشترط الحصول على شهادة الثانوية العامة على الأقل وإجادة اللغة الإنجليزية بشكل أساسي.'
      }
    },
    {
      question: {
        en: 'Where is the training delivered?',
        ar: 'أين تُعقد الدورات التدريبية؟'
      },
      answer: {
        en: 'All training sessions are delivered face-to-face in Amman, Jordan, over a period of 28 weeks, at a certified training venue that meets international standards for professional education.',
        ar: 'تُقام جميع الدورات وجهًا لوجه في عمّان، الأردن، على مدار 28 أسبوعًا، في مركز تدريب معتمد يتوافق مع المعايير الدولية للتعليم المهني.'
      }
    },
    {
      question: {
        en: 'What topics are covered in the program?',
        ar: 'ما هي الموضوعات التي يشملها البرنامج؟'
      },
      answer: {
        en: 'Core modules include: Introduction to Freight Forwarding, Land, Sea, Air, and Rail Transport, Supply Chain Management, Customs Procedures, Shipping Documents & Trade, and Cargo Insurance & Risk Management.',
        ar: 'تشمل الوحدات الأساسية: مقدمة في وساطة الشحن، النقل البري، البحري، الجوي، والسككي، إدارة سلسلة التوريد، إجراءات التخليص الجمركي، وثائق الشحن والتجارة الدولية، وتأمين البضائع وإدارة المخاطر.'
      }
    },
    {
      question: {
        en: 'What is the cost of the program?',
        ar: 'كم تبلغ تكلفة البرنامج؟'
      },
      answer: {
        en: 'The program fee is inclusive of enrollment, materials, certification, and refreshments. Flexible payment options are available. Discounts apply for group enrollments and JLA members. To learn more about the course fees, delivery modes, and requirements, please contact Jordanian Logistics Association via WhatsApp: +962-793555761 or Email: fiata@jla.jo',
        ar: 'رسوم البرنامج تشمل المواد التدريبية، الشهادة والضيافة. تتوفر خيارات دفع مرنة، وتُمنح خصومات للمجموعات وأعضاء النقابة. للمزيد من المعلومات عن الرسوم يرجى التواصل مع النقابة اللوجستية الأردنية عبر واتساب: +962-793555761 أو البريد الإلكتروني: fiata@jla.jo'
      }
    },
    {
      question: {
        en: 'Is there financial aid or installment payment available?',
        ar: 'هل يتوفر دعم مالي أو إمكانية الدفع بالتقسيط؟'
      },
      answer: {
        en: 'Yes, participants may choose to pay in installments. Please contact JLA to discuss your options.',
        ar: 'نعم، يمكن للمشاركين اختيار خطة الدفع بالتقسيط. يرجى التواصل مع النقابة لمناقشة الخيارات المتاحة.'
      }
    },
    {
      question: {
        en: 'How do I apply?',
        ar: 'كيف يمكنني التقديم؟'
      },
      answer: {
        en: 'You can apply by completing the FIATA Application Form. JLA will contact you to guide you through the next steps.',
        ar: 'يمكنك التقديم عبر تعبئة نموذج طلب دبلوم الفياتا. ستتواصل معك النقابة لتوجيهك للخطوات التالية.'
      }
    },
    {
      question: {
        en: 'What is the selection process?',
        ar: 'ما هي آلية الاختيار؟'
      },
      answer: {
        en: 'A selection committee reviews applications. Interviews may be conducted to assess motivation, experience, and alignment with program goals and Selection Criteria.',
        ar: 'تراجع لجنة الاختيار الطلبات، وقد تُجرى مقابلات لتقييم الدوافع والخبرة ومدى توافق المتقدم مع أهداف ومعايير البرنامج.'
      }
    },
    {
      question: {
        en: 'What is the assessment method?',
        ar: 'كيف يتم التقييم؟'
      },
      answer: {
        en: 'Assessment includes: Quizzes: 15%, Class Participation: 15%, Assignments: 10%, Midterm Exam: 20%, Final Exam: 40%. A minimum 60% overall score is required to pass. Distinction is awarded to those scoring 90% or above.',
        ar: 'يشمل التقييم: الاختبارات القصيرة: 15%، المشاركة الصفية: 15%، الواجبات: 10%، امتحان منتصف الدورة: 20%، الامتحان النهائي: 40%. يشترط تحقيق معدل 60% كحد أدنى للنجاح. تُمنح درجة امتياز لمن يحصل على 90% أو أكثر.'
      }
    },
    {
      question: {
        en: 'What if I miss classes or need to withdraw?',
        ar: 'ماذا لو فاتتني الجلسات التدريبية أو رغبت بالانسحاب؟'
      },
      answer: {
        en: 'A minimum of 80% attendance is required. Withdrawals must be submitted in writing. Refund eligibility depends on timing; please contact JLA for the official withdrawal policy.',
        ar: 'يُشترط الحضور 80% من البرنامج كحد أدنى. يجب تقديم طلب الانسحاب كتابياً. تختلف سياسة استرداد الرسوم حسب توقيت الانسحاب، يرجى التواصل مع النقابة لمعرفة التفاصيل الرسمية.'
      }
    },
    {
      question: {
        en: 'Can I retake the final exam if I fail?',
        ar: 'هل يمكن إعادة الامتحان النهائي في حال الرسوب؟'
      },
      answer: {
        en: 'Yes, you may retake the final exam once for free if you fail to meet the passing criteria.',
        ar: 'نعم، يمكن إعادة الامتحان النهائي مرة واحدة مجاناً في حال عدم تحقيق الحد الأدنى للنجاح.'
      }
    },
    {
      question: {
        en: 'What certificate will I receive?',
        ar: 'ما الشهادة التي سأحصل عليها؟'
      },
      answer: {
        en: 'Successful participants will receive a FIATA Diploma, signed by the FIATA President and Director General, with international recognition.',
        ar: 'يحصل الناجحون على شهادة دبلوم الفياتا موقعًا من رئيس الاتحاد والمدير العام، ويحظى باعتراف دولي واسع.'
      }
    },
    {
      question: {
        en: 'What are the benefits of joining the program?',
        ar: 'ما فوائد الانضمام للبرنامج؟'
      },
      answer: {
        en: 'Global career advancement opportunities, networking with industry professionals, hands-on training by certified experts, and an internationally respected certification.',
        ar: 'فرص تطوير مهني عالمي، بناء شبكة علاقات مهنية، تدريب عملي على يد خبراء معتمدين، شهادة معترفة دولياً.'
      }
    },
    {
      question: {
        en: 'Is the program inclusive?',
        ar: 'هل البرنامج شامل ويشجع على التنوع؟'
      },
      answer: {
        en: 'Absolutely. The program actively encourages applications from women, youth (18–24), persons with disabilities, and individuals from underrepresented regions.',
        ar: 'نعم، يشجع البرنامج بقوة على تقديم الطلبات من النساء، الشباب (18-24 سنة)، الأشخاص ذوي الإعاقة، والأشخاص من المناطق الأقل تمثيلاً.'
      }
    },
    {
      question: {
        en: 'How can I contact JLA for more details?',
        ar: 'كيف يمكنني التواصل مع النقابة لمزيد من التفاصيل؟'
      },
      answer: {
        en: 'Jordanian Logistics Association - Shmeissani, Yousef Bin Tashfeen St., Bldg.18, Amman - Phone: +962-6-5658094 - WhatsApp: +962-793555761 - Email: fiata@jla.jo',
        ar: 'النقابة اللوجستية الأردنية - شميساني، شارع يوسف بن تاشفين، مبنى 18، عمّان - الهاتف: +962-6-5658094 - واتساب: +962-793555761 - البريد الإلكتروني: fiata@jla.jo'
      }
    }
  ];

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[400px] bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <div className="flex justify-center mb-6">
                <HelpCircle className="w-16 h-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                {isRTL
                  ? 'إجابات شاملة لأهم الأسئلة حول برنامج دبلوم FIATA'
                  : 'Comprehensive answers to the most common questions about the FIATA Diploma program'}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                      {isRTL ? faq.question.ar : faq.question.en}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {isRTL ? faq.answer.ar : faq.answer.en}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                {isRTL ? 'لم تجد إجابة لسؤالك؟' : "Didn't Find Your Answer?"}
              </h2>
              <p className="text-xl mb-8">
                {isRTL
                  ? 'نحن هنا لمساعدتك. تواصل معنا مباشرة للحصول على إجابات مخصصة'
                  : "We're here to help. Contact us directly for personalized answers"}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+96265658094"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 transition-colors text-lg"
                >
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </a>

                <a
                  href="https://wa.me/962793555761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 transition-colors text-lg"
                >
                  WhatsApp
                </a>

                <a
                  href="mailto:fiata@jla.jo"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors text-lg"
                >
                  {isRTL ? 'راسلنا' : 'Email Us'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
