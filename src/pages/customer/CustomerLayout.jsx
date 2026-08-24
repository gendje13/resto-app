import { Outlet, Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export function CustomerLayout() {
  const { cart } = useCart();
  const location = useLocation();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen flex flex-col relative max-w-md mx-auto shadow-2xl overflow-hidden border-x border-surface-variant">
      {/* Top App Bar */}
      <header className="bg-background dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-headline-md text-headline-md font-bold docked full-width top-0 border-b border-surface-variant dark:border-outline-variant shadow-sm flex justify-between items-center w-full px-margin-mobile h-16 sticky top-0 z-30">
        <div className="flex-1">
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Mie Teknogen</span>
        </div>
        <div className="flex gap-4">
          <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary-container dark:hover:text-primary-fixed-dim transition-colors scale-95 active:scale-90 transition-transform cursor-pointer">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-16 hide-scrollbar relative">
        <Outlet />
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="bg-surface dark:bg-surface-container-highest text-primary dark:text-primary-fixed font-label-sm text-label-sm docked full-width bottom-0 border-t border-surface-variant dark:border-outline-variant shadow-[0_-4px_20px_rgba(0,0,0,0.05)] absolute bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 max-w-md mx-auto">
        <Link to="/customer" className={`flex flex-col items-center justify-center font-bold active:bg-surface-container-low tap-highlight-transparent scale-95 transition-transform w-full h-full ${location.pathname === '/customer' ? 'text-primary' : 'text-secondary dark:text-secondary-fixed-dim'}`}>
          <span className="material-symbols-outlined mb-1" style={location.pathname === '/customer' ? { fontVariationSettings: "'FILL' 1" } : {}}>restaurant</span>
          <span>Menu</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim active:bg-surface-container-low tap-highlight-transparent scale-95 transition-transform w-full h-full cursor-pointer">
          <span className="material-symbols-outlined mb-1">local_offer</span>
          <span>Promo</span>
        </button>
        <Link to="/customer/cart" className={`flex flex-col items-center justify-center active:bg-surface-container-low tap-highlight-transparent scale-95 transition-transform w-full h-full relative ${location.pathname === '/customer/cart' ? 'text-primary font-bold' : 'text-secondary dark:text-secondary-fixed-dim'}`}>
          <span className="material-symbols-outlined mb-1" style={location.pathname === '/customer/cart' ? { fontVariationSettings: "'FILL' 1" } : {}}>shopping_basket</span>
          <span>Keranjang</span>
          {totalItems > 0 && (
            <span className="absolute top-2 right-6 bg-error text-on-error text-[10px] font-bold px-1.5 py-0.5 rounded-full">{totalItems}</span>
          )}
        </Link>
        <button className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim active:bg-surface-container-low tap-highlight-transparent scale-95 transition-transform w-full h-full cursor-pointer">
          <span className="material-symbols-outlined mb-1">person</span>
          <span>Akun</span>
        </button>
      </nav>
    </div>
  );
}
