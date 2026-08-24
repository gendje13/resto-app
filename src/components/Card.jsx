import { cn } from './Button';

export function Card({ children, className, ...props }) {
  return (
    <div className={cn("bg-white rounded-lg border border-[var(--color-outline)] shadow-sm hover:shadow-md transition-shadow overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}
