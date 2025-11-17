/*
  # Create Member Registration Schema

  1. New Tables
    - `member_registrations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `company_name_ar` (text) - اسم الشركة بالعربية
      - `company_name_en` (text) - اسم الشركة بالانجليزية
      - `registration_number` (text) - رقم التسجيل
      - `company_type` (text) - نوع الشركة
      - `authorized_person_name` (text) - اسم المفوض
      - `national_id` (text) - الرقم الوطني
      - `capital` (text) - رأس المال
      - `years_experience` (integer) - عدد سنوات الخبرة
      - `city` (text) - المدينة
      - `district` (text) - الحي
      - `mobile` (text) - الموبايل
      - `email` (text) - البريد الالكتروني
      - `phone` (text) - الهاتف
      - `fax` (text) - الفاكس
      - `branches_domestic` (text) - الفروع داخل المملكة
      - `branches_international` (text) - الفروع خارج المملكة
      - `license` (text) - الترخيص
      - `trucks_count` (integer) - عدد الشاحنات
      - `storage_area` (text) - مستودعات التخزين بالمتر المربع
      - `employees_land_shipping` (integer) - عدد الموظفين في الشحن البري
      - `employees_clearance` (integer) - عدد الموظفين في التخليص
      - `employees_sea_shipping` (integer) - عدد الموظفين في الشحن البحري
      - `employees_air_shipping` (integer) - عدد الموظفين في الشحن الجوي
      - `employees_logistics` (integer) - عدد الموظفين في الخدمات اللوجستية
      - `employees_express_mail` (integer) - عدد الموظفين في البريد السريع
      - `employees_other` (integer) - عدد الموظفين في اخرى
      - `employees_total` (integer) - الإجمالي
      - `represents_companies` (text) - تمثيل شركات عالمية
      - `union_member_references` (text) - المعرفين من اعضاء النقابة
      - `other_memberships` (text) - العضوية في النقابات و الجمعيات الاخرى
      - `info_confirmed` (boolean) - تأكيد ان المعلومات صحيحة
      - `registration_certificate_url` (text) - شهادة تسجيل
      - `profession_license_url` (text) - رخصة مهن سارية
      - `license_photo_url` (text) - صورة ترخيص
      - `id_photo_url` (text) - صورة عن الهوية
      - `criminal_record_url` (text) - شهادة عدم محكومية
      - `academic_certificate_url` (text) - صورة مؤهل علمي
      - `status` (text) - حالة الطلب (pending, approved, rejected)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `member_registrations` table
    - Add policies for authenticated users to:
      - Create their own registration
      - Read their own registration data
      - Update their own registration data
*/

CREATE TABLE IF NOT EXISTS member_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  company_name_ar text NOT NULL,
  company_name_en text NOT NULL,
  registration_number text NOT NULL,
  company_type text NOT NULL,
  authorized_person_name text NOT NULL,
  national_id text NOT NULL,
  capital text NOT NULL,
  years_experience integer NOT NULL,
  city text NOT NULL,
  district text NOT NULL,
  mobile text NOT NULL,
  email text NOT NULL,
  phone text,
  fax text,
  branches_domestic text,
  branches_international text,
  license text NOT NULL,
  trucks_count integer DEFAULT 0,
  storage_area text,
  employees_land_shipping integer DEFAULT 0,
  employees_clearance integer DEFAULT 0,
  employees_sea_shipping integer DEFAULT 0,
  employees_air_shipping integer DEFAULT 0,
  employees_logistics integer DEFAULT 0,
  employees_express_mail integer DEFAULT 0,
  employees_other integer DEFAULT 0,
  employees_total integer DEFAULT 0,
  represents_companies text,
  union_member_references text,
  other_memberships text,
  info_confirmed boolean DEFAULT false,
  registration_certificate_url text,
  profession_license_url text,
  license_photo_url text,
  id_photo_url text,
  criminal_record_url text,
  academic_certificate_url text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

ALTER TABLE member_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can create own registration"
  ON member_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own registration"
  ON member_registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own registration"
  ON member_registrations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS member_registrations_user_id_idx ON member_registrations(user_id);
CREATE INDEX IF NOT EXISTS member_registrations_status_idx ON member_registrations(status);