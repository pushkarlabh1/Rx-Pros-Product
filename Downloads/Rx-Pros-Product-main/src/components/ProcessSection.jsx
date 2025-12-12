import { processSteps } from '../data/mockData';

function ProcessSection() {
  return (
    <section id="process" className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-dm text-3xl md:text-display text-text-secondary text-center mb-8 md:mb-12">
          How <span className="text-primary-light">GLP-1</span> works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-background-light rounded-card-lg p-6 md:p-8 flex flex-col items-center">
              <div className="mb-4 md:mb-6 relative">
                <img src={step.icon} alt={step.title} className="w-56 md:w-72 h-20 md:h-24 object-contain" />
                {step.badge && (
                  <div className="absolute right-0 top-0 bg-white rounded-lg px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-1.5 md:gap-2">
                    <img src="/icons/support.png" alt="Support" className="w-6 md:w-8 h-6 md:h-8" />
                    <span className="font-nunito font-bold text-base md:text-h3 text-primary-light">
                      {step.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-white px-3 md:px-4 py-1 rounded-full mb-2">
                  <span className="font-nunito font-semibold text-sm md:text-body text-primary-light">
                    Step {step.stepNumber}
                  </span>
                </div>
                <h3 className="font-dm text-xl md:text-h3 text-text-secondary mb-2">
                  {step.title.split(' ')[0]} <span className="text-primary-light">{step.title.split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="font-roboto text-sm md:text-body text-text-primary opacity-70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="bg-text-secondary text-white font-nunito font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#00D1D1] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;