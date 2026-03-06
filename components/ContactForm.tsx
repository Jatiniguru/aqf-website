"use client";

import { useState, FormEvent } from "react";

const productOptions = [
  "Broccoli Powder",
  "Asparagus Flour",
  "Cauliflower Powder",
  "Carrot Flakes & Powder",
  "Spinach Powder",
  "Green Beans (Dried)",
  "Parsnip Powder",
  "Pumpkin Powder",
  "Cranberry (Dried)",
  "Apple Pieces",
  "Papaya (Dried)",
  "Banana Chips",
  "Orange (Peel & Powder)",
  "Pomegranate Peel Cut",
  "Dill Seed",
  "Fennel",
  "Peppermint",
  "Camomile Powder",
  "Dandelion Herb",
  "Mixed Herbs",
  "Ginger Powder",
  "Psyllium Seed Husk Powder",
  "Orange Peel Powder",
  "Other / Custom Sourcing",
];

const enquiryTypes = [
  "Request Quote",
  "Request Sample",
  "Request Technical Specification",
  "Request Compliance Documentation",
  "Supplier Approval Documentation",
  "General Enquiry",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    enquiryType: "",
    products: [] as string[],
    quantity: "",
    message: "",
    gdpr: false,
  });

  const handleProductToggle = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission (replace with actual endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real deployment, this would POST to a form handler service
    // e.g., Formspree, Netlify Forms, or a serverless function
    console.log("Form submitted:", formData);

    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-[#F5CDA0] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#C46A4A]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#1D2D44] mb-3">
          Enquiry Received
        </h2>
        <p className="text-[#5C5C5C] text-lg max-w-md mx-auto">
          Thank you for your enquiry. Our team will respond within one working
          day with pricing, specifications and availability.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              company: "",
              jobTitle: "",
              phone: "",
              enquiryType: "",
              products: [],
              quantity: "",
              message: "",
              gdpr: false,
            });
          }}
          className="mt-6 text-sm font-semibold text-[#C46A4A] hover:text-[#a8593c]"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Contact Details */}
      <fieldset>
        <legend className="text-lg font-bold text-[#1D2D44] mb-4 pb-2 border-b border-[#E9E2D6] w-full">
          Your Details
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
            >
              First Name <span className="text-[#C46A4A]">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
              placeholder="Jane"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
            >
              Last Name <span className="text-[#C46A4A]">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
              placeholder="Smith"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
            >
              Business Email <span className="text-[#C46A4A]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
              placeholder="jane@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
              placeholder="+44 7700 000000"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
            >
              Company <span className="text-[#C46A4A]">*</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label
              htmlFor="jobTitle"
              className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
            >
              Job Title
            </label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
              placeholder="Procurement Manager"
            />
          </div>
        </div>
      </fieldset>

      {/* Enquiry Type */}
      <fieldset>
        <legend className="text-lg font-bold text-[#1D2D44] mb-4 pb-2 border-b border-[#E9E2D6] w-full">
          Enquiry Type
        </legend>
        <div>
          <label
            htmlFor="enquiryType"
            className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
          >
            What are you looking for? <span className="text-[#C46A4A]">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
          >
            <option value="">Select enquiry type...</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Product Selection */}
      <fieldset>
        <legend className="text-lg font-bold text-[#1D2D44] mb-4 pb-2 border-b border-[#E9E2D6] w-full">
          Products of Interest
        </legend>
        <p className="text-sm text-[#5C5C5C] mb-4">
          Select all that apply. If your product is not listed, select &ldquo;Other /
          Custom Sourcing&rdquo; and add details below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {productOptions.map((product) => (
            <label
              key={product}
              className={`flex items-center gap-2 px-3 py-2 rounded-sm border cursor-pointer text-sm transition-colors ${
                formData.products.includes(product)
                  ? "bg-[#F5CDA0] border-[#C46A4A] text-[#1D2D44]"
                  : "bg-white border-[#E9E2D6] text-[#5C5C5C] hover:border-[#C46A4A]"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.products.includes(product)}
                onChange={() => handleProductToggle(product)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 border rounded flex-shrink-0 flex items-center justify-center ${
                  formData.products.includes(product)
                    ? "bg-[#C46A4A] border-[#C46A4A]"
                    : "border-[#E9E2D6]"
                }`}
              >
                {formData.products.includes(product) && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              {product}
            </label>
          ))}
        </div>

        {/* Quantity */}
        <div className="mt-4">
          <label
            htmlFor="quantity"
            className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
          >
            Estimated Quantity / Frequency
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0]"
            placeholder="e.g. 100kg per month, or 500kg one-off"
          />
        </div>
      </fieldset>

      {/* Message */}
      <fieldset>
        <legend className="text-lg font-bold text-[#1D2D44] mb-4 pb-2 border-b border-[#E9E2D6] w-full">
          Additional Information
        </legend>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-[#5C5C5C] uppercase tracking-wide mb-1"
          >
            Message / Specification Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-[#E9E2D6] rounded-sm text-sm text-[#1D2D44] focus:outline-none focus:ring-2 focus:ring-[#C46A4A] focus:border-transparent bg-[#FFF8F0] resize-none"
            placeholder="Please include any specific requirements: particle size, certifications needed, application, delivery location, timeline..."
          />
        </div>
      </fieldset>

      {/* GDPR */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="gdpr"
            required
            checked={formData.gdpr}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 accent-[#C46A4A] flex-shrink-0"
          />
          <span className="text-sm text-[#5C5C5C] leading-relaxed">
            I agree to AQF processing my information to respond to this enquiry.
            I understand my data will be held securely and not shared with third
            parties. <span className="text-[#C46A4A]">*</span>
          </span>
        </label>
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting" || !formData.gdpr}
          className="w-full sm:w-auto px-10 py-4 bg-[#C46A4A] hover:bg-[#a8593c] disabled:bg-[#a0aec0] disabled:cursor-not-allowed text-white font-semibold rounded-sm transition-colors text-sm"
        >
          {status === "submitting" ? "Sending Enquiry..." : "Submit Enquiry"}
        </button>
        <p className="text-xs text-[#a0aec0] mt-2">
          We respond to all B2B enquiries within one working day.
        </p>
      </div>
    </form>
  );
}
