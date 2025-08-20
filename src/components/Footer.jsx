// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300 py-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo & About */}
//         <div>
//           <h2 className="text-white text-2xl font-bold mb-4">BMW</h2>
//           <p className="text-sm leading-relaxed">
//             Sheer Driving Pleasure. Experience the perfect blend of luxury,
//             performance, and innovation with BMW.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-white text-lg font-semibold mb-4">
//             Quick Links
//           </h3>
//           <ul className="space-y-2">
//             <li>
//               <NavLink to="/about" className="hover:text-white transition">
//                 Models
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/services" className="hover:text-white transition">
//                 Services
//               </NavLink>
//             </li>
//             <li>
//               <a href="/about" className="hover:text-white transition">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <NavLink to="/contact" className="hover:text-white transition">
//                 Contact-Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-white text-lg font-semibold mb-4">
//             Contact
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li>📍 THE PANJAB</li>
//             <li>📞 +49 123 456 789</li>
//             <li>✉️ moosestack911@gmail.com</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-white text-lg font-semibold mb-4">
//             Follow Us
//           </h3>
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               className="hover:text-white transition text-xl"
//             >
//               🌐
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition text-xl"
//             >
//               📘
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition text-xl"
//             >
//               📸
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition text-xl"
//             >
//               🐦
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} Moosestack. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-4 md:px-6 lg:px-20 ">
      <div className="max-w-full mx-auto flex flex-col-1 md:flex-row gap-8 md:flex md:justify-around">
        
        {/* Quick Links */}
        <div flex className="">
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/models" className="hover:text-white transition-colors duration-300">
                Models
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-white transition-colors duration-300">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition-colors duration-300">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition-colors duration-300">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white  font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 THE PANJAB</li>
            <li>📞 +49 123 456 789</li>
            <li className="text-xs">✉️ moosestack911@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col md:flex-row space-x-4 text-2xl md:text-xl">
            <a href="#" className="hover:text-white transition transform hover:scale-125 duration-300">
              🌐
            </a>
            <a href="#" className="hover:text-white transition transform hover:scale-125 duration-300">
              📘
            </a>
            <a href="#" className="hover:text-white transition transform hover:scale-125 duration-300">
              📸
            </a>
            <a href="#" className="hover:text-white transition transform hover:scale-125 duration-300">
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Moosestack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
