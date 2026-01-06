import { TrendingUp } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <div className="pt-16">
      <section className="relative min-h-[500px] overflow-hidden bg-blue-900">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Case Studies"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">Case Studies</h1>
          <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Real results from real clients across diverse industries</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-500 animate-fade-in-scale" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative h-64">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-blue-600">{study.category}</div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-gray-500 mb-2">{study.client}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div className="border-t pt-6">
                    <div className="flex items-center gap-2 mb-3"><TrendingUp className="w-5 h-5 text-blue-600" /><span className="font-semibold">Key Results:</span></div>
                    <div className="grid grid-cols-2 gap-3">{study.results.slice(0, 4).map((result, i) => (<div key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div><span className="text-sm text-gray-700">{result}</span></div>))}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
