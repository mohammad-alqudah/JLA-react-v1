// import React from 'react';
// import { Package, FileText, Shield } from 'lucide-react';

// export default function LogisticsUnion() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4" dir="rtl">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Column - Main Content and Header */}
//           <div className="lg:col-span-2">
//             {/* Header */}
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
//               من هي النقابة اللوجستية الأردنية
//             </h1>

//             {/* Main Content */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//               <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//                 تأسست النقابة اللوجستية الأردنية في عام 2007 بهدف تمثيل العاملين في صناعة الشحن في الأردن، وبالرغم من الدور الأساسي لوسطاء الشحن في صناعة النقل في الأردن، إلا أنه لم يكن هناك جهة حقيقية تمثيل هذه الفئة أمام الحكومة والجهات ذات العلاقة ومستعملي النقل قبل تأسيس النقابة اللوجستية.
//               </p>
              
//               <p className="text-lg text-gray-600 leading-relaxed mt-6">
//                 ومنذ تأسيس النقابة فقد تواصل الدعم والاسناد من الجهات الرسمية والعامة وكذلك المنظمة الدولية لوسطاء الشحن الدوليين FIATA
//               </p>

//               <p className="text-lg text-gray-600 leading-relaxed mt-6">
//                 يتضمن موقع النقابة معلومات تفصيلية محدثة عن قطاع النقل في الأردن، والأعضاء المسجلين في النقابة بالإضافة الى أنشطة وأخبار النقابة.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Three Cards Stacked */}
//           <div className="space-y-8">
//             {/* Vision Card */}
//             <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
//               <div className="flex justify-center mb-6">
//                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//                   <Package className="w-8 h-8 text-red-600" />
//                 </div>
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
//                 الرؤية
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-center">
//                 الوصول بقطاع اللوجستيات الأردني إلى أعلى مستوى من التطور والحداثة وضمان الإدارة المثلى لتدفق وتخزين السلع والمنتجات والمعلومات بكفاءة عالية خدمة للمستهلك النهائي.
//               </p>
//             </div>

//             {/* Mission Card */}
//             <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
//               <div className="flex justify-center mb-6">
//                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//                   <FileText className="w-8 h-8 text-red-600" />
//                 </div>
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
//                 الرسالة
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-center">
//                 تطوير ورفع مستوى الخدمات المقدمة لمهنة وسطاء الشحن (بري، بحري، جوي) وموردي الخدمات اللوجستية دعماً للإقتصاد الوطني.
//               </p>
//             </div>

//             {/* Strategic Goals Card */}
//             <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
//               <div className="flex justify-center mb-6">
//                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
//                   <Shield className="w-8 h-8 text-red-600" />
//                 </div>
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
//                 الأهداف الإستراتيجية
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-center">
//                 تطوير نظم العمل لوسطاء الشحن وموردي الخدمات اللوجستية،تعزيز مصداقية العاملين في مهنة وسطاء الشحن مع الزبائن،السعي لتحقيق أفضل العلاقات المهنية والاجتماعية بين أعضاء النقابة،توفير بيئة تنافسية وحماية العاملين في مهنة وسطاء الشحن
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Package, FileText, Shield } from 'lucide-react';

export default function LogisticsUnion() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-50 to-gray-100 py-16 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-2">
      <div  >
          {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          من هي النقابة اللوجستية الأردنية
        </h1>

        {/* Main Content */}
        <div className=" p-8 md:p-12 mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            تأسست النقابة اللوجستية الأردنية في عام 2007 بهدف تمثيل العاملين في صناعة الشحن في الأردن، وبالرغم من الدور الأساسي لوسطاء الشحن في صناعة النقل في الأردن، إلا أنه لم يكن هناك جهة حقيقية تمثيل هذه الفئة أمام الحكومة والجهات ذات العلاقة ومستعملي النقل قبل تأسيس النقابة اللوجستية.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ومنذ تأسيس النقابة فقد تواصل الدعم والاسناد من الجهات الرسمية والعامة وكذلك المنظمة الدولية لوسطاء الشحن الدوليين FIATA
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            يتضمن موقع النقابة معلومات تفصيلية محدثة عن قطاع النقل في الأردن، والأعضاء المسجلين في النقابة بالإضافة الى أنشطة وأخبار النقابة.
          </p>
        </div>

      </div>
        {/* Three Column Grid */}
        <div>
            <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
              {/* Vision Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 xl:h-[400px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Package className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  الرؤية
                </h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  الوصول بقطاع اللوجستيات الأردني إلى أعلى مستوى من التطور والحداثة وضمان الإدارة المثلى لتدفق وتخزين السلع والمنتجات والمعلومات بكفاءة عالية خدمة للمستهلك النهائي.
                </p>
              </div>
    
              {/* Mission Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 xl:h-[400px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  الرسالة
                </h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  تطوير ورفع مستوى الخدمات المقدمة لمهنة وسطاء الشحن (بري، بحري، جوي) وموردي الخدمات اللوجستية دعماً للإقتصاد الوطني.
                </p>
              </div>
    
              {/* Strategic Goals Card */}
              <div className="bg-white rounded-xl justify-self-center shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 xl:h-[400px]">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  الأهداف الإستراتيجية
                </h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  تطوير نظم العمل لوسطاء الشحن وموردي الخدمات اللوجستية،تعزيز مصداقية العاملين في مهنة وسطاء الشحن مع الزبائن،السعي لتحقيق أفضل العلاقات المهنية والاجتماعية بين أعضاء النقابة،توفير بيئة تنافسية وحماية العاملين في مهنة وسطاء الشحن
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}