import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/" },
  { name: "What We Do", href: "/we-do" },
  { name: "Resources", href: "/resource" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              {/* Sample Logo */}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 ring-1 ring-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-900"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2.5l8.5 4.9v9.2L12 21.5 3.5 16.6V7.4L12 2.5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M7.5 12.2l3 3.1 6-6.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="text-base font-semibold tracking-wide text-gray-900">
                YourCompany
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              Company profile footer template. Replace this text with your
              tagline, mission, or a short description of what your company
              does.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-900">
              Get in touch
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>
                Email:{" "}
                <a
                  className="text-gray-700 hover:text-gray-900"
                  href="mailto:hello@yourcompany.com"
                >
                  hello@yourcompany.com
                </a>
              </p>
              <p>Phone: +62 812-3456-7890</p>
              <p>Address: Jakarta, Indonesia</p>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 ring-1 ring-gray-200 transition hover:bg-gray-200"
                aria-label="Twitter"
              >
                <span className="text-sm text-gray-700">X</span>
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 ring-1 ring-gray-200 transition hover:bg-gray-200"
                aria-label="LinkedIn"
              >
                <span className="text-sm text-gray-700">in</span>
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 ring-1 ring-gray-200 transition hover:bg-gray-200"
                aria-label="Instagram"
              >
                <span className="text-sm text-gray-700">IG</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} YourCompany. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
