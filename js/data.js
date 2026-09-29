// ============================================
// DATA — Static Product Data & Site Content
// ============================================

export const SITE_CONFIG = {
  name: 'Sree Swamy Traders',
  shortName: 'SST',
  tagline: 'Piping Solutions You Can Trust',
  phone: '+91 95009 88199',
  email: 'info@sreeswamytraders.com',
  whatsapp: '919500988199',
  whatsappNumber: '919500988199',
  address: 'Tamil Nadu, India',
  founded: '2010',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    linkedin: '#'
  }
};

export const CATEGORIES = [
  { id: 'pvc', name: 'PVC Pipes & Fittings', icon: 'pipe', count: 0 },
  { id: 'cpvc', name: 'CPVC Pipes & Fittings', icon: 'pipe', count: 0 },
  { id: 'upvc', name: 'UPVC Pipes & Fittings', icon: 'pipe', count: 0 },
  { id: 'hdpe', name: 'HDPE Pipes & Fittings', icon: 'pipe', count: 0 },
  { id: 'ppr', name: 'PPR Pipes & Fittings', icon: 'pipe', count: 0 },
  { id: 'swr', name: 'SWR Drainage Pipes', icon: 'drain', count: 0 },
  { id: 'column', name: 'Column Pipes', icon: 'borewell', count: 0 },
  { id: 'casing', name: 'Casing Pipes', icon: 'casing', count: 0 },
  { id: 'agri', name: 'Agricultural Pipes', icon: 'agri', count: 0 },
  { id: 'tanks', name: 'Water Tanks', icon: 'tank', count: 0 },
  { id: 'accessories', name: 'Plumbing Accessories', icon: 'wrench', count: 0 },
  { id: 'gi-ms', name: 'GI / MS Pipes', icon: 'metal', count: 0 },
];

export const APPLICATIONS = [
  { id: 'residential', name: 'Residential', description: 'Home plumbing & water supply' },
  { id: 'commercial', name: 'Commercial', description: 'Hotels, hospitals, offices' },
  { id: 'industrial', name: 'Industrial', description: 'Factories & manufacturing' },
  { id: 'agricultural', name: 'Agricultural', description: 'Irrigation & farming' },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'PVC Pressure Pipes - Class 1',
    slug: 'pvc-pressure-pipes-class-1',
    category: 'pvc',
    application: ['residential', 'commercial'],
    material: 'PVC',
    shortDescription: 'High-quality PVC pressure pipes suitable for cold water supply, ideal for residential and commercial plumbing systems.',
    description: 'Our PVC Pressure Pipes Class 1 are manufactured using premium virgin PVC compound, ensuring long-lasting performance and reliability. These pipes are designed for cold water supply systems and are widely used in residential and commercial plumbing applications. They offer excellent chemical resistance, are lightweight, and easy to install.',
    features: ['ISI Marked (IS 4985)', 'UV Stabilized', 'Lead-free compound', 'Smooth bore for better flow', 'High tensile strength', 'Easy jointing with solvent cement', 'Corrosion resistant', 'Long service life (50+ years)'],
    specifications: { 'Material': 'Unplasticized PVC', 'Standard': 'IS 4985', 'Class': 'Class 1 (2.5 kg/cm²)', 'Size Range': '20mm to 315mm', 'Length': '3m / 6m', 'Color': 'Grey', 'Socket Type': 'Push fit / Solvent weld', 'Temperature': 'Up to 60°C' },
    applications: ['Water Supply', 'Plumbing', 'Borewell Connection', 'Overhead Tanks'],
    images: [],
    featured: true,
    new: false
  },
  {
    id: 2,
    name: 'CPVC Hot & Cold Water Pipes',
    slug: 'cpvc-hot-cold-water-pipes',
    category: 'cpvc',
    application: ['residential', 'commercial'],
    material: 'CPVC',
    shortDescription: 'Temperature-resistant CPVC pipes for both hot and cold water supply systems, perfect for modern plumbing.',
    description: 'Our CPVC Hot & Cold Water Pipes are engineered for superior performance in both hot and cold water distribution systems. Made from high-grade CPVC compound, these pipes can handle temperatures up to 93°C, making them ideal for water heaters, boilers, and solar water systems.',
    features: ['ISI Marked (IS 15778)', 'Temperature resistant up to 93°C', 'Non-toxic & food grade', 'Fire retardant', 'No scaling or pitting', 'Antibacterial properties', 'Low thermal conductivity', 'Corrosion free'],
    specifications: { 'Material': 'Chlorinated PVC', 'Standard': 'IS 15778 / ASTM D2846', 'Size Range': '15mm to 50mm (CTS)', 'SDR': 'SDR 11 / SDR 13.5', 'Color': 'Off-white / Cream', 'Max Temperature': '93°C', 'Jointing': 'Solvent Cement', 'Pressure Rating': '400 psi at 23°C' },
    applications: ['Hot Water Supply', 'Cold Water Supply', 'Solar Systems', 'Water Heaters', 'Hotels & Hospitals'],
    images: [],
    featured: true,
    new: true
  },
  {
    id: 3,
    name: 'UPVC Plumbing Pipes - SCH 40',
    slug: 'upvc-plumbing-pipes-sch-40',
    category: 'upvc',
    application: ['residential', 'commercial', 'industrial'],
    material: 'UPVC',
    shortDescription: 'Heavy-duty UPVC Schedule 40 pipes for high-pressure applications in plumbing and industrial use.',
    description: 'UPVC SCH 40 pipes are designed for heavy-duty applications requiring higher pressure ratings. These pipes are manufactured as per ASTM standards and are widely used in industrial piping, chemical processing, and high-rise building plumbing systems.',
    features: ['ASTM D1785 compliant', 'High pressure rating', 'Chemical resistant', 'Threaded or plain ends', 'Dimensionally accurate', 'UV resistant', 'Lightweight yet strong', 'Cost-effective solution'],
    specifications: { 'Material': 'Unplasticized PVC', 'Standard': 'ASTM D1785', 'Schedule': 'SCH 40', 'Size Range': '15mm to 200mm', 'End Type': 'Plain / Threaded', 'Color': 'White / Grey', 'Pressure': 'As per schedule', 'Length': '3m / 6m' },
    applications: ['Industrial Plumbing', 'Chemical Processing', 'Water Treatment', 'High-rise Buildings'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 4,
    name: 'HDPE Water Supply Pipes',
    slug: 'hdpe-water-supply-pipes',
    category: 'hdpe',
    application: ['residential', 'commercial', 'industrial', 'agricultural'],
    material: 'HDPE',
    shortDescription: 'Flexible HDPE pipes for water supply and irrigation, available in coils and straight lengths.',
    description: 'Our HDPE Water Supply Pipes are manufactured from high-density polyethylene (PE100/PE80) and are designed for both above-ground and below-ground water supply systems. These pipes offer excellent flexibility, impact resistance, and are ideal for rural water supply and irrigation.',
    features: ['IS 4984 / IS 14151 compliant', 'PE 100 / PE 80 grade', 'Leak-proof joints', 'Flexible & impact resistant', 'Long coil lengths available', 'UV stabilized', 'Earthquake resistant', 'Zero maintenance'],
    specifications: { 'Material': 'High Density Polyethylene', 'Standard': 'IS 4984 / IS 14151', 'Grade': 'PE 80 / PE 100', 'Size Range': '20mm to 630mm', 'Pressure': 'PN 2.5 to PN 16', 'Color': 'Black with blue stripe', 'Jointing': 'Butt welding / Electrofusion', 'Supply': 'Coils / Straight lengths' },
    applications: ['Drinking Water Supply', 'Irrigation', 'Borewell Lines', 'Underground Pipeline', 'Rural Water Supply'],
    images: [],
    featured: true,
    new: false
  },
  {
    id: 5,
    name: 'PPR Hot & Cold Water System',
    slug: 'ppr-hot-cold-water-system',
    category: 'ppr',
    application: ['residential', 'commercial'],
    material: 'PPR',
    shortDescription: 'Polypropylene Random Copolymer pipes with fusion welding technology for a leak-proof plumbing system.',
    description: 'PPR (Polypropylene Random Copolymer) pipes and fittings provide a complete plumbing solution with heat fusion welding technology. This creates a monolithic, leak-proof system that lasts for decades. Ideal for both hot and cold water applications.',
    features: ['DIN 8077/8078 compliant', 'Heat fusion welding', 'Zero leakage joints', 'Food grade material', 'Green pipe technology', 'Noise-free operation', 'Thermal insulation', '50+ year service life'],
    specifications: { 'Material': 'PP-R (Type 3)', 'Standard': 'DIN 8077/8078', 'Size Range': '20mm to 160mm', 'SDR': 'SDR 6 / SDR 7.4 / SDR 11', 'Color': 'Green / White', 'Max Temperature': '95°C', 'Jointing': 'Heat fusion welding', 'Pressure': 'PN 10 / PN 16 / PN 20 / PN 25' },
    applications: ['Hot Water Plumbing', 'Cold Water Supply', 'Central Heating', 'Industrial Piping', 'Chiller Lines'],
    images: [],
    featured: false,
    new: true
  },
  {
    id: 6,
    name: 'SWR Drainage Pipes & Fittings',
    slug: 'swr-drainage-pipes-fittings',
    category: 'swr',
    application: ['residential', 'commercial'],
    material: 'PVC',
    shortDescription: 'Self-fit SWR ring fit drainage pipes for soil, waste, and rainwater management in buildings.',
    description: 'Our SWR (Soil, Waste & Rainwater) drainage pipes are designed for efficient waste and rainwater management. With self-fit rubber ring joints, these pipes provide quick and hassle-free installation without the need for solvent cement.',
    features: ['IS 13592 compliant', 'Self-fit ring joint', 'Leak-proof connections', 'High impact strength', 'Smooth internal surface', 'Chemical resistant', 'Fire retardant', 'Noise reduction design'],
    specifications: { 'Material': 'PVC', 'Standard': 'IS 13592', 'Type': 'Type A / Type B', 'Size Range': '75mm to 200mm', 'Joint Type': 'Rubber ring (self-fit)', 'Color': 'Grey', 'Wall Thickness': 'As per IS standard', 'Length': '3m / 6m' },
    applications: ['Soil Stack', 'Waste Water', 'Rainwater Harvesting', 'Bathroom Drainage', 'Kitchen Waste'],
    images: [],
    featured: true,
    new: false
  },
  {
    id: 7,
    name: 'Borewell Column Pipes',
    slug: 'borewell-column-pipes',
    category: 'column',
    application: ['residential', 'agricultural'],
    material: 'UPVC',
    shortDescription: 'Durable UPVC column pipes for borewell and submersible pump applications with square threading.',
    description: 'Our Borewell Column Pipes are specifically designed for use with submersible pumps. Made from UPVC, these pipes offer superior corrosion resistance compared to traditional GI pipes, resulting in cleaner water and longer pump life.',
    features: ['IS 12818 compliant', 'Square thread design', 'Corrosion free', 'Lighter than GI pipes', 'Easy installation', 'No rusting or scaling', 'Better water quality', 'Cost-effective alternative'],
    specifications: { 'Material': 'UPVC', 'Standard': 'IS 12818', 'Size Range': '32mm to 200mm', 'Thread Type': 'Square thread', 'Color': 'Blue / Grey', 'Depth Rating': 'Up to 300m', 'Coupling': 'UPVC threaded coupling', 'Application': 'Submersible pump column' },
    applications: ['Borewell', 'Submersible Pumps', 'Agricultural Wells', 'Industrial Borewells'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 8,
    name: 'UPVC Casing Pipes',
    slug: 'upvc-casing-pipes',
    category: 'casing',
    application: ['residential', 'agricultural', 'industrial'],
    material: 'UPVC',
    shortDescription: 'Ribbed screen and plain casing pipes for borewell construction with superior filtration.',
    description: 'Our UPVC Casing Pipes are used for borewell construction and provide excellent support to the borewell structure. Available in both plain and ribbed screen variants, these pipes ensure efficient water filtration and long-term borewell performance.',
    features: ['IS 12818 / IS 14151 compliant', 'Ribbed screen design', 'Superior sand filtration', 'Corrosion free', 'Long-lasting performance', 'Easy to handle', 'Resistant to chemicals', 'Available with screen'],
    specifications: { 'Material': 'UPVC', 'Standard': 'IS 12818', 'Size Range': '100mm to 300mm', 'Type': 'Plain / Ribbed Screen', 'Color': 'Grey / Blue', 'Slot Size': '0.5mm to 3mm', 'Thread': 'Trapezoidal thread', 'Length': '3m / 6m' },
    applications: ['Borewell Casing', 'Tube Wells', 'Water Filtration', 'Ground Water Extraction'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 9,
    name: 'Agricultural Irrigation Pipes',
    slug: 'agricultural-irrigation-pipes',
    category: 'agri',
    application: ['agricultural'],
    material: 'PVC / HDPE',
    shortDescription: 'Lightweight and durable pipes for agricultural irrigation, drip lines, and sprinkler systems.',
    description: 'Our Agricultural Irrigation Pipes are designed to meet the demanding needs of modern farming. Available in PVC and HDPE variants, these pipes are used for drip irrigation, sprinkler systems, and general agricultural water conveyance.',
    features: ['ISI Marked', 'UV resistant', 'Lightweight & portable', 'Cost-effective', 'Available in various sizes', 'Easy to install', 'Smooth internal bore', 'Leak-proof joints'],
    specifications: { 'Material': 'PVC / HDPE', 'Standard': 'IS 4985 / IS 4984', 'Size Range': '20mm to 250mm', 'Class': 'Light / Medium / Heavy', 'Color': 'Grey / Black', 'Supply': 'Straight / Coils', 'Pressure': 'As per class', 'Socket': 'Push fit / Solvent' },
    applications: ['Drip Irrigation', 'Sprinkler Systems', 'Farm Water Supply', 'Canal Lining', 'Green House'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 10,
    name: 'Overhead Water Storage Tanks',
    slug: 'overhead-water-storage-tanks',
    category: 'tanks',
    application: ['residential', 'commercial'],
    material: 'Polyethylene',
    shortDescription: 'Multi-layer insulated water storage tanks with UV protection and food-grade inner layer.',
    description: 'Our Overhead Water Storage Tanks feature multi-layer construction with UV-resistant outer layer, insulating foam middle layer, and food-grade inner layer. These tanks keep water cool, clean, and safe for drinking.',
    features: ['Multi-layer construction', 'UV protected outer layer', 'Food grade inner layer', 'Foam insulated', 'Keeps water cool', 'Anti-bacterial', 'Leak-proof', '15 year warranty'],
    specifications: { 'Material': 'LLDPE / HDPE', 'Construction': '3-Layer / 4-Layer', 'Capacity': '200L to 10,000L', 'Color': 'Various options', 'Shape': 'Vertical / Horizontal', 'Warranty': '15 Years', 'Standard': 'IS 12701', 'Features': 'UV + Foam + Food Grade' },
    applications: ['Residential Storage', 'Commercial Use', 'Overhead Installation', 'Ground Level'],
    images: [],
    featured: true,
    new: true
  },
  {
    id: 11,
    name: 'Solvent Cement & Primer',
    slug: 'solvent-cement-primer',
    category: 'accessories',
    application: ['residential', 'commercial', 'industrial'],
    material: 'Chemical',
    shortDescription: 'High-grade solvent cement for PVC, CPVC, and UPVC pipe jointing with fast curing formula.',
    description: 'Our Solvent Cement range provides strong, reliable joints for PVC, CPVC, and UPVC pipe systems. Available in different formulations for each pipe material, our cements ensure leak-proof connections that last for decades.',
    features: ['Fast curing formula', 'High bond strength', 'Available for PVC/CPVC/UPVC', 'Easy brush application', 'Consistent viscosity', 'Long shelf life', 'ISI Marked', 'Primer available'],
    specifications: { 'Type': 'Solvent Cement / Primer', 'For': 'PVC / CPVC / UPVC', 'Packaging': '25ml to 1000ml', 'Cure Time': '24 hours (full cure)', 'Color': 'Clear / Yellow / Orange', 'Standard': 'IS 14182', 'Shelf Life': '2 years', 'Application': 'Brush' },
    applications: ['Pipe Jointing', 'Plumbing', 'Drainage', 'Industrial Piping'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 12,
    name: 'GI Pipes (Galvanized Iron)',
    slug: 'gi-pipes-galvanized-iron',
    category: 'gi-ms',
    application: ['residential', 'commercial', 'industrial'],
    material: 'Galvanized Iron',
    shortDescription: 'ISI marked galvanized iron pipes for water supply, structural applications, and scaffolding.',
    description: 'Our GI Pipes are manufactured from high-quality mild steel and hot-dip galvanized for corrosion protection. These pipes are used in water supply, structural applications, fencing, scaffolding, and various industrial applications.',
    features: ['IS 1239 compliant', 'Hot-dip galvanized', 'High strength', 'Threaded ends', 'Corrosion protected', 'Various thickness options', 'Light / Medium / Heavy', 'Fire sprinkler approved'],
    specifications: { 'Material': 'Mild Steel + Zinc Coating', 'Standard': 'IS 1239 / IS 1161', 'Size Range': '15mm to 150mm', 'Class': 'Light / Medium / Heavy', 'End Type': 'Plain / Threaded + Socket', 'Coating': 'Hot-dip Galvanized', 'Length': '6m standard', 'Application': 'Multi-purpose' },
    applications: ['Water Supply', 'Structural', 'Scaffolding', 'Fencing', 'Fire Protection', 'Gas Lines'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 13,
    name: 'PVC Conduit Pipes',
    slug: 'pvc-conduit-pipes',
    category: 'pvc',
    application: ['residential', 'commercial'],
    material: 'PVC',
    shortDescription: 'Heavy-gauge PVC conduit pipes for electrical wiring protection in concealed and surface applications.',
    description: 'Our PVC Conduit Pipes are designed for protecting electrical wiring in buildings. Available in light and heavy gauge options, these pipes provide excellent insulation and mechanical protection for cables.',
    features: ['IS 9537 compliant', 'Flame retardant', 'Self-extinguishing', 'High insulation', 'Moisture resistant', 'Easy wire pulling', 'Flexible & rigid options', 'Various colors'],
    specifications: { 'Material': 'PVC', 'Standard': 'IS 9537', 'Size': '20mm / 25mm / 32mm / 40mm', 'Type': 'Light / Heavy gauge', 'Color': 'White / Grey / Orange', 'Length': '3m', 'Gauge': 'Light (1mm) / Heavy (1.5mm)', 'Application': 'Concealed / Surface' },
    applications: ['Electrical Concealed', 'Surface Wiring', 'Underground Cable', 'Telecom Ducting'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 14,
    name: 'CPVC Fire Sprinkler Pipes',
    slug: 'cpvc-fire-sprinkler-pipes',
    category: 'cpvc',
    application: ['commercial', 'industrial'],
    material: 'CPVC',
    shortDescription: 'Fire-rated CPVC pipes specifically designed for fire sprinkler systems in commercial buildings.',
    description: 'Our CPVC Fire Sprinkler Pipes are specially engineered for fire protection systems. These pipes are UL listed and FM approved, meeting the stringent requirements of fire safety standards for commercial and industrial buildings.',
    features: ['FM Approved', 'UL Listed', 'Fire retardant', 'Light weight', 'Easy installation', 'Corrosion free', 'Cost effective vs metal', 'Reliable performance'],
    specifications: { 'Material': 'CPVC (Fire Rated)', 'Standard': 'ASTM F442', 'Size': '25mm to 80mm', 'SDR': 'SDR 13.5', 'Color': 'Orange', 'Approval': 'FM / UL', 'Jointing': 'Solvent Cement (Orange)', 'Pressure': 'As per NFPA 13' },
    applications: ['Fire Sprinkler Systems', 'Commercial Buildings', 'Hospitals', 'Hotels', 'Warehouses'],
    images: [],
    featured: false,
    new: true
  },
  {
    id: 15,
    name: 'PVC SWR Rain Water Pipes',
    slug: 'pvc-swr-rain-water-pipes',
    category: 'swr',
    application: ['residential', 'commercial'],
    material: 'PVC',
    shortDescription: 'Dedicated rainwater harvesting pipes with self-fit joints for efficient rainwater collection.',
    description: 'Our SWR Rain Water Pipes are designed specifically for rainwater collection and harvesting systems. With self-fit rubber ring joints, these pipes ensure leak-free rainwater drainage from rooftops to storage tanks.',
    features: ['IS 13592 Type B', 'Self-fit joints', 'High flow capacity', 'UV resistant', 'Impact resistant', 'Suitable for rainwater harvesting', 'Low noise', 'Quick installation'],
    specifications: { 'Material': 'PVC', 'Standard': 'IS 13592 (Type B)', 'Size': '75mm / 110mm / 160mm', 'Joint': 'Rubber ring self-fit', 'Color': 'Grey', 'Length': '3m / 6m', 'Flow': 'High capacity', 'UV': 'Stabilized' },
    applications: ['Rainwater Drainage', 'Rainwater Harvesting', 'Roof Drainage', 'Storm Water'],
    images: [],
    featured: false,
    new: false
  },
  {
    id: 16,
    name: 'Underground Drainage Pipes',
    slug: 'underground-drainage-pipes',
    category: 'swr',
    application: ['residential', 'commercial', 'industrial'],
    material: 'PVC / DWC',
    shortDescription: 'Double-wall corrugated pipes for underground sewerage and drainage with high ring stiffness.',
    description: 'Our Underground Drainage Pipes feature double-wall corrugated (DWC) construction that provides excellent ring stiffness while maintaining a smooth internal bore for efficient flow. Ideal for municipal sewerage and underground drainage projects.',
    features: ['IS 16098 compliant', 'Double wall corrugated', 'High ring stiffness', 'Smooth inner wall', 'Rubber ring joints', 'Chemical resistant', 'Long design life', 'Reduces excavation cost'],
    specifications: { 'Material': 'PP / PVC (DWC)', 'Standard': 'IS 16098', 'Size Range': '100mm to 800mm', 'Ring Stiffness': 'SN4 / SN8', 'Joint': 'Rubber ring', 'Color': 'Brown / Black', 'Inner Wall': 'Smooth', 'Length': '6m' },
    applications: ['Underground Sewerage', 'Storm Water Drainage', 'Cable Ducting', 'Industrial Drainage'],
    images: [],
    featured: true,
    new: false
  }
];

// Update category counts
CATEGORIES.forEach(cat => {
  cat.count = PRODUCTS.filter(p => p.category === cat.id).length;
});

export const TESTIMONIALS = [
  {
    text: 'Sree Swamy Traders has been our go-to supplier for all plumbing needs. Their product quality and service is consistently excellent. Highly recommended for any construction project.',
    author: 'Rajesh Kumar',
    role: 'Building Contractor, Chennai'
  },
  {
    text: 'We have been sourcing HDPE and PVC pipes from SST for our agricultural projects for over 5 years. Their pricing is competitive and delivery is always on time.',
    author: 'Muthu Krishnan',
    role: 'Farm Owner, Coimbatore'
  },
  {
    text: 'The technical guidance provided by the SST team helped us choose the right piping system for our hotel project. Their expertise in CPVC and PPR systems is commendable.',
    author: 'Arun Prakash',
    role: 'Interior Designer, Madurai'
  },
  {
    text: 'As a plumber with 20 years of experience, I always recommend Sree Swamy Traders to my clients. They stock all major brands and their product range is unmatched in the region.',
    author: 'Senthil Velan',
    role: 'Master Plumber, Salem'
  }
];

export const BRANDS = [
  'Supreme', 'Ashirvad', 'Finolex', 'Astral', 'Prince',
  'Ajay', 'Nandi', 'Sudhakar', 'Apollo', 'Jain Pipes'
];

export const BRAND_PARTNERS = [
  { name: 'Supreme Industries', desc: 'India’s pioneer and market leader in advanced plastic piping and plumbing systems.' },
  { name: 'Ashirvad Pipes', desc: 'Global benchmarks in CPVC & SWR plumbing systems with patented FlowGuard technology.' },
  { name: 'Finolex Pipes', desc: 'Renowned agricultural, plumbing, and sanitation pipes with decades of unmatched trust.' },
  { name: 'Astral Pipes', desc: 'Innovative chlorinated and industrial piping engineering for heavy-duty applications.' },
  { name: 'Prince Pipes', desc: 'Leading manufacturers of precision plumbing, borewell casing, and underground drainage.' },
  { name: 'APL Apollo', desc: 'High-strength structural, galvanized iron (GI), and heavy industrial fluid piping.' }
];

export const STATS = [
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 5000, suffix: '+', label: 'Products Available' },
  { number: 2000, suffix: '+', label: 'Happy Customers' },
  { number: 10, suffix: '+', label: 'Brands Partnered' }
];

export const DOWNLOADS = [
  { id: 1, title: 'PVC Pipes Catalog', category: 'Catalog', fileSize: '2.4 MB', format: 'PDF' },
  { id: 2, title: 'CPVC Product Guide', category: 'Catalog', fileSize: '1.8 MB', format: 'PDF' },
  { id: 3, title: 'HDPE Technical Manual', category: 'Technical', fileSize: '3.1 MB', format: 'PDF' },
  { id: 4, title: 'SWR Drainage Catalog', category: 'Catalog', fileSize: '1.5 MB', format: 'PDF' },
  { id: 5, title: 'Company Brochure', category: 'Brochure', fileSize: '4.2 MB', format: 'PDF' },
  { id: 6, title: 'Price List 2024', category: 'Price List', fileSize: '0.8 MB', format: 'PDF' },
  { id: 7, title: 'Water Tanks Brochure', category: 'Brochure', fileSize: '2.0 MB', format: 'PDF' },
  { id: 8, title: 'Installation Guide', category: 'Technical', fileSize: '1.2 MB', format: 'PDF' },
  { id: 9, title: 'PPR System Manual', category: 'Technical', fileSize: '2.6 MB', format: 'PDF' },
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Quality Management System certification ensuring consistent quality standards.' },
  { name: 'BIS / ISI Mark', description: 'Bureau of Indian Standards certification for product safety and quality compliance.' },
  { name: 'IS 4985', description: 'Indian Standard for PVC pipes for potable water supply.' },
  { name: 'IS 15778', description: 'Standard for CPVC pipes for hot and cold water distribution.' },
  { name: 'NSF International', description: 'Certification for products meeting public health and safety standards.' },
  { name: 'ASTM Standards', description: 'American Society for Testing and Materials compliant products.' },
];
