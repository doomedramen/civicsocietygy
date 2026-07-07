import { type InputHTMLAttributes } from "react";

const inputClasses =
  "w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20";
const labelClasses = "mb-1 block text-sm font-medium text-gray-700";

export function FormField({
  label,
  name,
  required,
  children,
  hint,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
    </div>
  );
}

export function TextInput({
  name,
  required,
  type = "text",
  ...rest
}: {
  name: string;
  required?: boolean;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      required={required}
      className={inputClasses}
      {...rest}
    />
  );
}

export function SelectInput({
  name,
  required,
  children,
}: {
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <select
      id={name}
      name={name}
      required={required}
      className={`${inputClasses} bg-white`}
    >
      {children}
    </select>
  );
}

export function TextareaInput({
  name,
  required,
  rows = 6,
  ...rest
}: {
  name: string;
  required?: boolean;
  rows?: number;
} & InputHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      id={name}
      name={name}
      rows={rows}
      required={required}
      className={inputClasses}
      {...rest}
    />
  );
}

export function FormGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}
