function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-nunito font-bold text-display text-text-secondary text-center mb-12">
          Join <span className="text-primary-light">100,000+ patients</span><br />
          changing their lives
        </h2>
        
        <div className="flex justify-center">
          <img src="/images/testimonial-carousel.svg" alt="Patient testimonials" className="max-w-full" />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;