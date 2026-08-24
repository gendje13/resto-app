import { useState } from 'react';
import { Button } from '../../components/Button';
import { submitOrder } from '../../api';

export function PaymentModal({ total, onClose, onSuccess }) {
  const [method, setMethod] = useState('cash');
  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    await submitOrder({ total, method });
    setLoading(false);
    setPaid(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
        {paid ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Pembayaran Berhasil!</h2>
            <p className="text-[var(--color-on-surface-variant)] mb-6">Pesanan telah masuk ke sistem dapur.</p>
            <Button onClick={onSuccess} className="w-full text-lg py-3">Tutup</Button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-6">Proses Pembayaran</h2>
            <div className="bg-[var(--color-surface-dim)] p-4 rounded-xl text-center mb-6">
              <span className="block text-[var(--color-on-surface-variant)] text-sm mb-1">Total Tagihan</span>
              <span className="text-3xl font-bold text-[var(--color-primary)]">Rp {total.toLocaleString('id-ID')}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => setMethod('cash')}
                className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                  method === 'cash' ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-pink-50' : 'border-[var(--color-outline)] text-[var(--color-on-surface-variant)] hover:border-[var(--color-primary)]'
                }`}
              >
                Tunai
              </button>
              <button 
                onClick={() => setMethod('card')}
                className={`p-4 rounded-xl border-2 font-semibold transition-all cursor-pointer ${
                  method === 'card' ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-pink-50' : 'border-[var(--color-outline)] text-[var(--color-on-surface-variant)] hover:border-[var(--color-primary)]'
                }`}
              >
                Kartu / QRIS
              </button>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={onClose} className="flex-1 py-3" disabled={loading}>Batal</Button>
              <Button onClick={handlePay} className="flex-1 py-3" disabled={loading}>
                {loading ? 'Memproses...' : 'Selesaikan'}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
