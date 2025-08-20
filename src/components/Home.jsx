// import Details from "./Details";
// import Footer from "./Footer";
// import HeroVideo from "./HeroVideo";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Home = () => {
//   const images = [
//     "/images/car1.png",
//     "/images/car2.png",
//     "/images/car3.png",
//     "/images/car4.png",
//     "/images/car5.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1000);

//     return () => clearInterval(interval); // cleanup
//   }, []);
//   return (
//     <>
//       // page1 return
//       <div className="flex items-center justify-center mx-10 h-[600px]">
//                          // Left Side Text 
//         <div className="w-1/2 text-center flex flex-col ">
//           <motion.h1
//             initial={{ opacity: 0, y: 100 }}
//             transition={{ duration: 1.5 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="font-bold uppercase text-4xl text-white"
//           >
//             The
//             <span className="text-6xl font-extrabold text-red-500">
//               Ultimate
//             </span>
//             Driving Machine
//           </motion.h1>
//           <p className="font-light text-amber-50 pl-30 pt-4">
//             Experience unmatched performance, cutting-edge innovation, and
//             timeless design with BMW – where every drive is more than a journey,
//             it’s a statement
//           </p>
//           <motion.button
//             initial={{ opacity: 0, x: 100 }}
//             transition={{ duration: 1.5 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="cursor-pointer font-bold mt-5 uppercase px-4 py-1 text-white border-red-500 border-2 bg-black rounded-2xl hover:border-red-700 hover:text-black hover:bg-red-500"
//           >
//             Book A Ride Now
//           </motion.button>
//         </div>

//                                 // Right Side Image 
//         <motion.div
//           initial={{ opacity: 0, x: 300, y: -300 }}
//           transition={{ duration: 1.5 }}
//           whileInView={{ opacity: 1, x: 0, y: 0 }}
//           viewport={{ once: true }}
//           className="ml-10"
//         >
//           <img
//             src={images[currentIndex]}
//             alt="BMW Car"
//             className="h-200 w-screen object-contain transition-all duration-700 ease-in-out"
//           />
//         </motion.div>
//       </div>
//       // page 2
//       <div className="text-center mb-10">
//         <h1 className="uppercase text-2xl font-medium text-white ">
//           Our latest
//           <span className="text-5xl font-extrabold text-red-500">BMW</span>
//           series
//         </h1>
//       </div>
//       <div className="grid grid-cols-2 gap-4 px-20">
//         <motion.div
//         initial={{opacity: 0, x: -300}}
//         transition={{duration: 1}}
//         whileInView={{opacity: 1, x: 0}}
//         viewport={{once: true}}
        
//         className="bg-amber-300 p-4 rounded-lg shadow-lg">
//           <Details
//             title="BMW S Series"
//             btndet="Explore S Series"
//             img={"/images/car1.png"}
//             para="The BMW S Series combines luxury and performance, offering a driving experience that is both exhilarating and refined."
//           />
//         </motion.div>
//         <motion.div 
//         initial={{opacity: 0, x: 300}}
//         transition={{duration: 1}}
//         whileInView={{opacity: 1, x: 0}}
//         viewport={{once: true}}
//         className="bg-orange-400 p-4 rounded-lg shadow-lg">
//           <Details
//             title="BMW M Series"
//             btndet="Explore M Series"
//             img={"/images/car2.png"}
//             para="The BMW M Series is the pinnacle of performance, delivering track-inspired power and precision for the ultimate driving thrill."
//           />
//         </motion.div>
//         <motion.div
//         initial={{opacity: 0, x: -300}}
//         transition={{duration: 1}}
//         whileInView={{opacity: 1, x: 0}}
//         viewport={{once: true}}
//         className="bg-cyan-500 p-4 rounded-lg shadow-lg">
//           <Details
//             title="BMW Y Series"
//             btndet="Explore Y Series"
//             img={"/images/car3.png"}
//             para="The BMW Y Series redefines versatility, blending spaciousness with cutting-edge technology for a family-friendly yet sporty ride."
//           />
//         </motion.div>
//         <motion.div 
//         initial={{opacity: 0, x: 300}}
//         transition={{duration: 1}}
//         whileInView={{opacity: 1, x: 0}}
//         viewport={{once: true}}
//         className="bg-emerald-500 p-4 rounded-lg shadow-lg">
//           <Details
//             title="BMW X Series"
//             btndet="Explore X Series"
//             img={"/images/car4.png"}
//             para="The BMW X Series offers rugged elegance, combining off-road capability with luxury features for the adventurous spirit."
//           />
//         </motion.div>
//       </div>
//       //page 3
//       <section className="min-h-screen mt-10 ">
//         <HeroVideo />
//       </section>
//       // page 4
//       <section>
//         <Footer />
//       </section>
//     </>
//   );
// };

// export default Home;


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Details from "./Details";
import HeroVideo from "./HeroVideo";
import Footer from "./Footer";

const Home = () => {
  // Carousel images
  const images = [
    "/images/car1.png",
    "/images/car2.png",
    "/images/car3.png",
    "/images/car4.png",
    "/images/car5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3s interval for better UX
    return () => clearInterval(interval);
  }, []);

  // Details cards data
  const cards = [
    {
      title: "BMW S Series",
      btndet: "Explore S Series",
      img: "/images/car1.png",
      para: "The BMW S Series combines luxury and performance, offering a driving experience that is both exhilarating and refined.",
      bg: "bg-amber-300",
    },
    {
      title: "BMW M Series",
      btndet: "Explore M Series",
      img: "/images/car2.png",
      para: "The BMW M Series is the pinnacle of performance, delivering track-inspired power and precision for the ultimate driving thrill.",
      bg: "bg-orange-400",
    },
    {
      title: "BMW Y Series",
      btndet: "Explore Y Series",
      img: "/images/car3.png",
      para: "The BMW Y Series redefines versatility, blending spaciousness with cutting-edge technology for a family-friendly yet sporty ride.",
      bg: "bg-cyan-500",
    },
    {
      title: "BMW X Series",
      btndet: "Explore X Series",
      img: "/images/car4.png",
      para: "The BMW X Series offers rugged elegance, combining off-road capability with luxury features for the adventurous spirit.",
      bg: "bg-emerald-500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 mx-4 md:mx-10  overflow-hidden">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col gap-4 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="font-bold uppercase text-4xl md:text-5xl text-white"
          >
            The <span className="md:text-6xl font-extrabold text-red-500">Ultimate</span>{" "}
            Driving Machine
          </motion.h1>
          <p className="font-light text-amber-50 text-sm md:text-base">
            Experience unmatched performance, cutting-edge innovation, and timeless design with BMW – where every drive is more than a journey, it’s a statement
          </p>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="cursor-pointer font-bold md:mt-5 uppercase px-4 py-2 text-white border-red-500 border-2 bg-black rounded-2xl hover:border-red-700 hover:text-black hover:bg-red-500"
          >
            Book A Ride Now
          </motion.button>
        </div>

        {/* Right Carousel Image */}
        <motion.div
          initial={{ opacity: 0, x: 300, y: -100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={images[currentIndex]}
            alt="BMW Car"
            className="w-full h-64 md:h-[600px] object-contain transition-opacity duration-700 ease-in-out"
          />
        </motion.div>
      </section>

      {/* Latest Series Section */}
      <section className="text-center px-4 md:px-20 md:mt-10">
        <h1 className="uppercase text-2xl md:text-3xl font-medium text-white mb-3 md:mb-10">
          Our latest
          <span className="text-5xl md:text-6xl font-extrabold text-red-500">
            BMW
          </span>
          series
        </h1>
      </section>

      {/* Details Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 px-4 md:px-20 ">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`${card.bg} p-4 rounded-lg shadow-lg`}
          >
            <Details {...card} />
          </motion.div>
        ))}
      </section>

      {/* Hero Video Section */}
      <section className=" ">
        {<HeroVideo />}
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
