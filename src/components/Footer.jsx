'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a2e35] text-slate-200 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Bookworm logo"
                width={30}
                height={30}
                style={{ width: 'auto', height: 'auto' }}
                className="object-contain"
              />
              <h2 className="text-xl font-bold tracking-tight text-amber-500">
                Bookworm
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A seamless and modern web application designed to digitize the
              traditional library experience. Users can explore a vast
              collection of books, filter by categories, and borrow titles
              digitally.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-6">
              Explore Shop
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-amber-500 transition-colors"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="hover:text-amber-500 transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="hover:text-amber-500 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-amber-500 transition-colors"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-amber-500 transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-amber-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-amber-500 transition-colors"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-2">
              Contact Us
            </h3>
            <form
              className="flex flex-col gap-3"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-sm rounded-md bg-[#243b44] border border-slate-600 focus:border-amber-500 text-slate-200 outline-none transition"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-2 text-sm rounded-md bg-[#243b44] border border-slate-600 focus:border-amber-500 text-slate-200 outline-none resize-none transition"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="pt-2">
              <h6 className="text-xs font-semibold text-slate-500 uppercase mb-3">
                Social
              </h6>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <FaTwitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <FaYoutube size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <FaFacebookF size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Bookworm Store. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
