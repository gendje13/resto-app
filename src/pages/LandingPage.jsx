import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Store, User } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-dim)] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-[var(--color-primary)] text-white rounded-3xl flex items-center justify-center font-bold text-4xl mb-8 shadow-lg">
        RK
      </div>
      <h1 className="text-3xl font-bold text-[var(--color-on-background)] mb-2">Resto Kita</h1>
      <p className="text-[var(--color-on-surface-variant)] mb-12">Sistem Pemesanan & POS Digital Terpadu</p>
      
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link to="/customer" className="w-full">
          <Button className="w-full py-4 text-lg rounded-xl flex items-center justify-center gap-3">
            <User size={24} />
            Masuk sebagai Pelanggan
          </Button>
        </Link>
        <Link to="/pos" className="w-full">
          <Button variant="secondary" className="w-full py-4 text-lg rounded-xl flex items-center justify-center gap-3">
            <Store size={24} />
            Masuk sebagai Kasir (POS)
          </Button>
        </Link>
      </div>
    </div>
  );
}
