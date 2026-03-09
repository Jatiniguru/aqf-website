"use client";

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full border border-gray-300 bg-white px-3 py-2.5 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D2D44]"
      />
      <button
        type="submit"
        className="w-full bg-[#1D2D44] hover:bg-[#C46A4A] text-white text-xs font-semibold uppercase tracking-widest py-2.5 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
