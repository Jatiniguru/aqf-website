import type { Metadata } from "next";
import Image from "next/image";
import ProductsClient from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "Ingredient Range | AQF Ingredients",
  description:
    "Browse the full AQF ingredient range: dehydrated vegetables, fruits, herbs and functional botanicals. All Kosher certified. Direct from Indian origin with UK/EU compliance.",
  openGraph: {
    title: "Full Ingredient Range | AQF Ingredients",
    description:
      "Dehydrated vegetables, fruits, herbs and functional botanicals. Kosher certified. Direct from Indian origin.",
    images: [{ url: "/images/products/pexels-caro-lin-3764658-5584413.jpg" }],
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 bg-[#1D2D44]" aria-label="Page header">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/pexels-caro-lin-3764658-5584413.jpg"
            alt="AQF ingredient range"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Ingredient Range
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Direct-from-Origin Ingredients
          </h1>
          <p className="text-lg text-[#a0aec0] max-w-2xl">
            A focused, high-quality range of dehydrated and powdered botanicals
            sourced directly from verified Indian farms. All Kosher certified.
            All fully documented.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["All Kosher Certified", "BRCGS Facility", "COA on Every Order", "Custom Packaging Available"].map(
              (badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold px-3 py-1.5 bg-white/10 text-[#F5CDA0] rounded border border-white/20"
                >
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-16 bg-[#FFF8F0]" aria-label="Product listing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductsClient />
        </div>
      </section>

      {/* CTA band */}
      <section className="py-16 bg-[#F7F4EE] border-t border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2D44] mb-4">
            Cannot find what you need?
          </h2>
          <p className="text-[#5C5C5C] text-lg mb-8 max-w-xl mx-auto">
            We source to specification. If your required ingredient is not listed,
            contact us to discuss custom sourcing options.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact/"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-sm bg-[#C46A4A] hover:bg-[#a8593c] text-white transition-colors"
            >
              Request Custom Sourcing
            </a>
            <a
              href="/compliance-hub/"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-sm border-2 border-[#1D2D44] text-[#1D2D44] hover:bg-[#1D2D44] hover:text-white transition-colors"
            >
              View Compliance Hub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
