import Image from 'next/image';
import Link from 'next/link';

const BooksCard = ({ book }) => {
  return (
    <div className="card bg-[#243b44] shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700 group">
      <figure className="px-6 pt-6 bg-[#1a2e35]/50 overflow-hidden">
        <Image
          src={book.image_url}
          height={240}
          width={180}
          alt={book.title}
          className="rounded-lg h-60 w-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </figure>

      <div className="card-body p-5 items-center text-center">
        <h3 className="card-title text-slate-200 text-lg line-clamp-1">
          {book.title}
        </h3>
        <p className="text-slate-400 text-sm italic">{book.author}</p>

        <div className="card-actions mt-4 w-full">
          <Link href={`/all-books/${book.id}`} className="w-full">
            <button className="btn bg-amber-600 hover:bg-amber-700 border-none text-white w-full shadow-lg transition-all duration-300 active:scale-95">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
