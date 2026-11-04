"use client";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden flex flex-col space-y-3">
      <a 
        href="tel:702-718-2228"
        className="bg-clay text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-clay-dark transition duration-300"
        aria-label="Call Dr. Jan Duffy at 702-718-2228"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      </a>
      <a 
        href="sms:702-718-2228"
        className="bg-ink text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-sage transition duration-300"
        aria-label="Text Dr. Jan Duffy at 702-718-2228"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"/>
        </svg>
      </a>
    </div>
  );
}

