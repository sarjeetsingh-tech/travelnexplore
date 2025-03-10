const trekkingPackages = [
  {
    uid: "trek-001",
    packageName: "Himalayan Trek Expedition",
    shortDescription: "Challenge yourself with this breathtaking trek through the majestic Himalayan mountains.",
    duration: "10 Nights & 11 Days",
    referenceNumber: "TnE/6789/2023",
    travelStartDate: "05 May 2023",
    location: "Nepal",
    category: "trekking",
    price: 78500,
    rating: 4.9,
    reviews: 87,
    imgSrc: "/images/packages/himalaya.jpg",
    heroImage: "/images/packages/himalaya-hero.jpg",
    tag: "Adventure",
    destinations: [
      { place: "Kathmandu", nights: 2 },
      { place: "Lukla", nights: 1 },
      { place: "Phakding", nights: 1 },
      { place: "Namche Bazaar", nights: 2 },
      { place: "Tengboche", nights: 1 },
      { place: "Dingboche", nights: 1 },
      { place: "Lobuche", nights: 1 },
      { place: "Kathmandu", nights: 1 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description: "Arrive at Tribhuvan International Airport, Kathmandu. Meet our representative and transfer to your hotel. Check-in and rest to acclimatize to the altitude. Evening briefing about the trek and equipment check.",
        meals: ["Dinner"],
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu Sightseeing",
        description: "After breakfast, enjoy a guided tour of Kathmandu Valley. Visit Pashupatinath Temple, Boudhanath Stupa, Swayambhunath (Monkey Temple), and Kathmandu Durbar Square. Evening free for last-minute shopping for trekking supplies.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kathmandu"
      },
      {
        day: 3,
        title: "Kathmandu to Lukla to Phakding",
        description: "Early morning flight to Lukla (2,860m). Begin trek to Phakding (2,610m), a downhill walk of about 3-4 hours. The trail follows the Dudh Koshi River and passes through several small villages and prayer wheels.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Phakding"
      },
      {
        day: 4,
        title: "Phakding to Namche Bazaar",
        description: "After breakfast, trek to Namche Bazaar (3,440m), the gateway to Everest. Cross several suspension bridges over the Dudh Koshi River. The trail climbs steeply, offering first views of Mt. Everest on a clear day. 5-6 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Namche Bazaar"
      },
      {
        day: 5,
        title: "Acclimatization Day in Namche Bazaar",
        description: "Rest day for acclimatization. Take a short hike to Everest View Hotel for panoramic views of Mt. Everest, Ama Dablam, and other peaks. Visit the Sherpa Museum and local market. This day is crucial for adapting to the altitude.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Namche Bazaar"
      },
      {
        day: 6,
        title: "Namche Bazaar to Tengboche",
        description: "Trek to Tengboche (3,860m), home to the famous Tengboche Monastery. The trail offers spectacular views of Ama Dablam, Everest, and other peaks. Visit the monastery and attend the evening prayer ceremony. 5-6 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Tengboche"
      },
      {
        day: 7,
        title: "Tengboche to Dingboche",
        description: "Trek to Dingboche (4,410m). The trail descends to Debuche, crosses the Imja River, and then climbs to Pangboche village with views of Mt. Everest and Ama Dablam. Continue to Dingboche. 5-6 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Dingboche"
      },
      {
        day: 8,
        title: "Acclimatization Day in Dingboche",
        description: "Another rest day for acclimatization. Take a short hike to Nangkartshang Peak (5,083m) for panoramic views of Makalu, Lhotse, Chalotse, and Taboche. Return to Dingboche for rest and preparation for the next day's trek.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Dingboche"
      },
      {
        day: 9,
        title: "Dingboche to Lobuche",
        description: "Trek to Lobuche (4,940m). The trail follows the lateral moraine of the Khumbu Glacier. Pass through the memorial site for climbers who lost their lives on Mt. Everest. 4-5 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Lobuche"
      },
      {
        day: 10,
        title: "Lobuche to Gorak Shep to Everest Base Camp and back to Gorak Shep",
        description: "Early morning trek to Gorak Shep (5,170m), then continue to Everest Base Camp (5,364m). Experience the magnificent Khumbu Icefall and glacier. Return to Gorak Shep. 7-8 hours of trekking. Early next morning, hike to Kala Patthar (5,545m) for sunrise views of Mt. Everest. Return to Gorak Shep and begin descent to Pheriche.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Gorak Shep/Pheriche"
      },
      {
        day: 11,
        title: "Descent to Namche and Fly Back to Kathmandu",
        description: "Early morning descent to Namche Bazaar and continue to Lukla. The next day, fly back to Kathmandu. Transfer to your hotel for rest and relaxation. Farewell dinner in the evening.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Kathmandu"
      }
    ],
    packageCost: {
      persons: 1,
      transportType: "Shared Transfers",
      rooms: 1,
      price: "INR78,500"
    },
    inclusions: [
      "3 Nights accommodation in Kathmandu (3-star hotel)",
      "7 Nights accommodation in tea houses/lodges during the trek",
      "All meals during the trek (breakfast, lunch, and dinner)",
      "Breakfast and dinner in Kathmandu",
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "English-speaking trekking guide",
      "Porter service (1 porter for 2 trekkers)",
      "All necessary permits and fees",
      "First aid kit",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Nepal visa fees",
      "Travel insurance (mandatory)",
      "Personal trekking equipment",
      "Alcoholic and cold drinks",
      "Hot showers during the trek",
      "Personal expenses",
      "Tips for guides and porters",
      "Emergency evacuation (if needed)",
      "Anything not mentioned in inclusions"
    ],
    paymentPolicy: {
      advancePayment: "50%"
    },
    refundPolicy: [
      "45 Days before 90% Refund",
      "30 Days before 50% refund",
      "15 Days before no Refund"
    ]
  },
  {
    uid: "trek-002",
    packageName: "Annapurna Base Camp Trek",
    shortDescription: "Experience the diverse landscapes and cultures of the Annapurna region on this classic trek.",
    duration: "11 Nights & 12 Days",
    referenceNumber: "TnE/7890/2023",
    travelStartDate: "15 Oct 2023",
    location: "Nepal",
    category: "trekking",
    price: 65000,
    rating: 4.8,
    reviews: 112,
    imgSrc: "/images/packages/annapurna.jpg",
    heroImage: "/images/packages/annapurna-hero.jpg",
    tag: "Popular",
    destinations: [
      { place: "Kathmandu", nights: 2 },
      { place: "Pokhara", nights: 1 },
      { place: "Tikhedhunga", nights: 1 },
      { place: "Ghorepani", nights: 1 },
      { place: "Tadapani", nights: 1 },
      { place: "Chhomrong", nights: 1 },
      { place: "Dovan", nights: 1 },
      { place: "Annapurna Base Camp", nights: 1 },
      { place: "Bamboo", nights: 1 },
      { place: "Pokhara", nights: 1 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        description: "Arrive at Tribhuvan International Airport, Kathmandu. Meet our representative and transfer to your hotel. Check-in and rest. Evening briefing about the trek and equipment check.",
        meals: ["Dinner"],
        overnight: "Kathmandu"
      },
      {
        day: 2,
        title: "Kathmandu Sightseeing",
        description: "After breakfast, enjoy a guided tour of Kathmandu Valley. Visit UNESCO World Heritage sites including Pashupatinath Temple, Boudhanath Stupa, and Kathmandu Durbar Square. Evening free for last-minute shopping for trekking supplies.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kathmandu"
      },
      {
        day: 3,
        title: "Kathmandu to Pokhara",
        description: "After breakfast, drive to Pokhara (approximately 7 hours). Enjoy the scenic beauty along the way. Upon arrival, check-in at your hotel. Evening free to explore Lakeside area and Phewa Lake.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Pokhara"
      },
      {
        day: 4,
        title: "Pokhara to Nayapul to Tikhedhunga",
        description: "After breakfast, drive to Nayapul (1.5 hours) and begin the trek to Tikhedhunga (1,540m). The trail follows the Modi Khola River and passes through several villages. 4-5 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Tikhedhunga"
      },
      {
        day: 5,
        title: "Tikhedhunga to Ghorepani",
        description: "Trek to Ghorepani (2,860m). The trail climbs steeply through forests and villages. Ghorepani offers spectacular views of the Annapurna and Dhaulagiri ranges. 6-7 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Ghorepani"
      },
      {
        day: 6,
        title: "Ghorepani to Poon Hill to Tadapani",
        description: "Early morning hike to Poon Hill (3,210m) for sunrise views of the Himalayan peaks. Return to Ghorepani for breakfast, then trek to Tadapani (2,630m). 5-6 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Tadapani"
      },
      {
        day: 7,
        title: "Tadapani to Chhomrong",
        description: "Trek to Chhomrong (2,170m), a beautiful Gurung village. The trail descends through rhododendron forests and offers views of Annapurna South and Machhapuchhre (Fishtail). 5-6 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Chhomrong"
      },
      {
        day: 8,
        title: "Chhomrong to Dovan",
        description: "Trek to Dovan (2,580m). The trail descends to the Chhomrong Khola, then climbs through bamboo and rhododendron forests. 5-6 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Dovan"
      },
      {
        day: 9,
        title: "Dovan to Annapurna Base Camp",
        description: "Trek to Annapurna Base Camp (4,130m) via Machhapuchhre Base Camp. The landscape changes to a rocky terrain with magnificent views of the Annapurna sanctuary. 6-7 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Annapurna Base Camp"
      },
      {
        day: 10,
        title: "Annapurna Base Camp to Bamboo",
        description: "Early morning to enjoy sunrise over the Annapurna range. After breakfast, begin descent to Bamboo (2,310m). 6-7 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Bamboo"
      },
      {
        day: 11,
        title: "Bamboo to Jhinu Danda to Pokhara",
        description: "Trek to Jhinu Danda and enjoy the natural hot springs. Continue to Nayapul and drive back to Pokhara. 6 hours of trekking and 1.5 hours driving.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Pokhara"
      },
      {
        day: 12,
        title: "Pokhara to Kathmandu",
        description: "After breakfast, drive back to Kathmandu. Evening farewell dinner with cultural show.",
        meals: ["Breakfast", "Dinner"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 1,
      transportType: "Shared Transfers",
      rooms: 1,
      price: "INR65,000"
    },
    inclusions: [
      "2 Nights accommodation in Kathmandu (3-star hotel)",
      "2 Nights accommodation in Pokhara (3-star hotel)",
      "7 Nights accommodation in tea houses/lodges during the trek",
      "All meals during the trek (breakfast, lunch, and dinner)",
      "Breakfast and dinner in Kathmandu and Pokhara",
      "All ground transportation by private vehicle",
      "English-speaking trekking guide",
      "Porter service (1 porter for 2 trekkers)",
      "All necessary permits and fees",
      "First aid kit",
      "All applicable taxes"
    ],
    exclusions: [
      "International airfare",
      "Nepal visa fees",
      "Travel insurance (mandatory)",
      "Personal trekking equipment",
      "Alcoholic and cold drinks",
      "Hot showers during the trek",
      "Personal expenses",
      "Tips for guides and porters",
      "Emergency evacuation (if needed)",
      "Anything not mentioned in inclusions"
    ],
    paymentPolicy: {
      advancePayment: "50%"
    },
    refundPolicy: [
      "45 Days before 90% Refund",
      "30 Days before 50% refund",
      "15 Days before no Refund"
    ]
  },
  {
    uid: "trek-003",
    packageName: "Kedarkantha Winter Trek",
    shortDescription: "Experience the magic of snow-covered Himalayan peaks on this beginner-friendly winter trek.",
    duration: "5 Nights & 6 Days",
    referenceNumber: "TnE/8901/2023",
    travelStartDate: "20 Dec 2023",
    location: "Uttarakhand, India",
    category: "trekking",
    price: 12500,
    rating: 4.7,
    reviews: 145,
    imgSrc: "/images/packages/kedarkantha.jpg",
    heroImage: "/images/packages/kedarkantha-hero.jpg",
    tag: "Winter Special",
    destinations: [
      { place: "Dehradun", nights: 1 },
      { place: "Sankri", nights: 1 },
      { place: "Juda Ka Talab", nights: 1 },
      { place: "Kedarkantha Base", nights: 1 },
      { place: "Sankri", nights: 1 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dehradun",
        description: "Arrive at Dehradun. Meet our representative and transfer to your hotel. Check-in and rest. Evening briefing about the trek and equipment check.",
        meals: ["Dinner"],
        overnight: "Dehradun"
      },
      {
        day: 2,
        title: "Dehradun to Sankri",
        description: "After breakfast, drive to Sankri (1,950m), a remote village in Uttarakhand. The drive takes approximately 8-9 hours and offers beautiful views of the Himalayan foothills. Upon arrival, check-in at the guesthouse. Evening free to explore the village.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Sankri"
      },
      {
        day: 3,
        title: "Sankri to Juda Ka Talab",
        description: "After breakfast, begin the trek to Juda Ka Talab (2,700m). The trail passes through dense pine forests and offers occasional views of snow-capped peaks. Juda Ka Talab is a beautiful frozen lake in winter. 4-5 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Juda Ka Talab (Camping)"
      },
      {
        day: 4,
        title: "Juda Ka Talab to Kedarkantha Base",
        description: "Trek to Kedarkantha Base (3,400m). The trail climbs gradually through oak and pine forests, with increasing snow cover in winter. The campsite offers panoramic views of the surrounding peaks. 4-5 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Kedarkantha Base (Camping)"
      },
      {
        day: 5,
        title: "Kedarkantha Summit and Descent to Sankri",
        description: "Early morning start for the summit climb (3,800m). The climb takes about 3-4 hours and offers spectacular sunrise views from the top. After enjoying the summit, descend all the way to Sankri. 8-9 hours of trekking.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        overnight: "Sankri"
      },
      {
        day: 6,
        title: "Sankri to Dehradun",
        description: "After breakfast, drive back to Dehradun. The journey takes approximately 8-9 hours. Arrive in Dehradun by evening for your onward journey.",
        meals: ["Breakfast", "Lunch"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 1,
      transportType: "Shared Transfers",
      rooms: 1,
      price: "INR12,500"
    },
    inclusions: [
      "1 Night accommodation in Dehradun (3-star hotel)",
      "2 Nights accommodation in Sankri (guesthouse)",
      "2 Nights camping during the trek",
      "All meals as per itinerary",
      "All ground transportation by shared vehicle",
      "English-speaking trekking guide",
      "Porter/mule for carrying common equipment",
      "Camping equipment (tents, sleeping bags, mattresses)",
      "Kitchen and dining tents",
      "First aid kit",
      "All applicable permits and fees",
      "All applicable taxes"
    ],
    exclusions: [
      "Personal trekking equipment",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides and porters",
      "Porter for personal luggage",
      "Anything not mentioned in inclusions"
    ],
    paymentPolicy: {
      advancePayment: "100%"
    },
    refundPolicy: [
      "30 Days before 90% Refund",
      "15 Days before 50% refund",
      "07 Days before no Refund"
    ]
  }
];

export default trekkingPackages; 