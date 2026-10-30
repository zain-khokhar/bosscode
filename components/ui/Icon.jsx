import {
  Store, Stethoscope, Receipt, ClipboardList, MessageCircle, Boxes, Wallet, BarChart3,
  Search, Cloud, CalendarCheck, FileText, Bell, Lock, Zap, Clock, Users, Check, Send,
  Languages, Mail, MapPin, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, Phone,
  Smartphone, Package, TrendingUp, X,
} from 'lucide-react';

const MAP = {
  store: Store, stethoscope: Stethoscope, receipt: Receipt, clipboard: ClipboardList,
  message: MessageCircle, boxes: Boxes, wallet: Wallet, chart: BarChart3, search: Search,
  cloud: Cloud, calendar: CalendarCheck, file: FileText, bell: Bell, lock: Lock, zap: Zap,
  clock: Clock, users: Users, check: Check, send: Send, languages: Languages, mail: Mail,
  pin: MapPin, arrow: ArrowRight, shield: ShieldCheck, heart: HeartHandshake,
  sparkles: Sparkles, phone: Phone, mobile: Smartphone, package: Package, trend: TrendingUp, x: X,
};

export default function Icon({ name, size = 20, strokeWidth = 1.9, className }) {
  const C = MAP[name] || Sparkles;
  return <C size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
