import { useState } from 'react';
import { faqItems } from '../data/mockData';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 px-8 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-nunito font-bold text-display text-text-secondary text-center mb-12 leading-tight">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-8">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 text-left hover:text-primary transition-colors"
              >
                <span className="font-roboto text-h3 text-text-secondary pr-4">
                  {item.question}
                </span>
                <img 
                  src="/icons/chevron-down.svg" 
                  alt="" 
                  className={`w-3 h-2 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="font-roboto text-body text-text-primary opacity-70">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <p className="font-roboto text-tiny text-text-muted leading-relaxed text-center">
          *Results vary based on starting weight and program adherence. Inches lost from hips, waist, chest, thighs and arms in the first month. These users exercised daily and ate a reduced-calorie diet. Their fat loss is not typical. Results from RxPros may vary. Medication prescriptions are at the discretion of medical providers and may not be suitable for everyone. RxPros programs typically result in 1-2 lbs per week weight loss in 4 weeks, involving a healthy diet and exercise changes. Consult a healthcare professional before using RxPros or starting any weight loss program.
        </p>
      </div>
    </section>
  );
}

export default FAQSection;