// import React from "react";
// import { motion } from "framer-motion";
// import bmwModels from "../data/bmwModel";
// import Footer from "./Footer";

// const cardVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
//   hover: { scale: 1.05, y: -5, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Models = () => {
//   return (
//     <>
//       <section className="py-16 bg-black">
//         <div className="max-w-7xl mx-auto px-6">
//           {/* Heading */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Explore Our{" "}
//               <span className="text-6xl font-bold text-red-500">BMW Models</span>
//             </h2>
//             <p className="text-amber-100 max-w-2xl mx-auto">
//               Discover the iconic BMW lineup across Series, X, and M models. Each
//               vehicle combines cutting-edge technology, luxury, and unmatched
//               performance.
//             </p>
//           </div>

//           {/* Models Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {bmwModels.map((model) => (
//               <motion.div
//                 key={model.id}
//                 className="border-2 border-white shadow-lg rounded-2xl overflow-hidden cursor-pointer"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }} // triggers when 20% of card is visible
//                 whileHover="hover"
//               >
//                 {/* Image */}
//                 <motion.img
//                   src={model.image || "/placeholder.jpg"}
//                   alt={model.name}
//                   className="w-full h-56 object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.5 }}
//                 />

//                 {/* Content */}
//                 <div className="p-6 bg-black text-white">
//                   <h3 className="text-2xl font-light">{model.name}</h3>
//                   <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-2xl mt-2">
//                     {model.series}
//                   </span>
//                   <p className="mt-3">{model.description}</p>

//                   {/* Specs */}
//                   {model.specs && (
//                     <ul className="mt-4 text-sm space-y-1 text-gray-300">
//                       <li>
//                         <strong>Engine:</strong> {model.specs.engine}
//                       </li>
//                       <li>
//                         <strong>Horsepower:</strong> {model.specs.hp}
//                       </li>
//                       <li>
//                         <strong>0-100 km/h:</strong> {model.specs.acceleration}
//                       </li>
//                     </ul>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Models;

import React from "react";
import { motion } from "framer-motion";
import bmwModels from "../data/bmwModel";
import Footer from "./Footer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // stagger each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.05, y: -5, transition: { duration: 0.5, ease: "easeOut" } },
};

const Models = () => {
  return (
    <>
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our{" "}
              <span className="text-6xl md:text-7xl font-bold text-red-500">
                BMW Models
              </span>
            </h2>
            <p className="text-amber-100 max-w-2xl mx-auto text-sm md:text-base">
              Discover the iconic BMW lineup across Series, X, and M models. Each
              vehicle combines cutting-edge technology, luxury, and unmatched
              performance.
            </p>
          </div>

          {/* Models Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {bmwModels.map((model) => (
              <motion.div
                key={model.id}
                className="border-2 border-white shadow-lg rounded-2xl overflow-hidden cursor-pointer bg-black"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Image */}
                <motion.img
                  src={model.image || "/placeholder.jpg"}
                  alt={model.name}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Content */}
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-light">{model.name}</h3>
                  <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-2xl mt-2">
                    {model.series}
                  </span>
                  <p className="mt-3 text-sm md:text-base">{model.description}</p>

                  {/* Specs */}
                  {model.specs && (
                    <ul className="mt-4 text-sm space-y-1 text-gray-300">
                      <li>
                        <strong>Engine:</strong> {model.specs.engine}
                      </li>
                      <li>
                        <strong>Horsepower:</strong> {model.specs.hp}
                      </li>
                      <li>
                        <strong>0-100 km/h:</strong> {model.specs.acceleration}
                      </li>
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Models;
