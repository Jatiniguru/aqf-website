import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#C46A4A] hover:bg-[#a8593c] text-white focus:ring-[#C46A4A]",
    secondary:
      "bg-[#1D2D44] hover:bg-[#3A4E6D] text-white focus:ring-[#1D2D44]",
    outline:
      "border-2 border-[#1D2D44] text-[#1D2D44] hover:bg-[#1D2D44] hover:text-white focus:ring-[#1D2D44]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
