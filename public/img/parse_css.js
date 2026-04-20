const fs = require('fs');

const file = 'c:\\Users\\varma\\Downloads\\avighna landinng\\avighna landinng\\index.html';
let content = fs.readFileSync(file, 'utf8');

const styleRegex = /<style>([\s\S]*?)<\/style>/;
const match = styleRegex.exec(content);

if (match) {
    let css = match[1];

    // Variables
    css = css.replace(/--gold:\s*#[0-9A-Fa-f]+;/, '--gold: #C9A96E;');
    css = css.replace(/--gold-light:\s*#[0-9A-Fa-f]+;/, '--gold-light: #E3C388;');
    css = css.replace(/--gold-dark:\s*#[0-9A-Fa-f]+;/, '--gold-dark: #A88851;');
    css = css.replace(/--deep:\s*#[0-9A-Fa-f]+;/, '--deep: #1F3D2B;');
    css = css.replace(/--deep2:\s*#[0-9A-Fa-f]+;/, '--deep2: #152A1D;');
    css = css.replace(/--cream:\s*#[0-9A-Fa-f]+;/, '--cream: #F8F6F2;');
    css = css.replace(/--cream2:\s*#[0-9A-Fa-f]+;/, '--cream2: #EFEBE1;');
    css = css.replace(/--text:\s*#[0-9A-Fa-f]+;/, '--text: #2C2C2C;');
    css = css.replace(/--muted:\s*#[0-9A-Fa-f]+;/, '--muted: #5C5C5C;');
    css = css.replace(/--green:\s*#[0-9A-Fa-f]+;/, '--green: #155E38;');

    // Nav
    css = css.replace('background: rgba(10, 22, 40, 0.96);', 'background: rgba(248, 246, 242, 0.96);');
    css = css.replace(/(\.nav-brand\s*{[^}]*color:\s*)var\(--gold\);/, '$1var(--deep);');
    css = css.replace(/(\.nav-brand span\s*{[^}]*color:\s*)var\(--white\);/, '$1var(--muted);');

    // Hero Background
    css = css.replace(/(\.hero\s*{[^}]*background:\s*)linear-gradient\([^)]+\)/, '$1var(--cream)');
    css = css.replace('radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 70%),', 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201, 169, 110, 0.15) 0%, transparent 70%),');
    css = css.replace('radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);', 'radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201, 169, 110, 0.1) 0%, transparent 60%);');

    // Hero Text
    css = css.replace(/(\.hero h1\s*{[^}]*color:\s*)var\(--white\);/, '$1var(--text);');
    css = css.replace(/(\.hero-sub\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.72\);/, '$1var(--muted);');

    // Buttons
    css = css.replace(/(\.btn-outline\s*{[^}]*color:\s*)var\(--white\);/, '$1var(--deep);');
    css = css.replace(/(\.btn-outline\s*{[^}]*border:\s*)1\.5px solid rgba\(255, 255, 255, 0\.4\);/, '$11.5px solid var(--deep);');
    css = css.replace(/(\.btn-outline:hover\s*{[^}]*border-color:\s*)var\(--gold\);/, '$1var(--deep);');
    css = css.replace(/(\.btn-outline:hover\s*{[^}]*color:\s*)var\(--gold\);/, '$1var(--white);');
    css = css.replace('.btn-outline:hover {\n      border-color: var(--deep);\n      color: var(--white);', '.btn-outline:hover {\n      background: var(--deep);\n      border-color: var(--deep);\n      color: var(--white);');

    // Section Titles
    css = css.replace(/(\.section-title\s*{[^}]*color:\s*)var\(--white\);/g, '$1var(--text);');
    css = css.replace(/(\.section-desc\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.6\);/g, '$1var(--muted);');

    // Hero Stats
    css = css.replace(/(\.hero-stats\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.08\);/g, '$1rgba(0, 0, 0, 0.05);');
    css = css.replace(/(\.stat-item\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.04\);/g, '$1var(--white);');
    css = css.replace(/(\.stat-label\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.55\);/g, '$1var(--muted);');

    // Hero Card
    css = css.replace(/(\.hero-card\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.05\);/, '$1var(--white);');
    css = css.replace(/(\.hero-card\s*{[^}]*border:\s*)1px solid rgba\(201, 168, 76, 0\.2\);/, '$11px solid rgba(201, 169, 110, 0.3);');
    css = css.replace(/(\.hero-card h3\s*{[^}]*color:\s*)var\(--gold\);/, '$1var(--deep);');
    css = css.replace(/(\.hero-card p\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.6\);/, '$1var(--muted);');

    // Forms
    css = css.replace(/(\.form-field input,\s*\.form-field select\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.08\);/, '$1var(--cream);');
    css = css.replace(/(\.form-field input,\s*\.form-field select\s*{[^}]*border:\s*)1px solid rgba\(255, 255, 255, 0\.18\);/, '$11px solid rgba(0, 0, 0, 0.1);');
    css = css.replace(/(\.form-field input,\s*\.form-field select\s*{[^}]*color:\s*)var\(--white\);/, '$1var(--text);');
    css = css.replace(/(\.form-field input::placeholder\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.4\);/, '$1var(--muted);');
    css = css.replace(/(\.form-field select option\s*{[^}]*background:\s*)var\(--deep2\);/, '$1var(--white);');
    css = css.replace(/(\.form-note\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.35\);/, '$1var(--muted);');

    // Trust Band
    css = css.replace(/(\.trust-band\s*{[^}]*background:\s*)var\(--deep\);/, '$1var(--deep);');

    // Testimonials
    css = css.replace(/(\.testimonials-section\s*{[^}]*background:\s*)var\(--deep\);/, '$1var(--cream2);');
    css = css.replace(/(\.testimonials-section \.section-title\s*{[^}]*color:\s*)var\(--white\);/, '$1var(--text);');
    css = css.replace(/(\.testimonials-section \.section-desc\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.6\);/, '$1var(--muted);');
    css = css.replace(/(\.rating-info p\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.5\);/, '$1var(--muted);');
    css = css.replace(/(\.tcard\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.05\);/g, '$1var(--white);');
    css = css.replace(/(\.tcard-text\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.82\);/g, '$1var(--text);');
    css = css.replace(/(\.tcard-name\s*{[^}]*color:\s*)var\(--white\);/g, '$1var(--deep);');

    // Offerings
    css = css.replace(/(\.offer-card\s*{[^}]*background:\s*)var\(--deep\);/g, '$1var(--white);');
    css = css.replace(/(\.offer-card h3\s*{[^}]*color:\s*)var\(--white\);/g, '$1var(--text);');
    css = css.replace(/(\.offer-card \.tagline\s*{[^}]*color:\s*)var\(--gold-light\);/g, '$1var(--gold-dark);');
    css = css.replace(/(\.offer-header\s*{[^}]*border-bottom:\s*)1px solid rgba\(255, 255, 255, 0\.08\);/g, '$11px solid rgba(0, 0, 0, 0.08);');
    css = css.replace(/(\.offer-list li\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.72\);/g, '$1var(--muted);');
    css = css.replace(/(\.offer-list li\s*{[^}]*border-bottom:\s*)1px solid rgba\(255, 255, 255, 0\.06\);/g, '$11px solid rgba(0, 0, 0, 0.06);');
    css = css.replace(/(\.offer-cta\s*{[^}]*color:\s*)var\(--gold-light\);/g, '$1var(--deep);');
    css = css.replace(/(\.offer-cta:hover\s*{[^}]*color:\s*)var\(--deep\);/g, '$1var(--white);');

    // Problem/Solution
    css = css.replace(/(\.ps-section\s*{[^}]*background:\s*)var\(--deep2\);/, '$1var(--cream);');
    css = css.replace(/(\.ps-section \.section-title\s*{[^}]*color:\s*)var\(--white\);/, '$1var(--text);');
    css = css.replace(/(\.ps-col\.pain \.ps-item\s*{[^}]*background:\s*)rgba\(192, 57, 43, 0\.12\);/g, '$1rgba(192, 57, 43, 0.05);');
    css = css.replace(/(\.ps-col\.solution \.ps-item\s*{[^}]*background:\s*)rgba\(30, 120, 70, 0\.12\);/g, '$1rgba(31, 61, 43, 0.05);');
    css = css.replace(/(\.ps-col\.solution \.ps-item\s*{[^}]*border:\s*)1px solid rgba\(30, 120, 70, 0\.25\);/g, '$11px solid rgba(31, 61, 43, 0.15);');
    css = css.replace(/(\.ps-col\.pain \.ps-item p\s*{[^}]*color:\s*)rgba\(255, 180, 180, 0\.85\);/g, '$1var(--text);');
    css = css.replace(/(\.ps-col\.solution \.ps-item p\s*{[^}]*color:\s*)rgba\(160, 240, 180, 0\.85\);/g, '$1var(--text);');

    // Location Map
    css = css.replace(/(\.location-map\s*{[^}]*background:\s*)var\(--deep\);/, '$1var(--cream2);');

    // CTA Section
    css = css.replace(/(\.cta-section\s*{[^}]*background:\s*)linear-gradient\(135deg, var\(--deep\) 0%, #0C2244 100%\);/, '$1var(--deep);');

    content = content.replace(match[1], css);
    fs.writeFileSync(file, content, 'utf8');
    console.log("CSS Updated Successfully in index.html");
} else {
    console.log("Style block not found.");
}
