'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  const handleLogout = () => {
    authClient.signOut();
  };
  return (
    <div className="bg-[#1a2e35] border-b border-slate-700 sticky top-0 z-50">
      <nav className="navbar max-w-7xl mx-auto px-2 md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-amber-500"
            >
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-[#1a2e35] border border-slate-700 rounded-box w-52 text-slate-200"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/all-books">All Books</Link>
              </li>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="flex gap-2 items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Bookworm logo"
              width={30}
              height={30}
              style={{ width: 'auto', height: 'auto' }}
              className="object-contain"
            />
            <h3 className="font-black text-xl text-amber-500 tracking-tighter">
              Bookworm.
            </h3>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-slate-200 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-amber-500 focus:text-amber-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/all-books"
                className="hover:text-amber-500 focus:text-amber-500"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="hover:text-amber-500 focus:text-amber-500"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {!user && (
            <Link
              href="/login"
              className="btn btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white px-5 sm:px-6"
            >
              Login
            </Link>
          )}

          {user && (
            <div className="flex items-center gap-4">
              <div className="avatar placeholder">
                <div className="ring-amber-500 ring-offset-[#1a2e35] w-10 rounded-full ring-2 ring-offset-2 overflow-hidden bg-amber-600 text-white">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-bold">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  )}
                </div>
              </div>

              <button
                className="btn btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white px-5 sm:px-6"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
