import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Vegetables", href: "/products/" },
    { label: "Fruits", href: "/products/" },
    { label: "Herbs", href: "/products/" },
    { label: "Functional & Spices", href: "/products/" },
    { label: "Pet Ingredients", href: "/products/" },
    { label: "Kosher Range", href: "/products/" },
  ],
  Company: [
    { label: "About AQF", href: "/about/" },
    { label: "Our Story", href: "/about/" },
    { label: "ESG & Impact", href: "/about/" },
    { label: "Compliance Hub", href: "/compliance-hub/" },
  ],
  Resources: [
    { label: "Compliance Hub", href: "/compliance-hub/" },
    { label: "Technical Specs", href: "/compliance-hub/" },
    { label: "Certifications", href: "/compliance-hub/" },
    { label: "Request Sample", href: "/contact/" },
  ],
  Contact: [
    { label: "Get in Touch", href: "/contact/" },
    { label: "Request Quote", href: "/contact/" },
    { label: "Request Specs", href: "/contact/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1D2D44] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="bg-white rounded-lg px-3 py-2">
                <Image
                  src="/images/logo/aqf-logo.webp"
                  alt="AQF Ingredients"
                  width={140}
                  height={44}
                  className="h-9 w-auto object-contain"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-sm text-[#a0aec0] leading-relaxed">
              Direct-from-origin Indian ingredients. UK/EU-grade compliance.
              Trusted by B2B manufacturers across Europe.
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <p className="text-xs text-[#718096]">Certifications held:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["BRCGS", "FSSC 22000", "ISO 9001", "Kosher", "Halal"].map(
                  (cert) => (
                    <span
                      key={cert}
                      className="text-xs px-2 py-0.5 rounded bg-[#3A4E6D] text-[#F5CDA0] font-medium"
                    >
                      {cert}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#a0aec0] hover:text-[#F5A26F] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#3A4E6D]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#718096]">
              &copy; {new Date().getFullYear()} AQF Ingredients. All rights reserved. Registered in England &amp; Wales.
            </p>
            <div className="flex gap-6">
              <Link
                href="/contact/"
                className="text-xs text-[#718096] hover:text-[#F5A26F] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact/"
                className="text-xs text-[#718096] hover:text-[#F5A26F] transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/compliance-hub/"
                className="text-xs text-[#718096] hover:text-[#F5A26F] transition-colors"
              >
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
