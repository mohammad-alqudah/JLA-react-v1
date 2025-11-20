import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Send, MessageSquare, Building } from 'lucide-react';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    language: 'english',
    currentRole: '',
    organization: '',
    industry: '',
    experience: '0-1',
    location: '',
    inquiry: '',
    agreeToContact: false,
    subscribeNewsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(isRTL
      ? 'شكراً لتواصلك معنا. سيتم الرد عليك قريباً!'
      : 'Thank you for your inquiry. We will get back to you shortly!');

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      language: 'english',
      currentRole: '',
      organization: '',
      industry: '',
      experience: '0-1',
      location: '',
      inquiry: '',
      agreeToContact: false,
      subscribeNewsletter: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="relative h-[400px] bg-gradient-to-r from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white z-10">
              <div className="flex justify-center mb-6">
                <MessageSquare className="w-16 h-16" />
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                {isRTL
                  ? 'نحن هنا لمساعدتك. أرسل لنا استفسارك وسنتواصل معك قريباً'
                  : 'We\'re here to help. Send us your inquiry and we\'ll get back to you soon'}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? 'الهاتف' : 'Phone'}
                </h3>
                <p className="text-gray-600 mb-2">+962-6-5658094</p>
                <p className="text-gray-600">WhatsApp: +962 793555761</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 p-4 rounded-full">
                    <Mail className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <p className="text-gray-600">fiata@jla.jo</p>
                <p className="text-gray-600">info@jla.jo</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 p-4 rounded-full">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? 'العنوان' : 'Address'}
                </h3>
                <p className="text-gray-600">
                  {isRTL
                    ? 'الشميساني، شارع يوسف بن تاشفين، بناية 18'
                    : 'Shmeissani, Yousef Bin Tashfeen Str., Bldg.18'}
                </p>
                <p className="text-gray-600">
                  {isRTL ? 'عمّان 11194، الأردن' : 'Amman 11194, Jordan'}
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Building className="w-10 h-10 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    {isRTL ? 'نموذج الاستفسار' : 'Inquiry Form'}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder={isRTL ? 'اكتب اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {isRTL ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {isRTL ? 'رقم الهاتف (مع رمز الدولة) *' : 'Phone Number (with country code) *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="+962 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isRTL ? 'اللغة المفضلة *' : 'Preferred Language *'}
                    </label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="english">{isRTL ? 'الإنجليزية' : 'English'}</option>
                      <option value="arabic">{isRTL ? 'العربية' : 'Arabic'}</option>
                      <option value="other">{isRTL ? 'أخرى' : 'Other'}</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {isRTL ? 'المسمى الوظيفي الحالي' : 'Current Role / Occupation'}
                      </label>
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder={isRTL ? 'مثال: مدير لوجستيات' : 'e.g., Logistics Manager'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {isRTL ? 'اسم المؤسسة / الشركة' : 'Organization / Company Name'}
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder={isRTL ? 'اسم الشركة' : 'Company name'}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {isRTL ? 'القطاع' : 'Industry Sector'}
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder={isRTL ? 'مثال: لوجستيات، نقل' : 'e.g., Logistics, Transport'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {isRTL ? 'سنوات الخبرة' : 'Years of Experience'}
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="0-1">0-1</option>
                        <option value="2-4">2-4</option>
                        <option value="5-7">5-7</option>
                        <option value="8+">8+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isRTL ? 'الموقع (المدينة/الدولة)' : 'Location (City/Country)'}
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder={isRTL ? 'مثال: عمّان، الأردن' : 'e.g., Amman, Jordan'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isRTL ? 'الرسالة / الاستفسار المحدد *' : 'Message / Specific Inquiry *'}
                    </label>
                    <textarea
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                      placeholder={isRTL
                        ? 'يرجى تزويدنا بتفاصيل استفسارك...'
                        : 'Please provide details about your inquiry...'}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeToContact"
                        id="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                      />
                      <label htmlFor="agreeToContact" className="text-sm text-gray-700">
                        {isRTL
                          ? 'أوافق على تلقي رسائل إلكترونية أو مكالمات هاتفية من النقابة اللوجستية الأردنية (JLA) بخصوص استفساري'
                          : 'I agree to receive emails or phone calls from JLA regarding my inquiry'}
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="subscribeNewsletter"
                        id="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                      />
                      <label htmlFor="subscribeNewsletter" className="text-sm text-gray-700">
                        {isRTL
                          ? 'أرغب في الاشتراك في النشرة الإخبارية للنقابة (JLA) للحصول على آخر التحديثات والفرص'
                          : 'I would like to subscribe to the JLA newsletter for updates and opportunities'}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    {isRTL ? 'إرسال' : 'Submit'}
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {isRTL ? 'موقعنا' : 'Our Location'}
                  </h3>
                  <div className="rounded-lg overflow-hidden h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1692.0779316010846!2d35.898973!3d31.98379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca118a33aadcb%3A0xf7d86619c29b3cc3!2sJordanian%20Logistics%20Association!5e0!3m2!1sen!2sjo!4v1763403486012!5m2!1sen!2sjo"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    {isRTL ? 'ساعات العمل' : 'Business Hours'}
                  </h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span>{isRTL ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                      <span className="font-semibold">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{isRTL ? 'الجمعة - السبت' : 'Friday - Saturday'}</span>
                      <span className="font-semibold">{isRTL ? 'مغلق' : 'Closed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
