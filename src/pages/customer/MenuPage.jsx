import { useEffect, useState } from 'react';
import { getCategories, getProducts } from '../../api';
import { useCart } from '../../context/CartContext';

export function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getCategories().then(cats => {
      setCategories(cats);
      if (cats.length > 0) setActiveCategory(cats[0].id);
    });
  }, []);

  useEffect(() => {
    if (activeCategory) {
      getProducts(activeCategory).then(setProducts);
    }
  }, [activeCategory]);

  return (
    <>
      {/* Category Tabs */}
      <div className="bg-surface sticky top-0 z-20 border-b border-surface-variant px-margin-mobile py-stack-sm overflow-x-auto hide-scrollbar">
        <div className="flex gap-stack-lg min-w-max">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer ${activeCategory === cat.id
                ? "flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1 px-2 uppercase"
                : "text-on-surface-variant font-label-lg pb-1 px-2 hover:text-primary transition-colors uppercase"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && <span className="material-symbols-outlined text-[18px]">expand_more</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Canvas */}
      <main className="p-margin-mobile bg-surface-container-lowest min-h-full">
        <div className="mb-stack-lg">
          <h2 className="font-headline-md text-on-surface mb-2">{categories.find(c => c.id === activeCategory)?.name || 'Menu'}</h2>
          <h3 className="font-label-lg text-on-surface-variant uppercase tracking-wider">Pilihan Terbaik</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          {products.map(product => (
            <div key={product.id} className="bg-surface rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all overflow-hidden flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-surface-container">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-stack-md flex flex-col flex-1">
                <h4 className="font-label-lg text-on-surface mb-1 line-clamp-2">{product.name}</h4>
                <p className="font-body-md font-bold text-on-surface mt-auto pt-2">Rp {product.price.toLocaleString('id-ID')}</p>
                <button onClick={() => addToCart(product)} className="w-full mt-stack-md py-2 border border-primary text-primary rounded-lg font-label-lg hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer">
                  Tambah
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
