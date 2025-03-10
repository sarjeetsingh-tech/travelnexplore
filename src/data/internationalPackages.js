const internationalPackages = [
  {
    uid: "int-001",
    packageName: "Bali Paradise Escape",
    shortDescription: "Experience the magic of Bali with pristine beaches, ancient temples, and vibrant culture.",
    duration: "6 Nights & 7 Days",
    referenceNumber: "TnE/3245/2023",
    travelStartDate: "15 Apr 2023",
    location: "Bali, Indonesia",
    category: "international",
    price: 89500,
    rating: 4.8,
    reviews: 124,
    imgSrc: "/images/packages/bali.jpg",
    heroImage: "/images/packages/bali-hero.jpg",
    tag: "Best Seller",
    destinations: [
      { place: "Kuta", nights: 2 },
      { place: "Ubud", nights: 2 },
      { place: "Nusa Dua", nights: 2 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Kuta",
        description: "Arrive at Ngurah Rai International Airport, Bali. Meet our representative and transfer to your hotel in Kuta. Check-in and relax. Evening free to explore Kuta Beach and surrounding areas. Enjoy a welcome dinner at a local restaurant featuring Balinese cuisine.",
        meals: ["Dinner"],
        overnight: "Kuta"
      },
      {
        day: 2,
        title: "Kuta - Tanah Lot - Kuta",
        description: "After breakfast, visit the famous Tanah Lot Temple, one of Bali's most important landmarks, built on a rock formation in the sea. Later, enjoy water sports activities at Kuta Beach (at additional cost). Evening free for shopping at local markets or relaxing at the beach.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kuta"
      },
      {
        day: 3,
        title: "Kuta to Ubud",
        description: "After breakfast, check-out and drive to Ubud, the cultural heart of Bali. En route, visit the Tegalalang Rice Terraces and a local coffee plantation to taste the famous Luwak coffee. Check-in at your hotel in Ubud. Evening visit to Ubud Market for shopping.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Ubud"
      },
      {
        day: 4,
        title: "Ubud Exploration",
        description: "After breakfast, visit the Sacred Monkey Forest Sanctuary, home to over 700 monkeys. Later, explore Ubud Palace and visit local art galleries. Afternoon optional spa treatment (at additional cost) or free time to explore Ubud's charming streets.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Ubud"
      },
      {
        day: 5,
        title: "Ubud to Nusa Dua",
        description: "After breakfast, check-out and drive to Nusa Dua. En route, visit the Uluwatu Temple perched on a cliff with stunning ocean views. Enjoy a traditional Kecak Fire Dance performance at sunset. Continue to Nusa Dua and check-in at your beach resort.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Nusa Dua"
      },
      {
        day: 6,
        title: "Nusa Dua - Benoa Bay - Nusa Dua",
        description: "After breakfast, enjoy a full day of water sports at Benoa Bay (at additional cost) including parasailing, jet skiing, and banana boat rides. Afternoon at leisure to enjoy the resort facilities or relax at the beach. Evening farewell dinner at a beachfront restaurant.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Nusa Dua"
      },
      {
        day: 7,
        title: "Departure from Bali",
        description: "After breakfast, check-out from the hotel. Depending on your flight schedule, you may have time for last-minute shopping. Transfer to Ngurah Rai International Airport for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "Private AC Vehicle",
      rooms: 1,
      price: "INR89,500"
    },
    inclusions: [
      "6 Nights accommodation in 4-star hotels/resorts",
      "Daily breakfast and dinner",
      "Airport transfers",
      "All transfers and sightseeing by private air-conditioned vehicle",
      "English-speaking guide for sightseeing",
      "Entrance fees to monuments mentioned in the itinerary",
      "Welcome and farewell dinners",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Visa fees",
      "Travel insurance",
      "Water sports activities",
      "Spa treatments",
      "Personal expenses",
      "Tips and gratuities",
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
    uid: "int-002",
    packageName: "Paris Romance Tour",
    shortDescription: "Fall in love with the City of Lights on this romantic Parisian getaway.",
    duration: "5 Nights & 6 Days",
    referenceNumber: "TnE/4567/2023",
    travelStartDate: "10 Jun 2023",
    location: "Paris, France",
    category: "international",
    price: 125000,
    rating: 4.7,
    reviews: 156,
    imgSrc: "/images/packages/paris.jpg",
    heroImage: "/images/packages/paris-hero.jpg",
    tag: "Couple Special",
    destinations: [
      { place: "Paris", nights: 5 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        description: "Arrive at Charles de Gaulle Airport, Paris. Meet our representative and transfer to your hotel. Check-in and relax. Evening Seine River cruise with dinner, offering beautiful views of illuminated Parisian landmarks.",
        meals: ["Dinner"],
        overnight: "Paris"
      },
      {
        day: 2,
        title: "Paris City Tour",
        description: "After breakfast, enjoy a guided city tour of Paris. Visit the iconic Eiffel Tower (2nd level), Arc de Triomphe, and Champs-Élysées. Afternoon visit to the Louvre Museum to see the famous Mona Lisa and other masterpieces. Evening at leisure.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Paris"
      },
      {
        day: 3,
        title: "Montmartre and Latin Quarter",
        description: "After breakfast, explore the bohemian neighborhood of Montmartre, home to the beautiful Sacré-Cœur Basilica. Enjoy the artistic atmosphere and perhaps have your portrait drawn by local artists. Afternoon visit to the historic Latin Quarter and Notre-Dame Cathedral (exterior view due to reconstruction). Evening free for shopping or leisure.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Paris"
      },
      {
        day: 4,
        title: "Versailles Palace Excursion",
        description: "After breakfast, full-day excursion to the magnificent Palace of Versailles, a UNESCO World Heritage site. Explore the opulent palace interiors and the beautifully manicured gardens. Return to Paris in the evening. Optional Moulin Rouge show (at additional cost).",
        meals: ["Breakfast", "Dinner"],
        overnight: "Paris"
      },
      {
        day: 5,
        title: "Paris at Leisure",
        description: "After breakfast, day at leisure to explore Paris on your own. Optional excursion to Disneyland Paris (at additional cost). Evening romantic dinner at a restaurant near the Eiffel Tower with views of the tower's sparkling light show.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Paris"
      },
      {
        day: 6,
        title: "Departure from Paris",
        description: "After breakfast, check-out from the hotel. Depending on your flight schedule, you may have time for last-minute shopping. Transfer to Charles de Gaulle Airport for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "Private AC Vehicle",
      rooms: 1,
      price: "INR125,000"
    },
    inclusions: [
      "5 Nights accommodation in a 4-star hotel",
      "Daily breakfast and dinner",
      "Airport transfers",
      "Seine River cruise with dinner",
      "Guided city tour",
      "Entrance fees to Eiffel Tower (2nd level), Louvre Museum, and Versailles Palace",
      "All transfers by private air-conditioned vehicle",
      "English-speaking guide for sightseeing",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Visa fees",
      "Travel insurance",
      "Moulin Rouge show",
      "Disneyland Paris excursion",
      "Personal expenses",
      "Tips and gratuities",
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
    uid: "int-003",
    packageName: "Dubai Extravaganza",
    shortDescription: "Experience the perfect blend of traditional Arabian charm and futuristic vision in Dubai.",
    duration: "5 Nights & 6 Days",
    referenceNumber: "TnE/5678/2023",
    travelStartDate: "20 Sep 2023",
    location: "Dubai, UAE",
    category: "international",
    price: 95000,
    rating: 4.9,
    reviews: 178,
    imgSrc: "/images/packages/dubai.jpg",
    heroImage: "/images/packages/dubai-hero.jpg",
    tag: "Luxury",
    destinations: [
      { place: "Dubai", nights: 5 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: "Arrive at Dubai International Airport. Meet our representative and transfer to your hotel. Check-in and relax. Evening Dhow Cruise with dinner along Dubai Creek, offering views of illuminated buildings and the old trading port.",
        meals: ["Dinner"],
        overnight: "Dubai"
      },
      {
        day: 2,
        title: "Dubai City Tour",
        description: "After breakfast, enjoy a half-day city tour of Dubai. Visit Jumeirah Mosque, Dubai Museum, Gold Souk, and Spice Souk. Photo stops at Burj Al Arab and Atlantis The Palm. Afternoon visit to Dubai Mall and Burj Khalifa (124th floor observation deck). Evening fountain show at Dubai Mall.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Dubai"
      },
      {
        day: 3,
        title: "Desert Safari",
        description: "Morning at leisure. Afternoon Desert Safari with dune bashing in 4x4 vehicles. Enjoy camel riding, sandboarding, and henna painting at a desert camp. Experience traditional Arabic entertainment including belly dancing and Tanoura show. BBQ dinner under the stars.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Dubai"
      },
      {
        day: 4,
        title: "Abu Dhabi Excursion",
        description: "After breakfast, full-day excursion to Abu Dhabi. Visit Sheikh Zayed Grand Mosque, Ferrari World (photo stop), and Yas Mall. Drive along the Corniche and visit Heritage Village. Return to Dubai in the evening.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Dubai"
      },
      {
        day: 5,
        title: "Dubai at Leisure",
        description: "After breakfast, day at leisure to explore Dubai on your own. Optional visits to Miracle Garden, Global Village, or IMG Worlds of Adventure (at additional cost). Alternatively, enjoy shopping at Dubai's famous malls. Evening farewell dinner at a rooftop restaurant with city views.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Dubai"
      },
      {
        day: 6,
        title: "Departure from Dubai",
        description: "After breakfast, check-out from the hotel. Depending on your flight schedule, you may have time for last-minute shopping. Transfer to Dubai International Airport for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "Private AC Vehicle",
      rooms: 1,
      price: "INR95,000"
    },
    inclusions: [
      "5 Nights accommodation in a 4-star hotel",
      "Daily breakfast and dinner",
      "Airport transfers",
      "Dhow Cruise with dinner",
      "Half-day city tour",
      "Desert Safari with BBQ dinner",
      "Abu Dhabi excursion",
      "Burj Khalifa entry (124th floor)",
      "All transfers by private air-conditioned vehicle",
      "English-speaking guide for sightseeing",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Visa fees",
      "Travel insurance",
      "Optional activities",
      "Personal expenses",
      "Tips and gratuities",
      "Tourism Dirham Fee (to be paid directly at the hotel)",
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
  }
];

export default internationalPackages; 