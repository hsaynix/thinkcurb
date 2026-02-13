import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  // Helper to generate the range of page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show page 1, current page, last page, and dots
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav className="flex flex-col items-center gap-6 py-10" aria-label="Pagination">
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <Link
          href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
          className={`flex items-center justify-center px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold transition-all ${
            currentPage === 1 
              ? 'opacity-30 cursor-not-allowed grayscale' 
              : 'hover:border-blue-600 hover:text-blue-600 bg-white shadow-sm'
          }`}
          aria-disabled={currentPage === 1}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </Link>

        {/* Page Numbers */}
        <div className="hidden sm:flex items-center gap-2">
          {pages.map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-3 text-slate-400 font-medium">...</span>
              ) : (
                <Link
                  href={`?page=${page}`}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    currentPage === page
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600'
                  }`}
                >
                  {page}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Next Button */}
        <Link
          href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}
          className={`flex items-center justify-center px-4 py-2 rounded-xl border border-slate-200 text-sm font-bold transition-all ${
            currentPage === totalPages 
              ? 'opacity-30 cursor-not-allowed grayscale' 
              : 'hover:border-blue-600 hover:text-blue-600 bg-white shadow-sm'
          }`}
          aria-disabled={currentPage === totalPages}
        >
          Next
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Progress Indicator for Mobile */}
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
        Page {currentPage} of {totalPages}
      </p>
    </nav>
  );
}