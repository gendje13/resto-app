import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { submitOrder } from '../../api';

export function CartPage() {
  const { cart, updateQuantity, total, clearCart } = useCart();
  const [table, setTable] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCheckout = async () => {
    if (!table) return alert('Silakan isi nomor meja');
    setLoading(true);
    await submitOrder({ table, items: cart, total });
    setLoading(false);
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
        <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h2 className="text-headline-md font-bold text-on-background mb-2">Pesanan Berhasil!</h2>
        <p className="text-body-md text-on-surface-variant">Makanan akan segera diantar ke Meja {table}.</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center text-on-surface-variant opacity-75">
        <span className="material-symbols-outlined text-6xl mb-4">shopping_basket</span>
        <p className="text-body-lg">Keranjang masih kosong</p>
      </div>
    );
  }

  return (
    <div className="p-margin-mobile bg-surface-container-lowest min-h-full flex flex-col">
      <h1 className="font-headline-md text-on-background mb-6">Keranjang Anda</h1>

      <div className="flex-1 flex flex-col gap-4">
        {cart.map(item => (
          <div key={item.product.id} className="bg-surface rounded-xl border border-surface-variant p-4 flex gap-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0">
              <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col">
              <h3 className="font-label-lg text-on-surface line-clamp-1">{item.product.name}</h3>
              <p className="font-body-md font-bold text-primary mb-2">Rp {item.product.price.toLocaleString('id-ID')}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 bg-surface-container-low rounded-lg p-1 border border-surface-variant">
                  <button onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))} className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">remove</span></button>
                  <span className="font-label-lg w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-primary"><span className="material-symbols-outlined">add</span></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-surface border border-surface-variant rounded-xl p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
        <div className="mb-4">
          <label className="font-label-sm text-on-surface-variant font-bold uppercase block mb-2">Nomor Meja</label>
          <input 
            type="text" 
            value={table}
            onChange={e => setTable(e.target.value)}
            className="w-full bg-surface-container-low border border-surface-variant rounded-xl p-3 focus:outline-none focus:border-primary text-on-surface"
            placeholder="Contoh: 73"
          />
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <span className="font-headline-md text-on-surface">Total</span>
          <span className="font-headline-md text-primary font-bold">Rp {total.toLocaleString('id-ID')}</span>
        </div>
        
        <button 
          onClick={handleCheckout}
          disabled={loading || cart.length === 0}
          className="w-full bg-primary text-on-primary font-label-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-surface-tint transition-all shadow-md active:scale-95"
        >
          {loading ? 'Memproses...' : 'Pesan Sekarang'}
          {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
        </button>
      </div>
    </div>
  );
}
