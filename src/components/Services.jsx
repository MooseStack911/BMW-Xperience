
// import { motion } from "framer-motion";
// import { servicesData } from "../data/servicesData";
// import Footer from "./Footer";

// const Services = () => {
//   return (
//     <>
//     <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-blue-400 tracking-wide">
//             Our Premium Services
//           </h2>
//           <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
//             Experience excellence with BMW – from world-class engineering to top-tier customer care.
//           </p>
//         </motion.div>

//         {/* Service Cards */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg p-8 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
//             >
//               <service.icon className="w-14 h-14 text-blue-400 mb-6 group-hover:text-blue-300 transition" />
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
//                 {service.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//     <Footer />
//     </>
//   );
// };

// export default Services;


import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 tracking-wide">
              Our Premium Services
            </h2>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              Experience excellence with BMW – from world-class engineering to top-tier customer care.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg p-8 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <service.icon className="w-14 h-14 text-blue-400 mb-6 group-hover:text-blue-300 transition-colors duration-300" />
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
