'use client';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const NewBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/data.json`);
      const data = await res.json();
      setBooks(data.slice(0, -4));
    };
    fetchBooks();
  }, []);

  return (
    <div className="bg-[#1a2e35] border-y border-slate-700 py-3">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {books.map(book => (
          <div key={book.id} className="flex items-center gap-4 px-10">
            <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
              New Arrivals
            </span>
            <span className="text-amber-500 font-semibold text-sm md:text-base tracking-wide">
              {book.title}
              <span className="text-slate-400 font-normal italic ml-2">
                by {book.author}
              </span>
            </span>
            <span className="text-slate-600 font-bold ml-4 opacity-50">•</span>
          </div>
        ))}
        <div className="flex items-center gap-4 px-10">
          <span className="text-amber-500 font-bold text-sm md:text-base">
            Special Discount on Memberships!
          </span>
          <span className="text-slate-600 font-bold ml-4 opacity-50">•</span>
        </div>
      </Marquee>
    </div>
  );
};

export default NewBooks;
