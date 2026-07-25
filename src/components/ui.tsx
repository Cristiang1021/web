import type { AnchorHTMLAttributes } from "react";

type ButtonPrimaryProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "dark" | "light";
};

export function ButtonPrimary({
  className = "",
  variant = "dark",
  ...props
}: ButtonPrimaryProps) {
  const styles =
    variant === "light"
      ? "bg-white text-[#17171c] hover:bg-[#f2f2f2]"
      : "bg-[#17171c] text-white hover:bg-black";

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles} ${className}`}
      {...props}
    />
  );
}

export function ButtonSecondary({
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`text-sm text-[#212121] underline underline-offset-4 decoration-[#d9d9dd] transition-colors hover:decoration-[#212121] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function MonoLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono-label text-xs uppercase text-[#75758a] ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display text-[clamp(2rem,5vw,3.75rem)] leading-none font-normal tracking-[-0.02em] text-[#212121] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-[#d9d9dd] ${className}`} />;
}
