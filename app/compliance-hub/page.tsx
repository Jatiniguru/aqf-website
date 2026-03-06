import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Compliance Hub | AQF Ingredients",
  description:
    "Access AQF compliance documentation: BRCGS certificates, FSSC 22000, Kosher certification, technical data sheets, COA templates and regulatory guidance for UK/EU ingredient buyers.",
  openGraph: {
    title: "Compliance Hub | AQF Ingredients",
    description:
      "All compliance documentation for AQF ingredients. BRCGS, FSSC 22000, Kosher, Halal. Available to download.",
    images: [{ url: "/images/compliance/abdouj-a4-4279517_1280.jpg" }],
  },
};

const certifications = [
  {
    name: "BRCGS",
    grade: "AA Grade",
    scope: "Dried botanical ingredients, dehydrated vegetables and fruits",
    standard: "BRC Global Standard for Food Safety Issue 9",
    logo: "/images/trust-bar/BRCGS%20Logo.jpg",
    color: "#1D2D44",
  },
  {
    name: "FSSC 22000",
    grade: "Certified",
    scope: "Food safety management system — processing and storage",
    standard: "ISO 22000 + PAS 220",
    logo: "/images/trust-bar/FSSC 22000.png",
    color: "#3A4E6D",
  },
  {
    name: "ISO 9001",
    grade: "2015",
    scope: "Quality management across all operations",
    standard: "ISO 9001:2015",
    logo: "/images/trust-bar/iso-9001-seeklogo.png",
    color: "#1D3A5F",
  },
  {
    name: "KLBD Kosher",
    grade: "Full Range",
    scope: "All products in the AQF ingredient range",
    standard: "KLBD (London Beth Din) Kosher certification",
    logo: "/images/trust-bar/KLBD.png",
    color: "#2D5016",
  },
  {
    name: "Halal",
    grade: "Certified",
    scope: "Selected products — confirm on enquiry",
    standard: "HMC / IFANCA compliant",
    logo: "/images/trust-bar/vecteezy_halal-logo-green-and-white_65384070.jpg",
    color: "#1a5c1a",
  },
  {
    name: "Spice Board India",
    grade: "Registered",
    scope: "Export registration for all spice and herb products",
    standard: "Government of India — Spices Board",
    logo: "/images/trust-bar/Spice Board India.png",
    color: "#8B4513",
  },
];

const documents = [
  {
    category: "Quality & Food Safety",
    items: [
      {
        name: "BRCGS Certificate",
        type: "PDF",
        description: "Current BRCGS AA Grade food safety certificate",
      },
      {
        name: "FSSC 22000 Certificate",
        type: "PDF",
        description: "Food Safety System Certification — processing facility",
      },
      {
        name: "ISO 9001:2015 Certificate",
        type: "PDF",
        description: "Quality management system certification",
      },
      {
        name: "Audit Summary Report",
        type: "PDF",
        description: "Most recent third-party audit executive summary",
      },
    ],
  },
  {
    category: "Religious & Dietary Certifications",
    items: [
      {
        name: "KLBD Kosher Certificate",
        type: "PDF",
        description: "Full range Kosher certification from London Beth Din",
      },
      {
        name: "Halal Certificate",
        type: "PDF",
        description: "Halal certification for applicable products",
      },
    ],
  },
  {
    category: "Product Documentation",
    items: [
      {
        name: "Certificate of Analysis Template",
        type: "PDF",
        description: "Standard COA format — batch-specific versions on request",
      },
      {
        name: "Allergen Declaration",
        type: "PDF",
        description:
          "Full allergen matrix for all AQF ingredients and facilities",
      },
      {
        name: "Technical Data Sheet Template",
        type: "PDF",
        description:
          "Specification template — product-specific versions on request",
      },
      {
        name: "Pesticide Residue Testing Policy",
        type: "PDF",
        description: "Testing methodology and frequency documentation",
      },
    ],
  },
  {
    category: "Origin & Traceability",
    items: [
      {
        name: "Spice Board India Registration",
        type: "PDF",
        description: "Registered exporter certificate from Government of India",
      },
      {
        name: "Supplier Approval Policy",
        type: "PDF",
        description: "Our farm and supplier qualification and audit process",
      },
      {
        name: "Origin Declaration Template",
        type: "PDF",
        description: "Standard origin and traceability statement",
      },
    ],
  },
];

const technicalBriefs = [
  {
    title: "Moisture Content & Shelf Life in Dried Botanical Ingredients",
    category: "Technical",
    summary:
      "How moisture specification (typically &lt;8%) directly impacts microbiological safety, shelf life and product integrity in dehydrated vegetable and herb ingredients.",
  },
  {
    title: "Understanding Kosher Certification for B2B Ingredient Buyers",
    category: "Compliance",
    summary:
      "What KLBD Kosher certification means at ingredient level, what documentation your quality team should request and how to verify current certification status.",
  },
  {
    title: "Psyllium Husk in the EU: Novel Food & Health Claims",
    category: "Regulatory",
    summary:
      "Regulatory landscape for psyllium husk in EU food and supplement products, including Novel Food status, EFSA opinions and permitted health claims.",
  },
  {
    title: "BRCGS vs FSSC 22000: What the Difference Means for Buyers",
    category: "Compliance",
    summary:
      "A practical guide for ingredient buyers on interpreting food safety certifications and what each standard covers in the context of dried botanical ingredients.",
  },
  {
    title: "Particle Size in Botanical Powders: Why It Matters",
    category: "Technical",
    summary:
      "How particle size distribution affects solubility, flowability, colour release and application performance in food and nutraceutical powder formulations.",
  },
  {
    title: "Pesticide Residue Monitoring in Indian Agricultural Exports",
    category: "Regulatory",
    summary:
      "EU MRL requirements for imported botanical ingredients, testing approaches and how to interpret pesticide residue data provided by suppliers.",
  },
];

const faqs = [
  {
    q: "How do I request a Certificate of Analysis?",
    a: "Contact our team via the enquiry form with your product of interest and required batch information. Batch-specific COA is supplied with every order as standard. Sample COA templates are available on request before ordering.",
  },
  {
    q: "Are all your products Kosher certified?",
    a: "Yes. Our entire ingredient range carries KLBD (London Beth Din) Kosher certification. The certificate covers the full product range and is renewed annually. Documentation is available on request.",
  },
  {
    q: "What testing do you carry out for pesticide residues?",
    a: "All products are tested against EU MRL requirements before export. Testing is carried out by accredited third-party laboratories. Test reports are available alongside product COA.",
  },
  {
    q: "Can I conduct a supplier audit of your facility?",
    a: "Yes. We welcome customer audits of our Indian processing facilities. Please contact us to arrange dates. Current BRCGS AA Grade status means third-party audit reports are also available as an alternative to conducting your own audit.",
  },
  {
    q: "Are your products suitable for organic certification?",
    a: "We do not currently hold organic certification. If organic sourcing is a requirement, please contact us to discuss availability and current options.",
  },
  {
    q: "Do you supply Technical Data Sheets (TDS) for all products?",
    a: "Yes. A product-specific Technical Data Sheet is available for all ingredients in our range. This includes specification, particle size, moisture, colour, shelf life and storage conditions.",
  },
];

export default function ComplianceHubPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative py-24 bg-[#1D3A5F]"
        aria-label="Compliance Hub header"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/compliance/abdouj-a4-4279517_1280.jpg"
            alt="Compliance documentation"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-3">
            Compliance Hub
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl">
            All the Documentation Your Quality Team Needs
          </h1>
          <p className="text-xl text-[#a0aec0] max-w-2xl leading-relaxed">
            Certificates, technical data sheets, COA templates, regulatory
            briefings and compliance guidance — all in one place.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact/" variant="primary" size="md">
              Request Specific Documentation
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-20 bg-[#FFF8F0]"
        aria-labelledby="certs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Current Certifications
            </p>
            <h2
              id="certs-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
            >
              Our Certification Status
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-2xl">
              All certifications are current and renewed annually. Certificates
              are available to download on request from our compliance team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <article
                key={cert.name}
                className="bg-white rounded-sm border border-[#E9E2D6] overflow-hidden shadow-sm"
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: cert.color }}
                />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-12 w-16 flex-shrink-0">
                      <Image
                        src={cert.logo}
                        alt={`${cert.name} certification`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1D2D44]">{cert.name}</h3>
                      <span className="text-xs font-semibold text-[#C46A4A]">
                        {cert.grade}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#5C5C5C] mb-2">{cert.scope}</p>
                  <p className="text-xs text-[#a0aec0]">{cert.standard}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Document Library */}
      <section
        className="py-20 bg-[#F7F4EE]"
        aria-labelledby="docs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Document Library
            </p>
            <h2
              id="docs-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
            >
              Available Documentation
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-2xl">
              All documents available on request. Contact our compliance team
              with your specific requirements.
            </p>
          </div>

          <div className="space-y-8">
            {documents.map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-bold text-[#1D2D44] mb-4 pb-2 border-b border-[#E9E2D6]">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((doc) => (
                    <div
                      key={doc.name}
                      className="bg-white rounded-sm border border-[#E9E2D6] p-4 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-[#1D2D44] rounded flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[#F5CDA0]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h4 className="font-semibold text-sm text-[#1D2D44]">
                            {doc.name}
                          </h4>
                          <span className="text-xs text-[#a0aec0]">
                            {doc.type}
                          </span>
                        </div>
                        <p className="text-xs text-[#5C5C5C]">
                          {doc.description}
                        </p>
                      </div>
                      <Link
                        href="/contact/"
                        className="text-xs font-semibold text-[#C46A4A] hover:text-[#a8593c] whitespace-nowrap flex-shrink-0"
                        title={`Request ${doc.name}`}
                      >
                        Request
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#1D2D44] rounded-sm p-6 text-center">
            <p className="text-[#F5CDA0] font-semibold mb-2">
              Need all documentation for a new supplier approval?
            </p>
            <p className="text-[#a0aec0] text-sm mb-4">
              We can prepare a full supplier documentation pack for your quality
              team — including all certificates, allergen declarations, COA
              templates and audit reports.
            </p>
            <CTAButton href="/contact/" variant="primary" size="md">
              Request Supplier Documentation Pack
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Technical Briefs */}
      <section
        className="py-20 bg-[#FFF8F0]"
        aria-labelledby="briefs-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
              Technical Library
            </p>
            <h2
              id="briefs-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1D2D44] mb-4"
            >
              Technical &amp; Regulatory Briefs
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-2xl">
              Practical guidance for ingredient buyers, quality managers and
              product development teams working with Indian botanical ingredients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalBriefs.map((brief) => (
              <article
                key={brief.title}
                className="bg-white rounded-sm border border-[#E9E2D6] p-6 shadow-sm"
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${
                    brief.category === "Technical"
                      ? "bg-[#F5CDA0] text-[#1D2D44]"
                      : brief.category === "Regulatory"
                      ? "bg-[#F7F4EE] text-[#3A4E6D]"
                      : "bg-[#1D2D44] text-[#F5CDA0]"
                  }`}
                >
                  {brief.category}
                </span>
                <h3 className="text-base font-bold text-[#1D2D44] mt-3 mb-2">
                  {brief.title}
                </h3>
                <p
                  className="text-sm text-[#5C5C5C] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: brief.summary }}
                />
                <Link
                  href="/contact/"
                  className="inline-block mt-4 text-sm font-semibold text-[#C46A4A] hover:text-[#a8593c] transition-colors"
                >
                  Request full brief &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F4EE]" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#C46A4A] text-sm font-semibold uppercase tracking-widest mb-2">
                FAQs
              </p>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1D2D44]"
              >
                Common Compliance Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article
                  key={faq.q}
                  className="bg-white rounded-sm border border-[#E9E2D6] p-6"
                >
                  <h3 className="font-bold text-[#1D2D44] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#5C5C5C] leading-relaxed">
                    {faq.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1D2D44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to start your supplier approval process?
          </h2>
          <p className="text-[#a0aec0] text-lg mb-8 max-w-xl mx-auto">
            Our compliance team can prepare a complete documentation pack for your
            quality and procurement teams.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/contact/" variant="primary" size="lg">
              Request Documentation Pack
            </CTAButton>
            <Link
              href="/products/"
              className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-sm border-2 border-white text-white hover:bg-white hover:text-[#1D2D44] transition-colors"
            >
              Browse Ingredients
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
