const bmwModel = [
  {
    id: 1,
    name: "BMW 3 Series",
    series: "Series",
    description:
      "The iconic sports sedan balancing performance, technology, and luxury.",
    image:
      "https://images.unsplash.com/photo-1658936958763-3b93f18951a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13MyUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    specs: {
      engine: "2.0L TwinPower Turbo",
      hp: "255 hp",
      acceleration: "5.6s",
    },
  },
  {
    id: 2,
    name: "BMW X5",
    series: "X Series",
    description:
      "Mid-size SUV with luxury interiors and plug-in hybrid options.",
    image:
      "https://images.unsplash.com/photo-1653227158553-ddaa680cdd65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym13JTIweDV8ZW58MHx8MHx8fDA%3D",
    specs: {
      engine: "3.0L 6-cylinder Turbo",
      hp: "335 hp",
      acceleration: "5.3s",
    },
  },
  {
    id: 3,
    name: "BMW M3",
    series: "M Series",
    description:
      "Legendary sports sedan with aggressive design and track-ready performance.",
    image:
      "https://images.unsplash.com/photo-1568417215354-9a9e77b3fb4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGJtdyUyMG0zfGVufDB8fDB8fHww",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      hp: "503 hp",
      acceleration: "3.8s",
    },
  },
  {
    id: 4,
    name: "BMW 5 Series",
    series: "Series",
    description: "Luxury sedan with advanced tech and comfort features.",
    image: "https://images.unsplash.com/photo-1652890058094-a3fe8ead30fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwNSUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    specs: {
      engine: "2.0L Turbo",
      hp: "248 hp",
      acceleration: "6.1s",
    },
  },
  {
    id: 5,
    name: "BMW 7 Series",
    series: "Series",
    description: "Flagship sedan combining elegance and cutting-edge tech.",
    image: "https://images.unsplash.com/photo-1655757324190-4e102d4fcdff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIwNyUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    specs: {
      engine: "3.0L Turbo",
      hp: "335 hp",
      acceleration: "5.2s",
    },
  },
  {
    id: 6,
    name: "BMW X3",
    series: "X Series",
    description: "Compact luxury SUV with sporty handling and efficiency.",
    image: "https://images.unsplash.com/photo-1681113163422-aab89b8935c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJtdyUyMHgzfGVufDB8fDB8fHww",
    specs: {
      engine: "2.0L Turbo",
      hp: "248 hp",
      acceleration: "6.3s",
    },
  },
  {
    id: 7,
    name: "BMW X7",
    series: "X Series",
    description: "Full-size SUV with ultimate luxury and performance.",
    image: "https://plus.unsplash.com/premium_photo-1666533246605-2a75dc051e30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJtdyUyMHg3fGVufDB8MHwwfHx8MA%3D%3D",
    specs: {
      engine: "4.4L V8 Turbo",
      hp: "523 hp",
      acceleration: "4.5s",
    },
  },
  {
    id: 8,
    name: "BMW Z4",
    series: "Z Series",
    description: "Sporty convertible with precision handling and style.",
    image: "https://images.unsplash.com/photo-1627144674893-f3f09193595d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym13JTIwejR8ZW58MHwwfDB8fHww",
    specs: {
      engine: "2.0L Turbo",
      hp: "255 hp",
      acceleration: "5.2s",
    },
  },
  {
    id: 9,
    name: "BMW M4",
    series: "M Series",
    description: "High-performance coupe built for thrill seekers.",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13JTIwbTR8ZW58MHwwfDB8fHww",
    specs: {
      engine: "3.0L Twin-Turbo I6",
      hp: "473 hp",
      acceleration: "3.8s",
    },
  },
  {
    id: 10,
    name: "BMW iX",
    series: "i Series",
    description: "Electric SUV with futuristic design and cutting-edge tech.",
    image: "https://images.unsplash.com/photo-1687362438620-b2f0c0faddb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIwaXh8ZW58MHwwfDB8fHww",
    specs: {
      engine: "Electric",
      hp: "516 hp",
      acceleration: "4.6s",
    },
  },
  {
    id: 11,
    name: "BMW i4",
    series: "i Series",
    description: "Fully electric sedan delivering performance and luxury.",
    image: "https://plus.unsplash.com/premium_photo-1737591339002-a04f2ad97df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwaTR8ZW58MHwwfDB8fHww",
    specs: {
      engine: "Electric",
      hp: "536 hp",
      acceleration: "3.9s",
    },
  },
  {
    id: 12,
    name: "BMW M5",
    series: "M Series",
    description: "Ultimate sports sedan with incredible acceleration and power.",
    image: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwbTV8ZW58MHwwfDB8fHww",
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      hp: "600 hp",
      acceleration: "3.1s",
    },
  },
];

export default bmwModel;
