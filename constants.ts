import { PricingPlan } from './types';
import { MapPin, Phone, Clock, Zap, Wifi, Coffee, ShieldCheck } from 'lucide-react';

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