/* =============================================================================
   SOLUTIONS DATA — Concept Previews showing non-technical business owners
   how their custom system will look IF we build it for them.
   Zero fake client claims. Zero meaningless bar charts.
   ============================================================================= */

export const FILTERS = [
  { id: 'all', label: 'All concepts' },
  { id: 'money', label: 'Sales & udhaar' },
  { id: 'stock', label: 'Stock' },
  { id: 'people', label: 'Patients & staff' },
  { id: 'messages', label: 'WhatsApp' },
];

export const SOLUTIONS = [
  {
    slug: 'shopledger',
    name: 'Shop & Khata System',
    shortName: 'ShopLedger Concept',
    icon: 'store',
    category: 'Accounts & Stock Concept',
    filters: ['money', 'stock'],
    tagline: 'How your shop counter, stock, and customer udhaar will look on one screen.',
    short: 'Concept preview: 1-tap billing, low-stock warnings, and digital udhaar khata.',
    forWho: ['Retail shops', 'General stores', 'Electronics', 'Garments'],
    before: [
      'Sales written in paper registers',
      'Stock counted by hand at night',
      'Customer udhaar guessed from memory',
    ],
    after: [
      'Bills saved & shared in 3 taps',
      'Early warning before stock runs out',
      'Exact dues shown per customer',
    ],
    features: [
      { icon: 'receipt', title: '3-Tap Counter Bill', text: 'Make, print, or WhatsApp bills in seconds.' },
      { icon: 'boxes', title: 'Low-Stock Warnings', text: 'See what is running low before it finishes.' },
      { icon: 'wallet', title: 'Digital Udhaar Khata', text: 'Track who owes what and send polite reminders.' },
    ],
    screens: [
      {
        tab: 'Counter Bill',
        title: 'Instant Counter Billing',
        stats: [
          { l: 'Today\'s Sales', v: 'Rs 84,500' },
          { l: 'Bills Made', v: '36 bills' },
          { l: 'Cash in Hand', v: 'Rs 72,000' },
        ],
        widget: {
          kind: 'receipt',
          billNo: 'Bill #1042 · Counter 1',
          customer: 'Ali Traders (Regular)',
          items: [
            { name: 'Cooking Oil 5L Carton', qty: '2 × Rs 2,700', amount: 'Rs 5,400' },
            { name: 'Basmati Rice 25kg Bag', qty: '1 × Rs 6,800', amount: 'Rs 6,800' },
          ],
          total: 'Rs 12,200',
          paid: 'Paid Rs 10,000',
          due: 'Udhaar Rs 2,200',
          footer: 'WhatsApp slip sent to customer ✓',
        },
      },
      {
        tab: 'Live Stock',
        title: 'Live Stock Shelf Status',
        stats: [
          { l: 'Total Items', v: '412 items' },
          { l: 'Running Low', v: '3 items' },
          { l: 'Stock Value', v: 'Rs 9.2L' },
        ],
        widget: {
          kind: 'meters',
          items: [
            { label: 'Cooking Oil 5L', meta: 'Only 3 cartons left · Order now', pct: 14, state: 'low' },
            { label: 'White Sugar 50kg', meta: '38 bags in godown · Healthy', pct: 84, state: 'ok' },
            { label: 'Tapal Tea 190g', meta: '5 packs left · Running low', pct: 22, state: 'warn' },
          ],
        },
      },
      {
        tab: 'Udhaar Khata',
        title: 'Customer Udhaar Ledger',
        stats: [
          { l: 'Total to Collect', v: 'Rs 1.4L' },
          { l: 'Credit Buyers', v: '18 parties' },
          { l: 'Due This Week', v: '4 parties' },
        ],
        widget: {
          kind: 'pipeline',
          trackTitle: 'How Udhaar Collection Runs',
          stages: [
            { step: '01', name: 'Bill Saved', sub: 'Balance added', state: 'done' },
            { step: '02', name: 'Due Date Alert', sub: 'WhatsApp reminder', state: 'active' },
            { step: '03', name: 'Cash Received', sub: 'Khata cleared', state: 'todo' },
          ],
          rows: [
            { a: 'Ali Traders', b: 'Due Rs 32,000 · Reminder sent on WhatsApp', tag: 'Due 12d', tone: 'warn' },
            { a: 'Noor General Store', b: 'Paid Rs 15,000 cash today', tag: 'Cleared', tone: 'ok' },
          ],
        },
      },
    ],
    steps: [
      { title: 'We load your items', text: 'Your item list and old khata entered for you.' },
      { title: 'Bill on phone or PC', text: 'Make bills in seconds; stock updates itself.' },
      { title: 'See evening profit', text: 'Sales, stock, and dues stay live 24/7.' },
    ],
    faqs: [
      { q: 'Have you built this as a pre-made app?', a: 'No — this is a concept preview. We custom-build it around your shop\'s exact workflow.' },
      { q: 'Do I need a computer?', a: 'No. We build it to run smoothly on any phone, tablet, or counter PC.' },
      { q: 'Is it easy for counter staff?', a: 'Yes. Big, clear buttons so staff learn it in a single day.' },
    ],
  },
  {
    slug: 'clinicflow',
    name: 'Clinic & Patient System',
    shortName: 'ClinicFlow Concept',
    icon: 'stethoscope',
    category: 'Clinic Queue & Files Concept',
    filters: ['people', 'messages'],
    tagline: 'How your patient token queue, visit history, and WhatsApp reminders will look.',
    short: 'Concept preview: live token board, 1-click patient history, and slot alerts.',
    forWho: ['Clinics', 'Dental clinics', 'Diagnostic labs', 'Physio centres'],
    before: [
      'Appointments scribbled in a paper diary',
      'Old patient files lost in cupboards',
      'Reception calling every patient manually',
    ],
    after: [
      'Live token queue on reception & doctor screen',
      'Full patient history found by phone number',
      'WhatsApp slot reminders sent automatically',
    ],
    features: [
      { icon: 'calendar', title: 'Live Token Queue', text: 'See who is inside, waiting outside, or booked next.' },
      { icon: 'file', title: '1-Click Patient File', text: 'Past prescriptions, notes, and lab reports together.' },
      { icon: 'bell', title: 'Auto Slot Reminders', text: 'Patients receive WhatsApp alerts before their turn.' },
    ],
    screens: [
      {
        tab: 'Token Queue',
        title: 'Evening Clinic Token Board',
        stats: [
          { l: 'Now Serving', v: 'Token #14' },
          { l: 'Waiting Outside', v: '3 patients' },
          { l: 'Seen Today', v: '13 patients' },
        ],
        widget: {
          kind: 'pipeline',
          trackTitle: 'Live Cabin Flow · 5:15 PM',
          stages: [
            { step: '#13', name: 'Done', sub: 'Fee slip printed', state: 'done' },
            { step: '#14', name: 'In Cabin', sub: 'Ayesha K. · Check-up', state: 'active' },
            { step: '#15', name: 'Next Turn', sub: 'Imran S. · 5:30 PM', state: 'todo' },
          ],
          rows: [
            { a: 'Token #14 · Ayesha Khan', b: '5:15 PM · General Check-up · 3rd Visit', tag: 'In Cabin', tone: 'ok' },
            { a: 'Token #15 · Imran Siddiqui', b: '5:30 PM · Follow-up · Alert sent', tag: 'Waiting', tone: 'warn' },
          ],
        },
      },
      {
        tab: 'Patient File',
        title: 'Digital Patient History Card',
        stats: [
          { l: 'Patient ID', v: '#PK-409' },
          { l: 'Past Visits', v: '4 visits' },
          { l: 'Blood Group', v: 'O+ Positive' },
        ],
        widget: {
          kind: 'receipt',
          billNo: 'Patient File · Ayesha Khan (Age 34)',
          customer: 'Phone: 0300-xxxxxxx · Allergies: None',
          items: [
            { name: '12 Mar · Fever & Throat Infection', qty: 'Dr. Tariq', amount: 'Rx Saved' },
            { name: '04 Feb · Complete Blood Count (CBC)', qty: 'Lab PDF', amount: 'Attached' },
          ],
          total: 'Consultation Fee: Rs 2,000',
          paid: 'Paid at Reception',
          due: 'Next Follow-up: 19 Mar',
          footer: 'Prescription PDF sent to patient on WhatsApp ✓',
        },
      },
      {
        tab: 'WhatsApp Alerts',
        title: 'Automatic Patient Reminders',
        stats: [
          { l: 'Reminders Sent', v: '24 today' },
          { l: 'Confirmed', v: '22 patients' },
          { l: 'Rescheduled', v: '2 patients' },
        ],
        widget: {
          kind: 'chat',
          messages: [
            {
              from: 'bot',
              sender: 'Clinic Auto-Reminder',
              text: 'Assalam o Alaikum Imran Sb, aaj shaam 5:30 PM Dr. Tariq ke sath aap ka Token #15 hai. Confirm karne ke liye 1 likhein.',
              time: '3:00 PM · Auto',
            },
            {
              from: 'customer',
              sender: 'Imran Siddiqui (Patient)',
              text: '1 — Ji main 5:15 tak pohanch jaunga.',
              time: '3:02 PM',
            },
            {
              from: 'bot',
              sender: 'Clinic Auto-Reminder',
              text: 'Shukriya! Aap ka Token #15 confirm ho gaya hai.',
              time: '3:02 PM · Auto',
            },
          ],
        },
      },
    ],
    steps: [
      { title: 'Match your clinic timings', text: 'Doctors, fees, and token slots set up around you.' },
      { title: 'Reception books in 1 tap', text: 'Patient immediately gets a WhatsApp token slip.' },
      { title: 'Doctor opens file in 2 sec', text: 'Every past visit and report stays organized.' },
    ],
    faqs: [
      { q: 'Is this a pre-made software or custom built?', a: 'This is a concept preview. We custom-build it for your clinic\'s exact needs.' },
      { q: 'Are patient records private?', a: 'Yes. Doctor-only notes stay locked from reception, with cloud backup.' },
      { q: 'Can patients book on WhatsApp?', a: 'Yes. We can connect WhatsApp booking directly into your token queue.' },
    ],
  },
  {
    slug: 'billbot',
    name: 'Wholesale & Billing Autopilot',
    shortName: 'BillBot Concept',
    icon: 'receipt',
    category: 'Auto Billing & Dues Concept',
    filters: ['money', 'messages'],
    tagline: 'How your party invoices, due-date reminders, and morning reports will look.',
    short: 'Concept preview: scheduled party invoices, polite payment nudges, and daily summary.',
    forWho: ['Wholesalers', 'Distributors', 'Service agencies', 'Schools & academies'],
    before: [
      'Hundreds of monthly bills typed by hand',
      'Late party payments chased by phone calls',
      'Sales reports compiled late at night',
    ],
    after: [
      'Repeat party invoices generated on schedule',
      'Polite WhatsApp payment nudges sent on due dates',
      'Morning collection summary waiting on your phone',
    ],
    features: [
      { icon: 'zap', title: 'Scheduled Invoices', text: 'Monthly or weekly bills generated with zero typing.' },
      { icon: 'bell', title: 'Polite Dues Follow-Up', text: 'Auto WhatsApp reminders before and on due dates.' },
      { icon: 'chart', title: '9 AM Owner Summary', text: 'Yesterday\'s collection and pending dues on your phone.' },
    ],
    screens: [
      {
        tab: 'Auto Invoice',
        title: 'Branded Party Invoice Slip',
        stats: [
          { l: 'This Month', v: '140 invoices' },
          { l: 'Hand-Typed', v: 'Zero' },
          { l: 'Sent on WhatsApp', v: '100% auto' },
        ],
        widget: {
          kind: 'receipt',
          billNo: 'Invoice #INV-2026-089 · Monthly Supply',
          customer: 'Party: Rehman Mart (Gulshan Branch)',
          items: [
            { name: 'Wholesale Carton Supply (March)', qty: '45 Cartons', amount: 'Rs 68,000' },
            { name: 'Delivery & Handling', qty: 'Fixed', amount: 'Rs 2,000' },
          ],
          total: 'Net Payable: Rs 70,000',
          paid: 'Due Date: 10 April',
          due: 'PDF Invoice Attached',
          footer: 'Auto-dispatched on WhatsApp & Email ✓',
        },
      },
      {
        tab: 'Recovery Status',
        title: 'Party Collection Progress',
        stats: [
          { l: 'Collected', v: 'Rs 6.1L' },
          { l: 'Pending Recovery', v: 'Rs 1.8L' },
          { l: 'Cleared Parties', v: '82% paid' },
        ],
        widget: {
          kind: 'meters',
          items: [
            { label: 'Rehman Mart · Rs 82,000', meta: '100% Paid on 05 Mar · Cleared', pct: 100, state: 'ok' },
            { label: 'Zia General Stores · Rs 45,000', meta: 'Half paid (Rs 25,000) · Reminder sent', pct: 55, state: 'warn' },
            { label: 'Metro Cash Point · Rs 30,500', meta: 'Overdue 9 days · Follow-up scheduled', pct: 20, state: 'low' },
          ],
        },
      },
      {
        tab: 'WhatsApp Nudge',
        title: 'Polite Payment Reminder Preview',
        stats: [
          { l: 'Scheduled Today', v: '12 nudges' },
          { l: 'Tone', v: 'Polite Urdu/Eng' },
          { l: 'Manual Calls Saved', v: '2 hrs/day' },
        ],
        widget: {
          kind: 'chat',
          messages: [
            {
              from: 'bot',
              sender: 'Your Business Billing Desk',
              text: 'Assalam o Alaikum Zia Bhai, Invoice #084 ka baqaya Rs 20,000 kal due hai. PDF bill sath attach hai. Shukriya!',
              time: '10:00 AM · Auto Reminder',
            },
            {
              from: 'customer',
              sender: 'Zia General Stores',
              text: 'Wa Alaikum Assalam, aaj shaam bank transfer kar ke slip bhejta hoon.',
              time: '10:14 AM',
            },
          ],
        },
      },
    ],
    steps: [
      { title: 'Share your billing cycle', text: 'Tell us your parties, rates, and schedule.' },
      { title: 'We set up the autopilot', text: 'Branded PDF bills and polite nudges run on time.' },
      { title: 'Track recovery on phone', text: 'See who paid and who is pending in one glance.' },
    ],
    faqs: [
      { q: 'Have you already built this or will you build it for us?', a: 'This is a concept preview showing how your system will look when we custom-build it for you.' },
      { q: 'Will invoices carry my company logo?', a: 'Yes. Every PDF slip has your exact business name, logo, and terms.' },
      { q: 'Can I pause reminders for a VIP party?', a: 'Yes. One tap pauses automatic reminders for any client.' },
    ],
  },
  {
    slug: 'ordertrack',
    name: 'Order & Workshop Tracker',
    shortName: 'OrderTrack Concept',
    icon: 'clipboard',
    category: 'Orders & Staff Tasks Concept',
    filters: ['people', 'stock'],
    tagline: 'How every customer order and worker task will look from booking to delivery.',
    short: 'Concept preview: visual order stages, worker task lists, and ready-for-pickup alerts.',
    forWho: ['Workshops', 'Tailors & boutiques', 'Print presses', 'Small factories'],
    before: [
      'Customer orders buried in WhatsApp chats',
      'Asking workers "what is pending?" all day',
      'Delivery deadlines missed without warning',
    ],
    after: [
      'Every order shows Booked → In Work → Ready',
      'Each worker sees their own daily list',
      'Customer gets an auto WhatsApp alert when Ready',
    ],
    features: [
      { icon: 'clipboard', title: 'Visual Order Pipeline', text: 'See Booked, Cutting, Stitching/Making, and Ready live.' },
      { icon: 'users', title: 'Worker Task List', text: 'Assign clear daily work to each team member.' },
      { icon: 'bell', title: 'Ready-for-Pickup Alert', text: 'Auto-message the customer when their order is ready.' },
    ],
    screens: [
      {
        tab: 'Order Pipeline',
        title: 'Live Workshop Order Board',
        stats: [
          { l: 'New Orders', v: '9 orders' },
          { l: 'In Workshop', v: '14 active' },
          { l: 'Ready Today', v: '6 ready' },
        ],
        widget: {
          kind: 'pipeline',
          trackTitle: 'Order #218 · 50 School Uniforms (Due Friday)',
          stages: [
            { step: '01', name: 'Booked', sub: 'Advance paid', state: 'done' },
            { step: '02', name: 'Cutting', sub: 'Done by Master Ali', state: 'done' },
            { step: '03', name: 'Stitching', sub: 'Usman · 35/50 done', state: 'active' },
            { step: '04', name: 'Ready', sub: 'Auto WhatsApp alert', state: 'todo' },
          ],
          rows: [
            { a: 'Order #217 · 3 Bridal Suits', b: 'Quality checked & packed · Customer notified', tag: 'Ready', tone: 'ok' },
            { a: 'Order #219 · 200 Printed Boxes', b: 'Assigned to Faisal · Due Tomorrow 5 PM', tag: 'In Work', tone: 'warn' },
          ],
        },
      },
      {
        tab: 'Worker Load',
        title: 'Daily Staff Task Progress',
        stats: [
          { l: 'Team Active', v: '6 workers' },
          { l: 'Completed Today', v: '11 tasks' },
          { l: 'Due Before 6 PM', v: '3 tasks' },
        ],
        widget: {
          kind: 'meters',
          items: [
            { label: 'Master Usman · Stitching Unit', meta: '35 of 50 uniforms stitched · On track', pct: 70, state: 'ok' },
            { label: 'Faisal · Printing & Press', meta: '4 of 5 jobs done today · Ahead', pct: 85, state: 'ok' },
            { label: 'Kamran · Packing & Dispatch', meta: 'Order #215 due in 2 hours · Priority', pct: 35, state: 'warn' },
          ],
        },
      },
      {
        tab: 'Pickup Alert',
        title: 'Customer Ready Notification',
        stats: [
          { l: 'Ready Orders', v: '6 packed' },
          { l: 'Picked Up', v: '4 delivered' },
          { l: 'Balance Collected', v: 'Rs 42,000' },
        ],
        widget: {
          kind: 'chat',
          messages: [
            {
              from: 'bot',
              sender: 'Workshop Update',
              text: 'Assalam o Alaikum! Aap ka Order #217 (3 Suits) tayyar hai. Baqaya bill Rs 6,500 hai. Aaj shaam 8 baje tak collect kar sakte hain.',
              time: '4:30 PM · Auto Triggered',
            },
            {
              from: 'customer',
              sender: 'Customer (#217)',
              text: 'Bohat shukriya! Main shaam 7 baje aata hoon.',
              time: '4:35 PM',
            },
          ],
        },
      },
    ],
    steps: [
      { title: 'We map your stages', text: 'Set up the exact steps your workshop or team uses.' },
      { title: 'Workers tap 1 button', text: 'Staff update order status from a simple screen.' },
      { title: 'Zero missed deadlines', text: 'You track progress from your phone anywhere.' },
    ],
    faqs: [
      { q: 'Is this an existing product or a concept preview?', a: 'It is a concept preview. When you hire us, we custom-build this board around your exact workflow.' },
      { q: 'Can non-technical workers use it?', a: 'Yes. Simple buttons in plain words or Urdu so any worker can tap Done.' },
      { q: 'Does it notify customers on WhatsApp?', a: 'Yes. Marking an order "Ready" can automatically message the customer.' },
    ],
  },
  {
    slug: 'chatpilot',
    name: 'WhatsApp Sales & Auto-Reply',
    shortName: 'ChatPilot Concept',
    icon: 'message',
    category: 'WhatsApp Automation Concept',
    filters: ['messages', 'people'],
    tagline: 'How your business WhatsApp can reply to rates, confirm orders, and follow up 24/7.',
    short: 'Concept preview: 2-second rate replies, COD order confirmation, and human handover.',
    forWho: ['Online sellers', 'Restaurants', 'Service businesses', 'Wholesale desks'],
    before: [
      'Typing prices & location 100 times a day',
      'Confirming every COD order manually by call',
      'Buyers lost when replies take 3 hours',
    ],
    after: [
      'Price list, menu, and location sent in 2 seconds',
      'COD orders confirmed on WhatsApp automatically',
      'You only step in when a buyer wants human chat',
    ],
    features: [
      { icon: 'message', title: '2-Second Rate Replies', text: 'Answers price, delivery, and timing questions 24/7.' },
      { icon: 'check', title: 'Auto COD Confirmation', text: 'Verifies customer address and order automatically.' },
      { icon: 'languages', title: 'Roman Urdu & English', text: 'Friendly replies written in your natural everyday tone.' },
    ],
    screens: [
      {
        tab: 'Live Chat',
        title: '2-Second WhatsApp Reply Preview',
        stats: [
          { l: 'Auto-Answered', v: '126 chats' },
          { l: 'Sent to Owner', v: '9 VIP chats' },
          { l: 'Reply Speed', v: '2 seconds' },
        ],
        widget: {
          kind: 'chat',
          messages: [
            {
              from: 'customer',
              sender: 'New Buyer on WhatsApp',
              text: 'Assalam o Alaikum, delivery charges kitne hain aur rate list bhej dein?',
              time: '11:42 PM',
            },
            {
              from: 'bot',
              sender: 'Your WhatsApp Auto-Assistant',
              text: 'Wa Alaikum Assalam! Karachi delivery Rs 150 (next day) aur nationwide Rs 250 hai. Yeh rahi hamari updated rate list (PDF). Order ke liye item ka naam likhein!',
              time: '11:42 PM · Replied in 2 sec',
            },
            {
              from: 'customer',
              sender: 'New Buyer on WhatsApp',
              text: 'Mujhe bulk wholesale order ke liye owner se baat karni hai.',
              time: '11:43 PM · Flagged for You ★',
            },
          ],
        },
      },
      {
        tab: 'COD Orders',
        title: 'Automatic Order Verification Flow',
        stats: [
          { l: 'Orders Today', v: '48 orders' },
          { l: 'Confirmed Auto', v: '44 verified' },
          { l: 'Fake Orders Caught', v: '4 filtered' },
        ],
        widget: {
          kind: 'pipeline',
          trackTitle: 'How COD Verification Works Automatically',
          stages: [
            { step: '01', name: 'Order Placed', sub: 'Website / WhatsApp', state: 'done' },
            { step: '02', name: 'Auto Message', sub: 'Confirm address [1]', state: 'done' },
            { step: '03', name: 'Buyer Replies 1', sub: 'Marked Verified ✓', state: 'active' },
            { step: '04', name: 'Ready to Ship', sub: 'Courier slip ready', state: 'todo' },
          ],
          rows: [
            { a: 'Order #512 · Hamza (DHA Phase 6)', b: 'Confirmed via WhatsApp in 30 sec · Rs 4,500 COD', tag: 'Verified', tone: 'ok' },
            { a: 'Order #511 · Unknown Number', b: 'No reply after 2 nudges · Held from dispatch', tag: 'On Hold', tone: 'warn' },
          ],
        },
      },
      {
        tab: 'Saved Time',
        title: 'What Runs Without You Typing',
        stats: [
          { l: 'Hours Saved', v: '3+ hrs/day' },
          { l: 'Night Inquiries', v: '100% answered' },
          { l: 'Manual Typing', v: 'Cut by 85%' },
        ],
        widget: {
          kind: 'meters',
          items: [
            { label: 'Price, Catalogue & Location Replies', meta: 'Handled 100% automatically 24/7', pct: 100, state: 'ok' },
            { label: 'Order & Appointment Confirmations', meta: '92% confirmed without phone calls', pct: 92, state: 'ok' },
            { label: 'Custom / VIP Negotiation Chats', meta: 'Forwarded directly to your phone', pct: 25, state: 'warn' },
          ],
        },
      },
    ],
    steps: [
      { title: 'List your top questions', text: 'Tell us the 10 things buyers ask you every day.' },
      { title: 'We write natural replies', text: 'Set up in your exact tone in Roman Urdu or English.' },
      { title: 'You handle only real buyers', text: 'Routine chats run 24/7; VIP orders alert your phone.' },
    ],
    faqs: [
      { q: 'Have you built this as a ready tool or custom setup?', a: 'This is a concept preview. We custom-configure and build this automation for your business number.' },
      { q: 'Will it sound robotic to my customers?', a: 'No. We write natural, polite Roman Urdu and English replies just like you type.' },
      { q: 'Can I jump into any WhatsApp chat myself?', a: 'Yes, anytime. As soon as you reply, the automation steps back.' },
    ],
  },
];

export function getSolution(slug) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
