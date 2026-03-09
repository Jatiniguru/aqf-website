"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, categories, type Category } from "@/app/data/products";

export default function ProductsClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [petOnly, setPetOnly] = useState(false);

  const filtered = products.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.applications.some((a) => a.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesPet = !petOnly || p.petSuitable;
    return matchesSearch && matchesCategory && matchesPet;
  });

  const hasFilters = search !== "" || activeCategory !== "All" || petOnly;

  return (
    <div>
      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ingredients…"
            className="w-full pl-11 pr-4 py-3 border border-gray-200 text-sm text-[#1D2D44] placeholder-gray-400 focus:outline-none focus:border-[#1D2D44] bg-white"
          />
        </div>
        <label className="flex items-center gap-2.5 cursor-pointer border border-gray-200 px-4 py-3 hover:border-[#1D2D44] transition-colors">
          <input
            type="checkbox"
            checked={petOnly}
            onChange={(e) => setPetOnly(e.target.checked)}
            className="w-4 h-4 accent-[#C46A4A]"
          />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 whitespace-nowrap">
            Pet-suitable only
          </span>
        </label>
      </div>

      {/* Category tabs — Mogutable style */}
      <div className="flex flex-wrap border-b border-gray-200 mb-10 gap-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-3 text-xs font-semibold uppercase tracking-widest border-b-2 -mb-px transition-colors ${
              activeCategory === cat
                ? "border-[#1D2D44] text-[#1D2D44]"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
        {hasFilters && (
          <button
            onClick={() => { setSearch(""); setActiveCategory("All"); setPetOnly(false); }}
            className="ml-auto px-4 py-3 text-xs text-[#C46A4A] hover:text-[#a8593c] font-semibold uppercase tracking-widest flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear
          </button>
        )}
      </div>

      {/* Results count */}
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">
        {filtered.length} of {products.length} ingredients
      </p>

      {/* Product grid — Mogutable style: full-bleed, 4-col */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 border border-gray-100">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-1">No ingredients found</p>
          <p className="text-xs text-gray-300">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
          {filtered.map((product) => (
            <article key={product.id}>
              <Link href={`/products/${product.id}/`} className="block group">
                {/* Full-bleed square image */}
                <div className="relative aspect-square overflow-hidden bg-gray-50 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.petSuitable && (
                    <div className="absolute top-0 left-0 bg-[#1D2D44] text-white text-xs px-2 py-1 uppercase tracking-widest font-semibold">
                      Pet
                    </div>
                  )}
                </div>
                {/* Product info below image */}
                <p className="text-xs text-[#C46A4A] uppercase tracking-widest font-semibold mb-1">
                  {product.category}
                </p>
                <h2 className="text-sm font-bold text-[#1D2D44] uppercase tracking-wide leading-snug mb-1">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-400">{product.format}</p>
              </Link>
            </article>
          ))}
        </div>
      )}

      {/* Quick reference table (desktop only) */}
      <div className="mt-24 hidden lg:block">
        <div className="border-t border-gray-200 pt-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Quick Reference Table</p>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Product</th>
                <th className="text-left py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Category</th>
                <th className="text-left py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Format</th>
                <th className="text-left py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Certifications</th>
                <th className="text-left py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-gray-500">Pet</th>
                <th className="py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 pr-6 font-semibold text-[#1D2D44] text-xs uppercase tracking-wide">
                    {product.name}
                  </td>
                  <td className="py-4 pr-6 text-xs text-gray-500">{product.category}</td>
                  <td className="py-4 pr-6 text-xs text-gray-500">{product.format}</td>
                  <td className="py-4 pr-6">
                    {product.certifications.map((c) => (
                      <span key={c} className="text-xs border border-gray-200 px-2 py-0.5 text-gray-600 mr-1">
                        {c}
                      </span>
                    ))}
                  </td>
                  <td className="py-4 pr-6 text-xs text-gray-400">
                    {product.petSuitable ? "✓" : "—"}
                  </td>
                  <td className="py-4">
                    <Link
                      href={`/products/${product.id}/`}
                      className="text-xs font-semibold uppercase tracking-widest text-[#C46A4A] hover:text-[#1D2D44] transition-colors"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
