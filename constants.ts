import { PricingPlan } from './types';
import { MapPin, Phone, Clock, Zap, Wifi, Coffee, ShieldCheck, Brain, MessageCircle, Activity, Code, Users, Gift } from 'lucide-react';

export const CONTACT_INFO = {
  phone1: "01556144188",
  phone2: "01096089438",
  whatsapp: "201556144188", // International format
  location: "الدكرنس – برج التحرير – الدور السادس",
  locationLink: "https://maps.google.com/?q=Dekernes+Tahrir+Tower" // Generic link if specific coords aren't known
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'hour',
    title: 'الساعة',
    price: '15',
    period: 'جنيه',
    features: ['إنترنت فائق السرعة', 'مكان هادئ ومكيف', 'مشروب ترحيبي'],
    type: 'individual',
    isFeatured: false,
  },
  {
    id: 'day',
    title: 'اليوم كامل',
    price: '100',
    period: 'جنيه',
    features: ['استخدام طوال اليوم', 'إنترنت فائق السرعة', 'مشروب ساخن مجاني', 'طباعة (عدد محدود)'],
    type: 'individual',
    isFeatured: true,
  },
  {
    id: 'month-sub',
    title: 'اشتراك شهري',
    price: '350',
    period: 'جنيه',
    features: ['ساعة يومياً', 'خصم على المشروبات', 'أولوية الحجز', 'واي فاي مفتوح'],
    type: 'individual',
    isFeatured: false,
  },
  {
    id: 'private-hour',
    title: 'الغرفة الخاصة',
    price: '180',
    period: 'جنيه / ساعة',
    features: ['خصوصية تامة', 'شاشة عرض', 'مثالية للاجتماعات', 'تتسع لعدة أفراد'],
    type: 'private',
    isFeatured: false,
  },
  {
    id: 'private-month',
    title: 'الغرفة الخاصة',
    price: '3000',
    period: 'جنيه / شهر',
    features: ['استخدام شهري', 'مكتب خاص مغلق', 'خدمات VIP', 'دخول 24/7'],
    type: 'private',
    isFeatured: false,
  },
];

export const FEATURES = [
  { icon: Wifi, title: "إنترنت صاروخي", desc: "سرعات عالية تناسب جميع أعمالك" },
  { icon: Coffee, title: "مشروبات فاخرة", desc: "قهوة ومشروبات ساخنة متوفرة دائماً" },
  { icon: Clock, title: "هدوء وتركيز", desc: "بيئة مصممة خصيصاً لزيادة إنتاجيتك" },
  { icon: Zap, title: "طاقة إيجابية", desc: "مجتمع من المبدعين حولك في كل مكان" },
];

export const COURSES_DATA = [
  { icon: Brain, title: "صعوبات التعلّم", desc: "برامج متخصصة لدعم وتنمية مهارات التعلم" },
  { icon: MessageCircle, title: "كورسات التخاطب", desc: "جلسات احترافية لتحسين مهارات النطق والتواصل" },
  { icon: Activity, title: "تأهيل اضطرابات اللغة", desc: "برامج علاجية شاملة لتأخر النمو اللغوي" },
  { icon: Code, title: "برمجة للكبار والأطفال", desc: "تعلم لغات البرمجة الحديثة من الصفر للاحتراف" },
];

export const SPECIAL_OFFERS = [
  {
    id: 'duo',
    title: 'عرض الصحاب',
    subtitle: 'إنت وصاحبك',
    price: '500',
    originalPrice: '700',
    features: ['اشتراك لشخصين', 'وفروا سوا', 'شامل كل المميزات'],
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'trio',
    title: 'عرض الشلة',
    subtitle: 'إنت + 2 صحاب',
    price: '600',
    originalPrice: '1050',
    features: ['اشتراك لـ 3 أشخاص', 'توفير ضخم', 'شامل كل المميزات'],
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'squad',
    title: 'عرض الجدعان',
    subtitle: 'إنت + 3 صحاب',
    price: '800',
    originalPrice: '1400',
    features: ['اشتراك لـ 4 أشخاص', 'أقوى توفير', 'شامل كل المميزات'],
    icon: Users,
    color: 'from-emerald-500 to-green-500'
  }
];