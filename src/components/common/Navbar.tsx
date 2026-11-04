"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/mesquite-estates/homes-for-sale", label: "Homes for Sale" },
  { href: "/mesquite-estates/neighborhoods", label: "Neighborhoods" },
  { href: "/mesquite-estates/custom-home-lots", label: "Custom Lots" },
  { href: "/mesquite-estates/market-report", label: "Market Report" },
  { href: "/sell-your-mesquite-home", label: "Sell" },
  { href: "/Sun_City_Mesquite", label: "55+ Living" },
  { href: "/Contact_us", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 hidden bg-ink py-2 text-sand md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 text-xs uppercase tracking-[0.2em]">
          <span className="text-dune/80">Mesquite Estates · North of I-15 · Mesquite, NV 89027</span>
          <a href="tel:+17027182228" className="font-semibold hover:text-clay">Call / Text 702-718-2228</a>
        </div>
      </div>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b border-mesa/20 bg-sand/95 backdrop-blur transition-all duration-300 md:top-8 ${
          scrolled ? "py-2 shadow-md md:top-0" : "py-4"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
            Mesquite <span className="text-clay">Estates</span>
          </Link>
          <button
            className="text-ink lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
          </button>
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/80 transition hover:text-clay">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <ul id="mobile-menu" className="mx-4 mt-3 flex flex-col border-t border-mesa/20 pb-4 lg:hidden">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="tel:+17027182228" className="mt-2 block rounded-full bg-clay py-3 text-center text-sm font-semibold uppercase tracking-widest text-white">
                Call / Text 702-718-2228
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
