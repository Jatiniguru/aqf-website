import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/app/data/products";
import CTAButton from "@/components/CTAButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | AQF Ingredients",
    };
  }

  return {
    title: `${product.name} | AQF Ingredients`,
    description: `${product.name} — ${product.description.slice(0, 155)}`,
    openGraph: {
      title: `${product.name} | AQF Ingredients`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products (same category, different id)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="bg-[#F7F4EE] border-b border-[#E9E2D6] py-3"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-[#5C5C5C]">
            <li>
              <Link href="/" className="hover:text-[#C46A4A] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-[#E9E2D6]">/</li>
            <li>
              <Link
                href="/products/"
                className="hover:text-[#C46A4A] transition-colors"
              >
                Products
              </Link>
            </li>
            <li className="text-[#E9E2D6]">/</li>
            <li className="font-medium text-[#1D2D44]">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Product Header */}
      <section className="py-16 bg-[#FFF8F0]" aria-label="Product overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-80 lg:h-[480px] rounded-xl overflow-hidden bg-[#F7F4EE] shadow-md">
              <Image
                src={product.image}
                alt={`${product.name} — AQF ingredient`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Details */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold text-[#C46A4A] uppercase tracking-wide bg-[#F5CDA0] px-3 py-1 rounded">
                  {product.category}
                </span>
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-medium px-3 py-1 bg-[#F7F4EE] text-[#3A4E6D] rounded border border-[#E9E2D6]"
                  >
                    {cert}
                  </span>
                ))}
                {product.petSuitable && (
                  <span className="text-xs font-semibold px-3 py-1 bg-[#1D2D44] text-[#F5CDA0] rounded">
                    Pet Suitable
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4">
                {product.name}
              </h1>

              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quick spec table */}
              <div className="bg-white rounded-sm border border-[#E9E2D6] overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: "Origin", value: product.origin },
                      { label: "Format", value: product.format },
                      { label: "Packaging", value: product.packaging },
                      {
                        label: "Certifications",
                        value: product.certifications.join(", "),
                      },
                      {
                        label: "Pet Suitable",
                        value: product.petSuitable ? "Yes" : "No",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={row.label}
                        className={`border-b border-[#E9E2D6] last:border-b-0 ${
                          idx % 2 === 0 ? "bg-white" : "bg-[#F7F4EE]"
                        }`}
                      >
                        <td className="px-4 py-3 font-semibold text-[#1D2D44] w-36">
                          {row.label}
                        </td>
                        <td className="px-4 py-3 text-[#5C5C5C]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap gap-3">
                <CTAButton href="/contact/" variant="primary" size="md">
                  Request Quote &amp; Specs
                </CTAButton>
                <CTAButton href="/contact/" variant="secondary" size="md">
                  Request Sample
                </CTAButton>
              </div>

              <p className="text-xs text-[#5C5C5C] mt-3">
                Full COA and technical data sheet available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section
        className="py-16 bg-[#F7F4EE]"
        aria-labelledby="applications-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2
                id="applications-heading"
                className="text-2xl font-bold text-[#1D2D44] mb-6"
              >
                Typical Applications
              </h2>
              <ul className="space-y-3">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#C46A4A] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#5C5C5C]">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1D2D44] mb-6">
                Compliance &amp; Documentation
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Certificate of Analysis (COA)",
                    desc: "Batch-specific COA available with every order, including full microbiological and chemical profile.",
                  },
                  {
                    title: "Kosher Certificate",
                    desc: "KLBD Kosher certification documentation available on request for all products in our range.",
                  },
                  {
                    title: "Technical Data Sheet",
                    desc: "Detailed specification including moisture, particle size, colour, and shelf-life data.",
                  },
                  {
                    title: "Allergen Declaration",
                    desc: "Full allergen and cross-contamination declaration provided as standard with all enquiries.",
                  },
                ].map((doc) => (
                  <div
                    key={doc.title}
                    className="bg-white rounded-sm p-4 border border-[#E9E2D6]"
                  >
                    <h3 className="font-semibold text-[#1D2D44] mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-[#5C5C5C]">{doc.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/compliance-hub/"
                  className="text-sm font-semibold text-[#C46A4A] hover:text-[#a8593c] transition-colors"
                >
                  Visit our Compliance Hub &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section
          className="py-16 bg-[#FFF8F0]"
          aria-labelledby="related-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-heading"
              className="text-2xl font-bold text-[#1D2D44] mb-8"
            >
              More from {product.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}/`}
                  className="block bg-white rounded-xl border border-[#E9E2D6] overflow-hidden hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="relative h-40 overflow-hidden bg-[#F7F4EE]">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">
                      {rel.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[#3A4E6D] rounded-full font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                      {rel.petSuitable && (
                        <span className="text-xs px-2 py-0.5 bg-[#1D2D44]/90 backdrop-blur-sm text-[#F5CDA0] rounded-full font-medium">
                          Pet
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1D2D44] mb-1">{rel.name}</h3>
                    <p className="text-sm text-[#5C5C5C] mb-3">{rel.format}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#C46A4A] group-hover:text-[#a8593c] transition-colors">
                      View Specification
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#1D2D44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to source {product.name}?
          </h2>
          <p className="text-[#a0aec0] text-lg mb-8 max-w-xl mx-auto">
            Contact our team for pricing, specifications, lead times and sample
            availability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact/" variant="primary" size="lg">
              Request Quote &amp; Specs
            </CTAButton>
            <Link
              href="/products/"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-sm border-2 border-white text-white hover:bg-white hover:text-[#1D2D44] transition-colors"
            >
              Browse All Ingredients
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
