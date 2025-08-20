

// const Details = ({title,btndet,img,para}) => {
//   return (
//     <div className="text-center flex flex-col gap-2">
//         <img src={img} alt="img" className='h-100 w-auto object-contain'/>
//         <h1 className=' font-bold text-2xl text-shadow-pink-800'>{title}</h1>
//         <p className=" text-fuchsia-900">{para}</p>
//         <button className='cursor-pointer px-4 py-1 border-2 text-white border-white bg-stone-800 rounded-2xl'>{btndet}</button>
//     </div>
//   )
// }

// export default Details

import { motion } from "framer-motion";

const Details = ({ title, btndet, img, para }) => {
  return (
    <motion.div
      className="text-center flex flex-col gap-4 p-4 md:p-6 bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={img}
        alt={title}
        className="h-48 md:h-56 w-auto mx-auto object-contain"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 drop-shadow-md">
        {title}
      </h1>
      <p className="text-gray-700 text-sm md:text-base">{para}</p>
      <button className="cursor-pointer px-6 py-2 md:px-8 md:py-3 border-2 text-white border-white bg-stone-800 rounded-2xl hover:bg-stone-900 transition-all duration-300">
        {btndet}
      </button>
    </motion.div>
  );
};

export default Details;
