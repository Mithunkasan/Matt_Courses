import Mernstackcontent from "./Merncart";
export default function MernStack() {
 return (
    <>
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/80 to-gray-950 flex items-center justify-center px-4 py-8 relative overflow-hidden">

  {/* Decorative Top-Layer Images (Left and Right) */}
  <img
    src="/bg-img.png"
    alt="Right Decoration"
    className="absolute right-1 top-3/4 transform -translate-y-1/2 w-100 z-50"
  />

  {/* Main Content */}
  <div className="max-w-6xl mx-auto text-center relative z-10">
    {/* Heading */}
    <h1 className="text-white font-bold leading-tight mb-8 animate-fade-in">
      <span className="block text-4xl sm:text-9xl md:text-6xl lg:text-7xl xl:text-6xl font-[1000] tracking-tight leading-tight">
       MERN STACK
      </span>
    </h1>

    {/* Description */}
    <div className="max-w-4xl mx-auto mb-12 animate-slide-up">
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium px-4">
        MATT ENGINEERING SOLUTIONS provides best MERN STACK Training with 100% Job Placement assistance. Get
        trained from industry experts & start your IT career.
      </p>
    </div>

    {/* Course details */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 animate-fade-in-up">
      <div className="flex items-center text-white text-lg sm:text-xl md:text-2xl font-semibold">
        <span>7 Months</span>
        <span className="ml-4 text-2xl sm:text-3xl">🏆</span>
        <span className="ml-2">100% Placement </span>
        <span className="ml-4 text-2xl sm:text-3xl">🏆</span>
      </div>
    </div>

    {/* CTA Button */}
    <div className="animate-bounce-slow">
      <button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-grey-800 hover:to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-xl md:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-600 hover:border-blue-400 relative overflow-hidden group">
        <span className="relative z-10 flex items-center justify-center">
          <span className="mr-3 text-xl sm:text-2xl">⭐</span>
          <span className="text-yellow-400 font-extrabold">₹1000</span>
          <span className="ml-2">Admission Fee just</span>
          <span className="ml-3 text-xl sm:text-2xl">⭐</span>
        </span>
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
      </button>
    </div>
  </div>
</div>


     {/* <Structure /> */}
   <Mernstackcontent/>
     </>
    
  );
}
