import { features } from '../data/mockData';

function FeaturesSection() {
  return (
    <section id="how-it-works" className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-dm text-3xl md:text-display text-text-secondary text-center mb-8 md:mb-12">
          How <span className="text-primary-light">GLP-1 Injections</span> Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-background-light rounded-card-xl shadow-card p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="font-nunito font-bold text-xl md:text-h2 text-text-secondary mb-6 md:mb-8">
                {feature.title}
              </h3>
              <div className="mb-6 md:mb-8">
                <img src={feature.icon} alt={feature.title} className="w-40 md:w-56 h-40 md:h-56" />
              </div>
              <p className="font-roboto font-medium text-base md:text-h3 text-text-primary opacity-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="bg-text-secondary text-white font-nunito font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#00D1D1] transition-colors">
            Find out if you are eligible
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;