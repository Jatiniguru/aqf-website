"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, categoryData, type Category } from "@/app/data/products";

export default function ProductsClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [petOnly, setPetOnly] = useState(false);

  const filtered = products.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.applications.some((a) =>
        a.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;

    const matchesPet = !petOnly || p.petSuitable;

    return matchesSearch && matchesCategory && matchesPet;
  });

  const hasFilters = search !== "" || activeCategory !== "All" || petOnly;

  return (
    <div>
      {/* Search + Pet Filter */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0aec0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="product-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, application, or category…"
              className="w-full pl-11 pr-4 py-3 border border-[#E9E2D6] rounded-lg text-sm text-[#1D2D44] placeholder-[#a0aec0] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-white shadow-sm"
            />
          </div>
          <label className="flex items-center gap-2.5 cursor-pointer bg-white border border-[#E9E2D6] rounded-lg px-4 py-3 shadow-sm hover:border-[#C46A4A] transition-colors">
            <input
              type="checkbox"
              checked={petOnly}
              onChange={(e) => setPetOnly(e.target.checked)}
              className="w-4 h-4 accent-[#C46A4A]"
            />
            <span className="text-sm font-medium text-[#5C5C5C] whitespace-nowrap">
              Pet-suitable only
            </span>
          </label>
        </div>
      </div>

      {/* Category Cards */}
      <div className="mb-10">
        <p className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-widest mb-4">
          Browse by Category
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categoryData.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`relative overflow-hidden rounded-xl aspect-[4/3] group focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:ring-offset-2 transition-all ${
                  isActive
                    ? "ring-3 ring-[#C46A4A] ring-offset-2 scale-[0.98]"
                    : "hover:scale-[0.98]"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-200 ${
                    isActive
                      ? "bg-gradient-to-t from-[#C46A4A]/90 via-[#C46A4A]/40 to-transparent"
                      : "bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80"
                  }`}
                />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-white font-bold text-sm leading-tight">
                    {cat.label}
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">
                    {cat.description}
                  </p>
                </div>
                {/* Active tick */}
                {isActive && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-[#C46A4A]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results bar */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-[#5C5C5C]">
          <span className="font-semibold text-[#1D2D44]">{filtered.length}</span>{" "}
          of {products.length} ingredients
          {activeCategory !== "All" && (
            <span className="ml-1">in <span className="font-medium text-[#1D2D44]">{activeCategory}</span></span>
          )}
        </p>
        {hasFilters && (
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
              setPetOnly(false);
            }}
            className="text-sm text-[#C46A4A] hover:text-[#a8593c] font-medium flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Clear filters
          </button>
        )}
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-[#E9E2D6]">
          <div className="w-14 h-14 bg-[#F7F4EE] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#a0aec0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-[#1D2D44] font-semibold text-lg mb-1">No ingredients found</p>
          <p className="text-sm text-[#a0aec0]">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl border border-[#E9E2D6] shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group"
            >
              {/* Product image */}
              <div className="relative h-48 overflow-hidden bg-[#F7F4EE]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                {/* Badges over image */}
                <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#C46A4A] rounded-full shadow-sm">
                    {product.category}
                  </span>
                  {product.petSuitable && (
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#1D2D44]/90 backdrop-blur-sm text-[#F5CDA0] rounded-full shadow-sm">
                      Pet
                    </span>
                  )}
                </div>
                {/* Certification badge */}
                <div className="absolute top-3 right-3">
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-semibold px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#3A4E6D] rounded-full shadow-sm"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h2 className="text-base font-bold text-[#1D2D44] mb-2 leading-snug">
                  {product.name}
                </h2>
                <p className="text-sm text-[#5C5C5C] leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Quick specs */}
                <div className="flex gap-4 text-xs text-[#5C5C5C] mb-4 pb-4 border-b border-[#F7F4EE]">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#C46A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><span className="font-semibold text-[#1D2D44]">Origin:</span> {product.origin}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#C46A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span><span className="font-semibold text-[#1D2D44]">Format:</span> {product.format}</span>
                  </div>
                </div>

                <Link
                  href={`/products/${product.id}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C46A4A] hover:text-[#a8593c] transition-colors group/link"
                >
                  View Full Specification
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Table view (desktop) */}
      <div className="mt-16 hidden lg:block">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#1D2D44]">Quick Reference Table</h2>
          <span className="text-sm text-[#5C5C5C]">{filtered.length} products shown</span>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#E9E2D6] shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1D2D44] text-white">
                <th className="text-left px-5 py-3.5 font-semibold">Product</th>
                <th className="text-left px-5 py-3.5 font-semibold">Category</th>
                <th className="text-left px-5 py-3.5 font-semibold">Format</th>
                <th className="text-left px-5 py-3.5 font-semibold">Certifications</th>
                <th className="text-left px-5 py-3.5 font-semibold">Pet</th>
                <th className="text-left px-5 py-3.5 font-semibold">Origin</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((product, idx) => (
                <tr
                  key={product.id}
                  className={`border-t border-[#E9E2D6] hover:bg-[#FFF8F0] transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F7F4EE]"
                  }`}
                >
                  <td className="px-5 py-3.5 font-semibold text-[#1D2D44]">
                    {product.name}
                  </td>
                  <td className="px-5 py-3.5 text-[#5C5C5C]">
                    {product.category}
                  </td>
                  <td className="px-5 py-3.5 text-[#5C5C5C]">{product.format}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex gap-1 flex-wrap">
                      {product.certifications.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2 py-0.5 bg-[#F5CDA0] text-[#1D2D44] rounded-full font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    {product.petSuitable ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 bg-[#C46A4A] rounded-full">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-[#E9E2D6]">—</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-[#5C5C5C]">{product.origin}</td>
                  <td className="px-5 py-3.5">
                    <Link
                      href={`/products/${product.id}/`}
                      className="text-xs font-semibold text-[#C46A4A] hover:text-[#a8593c] transition-colors whitespace-nowrap"
                    >
                      View Spec →
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
