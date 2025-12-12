import { useState } from 'react';

function TestimonialCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative h-[280px] md:h-[320px] lg:h-[360px] mb-8 md:mb-12">
        {/* Left Far Image */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[8%] md:left-[10%] lg:left-[12%] z-30 scale-[0.75] md:scale-[0.80] opacity-50 transition-all duration-500 ease-in-out">
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.leftFar}
              alt="Background slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Near Image */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[22%] md:left-[25%] lg:left-[28%] z-40 scale-[0.85] md:scale-90 opacity-80 transition-all duration-500 ease-in-out">
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.leftNear}
              alt="Side slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 scale-100 opacity-100 transition-all duration-500 ease-in-out">
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.center}
              alt={`Testimonial ${currentSlide.id}`}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            {currentSlide.hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/80 hover:bg-white/95 rounded-full flex items-center justify-center transition-all shadow-xl backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[10px] md:border-t-[12px] lg:border-t-[14px] border-t-transparent border-l-[16px] md:border-l-[20px] lg:border-l-[24px] border-l-gray-600 border-b-[10px] md:border-b-[12px] lg:border-b-[14px] border-b-transparent ml-1"></div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Near Image */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[22%] md:right-[25%] lg:right-[28%] z-40 scale-[0.85] md:scale-90 opacity-80 transition-all duration-500 ease-in-out">
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.rightNear}
              alt="Side slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Far Image */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[8%] md:right-[10%] lg:right-[12%] z-30 scale-[0.75] md:scale-[0.80] opacity-50 transition-all duration-500 ease-in-out">
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.rightFar}
              alt="Background slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="absolute left-2 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 md:w-11 md:h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-xl disabled:opacity-50 backdrop-blur-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M15 18L9 12L15 6" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-2 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 md:w-11 md:h-11 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-xl disabled:opacity-50 backdrop-blur-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M9 18L15 12L9 6" stroke="#666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`transition-all duration-300 rounded-full disabled:opacity-50 ${
              currentIndex === index
                ? 'w-3 h-3 md:w-4 md:h-4 bg-primary-light'
                : 'w-2 h-2 md:w-3 md:h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;