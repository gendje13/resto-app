import { Outlet, Link, useLocation } from 'react-router-dom';

export function POSLayout() {
  const location = useLocation();

  return (
    <div className="bg-background text-on-background antialiased flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <nav className="bg-surface dark:bg-inverse-surface border-r border-surface-variant dark:border-outline-variant shadow-md docked left-0 h-full w-64 hidden lg:flex flex-col fixed left-0 top-0 py-stack-lg z-50">
        <div className="px-6 mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>ramen_dining</span>
          <span className="font-headline-md text-headline-md font-black text-primary">Mie Teknogen</span>
        </div>
        <div className="px-4 flex-1 overflow-y-auto hide-scrollbar space-y-2">
          <Link to="/" className="text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all flex items-center gap-3 px-4 py-3 rounded-lg font-label-lg text-label-lg">
            <span className="material-symbols-outlined">home</span>
            Beranda
          </Link>
          <Link to="/pos" className={`rounded-lg font-label-lg text-label-lg transition-all flex items-center gap-3 px-4 py-3 ${location.pathname === '/pos' ? 'bg-primary-container text-on-primary-container font-bold translate-x-1' : 'text-on-surface-variant hover:bg-surface-container-high'}`}>
            <span className="material-symbols-outlined">restaurant_menu</span>
            Menu Utama
          </Link>
          <a className="text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all flex items-center gap-3 px-4 py-3 rounded-lg font-label-lg text-label-lg" href="#">
            <span className="material-symbols-outlined">local_bar</span>
            Minuman
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all flex items-center gap-3 px-4 py-3 rounded-lg font-label-lg text-label-lg" href="#">
            <span className="material-symbols-outlined">bakery_dining</span>
            Dimsum
          </a>
          <a className="text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all flex items-center gap-3 px-4 py-3 rounded-lg font-label-lg text-label-lg" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            Stok Produk
          </a>
        </div>
        <div className="px-4 mt-auto pt-6 border-t border-surface-variant">
          <div className="flex items-center gap-3 mb-6 px-4">
            <div className="w-10 h-10 rounded-full border-2 border-surface-variant bg-primary text-on-primary flex items-center justify-center font-bold">
              DJ
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">Dwi Joko</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Meja 73</p>
            </div>
          </div>
          <div className="space-y-2">
            <a className="text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all flex items-center gap-3 px-4 py-3 rounded-lg font-label-lg text-label-lg" href="#">
              <span className="material-symbols-outlined">help</span>
              Bantuan
            </a>
            <a className="text-on-surface-variant hover:bg-surface-container-high hover:bg-surface-container-highest transition-all flex items-center gap-3 px-4 py-3 rounded-lg font-label-lg text-label-lg text-error" href="#">
              <span className="material-symbols-outlined">logout</span>
              Keluar
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 flex flex-col h-full relative">
        <header className="bg-background dark:bg-surface-container-highest docked full-width top-0 border-b border-surface-variant dark:border-outline-variant shadow-sm flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-16 sticky top-0 z-40 lg:hidden">
          <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Mie Teknogen</div>
          <div className="font-label-lg text-label-lg text-secondary">Meja 73</div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
