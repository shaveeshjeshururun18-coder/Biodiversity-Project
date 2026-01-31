import React from 'react';
import { FileText, Gavel, CheckCircle } from 'lucide-react';

const PolicySection: React.FC = () => {
  return (
    <section id="policy" className="py-24 bg-water-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2 sticky top-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              நீதிமன்றம் மற்றும் அரசு <br />
              <span className="text-blue-300">வழிகாட்டுதல்கள்</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              சென்னை உயர் நீதிமன்றத்தின் மதுரை கிளை, காடுகளில் உள்ள அந்நிய களைச்செடிகளை அகற்ற கடுமையான உத்தரவுகளை பிறப்பித்துள்ளது. தமிழ்நாடு அரசு "சூழலியல் மறுசீரமைப்பு" (Ecological Restoration) திட்டங்களை முன்னெடுத்துள்ளது.
            </p>
            
            <div className="flex gap-4">
              <div className="p-5 bg-water-600/50 rounded-xl border border-blue-500/30 w-1/2 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-blue-200">
                  <Gavel size={20} />
                  <span className="font-bold text-sm uppercase">நீதிமன்ற ஆணை</span>
                </div>
                <p className="text-xl font-bold">50 ஹெக்டேர்</p>
                <p className="text-xs text-blue-200 mt-1">மாதாந்திர அகற்றுதல் இலக்கு</p>
              </div>
              <div className="p-5 bg-water-600/50 rounded-xl border border-blue-500/30 w-1/2 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 text-blue-200">
                   <CheckCircle size={20} />
                  <span className="font-bold text-sm uppercase">வெற்றி விகிதம்</span>
                </div>
                <p className="text-xl font-bold">18.56%</p>
                <p className="text-xs text-blue-200 mt-1">ஏற்கனவே மீட்கப்பட்ட பகுதி</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
             {/* Card 1 */}
             <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-default">
               <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-forest-900">
                 <FileText className="text-forest-700" size={24} />
                 ஒருங்கிணைந்த மேலாண்மை
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 இயந்திர முறை மற்றும் வேதியியல் முறைகளை ஒருங்கிணைத்து, லான்டானா மீண்டும் வளராமல் இருப்பதை உறுதி செய்கிறது.
               </p>
             </div>

             {/* Card 2 */}
             <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-default">
               <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-forest-900">
                 <FileText className="text-blue-700" size={24} />
                 பொது கண்காணிப்பு பலகை
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 பணிகளின் வெளிப்படைத்தன்மையை உறுதி செய்ய, சென்னை உயர் நீதிமன்றம் பொது "Dashboard" ஒன்றை உருவாக்க உத்தரவிட்டுள்ளது.
               </p>
             </div>

             {/* Card 3 */}
             <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-default">
               <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-forest-900">
                 <FileText className="text-orange-600" size={24} />
                 கார்ப்பரேட் பொறுப்புணர்வு (CSR)
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 அகற்றப்பட்ட லான்டானா கழிவுகளை TNPL மற்றும் SPB போன்ற தொழிற்சாலைகள் எரிபொருளாகப் பயன்படுத்துகின்றன.
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PolicySection;