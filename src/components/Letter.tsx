
import { Package, FileText, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LogisticsUnion() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-50 to-gray-100 py-16 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-2">
      <div  >
          {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          {t("Decleartion")}
          </h1>

        {/* Main Content */}
        <div className=" p-8 md:p-12 mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          {t('decleartion_paragraph1')}
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {t('decleartion_paragraph2')}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
          {t('decleartion_paragraph3')}
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