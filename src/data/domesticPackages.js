const domesticPackages = [
  {
    uid: "dom-001",
    packageName: "Amazing South Indian Trail",
    shortDescription: "Experience the beauty and culture of South India with this comprehensive tour package.",
    duration: "7 Nights & 8 Days",
    referenceNumber: "TnE/2752/2022",
    travelStartDate: "25 Dec 2022",
    location: "South India",
    category: "domestic",
    price: 57450,
    rating: 4.8,
    reviews: 124,
    imgSrc: "/images/packages/south-india.jpg",
    heroImage: "/images/packages/south-india-hero.jpg",
    tag: "Best Seller",
    destinations: [
      { place: "Munnar", nights: 2 },
      { place: "Allepphey", nights: 1 },
      { place: "Kovalam", nights: 1 },
      { place: "Kanyakumari", nights: 1 },
      { place: "Rameshwaram", nights: 1 },
      { place: "Madurai", nights: 1 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Cochin -- Munnar (110 Kms / 3 Hrs)",
        description: "On arrival at the Cochin airport/railway station, meet our representative who will be there for your warm welcome and afterwards to transfer you to your already booked hotel in Munnar Proceed to Munnar. Visit Cheeyapara and Valara water falls on the way to Munnar. Throughout the journey enjoy beautiful streams small waterfalls, Rubber, Pepper cardamom and Tea plantations and thick forests; God has blessed his own country with incomparable beauty on arrival at Munnar check in to Hotel. At leisure.",
        meals: ["Dinner"],
        overnight: "Munnar"
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        description: "Breakfast at the Hotel. Morning after breakfast proceed to enjoy full day sightseeing tour of Munnar. Rose Garden, Tea Garden, Photo Point, Madupetty Dam/Lake, Echo Point & Kundala Dam/Lake.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Munnar"
      },
      {
        day: 3,
        title: "Munnar to Alleppey (165 Kms / 4.5 Hrs)",
        description: "Breakfast at the Hotel, Transfers -- Munnar to Alleppey. Morning after breakfast leave for Alleppey, Allappuza famous for its backwaters. Visit Alleppey beach, sunset and enjoy shopping if staying in Alleppey. Visit Alleppey Beach and Backwaters. Enjoy all the amenities of this hotel/resort for a day which includes fishing in the backwaters (depends on the hotel/resort selected)",
        meals: ["Breakfast", "Dinner"],
        overnight: "Alleppey"
      },
      {
        day: 4,
        title: "Alleppey to Trivendrum / Kovalam (160 Kms / 3.5 Hrs)",
        description: "Breakfast at the Hotel -Houseboat, Transfers -- Alleppey to Kovalam. Morning after breakfast check out from the hotel Houseboat and transfer to Kovalam. Check in at Hotel. Kovalam is an evergreen and pleasant climatic beach. Kovalam is a dreamland for tourists all over the world. With high rock promontory and a calm bay of blue waters, this beach paradise creates a unique aquarelle on moonlit nights. Kovalam was brought to the public eye by the Maharaja of Travancore.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Trivendrum / Kovalam"
      },
      {
        day: 5,
        title: "Trivendrum / Kovalam - Kanyakumari (90 Kms / 02 Hrs)",
        description: "Breakfast at the Hotel, proceed for your transfer to Kanyakumari, Enroute Visit Temple of Gold Shri Padmanabham Swami Temple, check in at hotel afternoon go for Kanyakumari sightseeing. Visit Vivekananda Rock that houses a memorial dedicated to Swami Vivekananda. The Memorial is built at the convergence of the Indian Ocean, the Arabian Sea and the Bay of Bengal. Kanyakumari is a place where you can enjoy Sun rise and Sunset from the same point, something special to remember. Enjoy Sunset of Kanyakumari from the tip of India.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kanyakumari"
      },
      {
        day: 6,
        title: "Kanyakumari - Rameshwaram (320 Kms / 06 Hrs)",
        description: "After breakfast check out from hotel and transfer to Rameswaram. En-route visit Thiruchendhur Murugan Temple. Arrive Rameswaram. Rameswaram is famous for Lord Rama's temple at Tamil Nadiu. Check in at Hotel. The presiding deity is the Linga Of Sri Ramanatha Swamy, which happens to be one of the twelve Jyotirlingas of India. After check in, set to Pamban Bridge - which on the Palk Strait connects Rameswaram to mainland India.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Rameshwaram"
      },
      {
        day: 7,
        title: "Rameshwaram -- Madurai (180 Kms / 4 Hrs)",
        description: "Early Morning Darshan at Rameshwaram Temple dedicated to Lord Shiva, was constructed during the 17th century. Ramanathaswamy Temple. Agni Theertham Temple - The sacredness of the place makes it a popular bathing spot with the pilgrims. Ideally a bath at Agni Theertham precedes the visit to the Ramanatha Swamy Temple. Dhanushkodi Temple -- It is believed that the bridge was built by the monkey forces of Lord Rama to access Sri Lanka. Gandamadanaparavtham - the highest point in the island. The devotees believes that lord Rama's feet was placed on the stone. After breakfast check out from hotel and proceed to Madurai. Upon arrival transfer and check in at hotel.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Madurai"
      },
      {
        day: 8,
        title: "Madurai -- Madurai Airport Drop",
        description: "After Breakfast check out from hotel & Darshan at Minakshi Mandir, Later on transfer to Madurai Airport for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 4,
      transportType: "Innova/Similar",
      rooms: 2,
      price: "INR57,450"
    },
    inclusions: [
      "Return Airfare From Jaipur -- Kochin & Madurai -- Jaipur",
      "7 Night stay in preferred Hotel / Resort",
      "02 Night Stay in Munnar with Breakfast & Dinner",
      "01 Night Stay in Alleppey Houseboat with Breakfast, Lunch & Dinner",
      "01 Night Stay in Trivendrum with Breakfast & Dinner",
      "01 Night Stay in Kanyakumari with Breakfast & Dinner",
      "01 Night Stay in Rameshwaram with Breakfast & Dinner",
      "01 Night Stay in Madurai with Breakfast & Dinner",
      "Meal Plan: Breakfast & Dinner",
      "All Inclusion and sightseeing By Ac Vehicle as per the itinerary from 8.00 AM to 7.00 PM",
      "All Toll, Parking, Driver Bata & Fuel Cost"
    ],
    exclusions: [
      "GST 5% on the total package cost",
      "Any additional Transfers not specified in the Package Inclusions",
      "Back water ride",
      "Lunch & Snacks are not included",
      "All those which are not mentioned above",
      "Travel insurance",
      "Entry Fees To Monuments And Palaces",
      "Porterage At Hotels And Airports, Tips, Insurance, Laundry, Liquors, Wine, Etc",
      "All Items Of Personal Nature",
      "Any Cost Arising Due To Natural Calamities Like Landslides, Roadblocks, Etc",
      "Any Increase In Taxes Or Fuel Leading To An Increase In Surface Transport",
      "Ayurveda Charges",
      "Only Non Ac Rooms Are Provided In Munnar And Thekkady As They Are Hill Stations",
      "All kind of personal expenses such as tips, laundry, telephone bills and beverages, Camera Fees etc.",
      "Any other item not specified in the Package Inclusions",
      "Any claim due to road blocks, curfews, accident etc."
    ],
    paymentPolicy: {
      advancePayment: "100%"
    },
    refundPolicy: [
      "30 Days before full Refund",
      "15 Days before 50% refund",
      "07 Days before no Refund / No Show"
    ]
  },
  {
    uid: "dom-002",
    packageName: "Golden Triangle Tour",
    shortDescription: "Explore the rich cultural heritage of Delhi, Agra, and Jaipur in this classic Indian tour.",
    duration: "5 Nights & 6 Days",
    referenceNumber: "TnE/3421/2023",
    travelStartDate: "15 Jan 2023",
    location: "North India",
    category: "domestic",
    price: 42500,
    rating: 4.7,
    reviews: 156,
    imgSrc: "/images/packages/golden-triangle.jpg",
    heroImage: "/images/packages/golden-triangle-hero.jpg",
    tag: "Popular",
    destinations: [
      { place: "Delhi", nights: 2 },
      { place: "Agra", nights: 1 },
      { place: "Jaipur", nights: 2 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Arrive at Delhi International Airport where you will be greeted by our representative. Transfer to your hotel and check-in. Rest of the day at leisure to recover from jet lag. In the evening, enjoy a welcome dinner at a local restaurant featuring North Indian cuisine.",
        meals: ["Dinner"],
        overnight: "Delhi"
      },
      {
        day: 2,
        title: "Delhi City Tour",
        description: "After breakfast, embark on a full-day sightseeing tour of Delhi. Visit Old Delhi attractions including Jama Masjid, Red Fort, and enjoy a rickshaw ride through Chandni Chowk. After lunch, explore New Delhi with visits to Humayun's Tomb, Qutub Minar, India Gate, and drive past the President's House and Parliament Building.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Delhi"
      },
      {
        day: 3,
        title: "Delhi to Agra (210 Kms / 3.5 Hrs)",
        description: "After breakfast, drive to Agra. Upon arrival, check-in at your hotel. In the afternoon, visit the magnificent Taj Mahal, one of the Seven Wonders of the World. Later, explore Agra Fort, a UNESCO World Heritage site. Evening at leisure or optional visit to local markets.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Agra"
      },
      {
        day: 4,
        title: "Agra to Jaipur via Fatehpur Sikri (240 Kms / 5 Hrs)",
        description: "Early morning option to revisit Taj Mahal at sunrise (extra cost). After breakfast, drive to Jaipur. En route, visit Fatehpur Sikri, the deserted red sandstone city built by Emperor Akbar. Continue to Jaipur and check-in at your hotel. Evening at leisure.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Jaipur"
      },
      {
        day: 5,
        title: "Jaipur City Tour",
        description: "After breakfast, visit Amber Fort with an elephant ride to the entrance. Later, explore the City Palace, Jantar Mantar Observatory, and Hawa Mahal (Palace of Winds). Afternoon shopping opportunity at local bazaars known for textiles, jewelry, and handicrafts.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Jaipur"
      },
      {
        day: 6,
        title: "Jaipur to Delhi Departure (265 Kms / 5 Hrs)",
        description: "After breakfast, check-out from the hotel and drive back to Delhi. Depending on your flight schedule, you may have time for last-minute shopping. Transfer to Delhi International Airport for your onward journey.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "AC Sedan",
      rooms: 1,
      price: "INR42,500"
    },
    inclusions: [
      "5 Nights accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by air-conditioned vehicle",
      "Professional English-speaking tour guide",
      "Elephant ride at Amber Fort, Jaipur",
      "Rickshaw ride in Old Delhi",
      "Monument entrance fees",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch",
      "Camera fees at monuments",
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
    uid: "dom-003",
    packageName: "Kashmir Paradise",
    shortDescription: "Experience the heaven on earth with our comprehensive Kashmir tour package.",
    duration: "6 Nights & 7 Days",
    referenceNumber: "TnE/4532/2023",
    travelStartDate: "10 Mar 2023",
    location: "Kashmir",
    category: "domestic",
    price: 48900,
    rating: 4.9,
    reviews: 89,
    imgSrc: "/images/packages/kashmir.jpg",
    heroImage: "/images/packages/kashmir-hero.jpg",
    tag: "Featured",
    destinations: [
      { place: "Srinagar", nights: 2 },
      { place: "Gulmarg", nights: 1 },
      { place: "Pahalgam", nights: 2 },
      { place: "Srinagar", nights: 1 }
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Arrive at Srinagar Airport where our representative will meet you. Transfer to your houseboat on Dal Lake. Afternoon Shikara ride on Dal Lake visiting floating gardens and local markets. Evening at leisure to enjoy the beautiful surroundings.",
        meals: ["Dinner"],
        overnight: "Srinagar (Houseboat)"
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        description: "After breakfast, enjoy a full day of sightseeing in Srinagar. Visit Mughal Gardens including Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Also visit the famous Shankaracharya Temple offering panoramic views of the city. Evening free for shopping in the local markets.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Srinagar (Hotel)"
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg (56 Kms / 2 Hrs)",
        description: "After breakfast, drive to Gulmarg, known as the 'Meadow of Flowers'. Check-in at your hotel. Enjoy activities like the Gondola cable car ride (at additional cost), horse riding, or simply take in the beautiful scenery. Gulmarg is also home to one of the highest golf courses in the world.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Gulmarg"
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam (140 Kms / 3.5 Hrs)",
        description: "After breakfast, drive to Pahalgam, the 'Valley of Shepherds'. En route, visit the Saffron fields of Pampore and Avantipura Ruins. Upon arrival in Pahalgam, check-in at your hotel. Rest of the day at leisure to explore the beautiful surroundings.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Pahalgam"
      },
      {
        day: 5,
        title: "Pahalgam Excursion",
        description: "After breakfast, enjoy a full day of activities in Pahalgam. Visit Betaab Valley, Chandanwari, and Aru Valley (at additional cost). These locations offer stunning natural beauty and are popular spots for Bollywood film shootings.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Pahalgam"
      },
      {
        day: 6,
        title: "Pahalgam to Srinagar (90 Kms / 2.5 Hrs)",
        description: "After breakfast, drive back to Srinagar. Check-in at your hotel. Afternoon visit to the local markets for shopping. You can purchase famous Kashmiri handicrafts, carpets, shawls, and dry fruits.",
        meals: ["Breakfast", "Dinner"],
        overnight: "Srinagar"
      },
      {
        day: 7,
        title: "Departure from Srinagar",
        description: "After breakfast, check-out from the hotel and transfer to Srinagar Airport for your onward journey with beautiful memories of Kashmir.",
        meals: ["Breakfast"],
        overnight: null
      }
    ],
    packageCost: {
      persons: 2,
      transportType: "AC Sedan",
      rooms: 1,
      price: "INR48,900"
    },
    inclusions: [
      "6 Nights accommodation (1 night in Houseboat, 5 nights in hotels)",
      "Daily breakfast and dinner",
      "Airport transfers",
      "All transfers and sightseeing by private vehicle",
      "Shikara ride on Dal Lake",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Gondola ride in Gulmarg",
      "Entrance fees to monuments",
      "Lunch and other meals not mentioned",
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
  }
];

export default domesticPackages; 