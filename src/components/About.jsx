// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";
// import Footer from "./Footer";

// const About = () => {
//   return (
//     <>
//     <div className="w-full overflow-hidden">
//       {/* About Section */}
//       <section className="relative py-20 bg-black text-white">
//         <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="/images/car5.png"
//               alt="BMW Luxury"
//               className="rounded-2xl shadow-2xl"
//             />
//           </motion.div>

//           {/* Right Side - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="text-gray-800"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               About <span className="text-red-500">BMW</span>
//             </h2>
//             <p className="text-lg leading-relaxed mb-6 text-white">
//               BMW has always been more than just a car manufacturer. We blend
//               innovation, design, and performance to deliver sheer driving
//               pleasure. Every BMW is a masterpiece engineered with passion,
//               precision, and cutting-edge technology.
//             </p>
//             <p className="text-lg leading-relaxed text-white">
//               From our legacy of luxury sedans to our futuristic electric
//               vehicles, BMW continues to redefine the meaning of performance and
//               elegance on the road.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Tagline Section */}
//       <section className="relative w-full h-[70vh] flex items-center justify-center">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center mx-24 rounded-2xl shadow-lg"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1565376901308-37344a4b06ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGx1eHVyeSUyMGJtd3xlbnwwfHwwfHx8MA%3D%3D')",
//           }}
//         ></div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60 backdrop-blur-xs "></div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="relative max-w-3xl text-center px-6"
//         >
//           <Quote className="w-14 h-14 text-blue-400 mx-auto mb-6" />
//           <h2 className="text-4xl md:text-5xl font-bold italic text-white drop-shadow-lg">
//             “Sheer Driving Pleasure”
//           </h2>
//           <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
//             BMW is not just a car, it’s a statement of luxury and performance.  
//             Where precision engineering meets timeless design, every drive
//             becomes an unforgettable journey.
//           </p>
//         </motion.div>
//       </section>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default About;


import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        {/* About Section */}
        <section className="relative py-16 md:py-20 bg-black text-white">
          <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/images/car5.png"
                alt="BMW Luxury"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span className="text-red-500">BMW</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                BMW has always been more than just a car manufacturer. We blend
                innovation, design, and performance to deliver sheer driving
                pleasure. Every BMW is a masterpiece engineered with passion,
                precision, and cutting-edge technology.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                From our legacy of luxury sedans to our futuristic electric
                vehicles, BMW continues to redefine the meaning of performance
                and elegance on the road.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center px-4 md:px-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 rounded-2xl shadow-lg bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1565376901308-37344a4b06ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGx1eHVyeSUyMGJtd3xlbnwwfHwwfHx8MA%3D%3D')",
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative max-w-3xl text-center px-4 md:px-6"
          >
            <Quote className="w-12 h-12 md:w-14 md:h-14 text-blue-400 mx-auto mb-4 md:mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold italic text-white drop-shadow-lg">
              “Sheer Driving Pleasure”
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
              BMW is not just a car, it’s a statement of luxury and performance.  
              Where precision engineering meets timeless design, every drive
              becomes an unforgettable journey.
            </p>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
