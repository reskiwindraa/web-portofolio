export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  const buttonVariants = {
    primary: "bg-primary text-text-inverse !font-bold hover:bg-primary-hover hover:scale-104",
    secondary:
      "ring-2 ring-insert primary text-text-active !font-bold hover:bg-brand-primary hover:bg-primary-lighter hover:text-text-hover hover:scale-104",
    ghost:
      "text-brand-primary hover:bg-brand-primary/10",
    danger:
      "bg-danger text-white hover:bg-danger/90",
  };

  const buttonSizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-full font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-brand-primary/40
        disabled:opacity-50 disabled:cursor-not-allowed
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
