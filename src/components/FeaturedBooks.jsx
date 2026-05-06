import BooksCard from './BooksCard';

const FeaturedBooks = async () => {
  const res = await fetch('http://localhost:3000/data.json', {
    cache: 'no-store',
  });
  const books = await res.json();
  const topBooks = books.slice(0, 4);

  return (
    <div className="bg-[#1a2e35] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-slate-200 border-l-4 border-amber-600 pl-4">
          Featured <span className="text-amber-500">Books</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topBooks.map(book => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
