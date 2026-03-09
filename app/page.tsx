import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "AQF Ingredients | Direct-from-Origin Indian Ingredients",
  description:
    "Stop buying from middlemen. AQF delivers direct-from-origin Indian ingredients with verified UK/EU-grade compliance. BRCGS, FSSC 22000, Kosher certified.",
  openGraph: {
    title: "AQF Ingredients | Direct-from-Origin Indian Ingredients",
    description:
      "Direct-from-origin Indian ingredients with verified UK/EU-grade compliance. Trusted B2B ingredient supplier.",
    images: [{ url: "/images/hero/pexels-cottonbro-5532845.jpg" }],
  },
};

const categories = [
  {
    name: "Vegetables",
    image: "/images/categories/vegetables/pexels-dimitrisc-8821284.jpg",
    description: "Broccoli, Spinach, Carrot, Cauliflower & more",
    count: "8 ingredients",
  },
  {
    name: "Fruits",
    image: "/images/categories/fruits/pexels-enginakyurt-3368291.jpg",
    description: "Cranberry, Apple, Papaya, Pomegranate & more",
    count: "6 ingredients",
  },
  {
    name: "Herbs",
    image: "/images/categories/herbs/pexels-asphotography-105028.jpg",
    description: "Peppermint, Camomile, Fennel, Dandelion & more",
    count: "6 ingredients",
  },
  {
    name: "Spices",
    image: "/images/categories/spices/StockSnap_0UVUXADJQG.jpg",
    description: "Ginger, Orange Peel, Psyllium & functional blends",
    count: "3 ingredients",
  },
  {
    name: "Pet Ingredients",
    image: "/images/categories/pet/pexels-mart-production-8434641.jpg",
    description: "Carrot, Pumpkin, Ginger, Psyllium — pet-certified",
    count: "5 ingredients",
  },
  {
    name: "Kosher Range",
    image: "/images/categories/kosher/pexels-rdne-6116050.jpg",
    description: "Full range KLBD certified for Kosher compliance",
    count: "All products",
  },
];

const whoWeServe = [
  {
    icon: "/images/who-we-serve/industry.png",
    title: "Food Manufacturers",
    description:
      "Supply consistent, specification-compliant vegetable, fruit and herb ingredients for industrial food production at scale.",
  },
  {
    icon: "/images/who-we-serve/medicine-bottle-fill-svgrepo-com.svg",
    title: "Nutraceutical Brands",
    description:
      "Functional botanicals and plant-based powders with full traceability and certificate of analysis for supplement manufacturing.",
  },
  {
    icon: "/images/who-we-serve/pet-food-svgrepo-com.svg",
    title: "Pet Food Producers",
    description:
      "Pet-suitable dehydrated vegetables and functional botanicals meeting pet food grade safety and quality standards.",
  },
  {
    icon: "/images/who-we-serve/label-for-present-svgrepo-com.svg",
    title: "Private Label Suppliers",
    description:
      "White-label ingredient sourcing with flexible packaging, custom specifications and compliance documentation included.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: "/images/process/farm-land-icon.png",
    title: "Farm",
    description:
      "Direct relationships with verified Indian farms. Transparent origin documentation, crop traceability and pre-harvest testing.",
  },
  {
    step: "02",
    icon: "/images/process/factory-icon.png",
    title: "Factory",
    description:
      "BRCGS and FSSC 22000 certified processing facilities. Consistent quality control with full batch documentation.",
  },
  {
    step: "03",
    icon: "/images/process/forklift-icon.png",
    title: "UK Delivery",
    description:
      "Direct UK delivery with all customs, compliance and logistics managed. Certificate of Analysis supplied with every order.",
  },
];

const trustLogos = [
  { src: "/images/trust-bar/BRCGS%20Logo.jpg", alt: "BRCGS Certified" },
  { src: "/images/trust-bar/FSSC 22000.png", alt: "FSSC 22000 Certified" },
  { src: "/images/trust-bar/KLBD.png", alt: "KLBD Kosher Certified" },
  { src: "/images/trust-bar/iso-9001-seeklogo.png", alt: "ISO 9001 Certified" },
  { src: "/images/trust-bar/vecteezy_halal-logo-green-and-white_65384070.jpg", alt: "Halal Certified" },
  { src: "/images/trust-bar/Spice Board India.png", alt: "Spice Board India Registered" },
  { src: "/images/trust-bar/Badatz-Beit-Yosef.png", alt: "Badatz Beit Yosef Certified" },
  { src: "/images/trust-bar/Badatz-Jerusalem.jpg", alt: "Badatz Jerusalem Certified" },
  { src: "/images/trust-bar/Badatz-Mehadrin.jpg", alt: "Badatz Mehadrin Certified" },
];

const technicalInsights = [
  {
    title: "Understanding Moisture Specifications",
    category: "Technical Brief",
    excerpt:
      "Why moisture content below 8% matters for shelf-life, micro-safety and specification compliance in dried botanical ingredients.",
  },
  {
    title: "Kosher Certification in B2B Supply Chains",
    category: "Compliance Note",
    excerpt:
      "KLBD Kosher certification requirements for ingredient suppliers and what B2B buyers need to verify before onboarding.",
  },
  {
    title: "Psyllium Husk: Regulatory Landscape in the EU",
    category: "Regulatory Brief",
    excerpt:
      "A review of EU Novel Food regulations, EFSA health claims and labelling requirements for psyllium husk in finished products.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[620px] flex items-center"
        aria-label="Hero"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/pexels-cottonbro-5532845.jpg"
            alt="Indian spices and ingredients in a manufacturing facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1D2D44]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-4">
              B2B Ingredient Supplier — India to UK/EU
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Direct-from-Origin Indian Ingredients.{" "}
              <span className="text-[#F5A26F]">
                Verified UK/EU-Grade Compliance.
              </span>
            </h1>
            <p className="text-xl text-[#F5CDA0] font-medium mb-4">
              Premium Indian Ingredients for Food, Nutraceutical &amp; Pet Nutrition — including Kosher-certified options.
            </p>
            <p className="text-lg text-[#E2D5C3] leading-relaxed mb-10 max-w-2xl">
              Stop buying from middlemen who cannot answer your compliance
              questions. AQF supplies certified dehydrated vegetables, fruits,
              herbs and functional botanicals direct from Indian origin — with
              full traceability documentation included as standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold rounded-lg bg-[#C46A4A] hover:bg-[#a8593c] text-white transition-colors shadow-lg shadow-[#C46A4A]/30"
              >
                Request Quote &amp; Specs
              </Link>
              <Link
                href="/products/"
                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#1D2D44] transition-colors"
              >
                View Ingredients
              </Link>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              <span className="text-xs font-bold text-[#1D2D44] uppercase tracking-widest mr-3 flex-shrink-0">
                Certified by:
              </span>
              {trustLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="relative h-10 w-20 flex-shrink-0 bg-white rounded border border-gray-100 p-1"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-1"
                    loading="lazy"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section
        className="py-20 bg-[#F1F5F9]"
        aria-labelledby="categories-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Our Range
            </p>
            <h2
              id="categories-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
            >
              Ingredient Categories
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-2xl">
              A focused range of high-quality dehydrated and powdered ingredients
              sourced directly from verified Indian farms and processing
              facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href="/products/"
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} ingredients`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D2D44]/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-medium text-[#F5CDA0] bg-[#C46A4A] px-2 py-0.5 rounded">
                      {cat.count}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1D2D44] mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#5C5C5C]">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/products/" variant="secondary" size="md">
              View Full Ingredient Range
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        className="py-20 bg-[#F8FAFC]"
        aria-labelledby="who-we-serve-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Who We Serve
            </p>
            <h2
              id="who-we-serve-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
            >
              Built for B2B Ingredient Buyers
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-2xl">
              AQF works exclusively with manufacturers, brands and suppliers who
              require consistent quality, full documentation and reliable supply
              chain transparency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoWeServe.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-sm p-6 shadow-sm border border-[#E9E2D6]"
              >
                <div className="w-12 h-12 mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1D2D44] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The AQF Direct Link */}
      <section
        className="py-20 bg-[#1D2D44]"
        aria-labelledby="direct-link-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-2">
              The AQF Direct Link
            </p>
            <h2
              id="direct-link-heading"
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Farm to UK Delivery — No Middlemen
            </h2>
            <p className="text-[#a0aec0] text-lg max-w-2xl mx-auto">
              Our supply chain is intentionally short. Each step is documented,
              certified and transparent — so you can answer your own customers&apos;
              compliance questions with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="text-center bg-[#3A4E6D]/40 rounded-sm p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <Image
                    src={step.icon}
                    alt={`${step.title} process icon`}
                    fill
                    className="object-contain brightness-[2]"
                    loading="lazy"
                  />
                </div>
                <div className="text-[#F5CDA0] text-xs font-bold uppercase tracking-widest mb-1">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#a0aec0] leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-sm border-2 border-white text-white hover:bg-white hover:text-[#1D2D44] transition-colors"
            >
              Learn About Our Supply Chain
            </Link>
          </div>
        </div>
      </section>

      {/* Integrity & Culture */}
      <section
        className="py-20 bg-[#F8FAFC]"
        aria-labelledby="integrity-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/integrity/frisbee-photo.png"
                alt="AQF team playing Ultimate Frisbee — a symbol of how we operate: open, direct, no hidden complexity"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                Integrity &amp; Culture
              </p>
              <h2
                id="integrity-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6"
              >
                We Play It Like Frisbee
              </h2>
              <div className="space-y-4 text-[#5C5C5C] leading-relaxed">
                <p>
                  There is a reason we reference Frisbee. In ultimate Frisbee,
                  there are no referees. Players self-officiate, call their own
                  fouls and resolve disputes through honest conversation. The
                  game only works because everyone agrees to play with integrity.
                </p>
                <p>
                  That is how we run AQF. No inflated margins hidden behind
                  broker layers. No certifications claimed without documentation
                  to support them. No compliance promises that dissolve when you
                  ask for the paperwork.
                </p>
                <p>
                  When you buy from AQF, you know exactly what you are getting,
                  where it comes from and why it meets the specification — because
                  we have built a supply chain where that information is always
                  available.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton href="/about/" variant="primary" size="md">
                  About AQF
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG & Impact */}
      <section className="py-20 bg-[#F1F5F9]" aria-labelledby="esg-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                ESG &amp; Impact
              </p>
              <h2
                id="esg-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6"
              >
                Van Kranti — The Farm Revolution
              </h2>
              <div className="space-y-4 text-[#5C5C5C] leading-relaxed">
                <p>
                  Van Kranti, meaning &ldquo;forest revolution&rdquo; in Hindi, underpins
                  our sourcing philosophy. We work with farming communities in
                  India that practice sustainable cultivation — protecting soil
                  health, minimising chemical inputs and preserving biodiversity.
                </p>
                <p>
                  Buying from AQF means your supply chain supports smallholder
                  farmers who receive fair prices, access to better practices and
                  long-term purchasing relationships. This is documented in our
                  annual ESG report.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "200+", label: "Farm Partners" },
                  { value: "12", label: "Indian States" },
                  { value: "100%", label: "Traceable Origin" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-sm p-4 text-center border border-[#E9E2D6]"
                  >
                    <div className="text-2xl font-bold text-[#C46A4A]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#5C5C5C] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href="/about/" variant="secondary" size="md">
                  Read Our ESG Approach
                </CTAButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-sm overflow-hidden">
                <Image
                  src="/images/esg/congerdesign-plant-4036191_1280.jpg"
                  alt="Sustainable Indian farming practices"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 rounded-sm overflow-hidden mt-8">
                <Image
                  src="/images/esg/onehundredseventyfive-seedlings-7110591_1280.jpg"
                  alt="Seedlings — the beginning of AQF traceable supply chain"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Insights */}
      <section
        className="py-20 bg-[#F8FAFC]"
        aria-labelledby="insights-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                Technical Insights
              </p>
              <h2
                id="insights-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44]"
              >
                For Ingredient Buyers &amp; Formulators
              </h2>
            </div>
            <CTAButton href="/compliance-hub/" variant="outline" size="sm">
              View All Resources
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalInsights.map((insight) => (
              <article
                key={insight.title}
                className="bg-white rounded-sm p-6 shadow-sm border border-[#E9E2D6]"
              >
                <span className="text-xs font-semibold text-[#C46A4A] uppercase tracking-wide">
                  {insight.category}
                </span>
                <h3 className="text-lg font-bold text-[#1D2D44] mt-2 mb-3">
                  {insight.title}
                </h3>
                <p className="text-sm text-[#5C5C5C] leading-relaxed">
                  {insight.excerpt}
                </p>
                <Link
                  href="/compliance-hub/"
                  className="inline-block mt-4 text-sm font-medium text-[#C46A4A] hover:text-[#a8593c] transition-colors"
                >
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Hub Preview */}
      <section
        className="py-20 bg-[#1D3A5F]"
        aria-labelledby="compliance-preview-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-2">
                Compliance Hub
              </p>
              <h2
                id="compliance-preview-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
              >
                All Documentation.
                <br />
                Always Available.
              </h2>
              <p className="text-[#a0aec0] text-lg mb-8 leading-relaxed">
                Access certificates, technical data sheets, specifications and
                audit reports through our compliance portal. Every product has a
                complete documentation pack ready for your quality team.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "BRCGS AA Grade",
                  "FSSC 22000",
                  "ISO 9001:2015",
                  "KLBD Kosher",
                  "Halal Certified",
                  "Spice Board India",
                ].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 text-sm text-[#e2d5c3]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F5A26F] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {cert}
                  </div>
                ))}
              </div>
              <CTAButton href="/compliance-hub/" variant="primary" size="md">
                Access Compliance Hub
              </CTAButton>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-sm overflow-hidden">
              <Image
                src="/images/compliance/abdouj-a4-4279517_1280.jpg"
                alt="Compliance documentation and certification management"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1D3A5F]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Section */}
      <section
        className="py-20 bg-[#F8FAFC]"
        aria-labelledby="inquiry-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                Get Started
              </p>
              <h2
                id="inquiry-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
              >
                Request a Quote or Sample
              </h2>
              <p className="text-[#5C5C5C] text-lg mb-8 leading-relaxed">
                Tell us what you are looking for. We will respond with pricing,
                specifications and lead times within one working day.
              </p>
              <div className="space-y-3">
                {[
                  "Full COA and specification sheet with every quote",
                  "Minimum order quantities from 20kg",
                  "Sample service available on request",
                  "Custom packaging and private label options",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
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
                    <span className="text-[#5C5C5C] text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-sm shadow-sm border border-[#E9E2D6] p-8">
              <h3 className="text-xl font-bold text-[#1D2D44] mb-6">
                Quick Enquiry
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1">
                      First Name
                    </label>
                    <div className="w-full h-10 bg-[#F1F5F9] rounded-sm border border-[#E9E2D6]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1">
                      Company
                    </label>
                    <div className="w-full h-10 bg-[#F1F5F9] rounded-sm border border-[#E9E2D6]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1">
                    Email
                  </label>
                  <div className="w-full h-10 bg-[#F1F5F9] rounded-sm border border-[#E9E2D6]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1">
                    Ingredient(s) of Interest
                  </label>
                  <div className="w-full h-24 bg-[#F1F5F9] rounded-sm border border-[#E9E2D6]" />
                </div>
                <Link
                  href="/contact/"
                  className="block w-full text-center py-3 bg-[#C46A4A] hover:bg-[#a8593c] text-white font-semibold rounded-sm transition-colors text-sm"
                >
                  Complete Enquiry Form &rarr;
                </Link>
                <p className="text-xs text-[#5C5C5C] text-center">
                  Full form with file upload and detailed requirements on the
                  contact page
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
