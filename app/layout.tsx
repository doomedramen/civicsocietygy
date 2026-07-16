import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./_components/MobileMenu";
import { navLinks, footerLinks } from "./_lib/nav";
import { withBasePath } from "./_lib/basePath";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: {
    default: "Civic Society of Great Yarmouth",
    template: "%s — Civic Society of Great Yarmouth",
  },
  description:
    "A society for everyone who cares about Great Yarmouth — its buildings, its streets, its story, and its future.",
  icons: {
    icon: withBasePath("/images/favicon.png"),
    apple: withBasePath("/images/favicon.png"),
  },
};

const socialLinks = [
  { href: "https://facebook.com/CivicSociety", label: "Facebook", icon: FacebookIcon },
  { href: "https://instagram.com/civicsociety_gy", label: "Instagram", icon: InstagramIcon },
  { href: "https://x.com/CivicSociety_GY", label: "X", icon: XIcon },
  { href: "https://linkedin.com/company/civicsocietygreatyarmouth", label: "LinkedIn", icon: LinkedInIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body className="flex min-h-screen flex-col bg-[#faf8f2] font-sans text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="relative z-50 border-b border-primary/10 bg-[#faf8f2]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:py-6">
        <Link href="/" className="flex-shrink-0" aria-label="Civic Society of Great Yarmouth — home">
          <Image
            src={withBasePath("/images/logo-color.png")}
            alt="Civic Society of Great Yarmouth"
            width={240}
            height={37}
            className="h-auto w-52 sm:w-60"
            priority
          />
        </Link>
        <p className="hidden max-w-xs text-right font-serif text-lg leading-tight text-primary/70 md:block lg:text-xl">
          Pride in our town.<br />A voice for its future.
        </p>
        <MobileMenu />
      </div>
      <div className="hidden border-t border-primary/10 lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 px-2 py-4 text-[12px] font-bold tracking-[0.01em] transition-colors ${link.href === "/join" ? "border-secondary text-secondary" : "border-transparent text-primary/65 hover:border-primary/20 hover:text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="relative overflow-hidden border-b border-white/10 py-16 sm:py-20">
        <Image src={withBasePath("/images/gallery/footer-image.jpg")} alt="" fill className="object-cover opacity-15 mix-blend-luminosity" sizes="100vw" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-secondary-light">Care about Great Yarmouth?</p>
            <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.05] sm:text-6xl">Add your voice to the town&rsquo;s future.</h2>
          </div>
          <div className="lg:text-right">
            <Link href="/join" className="inline-flex rounded-full bg-secondary px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-secondary-dark">Become a member — £10 a year</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Image src={withBasePath("/images/logo-white.png")} alt="Civic Society of Great Yarmouth" width={260} height={40} className="h-auto w-56" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">For everyone who cares about Great Yarmouth—its buildings, streets, story and future.</p>
          </div>
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-light">Explore</h4>
            <nav className="grid grid-cols-2 gap-x-5 gap-y-2 lg:grid-cols-1">
              {footerLinks.slice(1, 7).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">{link.label}</Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-light">Information</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/contact" className="text-sm text-white/65 hover:text-white">Contact</Link>
              <Link href="/privacy" className="text-sm text-white/70 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-white/70 transition-colors hover:text-white">
                Cookies Policy
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary-light">Follow the Society</h4>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} The Civic Society of Great Yarmouth</span>
          <a href="mailto:info@civicsocietygy.co.uk" className="hover:text-white">info@civicsocietygy.co.uk</a>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
