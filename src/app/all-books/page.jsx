import BooksCard from '@/components/BooksCard';
import SearchFilter from '@/components/SearchFilter';

const AllBooksPage = async ({ searchParams }) => {
  const { category, search } = await searchParams;
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/data.json`);
  const books = await res.json();

  let filteredBooks = books;

  if (category && category !== 'All Categories') {
    filteredBooks = filteredBooks.filter(
      book => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (search) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className="bg-[#1a2e35] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SearchFilter />

        <h1 className="text-3xl font-bold text-slate-200 border-l-4 border-amber-600 pl-4 mb-10 capitalize">
          {category || 'All'} <span className="text-amber-500">Books</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map(book => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
