import BooksCard from '@/components/BooksCard';

const AllBooksPage = async () => {
  const res = await fetch('http://localhost:3000/data.json');
  const books = await res.json();

  return (
    <div className="bg-[#1a2e35] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-200 border-l-4 border-amber-600 pl-4">
            All <span className="text-amber-500">Books</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map(book => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
