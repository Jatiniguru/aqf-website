import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About AQF | Direct-from-Origin Indian Ingredient Supplier",
  description:
    "AQF is a direct-from-origin Indian ingredient supplier serving B2B food manufacturers, nutraceutical brands and pet food producers in the UK and EU. Learn about our story, supply chain and values.",
  openGraph: {
    title: "About AQF Ingredients",
    description:
      "Direct-from-origin Indian ingredient supplier. BRCGS, FSSC 22000 and Kosher certified. No middlemen.",
    images: [{ url: "/images/about/vitaly-gariev-bWso5d2Drlo-unsplash.jpg" }],
  },
};

const values = [
  {
    title: "Transparency",
    description:
      "Every certificate, every origin document, every test result is available to our customers. No compliance claims without documentation to back them.",
  },
  {
    title: "Direct Supply",
    description:
      "We eliminate broker layers by building direct relationships with Indian farms and certified processing facilities. Shorter chain means better pricing and cleaner traceability.",
  },
  {
    title: "Consistent Quality",
    description:
      "BRCGS AA Grade and FSSC 22000 certified facilities. Batch-specific COA and technical data sheets supplied as standard with every order.",
  },
  {
    title: "Long-term Partnerships",
    description:
      "We are not a spot-market broker. We build long-term supply relationships with manufacturers who value consistency, reliability and a supplier who picks up the phone.",
  },
];

const certifications = [
  {
    name: "BRCGS",
    detail: "AA Grade",
    logo: "/images/trust-bar/BRCGS%20Logo.jpg",
  },
  {
    name: "FSSC 22000",
    detail: "Food Safety Management",
    logo: "/images/trust-bar/FSSC 22000.png",
  },
  {
    name: "ISO 9001",
    detail: "Quality Management 2015",
    logo: "/images/trust-bar/iso-9001-seeklogo.png",
  },
  {
    name: "KLBD Kosher",
    detail: "Full range certified",
    logo: "/images/trust-bar/KLBD.png",
  },
  {
    name: "Halal",
    detail: "Certified",
    logo: "/images/trust-bar/vecteezy_halal-logo-green-and-white_65384070.jpg",
  },
  {
    name: "Spice Board India",
    detail: "Registered exporter",
    logo: "/images/trust-bar/Spice Board India.png",
  },
];

const timeline = [
  {
    year: "2010",
    title: "Founded in India",
    description:
      "AQF began as a farm-direct sourcing operation in Gujarat, building relationships with smallholder farmers growing spices and dried botanicals.",
  },
  {
    year: "2014",
    title: "First UK Export",
    description:
      "Established first direct supply relationships with UK food manufacturers, learning the compliance requirements of the British food industry.",
  },
  {
    year: "2017",
    title: "BRCGS Certification",
    description:
      "Our Indian processing facility achieved BRCGS AA Grade certification, opening the door to major UK retailer and branded food manufacturer supply chains.",
  },
  {
    year: "2019",
    title: "Kosher Range Launch",
    description:
      "Full product range achieved KLBD Kosher certification, enabling supply to Kosher food manufacturers and expanding into the US market.",
  },
  {
    year: "2022",
    title: "EU Market Expansion",
    description:
      "Established distribution partnerships across Germany, Netherlands and France, supported by FSSC 22000 and EU Novel Food compliance.",
  },
  {
    year: "2024",
    title: "Pet Ingredients Range",
    description:
      "Launched dedicated pet-suitable ingredient range following demand from pet food manufacturers seeking high-quality botanical ingredients.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative py-24 bg-[#1D2D44]"
        aria-label="About AQF header"
      >
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/about/vitaly-gariev-bWso5d2Drlo-unsplash.jpg"
            alt="AQF ingredient supply chain"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-3">
            About AQF
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            A Different Kind of Ingredient Supplier
          </h1>
          <p className="text-xl text-[#a0aec0] max-w-2xl leading-relaxed">
            We are not a broker, a trading house or a repackaging operation. AQF
            is a direct-from-origin supplier with full visibility into the supply
            chain from Indian farm to UK/EU delivery.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#FFF8F0]" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                Our Mission
              </p>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6"
              >
                Eliminating the Compliance Gap in Ingredient Sourcing
              </h2>
              <div className="space-y-4 text-[#5C5C5C] leading-relaxed">
                <p>
                  Most ingredient buyers face the same problem: they source from
                  brokers who sourced from other brokers, and no one in the chain
                  can actually answer the compliance questions your quality team
                  asks.
                </p>
                <p>
                  AQF exists to solve that problem. We own the supply chain
                  relationships from farm to UK delivery. When your quality
                  auditor asks for the origin certificate, we have it. When your
                  customer asks about the kosher status, we have the KLBD
                  documentation. When your R&D team needs the particle size
                  distribution, we have the technical data sheet.
                </p>
                <p>
                  That level of documentation clarity is what separates a
                  compliant supply chain from a liability — and it is why AQF
                  customers stay with us long-term.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-sm overflow-hidden">
              <Image
                src="/images/about/vitaly-gariev-bWso5d2Drlo-unsplash.jpg"
                alt="AQF supply chain transparency"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F4EE]" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              How We Work
            </p>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44]"
            >
              Our Operating Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <article
                key={value.title}
                className="bg-white rounded-sm p-8 border border-[#E9E2D6] shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#1D2D44] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#5C5C5C] leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Frisbee / Integrity */}
      <section
        className="py-20 bg-[#FFF8F0]"
        aria-labelledby="integrity-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full min-h-[420px] rounded-sm overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/integrity/vecteezy_a-flying-disc-for-frisbee-fun_30622968.jpg"
                alt="Ultimate Frisbee — the spirit of AQF"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                The Spirit of the Game
              </p>
              <h2
                id="integrity-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-6"
              >
                We Play It Like Frisbee
              </h2>
              <div className="space-y-4 text-[#5C5C5C] leading-relaxed">
                <p>
                  Ultimate Frisbee has no referees. It operates on what the
                  sport calls the &ldquo;Spirit of the Game&rdquo; — the principle that all
                  players are responsible for the integrity of the game, for
                  calling their own fouls honestly and for resolving disputes
                  through respectful communication.
                </p>
                <p>
                  The sport only works because everyone agrees to play fair,
                  without anyone watching. That is the culture we have built at
                  AQF.
                </p>
                <p>
                  We do not claim certifications we cannot document. We do not
                  promise lead times we cannot meet. We do not inflate margins
                  through unnecessary layers. And when something goes wrong — as
                  it sometimes does in manufacturing — we tell you immediately and
                  work to fix it.
                </p>
                <p>
                  This is not idealism. It is how you build a supply business
                  that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-20 bg-[#1D2D44]" aria-labelledby="esg-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-2">
                ESG &amp; Impact
              </p>
              <h2
                id="esg-heading"
                className="text-3xl sm:text-4xl font-bold text-white mb-6"
              >
                Van Kranti: Rooted in Responsible Sourcing
              </h2>
              <div className="space-y-4 text-[#a0aec0] leading-relaxed">
                <p>
                  Van Kranti — meaning &ldquo;forest revolution&rdquo; — is the philosophy
                  behind our sourcing model. We work directly with smallholder
                  farming communities across 12 Indian states who practice
                  sustainable, low-chemical cultivation methods.
                </p>
                <p>
                  Our buying model provides farmers with multi-season purchasing
                  agreements, access to agronomic guidance and fair market prices
                  that are not subject to spot-market volatility. This protects
                  their livelihoods and maintains the quality consistency our
                  customers rely on.
                </p>
                <p>
                  The outcome is a supply chain that is commercially reliable,
                  environmentally considered and socially equitable — documented
                  in our annual sustainability report.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "200+", label: "Farm Partners" },
                  { value: "12", label: "Indian States" },
                  { value: "100%", label: "Traceable" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#3A4E6D]/40 rounded-sm p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-[#F5A26F]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#a0aec0] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-sm overflow-hidden">
                <Image
                  src="/images/esg/congerdesign-plant-4036191_1280.jpg"
                  alt="Sustainable plant cultivation on AQF farm partner"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-64 rounded-sm overflow-hidden mt-8">
                <Image
                  src="/images/esg/onehundredseventyfive-seedlings-7110591_1280.jpg"
                  alt="Young seedlings in Indian nursery — AQF supply chain origin"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 bg-[#F7F4EE]"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Our Journey
            </p>
            <h2
              id="timeline-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44]"
            >
              Building a Direct Supply Chain
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E9E2D6] -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}
                  >
                    <article className="bg-white rounded-sm p-6 border border-[#E9E2D6] shadow-sm">
                      <span className="text-sm font-bold text-[#C46A4A]">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-[#1D2D44] mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed">
                        {item.description}
                      </p>
                    </article>
                  </div>
                  {/* Centre dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#C46A4A] rounded-full border-2 border-white shadow top-6" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-20 bg-[#FFF8F0]"
        aria-labelledby="certifications-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Certifications
            </p>
            <h2
              id="certifications-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
            >
              Compliance You Can Verify
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-xl mx-auto">
              All certificates are current, auditable and available for download
              from our Compliance Hub.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-sm p-6 border border-[#E9E2D6] text-center shadow-sm"
              >
                <div className="relative h-12 w-full mb-3">
                  <Image
                    src={cert.logo}
                    alt={`${cert.name} certification logo`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-bold text-[#1D2D44]">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#5C5C5C] mt-0.5">{cert.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/compliance-hub/" variant="secondary" size="md">
              Access Compliance Hub
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C46A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to work with a supplier who can answer your compliance questions?
          </h2>
          <p className="text-[#F5CDA0] text-lg mb-8 max-w-xl mx-auto">
            Get in touch to discuss your ingredient requirements and receive a
            full documentation pack.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-sm bg-white text-[#C46A4A] hover:bg-[#F7F4EE] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-sm border-2 border-white text-white hover:bg-white hover:text-[#C46A4A] transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
