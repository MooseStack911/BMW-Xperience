// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { motion, AnimatePresence } from "framer-motion";
// import Footer from "./Footer";

// const Contact = () => {
//   const form = useRef();
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   // simple regex email validation
//   const validate = (values) => {
//     let tempErrors = {};
//     if (!values.from_name) tempErrors.from_name = "Name is required";
//     if (!values.from_email) {
//       tempErrors.from_email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.from_email)) {
//       tempErrors.from_email = "Enter a valid email address";
//     }
//     if (!values.message) tempErrors.message = "Message cannot be empty";
//     return tempErrors;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const formData = {
//       from_name: form.current.from_name.value,
//       from_email: form.current.from_email.value,
//       message: form.current.message.value,
//     };

//     const validationErrors = validate(formData);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       emailjs
//         .sendForm(
//           "service_1vn12qa", 
//           "template_h9zr0hh", 
//           form.current,
//           "tl48X0Zi7H_wAZEDs" 
//         )
//         .then(
//           () => {
//             setStatus("success");
//             setSubmitted(true); 
//           },
//           () => {
//             setStatus("error");
//             setSubmitted(true); 
//           }
//         );
//     }
//   };

//   return (
//     <>
//     <section className="min-h-screen  flex items-center justify-center px-4">
//       <div className="w-full max-w-2xl bg-gray-800 rounded-2xl p-10">
//         <h2 className="text-4xl font-bold text-center text-white mb-6">
//           Get in <span className="text-blue-500">Touch</span>
//         </h2>
//         <p className="text-center text-gray-300 mb-10">
//           Have questions or feedback? Fill the form below and we'll get back to
//           you shortly.
//         </p>
//            {/*   AnimatePresence for swapping message & form */}
//         <AnimatePresence mode="wait">
//           {!submitted ? (
//             <motion.form
//               key="form"
//               ref={form}
//               onSubmit={sendEmail}
//               className="space-y-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//             >
//                              {/* Name */}
//               <div>
//                 <input
//                   type="text"
//                   name="from_name"
//                   placeholder="Enter Your Name"
//                   className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 outline-none"
//                 />
//                 {errors.from_name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
//                 )}
//               </div>

//                            {/*  Email */}
//               <div>
//                 <input
//                   type="email"
//                   name="from_email"
//                   placeholder="Your Email"
//                   className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 outline-none"
//                 />
//                 {errors.from_email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.from_email}</p>
//                 )}
//               </div>

//                              {/* Message box */}
//               <div>
//                 <textarea
//                   name="message"
//                   rows="5"
//                   placeholder="Your Message..."
//                   className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 outline-none resize-none"
//                 />
//                 {errors.message && (
//                   <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//                 )}
//               </div>

//                        {/* Submit button */}
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Send Message
//               </button>
//             </motion.form>
//           ) : (
//             <motion.div
//               key="message"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="text-center"
//             >
//               {status === "success" ? (
//                 <p className="text-green-400 text-xl font-medium">
//                   ✅ Thank you! Your message has been sent successfully.
//                 </p>
//               ) : (
//                 <p className="text-red-400 text-xl font-medium">
//                   ❌ Oops! Something went wrong. Please try again later.
//                 </p>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//     <Footer />
//     </>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Simple regex email validation
  const validate = (values) => {
    let tempErrors = {};
    if (!values.from_name) tempErrors.from_name = "Name is required";
    if (!values.from_email) {
      tempErrors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.from_email)) {
      tempErrors.from_email = "Enter a valid email address";
    }
    if (!values.message) tempErrors.message = "Message cannot be empty";
    return tempErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
    };

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_1vn12qa", 
          "template_h9zr0hh", 
          form.current,
          "tl48X0Zi7H_wAZEDs"
        )
        .then(
          () => {
            setStatus("success");
            setSubmitted(true); 
          },
          () => {
            setStatus("error");
            setSubmitted(true); 
          }
        );
    }
  };

  return (
    <>
      <section className="md:min-h-screen   md:flex md:items-center md:justify-center px-4 md:px-6 lg:px-20 bg-black">
        <div className="w-full max-w-2xl bg-gray-900 rounded-2xl p-8 md:p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 md:mb-6">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-center text-gray-300 mb-6 md:mb-10 text-sm md:text-base">
            Have questions or feedback? Fill the form below and we'll get back to
            you shortly.
          </p>

          {/* AnimatePresence for swapping form and success/error message */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 md:space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 md:py-4 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 outline-none"
                  />
                  {errors.from_name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.from_name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 md:py-4 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 outline-none"
                  />
                  {errors.from_email && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.from_email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 md:py-4 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105"
                >
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4 md:px-0"
              >
                {status === "success" ? (
                  <p className="text-green-400 text-lg md:text-xl font-medium">
                    ✅ Thank you! Your message has been sent successfully.
                  </p>
                ) : (
                  <p className="text-red-400 text-lg md:text-xl font-medium">
                    ❌ Oops! Something went wrong. Please try again later.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
