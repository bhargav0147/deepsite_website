const fs = require('fs');
const path = require('path');

const brandLogos = {
    'audemars-piguet': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <polygon points="60,18 92,30 92,72 60,102 28,72 28,30" fill="none" stroke="#071A33" stroke-width="4" stroke-linejoin="round"/>
        <text x="60" y="58" font-family="'Fraunces', serif" font-weight="700" font-size="28" fill="#071A33" text-anchor="middle" letter-spacing="1">AP</text>
        <text x="60" y="78" font-family="sans-serif" font-weight="700" font-size="6.5" fill="#8EA0B5" text-anchor="middle" letter-spacing="1.5">LE BRASSUS</text>
    </svg>`,

    'breitling': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M60 25 C75 25 95 38 102 44 C90 48 72 48 60 42 C48 48 30 48 18 44 C25 38 45 25 60 25 Z" fill="#071A33"/>
        <text x="60" y="70" font-family="'Fraunces', serif" font-weight="700" font-size="32" fill="#071A33" text-anchor="middle">B</text>
        <text x="60" y="88" font-family="sans-serif" font-weight="700" font-size="6" fill="#8EA0B5" text-anchor="middle" letter-spacing="2">BREITLING</text>
    </svg>`,

    'cartier': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <text x="60" y="60" font-family="'Fraunces', Georgia, serif" font-style="italic" font-weight="700" font-size="36" fill="#071A33" text-anchor="middle">C</text>
        <text x="60" y="82" font-family="'Fraunces', Georgia, serif" font-weight="600" font-size="12" fill="#071A33" text-anchor="middle" letter-spacing="2">Cartier</text>
    </svg>`,

    'franck-muller': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <text x="60" y="56" font-family="'Fraunces', serif" font-weight="700" font-size="28" fill="#071A33" text-anchor="middle" letter-spacing="1">FM</text>
        <path d="M30 64 Q 60 72 90 64" stroke="#8EA0B5" stroke-width="2" fill="none"/>
        <text x="60" y="84" font-family="sans-serif" font-weight="700" font-size="5.5" fill="#071A33" text-anchor="middle" letter-spacing="1">FRANCK MULLER</text>
    </svg>`,

    'hublot': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="60" cy="52" r="32" fill="none" stroke="#071A33" stroke-width="4"/>
        <path d="M42 52 H78 M60 34 V70" stroke="#071A33" stroke-width="4" stroke-linecap="round"/>
        <text x="60" y="94" font-family="sans-serif" font-weight="800" font-size="8" fill="#071A33" text-anchor="middle" letter-spacing="2">HUBLOT</text>
    </svg>`,

    'iceout': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <polygon points="60,22 75,40 60,58 45,40" fill="#071A33"/>
        <polygon points="60,58 82,82 60,94 38,82" fill="#071A33"/>
        <polygon points="26,52 45,40 60,58 38,82" fill="#8EA0B5"/>
        <polygon points="94,52 75,40 60,58 82,82" fill="#8EA0B5"/>
        <circle cx="60" cy="58" r="6" fill="#FFFFFF"/>
    </svg>`,

    'iwc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <text x="60" y="58" font-family="'Fraunces', serif" font-weight="700" font-size="34" fill="#071A33" text-anchor="middle" letter-spacing="3">IWC</text>
        <text x="60" y="80" font-family="sans-serif" font-weight="700" font-size="7" fill="#8EA0B5" text-anchor="middle" letter-spacing="3">SCHAFFHAUSEN</text>
    </svg>`,

    'jaeger-lecoultre': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M40 32 H80 V40 H64 V80 H56 V40 H40 Z" fill="#071A33"/>
        <path d="M40 72 H80 V80 H40 Z" fill="#071A33"/>
        <circle cx="60" cy="24" r="5" fill="#8EA0B5"/>
        <text x="60" y="96" font-family="sans-serif" font-weight="700" font-size="6" fill="#071A33" text-anchor="middle" letter-spacing="1">JAEGER-LECOULTRE</text>
    </svg>`,

    'omega': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M36 76 H48 C48 58 50 36 60 36 C70 36 72 58 72 76 H84 C82 50 74 26 60 26 C46 26 38 50 36 76 Z" fill="#071A33"/>
        <text x="60" y="94" font-family="sans-serif" font-weight="800" font-size="9" fill="#071A33" text-anchor="middle" letter-spacing="2">OMEGA</text>
    </svg>`,

    'panerai': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <text x="60" y="54" font-family="'Fraunces', serif" font-weight="700" font-size="28" fill="#071A33" text-anchor="middle" letter-spacing="2">OP</text>
        <path d="M34 64 H86 M42 72 H78" stroke="#071A33" stroke-width="3" stroke-linecap="round"/>
        <text x="60" y="90" font-family="sans-serif" font-weight="700" font-size="7.5" fill="#8EA0B5" text-anchor="middle" letter-spacing="2">PANERAI</text>
    </svg>`,

    'patek-philippe': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M60 22 C55 35 45 45 32 50 C45 55 55 65 60 78 C65 65 75 55 88 50 C75 45 65 35 60 22 Z" fill="#071A33"/>
        <circle cx="60" cy="50" r="6" fill="#8EA0B5"/>
        <text x="60" y="94" font-family="sans-serif" font-weight="700" font-size="6.5" fill="#071A33" text-anchor="middle" letter-spacing="1">PATEK PHILIPPE</text>
    </svg>`,

    'richard-mille': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M38 28 L82 28 L90 60 L82 92 L38 92 L30 60 Z" fill="none" stroke="#071A33" stroke-width="4"/>
        <text x="60" y="62" font-family="'Fraunces', serif" font-weight="700" font-size="20" fill="#071A33" text-anchor="middle" letter-spacing="1">RM</text>
        <text x="60" y="80" font-family="sans-serif" font-weight="700" font-size="5.5" fill="#8EA0B5" text-anchor="middle" letter-spacing="1.5">RICHARD MILLE</text>
    </svg>`,

    'roger-dubuis': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M60 20 L70 46 L96 56 L70 66 L60 92 L50 66 L24 56 L50 46 Z" fill="#071A33"/>
        <circle cx="60" cy="56" r="9" fill="#8EA0B5"/>
        <text x="60" y="104" font-family="sans-serif" font-weight="700" font-size="6" fill="#071A33" text-anchor="middle" letter-spacing="1">ROGER DUBUIS</text>
    </svg>`,

    'rolex': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M60 26 L68 44 L86 36 L78 58 L94 62 L60 74 L26 62 L42 58 L34 36 L52 44 Z" fill="#071A33"/>
        <text x="60" y="92" font-family="sans-serif" font-weight="800" font-size="10" fill="#071A33" text-anchor="middle" letter-spacing="2">ROLEX</text>
    </svg>`,

    'tag-heuer': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M30 32 H90 L90 56 L60 90 L30 56 Z" fill="#071A33"/>
        <path d="M30 56 H90" stroke="#FFFFFF" stroke-width="3"/>
        <text x="60" y="48" font-family="sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" text-anchor="middle">TAG</text>
        <text x="60" y="76" font-family="sans-serif" font-weight="800" font-size="10" fill="#FFFFFF" text-anchor="middle">HEUER</text>
    </svg>`,

    'ulysse-nardin': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="60" cy="34" r="8" fill="none" stroke="#071A33" stroke-width="3"/>
        <path d="M60 42 V82 M36 60 H84 M30 74 C38 90 82 90 90 74" fill="none" stroke="#071A33" stroke-width="3.5" stroke-linecap="round"/>
        <text x="60" y="102" font-family="sans-serif" font-weight="700" font-size="6" fill="#071A33" text-anchor="middle" letter-spacing="1">ULYSSE NARDIN</text>
    </svg>`,

    'vacheron-constantin': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">
        <circle cx="60" cy="60" r="56" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M60 24 L72 48 L96 60 L72 72 L60 96 L48 72 L24 60 L48 48 Z" fill="#071A33"/>
        <text x="60" y="104" font-family="sans-serif" font-weight="700" font-size="5.5" fill="#071A33" text-anchor="middle" letter-spacing="1">VACHERON CONSTANTIN</text>
    </svg>`
};

const outputDir = path.join(__dirname, 'assets', 'brand-logo');

Object.keys(brandLogos).forEach(brand => {
    const filePath = path.join(outputDir, `${brand}.svg`);
    fs.writeFileSync(filePath, brandLogos[brand]);
    console.log(`Generated logo SVG: ${filePath}`);
});
