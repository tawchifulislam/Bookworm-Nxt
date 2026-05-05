import Link from 'next/link';

const Story = () => {
  return (
    <div className="bg-[#1a2e35] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-200 border-l-4 border-amber-600 pl-4">
          The Story of{' '}
          <span className="text-amber-500">The Unwritten Chapter</span>
        </h2>

        <div className="card bg-[#243b44] border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="card-body p-8 md:p-14">
            <h3 className="text-2xl md:text-3xl font-serif italic text-amber-500 mb-8 text-center">
              The Traveler and the Blank Book
            </h3>

            <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
              <p>
                A weary traveler once climbed the highest peak in the world,
                seeking a legendary library that held the secret to a perfect
                life. After years of searching, he found an old man sitting
                before a single, golden book.
              </p>

              <p>
                With trembling hands, the traveler opened the book, only to find
                that every single page was blank. Confused and heartbroken, he
                asked, &quot;Is this a joke? Where is the wisdom?&quot;
              </p>

              <div className="bg-[#1a2e35] p-6 rounded-xl border-l-4 border-amber-500 my-8">
                <p className="text-slate-200 italic font-medium">
                  The old man smiled and whispered, &quot;The universe has
                  provided the ink and the paper, but only you can hold the pen.
                  The most beautiful story is the one you haven&apos;t lived
                  yet.&quot;
                </p>
              </div>

              <p>
                The traveler realized then that books are not just maps of where
                others have been, but mirrors reflecting who we can become. He
                didn&apos;t need a secret; he needed the courage to write his
                own journey.
              </p>

              <p>
                He walked back down the mountain, not as a seeker, but as a
                creator. For he knew that{' '}
                <span className="text-amber-400 font-bold">
                  every great treasure begins with the simple act of turning the
                  first page.
                </span>
              </p>

              <div className="pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-slate-400 text-sm italic">
                  - Find the pen for your story at Bookworm
                </span>
                <Link
                  href="/all-books"
                  className="btn btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white px-6"
                >
                  Explore Books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
