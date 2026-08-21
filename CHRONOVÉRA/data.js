/* ==========================================================================
   CHRONOVÉRA - LUXURY WATCH DATASET & BRAND CATALOG (ALL 17 BRANDS)
   ========================================================================== */

const BRANDS_DATA = [
    {
        id: "audemars-piguet",
        name: "Audemars Piguet",
        logo: "assets/brand-logo/audemars-piguet.svg",
        origin: "Le Brassus, Switzerland",
        established: 1875,
        watchCount: 18,
        description: "Pioneers of luxury steel sports horology with the iconic Royal Oak, offshore chronographs and avant-garde skeleton artistry.",
        tagline: "To break the rules, you must first master them.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "breitling",
        name: "Breitling",
        logo: "assets/brand-logo/breitling.svg",
        origin: "Grenchen, Switzerland",
        established: 1884,
        watchCount: 16,
        description: "The official wrist instrument for aviation pioneers, high-altitude chronographs, Navitimer circular slide-rules and endurance tools.",
        tagline: "Instruments for Professionals.",
        category: "Aviation Chronograph",
        featured: true
    },
    {
        id: "cartier",
        name: "Cartier",
        logo: "assets/brand-logo/cartier.svg",
        origin: "Paris, France",
        established: 1847,
        watchCount: 20,
        description: "Architectural elegance and legendary geometric silhouettes including the Santos, Tank, Ballon Bleu, and surrealist Crash.",
        tagline: "The Jeweler of Kings and the King of Jewelers.",
        category: "Dress Horology",
        featured: true
    },
    {
        id: "franck-muller",
        name: "Franck Muller",
        logo: "assets/brand-logo/franck-muller.svg",
        origin: "Genthod, Geneva, Switzerland",
        established: 1991,
        watchCount: 12,
        description: "The Master of Complications famous for the signature Cintrée Curvex tonneau case, Crazy Hours jumping numerals and mega tourbillons.",
        tagline: "Master of Complications.",
        category: "Grand Complication",
        featured: true
    },
    {
        id: "hublot",
        name: "Hublot",
        logo: "assets/brand-logo/hublot.svg",
        origin: "Nyon, Switzerland",
        established: 1980,
        watchCount: 15,
        description: "Disruptive Art of Fusion combining rubber straps, Magic Gold, sapphire crystal cases and Unico manufacture movements.",
        tagline: "Be First, Different and Unique.",
        category: "Avant-Garde",
        featured: true
    },
    {
        id: "iceout",
        name: "Bespoke Ice-Out",
        logo: "assets/brand-logo/iceout.svg",
        origin: "Geneva & Dubai Vaults",
        established: 2012,
        watchCount: 10,
        description: "Custom haute joaillerie horology set with VVS flawless baguette diamonds, factory pave bezels and iced-out heirloom masterworks.",
        tagline: "Unapologetic High-Jewelry Horology.",
        category: "High Horology",
        featured: true
    },
    {
        id: "iwc",
        name: "IWC Schaffhausen",
        logo: "assets/brand-logo/iwc.svg",
        origin: "Schaffhausen, Switzerland",
        established: 1868,
        watchCount: 14,
        description: "Precision Swiss engineering from Schaffhausen. Iconic Big Pilot's instruments, Portugieser perpetual calendars and Aquatimer divers.",
        tagline: "Engineered for Men.",
        category: "Aviation Chronograph",
        featured: true
    },
    {
        id: "jaeger-lecoultre",
        name: "Jaeger-LeCoultre",
        logo: "assets/brand-logo/jaeger-lecoultre.svg",
        origin: "Le Sentier, Switzerland",
        established: 1833,
        watchCount: 17,
        description: "The Watchmaker of Watchmakers, master creators of over 1,200 mechanical calibers, Atmos clocks and the swiveling Reverso.",
        tagline: "The Watchmaker of Watchmakers.",
        category: "Dress Horology",
        featured: true
    },
    {
        id: "omega",
        name: "Omega",
        logo: "assets/brand-logo/omega.svg",
        origin: "Biel/Bienne, Switzerland",
        established: 1848,
        watchCount: 22,
        description: "The legendary Speedmaster Professional Moonwatch, Seamaster Diver 300M James Bond icons, and Master Co-Axial chronometers.",
        tagline: "First Watch Worn on the Moon.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "panerai",
        name: "Officine Panerai",
        logo: "assets/brand-logo/panerai.svg",
        origin: "Florence, Italy & Neuchâtel",
        established: 1860,
        watchCount: 13,
        description: "Florentine naval heritage, cushion-shaped Radiomir & Luminor cases with patented crown-protecting bridges and luminous sandwich dials.",
        tagline: "Where Italian Design Meets Swiss Technology.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "patek-philippe",
        name: "Patek Philippe",
        logo: "assets/brand-logo/patek-philippe.svg",
        origin: "Geneva, Switzerland",
        established: 1839,
        watchCount: 24,
        description: "The absolute pinnacle of Swiss haute horology, world-renowned for grand complications, Calatrava dress elegance and Nautilus sports icons.",
        tagline: "You never actually own a Patek Philippe. You merely look after it for the next generation.",
        category: "Grand Complication",
        featured: true
    },
    {
        id: "richard-mille",
        name: "Richard Mille",
        logo: "assets/brand-logo/richard-mille.svg",
        origin: "Les Breuleux, Switzerland",
        established: 2001,
        watchCount: 9,
        description: "Futuristic racing machines on the wrist engineered with aerospace NTPT carbon, titanium grade 5 and g-force shock tourbillons.",
        tagline: "A Racing Machine on the Wrist.",
        category: "Avant-Garde",
        featured: true
    },
    {
        id: "roger-dubuis",
        name: "Roger Dubuis",
        logo: "assets/brand-logo/roger-dubuis.svg",
        origin: "Geneva, Switzerland",
        established: 1995,
        watchCount: 8,
        description: "Hyper Horology featuring the Excalibur skeleton flying tourbillon stamped with the prestigious Poinçon de Genève seal of quality.",
        tagline: "No Rules, Our Game.",
        category: "Avant-Garde",
        featured: true
    },
    {
        id: "rolex",
        name: "Rolex",
        logo: "assets/brand-logo/rolex.svg",
        origin: "Geneva, Switzerland",
        established: 1905,
        watchCount: 28,
        description: "The global benchmark in precision, durability, and prestige. Cosmograph Daytona, Submariner, Day-Date President, and GMT-Master II icons.",
        tagline: "A Crown for Every Achievement.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "tag-heuer",
        name: "TAG Heuer",
        logo: "assets/brand-logo/tag-heuer.svg",
        origin: "La Chaux-de-Fonds, Switzerland",
        established: 1860,
        watchCount: 15,
        description: "Motorsport racing heritage embodied by the Monaco square chronograph, Carrera tachymeter, and Aquaracer professional dive tools.",
        tagline: "Don't Crack Under Pressure.",
        category: "Aviation Chronograph",
        featured: true
    },
    {
        id: "ulysse-nardin",
        name: "Ulysse Nardin",
        logo: "assets/brand-logo/ulysse-nardin.svg",
        origin: "Le Locle, Switzerland",
        established: 1846,
        watchCount: 11,
        description: "Historic marine chronometers and revolutionary silicon escapements showcased in The Freak carrousel-tourbillon without hands or crown.",
        tagline: "Freakish Horological Genius.",
        category: "High Horology",
        featured: true
    },
    {
        id: "vacheron-constantin",
        name: "Vacheron Constantin",
        logo: "assets/brand-logo/vacheron-constantin.svg",
        origin: "Geneva, Switzerland",
        established: 1755,
        watchCount: 14,
        description: "The oldest continuously operating watch manufacture in history, crafting Overseas steel sports, Historiques, and poetic complications for centuries.",
        tagline: "One of Not Many.",
        category: "High Horology",
        featured: true
    }
];

const WATCHES_DATA = [
    // PATEK PHILIPPE
    {
        id: "chronovera-tourbillon-01",
        brandId: "patek-philippe",
        brandName: "Patek Philippe",
        model: "Grand Complications Celestial Tourbillon",
        reference: "Ref. 5303R-001",
        price: 345000,
        priceDisplay: "$345,000",
        originalPrice: "$375,000",
        availability: "Private Vault",
        category: "Grand Complication",
        image: "assets/hero_watch.png",
        gallery: ["assets/hero_watch.png", "assets/patek_nautilus.png", "assets/vacheron_overseas.png"],
        badge: "Hero Masterpiece",
        description: "An extraordinary openwork tourbillon minute repeater showcasing hand-finished gongs, rose gold casing, and a deep celestial blue sunburst sub-dial.",
        specs: {
            movement: "Caliber R TO 27 PS ML (Manual Wind)",
            powerReserve: "48 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "18K Rose Gold & Platinum Accents",
            waterResistance: "30 Meters",
            dialColor: "Openwork Navy & Sapphire",
            strap: "Hand-stitched Alligator Leather"
        },
        featured: true
    },
    {
        id: "patek-nautilus-5711",
        brandId: "patek-philippe",
        brandName: "Patek Philippe",
        model: "Nautilus Steel Blue Dial",
        reference: "Ref. 5711/1A-010",
        price: 118000,
        priceDisplay: "$118,000",
        originalPrice: "$130,000",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/patek_nautilus.png",
        gallery: ["assets/patek_nautilus.png", "assets/hero_watch.png"],
        badge: "Iconic Collector Item",
        description: "The holy grail of luxury steel sports watches. Features the signature porthole case design and horizontal embossed navy blue sunburst dial.",
        specs: {
            movement: "Caliber 26-330 S C (Automatic)",
            powerReserve: "45 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "120 Meters",
            dialColor: "Navy Blue Sunburst",
            strap: "Integrated Stainless Steel Bracelet"
        },
        featured: true
    },

    // ROLEX
    {
        id: "rolex-daytona-116500ln",
        brandId: "rolex",
        brandName: "Rolex",
        model: "Cosmograph Daytona 'Panda'",
        reference: "Ref. 116500LN",
        price: 34500,
        priceDisplay: "$34,500",
        originalPrice: "$38,000",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/rolex_daytona.png",
        gallery: ["assets/rolex_daytona.png", "assets/hero_watch.png"],
        badge: "High Demand",
        description: "The ultimate racing chronograph. Monobloc Cerachrom bezel in black ceramic paired with a crisp white dial and black sub-dial rings.",
        specs: {
            movement: "Calibre 4130 (Automatic Chronograph)",
            powerReserve: "72 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "Oystersteel",
            waterResistance: "100 Meters",
            dialColor: "White Panda",
            strap: "Oyster Steel Three-piece Solid Links"
        },
        featured: true
    },

    // AUDEMARS PIGUET
    {
        id: "ap-royal-oak-15500st",
        brandId: "audemars-piguet",
        brandName: "Audemars Piguet",
        model: "Royal Oak Selfwinding Silver",
        reference: "Ref. 15500ST.OO.1220ST.04",
        price: 49500,
        priceDisplay: "$49,500",
        originalPrice: "$54,000",
        availability: "Limited Edition",
        category: "Sport Luxury",
        image: "assets/ap_royaloak.png",
        gallery: ["assets/ap_royaloak.png", "assets/vacheron_overseas.png"],
        badge: "Editor's Choice",
        description: "Gérald Genta's legendary octagonal design brought to life with silver 'Grande Tapisserie' dial and integrated hand-brushed steel bracelet.",
        specs: {
            movement: "Calibre 4302 (Automatic)",
            powerReserve: "70 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "50 Meters",
            dialColor: "Silver Grande Tapisserie",
            strap: "Integrated Hand-finished Steel Bracelet"
        },
        featured: true
    },

    // VACHERON CONSTANTIN
    {
        id: "vacheron-overseas-4500v",
        brandId: "vacheron-constantin",
        brandName: "Vacheron Constantin",
        model: "Overseas Self-Winding Deep Blue",
        reference: "Ref. 4500V/110A-B128",
        price: 38800,
        priceDisplay: "$38,800",
        originalPrice: null,
        availability: "In Stock",
        category: "High Horology",
        image: "assets/vacheron_overseas.png",
        gallery: ["assets/vacheron_overseas.png", "assets/hero_watch.png"],
        badge: "Best Seller",
        description: "Fluid lines, six-sided bezel evoking the Maltese cross, and an enchanting translucent deep navy blue lacquered dial with quick-change strap system.",
        specs: {
            movement: "Calibre 5100 (22K Gold Rotor)",
            powerReserve: "60 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "Stainless Steel & Soft Iron Ring",
            waterResistance: "150 Meters",
            dialColor: "Deep Navy Blue Lacquer",
            strap: "Interchangeable Steel & Blue Rubber Strap"
        },
        featured: true
    },

    // BREITLING
    {
        id: "breitling-navitimer-01",
        brandId: "breitling",
        brandName: "Breitling",
        model: "Navitimer B01 Chronograph 43",
        reference: "Ref. AB0138241C1P1",
        price: 9600,
        priceDisplay: "$9,600",
        originalPrice: "$10,800",
        availability: "In Stock",
        category: "Aviation Chronograph",
        image: "assets/hero_watch.png",
        gallery: ["assets/hero_watch.png"],
        badge: "Aviation Icon",
        description: "The definitive pilot's chronograph equipped with the legendary circular slide rule bezel and blue sunburst dial.",
        specs: {
            movement: "Breitling Manufacture Caliber 01",
            powerReserve: "70 Hours",
            caseSize: "43.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "30 Meters",
            dialColor: "Ice Blue & Black Sub-dials",
            strap: "Black Alligator Leather"
        },
        featured: false
    },

    // CARTIER
    {
        id: "cartier-santos-100",
        brandId: "cartier",
        brandName: "Cartier",
        model: "Santos de Cartier Large Model",
        reference: "Ref. WSSA0018",
        price: 7750,
        priceDisplay: "$7,750",
        originalPrice: "$8,500",
        availability: "In Stock",
        category: "Dress Horology",
        image: "assets/ap_royaloak.png",
        gallery: ["assets/ap_royaloak.png"],
        badge: "Parisian Icon",
        description: "The world's first modern wristwatch created in 1904 for aviator Alberto Santos-Dumont with visible bezel screws.",
        specs: {
            movement: "Calibre 1847 MC (Automatic)",
            powerReserve: "42 Hours",
            caseSize: "39.8 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "100 Meters",
            dialColor: "Opaline Silvered Dial",
            strap: "SmartLink Steel Bracelet"
        },
        featured: false
    },

    // FRANCK MULLER
    {
        id: "franck-muller-vanguard",
        brandId: "franck-muller",
        brandName: "Franck Muller",
        model: "Vanguard Skeleton Tourbillon",
        reference: "Ref. V 45 T SQT",
        price: 88000,
        priceDisplay: "$88,000",
        originalPrice: "$95,000",
        availability: "Private Vault",
        category: "Grand Complication",
        image: "assets/patek_nautilus.png",
        gallery: ["assets/patek_nautilus.png"],
        badge: "Master Complication",
        description: "Curved tonneau case housing a fully skeletonized hand-brushed tourbillon movement with midnight blue anodized bridges.",
        specs: {
            movement: "Caliber FM 2001 (Manual Wind)",
            powerReserve: "60 Hours",
            caseSize: "44.0 x 53.7 mm",
            caseMaterial: "Grade 5 Titanium & Blue PVD",
            waterResistance: "30 Meters",
            dialColor: "Openwork Skeletonized Navy",
            strap: "Hand-sewn Alligator Rubber Hybrid"
        },
        featured: false
    },

    // HUBLOT
    {
        id: "hublot-big-bang-unico",
        brandId: "hublot",
        brandName: "Hublot",
        model: "Big Bang Unico Sapphire Blue",
        reference: "Ref. 411.JX.4802.RT",
        price: 68000,
        priceDisplay: "$68,000",
        originalPrice: "$75,000",
        availability: "Limited Edition",
        category: "Avant-Garde",
        image: "assets/vacheron_overseas.png",
        gallery: ["assets/vacheron_overseas.png"],
        badge: "Fusion Art",
        description: "Sculpted entirely out of polished blue sapphire crystal, allowing full visibility of the column-wheel flyback movement.",
        specs: {
            movement: "HUB1242 Unico Manufacture Flyback",
            powerReserve: "72 Hours",
            caseSize: "45.0 mm",
            caseMaterial: "Polished Blue Sapphire Crystal",
            waterResistance: "50 Meters",
            dialColor: "Skeleton Sapphire",
            strap: "Transparent Blue Structured Rubber"
        },
        featured: false
    },

    // BESPOKE ICE-OUT
    {
        id: "iceout-royal-oak-custom",
        brandId: "iceout",
        brandName: "Bespoke Ice-Out",
        model: "Royal Oak Baguette Diamond Masterpiece",
        reference: "Ref. ICE-AP15500-VVS",
        price: 195000,
        priceDisplay: "$195,000",
        originalPrice: "$220,000",
        availability: "Private Vault",
        category: "High Horology",
        image: "assets/ap_royaloak.png",
        gallery: ["assets/ap_royaloak.png"],
        badge: "VVS Custom Vault",
        description: "Bespoke haute joaillerie timepiece handset with 32.5 carats of VVS1 EF color seamless baguette diamonds across case, dial and bracelet.",
        specs: {
            movement: "Calibre 4302 (Automatic)",
            powerReserve: "70 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "18K White Gold & VVS Baguette Diamonds",
            waterResistance: "30 Meters",
            dialColor: "Full Pave Baguette Diamond",
            strap: "Custom Diamond Set White Gold Bracelet"
        },
        featured: true
    },

    // IWC
    {
        id: "iwc-big-pilot-5010",
        brandId: "iwc",
        brandName: "IWC Schaffhausen",
        model: "Big Pilot's Watch 43 Navy",
        reference: "Ref. IW329304",
        price: 9250,
        priceDisplay: "$9,250",
        originalPrice: null,
        availability: "In Stock",
        category: "Aviation Chronograph",
        image: "assets/hero_watch.png",
        gallery: ["assets/hero_watch.png"],
        badge: "Pilot Standard",
        description: "The quintessential aviator watch featuring an ergonomic 43mm steel case, striking blue dial and oversized conical crown.",
        specs: {
            movement: "Calibre 82100 (Pelaton Automatic)",
            powerReserve: "60 Hours",
            caseSize: "43.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "100 Meters",
            dialColor: "Blue Sunburst Dial",
            strap: "EasX-CHANGE Blue Rubber Strap"
        },
        featured: false
    },

    // JAEGER-LECOULTRE
    {
        id: "jlc-reverso-tribute",
        brandId: "jaeger-lecoultre",
        brandName: "Jaeger-LeCoultre",
        model: "Reverso Tribute Duoface Calendar",
        reference: "Ref. Q3918420",
        price: 16400,
        priceDisplay: "$16,400",
        originalPrice: "$18,000",
        availability: "In Stock",
        category: "Dress Horology",
        image: "assets/patek_nautilus.png",
        gallery: ["assets/patek_nautilus.png", "assets/vacheron_overseas.png"],
        badge: "Art Deco Icon",
        description: "Two distinct dials driven by a single mechanical movement inside a swiveling rectangular stainless steel case.",
        specs: {
            movement: "Calibre 853 (Manual)",
            powerReserve: "42 Hours",
            caseSize: "49.4 x 29.9 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "30 Meters",
            dialColor: "Silvered Sunray & Blue Clous de Paris",
            strap: "Fagliano Collection Leather Strap"
        },
        featured: false
    },

    // OMEGA
    {
        id: "omega-speedmaster-moonwatch",
        brandId: "omega",
        brandName: "Omega",
        model: "Speedmaster Professional Moonwatch",
        reference: "Ref. 310.30.42.50.01.002",
        price: 7600,
        priceDisplay: "$7,600",
        originalPrice: "$8,200",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/rolex_daytona.png",
        gallery: ["assets/rolex_daytona.png"],
        badge: "Moonwatch Legacy",
        description: "Co-Axial Master Chronometer chronograph certified by METAS. Asymmetrical 42mm case with step dial and sapphire crystal back.",
        specs: {
            movement: "Calibre 3861 (Manual Wind)",
            powerReserve: "50 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "50 Meters",
            dialColor: "Black Step Dial",
            strap: "Five-arched-links-per-row Steel Bracelet"
        },
        featured: false
    },

    // OFFICINE PANERAI
    {
        id: "panerai-luminor-marina",
        brandId: "panerai",
        brandName: "Officine Panerai",
        model: "Luminor Marina Quaranta Navy",
        reference: "Ref. PAM01270",
        price: 7400,
        priceDisplay: "$7,400",
        originalPrice: null,
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/hero_watch.png",
        gallery: ["assets/hero_watch.png"],
        badge: "Florentine Diver",
        description: "The classic Luminor silhouette with patented safety lock crown lever, deep blue sun-brushed sandwich dial and date display at 3 o'clock.",
        specs: {
            movement: "P.900 Calibre (Automatic)",
            powerReserve: "72 Hours (3 Days)",
            caseSize: "40.0 mm",
            caseMaterial: "AISI 316L Polished Steel",
            waterResistance: "100 Meters",
            dialColor: "Blue Sun-brushed Sandwich Dial",
            strap: "Alligator Dark Blue Strap"
        },
        featured: false
    },

    // RICHARD MILLE
    {
        id: "richard-mille-11-03",
        brandId: "richard-mille",
        brandName: "Richard Mille",
        model: "RM 11-03 Flyback Chronograph",
        reference: "Ref. RM11-03 Titanium",
        price: 265000,
        priceDisplay: "$265,000",
        originalPrice: "$290,000",
        availability: "Private Vault",
        category: "Avant-Garde",
        image: "assets/hero_watch.png",
        gallery: ["assets/hero_watch.png", "assets/rolex_daytona.png"],
        badge: "Ultra Rare",
        description: "Inspired by Formula 1 aerodynamics. Features variable-geometry rotor, skeletonized grade 5 titanium movement, and annual calendar flyback chronograph.",
        specs: {
            movement: "Caliber RMAC3 (Automatic Flyback)",
            powerReserve: "55 Hours",
            caseSize: "49.9 x 44.5 mm",
            caseMaterial: "Grade 5 Titanium & Carbon TPT",
            waterResistance: "50 Meters",
            dialColor: "Skeletonized Sapphire",
            strap: "Vented Navy Blue Rubber Strap"
        },
        featured: true
    },

    // ROGER DUBUIS
    {
        id: "roger-dubuis-excalibur",
        brandId: "roger-dubuis",
        brandName: "Roger Dubuis",
        model: "Excalibur Monobalancier Skeleton",
        reference: "Ref. DBEX0954",
        price: 72000,
        priceDisplay: "$72,000",
        originalPrice: "$80,000",
        availability: "Private Vault",
        category: "Avant-Garde",
        image: "assets/ap_royaloak.png",
        gallery: ["assets/ap_royaloak.png"],
        badge: "Geneva Seal",
        description: "Architectural star-shaped skeleton bridges crafted in EON gold with Poinçon de Genève certification.",
        specs: {
            movement: "RD720SQ Automatic Caliber",
            powerReserve: "72 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "18K EON Rose Gold",
            waterResistance: "100 Meters",
            dialColor: "Star Skeleton Openwork",
            strap: "3D Embossed Calf Leather"
        },
        featured: false
    },

    // TAG HEUER
    {
        id: "tag-heuer-monaco",
        brandId: "tag-heuer",
        brandName: "TAG Heuer",
        model: "Monaco Gulf Special Edition",
        reference: "Ref. CBL2115.FC6494",
        price: 7800,
        priceDisplay: "$7,800",
        originalPrice: null,
        availability: "In Stock",
        category: "Aviation Chronograph",
        image: "assets/rolex_daytona.png",
        gallery: ["assets/rolex_daytona.png"],
        badge: "Racing Legend",
        description: "The square-cased racing chronograph worn by Steve McQueen in 'Le Mans', painted with legendary Gulf racing stripes.",
        specs: {
            movement: "Heuer 02 Automatic Chronograph",
            powerReserve: "80 Hours",
            caseSize: "39.0 x 39.0 mm",
            caseMaterial: "Fine-brushed Steel",
            waterResistance: "100 Meters",
            dialColor: "Blue Sunray with Gulf Stripes",
            strap: "Blue Calfskin Racing Strap"
        },
        featured: false
    },

    // ULYSSE NARDIN
    {
        id: "ulysse-nardin-freak-x",
        brandId: "ulysse-nardin",
        brandName: "Ulysse Nardin",
        model: "Freak X Titanium Blue",
        reference: "Ref. 2303-270/03",
        price: 24500,
        priceDisplay: "$24,500",
        originalPrice: "$27,000",
        availability: "In Stock",
        category: "High Horology",
        image: "assets/vacheron_overseas.png",
        gallery: ["assets/vacheron_overseas.png"],
        badge: "Silicon Innovation",
        description: "The rebel watch with no hands and no dial. The movement itself rotates on its center axis to indicate the hours and minutes.",
        specs: {
            movement: "UN-230 Manufacture Flying Carousel",
            powerReserve: "72 Hours",
            caseSize: "43.0 mm",
            caseMaterial: "Titanium with Blue PVD",
            waterResistance: "50 Meters",
            dialColor: "Openwork Carousel Architecture",
            strap: "Blue Alligator Leather with Rubber Coating"
        },
        featured: false
    }
];

// WhatsApp Concierge Configuration
const WHATSAPP_CONFIG = {
    phoneNumber: "919274520512",
    formattedPhone: "+91 9274520512",
    defaultMessage: "Hi, I am interested in your luxury watch collection. Please share the available models, pictures and prices."
};
