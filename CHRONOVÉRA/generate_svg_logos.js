const fs = require('fs');
const path = require('path');

const brandLogos = {
    'iceout': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M50 20 L62 35 L50 50 L38 35 Z" fill="#071A33"/>
        <path d="M50 50 L68 70 L50 80 L32 70 Z" fill="#071A33"/>
        <path d="M22 45 L38 35 L50 50 L32 70 Z" fill="#8EA0B5"/>
        <path d="M78 45 L62 35 L50 50 L68 70 Z" fill="#8EA0B5"/>
        <circle cx="50" cy="50" r="6" fill="#FFFFFF"/>
    </svg>`,

    'iwc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <text x="50" y="48" font-family="'Fraunces', serif" font-weight="700" font-size="28" fill="#071A33" text-anchor="middle" letter-spacing="2">IWC</text>
        <text x="50" y="66" font-family="sans-serif" font-weight="600" font-size="7" fill="#8EA0B5" text-anchor="middle" letter-spacing="3">SCHAFFHAUSEN</text>
    </svg>`,

    'jaeger-lecoultre': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M35 30 H65 V36 H53 V70 H47 V36 H35 Z" fill="#071A33"/>
        <path d="M35 64 H65 V70 H35 Z" fill="#071A33"/>
        <circle cx="50" cy="24" r="4" fill="#8EA0B5"/>
        <text x="50" y="82" font-family="sans-serif" font-weight="700" font-size="6" fill="#071A33" text-anchor="middle" letter-spacing="1">JAEGER-LECOULTRE</text>
    </svg>`,

    'omega': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M30 65 H40 C40 50 42 32 50 32 C58 32 60 50 60 65 H70 C68 45 62 25 50 25 C38 25 32 45 30 65 Z" fill="#071A33"/>
        <text x="50" y="80" font-family="sans-serif" font-weight="700" font-size="8" fill="#071A33" text-anchor="middle" letter-spacing="2">OMEGA</text>
    </svg>`,

    'panerai': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <text x="50" y="44" font-family="'Fraunces', serif" font-weight="700" font-size="22" fill="#071A33" text-anchor="middle" letter-spacing="2">OP</text>
        <path d="M28 52 H72 M35 58 H65" stroke="#071A33" stroke-width="3" stroke-linecap="round"/>
        <text x="50" y="74" font-family="sans-serif" font-weight="700" font-size="7" fill="#8EA0B5" text-anchor="middle" letter-spacing="2">PANERAI</text>
    </svg>`,

    'richard-mille': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M32 25 L68 25 L75 50 L68 75 L32 75 L25 50 Z" fill="none" stroke="#071A33" stroke-width="3"/>
        <text x="50" y="52" font-family="'Fraunces', serif" font-weight="700" font-size="16" fill="#071A33" text-anchor="middle" letter-spacing="1">RM</text>
        <text x="50" y="66" font-family="sans-serif" font-weight="600" font-size="5.5" fill="#8EA0B5" text-anchor="middle" letter-spacing="1.5">RICHARD MILLE</text>
    </svg>`,

    'roger-dubuis': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M50 20 L58 42 L80 50 L58 58 L50 80 L42 58 L20 50 L42 42 Z" fill="#071A33"/>
        <circle cx="50" cy="50" r="8" fill="#8EA0B5"/>
        <text x="50" y="90" font-family="sans-serif" font-weight="700" font-size="5.5" fill="#071A33" text-anchor="middle" letter-spacing="1">ROGER DUBUIS</text>
    </svg>`,

    'tag-heuer': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <path d="M25 30 H75 L75 50 L50 78 L25 50 Z" fill="#071A33"/>
        <path d="M25 50 H75" stroke="#FFFFFF" stroke-width="2"/>
        <text x="50" y="44" font-family="sans-serif" font-weight="900" font-size="12" fill="#FFFFFF" text-anchor="middle">TAG</text>
        <text x="50" y="66" font-family="sans-serif" font-weight="700" font-size="9" fill="#FFFFFF" text-anchor="middle">HEUER</text>
    </svg>`,

    'ulysse-nardin': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <circle cx="50" cy="50" r="46" fill="#F7F9FC" stroke="#E2E8F0" stroke-width="2"/>
        <circle cx="50" cy="30" r="7" fill="none" stroke="#071A33" stroke-width="3"/>
        <path d="M50 37 V72 M30 52 H70 M26 65 C32 78 68 78 74 65" fill="none" stroke="#071A33" stroke-width="3" stroke-linecap="round"/>
        <text x="50" y="86" font-family="sans-serif" font-weight="700" font-size="5.5" fill="#071A33" text-anchor="middle" letter-spacing="1">ULYSSE NARDIN</text>
    </svg>`
};

const outputDir = path.join(__dirname, 'assets', 'brand-logo');

Object.keys(brandLogos).forEach(brand => {
    const filePath = path.join(outputDir, `${brand}.svg`);
    fs.writeFileSync(filePath, brandLogos[brand]);
    console.log(`Saved: ${filePath}`);
});
