import React from 'react';
import { Scissors, Sprout, ShieldCheck, CloudRain } from 'lucide-react';

const SolutionWorkflow: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-forest-700 font-bold tracking-widest uppercase text-sm">தொழில்நுட்ப தீர்வு</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">சரியான அகற்றும் முறை: வேர் மண்டல முறை (CRZ)</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            தவறான முறையில் வெட்டினால் லான்டானா இன்னும் வேகமாக வளரும். எனவே அறிவியல் பூர்வமான "Cut Root Stock" முறை அவசியம்.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="p-8 border border-gray-200 rounded-2xl h-full bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scissors size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">1. வெட்டுதல்</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                தரைமட்டத்திற்கு 2-3 அங்குலம் கீழே செடியை வெட்ட வேண்டும். இது அதன் வளர்ச்சி மையத்தை அளிக்கிறது.
              </p>
            </div>
            {/* Arrow for Desktop */}
            <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-300 z-20">➔</div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
             <div className="p-8 border border-gray-200 rounded-2xl h-full bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">2. வேரை பிளத்தல்</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                வெட்டப்பட்ட வேர் பகுதியை கோடரி கொண்டு பிளக்க வேண்டும், இதனால் அது மீண்டும் துளிர்க்காது.
              </p>
            </div>
             <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-300 z-20">➔</div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
             <div className="p-8 border border-gray-200 rounded-2xl h-full bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <CloudRain size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3. உலர்த்துதல்</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                வேர் பகுதி மழைநீரை உறிஞ்சாமல் உலர்ந்து சாகும்படி செய்ய வேண்டும்.
              </p>
            </div>
             <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-300 z-20">➔</div>
          </div>

          {/* Step 4 */}
          <div className="relative group">
             <div className="p-8 border border-gray-200 rounded-2xl h-full bg-white hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sprout size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">4. மரம் நடுதல்</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                லான்டானா அகற்றப்பட்ட இடங்களில் உடனடியாக பூர்வீக மரக்கன்றுகளை (மூங்கில், நாவல்) நடுதல்.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionWorkflow;