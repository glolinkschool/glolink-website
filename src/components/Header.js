"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen || currentScrollY < 80) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsHomeOpen(false);
    setIsAboutOpen(false);
  };

  const activeClass = "rounded-lg bg-[#eaf3fb] text-[#153d65]";
  const normalClass =
    "rounded-lg text-[#153d65] hover:bg-[#eaf3fb] hover:text-[#153d65]";

  const dropdownClass =
    "absolute left-0 top-full z-50 hidden w-56 rounded-xl bg-white py-2 shadow-xl group-hover:block";

  const dropdownLinkClass =
    "block px-4 py-3 text-sm text-[#153d65] transition duration-200 hover:bg-[#eaf3fb] hover:pl-6 hover:text-blue-600";

  const mobileLinkClass =
    "block w-full rounded-lg px-4 py-3 text-left font-medium text-[#153d65] transition duration-200 hover:bg-[#eaf3fb] hover:text-blue-600";

  const mobileSubLinkClass =
    "block rounded-lg px-4 py-3 text-sm text-[#153d65] transition duration-200 hover:bg-white hover:text-blue-600";

  return (
    <header
      className={`sticky top-0 z-50 bg-[#eaf3fb]/95 shadow-md backdrop-blur-md transition-all duration-300 ease-in-out ${
        isHeaderVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      {/* HEADER CONTAINER */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-12 md:py-3">
        {/* SCHOOL LOGO AND NAME */}
        <a href="/" className="flex items-center gap-3 md:gap-4">
          <img
            src="/images/logo/glolink-logo.png"
            alt="GloLink International School Logo"
            className="h-16 w-16 object-contain md:h-20 md:w-20"
          />

          <div>
            <h1 className="text-xl font-bold leading-tight text-[#153d65] md:text-2xl">
              GloLink International
            </h1>
            <p className="text-xl font-bold leading-tight text-[#153d65] md:text-2xl">
              School Phnom Penh
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 rounded-2xl bg-white px-5 py-3 text-sm font-medium md:flex">
          {/* HOME DROPDOWN */}
          <div className="group relative">
            <a
              href="/"
              className={`rounded-lg px-3 py-2 transition duration-200 ${
                pathname === "/" ? activeClass : normalClass
              }`}
            >
              Home <span className="ml-1 text-sm font-bold">▼</span>
            </a>

            <div className={dropdownClass}>
              <a href="/#dual-program" className={dropdownLinkClass}>
                Dual Program
              </a>
              <a href="/#school-calendar" className={dropdownLinkClass}>
                School Calendar
              </a>
              <a href="/#school-life" className={dropdownLinkClass}>
                School Life
              </a>
              <a href="/#news-events" className={dropdownLinkClass}>
                News & Events
              </a>
            </div>
          </div>

          {/* ABOUT DROPDOWN */}
          <div className="group relative">
            <a
              href="/about"
              className={`rounded-lg px-3 py-2 transition duration-200 ${
                pathname === "/about" ? activeClass : normalClass
              }`}
            >
              About <span className="ml-1 text-sm font-bold">▼</span>
            </a>

            <div className={dropdownClass}>
              <a href="/about#mission-vision" className={dropdownLinkClass}>
                Mission & Vision
              </a>
              <a href="/about#accreditations" className={dropdownLinkClass}>
                Accreditations
              </a>
              <a href="/about#principal-message" className={dropdownLinkClass}>
                Principal's Message
              </a>
              <a href="/about#statement-of-faith" className={dropdownLinkClass}>
                Statement of Faith
              </a>
            </div>
          </div>

          {/* ACADEMICS DROPDOWN */}
          <div className="group relative">
            <a
              href="/academic-programs"
              className={`rounded-lg px-3 py-2 transition duration-200 ${
                pathname.startsWith("/academic-programs")
                  ? activeClass
                  : normalClass
              }`}
            >
              Academics <span className="ml-1 text-sm font-bold">▼</span>
            </a>

            <div className={dropdownClass}>
              <a
                href="/academic-programs/khmer-program"
                className={dropdownLinkClass}
              >
                Khmer Program
              </a>
              <a
                href="/academic-programs/international-program"
                className={dropdownLinkClass}
              >
                International Program
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <a
            href="/contact"
            className={`rounded-lg px-3 py-2 transition duration-200 ${
              pathname === "/contact" ? activeClass : normalClass
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-2xl text-[#153d65] transition hover:bg-white focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-5 py-4 shadow-lg md:hidden">
          {/* MOBILE HOME DROPDOWN */}
          <div className="mb-2">
            <button
              type="button"
              onClick={() => {
                setIsHomeOpen(!isHomeOpen);
                setIsAboutOpen(false);
              }}
              className={`${mobileLinkClass} flex items-center justify-between ${
                pathname === "/" ? "bg-[#eaf3fb] text-[#153d65]" : ""
              }`}
              aria-expanded={isHomeOpen}
            >
              <span>Home</span>
              <span className="text-sm">{isHomeOpen ? "▲" : "▼"}</span>
            </button>

            {isHomeOpen && (
              <div className="mt-2 space-y-1 rounded-xl bg-[#eaf3fb] p-2">
                <a
                  href="/#dual-program"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  Dual Program
                </a>
                <a
                  href="/#school-calendar"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  School Calendar
                </a>
                <a
                  href="/#school-life"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  School Life
                </a>
                <a
                  href="/#news-events"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  News & Events
                </a>
              </div>
            )}
          </div>

          {/* MOBILE ABOUT DROPDOWN */}
          <div className="mb-2">
            <button
              type="button"
              onClick={() => {
                setIsAboutOpen(!isAboutOpen);
                setIsHomeOpen(false);
              }}
              className={`${mobileLinkClass} flex items-center justify-between ${
                pathname === "/about" ? "bg-[#eaf3fb] text-[#153d65]" : ""
              }`}
              aria-expanded={isAboutOpen}
            >
              <span>About</span>
              <span className="text-sm">{isAboutOpen ? "▲" : "▼"}</span>
            </button>

            {isAboutOpen && (
              <div className="mt-2 space-y-1 rounded-xl bg-[#eaf3fb] p-2">
                <a
                  href="/about#mission-vision"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  Mission & Vision
                </a>
                <a
                  href="/about#accreditations"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  Accreditations
                </a>
                <a
                  href="/about#principal-message"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  Principal's Message
                </a>
                <a
                  href="/about#statement-of-faith"
                  onClick={closeMenu}
                  className={mobileSubLinkClass}
                >
                  Statement of Faith
                </a>
              </div>
            )}
          </div>

          {/* MOBILE ACADEMICS */}
          <a
            href="/academic-programs"
            onClick={closeMenu}
            className={`${mobileLinkClass} ${
              pathname.startsWith("/academic-programs")
                ? "bg-[#eaf3fb] text-[#153d65]"
                : ""
            }`}
          >
            Academics <span className="ml-1 text-sm font-bold">▼</span>
          </a>

          {/* MOBILE CONTACT */}
          <a
            href="/contact"
            onClick={closeMenu}
            className={`${mobileLinkClass} ${
              pathname === "/contact" ? "bg-[#eaf3fb] text-[#153d65]" : ""
            }`}
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
