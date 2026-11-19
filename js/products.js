/*======================================================
  SportsZone
  File: js/products.js
  Part 1
======================================================*/

const products = [
  {
    id: 1,

    name: "Professional Cricket Bat",

    category: "Cricket",

    brand: "SG",

    price: 3999,

    oldPrice: 4999,

    rating: 4.8,

    reviews: 245,

    stock: 18,

    badge: "Best Seller",

    image: "images/products/cricket-bat.jpg",

    description:
      "Premium English willow cricket bat suitable for leather ball matches.",

    features: [
      "English Willow",
      "Lightweight",
      "Comfort Grip",
      "Premium Finish",
    ],
  },

  {
    id: 2,

    name: "Leather Cricket Ball",

    category: "Cricket",

    brand: "SG",

    price: 499,

    oldPrice: 699,

    rating: 4.6,

    reviews: 186,

    stock: 50,

    badge: "Popular",

    image: "images/products/cricket-ball.jpg",

    description:
      "High-quality leather cricket ball for practice and tournaments.",

    features: [
      "Genuine Leather",
      "Hand Stitched",
      "Long Lasting",
      "Match Quality",
    ],
  },

  {
    id: 3,

    name: "Football Size 5",

    category: "Football",

    brand: "Nike",

    price: 1499,

    oldPrice: 1999,

    rating: 4.7,

    reviews: 320,

    stock: 35,

    badge: "Top Rated",

    image: "images/products/football.jpg",

    description:
      "Durable football suitable for training and competitive matches.",

    features: [
      "PU Material",
      "Water Resistant",
      "Official Size",
      "Machine Stitched",
    ],
  },

  {
    id: 4,

    name: "Football Goalkeeper Gloves",

    category: "Football",

    brand: "Adidas",

    price: 1199,

    oldPrice: 1499,

    rating: 4.5,

    reviews: 112,

    stock: 22,

    badge: "Sale",

    image: "images/products/goalkeeper-gloves.jpg",

    description: "Comfortable goalkeeper gloves with excellent grip.",

    features: [
      "Latex Grip",
      "Breathable",
      "Adjustable Strap",
      "Shock Absorption",
    ],
  },

  {
    id: 5,

    name: "Basketball",

    category: "Basketball",

    brand: "Spalding",

    price: 1799,

    oldPrice: 2299,

    rating: 4.8,

    reviews: 201,

    stock: 30,

    badge: "Hot",

    image: "images/products/basketball.jpg",

    description: "Official size basketball for indoor and outdoor courts.",

    features: [
      "Official Size",
      "Excellent Grip",
      "Rubber Surface",
      "Durable Build",
    ],
  },

  {
    id: 6,

    name: "Basketball Hoop",

    category: "Basketball",

    brand: "Cosco",

    price: 5499,

    oldPrice: 6499,

    rating: 4.4,

    reviews: 79,

    stock: 10,

    badge: "Limited",

    image: "images/products/basketball-hoop.jpg",

    description: "Heavy-duty basketball hoop with weather-resistant net.",

    features: ["Steel Rim", "Strong Net", "Outdoor Use", "Easy Installation"],
  },

  {
    id: 7,

    name: "Badminton Racket",

    category: "Badminton",

    brand: "Yonex",

    price: 2299,

    oldPrice: 2799,

    rating: 4.9,

    reviews: 310,

    stock: 27,

    badge: "Best Seller",

    image: "images/products/badminton-racket.jpg",

    description:
      "Lightweight badminton racket designed for professional gameplay.",

    features: [
      "Carbon Graphite",
      "Lightweight",
      "Comfort Grip",
      "High Tension",
    ],
  },

  {
    id: 8,

    name: "Shuttlecock Pack",

    category: "Badminton",

    brand: "Yonex",

    price: 699,

    oldPrice: 899,

    rating: 4.6,

    reviews: 178,

    stock: 60,

    badge: "Popular",

    image: "images/products/shuttlecock.jpg",

    description: "Pack of premium feather shuttlecocks for tournaments.",

    features: ["12 Pieces", "Feather", "Stable Flight", "Tournament Grade"],
  },

  {
    id: 9,

    name: "Tennis Racket",

    category: "Tennis",

    brand: "Wilson",

    price: 3499,

    oldPrice: 4299,

    rating: 4.8,

    reviews: 167,

    stock: 20,

    badge: "Trending",

    image: "images/products/tennis-racket.jpg",

    description:
      "Professional tennis racket with excellent balance and control.",

    features: [
      "Graphite Frame",
      "Lightweight",
      "Comfort Handle",
      "High Performance",
    ],
  },

  {
    id: 10,

    name: "Tennis Ball Pack",

    category: "Tennis",

    brand: "Wilson",

    price: 499,

    oldPrice: 649,

    rating: 4.7,

    reviews: 221,

    stock: 80,

    badge: "New",

    image: "images/products/tennis-ball.jpg",

    description:
      "Pack of premium pressure tennis balls for training and matches.",

    features: ["3 Balls", "High Bounce", "Durable Felt", "Official Standard"],
  },
  {
    id: 11,

    name: "Professional Volleyball",

    category: "Volleyball",

    brand: "Cosco",

    price: 1299,

    oldPrice: 1599,

    rating: 4.7,

    reviews: 154,

    stock: 32,

    badge: "Popular",

    image: "images/products/volleyball.jpg",

    description:
      "Official size volleyball suitable for indoor and outdoor matches.",

    features: [
      "Official Size",
      "Soft Touch",
      "Machine Stitched",
      "Durable Cover",
    ],
  },

  {
    id: 12,

    name: "Volleyball Net",

    category: "Volleyball",

    brand: "Nivia",

    price: 1899,

    oldPrice: 2299,

    rating: 4.5,

    reviews: 88,

    stock: 16,

    badge: "Sale",

    image: "images/products/volleyball-net.jpg",

    description:
      "Heavy-duty volleyball net for schools, clubs, and tournaments.",

    features: [
      "Weather Resistant",
      "Strong Nylon",
      "Easy Installation",
      "Competition Size",
    ],
  },

  {
    id: 13,

    name: "Adjustable Dumbbells Set",

    category: "Gym Equipment",

    brand: "Kore",

    price: 4999,

    oldPrice: 5999,

    rating: 4.8,

    reviews: 246,

    stock: 15,

    badge: "Best Seller",

    image: "images/products/dumbbells.jpg",

    description: "Adjustable dumbbell set ideal for home gym workouts.",

    features: ["Adjustable Weight", "Steel Plates", "Comfort Grip", "Home Gym"],
  },

  {
    id: 14,

    name: "Yoga Mat",

    category: "Fitness Accessories",

    brand: "Boldfit",

    price: 899,

    oldPrice: 1199,

    rating: 4.7,

    reviews: 398,

    stock: 55,

    badge: "Hot",

    image: "images/products/yoga-mat.jpg",

    description:
      "Non-slip yoga mat designed for yoga, stretching, and workouts.",

    features: ["Non Slip", "Lightweight", "6mm Thickness", "Easy to Carry"],
  },

  {
    id: 15,

    name: "Exercise Bike",

    category: "Gym Equipment",

    brand: "PowerMax",

    price: 18999,

    oldPrice: 21999,

    rating: 4.6,

    reviews: 97,

    stock: 8,

    badge: "Premium",

    image: "images/products/exercise-bike.jpg",

    description:
      "Indoor exercise bike with adjustable resistance and digital display.",

    features: [
      "Digital Monitor",
      "Adjustable Seat",
      "Silent Operation",
      "Home Fitness",
    ],
  },

  {
    id: 16,

    name: "Motorized Treadmill",

    category: "Gym Equipment",

    brand: "PowerMax",

    price: 32999,

    oldPrice: 37999,

    rating: 4.8,

    reviews: 143,

    stock: 6,

    badge: "Top Rated",

    image: "images/products/treadmill.jpg",

    description:
      "Foldable treadmill with multiple workout modes and LCD display.",

    features: [
      "Foldable",
      "LCD Display",
      "Heart Rate Sensor",
      "Multiple Programs",
    ],
  },

  {
    id: 17,

    name: "Skipping Rope",

    category: "Fitness Accessories",

    brand: "Strauss",

    price: 349,

    oldPrice: 499,

    rating: 4.6,

    reviews: 281,

    stock: 75,

    badge: "New",

    image: "images/products/skipping-rope.jpg",

    description:
      "Adjustable skipping rope suitable for cardio and fitness training.",

    features: [
      "Adjustable Length",
      "Foam Handles",
      "Lightweight",
      "Smooth Rotation",
    ],
  },

  {
    id: 18,

    name: "Cycling Helmet",

    category: "Cycling",

    brand: "Btwin",

    price: 2499,

    oldPrice: 2999,

    rating: 4.8,

    reviews: 136,

    stock: 28,

    badge: "Trending",

    image: "images/products/cycling-helmet.jpg",

    description:
      "Protective cycling helmet with lightweight aerodynamic design.",

    features: [
      "Impact Resistant",
      "Ventilated",
      "Adjustable Strap",
      "Lightweight",
    ],
  },

  {
    id: 19,

    name: "Running Shoes",

    category: "Running",

    brand: "Adidas",

    price: 4599,

    oldPrice: 5499,

    rating: 4.9,

    reviews: 524,

    stock: 38,

    badge: "Best Seller",

    image: "images/products/running-shoes.jpg",

    description:
      "Comfortable running shoes with superior cushioning for daily training.",

    features: [
      "Breathable Mesh",
      "Lightweight",
      "Shock Absorption",
      "Rubber Sole",
    ],
  },

  {
    id: 20,

    name: "Sports Water Bottle",

    category: "Fitness Accessories",

    brand: "Nike",

    price: 599,

    oldPrice: 799,

    rating: 4.7,

    reviews: 312,

    stock: 90,

    badge: "Popular",

    image: "images/products/water-bottle.jpg",

    description:
      "Leak-proof sports water bottle perfect for gym, cycling, and outdoor activities.",

    features: ["750ml Capacity", "BPA Free", "Leak Proof", "Easy Grip"],
  },
  {
    id: 21,

    name: "Cricket Batting Gloves",

    category: "Cricket",

    brand: "SS",

    price: 1599,

    oldPrice: 1999,

    rating: 4.7,

    reviews: 178,

    stock: 25,

    badge: "Popular",

    image: "images/products/batting-gloves.jpg",

    description: "Comfortable batting gloves with premium protection and grip.",

    features: [
      "Leather Palm",
      "Finger Protection",
      "Sweat Absorption",
      "Comfort Fit",
    ],
  },

  {
    id: 22,

    name: "Cricket Helmet",

    category: "Cricket",

    brand: "Shrey",

    price: 2899,

    oldPrice: 3399,

    rating: 4.8,

    reviews: 124,

    stock: 14,

    badge: "Top Rated",

    image: "images/products/cricket-helmet.jpg",

    description: "Protective cricket helmet with adjustable steel grill.",

    features: ["Steel Grill", "Adjustable Fit", "Lightweight", "High Safety"],
  },

  {
    id: 23,

    name: "Football Shin Guards",

    category: "Football",

    brand: "Puma",

    price: 899,

    oldPrice: 1199,

    rating: 4.5,

    reviews: 147,

    stock: 40,

    badge: "Sale",

    image: "images/products/shin-guards.jpg",

    description: "Lightweight shin guards designed for maximum protection.",

    features: [
      "Lightweight",
      "Impact Protection",
      "Comfort Fit",
      "Adjustable Straps",
    ],
  },

  {
    id: 24,

    name: "Gym Resistance Bands Set",

    category: "Fitness Accessories",

    brand: "Boldfit",

    price: 999,

    oldPrice: 1299,

    rating: 4.8,

    reviews: 289,

    stock: 58,

    badge: "Best Seller",

    image: "images/products/resistance-bands.jpg",

    description:
      "Complete resistance band set for strength and mobility workouts.",

    features: [
      "5 Resistance Levels",
      "Door Anchor",
      "Handles Included",
      "Portable Bag",
    ],
  },

  {
    id: 25,

    name: "Foam Roller",

    category: "Fitness Accessories",

    brand: "Strauss",

    price: 899,

    oldPrice: 1099,

    rating: 4.6,

    reviews: 163,

    stock: 42,

    badge: "Trending",

    image: "images/products/foam-roller.jpg",

    description: "High-density foam roller for muscle recovery and stretching.",

    features: ["High Density", "Lightweight", "Portable", "Muscle Recovery"],
  },

  {
    id: 26,

    name: "Cycling Gloves",

    category: "Cycling",

    brand: "Btwin",

    price: 799,

    oldPrice: 999,

    rating: 4.7,

    reviews: 156,

    stock: 34,

    badge: "New",

    image: "images/products/cycling-gloves.jpg",

    description: "Breathable cycling gloves with anti-slip palm grip.",

    features: [
      "Breathable Fabric",
      "Gel Padding",
      "Anti Slip",
      "Adjustable Wrist",
    ],
  },

  {
    id: 27,

    name: "Sports Duffel Bag",

    category: "Fitness Accessories",

    brand: "Nike",

    price: 1999,

    oldPrice: 2499,

    rating: 4.8,

    reviews: 204,

    stock: 26,

    badge: "Hot",

    image: "images/products/sports-bag.jpg",

    description: "Large sports duffel bag with multiple storage compartments.",

    features: [
      "Water Resistant",
      "Shoe Compartment",
      "Adjustable Strap",
      "Large Capacity",
    ],
  },

  {
    id: 28,

    name: "Sports Stopwatch",

    category: "Running",

    brand: "Casio",

    price: 1499,

    oldPrice: 1799,

    rating: 4.6,

    reviews: 118,

    stock: 31,

    badge: "Popular",

    image: "images/products/stopwatch.jpg",

    description:
      "Digital stopwatch suitable for training sessions and competitions.",

    features: ["LCD Display", "Lap Timer", "Alarm", "Water Resistant"],
  },

  {
    id: 29,

    name: "Sports Socks Pack",

    category: "Running",

    brand: "Adidas",

    price: 699,

    oldPrice: 899,

    rating: 4.7,

    reviews: 231,

    stock: 65,

    badge: "Value Pack",

    image: "images/products/sports-socks.jpg",

    description:
      "Pack of breathable sports socks for training and daily workouts.",

    features: [
      "Pack of 3",
      "Moisture Wicking",
      "Comfort Fit",
      "Stretch Fabric",
    ],
  },

  {
    id: 30,

    name: "Protein Shaker Bottle",

    category: "Fitness Accessories",

    brand: "MuscleBlaze",

    price: 499,

    oldPrice: 699,

    rating: 4.7,

    reviews: 341,

    stock: 72,

    badge: "Hot",

    image: "images/products/protein-shaker.jpg",

    description:
      "Leak-proof protein shaker bottle with mixing ball for smooth shakes.",

    features: ["700ml Capacity", "Mixing Ball", "Leak Proof", "BPA Free"],
  },
];
