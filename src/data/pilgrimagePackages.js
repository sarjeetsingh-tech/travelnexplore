const pilgrimagePackages = [
  {
    uid: "pilg-001",
    packageName: "Char Dham Yatra",
    shortDescription: "Embark on the sacred journey to the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    duration: "11 Nights & 12 Days",
    referenceNumber: "TnE/9012/2023",
    travelStartDate: "15 May 2023",
    location: "Uttarakhand, India",
    category: "pilgrimage",
    price: 45000,
    rating: 4.9,
    reviews: 156,
    imgSrc: "/images/packages/chardham.jpg",
    heroImage: "/images/packages/chardham-hero.jpg",
    tag: "Most Popular",
    destinations: [
      { place: "Haridwar", nights: 1 },
      { place: "Barkot", nights: 2 },
      { place: "Uttarkashi", nights: 2 },
      { place: "Guptkashi", nights: 2 },
      { place: "Badrinath", nights: 2 },
      { place: "Rudraprayag", nights: 1 },
      { place: "Haridwar", nights: 1 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar",
        description: "Arrive at Haridwar. Meet our representative and transfer to your hotel. Check-in and rest. Evening visit to Har Ki Pauri to witness the Ganga Aarti ceremony.",
        meals: ["Dinner"],
        overnight: "Haridwar"
      },
      {
        day: 2,
        title: "Haridwar to Barkot",
        description: "After breakfast, drive to Barkot (210 km, 7-8 hours). En route, visit Kempty Falls in Mussoorie. Upon arrival in Barkot, check-in at your hotel. Evening at leisure to prepare for the Yamunotri trek the next day.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Barkot"
      },
      {
        day: 3,
        title: "Barkot to Yamunotri and back to Barkot",
        description: "Early morning drive to Janki Chatti (40 km, 2 hours). From here, begin the 6 km trek to Yamunotri Temple. Visit the temple, take a dip in the Surya Kund hot spring, and prepare rice in the hot spring water as prasad. Trek back to Janki Chatti and drive to Barkot.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Barkot"
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi",
        description: "After breakfast, drive to Uttarkashi (100 km, 4 hours). Upon arrival, check-in at your hotel. Visit Vishwanath Temple and Shakti Temple in the evening.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Uttarkashi"
      },
      {
        day: 5,
        title: "Uttarkashi to Gangotri and back to Uttarkashi",
        description: "Early morning drive to Gangotri (100 km, 4 hours). Upon arrival, take a holy dip in the Ganges River and visit Gangotri Temple. Perform puja and rituals. Drive back to Uttarkashi in the evening.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Uttarkashi"
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi",
        description: "After breakfast, drive to Guptkashi (220 km, 8-9 hours). En route, enjoy the beautiful views of the Himalayan ranges. Upon arrival, check-in at your hotel. Visit Kashi Vishwanath Temple and Ardhanarishwar Temple in the evening.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Guptkashi"
      },
      {
        day: 7,
        title: "Guptkashi to Kedarnath",
        description: "Early morning drive to Sonprayag (30 km, 1 hour). From here, take a shared jeep to Gaurikund. Begin the 16 km trek to Kedarnath or opt for a helicopter ride (at additional cost). Upon arrival, check-in at your accommodation. Evening visit to Kedarnath Temple for darshan and aarti.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kedarnath"
      },
      {
        day: 8,
        title: "Kedarnath to Guptkashi",
        description: "Early morning visit to Kedarnath Temple for darshan. After breakfast, trek down to Gaurikund (16 km). Drive back to Guptkashi.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Guptkashi"
      },
      {
        day: 9,
        title: "Guptkashi to Badrinath",
        description: "After breakfast, drive to Badrinath (190 km, 7-8 hours). En route, visit Karnaprayag, Nandaprayag, and Joshimath. Upon arrival, check-in at your hotel. Evening visit to Badrinath Temple for darshan and aarti.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Badrinath"
      },
      {
        day: 10,
        title: "Badrinath",
        description: "Early morning visit to Badrinath Temple for darshan. After breakfast, visit Mana Village, the last Indian village before the Tibet border. Visit Vyas Gufa, Ganesh Gufa, and Bhim Pul. Evening at leisure or optional visit to Badrinath Temple for aarti.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Badrinath"
      },
      {
        day: 11,
        title: "Badrinath to Rudraprayag",
        description: "After breakfast, drive to Rudraprayag (160 km, 6-7 hours). En route, visit Joshimath and Devprayag. Upon arrival, check-in at your hotel. Evening visit to Rudranath Temple.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Rudraprayag"
      },
      {
        day: 12,
        title: "Rudraprayag to Haridwar",
        description: "After breakfast, drive to Haridwar (140 km, 5-6 hours). Upon arrival, check-in at your hotel. Evening at leisure or optional visit to Har Ki Pauri for Ganga Aarti. Departure for your onward journey the next day.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Haridwar"
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "Private AC Vehicle",
      rooms: 1,
      price: "INR45,000"
    },
    inclusions: [
      "11 Nights accommodation in hotels/guesthouses",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "English-speaking guide",
      "All applicable permits and fees",
      "All applicable taxes"
    ],
    exclusions: [
      "Helicopter services for Kedarnath",
      "Pony/Palki/Porter charges during treks",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ],
    paymentPolicy: {
      advancePayment: "50%"
    },
    refundPolicy: [
      "30 Days before 90% Refund",
      "15 Days before 50% refund",
      "07 Days before no Refund"
    ]
  },
  {
    uid: "pilg-002",
    packageName: "Varanasi Spiritual Journey",
    shortDescription: "Experience the spiritual essence of India's holiest city on the banks of the sacred Ganges River.",
    duration: "3 Nights & 4 Days",
    referenceNumber: "TnE/1023/2023",
    travelStartDate: "10 Jul 2023",
    location: "Varanasi, India",
    category: "pilgrimage",
    price: 18500,
    rating: 4.8,
    reviews: 124,
    imgSrc: "/images/packages/varanasi.jpg",
    heroImage: "/images/packages/varanasi-hero.jpg",
    tag: "Spiritual",
    destinations: [
      { place: "Varanasi", nights: 3 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi",
        description: "Arrive at Varanasi Airport/Railway Station. Meet our representative and transfer to your hotel. Check-in and rest. Evening visit to the ghats to witness the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat.",
        meals: ["Dinner"],
        overnight: "Varanasi"
      },
      {
        day: 2,
        title: "Varanasi - Sunrise Boat Ride and Temple Tour",
        description: "Early morning boat ride on the Ganges River to witness the sunrise and the spiritual activities along the ghats. After breakfast, visit the famous Kashi Vishwanath Temple, one of the 12 Jyotirlingas. Later, visit other important temples including Sankat Mochan Hanuman Temple, Durga Temple, and Tulsi Manas Temple. Evening at leisure or optional visit to Sarnath (at additional cost).",
        meals: ["Breakfast", "Dinner"],
        overnight: "Varanasi"
      },
      {
        day: 3,
        title: "Varanasi - Sarnath Excursion",
        description: "After breakfast, visit Sarnath, where Lord Buddha delivered his first sermon after attaining enlightenment. Visit the Dhamek Stupa, Sarnath Museum, and the Ashoka Pillar. Afternoon at leisure for shopping in the local markets famous for Banarasi silk sarees, brassware, and handicrafts. Evening boat ride on the Ganges to witness the evening aarti ceremony.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Varanasi"
      },
      {
        day: 4,
        title: "Departure from Varanasi",
        description: "After breakfast, check-out from the hotel. Depending on your departure time, you may have time for last-minute shopping or temple visits. Transfer to Varanasi Airport/Railway Station for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "Private AC Vehicle",
      rooms: 1,
      price: "INR18,500"
    },
    inclusions: [
      "3 Nights accommodation in a 4-star hotel",
      "Daily breakfast and dinner",
      "Airport/Railway Station transfers",
      "Sunrise and evening boat rides on the Ganges",
      "Sightseeing as per itinerary",
      "English-speaking guide",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare/Train fare",
      "Temple donation/offerings",
      "Camera fees at monuments",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ],
    paymentPolicy: {
      advancePayment: "100%"
    },
    refundPolicy: [
      "15 Days before 90% Refund",
      "07 Days before 50% refund",
      "03 Days before no Refund"
    ]
  },
  {
    uid: "pilg-003",
    packageName: "Amarnath Yatra",
    shortDescription: "Undertake the sacred pilgrimage to the holy cave shrine of Lord Shiva in the Himalayas.",
    duration: "6 Nights & 7 Days",
    referenceNumber: "TnE/1134/2023",
    travelStartDate: "05 Jul 2023",
    location: "Jammu & Kashmir, India",
    category: "pilgrimage",
    price: 32500,
    rating: 4.7,
    reviews: 98,
    imgSrc: "/images/packages/amarnath.jpg",
    heroImage: "/images/packages/amarnath-hero.jpg",
    tag: "Sacred",
    destinations: [
      { place: "Srinagar", nights: 2 },
      { place: "Sonmarg", nights: 1 },
      { place: "Baltal/Panchtarni", nights: 1 },
      { place: "Pahalgam", nights: 2 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Arrive at Srinagar Airport. Meet our representative and transfer to your hotel/houseboat. Check-in and rest. Evening shikara ride on Dal Lake.",
        meals: ["Dinner"],
        overnight: "Srinagar"
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        description: "After breakfast, visit Shankaracharya Temple, Mughal Gardens (Nishat Bagh, Shalimar Bagh, and Chashme Shahi), and Hazratbal Shrine. Evening at leisure for shopping in the local markets.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Srinagar"
      },
      {
        day: 3,
        title: "Srinagar to Sonmarg",
        description: "After breakfast, drive to Sonmarg (80 km, 3 hours). Upon arrival, check-in at your hotel. Rest of the day at leisure to acclimatize to the altitude. Evening briefing about the Amarnath Yatra.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Sonmarg"
      },
      {
        day: 4,
        title: "Sonmarg to Baltal to Amarnath Cave and back to Baltal",
        description: "Early morning drive to Baltal (15 km, 30 minutes). From here, begin the 14 km trek to Amarnath Cave or opt for a helicopter ride (at additional cost). Visit the holy cave for darshan of the ice lingam. Trek back to Baltal or stay overnight at Panchtarni (depending on time and physical condition).",
        meals: ["Breakfast", "Packed Lunch", "Dinner"],
        overnight: "Baltal/Panchtarni"
      },
      {
        day: 5,
        title: "Baltal to Pahalgam",
        description: "After breakfast, drive to Pahalgam (110 km, 4-5 hours). En route, visit Awantipora ruins. Upon arrival, check-in at your hotel. Evening at leisure to explore the beautiful surroundings.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Pahalgam"
      },
      {
        day: 6,
        title: "Pahalgam Local Sightseeing",
        description: "After breakfast, visit Betaab Valley, Chandanwari, and Aru Valley (at additional cost). These locations offer stunning natural beauty and are popular spots for Bollywood film shootings.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Pahalgam"
      },
      {
        day: 7,
        title: "Pahalgam to Srinagar Airport",
        description: "After breakfast, drive to Srinagar Airport (95 km, 3-4 hours) for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 1,
      transportType: "Shared Transfers",
      rooms: 1,
      price: "INR32,500"
    },
    inclusions: [
      "6 Nights accommodation in hotels/guesthouses",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by shared vehicle",
      "English-speaking guide",
      "Shikara ride on Dal Lake",
      "Amarnath Yatra registration and permit",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Helicopter services for Amarnath",
      "Pony/Palki/Porter charges during trek",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ],
    paymentPolicy: {
      advancePayment: "100%"
    },
    refundPolicy: [
      "45 Days before 90% Refund",
      "30 Days before 50% refund",
      "15 Days before no Refund"
    ]
  }
];

export default pilgrimagePackages; 