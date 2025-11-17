import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            تواصل معنا
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            هل لديك أسئلة؟ نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">معلومات الاتصال</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">العنوان</h4>
                    <p className="text-slate-600">شارع الأعمال 123<br />عمان، الأردن<br />11118</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">الهاتف</h4>
                    <p className="text-slate-600">+962 6 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-900">البريد الإلكتروني</h4>
                    <p className="text-slate-600">info@jla.org.jo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699564800000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">أرسل لنا رسالة</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="أحمد محمد"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="ahmad@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="كيف يمكننا مساعدتك؟"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    placeholder="أخبرنا المزيد عن استفسارك..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    تم إرسال الرسالة بنجاح! سنعاود الاتصال بك قريباً.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    حدث خطأ ما. يرجى المحاولة مرة أخرى.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'جاري الإرسال...'
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send size={18} className="mr-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
