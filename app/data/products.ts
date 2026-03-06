export interface Product {
  id: string;
  name: string;
  category: "Vegetables" | "Fruits" | "Herbs" | "Functional & Spices";
  certifications: string[];
  petSuitable: boolean;
  description: string;
  applications: string[];
  origin: string;
  format: string;
  packaging: string;
  image: string;
}

export const products: Product[] = [
  // Vegetables
  {
    id: "broccoli-powder",
    name: "Broccoli Powder",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Premium spray-dried broccoli powder sourced from Indian farms. High in glucosinolates, vitamin C, and dietary fibre. Ideal for functional food formulations requiring clean-label vegetable nutrition.",
    applications: [
      "Nutraceutical capsules & tablets",
      "Green superfood blends",
      "Functional beverage powders",
      "Soup & sauce mixes",
      "Health bars & snacks",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/vegetables/pexels-dimitrisc-8821284.jpg",
  },
  {
    id: "asparagus-flour",
    name: "Asparagus Flour",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Finely milled asparagus flour derived from premium green asparagus. Rich in asparagine, folate, and prebiotic fibre. Suitable for functional and speciality food applications.",
    applications: [
      "Functional flour blends",
      "Pasta & noodle enrichment",
      "Health supplement powders",
      "Vegetable protein blends",
      "Bakery fortification",
    ],
    origin: "India",
    format: "Fine flour",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/vegetables/pexels-william-greaves-brown-34482881-7149595.jpg",
  },
  {
    id: "cauliflower-powder",
    name: "Cauliflower Powder",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Spray-dried cauliflower powder with neutral flavour profile. Low carbohydrate, keto-friendly ingredient suitable for clean-label formulations. Excellent solubility and dispersibility.",
    applications: [
      "Keto & low-carb blends",
      "Soup & sauce bases",
      "Vegetable supplement powders",
      "Plant-based food formulations",
      "Snack coatings & seasonings",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/individual-product/pexels-polina-tankilevitch-3735174.jpg",
  },
  {
    id: "carrot-flakes-powder",
    name: "Carrot Flakes & Powder",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: true,
    description:
      "Available in both flake and powder formats, our carrot ingredient is rich in beta-carotene, antioxidants, and natural sugars. Dual-certified for human food and premium pet food applications.",
    applications: [
      "Pet food & treats",
      "Human functional supplements",
      "Soup & ready meal components",
      "Baby food formulations",
      "Snack & confectionery colour",
    ],
    origin: "India",
    format: "Flakes or fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/individual-product/pexels-lorena-martinez-1218850-4585560.jpg",
  },
  {
    id: "spinach-powder",
    name: "Spinach Powder",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Vibrant green spinach powder cold-processed to preserve iron, folate, and chlorophyll content. Strong natural colour suitable for food colouring applications and nutritional enrichment.",
    applications: [
      "Natural food colouring",
      "Green superfood powders",
      "Pasta & noodle colouring",
      "Smoothie & beverage mixes",
      "Nutraceutical blends",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/vegetables/pexels-dimitrisc-8821284.jpg",
  },
  {
    id: "green-beans-dried",
    name: "Green Beans (Dried)",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Carefully dried green beans retaining natural fibre, protein and micronutrient content. Clean flavour with firm texture suitable for rehydration in food manufacturing.",
    applications: [
      "Ready meals & soups",
      "Dry food mixes",
      "Vegetable medley blends",
      "Dehydrated meal kits",
      "Snack products",
    ],
    origin: "India",
    format: "Dried whole / pieces",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/vegetables/pexels-william-greaves-brown-34482881-7149595.jpg",
  },
  {
    id: "parsnip-powder",
    name: "Parsnip Powder",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Milled parsnip powder with distinctive sweet, earthy flavour. Rich in dietary fibre, folate and vitamin C. Versatile ingredient for soups, sauces and speciality food products.",
    applications: [
      "Soup & sauce bases",
      "Vegetable seasoning blends",
      "Ready meal components",
      "Functional fibre enrichment",
      "Clean-label flavour systems",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/individual-product/pexels-lisa-stroud-1704618627-28882033.jpg",
  },
  {
    id: "pumpkin-powder",
    name: "Pumpkin Powder",
    category: "Vegetables",
    certifications: ["Kosher"],
    petSuitable: true,
    description:
      "High-quality pumpkin powder rich in beta-carotene, fibre and potassium. Dual-certified for human food and pet food applications. Naturally sweet with excellent functional properties.",
    applications: [
      "Pet food & digestive supplements",
      "Human functional foods",
      "Bakery & confectionery",
      "Baby food formulations",
      "Soup & sauce enrichment",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/individual-product/pexels-su-ji-251768595-31031843.jpg",
  },

  // Fruits
  {
    id: "cranberry-dried",
    name: "Cranberry (Dried)",
    category: "Fruits",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Premium dried cranberries with high proanthocyanidin content. Kosher certified with consistent quality suitable for nutraceutical and food manufacturing applications.",
    applications: [
      "UTI health supplements",
      "Antioxidant blends",
      "Granola & trail mixes",
      "Functional confectionery",
      "Sports nutrition",
    ],
    origin: "India",
    format: "Dried whole / pieces",
    packaging: "20kg cartons / 10kg craft bags",
    image: "/images/categories/fruits/pexels-enginakyurt-3368291.jpg",
  },
  {
    id: "apple-pieces",
    name: "Apple Pieces",
    category: "Fruits",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Clean-label dried apple pieces with natural sweetness and crunch. Consistent sizing suitable for industrial food manufacturing. Rich in pectin and soluble fibre.",
    applications: [
      "Cereal & muesli blends",
      "Fruit snacks & trail mixes",
      "Bakery inclusions",
      "Functional fibre products",
      "Fruit tea blends",
    ],
    origin: "India",
    format: "Dried pieces / diced",
    packaging: "20kg cartons / 10kg craft bags",
    image: "/images/categories/fruits/pexels-valeriya-10323400.jpg",
  },
  {
    id: "papaya-dried",
    name: "Papaya (Dried)",
    category: "Fruits",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Naturally sweet dried papaya containing papain enzyme, vitamin C and antioxidants. Tropical flavour suitable for confectionery, snack and supplement applications.",
    applications: [
      "Digestive enzyme supplements",
      "Tropical snack mixes",
      "Confectionery inclusions",
      "Fruit tea blends",
      "Nutraceutical powders",
    ],
    origin: "India",
    format: "Dried whole / pieces",
    packaging: "20kg cartons / 10kg craft bags",
    image: "/images/categories/fruits/pexels-enginakyurt-3368291.jpg",
  },
  {
    id: "banana-chips",
    name: "Banana Chips",
    category: "Fruits",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Crisp banana chips produced from selected Indian bananas. Natural potassium and energy-dense ingredient suitable for snack and cereal applications. Consistent slice sizing.",
    applications: [
      "Snack & trail mixes",
      "Breakfast cereal inclusions",
      "Energy bar manufacturing",
      "Confectionery coatings",
      "Granola blends",
    ],
    origin: "India",
    format: "Sliced chips",
    packaging: "20kg cartons / 10kg craft bags",
    image: "/images/individual-product/pexels-su-ji-251768595-31031843.jpg",
  },
  {
    id: "orange-peel-powder",
    name: "Orange (Peel & Powder)",
    category: "Fruits",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Available in both peel and powder form, our orange ingredient delivers natural flavour, hesperidin and vitamin C. Clean citrus aroma with functional benefits.",
    applications: [
      "Natural flavour systems",
      "Vitamin C fortification",
      "Functional beverage powders",
      "Bakery & confectionery flavour",
      "Supplement blends",
    ],
    origin: "India",
    format: "Dried peel / fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/fruits/pexels-valeriya-10323400.jpg",
  },
  {
    id: "pomegranate-peel",
    name: "Pomegranate (Peel Cut)",
    category: "Fruits",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Dried pomegranate peel cut rich in ellagic acid, tannins and antioxidants. Functional polyphenol source for nutraceutical and cosmeceutical ingredient applications.",
    applications: [
      "Polyphenol supplements",
      "Antioxidant formulations",
      "Herbal tea blends",
      "Cosmeceutical actives",
      "Functional food enrichment",
    ],
    origin: "India",
    format: "Cut dried peel",
    packaging: "20kg cartons / 10kg craft bags",
    image: "/images/categories/fruits/pexels-enginakyurt-3368291.jpg",
  },

  // Herbs
  {
    id: "dill-seed",
    name: "Dill Seed",
    category: "Herbs",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Aromatic dill seeds with characteristic anise-like flavour. Rich in essential oils including carvone and limonene. Kosher certified for food and nutraceutical manufacturing.",
    applications: [
      "Seasoning blends",
      "Pickling & preservation",
      "Flavour systems",
      "Herbal supplement blends",
      "Bakery inclusions",
    ],
    origin: "India",
    format: "Whole seeds",
    packaging: "25kg woven sacks / 10kg craft bags",
    image: "/images/categories/herbs/pexels-asphotography-105028.jpg",
  },
  {
    id: "fennel",
    name: "Fennel",
    category: "Herbs",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Premium Indian fennel seed with high volatile oil content. Sweet, anise-flavoured with carminative properties. Widely used in food manufacturing and herbal formulations.",
    applications: [
      "Digestive health formulations",
      "Spice & seasoning blends",
      "Herbal tea mixes",
      "Confectionery flavour",
      "Functional supplement blends",
    ],
    origin: "India",
    format: "Whole seeds",
    packaging: "25kg woven sacks / 10kg craft bags",
    image: "/images/categories/herbs/pexels-lilartsy-1793035.jpg",
  },
  {
    id: "peppermint",
    name: "Peppermint",
    category: "Herbs",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "High menthol peppermint herb and powder sourced from premium Indian cultivation. Consistent menthol content suitable for food, beverage and supplement manufacturing.",
    applications: [
      "Herbal tea & infusions",
      "Digestive supplement blends",
      "Flavour systems",
      "Confectionery & chewing gum",
      "Functional beverage powders",
    ],
    origin: "India",
    format: "Dried herb / powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/herbs/pexels-asphotography-105028.jpg",
  },
  {
    id: "camomile-powder",
    name: "Camomile Powder",
    category: "Herbs",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Finely milled camomile powder from premium chamomile flowers. Rich in apigenin and antioxidants. Widely used in relaxation supplement and functional food formulations.",
    applications: [
      "Sleep & relaxation supplements",
      "Herbal tea blends",
      "Functional beverage powders",
      "Cosmeceutical formulations",
      "Nutraceutical capsules",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/herbs/pexels-lilartsy-1793035.jpg",
  },
  {
    id: "dandelion-herb",
    name: "Dandelion Herb",
    category: "Herbs",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Premium dried dandelion herb containing inulin, taraxacin and bitter compounds. Supports liver health and prebiotic function. Suitable for herbal supplement and functional food applications.",
    applications: [
      "Liver health formulations",
      "Prebiotic supplement blends",
      "Detox tea blends",
      "Bitter botanical extracts",
      "Functional herbal powders",
    ],
    origin: "India",
    format: "Dried herb / powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/herbs/pexels-asphotography-105028.jpg",
  },
  {
    id: "mixed-herbs",
    name: "Mixed Herbs",
    category: "Herbs",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Carefully blended mixed herbs combining complementary flavour profiles. Custom blending available to specification. Consistent batch quality suitable for large-scale food manufacturing.",
    applications: [
      "Seasoning & spice blends",
      "Ready meal flavouring",
      "Snack & crisp seasonings",
      "Sauce & marinade systems",
      "Food service applications",
    ],
    origin: "India",
    format: "Dried blend",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/herbs/pexels-lilartsy-1793035.jpg",
  },

  // Functional & Spices
  {
    id: "ginger-powder",
    name: "Ginger Powder",
    category: "Functional & Spices",
    certifications: ["Kosher"],
    petSuitable: true,
    description:
      "High-gingerol ginger powder from premium Indian rhizomes. Strong anti-inflammatory and digestive properties. Dual-certified for human nutraceutical and pet supplement applications.",
    applications: [
      "Anti-nausea & digestive supplements",
      "Pet joint health supplements",
      "Functional food fortification",
      "Spice blends & seasonings",
      "Beverage & tea mixes",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "25kg woven sacks / 10kg craft bags",
    image: "/images/categories/spices/StockSnap_0XJAC8WFT0.jpg",
  },
  {
    id: "psyllium-seed-husk-powder",
    name: "Psyllium Seed Husk Powder",
    category: "Functional & Spices",
    certifications: ["Kosher"],
    petSuitable: true,
    description:
      "Premium psyllium husk powder with high soluble fibre content. Excellent water-binding and bulking properties. Widely used in dietary fibre supplements and pet digestive health products.",
    applications: [
      "Dietary fibre supplements",
      "Pet digestive health",
      "Gluten-free baking",
      "Laxative & IBS formulations",
      "Low-calorie food thickeners",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "25kg woven sacks / 10kg craft bags",
    image: "/images/categories/spices/StockSnap_RQ2OSZQHW9.jpg",
  },
  {
    id: "orange-peel-powder-spice",
    name: "Orange Peel Powder",
    category: "Functional & Spices",
    certifications: ["Kosher"],
    petSuitable: false,
    description:
      "Concentrated orange peel powder rich in hesperidin, flavonoids and natural vitamin C. Distinct citrus flavour with functional antioxidant benefits for food and supplement manufacturing.",
    applications: [
      "Natural flavour & colour systems",
      "Vitamin C & bioflavonoid supplements",
      "Confectionery flavouring",
      "Functional beverage powders",
      "Bakery enrichment",
    ],
    origin: "India",
    format: "Fine powder",
    packaging: "20kg paper sacks / 10kg craft bags",
    image: "/images/categories/spices/StockSnap_0UVUXADJQG.jpg",
  },
];

export const categoryData = [
  {
    id: "All" as const,
    label: "All Products",
    image: "/images/products/pexels-karlsolano-6220709.jpg",
    description: "Full ingredient range",
  },
  {
    id: "Vegetables" as const,
    label: "Vegetables",
    image: "/images/categories/vegetables/pexels-dimitrisc-8821284.jpg",
    description: "8 ingredients",
  },
  {
    id: "Fruits" as const,
    label: "Fruits",
    image: "/images/categories/fruits/pexels-valeriya-10323400.jpg",
    description: "6 ingredients",
  },
  {
    id: "Herbs" as const,
    label: "Herbs",
    image: "/images/categories/herbs/pexels-lilartsy-1793035.jpg",
    description: "6 ingredients",
  },
  {
    id: "Functional & Spices" as const,
    label: "Functional & Spices",
    image: "/images/categories/spices/StockSnap_0XJAC8WFT0.jpg",
    description: "3 ingredients",
  },
];

export const categories = [
  "All",
  "Vegetables",
  "Fruits",
  "Herbs",
  "Functional & Spices",
] as const;

export type Category = (typeof categories)[number];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.id === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getPetProducts(): Product[] {
  return products.filter((p) => p.petSuitable);
}
