export type ProductCategory =
  | "hoodies"
  | "tees"
  | "outerwear"
  | "caps"
  | "essentials";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  tag?: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  featured?: boolean;
  new?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "monarch-crew-embroidery",
    name: "Monarch Crew Embroidery",
    price: 185,
    category: "hoodies",
    tag: "Signature",
    description:
      "Heavyweight French terry with hand-finished Windsor stitch across the chest. Built for drape, structure, and longevity.",
    details: [
      "480gsm organic cotton blend",
      "High-density embroidery — 12,000+ stitches",
      "Relaxed architectural fit",
      "Pre-shrunk, garment-washed",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Matte Black", hex: "#0a0a0a" },
      { name: "Stone", hex: "#a8a29e" },
      { name: "Ivory", hex: "#f5f5f0" },
    ],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
    ],
    featured: true,
    new: true,
  },
  {
    id: "2",
    slug: "atelier-oversized-tee",
    name: "Atelier Oversized Tee",
    price: 95,
    category: "tees",
    tag: "Core",
    description:
      "Editorial silhouette in premium combed cotton with tonal chest embroidery and raw-edge finishing.",
    details: [
      "240gsm single jersey",
      "Tonal Windsor monogram",
      "Dropped shoulder, elongated body",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Onyx", hex: "#111111" },
      { name: "Sand", hex: "#d6d3d1" },
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "heritage-wool-bomber",
    name: "Heritage Wool Bomber",
    price: 420,
    category: "outerwear",
    tag: "Limited",
    description:
      "Italian melton wool bomber with satin lining and precision back-panel embroidery.",
    details: [
      "80% wool / 20% nylon shell",
      "Satin quilted lining",
      "YKK matte hardware",
      "Back panel — 18,000 stitch motif",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Charcoal", hex: "#292524" }],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80",
      "https://images.unsplash.com/photo-1551028718-00167b16eac5?w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "crown-structured-cap",
    name: "Crown Structured Cap",
    price: 68,
    category: "caps",
    description:
      "Six-panel structured cap with 3D puff embroidery and adjustable antique brass buckle.",
    details: [
      "Cotton twill crown",
      "3D puff front logo",
      "Antique brass closure",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black", hex: "#0a0a0a" },
      { name: "Navy", hex: "#1e293b" },
    ],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e809?w=1200&q=80",
    ],
    new: true,
  },
  {
    id: "5",
    slug: "studio-zip-hoodie",
    name: "Studio Zip Hoodie",
    price: 210,
    category: "hoodies",
    description:
      "Full-zip heavyweight hoodie with dual placement embroidery and kangaroo utility pocket.",
    details: [
      "500gsm fleece interior",
      "Dual placement embroidery",
      "Matte gunmetal zip",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#0a0a0a" },
      { name: "Heather", hex: "#78716c" },
    ],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80",
    ],
  },
  {
    id: "6",
    slug: "essentials-rib-tank",
    name: "Essentials Rib Tank",
    price: 58,
    category: "essentials",
    description:
      "Fine rib cotton tank with micro Windsor crest — layering essential.",
    details: ["220gsm rib cotton", "Micro crest embroidery", "Slim longline fit"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "White", hex: "#fafaf9" },
      { name: "Black", hex: "#0a0a0a" },
    ],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const categories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hoodies", label: "Hoodies" },
  { id: "tees", label: "Tees" },
  { id: "outerwear", label: "Outerwear" },
  { id: "caps", label: "Caps" },
  { id: "essentials", label: "Essentials" },
];
