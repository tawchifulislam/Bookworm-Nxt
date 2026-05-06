import BooksCard from '@/components/BooksCard';

const ShortList = async () => {
  const res = await fetch('https://bookworm-orpin.vercel.app/data.json', {
    cache: 'no-store',
  });
  const books = await res.json();
  const shortBooks = books.filter(book => [7, 9, 10, 11].includes(book.id));

  return (
    <div className="bg-[#1a2e35] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-slate-200 border-l-4 border-amber-600 pl-4">
          Books Under <span className="text-amber-500">200 Pages</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {shortBooks.map(book => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortList;
