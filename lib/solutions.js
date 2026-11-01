/* =============================================================================
   SOLUTIONS DATA — Minimal, honest descriptions of what BossCode can build.
   No fake software screenshots, no fake client names, minimal words.
   ============================================================================= */

export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'money', label: 'Accounts & Stock' },
  { id: 'people', label: 'Clinics & Teams' },
  { id: 'messages', label: 'Automation' },
];

export const SOLUTIONS = [
  {
    slug: 'shopledger',
    name: 'Accounts & Stock',
    code: 'BC // 01',
    icon: 'store',
    fromIcon: 'file',
    toIcon: 'store',
    fromLabel: 'Registers',
    toLabel: 'One Screen',
    category: 'Paper to Digital',
    filters: ['money'],
    tagline: 'Sales, stock, and dues in one place.',
    short: 'Move sales and stock off paper registers.',
    pills: ['Sales', 'Stock', 'Dues'],
    forWho: ['Retail shops', 'General stores', 'Electronics', 'Garments'],
    before: [
      'Sales in paper registers',
      'Stock counted by hand',
      'Dues kept in memory',
    ],
    after: [
      'Every record on one screen',
      'Live stock count',
      'Clear customer dues',
    ],
    features: [
      { icon: 'receipt', title: 'Simple Billing', text: 'Save bills in seconds.' },
      { icon: 'boxes', title: 'Live Stock', text: 'See what is left anytime.' },
      { icon: 'wallet', title: 'Clear Dues', text: 'Know who owes what.' },
    ],
    steps: [
      { title: 'We Talk', text: 'Understand how your shop works.' },
      { title: 'We Build It', text: 'Designed around your daily routine.' },
      { title: 'Go Live', text: 'We train you and stay for support.' },
    ],
    faqs: [
      { q: 'Have you built this already?', a: 'We build it fresh around your business when you work with us.' },
      { q: 'Do I need a computer?', a: 'No. It can work on your phone or computer.' },
      { q: 'Is it easy to use?', a: 'Yes. Built in plain words so anyone can use it.' },
    ],
  },
  {
    slug: 'clinicflow',
    name: 'Appointments & Files',
    code: 'BC // 02',
    icon: 'stethoscope',
    fromIcon: 'file',
    toIcon: 'calendar',
    fromLabel: 'Paper Diary',
    toLabel: 'Digital Queue',
    category: 'Work Management',
    filters: ['people'],
    tagline: 'Bookings and patient files in one system.',
    short: 'Replace paper diaries with digital bookings and files.',
    pills: ['Bookings', 'Files', 'Reminders'],
    forWho: ['Clinics', 'Dental clinics', 'Labs', 'Centres'],
    before: [
      'Bookings in a paper diary',
      'Files lost in cupboards',
      'Manual reminder calls',
    ],
    after: [
      'Clear daily booking list',
      'Instant patient history',
      'Auto WhatsApp reminders',
    ],
    features: [
      { icon: 'calendar', title: 'Daily Queue', text: 'See today\'s bookings clearly.' },
      { icon: 'file', title: 'Digital Files', text: 'Find any past visit in seconds.' },
      { icon: 'bell', title: 'Auto Reminders', text: 'Send WhatsApp alerts automatically.' },
    ],
    steps: [
      { title: 'We Talk', text: 'Learn how your clinic runs.' },
      { title: 'We Build It', text: 'Set up around your timings.' },
      { title: 'Go Live', text: 'Simple training for your staff.' },
    ],
    faqs: [
      { q: 'Is this a pre-made app?', a: 'No. We custom-build it for your clinic when you hire us.' },
      { q: 'Are records private?', a: 'Yes. Only approved staff can view records.' },
      { q: 'What about old files?', a: 'We help move your active records in.' },
    ],
  },
  {
    slug: 'billbot',
    name: 'Bills & Reports',
    code: 'BC // 03',
    icon: 'receipt',
    fromIcon: 'clock',
    toIcon: 'zap',
    fromLabel: 'Manual Typing',
    toLabel: 'Autopilot',
    category: 'Automation',
    filters: ['money', 'messages'],
    tagline: 'Daily bills and reports made automatically.',
    short: 'Automate repeat bills, dues, and daily summaries.',
    pills: ['Billing', 'Dues', 'Reports'],
    forWho: ['Wholesalers', 'Distributors', 'Agencies', 'Institutes'],
    before: [
      'Bills typed by hand',
      'Dues chased on calls',
      'Reports made at night',
    ],
    after: [
      'Bills made on schedule',
      'Auto payment reminders',
      'Daily summary on phone',
    ],
    features: [
      { icon: 'zap', title: 'Auto Billing', text: 'Repeat bills ready without typing.' },
      { icon: 'bell', title: 'Dues Alerts', text: 'Polite reminders sent on time.' },
      { icon: 'chart', title: 'Daily Summary', text: 'Clear totals every evening.' },
    ],
    steps: [
      { title: 'We Talk', text: 'See how you bill today.' },
      { title: 'We Build It', text: 'Automate the repetitive parts.' },
      { title: 'Go Live', text: 'Less manual work every day.' },
    ],
    faqs: [
      { q: 'How is this built?', a: 'We custom-build it around your billing routine.' },
      { q: 'Will it have our name?', a: 'Yes, 100% branded for your business.' },
      { q: 'Do I own the data?', a: 'Yes. All records and data belong to you.' },
    ],
  },
  {
    slug: 'ordertrack',
    name: 'Orders & Tasks',
    code: 'BC // 04',
    icon: 'clipboard',
    fromIcon: 'message',
    toIcon: 'clipboard',
    fromLabel: 'Messy Chats',
    toLabel: 'Clear Board',
    category: 'Work Management',
    filters: ['people'],
    tagline: 'Keep orders and staff work in one place.',
    short: 'Track every order and task without losing anything.',
    pills: ['Orders', 'Tasks', 'Status'],
    forWho: ['Workshops', 'Boutiques', 'Print shops', 'Small teams'],
    before: [
      'Orders lost in chats',
      'Asking staff for updates',
      'Missed delivery dates',
    ],
    after: [
      'Every order in one list',
      'Clear daily staff tasks',
      'On-time deliveries',
    ],
    features: [
      { icon: 'clipboard', title: 'Order List', text: 'See what is new, in work, or ready.' },
      { icon: 'users', title: 'Staff Tasks', text: 'Everyone knows their daily work.' },
      { icon: 'bell', title: 'Ready Alerts', text: 'Notify buyers when work is done.' },
    ],
    steps: [
      { title: 'We Talk', text: 'Learn your order steps.' },
      { title: 'We Build It', text: 'Simple screen for your team.' },
      { title: 'Go Live', text: 'Easy 1-day staff training.' },
    ],
    faqs: [
      { q: 'Is this custom built?', a: 'Yes. We build it to match your exact workflow.' },
      { q: 'Can non-tech staff use it?', a: 'Yes. Kept super simple with plain words.' },
      { q: 'Does it work on phone?', a: 'Yes, on any phone or computer.' },
    ],
  },
  {
    slug: 'chatpilot',
    name: 'WhatsApp Automation',
    code: 'BC // 05',
    icon: 'message',
    fromIcon: 'message',
    toIcon: 'zap',
    fromLabel: 'Slow Replies',
    toLabel: 'Auto Reply',
    category: 'Automation',
    filters: ['messages'],
    tagline: 'Auto-replies, confirmations, and reminders on WhatsApp.',
    short: 'Let common replies and reminders run on their own.',
    pills: ['WhatsApp', 'Reminders', 'Auto-Reply'],
    forWho: ['Online sellers', 'Shops', 'Clinics', 'Service teams'],
    before: [
      'Typing same replies daily',
      'Manual order confirmations',
      'Late customer responses',
    ],
    after: [
      'Instant answers 24/7',
      'Auto order confirmations',
      'You handle only real chats',
    ],
    features: [
      { icon: 'message', title: 'Instant Replies', text: 'Answer common questions 24/7.' },
      { icon: 'check', title: 'Confirmations', text: 'Confirm orders automatically.' },
      { icon: 'bell', title: 'Follow-ups', text: 'Send reminders on time.' },
    ],
    steps: [
      { title: 'We Talk', text: 'List your common messages.' },
      { title: 'We Set It Up', text: 'Written in your natural tone.' },
      { title: 'Go Live', text: 'Runs 24/7 on your number.' },
    ],
    faqs: [
      { q: 'Will it sound natural?', a: 'Yes, written in simple English or Roman Urdu.' },
      { q: 'Can I reply myself too?', a: 'Yes, you can chat directly anytime.' },
      { q: 'Is the first chat free?', a: 'Yes, 100% free with no pressure.' },
    ],
  },
];

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
