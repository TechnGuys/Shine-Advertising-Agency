import { Globe, Link2, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1222] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] text-sm font-extrabold text-[var(--color-navy)]">
            S
          </div>
          <span className="text-sm font-semibold text-white">
            Shine Advertising Agency
          </span>
        </div>

        <p className="text-xs text-zinc-500">
          &copy; {new Date().getFullYear()} Shine Advertising Agency. All
          rights reserved. &mdash; &ldquo;Your Vision, Our Creative
          Execution.&rdquo;
        </p>

        <div className="flex gap-4 text-zinc-500">
          <a href="tel:923214924370" className="transition-colors hover:text-[var(--color-gold)]">
            <Phone size={16} />
          </a>
          <a href="mailto:designer@shineadve.com" className="transition-colors hover:text-[var(--color-gold)]">
            <Mail size={16} />
          </a>
          <a href="#" className="transition-colors hover:text-[var(--color-gold)]">
            <Globe size={16} />
          </a>
          <a href="#" className="transition-colors hover:text-[var(--color-gold)]">
            <Link2 size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
