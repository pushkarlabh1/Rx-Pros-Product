import { useState } from 'react';
import { productInfo } from '../data/mockData';

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productInfo.images.thumbnails.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => 
      prev === 0 ? productInfo.images.thumbnails.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-white py-6 md:py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Product Carousel */}
          <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl shadow-product p-6 md:p-10 flex flex-col items-center h-[500px] md:h-[700px]">
            <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              <span className="font-manrope font-medium text-xs md:text-sm">FSA & HSA eligible</span>
            </div>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <img src="/icons/arrow-left.svg" alt="Previous" className="w-3 md:w-4 h-3 md:h-4" />
            </button>
            
            <div className="flex-1 flex items-center justify-center pt-4 md:pt-6">
              <img 
                src={productInfo.images.thumbnails[currentImage]} 
                alt="Product" 
                className="w-full max-w-[280px] md:max-w-[360px] h-auto"
              />
            </div>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <img src="/icons/arrow-right.svg" alt="Next" className="w-3 md:w-4 h-3 md:h-4" />
            </button>
            
            <div className="flex gap-2 md:gap-3 mt-3 md:mt-4">
              {productInfo.images.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-[60px] md:w-[88px] h-[60px] md:h-[88px] rounded-xl md:rounded-2xl bg-white p-1.5 md:p-2 border-2 md:border-4 transition-all ${
                    currentImage === index ? 'border-white shadow-lg' : 'border-white/50'
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Card */}
          <div className="bg-background-gray rounded-3xl p-6 md:p-8 flex flex-col min-h-[500px] md:h-[700px]">
            <div className="mb-3 md:mb-4">
              <h1 className="font-nunito font-bold text-2xl md:text-h1 text-text-primary mb-1">
                {productInfo.name}
              </h1>
              <p className="font-nunito font-semibold text-lg md:text-h3 text-text-primary mb-2 md:mb-3">
                {productInfo.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-20 mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1.5 md:py-2 bg-white rounded-full border border-gray-200 shadow-button">
                    <span className="font-roboto font-medium text-sm md:text-body text-text-secondary">
                      {productInfo.status}
                    </span>
                    <img src="/icons/status-dot.svg" alt="" className="w-2 h-2" />
                  </div>
                  <span className="font-roboto font-medium text-sm md:text-body text-text-primary">
                    {productInfo.statusDate}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="font-roboto text-base md:text-h3 text-text-primary">
                    {productInfo.reviewCount}+ reviews
                  </span>
                  <img src="/icons/stars.svg" alt="Rating" className="h-4 md:h-5" />
                </div>
              </div>
            </div>

            <div className="mb-3 md:mb-4">
              <p className="font-roboto font-medium text-sm md:text-body text-text-primary leading-relaxed mb-2">
                {productInfo.description}
              </p>
              <a href={productInfo.learnMoreUrl} className="font-manrope font-medium text-sm md:text-body text-text-primary underline hover:text-primary transition-colors">
                Learn more
              </a>
            </div>

            <div className="mb-3 md:mb-4">
              <p className="font-roboto font-medium text-sm md:text-body text-text-muted mb-2 md:mb-3">
                What's included:
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {productInfo.includes.map((item, index) => (
                  <div key={index} className="bg-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-2 md:gap-3">
                    <img src={item.icon} alt="" className="w-4 md:w-5 h-4 md:h-5 brightness-0 invert flex-shrink-0" />
                    <span className="font-roboto font-medium text-xs md:text-body text-white leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-12 mb-3 md:mb-4">
              <span className="font-nunito text-lg md:text-h3 text-primary-light">From</span>
              <span className="font-nunito font-bold text-3xl md:text-[42px] text-primary-light">
                ${productInfo.price}
              </span>
            </div>

            <button className="w-full bg-text-secondary text-white font-nunito font-bold text-base md:text-lg py-3 md:py-3.5 rounded-lg hover:bg-[#00D1D1] transition-colors mb-3 md:mb-4">
              Get Started
            </button>

            <div className="flex items-center justify-center gap-2 mt-5 md:gap-3">
              {Array.isArray(productInfo.badges) ? (
                productInfo.badges.map((badge, index) => (
                  <img 
                    key={index} 
                    src={badge} 
                    alt={`Badge ${index + 1}`} 
                    className={`h-12 md:h-16 ${index === 0 ? '-mr-2 md:-mr-3' : ''}`}
                  />
                ))
              ) : (
                <img src={productInfo.badges} alt="Badges" className="h-12 md:h-16" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;