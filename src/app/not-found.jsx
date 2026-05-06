import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#1a2e35] text-slate-200 px-6">
      <h1 className="text-7xl font-black text-amber-500">404</h1>
      <h2 className="text-2xl font-bold mt-2">Page Not Found</h2>
      <p className="text-slate-500 mt-2 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 btn btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white px-6"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
