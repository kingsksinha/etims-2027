import { type InputHTMLAttributes } from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
}

export default function FormField({
  label,
  error,
  registration,
  className = '',
  ...rest
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-text-dark">{label}</label>
      <input
        className={`rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors
          ${
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-300'
              : 'border-border focus:border-accent focus:ring-1 focus:ring-accent/30'
          }`}
        {...registration}
        {...rest}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
