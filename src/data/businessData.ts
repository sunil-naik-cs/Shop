/**
 * Business Information & Configuration
 * 
 * Central data source for Shirali Coastal Traders & Services.
 * Modify this file to update store hours, contact details, services, or location.
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: 'agro' | 'hardware' | 'services' | 'all';
  description: string;
  highlights: string[];
  seasonalNote?: string;
}

export interface DayHours {
  day: string;
  hours: string;
  isOpen: boolean;
  openTime: number; // 24-hr format as decimal e.g. 8.5 for 8:30 AM
  closeTime: number; // 20.5 for 8:30 PM
}

export const BUSINESS_INFO = {
  name: "Shirali Coastal Traders & Services",
  kannadaName: "ಶಿರಾಲಿ ಕೋಸ್ಟಲ್ ಟ್ರೇಡರ್ಸ್ ಮತ್ತು ಸರ್ವಿಸಸ್",
  tagline: "Authentic Coastal Spices, Agricultural Supplies & Local Hardware Since 1994",
  shortDescription: "A trusted family-owned local enterprise rooted in Shirali, Karnataka. We provide authentic local coastal spices, farm-fresh agro produce, household hardware supplies, and warm community service.",
  establishedYear: 1994,
  
  // Location Details
  address: {
    street: "Main Temple Road, Opp. Primary School",
    landmark: "Near Shri Chitrapur Math & Shri Maha Ganapati Temple",
    village: "Shirali",
    taluk: "Bhatkal",
    district: "Uttara Kannada",
    state: "Karnataka",
    pincode: "581354",
    country: "India",
    fullFormatted: "Main Temple Road, Near Shri Chitrapur Math, Shirali, Karnataka - 581354",
  },
  
  // Geo Coordinates (Shirali, Karnataka)
  coordinates: {
    lat: 14.0538,
    lng: 74.5298,
  },
  
  // External Maps Links
  maps: {
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shirali+Karnataka+581354",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Shirali+Karnataka+581354",
    embedMapUrl: "https://maps.google.com/maps?q=Shirali,%20Karnataka,%20581354&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  
  // Contact Channels
  contact: {
    phone: "+91 94801 23456",
    phoneDisplay: "+91 94801 23456",
    landline: "08385 258240",
    whatsapp: "+919480123456",
    whatsappDisplay: "+91 94801 23456",
    email: "contact@shiralitraders.example.com",
    contactPerson: "Narayana Shanbhag & Family",
  },
  
  // Weekly Operating Hours
  weeklyHours: [
    { day: "Monday", hours: "8:30 AM – 8:30 PM", isOpen: true, openTime: 8.5, closeTime: 20.5 },
    { day: "Tuesday", hours: "8:30 AM – 8:30 PM", isOpen: true, openTime: 8.5, closeTime: 20.5 },
    { day: "Wednesday", hours: "8:30 AM – 8:30 PM", isOpen: true, openTime: 8.5, closeTime: 20.5 },
    { day: "Thursday", hours: "8:30 AM – 8:30 PM", isOpen: true, openTime: 8.5, closeTime: 20.5 },
    { day: "Friday", hours: "8:30 AM – 8:30 PM", isOpen: true, openTime: 8.5, closeTime: 20.5 },
    { day: "Saturday", hours: "8:30 AM – 8:30 PM", isOpen: true, openTime: 8.5, closeTime: 20.5 },
    { day: "Sunday", hours: "9:00 AM – 2:00 PM", isOpen: true, openTime: 9.0, closeTime: 14.0 },
  ] as DayHours[],
  
  // Nearby Landmarks & Proximity
  nearbyLandmarks: [
    { name: "Shri Chitrapur Math", distance: "500 meters (2 min walk)" },
    { name: "Shirali Railway Station", distance: "1.8 km (4 mins)" },
    { name: "National Highway 66 (NH 66)", distance: "2.2 km (5 mins)" },
    { name: "Alvekodi Beach", distance: "3.5 km (8 mins)" },
    { name: "Bhatkal Town & Bus Stand", distance: "6.5 km (12 mins)" },
    { name: "Murudeshwar Temple & Beach", distance: "12.0 km (18 mins)" },
  ],
  
  // Services
  services: [
    {
      id: "agro-produce",
      title: "Authentic Coastal Agro-Produce & Spices",
      category: "agro",
      description: "Directly sourced from trusted local growers in the Sahyadri foothills and coastal groves around Shirali, Bhatkal, and Kumta.",
      highlights: [
        "Uttara Kannada black pepper & Malabar spices",
        "Grade-A whole cashews (raw & gently roasted)",
        "Organic wild cardamom & golden Salem turmeric",
        "Cold-pressed virgin coconut oil & pure areca nut products",
      ],
      seasonalNote: "Fresh cashew harvest available March to May; whole spice batches freshly arrived.",
    },
    {
      id: "farm-supplies",
      title: "Agricultural & Horticultural Supplies",
      category: "agro",
      description: "Field-tested agricultural equipment, plant nutrients, and irrigation spares tailored to coastal sandy-loam soils and heavy monsoon conditions.",
      highlights: [
        "Certified plant nourishment & bio-fertilizers",
        "Drip irrigation lines, sprinkler fittings & PVC joints",
        "Coastal-durable pruning tools, sickles & machetes",
        "Garden wire mesh, shade netting & plastic mulch sheets",
      ],
      seasonalNote: "Monsoon waterproofing tarpaulins & drainage fittings stocked every May-June.",
    },
    {
      id: "hardware-home",
      title: "Home & Hardware Utilities",
      category: "hardware",
      description: "Comprehensive home repair supplies, electrical parts, plumbing essentials, and anti-corrosion hardware built to withstand coastal sea breezes.",
      highlights: [
        "Stainless steel & brass rust-resistant fasteners",
        "Pumps, brass gate valves & UPVC plumbing lines",
        "Electrical switches, wires, LED lighting & backup spares",
        "Weatherproof paints, waterproof sealants & brush sets",
      ],
    },
    {
      id: "bulk-supply",
      title: "Bulk & Institutional Supplies",
      category: "services",
      description: "Specialized wholesale fulfillment for local temples, community kitchens (Satvik bhojan), catering units, homestays, and school festivals.",
      highlights: [
        "Jumbo spice sacks & bulk cooking oils",
        "Pre-packaged dry provision boxes for events",
        "Prompt doorstep coordination within Shirali & Bhatkal",
        "Consistent batch quality with transparent local pricing",
      ],
    },
    {
      id: "custom-sourcing",
      title: "Custom Sourcing & Pickup Desk",
      category: "services",
      description: "Can't find a specific tool, rare machine part, or bespoke regional ingredient? Let our team source it for you from regional distributors in Hubli or Mangalore.",
      highlights: [
        "Advance telephone & WhatsApp orders",
        "Reserved pickup counter ready when you arrive",
        "Personal guidance from seasoned shopkeepers",
        "No obligation local advisory on farm fittings",
      ],
    },
  ] as ServiceItem[],
  
  // Customer-Friendly Facilities
  facilities: [
    { title: "Convenient Parking", desc: "Spacious roadside parking for two-wheelers, auto-rickshaws, and family cars right outside our shop." },
    { title: "All Payment Modes", desc: "We accept UPI (GPay, PhonePe, Paytm), cash, and direct bank transfers for bulk orders." },
    { title: "Free Town Delivery", desc: "Complimentary doorstep drop for senior citizens and large orders within 4 km of Shirali town center." },
    { title: "Multilingual Support", desc: "Our staff cheerfully speaks Kannada, Konkani, Hindi, and English." },
  ],
  
  // Frequently Asked Questions
  faqs: [
    {
      q: "Where exactly in Shirali is your store situated?",
      a: "We are situated on Main Temple Road in Shirali, just 500 meters from the historic Shri Chitrapur Math and opposite the Government Primary School. It is easily accessible from NH 66."
    },
    {
      q: "Can I place an inquiry or request an item on WhatsApp?",
      a: "Yes! You can message us anytime at +91 94801 23456 on WhatsApp. We typically confirm availability and set aside your items within an hour during business hours."
    },
    {
      q: "Are the spices and cashews locally produced?",
      a: "Yes, our spices, black pepper, cardamoms, and cashews are sourced directly from smallholder farmers in Uttara Kannada district, ensuring unmatched aroma and freshness."
    },
    {
      q: "What are your Sunday hours?",
      a: "On Sundays, our store is open in the morning from 9:00 AM to 2:00 PM. We are closed on Sunday afternoons so our staff can spend time with family."
    },
    {
      q: "Do you supply bulk provisions for marriage functions and temple events?",
      a: "Yes, we regularly cater to community marriages, temple Mahapuja events, and family gatherings across Shirali, Bhatkal, and Murudeshwar with advance notice."
    }
  ]
};
