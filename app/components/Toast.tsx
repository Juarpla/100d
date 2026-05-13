'use client';

import { useToast } from '../contexts/ToastContext';

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            px-4 py-3 rounded-xl backdrop-blur-xl shadow-lg border animate-toast-slide-up
            ${toast.type === 'success' ? 'bg-green-500/80 border-green-400/50' : ''}
            ${toast.type === 'error' ? 'bg-red-500/80 border-red-400/50' : ''}
            ${toast.type === 'info' ? 'bg-blue-500/80 border-blue-400/50' : ''}
          `}
          onClick={() => removeToast(toast.id)}
        >
          <p className="text-white text-sm font-medium">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}