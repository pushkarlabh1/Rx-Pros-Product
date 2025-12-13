import { useState, useRef } from 'react';

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
          case 'leftFar': return `${baseClass} -left-[45%] z-10 scale-[0.60] opacity-0`;
          case 'leftNear': return `${baseClass} left-[5%] z-20 scale-[0.70] opacity-40`;
          case 'center': return `${baseClass} left-[20%] z-30 scale-[0.85] opacity-70`;
          case 'rightNear': return `${baseClass} left-1/2 -translate-x-1/2 z-40 scale-100 opacity-100`;
          case 'rightFar': return `${baseClass} right-[20%] z-30 scale-[0.85] opacity-70`;
        }
      } else {
        // Sliding to previous - images move right
        switch(position) {
          case 'leftFar': return `${baseClass} left-[20%] z-30 scale-[0.85] opacity-70`;
          case 'leftNear': return `${baseClass} left-1/2 -translate-x-1/2 z-40 scale-100 opacity-100`;
          case 'center': return `${baseClass} right-[20%] z-30 scale-[0.85] opacity-70`;
          case 'rightNear': return `${baseClass} right-[5%] z-20 scale-[0.70] opacity-40`;
          case 'rightFar': return `${baseClass} -right-[45%] z-10 scale-[0.60] opacity-0`;
        }
      }
    }
    
    // Normal positions - matching Figma design exactly
    switch(position) {
      case 'leftFar': return `${baseClass} left-0 z-10 scale-[0.65] opacity-30`;
      case 'leftNear': return `${baseClass} left-[10%] z-20 scale-[0.80] opacity-50`;
      case 'center': return `${baseClass} left-1/2 -translate-x-1/2 z-40 scale-100 opacity-100`;
      case 'rightNear': return `${baseClass} right-[10%] z-20 scale-[0.80] opacity-50`;
      case 'rightFar': return `${baseClass} right-0 z-10 scale-[0.65] opacity-30`;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative h-[280px] md:h-[360px] lg:h-[440px] mb-8 cursor-grab active:cursor-grabbing overflow-visible"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left Far Image */}
        <div className={getSlideClass('leftFar')}>
          <div className="relative w-[280px] md:w-[380px] lg:w-[500px] h-[210px] md:h-[285px] lg:h-[375px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-xl">
            <img
              src={currentSlide.leftFar}
              alt="Background slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Near Image */}
        <div className={getSlideClass('leftNear')}>
          <div className="relative w-[280px] md:w-[380px] lg:w-[500px] h-[210px] md:h-[285px] lg:h-[375px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-2xl">
            <img
              src={currentSlide.leftNear}
              alt="Side slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center Image */}
        <div className={getSlideClass('center')}>
          <div className="relative w-[380px] md:w-[540px] lg:w-[720px] h-[215px] md:h-[305px] lg:h-[405px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-2xl">
            <img
              src={currentSlide.center}
              alt={`Testimonial ${currentSlide.id}`}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            {currentSlide.hasVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] lg:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[18px] lg:border-l-[22px] border-l-white border-b-[8px] md:border-b-[10px] lg:border-b-[12px] border-b-transparent ml-1"></div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Near Image */}
        <div className={getSlideClass('rightNear')}>
          <div className="relative w-[280px] md:w-[380px] lg:w-[500px] h-[210px] md:h-[285px] lg:h-[375px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-2xl">
            <img
              src={currentSlide.rightNear}
              alt="Side slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Far Image */}
        <div className={getSlideClass('rightFar')}>
          <div className="relative w-[280px] md:w-[380px] lg:w-[500px] h-[210px] md:h-[285px] lg:h-[375px] rounded-[20px] md:rounded-[28px] overflow-hidden shadow-xl">
            <img
              src={currentSlide.rightFar}
              alt="Background slide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows and Dots - Bottom */}
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="w-4 h-4 flex items-center justify-center transition-all disabled:opacity-30 hover:opacity-70"
        >
          <img src="/icons/arrow-left.svg" alt="Previous" className="w-full h-full" />
        </button>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index, index > currentIndex ? 'next' : 'prev')}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full disabled:opacity-50 ${
                currentIndex === index
                  ? 'w-3 h-3 md:w-3.5 md:h-3.5 bg-primary-light'
                  : 'w-2 h-2 md:w-2.5 md:h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="w-4 h-4 flex items-center justify-center transition-all disabled:opacity-30 hover:opacity-70"
        >
          <img src="/icons/arrow-right.svg" alt="Next" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;