import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | AQF Ingredients",
  description:
    "Contact AQF to request ingredient quotes, samples, technical specifications or compliance documentation. B2B enquiries responded to within one working day.",
  openGraph: {
    title: "Contact AQF Ingredients",
    description:
      "Request quotes, samples or compliance documentation for AQF ingredients. Respond within one working day.",
    images: [{ url: "/images/inquiry/pexels-burst-374720.jpg" }],
  },
};

const contactDetails = [
  {
    label: "Response Time",
    value: "Within 1 working day",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Minimum Order",
    value: "From 20kg per product",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    ),
  },
  {
    label: "Samples Available",
    value: "Yes — on request",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Documentation",
    value: "COA + TDS included",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative py-20 bg-[#1D2D44]"
        aria-label="Contact header"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/inquiry/pexels-burst-374720.jpg"
            alt="AQF contact and enquiry"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#F5CDA0] text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Start Your Ingredient Enquiry
          </h1>
          <p className="text-xl text-[#a0aec0] max-w-2xl leading-relaxed">
            Tell us what you need. We will respond with pricing, specifications,
            lead times and availability within one working day.
          </p>
        </div>
      </section>

      {/* Contact Overview */}
      <section className="py-12 bg-[#F7F4EE] border-b border-[#E9E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-[#C46A4A] text-white rounded flex items-center justify-center flex-shrink-0">
                  {detail.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide">
                    {detail.label}
                  </p>
                  <p className="text-sm font-medium text-[#1D2D44] mt-0.5">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-[#1D2D44] mb-6">
                  What happens next?
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "We review your enquiry",
                      desc: "Your enquiry is reviewed by our sales team within a few hours of receipt.",
                    },
                    {
                      step: "2",
                      title: "You receive pricing & specs",
                      desc: "We send back a quote with pricing, specification sheet, lead time and MOQ information.",
                    },
                    {
                      step: "3",
                      title: "Sample or order",
                      desc: "You can request a sample before committing to an order. We send samples with full COA.",
                    },
                    {
                      step: "4",
                      title: "Compliance documentation",
                      desc: "Before your first order, we provide a full supplier documentation pack for your quality team.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-7 h-7 bg-[#C46A4A] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#1D2D44]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#5C5C5C] mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications reminder */}
                <div className="mt-8 bg-[#1D2D44] rounded-sm p-5">
                  <h3 className="text-sm font-bold text-white mb-3">
                    Our certifications
                  </h3>
                  <div className="space-y-1.5">
                    {[
                      "BRCGS AA Grade",
                      "FSSC 22000",
                      "ISO 9001:2015",
                      "KLBD Kosher — full range",
                      "Halal Certified",
                      "Spice Board India",
                    ].map((cert) => (
                      <div
                        key={cert}
                        className="flex items-center gap-2 text-xs text-[#a0aec0]"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-[#F5A26F] flex-shrink-0"
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
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-sm border border-[#E9E2D6] shadow-sm p-8">
                <h2 className="text-2xl font-bold text-[#1D2D44] mb-2">
                  Ingredient Enquiry Form
                </h2>
                <p className="text-sm text-[#5C5C5C] mb-8">
                  Fields marked with <span className="text-[#C46A4A]">*</span>{" "}
                  are required.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="h-48 sm:h-64 relative overflow-hidden">
        <Image
          src="/images/inquiry/pexels-burst-374720.jpg"
          alt="AQF ingredient quality"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#1D2D44]/70 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white text-xl font-bold mb-2">
              B2B enquiries only
            </p>
            <p className="text-[#F5CDA0] text-sm">
              AQF supplies exclusively to food manufacturers, nutraceutical
              brands, pet food producers and private label suppliers
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
