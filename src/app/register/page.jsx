'use client';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (!error) {
      router.push('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-[#1a2e35] px-4 py-10">
      <div className="card bg-[#243b44] w-full max-w-112.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700/50 rounded-2xl">
        <div className="card-body p-8 md:p-10">
          <h2 className="text-center text-4xl font-black text-amber-500 mb-8 tracking-tight">
            Register
          </h2>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label pt-0 pb-1">
                <span className="label-text text-slate-200 font-bold tracking-wide">
                  Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                className="input h-11 bg-[#1a2e35]/50 text-slate-200 border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-full transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pt-0 pb-1">
                <span className="label-text text-slate-200 font-bold tracking-wide">
                  Image URL
                </span>
              </label>
              <input
                name="image"
                type="text"
                className="input h-11 bg-[#1a2e35]/50 text-slate-200 border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-full transition-all"
                placeholder="Image URL"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pt-0 pb-1">
                <span className="label-text text-slate-200 font-bold tracking-wide">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                className="input h-11 bg-[#1a2e35]/50 text-slate-200 border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-full transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pt-0 pb-1">
                <span className="label-text text-slate-200 font-bold tracking-wide">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                className="input h-11 bg-[#1a2e35]/50 text-slate-200 border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-full transition-all"
                placeholder="Enter your password"
                required
              />
              <p className="text-[10px] text-slate-500 mt-2 px-1 leading-relaxed">
                Must be at least 8 characters with 1 uppercase and 1 number
              </p>
            </div>

            <button
              type="submit"
              className="btn h-12 bg-amber-600 hover:bg-amber-700 border-none text-white w-full mt-4 shadow-lg shadow-amber-900/20 font-bold text-lg rounded-lg transition-transform active:scale-95"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
