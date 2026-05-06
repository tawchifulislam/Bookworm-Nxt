import Image from 'next/image';

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  });
  const books = await res.json();
  const book = books.find(book => book.id == id);

  if (!book)
    return (
      <div className="min-h-screen bg-[#1a2e35] flex items-center justify-center text-white">
        Book not found!
      </div>
    );

  return (
    <div className="min-h-screen bg-[#1a2e35] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-amber-500/20 blur-2xl rounded-lg group-hover:bg-amber-500/30 transition duration-500" />
              <Image
                src={book.image_url}
                alt={book.title}
                width={350}
                height={500}
                className="relative rounded-xl shadow-2xl border border-slate-700 object-cover w-75 md:w-87.5 transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-600/10 border border-amber-600/30 text-amber-500 text-sm font-semibold uppercase tracking-wider">
              {book.category}
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {book.title}
            </h1>

            <p className="text-2xl text-amber-500 font-medium">
              <span className="text-slate-500 font-normal">by</span>{' '}
              {book.author}
            </p>

            <div className="prose prose-invert max-w-none">
              <div className="bg-[#243b44]/50 p-6 md:p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-inner">
                <p className="text-slate-300 text-lg leading-relaxed italic">
                  &ldquo;{book.description}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-slate-100 font-bold text-xl tracking-tight">
                  Stock: {book.available_quantity}{' '}
                  <span className="text-slate-400 font-normal text-base">
                    Copies Available
                  </span>
                </span>
              </div>

              <button className="btn btn-lg bg-amber-600 hover:bg-amber-700 border-none text-white px-12 rounded-xl shadow-lg shadow-amber-600/20 transition-all hover:-translate-y-1 active:scale-95">
                Borrow This Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
