import React from 'react';
import { User, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToDev = () => {
    document.getElementById('developer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-forest-900 text-white py-12 border-t border-forest-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">ஆனைமலை மீட்பு இயக்கம்</h3>
            <p className="text-forest-50/70 text-sm leading-relaxed max-w-xs">
              அறிவியல் பூர்வமான களை நீக்கம் மற்றும் சமூக மேம்பாட்டின் மூலம் மேற்குத் தொடர்ச்சி மலைகளின் சூழலியலை மீட்டெடுக்கும் ஒரு முயற்சி.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-green-400">தகவல்கள்</h4>
            <ul className="space-y-2 text-forest-50/80 text-sm">
              <li><button onClick={handlePrint} className="hover:text-white transition-colors flex items-center gap-2">
                <FileText size={14} /> முழு அறிக்கை (PDF)
              </button></li>
              <li><a href="#" className="hover:text-white transition-colors">TN PIPER கொள்கை</a></li>
              <li><a href="#" className="hover:text-white transition-colors">உயர் நீதிமன்ற உத்தரவுகள்</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ஆராய்ச்சி கட்டுரைகள்</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-green-400">தொடர்புக்கு</h4>
             <p className="text-forest-50/80 text-sm mb-2">ஆனைமலை புலிகள் காப்பக அலுவலகம்</p>
             <p className="text-forest-50/80 text-sm mb-2">பொள்ளாச்சி, தமிழ்நாடு</p>
             <a href="mailto:info@anamalairestore.org" className="text-green-400 text-sm hover:underline">info@anamalairestore.org</a>
          </div>
        </div>

        {/* Big Attractive Creator Button */}
        <div className="mb-12 no-print">
          <button 
            onClick={scrollToDev}
            className="w-full group relative overflow-hidden bg-gradient-to-r from-forest-800 to-forest-700 p-8 rounded-3xl border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-500">
                <User size={32} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">Created By</p>
                <h4 className="text-3xl font-bold">Shaveesh Jeshurun.S</h4>
              </div>
            </div>
            <div className="relative z-10 px-8 py-3 bg-white text-forest-900 rounded-xl font-bold group-hover:bg-green-400 transition-colors">
              About Developer
            </div>
          </button>
        </div>

        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-forest-50/50">
          <p>© 2024 ஆனைமலை மீட்பு இயக்கம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</p>
          <p className="mt-4 md:mt-0 italic">"காடுகளை காப்போம், மழையை பெறுவோம்."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;