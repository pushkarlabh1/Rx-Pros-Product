import { useState, useRef, useEffect } from 'react';

function TestimonialCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const goToSlide = (index, dir) => {
    if (isTransitioning) return;
    setDirection(dir);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 50);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex, 'prev');
  };

  const goToNext = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex, 'next');
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const currentSlide = slides[currentIndex];

  const getSlideClass = (position) => {
    const baseClass = "absolute top-1/2 -translate-y-1/2 transition-all duration-1200 ease-in-out";
    
    if (isTransitioning) {
      if (direction === 'next') {
        // Sliding to next - images move left
        switch(position) {
          case 'leftFar': return `${baseClass} -left-[45%] z-10 scale-[0.65] md:scale-[0.70] opacity-0`;
          case 'leftNear': return `${baseClass} left-[8%] md:left-[10%] lg:left-[12%] z-30 scale-[0.75] md:scale-[0.80] opacity-70`;
          case 'center': return `${baseClass} left-[24%] md:left-[26%] lg:left-[28%] z-40 scale-[0.85] md:scale-[0.90] opacity-90`;
          case 'rightNear': return `${baseClass} left-1/2 -translate-x-1/2 z-50 scale-100 opacity-100`;
          case 'rightFar': return `${baseClass} right-[24%] md:right-[26%] lg:right-[28%] z-40 scale-[0.85] md:scale-[0.90] opacity-90`;
        }
      } else {
        // Sliding to previous - images move right
        switch(position) {
          case 'leftFar': return `${baseClass} left-[24%] md:left-[26%] lg:left-[28%] z-40 scale-[0.85] md:scale-[0.90] opacity-90`;
          case 'leftNear': return `${baseClass} left-1/2 -translate-x-1/2 z-50 scale-100 opacity-100`;
          case 'center': return `${baseClass} right-[24%] md:right-[26%] lg:right-[28%] z-40 scale-[0.85] md:scale-[0.90] opacity-90`;
          case 'rightNear': return `${baseClass} right-[8%] md:right-[10%] lg:right-[12%] z-30 scale-[0.75] md:scale-[0.80] opacity-70`;
          case 'rightFar': return `${baseClass} -right-[45%] z-10 scale-[0.65] md:scale-[0.70] opacity-0`;
        }
      }
    }
    
    // Normal positions
    switch(position) {
      case 'leftFar': return `${baseClass} left-[0%] md:left-[2%] lg:left-[4%] z-10 scale-[0.65] md:scale-[0.70] opacity-40`;
      case 'leftNear': return `${baseClass} left-[12%] md:left-[14%] lg:left-[16%] z-30 scale-[0.80] md:scale-[0.85] opacity-75`;
      case 'center': return `${baseClass} left-1/2 -translate-x-1/2 z-50 scale-100 opacity-100`;
      case 'rightNear': return `${baseClass} right-[12%] md:right-[14%] lg:right-[16%] z-30 scale-[0.80] md:scale-[0.85] opacity-75`;
      case 'rightFar': return `${baseClass} right-[0%] md:right-[2%] lg:right-[4%] z-10 scale-[0.65] md:scale-[0.70] opacity-40`;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative h-[280px] md:h-[320px] lg:h-[360px] mb-8 md:mb-12 cursor-grab active:cursor-grabbing overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left Far Image */}
        <div className={getSlideClass('leftFar')}>
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.leftFar}
              alt="Background slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Near Image */}
        <div className={getSlideClass('leftNear')}>
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.leftNear}
              alt="Side slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className={getSlideClass('center')}>
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
        <div className={getSlideClass('rightNear')}>
          <div className="relative w-[240px] md:w-[380px] lg:w-[480px] h-[240px] md:h-[280px] lg:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentSlide.rightNear}
              alt="Side slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Far Image */}
        <div className={getSlideClass('rightFar')}>
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