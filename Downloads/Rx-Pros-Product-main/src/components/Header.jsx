function Header() {
  return (
    <header className="bg-white py-4 md:py-6 px-6 md:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="RxPros" className="h-6 md:h-8" />
        </div>
        <div className="flex items-center gap-3 md:gap-8">
          <a href="#" className="text-primary font-nunito font-semibold text-base md:text-h3 hover:text-primary-light transition-colors">
            Sign In
          </a>
          <button className="bg-primary-light text-white font-nunito font-semibold text-sm md:text-h3 px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-primary transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;