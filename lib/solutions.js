/* =============================================================================
   SOLUTIONS DATA — single source of truth for /solutions, /solutions/[slug],
   and homepage visual previews.
   Designed for 3-second scanning by non-technical business owners.
   ============================================================================= */

export const FILTERS = [
  { id: 'all', label: 'All tools' },
  { id: 'money', label: 'Sales & udhaar' },
  { id: 'stock', label: 'Stock' },
  { id: 'people', label: 'Patients & staff' },
  { id: 'messages', label: 'WhatsApp' },
];

export const SOLUTIONS = [
  {
    slug: 'shopledger',
    name: 'ShopLedger',
    icon: 'store',
    category: 'Accounts & Stock',
    filters: ['money', 'stock'],
    tagline: 'Sales, live stock, and customer dues on one screen.',
    short: '1-tap billing, stock alerts, and udhaar tracking.',
    forWho: ['Retail shops', 'General stores', 'Electronics', 'Garments'],
    before: [
      'Sales in paper registers',
      'Stock counted by hand',
      'Customer udhaar in memory',
    ],
    after: [
      'Bills saved in 3 taps',
      'Early low-stock alerts',
      'Exact dues per customer',
    ],
    features: [
      { icon: 'receipt', title: '3-Tap Billing', text: 'Make or WhatsApp bills in seconds.' },
      { icon: 'boxes', title: 'Live Stock Alerts', text: 'Warning before stock runs out.' },
      { icon: 'wallet', title: 'Udhaar Tracker', text: 'See dues and send polite reminders.' },
    ],
    screens: [
      {
        tab: 'Today',
        title: 'Today at a glance',
        stats: [{ l: 'Sales', v: 'Rs 84,500' }, { l: 'Bills', v: '36' }, { l: 'Profit', v: 'Rs 12,300' }],
        bars: [30, 45, 38, 62, 55, 80, 70],
        rows: [
          { a: 'Bill #1042', b: 'Cash · 2 items', tag: 'Paid', tone: 'ok' },
          { a: 'Bill #1041', b: 'Ali Traders', tag: 'Due', tone: 'warn' },
          { a: 'Bill #1040', b: 'Cash · 5 items', tag: 'Paid', tone: 'ok' },
        ],
      },
      {
        tab: 'Stock',
        title: 'Stock status',
        stats: [{ l: 'Items', v: '412' }, { l: 'Low', v: '7' }, { l: 'Value', v: 'Rs 9.2L' }],
        bars: [80, 72, 66, 50, 44, 30, 18],
        rows: [
          { a: 'Cooking oil 5L', b: '3 left', tag: 'Low', tone: 'warn' },
          { a: 'Sugar 1kg', b: '120 left', tag: 'Good', tone: 'ok' },
          { a: 'Tea 190g', b: '2 left', tag: 'Low', tone: 'warn' },
        ],
      },
      {
        tab: 'Dues',
        title: 'Udhaar to collect',
        stats: [{ l: 'Total due', v: 'Rs 1.4L' }, { l: 'Customers', v: '18' }, { l: 'Overdue', v: '4' }],
        bars: [20, 35, 30, 48, 60, 52, 66],
        rows: [
          { a: 'Ali Traders', b: 'Rs 32,000', tag: '12 days', tone: 'warn' },
          { a: 'Noor Store', b: 'Rs 8,500', tag: '3 days', tone: 'ok' },
          { a: 'Hamid Bhai', b: 'Rs 15,000', tag: '20 days', tone: 'bad' },
        ],
      },
    ],
    steps: [
      { title: 'We load your items', text: 'Items and balances entered for you.' },
      { title: 'Sell on phone or PC', text: 'Make bills in seconds.' },
      { title: 'See daily profit', text: 'Sales and stock stay live 24/7.' },
    ],
    faqs: [
      { q: 'Do I need a computer?', a: 'No. Works on any phone, tablet, or PC.' },
      { q: 'Can old register data move in?', a: 'Yes. We enter your items and balances.' },
      { q: 'Is it easy for staff?', a: 'Yes. Staff learn it in one day.' },
    ],
  },
  {
    slug: 'clinicflow',
    name: 'ClinicFlow',
    icon: 'stethoscope',
    category: 'Appointments & Records',
    filters: ['people', 'messages'],
    tagline: 'Patient queue, files, and WhatsApp reminders in one place.',
    short: 'Digital patient history, token queue, and auto reminders.',
    forWho: ['Clinics', 'Dental clinics', 'Labs', 'Physio centres'],
    before: [
      'Appointments in a paper diary',
      'Patient files lost in cupboards',
      'Calling every patient manually',
    ],
    after: [
      'Live patient queue on screen',
      'Full patient history in 2 seconds',
      'Auto WhatsApp slot reminders',
    ],
    features: [
      { icon: 'calendar', title: 'Live Token Queue', text: 'See booked, waiting, and seen patients.' },
      { icon: 'file', title: '1-Click Patient File', text: 'Past visits, notes, and lab reports.' },
      { icon: 'bell', title: 'WhatsApp Reminders', text: 'Automatic slot alerts before visits.' },
    ],
    screens: [
      {
        tab: 'Today',
        title: 'Today\'s patients',
        stats: [{ l: 'Booked', v: '24' }, { l: 'Seen', v: '15' }, { l: 'Waiting', v: '3' }],
        bars: [20, 40, 60, 75, 55, 65, 30],
        rows: [
          { a: 'Ayesha K.', b: '5:00 PM · Check-up', tag: 'Next', tone: 'ok' },
          { a: 'Imran S.', b: '5:15 PM · Follow-up', tag: 'Waiting', tone: 'warn' },
          { a: 'Sana R.', b: '5:30 PM · New', tag: 'Booked', tone: 'ok' },
        ],
      },
      {
        tab: 'Records',
        title: 'Patient file',
        stats: [{ l: 'Visits', v: '6' }, { l: 'Last', v: '12 Mar' }, { l: 'Files', v: '4' }],
        bars: [30, 30, 55, 45, 70, 60, 85],
        rows: [
          { a: 'Visit · 12 Mar', b: 'Fever, antibiotics', tag: 'Note', tone: 'ok' },
          { a: 'Lab report', b: 'Blood test', tag: 'PDF', tone: 'ok' },
          { a: 'Visit · 20 Jan', b: 'Routine check', tag: 'Note', tone: 'ok' },
        ],
      },
      {
        tab: 'Reminders',
        title: 'WhatsApp alerts',
        stats: [{ l: 'Sent', v: '38' }, { l: 'Confirmed', v: '31' }, { l: 'Pending', v: '7' }],
        bars: [50, 60, 72, 66, 80, 76, 90],
        rows: [
          { a: 'Ahmed Z.', b: 'Tomorrow 11 AM', tag: 'Confirmed', tone: 'ok' },
          { a: 'Hina T.', b: 'Tomorrow 12 PM', tag: 'Sent', tone: 'warn' },
          { a: 'Bilal M.', b: 'Tomorrow 1 PM', tag: 'Confirmed', tone: 'ok' },
        ],
      },
    ],
    steps: [
      { title: 'Set your timings', text: 'Doctors, slots, and fees configured.' },
      { title: 'Book in 1 tap', text: 'Instant WhatsApp confirmation sent.' },
      { title: 'Open files fast', text: 'Every visit saved automatically.' },
    ],
    faqs: [
      { q: 'Are patient records private?', a: 'Yes. Doctor-only access with cloud backup.' },
      { q: 'Can patients book on WhatsApp?', a: 'Yes. Bookings connect directly to your queue.' },
      { q: 'What about old paper files?', a: 'We move active patient histories in for you.' },
    ],
  },
  {
    slug: 'billbot',
    name: 'BillBot',
    icon: 'receipt',
    category: 'Billing Automation',
    filters: ['money', 'messages'],
    tagline: 'Invoices, payment reminders, and daily reports on autopilot.',
    short: 'Auto bills, WhatsApp payment nudges, and morning reports.',
    forWho: ['Wholesalers', 'Distributors', 'Agencies', 'Academies'],
    before: [
      'Bills typed by hand',
      'Late payments chased by phone',
      'Reports made late at night',
    ],
    after: [
      'Repeat bills sent on schedule',
      'Polite WhatsApp payment nudges',
      'Morning summary on your phone',
    ],
    features: [
      { icon: 'zap', title: 'Scheduled Billing', text: 'Monthly or weekly bills with zero typing.' },
      { icon: 'bell', title: 'Dues Follow-Up', text: 'Auto WhatsApp reminders on due dates.' },
      { icon: 'chart', title: 'Morning Brief', text: 'Daily collection summary at 9 AM.' },
    ],
    screens: [
      {
        tab: 'Bills',
        title: 'This month\'s bills',
        stats: [{ l: 'Created', v: '214' }, { l: 'Sent', v: '214' }, { l: 'Hand-typed', v: '0' }],
        bars: [40, 55, 50, 70, 65, 85, 95],
        rows: [
          { a: 'Rehman Mart', b: 'Auto · 1st of month', tag: 'Sent', tone: 'ok' },
          { a: 'City Pharma', b: 'Auto · weekly', tag: 'Sent', tone: 'ok' },
          { a: 'Zia Stores', b: 'Auto · weekly', tag: 'Queued', tone: 'warn' },
        ],
      },
      {
        tab: 'Dues',
        title: 'Collections',
        stats: [{ l: 'Collected', v: 'Rs 6.1L' }, { l: 'Pending', v: 'Rs 1.8L' }, { l: 'Overdue', v: '5' }],
        bars: [25, 38, 42, 58, 52, 70, 64],
        rows: [
          { a: 'Zia Stores', b: 'Rs 45,000', tag: 'Reminder sent', tone: 'warn' },
          { a: 'Rehman Mart', b: 'Rs 82,000', tag: 'Paid', tone: 'ok' },
          { a: 'Metro Foods', b: 'Rs 30,500', tag: '9 days late', tone: 'bad' },
        ],
      },
      {
        tab: 'Report',
        title: 'Morning brief',
        stats: [{ l: 'Sales', v: 'Rs 2.3L' }, { l: 'Orders', v: '58' }, { l: 'New', v: '4' }],
        bars: [60, 52, 70, 64, 80, 74, 88],
        rows: [
          { a: 'Yesterday\'s sales', b: 'Up 8% vs last week', tag: 'Good', tone: 'ok' },
          { a: 'Top item', b: 'Rice 25kg · 42 bags', tag: 'Hot', tone: 'ok' },
          { a: 'Action needed', b: '5 overdue parties', tag: 'Review', tone: 'warn' },
        ],
      },
    ],
    steps: [
      { title: 'Share billing cycle', text: 'Tell us your parties and schedule.' },
      { title: 'Set the autopilot', text: 'Invoices and WhatsApp nudges run on time.' },
      { title: 'Track live', text: 'See who paid today on your phone.' },
    ],
    faqs: [
      { q: 'Will bills have my logo?', a: 'Yes. Branded PDF invoices with your logo.' },
      { q: 'Can I pause a reminder?', a: 'Yes. One tap pauses reminders for any client.' },
      { q: 'English or Urdu messages?', a: 'Either one — in the tone your clients prefer.' },
    ],
  },
  {
    slug: 'ordertrack',
    name: 'OrderTrack',
    icon: 'clipboard',
    category: 'Orders & Staff Tasks',
    filters: ['people', 'stock'],
    tagline: 'Every order and staff task tracked from start to delivery.',
    short: 'Track order status, staff tasks, and delivery deadlines.',
    forWho: ['Workshops', 'Tailors & boutiques', 'Print shops', 'Small factories'],
    before: [
      'Orders buried in WhatsApp chats',
      'Asking staff "what is pending?"',
      'Deadlines missed without warning',
    ],
    after: [
      'Orders show New → Working → Ready',
      'Each worker sees their daily list',
      'Due-today orders highlighted',
    ],
    features: [
      { icon: 'clipboard', title: 'Live Order Board', text: 'See New, Working, and Ready at a glance.' },
      { icon: 'users', title: 'Staff Task List', text: 'Assign clear work to each team member.' },
      { icon: 'bell', title: 'Ready Alerts', text: 'Auto-message customers when orders are ready.' },
    ],
    screens: [
      {
        tab: 'Board',
        title: 'Order board',
        stats: [{ l: 'New', v: '9' }, { l: 'Working', v: '14' }, { l: 'Ready', v: '6' }],
        bars: [35, 48, 60, 52, 72, 66, 80],
        rows: [
          { a: 'Order #218', b: 'Suit · Due Fri', tag: 'Working', tone: 'warn' },
          { a: 'Order #217', b: 'Banner · Due Thu', tag: 'Ready', tone: 'ok' },
          { a: 'Order #215', b: 'Uniforms · Due Wed', tag: 'Late', tone: 'bad' },
        ],
      },
      {
        tab: 'Staff',
        title: 'Team tasks',
        stats: [{ l: 'Open', v: '23' }, { l: 'Done today', v: '11' }, { l: 'Late', v: '2' }],
        bars: [70, 55, 62, 48, 58, 40, 52],
        rows: [
          { a: 'Usman', b: 'Stitch order #218', tag: 'Today', tone: 'ok' },
          { a: 'Faisal', b: 'Print order #219', tag: 'Tomorrow', tone: 'ok' },
          { a: 'Kamran', b: 'Pack order #215', tag: 'Late', tone: 'bad' },
        ],
      },
      {
        tab: 'Alerts',
        title: 'Needs attention',
        stats: [{ l: 'Due today', v: '4' }, { l: 'Late', v: '2' }, { l: 'Ready', v: '6' }],
        bars: [15, 25, 40, 36, 55, 60, 72],
        rows: [
          { a: 'Order #215', b: '1 day late', tag: 'Call', tone: 'bad' },
          { a: 'Order #217', b: 'Ready for pickup', tag: 'Notify', tone: 'ok' },
          { a: 'Order #220', b: 'Due today 6 PM', tag: 'Check', tone: 'warn' },
        ],
      },
    ],
    steps: [
      { title: 'Match your stages', text: 'Set up the exact steps your workshop uses.' },
      { title: 'Staff tap to update', text: 'Workers mark tasks done in 1 tap.' },
      { title: 'Deliver on time', text: 'Spot delays early and notify customers.' },
    ],
    faqs: [
      { q: 'Can non-technical workers use it?', a: 'Yes. Big simple buttons and 1-day training.' },
      { q: 'Does it send WhatsApp updates?', a: 'Yes. Auto alerts when an order is booked or ready.' },
      { q: 'Can I customize the stages?', a: '100%. Built around your exact workflow.' },
    ],
  },
  {
    slug: 'chatpilot',
    name: 'ChatPilot',
    icon: 'message',
    category: 'WhatsApp Automation',
    filters: ['messages', 'people'],
    tagline: 'Instant WhatsApp replies, order confirmations, and follow-ups 24/7.',
    short: 'Auto-reply to common questions, confirm orders, and send reminders.',
    forWho: ['Online sellers', 'Restaurants', 'Clinics', 'WhatsApp sellers'],
    before: [
      'Typing prices & location 100x a day',
      'Confirming COD orders manually',
      'Buyers lost when replies take hours',
    ],
    after: [
      'Prices & menu sent in 2 seconds',
      'COD orders confirmed automatically',
      'You only handle real human chats',
    ],
    features: [
      { icon: 'message', title: '2-Second Replies', text: 'Answers price and delivery questions 24/7.' },
      { icon: 'check', title: 'Order Confirmation', text: 'Verifies COD and online orders automatically.' },
      { icon: 'languages', title: 'Urdu & English', text: 'Natural replies in Roman Urdu or English.' },
    ],
    screens: [
      {
        tab: 'Chats',
        title: 'Auto replies',
        stats: [{ l: 'Replied', v: '126' }, { l: 'By you', v: '9' }, { l: 'Speed', v: '2 sec' }],
        bars: [45, 60, 55, 78, 70, 88, 92],
        rows: [
          { a: 'Customer', b: 'Delivery charges kitne hain?', tag: 'Ask', tone: 'ok' },
          { a: 'ChatPilot', b: 'Karachi Rs 150 · 2 din', tag: 'Auto', tone: 'ok' },
          { a: 'Customer', b: 'Bulk order baat karni hai', tag: 'To You', tone: 'warn' },
        ],
      },
      {
        tab: 'Orders',
        title: 'Confirmations',
        stats: [{ l: 'Orders', v: '48' }, { l: 'Confirmed', v: '48' }, { l: 'Typed', v: '0' }],
        bars: [30, 42, 58, 50, 66, 72, 84],
        rows: [
          { a: 'Order #512', b: 'COD confirmed via WhatsApp', tag: 'Sent', tone: 'ok' },
          { a: 'Order #511', b: 'Rider dispatched alert', tag: 'Sent', tone: 'ok' },
          { a: 'Order #510', b: 'Delivered + feedback ask', tag: 'Sent', tone: 'ok' },
        ],
      },
      {
        tab: 'Reminders',
        title: 'Follow-ups',
        stats: [{ l: 'Queued', v: '22' }, { l: 'Sent', v: '61' }, { l: 'Replies', v: '38' }],
        bars: [20, 34, 44, 40, 62, 58, 76],
        rows: [
          { a: 'Payment nudge', b: 'Tomorrow 10 AM', tag: 'Queued', tone: 'warn' },
          { a: 'Slot reminder', b: 'Today 5 PM', tag: 'Sent', tone: 'ok' },
          { a: 'Re-order offer', b: 'After 30 days', tag: 'Auto', tone: 'ok' },
        ],
      },
    ],
    steps: [
      { title: 'List top questions', text: 'Tell us what buyers ask daily.' },
      { title: 'We set up replies', text: 'Your prices in English or Roman Urdu.' },
      { title: 'You handle VIP chats', text: 'Routine chats run on autopilot.' },
    ],
    faqs: [
      { q: 'Will it sound robotic?', a: 'No. Short, friendly messages in your tone.' },
      { q: 'Can I jump into any chat?', a: 'Yes. ChatPilot pauses when you reply.' },
      { q: 'Works on my business number?', a: 'Yes. We set it up step by step.' },
    ],
  },
];

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
