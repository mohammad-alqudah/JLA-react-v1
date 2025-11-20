import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Newspaper, Calendar, Image as ImageIcon } from 'lucide-react';

export default function MediaCentre() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[400px] bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <div className="flex justify-center mb-6">
                <Newspaper className="w-16 h-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'المركز الإعلامي' : 'Media Centre'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                {isRTL
                  ? 'آخر الأخبار والتحديثات من برنامج دبلوم FIATA في الأردن'
                  : 'Latest News and Updates from FIATA Diploma in Jordan'}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isRTL ? 'ابق على اطلاع' : 'Stay Updated'}
              </h2>
              <p className="text-lg text-gray-600">
                {isRTL
                  ? 'تابع آخر الأخبار والفعاليات والإنجازات من برنامج دبلوم FIATA'
                  : 'Follow the latest news, events, and achievements from the FIATA Diploma program'}
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">
                      {isRTL ? 'قريباً' : 'Coming Soon'}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isRTL
                        ? 'حفل تخريج دفعة 2025 من برنامج دبلوم FIATA'
                        : 'FIATA Diploma Graduation Ceremony 2025'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {isRTL
                        ? 'نحتفل بتخريج دفعة جديدة من المهنيين المعتمدين في وساطة الشحن والخدمات اللوجستية من برنامج دبلوم FIATA المعترف به دولياً.'
                        : 'Celebrating the graduation of a new cohort of certified freight forwarding and logistics professionals from the internationally recognized FIATA Diploma program.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">
                      {isRTL ? 'معرض الصور' : 'Photo Gallery'}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isRTL
                        ? 'صور من البرنامج التدريبي'
                        : 'Training Program Highlights'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {isRTL
                        ? 'شاهد لحظات من الجلسات التدريبية والتفاعل بين المشاركين والخبراء المعتمدين من FIATA.'
                        : 'View highlights from training sessions and interactions between participants and FIATA-certified experts.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Newspaper className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">
                      {isRTL ? 'أخبار الصناعة' : 'Industry News'}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isRTL
                        ? 'آخر تحديثات FIATA'
                        : 'Latest FIATA Updates'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {isRTL
                        ? 'تابع آخر الأخبار والتطورات من الاتحاد الدولي لشركات الشحن (FIATA) والمبادرات العالمية في قطاع اللوجستيات.'
                        : 'Follow the latest news and developments from the International Federation of Freight Forwarders Associations (FIATA) and global logistics initiatives.'}
                    </p>
                    <a
                      href="https://www.flipsnack.com/fiata/fiata-review-march-2025/full-view.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
                    >
                      {isRTL ? 'اقرأ المزيد' : 'Read More'} →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                {isRTL ? 'للاستفسارات الإعلامية' : 'For Media Inquiries'}
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                {isRTL
                  ? 'للحصول على معلومات إضافية أو تغطية إعلامية، يرجى التواصل معنا'
                  : 'For additional information or media coverage, please contact us'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:fiata@jla.jo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition-colors text-lg"
                >
                  fiata@jla.jo
                </a>

                <a
                  href="tel:+96265658094"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors text-lg"
                >
                  +962-6-5658094
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
