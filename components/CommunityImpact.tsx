import React from 'react';
import { Hammer, Coins, Heart } from 'lucide-react';

const CommunityImpact: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-alert-100">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-orange-700 font-bold tracking-widest uppercase text-sm mb-2 block">வாழ்வாதாரம்</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">களையிலிருந்து கலைநயம் (Wealth from Waste)</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
             ஆனைமலை புலிகள் காப்பகத்தில் உள்ள <span className="font-bold text-orange-800">பழங்குடியின மக்கள்</span>, காடுகளுக்கு அச்சுறுத்தலாக உள்ள லான்டானா செடியை அகற்றி, 
             அதை ஒரு பொருளாதார வாய்ப்பாக மாற்றியுள்ளனர். இது இயற்கையை காப்பதோடு, அவர்களின் வாழ்வாதாரத்தையும் உயர்த்துகிறது.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 mx-auto">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">பெண்கள் அதிகாரம்</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              300-க்கும் மேற்பட்ட பழங்குடியினப் பெண்கள், குறிப்பாக விதவைகள் and ஆதரவற்றவர்கள், லான்டானா கைவினைப் பொருட்கள் தயாரிப்பதன் மூலம் நிலையான மாத வருமானம் பெறுகின்றனர்.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 mx-auto">
              <Hammer size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">உயர்தரப் பொருட்கள்</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              லான்டானா குச்சிகள் மூங்கில் போன்ற வலிமை கொண்டவை. இவற்றைக் கொண்டு நாற்காலிகள், மேஜைகள், மற்றும் யானை சிலைகள் செய்யப்படுகின்றன. இவை பூச்சித் தாக்குதலைத் தாங்கும் திறன் கொண்டவை.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 mx-auto">
              <Coins size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">பொருளாதார வளர்ச்சி</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              இந்தத் திட்டம் பழங்குடியினரின் பொருளாதாரத்தை வெகுவாக உயர்த்தியுள்ளது. லான்டானா பொருட்கள் விற்பனை மூலம் இதுவரை ₹50 லட்சத்திற்கும் மேல் வருவாய் ஈட்டப்பட்டுள்ளது.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-orange-700 text-white font-bold rounded-full hover:bg-orange-800 transition-all duration-300 shadow-lg hover:shadow-orange-500/30">
             பழங்குடியினருக்கு ஆதரவளிக்க (Support Us)
          </button>
        </div>

      </div>
    </section>
  );
};

export default CommunityImpact;