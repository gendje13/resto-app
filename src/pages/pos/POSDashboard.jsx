import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { PaymentModal } from './PaymentModal';

export function POSDashboard() {
  const { cart, updateQuantity, total } = useCart();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="flex-1 overflow-hidden flex flex-col lg:flex-row bg-surface-container-lowest">
      {/* Left Side: Product Selection & Cart Building */}
      <div className="flex-1 flex flex-col p-4 md:p-stack-lg border-r border-surface-variant overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-headline-md text-headline-md text-on-background">Keranjang Belanja</h1>
          <div className="flex gap-2 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full border border-surface-variant">
            <span>Enter: Konfirmasi/Lanjut</span>
            <span className="mx-2 text-surface-dim">|</span>
            <span>Panah: Navigasi Sel</span>
            <span className="mx-2 text-surface-dim">|</span>
            <span>Tab: Pindah ke Pembayaran</span>
          </div>
        </div>

        <div className="bg-surface rounded-xl border border-surface-variant shadow-sm overflow-hidden flex-1 flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-surface-variant bg-surface-container-lowest font-label-lg text-label-lg text-on-surface-variant">
            <div className="col-span-1 text-center">No</div>
            <div className="col-span-5">Kode / Nama Barang</div>
            <div className="col-span-2 text-right">Harga</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>

          {/* Table Body */}
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {/* Active Input Row */}
            <div className="grid grid-cols-12 gap-4 p-2 items-center bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors group">
              <div className="col-span-1 text-center font-body-md text-body-md text-secondary">{cart.length + 1}</div>
              <div className="col-span-5 relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
                <input autoFocus className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest border-2 border-primary rounded-lg focus:outline-none font-body-md text-body-md text-on-surface shadow-sm" placeholder="Ketik kode (mis. MIE1)" type="text" />
              </div>
              <div className="col-span-2 text-right font-body-md text-body-md text-on-surface-variant">-</div>
              <div className="col-span-2 flex justify-center">
                <div className="w-16 h-10 bg-surface-container-low border border-surface-variant rounded-lg"></div>
              </div>
              <div className="col-span-2 text-right font-body-md text-body-md text-on-surface-variant flex justify-between items-center pl-2">
                <span>-</span>
                <button className="text-outline opacity-0 group-hover:opacity-100 hover:text-error transition-all p-1 rounded hover:bg-error-container">
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            </div>

            {/* Cart Items */}
            {cart.map((item, idx) => (
              <div key={item.product.id} className="grid grid-cols-12 gap-4 p-2 items-center hover:bg-surface-container-low rounded-lg transition-colors group border-b border-surface-variant pb-3">
                <div className="col-span-1 text-center font-body-md text-body-md text-secondary">{idx + 1}</div>
                <div className="col-span-5 font-body-md text-body-md text-on-surface">{item.product.name}</div>
                <div className="col-span-2 text-right font-body-md text-body-md text-on-surface">Rp {item.product.price.toLocaleString('id-ID')}</div>
                <div className="col-span-2 flex justify-center items-center gap-2">
                  <button onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))} className="w-6 h-6 rounded-full border border-outline flex items-center justify-center hover:bg-surface-variant text-on-surface-variant"><span className="material-symbols-outlined text-[16px]">remove</span></button>
                  <span className="font-label-lg text-label-lg w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary-container"><span className="material-symbols-outlined text-[16px]">add</span></button>
                </div>
                <div className="col-span-2 text-right font-label-lg text-label-lg text-on-surface flex justify-between items-center pl-2">
                  <span>Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}</span>
                  <button onClick={() => updateQuantity(item.product.id, 0)} className="text-outline hover:text-error transition-colors p-1 rounded hover:bg-error-container">
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Order Summary */}
      <div className="w-full lg:w-[400px] xl:w-[480px] bg-surface flex flex-col border-l border-surface-variant shadow-[-4px_0_24px_rgba(0,0,0,0.02)] z-10">
        <div className="bg-primary p-6 text-on-primary m-4 rounded-xl shadow-md">
          <h2 className="font-label-lg text-label-lg opacity-90 mb-2">Total Tagihan</h2>
          <div className="font-headline-display text-headline-display flex items-baseline gap-2">
            <span className="font-headline-md text-headline-md">Rp</span>{total.toLocaleString('id-ID')}
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col gap-6 overflow-y-auto">
          <div className="space-y-3">
            <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Pembayaran</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline-md text-headline-md text-on-surface-variant">Rp</span>
              <input 
                className="w-full bg-surface-container-low border border-surface-variant rounded-xl py-4 pl-14 pr-4 font-headline-md text-headline-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-right transition-colors" 
                placeholder="0" 
                type="text" 
                value={total}
                readOnly
              />
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-surface-variant rounded-xl p-5 space-y-4 shadow-sm mt-auto">
            <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>Rp {total.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
              <span>Pajak (10%)</span>
              <span>Rp 0</span>
            </div>
            <div className="w-full h-[1px] bg-surface-variant my-2"></div>
            <div className="flex justify-between items-center">
              <span className="font-headline-md text-headline-md text-on-surface">Kembalian</span>
              <span className="font-headline-md text-headline-md text-primary">Rp 0</span>
            </div>
          </div>

          <button onClick={() => setIsPaymentOpen(true)} className="w-full bg-primary-container text-on-primary-container font-label-lg text-label-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all shadow-md active:scale-[0.98] mt-2 mb-4">
            <span className="material-symbols-outlined">print</span>
            Bayar & Cetak
          </button>
        </div>
      </div>
      
      {isPaymentOpen && <PaymentModal total={total} onClose={() => setIsPaymentOpen(false)} onSuccess={() => setIsPaymentOpen(false)} />}
    </div>
  );
}
