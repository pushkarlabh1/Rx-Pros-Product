import { tabNavItems } from '../data/mockData';

function TabNavigation() {
  return (
    <nav className="bg-white py-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {tabNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-nunito font-semibold text-sm md:text-base text-text-secondary bg-gray-100 hover:bg-gray-200 transition-colors px-4 md:px-6 py-3 md:py-4 rounded-2xl text-center whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default TabNavigation;