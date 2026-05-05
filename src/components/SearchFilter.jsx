'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const SearchFilter = () => {
  const [searchInp, setSearchInp] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (searchInp) {
      params.set('search', searchInp);
    } else {
      params.delete('search');
    }
    router.push(`/all-books?${params.toString()}`);
  };

  const handleCategory = category => {
    const params = new URLSearchParams(searchParams);
    if (category !== 'All Categories') {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    router.push(`/all-books?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12 max-w-5xl mx-auto w-full">
      <div className="flex w-full md:flex-1 relative">
        <input
          onChange={e => setSearchInp(e.target.value)}
          type="text"
          placeholder="Search books by title..."
          className="w-full pl-5 pr-28 py-3 bg-[#243b44] border border-slate-700 rounded-xl text-slate-200 outline-none focus:border-amber-500 transition-all shadow-xl"
        />
        <button
          onClick={handleSearch}
          className="absolute right-1 top-1 bottom-1 px-6 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2"
        >
          <HiOutlineSearch /> Search
        </button>
      </div>

      <select
        onChange={e => handleCategory(e.target.value)}
        className="select w-full md:w-64 bg-[#243b44] border-slate-700 text-slate-200 focus:border-amber-500 rounded-xl shadow-xl h-12.5"
      >
        <option>All Categories</option>
        <option>Story</option>
        <option>Tech</option>
        <option>Science</option>
      </select>
    </div>
  );
};

export default SearchFilter;
