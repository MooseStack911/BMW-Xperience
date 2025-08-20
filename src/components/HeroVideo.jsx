// import { useRef, useState } from "react";

// const HeroVideo = () => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center relative">
//       <video
//         ref={videoRef}
//         className="w-full h-full object-cover"
//         src="/videos/videoplayback.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       <button
//         onClick={toggleMute}
//         className="absolute bottom-15 right-5 bg-black/60 text-white px-4 py-2 rounded-lg"
//       >
//         {isMuted ? "Unmute" : "Mute"}
//       </button>
//     </section>
//   );
// };

// export default HeroVideo;


import { useRef, useState } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/videos/videoplayback.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Optional Hero Text / CTA */}
      <div className="absolute z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Experience BMW
        </h1>
        <p className="text-gray-200 mt-4 text-sm md:text-lg">
          Sheer Driving Pleasure. Innovation meets performance.
        </p>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-black/60 text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-300 shadow-lg"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </section>
  );
};

export default HeroVideo;
