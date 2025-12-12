import { footerLinks } from '../data/mockData';

function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <img src="/images/logo-footer.png" alt="RxPros" className="h-8 mb-3" />
          <p className="font-roboto text-tiny leading-relaxed">
            1309 Coffeen Ave Ste 15880<br />
            Sheridan, WY 82801
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-5 mb-8">
          <span className="font-roboto font-black text-body">Legal</span>
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="font-roboto text-small hover:text-primary-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <p className="font-inter text-[11px]">
            © 2025 RxPros LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <img src="/icons/visa.png" alt="Visa" className="h-6" />
            <img src="/icons/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/icons/amex.png" alt="American Express" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;