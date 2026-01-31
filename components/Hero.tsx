import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-forest-900 via-forest-800 to-black">
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in-up">
        <span className="inline-block py-2 px-4 rounded-full bg-forest-700/50 text-green-100 border border-green-500/30 text-sm font-bold tracking-wider mb-6 uppercase backdrop-blur-sm">
          மேற்குத் தொடர்ச்சி மலையின் மகுடம்
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          ஆனைமலை <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
            குன்றுகள்
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-green-100 max-w-4xl mx-auto font-medium leading-relaxed mb-10">
          இயற்கையின் பேரற்புதம், யானைகளின் வாழ்விடம் மற்றும் பழங்குடியினரின் தொட்டில். 
          இன்று <span className="text-orange-300 font-bold">லான்டானா ஆக்கிரமிப்பிலிருந்து</span> இக்காடுகளை மீட்டெடுக்கும் பெரும் பணியில் நாம் உள்ளோம்.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-forest-900 hover:bg-gray-100 rounded-full font-bold transition-all duration-300 shadow-lg flex items-center gap-2 text-lg">
            வரலாற்றை அறிக (History)
          </button>
          <button onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white rounded-full font-bold transition-all duration-300 backdrop-blur-sm text-lg">
            மீட்புப் பணிகள் (Restoration)
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};

export default Hero;