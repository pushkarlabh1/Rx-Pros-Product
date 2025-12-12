import TestimonialCarousel from './TestimonialCarousel';
import { testimonialSlides } from '../data/mockData';

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-nunito font-bold text-3xl md:text-5xl lg:text-display text-text-secondary text-center mb-8 md:mb-12">
          Join <span className="text-primary-light">100,000+ patients</span><br />
          changing their lives
        </h2>
        
        <TestimonialCarousel slides={testimonialSlides} />
      </div>
    </section>
  );
}

export default TestimonialsSection;