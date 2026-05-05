'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

export default function SignInPage() {
  const onSubmit = async e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

    console.log({ data, error });
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-[#1a2e35] px-4">
      <div className="card bg-[#243b44] w-full max-w-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700/50 rounded-2xl">
        <div className="card-body p-10">
          <h1 className="text-center text-4xl font-black text-amber-500 mb-10 tracking-tight">
            Login
          </h1>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label pt-0 pb-2">
                <span className="label-text text-slate-200 font-bold tracking-wide">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input h-12 bg-[#1a2e35]/50 text-slate-200 border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-full transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pt-0 pb-2">
                <span className="label-text text-slate-200 font-bold tracking-wide">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input h-12 bg-[#1a2e35]/50 text-slate-200 border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-full transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="btn h-12 bg-amber-600 hover:bg-amber-700 border-none text-white mt-4 w-full shadow-lg shadow-amber-900/20 font-bold text-lg rounded-lg transition-transform active:scale-95"
            >
              Login
            </button>
          </form>

          <div className="divider before:bg-slate-700 after:bg-slate-700 text-slate-500 text-[10px] font-bold my-8">
            OR
          </div>

          <p className="text-center text-sm text-slate-300">
            New here?{' '}
            <Link
              href="/register"
              className="text-amber-500 font-bold hover:text-amber-400 transition-colors ml-1"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
