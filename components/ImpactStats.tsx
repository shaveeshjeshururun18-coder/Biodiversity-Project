import React from 'react';
import { AlertTriangle, Trees, Map, Flame } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, 
  PieChart, Pie, Legend, LineChart, Line, Area, AreaChart 
} from 'recharts';

// Data for Charts
const invasionData = [
  { name: 'லான்டானா (Lantana)', value: 45, fill: '#D84315' },
  { name: 'பார்த்தீனியம்', value: 15, fill: '#F57C00' },
  { name: 'பூர்வீக காடு (Native)', value: 30, fill: '#2E7D32' },
  { name: 'மற்றவை', value: 10, fill: '#90A4AE' },
];

const biodiversityData = [
  { name: 'புல் வளம்', invaded: 10, restored: 85 },
  { name: 'ஈரப்பதம்', invaded: 20, restored: 80 },
  { name: 'மரம் வளர்ச்சி', invaded: 15, restored: 75 },
  { name: 'பூச்சிகள்', invaded: 30, restored: 90 },
];

const projectionData = [
  { year: '2021', area: 50 },
  { year: '2022', area: 120 },
  { year: '2023', area: 300 },
  { year: '2024', area: 550 },
  { year: '2025', area: 900 },
];

const conflictData = [
  { name: '2020 (மோதல்கள்)', value: 150, fill: '#C62828' },
  { name: '2025 (இலக்கு)', value: 40, fill: '#2E7D32' },
];

const ImpactStats: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-forest-50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-forest-900 mb-4">ஆக்கிரமிப்பின் அபாயங்கள்</h2>
          <div className="h-1 w-24 bg-alert-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            லான்டானா காடுகள் "அமைதியான கொலையாளி" (Silent Killer) என்று அழைக்கப்படுகிறது. 
            இது பூர்வீக தாவரங்களை வளர விடாமல் தடுக்கிறது மற்றும் வனவிலங்குகளுக்கு உணவு தட்டுப்பாட்டை ஏற்படுத்துகிறது.
          </p>
        </div>

        {/* Key Risks Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-alert-500 hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-default">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-100 text-alert-500 rounded-full"><Flame size={24}/></div>
              <h3 className="font-bold text-xl text-gray-800">காட்டுத்தீ ஆபத்து</h3>
            </div>
            <p className="text-gray-600">லான்டானா காய்ந்தால் எளிதில் தீப்பற்றக்கூடியது, இது காட்டுத்தீ பரவ முக்கிய காரணமாகிறது.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-500 hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-default">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-full"><AlertTriangle size={24}/></div>
              <h3 className="font-bold text-xl text-gray-800">உணவு பற்றாக்குறை</h3>
            </div>
            <p className="text-gray-600">யானை மற்றும் மான்களுக்கு இது உணவாகாது. இதனால் அவை ஊருக்குள் நுழைகின்றன.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-yellow-500 hover:scale-[1.03] hover:shadow-md transition-all duration-300 cursor-default">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-100 text-yellow-700 rounded-full"><Map size={24}/></div>
              <h3 className="font-bold text-xl text-gray-800">மண் அரிப்பு</h3>
            </div>
            <p className="text-gray-600">இதன் வேர்கள் மண்ணை இருக்கும் அளவுக்கு வலுவற்றவை, இதனால் நிலச்சரிவு அபாயம் அதிகரிக்கிறது.</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Chart 1: Invasion Extent */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-xl font-bold text-forest-900 mb-2">பாதிக்கப்பட்ட காட்டுப் பகுதிகள் (%)</h3>
            <p className="text-sm text-gray-500 mb-6">லான்டானா vs பூர்வீக தாவரங்கள்</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={invasionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {invasionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle"/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Biodiversity Comparison */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-xl font-bold text-forest-900 mb-2">பல்லுயிர் ஒப்பீடு (Biodiversity)</h3>
            <p className="text-sm text-gray-500 mb-6">ஆக்கிரமிக்கப்பட்ட காடு vs மீட்கப்பட்ட காடு</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={biodiversityData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip contentStyle={{ borderRadius: '12px' }} />
                  <Legend />
                  <Bar dataKey="invaded" name="ஆக்கிரமிப்பு (Invaded)" fill="#D84315" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="restored" name="மீட்கப்பட்ட (Restored)" fill="#2E7D32" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 3: Recovery Projections */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-xl font-bold text-forest-900 mb-2">மீட்பு இலக்குகள் (Recovery Targets)</h3>
            <p className="text-sm text-gray-500 mb-6">மீட்கப்பட்ட நிலம் (ஏக்கரில்)</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={projectionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1565C0" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1565C0" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip contentStyle={{ borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="area" stroke="#1565C0" fillOpacity={1} fill="url(#colorArea)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 4: Conflict Reduction */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-xl font-bold text-forest-900 mb-2">மனித-விலங்கு மோதல்</h3>
            <p className="text-sm text-gray-500 mb-6">சம்பவங்களின் எண்ணிக்கை குறைப்பு</p>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={conflictData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12, fontWeight: 600 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px' }} />
                  <Bar dataKey="value" barSize={40} radius={[0, 10, 10, 0]}>
                    {conflictData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactStats;