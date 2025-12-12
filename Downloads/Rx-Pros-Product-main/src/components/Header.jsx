function Header() {
  return (
    <header className="bg-white py-6 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="RxPros" className="h-8" />
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-primary font-nunito font-semibold text-h3 hover:text-primary-light transition-colors">
            Sign In
          </a>
          <button className="bg-primary-light text-white font-nunito font-semibold text-h3 px-6 py-3 rounded-lg hover:bg-primary transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;