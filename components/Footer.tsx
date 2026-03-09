import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

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
    { label: "Compliance Hub", href: "/compliance-hub/" },
    { label: "ESG & Impact", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  Info: [
    { label: "Request Quote", href: "/contact/" },
    { label: "Request Sample", href: "/contact/" },
    { label: "Technical Specs", href: "/compliance-hub/" },
    { label: "Certifications", href: "/compliance-hub/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#EAEAEA]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5">
              <div className="bg-white px-3 py-2 rounded">
                <Image
                  src="/images/logo/aqf-logo.webp"
                  alt="AQF Ingredients"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Direct-from-origin Indian ingredients with verified UK/EU-grade compliance. Trusted by B2B manufacturers across Europe.
            </p>
            <div className="space-y-2 mb-5">
              <a href="mailto:info@aqfingredients.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#1D2D44] transition-colors">
                <svg className="w-3.5 h-3.5 text-[#C46A4A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@aqfingredients.com
              </a>
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <svg className="w-3.5 h-3.5 text-[#C46A4A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>UK Distribution Hub<br />Serving UK &amp; EU Markets</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["BRCGS", "FSSC 22000", "ISO 9001", "Kosher", "Halal"].map((cert) => (
                <span key={cert} className="text-xs border border-gray-300 px-2 py-0.5 text-gray-500 font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-800 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-[#1D2D44] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-800 mb-5">
              Newsletter
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Subscribe to receive updates on new ingredients, compliance news and technical insights.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} AQF Ingredients. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex gap-6">
            <Link href="/contact/" className="text-xs text-gray-400 hover:text-[#1D2D44] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact/" className="text-xs text-gray-400 hover:text-[#1D2D44] transition-colors">
              Terms of Use
            </Link>
            <Link href="/compliance-hub/" className="text-xs text-gray-400 hover:text-[#1D2D44] transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
