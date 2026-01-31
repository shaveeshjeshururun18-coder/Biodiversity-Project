import React from 'react';
import { Mountain, Users, BookOpen, Leaf } from 'lucide-react';

const AnaimalaiInfo: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-forest-900 mb-6">ஆனைமலை: ஒரு வரலாற்றுப் பார்வை</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            "ஆனைமலை" என்ற பெயர் "யானை" (Elephant) மற்றும் "மலை" (Mountain) என்ற சொற்களிலிருந்து வந்தது. 
            இது மேற்குத் தொடர்ச்சி மலையின் மிக முக்கியமான பல்லுயிர் மையமாகும்.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* History Column */}
          <div className="space-y-8">
            <div className="bg-forest-50 p-8 rounded-2xl border-l-4 border-forest-800">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-forest-800" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">வரலாறு (History)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                1800-களின் நடுப்பகுதியில் பிரிட்டிஷ் ஆட்சியாளர்கள் இங்கு தேக்கு மரங்களை வளர்க்கத் தொடங்கினர். 
                பின்னர் காபி மற்றும் தேயிலை தோட்டங்கள் வால்பாறை பகுதிகளில் அமைக்கப்பட்டன. 1850-ல் 
                டாக்டர். கிளக்ஹார்ன் (Dr. Cleghorn) ஆனைமலை காடுகளின் முக்கியத்துவத்தை உணர்ந்து பாதுகாக்கத் தொடங்கினார்.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>1976:</strong> இந்திராகாந்தி வனவிலங்கு சரணாலயமாக அறிவிக்கப்பட்டது.</li>
                <li><strong>2007:</strong> ஆனைமலை புலிகள் காப்பகமாக (ATR) தரம் உயர்த்தப்பட்டது.</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-600">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-orange-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">பழங்குடியினர் (Tribes)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                ஆனைமலை காடுகள் ஆறு பழங்குடியின சமூகங்களின் பூர்வீக நிலமாகும். இவர்கள் காடுகளின் காவலர்களாகக் கருதப்படுகிறார்கள்.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-orange-800">காடர் (Kadar)</div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-orange-800">மலசர் (Malasar)</div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-orange-800">முதுவர் (Muduvar)</div>
                <div className="bg-white p-3 rounded-lg shadow-sm text-center font-bold text-orange-800">புலையர் (Pulayar)</div>
              </div>
            </div>
          </div>

          {/* Geography & Bio Column */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">புவியியல் (Geography)</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                கேரளா மற்றும் தமிழ்நாட்டின் எல்லையில் அமைந்துள்ள இது 958 சதுர கிலோமீட்டர் பரப்பளவு கொண்டது. 
                தென்னிந்தியாவின் மிக உயரமான சிகரமான 'ஆனமுடி' (Anamudi - 2695m) இப்பகுதியின் அருகில் அமைந்துள்ளது.
              </p>
              <div className="flex justify-between mt-4 text-sm font-semibold text-blue-800">
                <span>உயரம்: 340m - 2400m</span>
                <span>மழைப்பொழிவு: 500mm - 5000mm</span>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-green-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">தாவரங்கள் மற்றும் விலங்குகள்</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                இங்கு 2000-க்கும் மேற்பட்ட தாவர வகைகள் உள்ளன. இதில் 400-க்கும் மேற்பட்டவை மருத்துவ குணம் வாய்ந்தவை.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700"><strong>விலங்குகள்:</strong> யானை, புலி, சிறுத்தை, வரையாடு (Nilgiri Tahr), சிங்கவால் குரங்கு.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700"><strong>பறவைகள்:</strong> பெரிய இருவாச்சி (Great Hornbill) இப்பகுதியின் சிறப்பம்சம்.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnaimalaiInfo;