import { Minus, Plus } from 'lucide-react';
import { cn } from './Button';

export function QuantityPicker({ quantity, onChange, className }) {
  return (
    <div className={cn("flex items-center justify-between border border-[var(--color-outline)] rounded-full px-2 py-1 w-24 bg-white", className)}>
      <button 
        className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] disabled:opacity-50 cursor-pointer"
        onClick={() => onChange(Math.max(0, quantity - 1))}
        disabled={quantity <= 0}
      >
        <Minus size={16} />
      </button>
      <span className="text-sm font-semibold">{quantity}</span>
      <button 
        className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] cursor-pointer"
        onClick={() => onChange(quantity + 1)}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
