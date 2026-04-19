import re

with open(r"c:\Users\varma\Downloads\avighna landinng\avighna landinng\index.html", "r", encoding="utf-8") as f:
    content = f.read()

style_match = re.search(r"<style>(.*?)</style>", content, re.DOTALL)
if style_match:
    css = style_match.group(1)
    
    # 1. Update Variables
    css = re.sub(r"--gold:\s*#[0-9A-Fa-f]+;", "--gold: #C9A96E;", css)
    css = re.sub(r"--gold-light:\s*#[0-9A-Fa-f]+;", "--gold-light: #E3C388;", css)
    css = re.sub(r"--gold-dark:\s*#[0-9A-Fa-f]+;", "--gold-dark: #A88851;", css)
    css = re.sub(r"--deep:\s*#[0-9A-Fa-f]+;", "--deep: #1F3D2B;", css)
    css = re.sub(r"--deep2:\s*#[0-9A-Fa-f]+;", "--deep2: #152A1D;", css)
    css = re.sub(r"--cream:\s*#[0-9A-Fa-f]+;", "--cream: #F8F6F2;", css)
    css = re.sub(r"--cream2:\s*#[0-9A-Fa-f]+;", "--cream2: #EFEBE1;", css)
    css = re.sub(r"--text:\s*#[0-9A-Fa-f]+;", "--text: #2C2C2C;", css)
    css = re.sub(r"--muted:\s*#[0-9A-Fa-f]+;", "--muted: #5C5C5C;", css)
    
    # Nav
    css = css.replace("background: rgba(10, 22, 40, 0.96);", "background: rgba(248, 246, 242, 0.96);")
    css = re.sub(r"(\.nav-brand\s*{[^}]*color:\s*)var\(--gold\);", r"\1var(--deep);", css)
    css = re.sub(r"(\.nav-brand span\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--muted);", css)

    # Hero
    css = re.sub(r"(\.hero\s*{[^}]*background:\s*)linear-gradient\([^)]+\)", r"\1var(--cream)", css)
    css = css.replace("radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201, 168, 76, 0.08) 0%, transparent 70%),", "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(201, 169, 110, 0.15) 0%, transparent 70%),")
    css = css.replace("radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);", "radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201, 169, 110, 0.1) 0%, transparent 60%);")
    
    # Hero text colors
    css = re.sub(r"(\.hero h1\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--text);", css)
    css = re.sub(r"(\.hero-sub\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.72\);", r"\1var(--muted);", css)
    
    # Buttons
    css = re.sub(r"(\.btn-outline\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--deep);", css)
    css = re.sub(r"(\.btn-outline\s*{[^}]*border:\s*)1\.5px solid rgba\(255, 255, 255, 0\.4\);", r"\11.5px solid var(--deep);", css)
    css = re.sub(r"(\.btn-outline:hover\s*{[^}]*border-color:\s*)var\(--gold\);", r"\1var(--deep);", css)
    css = re.sub(r"(\.btn-outline:hover\s*{[^}]*color:\s*)var\(--gold\);", r"\1var(--white);", css)
    css = css.replace(".btn-outline:hover {\n      border-color: var(--deep);\n      color: var(--white);", ".btn-outline:hover {\n      background: var(--deep);\n      border-color: var(--deep);\n      color: var(--white);")

    # Hero Stats
    css = re.sub(r"(\.hero-stats\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.08\);", r"\1rgba(0, 0, 0, 0.05);", css)
    css = re.sub(r"(\.stat-item\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.04\);", r"\1var(--white);", css)
    css = re.sub(r"(\.stat-label\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.55\);", r"\1var(--muted);", css)
    
    # Hero card
    css = re.sub(r"(\.hero-card\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.05\);", r"\1var(--white);", css)
    css = re.sub(r"(\.hero-card p\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.6\);", r"\1var(--muted);", css)
    
    css = re.sub(r"(\.form-field input,\s*\.form-field select\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.08\);", r"\1var(--cream);", css)
    css = re.sub(r"(\.form-field input,\s*\.form-field select\s*{[^}]*border:\s*)1px solid rgba\(255, 255, 255, 0\.18\);", r"\11px solid rgba(0, 0, 0, 0.1);", css)
    css = re.sub(r"(\.form-field input,\s*\.form-field select\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--text);", css)
    css = re.sub(r"(\.form-field input::placeholder\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.4\);", r"\1var(--muted);", css)
    css = re.sub(r"(\.form-field select option\s*{[^}]*background:\s*)var\(--deep2\);", r"\1var(--white);", css)
    
    css = re.sub(r"(\.form-note\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.35\);", r"\1var(--muted);", css)
    
    # Trust band
    css = re.sub(r"(\.trust-band\s*{[^}]*background:\s*)var\(--deep\);", r"\1var(--deep);", css)
    
    # Testimonials section
    css = re.sub(r"(\.testimonials-section\s*{[^}]*background:\s*)var\(--deep\);", r"\1var(--cream2);", css)
    css = re.sub(r"(\.testimonials-section \.section-title\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--text);", css)
    css = re.sub(r"(\.testimonials-section \.section-desc\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.6\);", r"\1var(--muted);", css)
    
    css = re.sub(r"(\.rating-info p\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.5\);", r"\1var(--muted);", css)
    css = re.sub(r"(\.tcard\s*{[^}]*background:\s*)rgba\(255, 255, 255, 0\.05\);", r"\1var(--white);", css)
    css = re.sub(r"(\.tcard-text\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.82\);", r"\1var(--text);", css)
    css = re.sub(r"(\.tcard-name\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--deep);", css)
    
    # Offerings section
    css = re.sub(r"(\.offer-card\s*{[^}]*background:\s*)var\(--deep\);", r"\1var(--white);", css)
    css = re.sub(r"(\.offer-card h3\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--text);", css)
    css = re.sub(r"(\.offer-card \.tagline\s*{[^}]*color:\s*)var\(--gold-light\);", r"\1var(--gold-dark);", css)
    css = re.sub(r"(\.offer-header\s*{[^}]*border-bottom:\s*)1px solid rgba\(255, 255, 255, 0\.08\);", r"\11px solid rgba(0, 0, 0, 0.08);", css)
    css = re.sub(r"(\.offer-list li\s*{[^}]*color:\s*)rgba\(255, 255, 255, 0\.72\);", r"\1var(--muted);", css)
    css = re.sub(r"(\.offer-list li\s*{[^}]*border-bottom:\s*)1px solid rgba\(255, 255, 255, 0\.06\);", r"\11px solid rgba(0, 0, 0, 0.06);", css)
    
    # Offer CTA
    css = re.sub(r"(\.offer-cta\s*{[^}]*color:\s*)var\(--gold-light\);", r"\1var(--deep);", css)
    css = re.sub(r"(\.offer-cta:hover\s*{[^}]*color:\s*)var\(--deep\);", r"\1var(--white);", css)

    # Problem → Solution
    css = re.sub(r"(\.ps-section\s*{[^}]*background:\s*)var\(--deep2\);", r"\1var(--cream);", css)
    css = re.sub(r"(\.ps-section \.section-title\s*{[^}]*color:\s*)var\(--white\);", r"\1var(--text);", css)
    css = re.sub(r"(\.ps-col\.pain \.ps-item\s*{[^}]*background:\s*)rgba\(192, 57, 43, 0\.12\);", r"\1rgba(192, 57, 43, 0.05);", css)
    css = re.sub(r"(\.ps-col\.solution \.ps-item\s*{[^}]*background:\s*)rgba\(30, 120, 70, 0\.12\);", r"\1rgba(31, 61, 43, 0.05);", css) 
    css = re.sub(r"(\.ps-col\.solution \.ps-item\s*{[^}]*border:\s*)1px solid rgba\(30, 120, 70, 0\.25\);", r"\11px solid rgba(31, 61, 43, 0.15);", css)
    css = re.sub(r"(\.ps-col\.pain \.ps-item p\s*{[^}]*color:\s*)rgba\(255, 180, 180, 0\.85\);", r"\1var(--text);", css)
    css = re.sub(r"(\.ps-col\.solution \.ps-item p\s*{[^}]*color:\s*)rgba\(160, 240, 180, 0\.85\);", r"\1var(--text);", css)
    
    # Location
    css = re.sub(r"(\.location-map\s*{[^}]*background:\s*)var\(--deep\);", r"\1var(--cream2);", css)

    # Rathnagiri Title (if dark, change to light, wait. It has overlay)
    # The overlay is: linear-gradient(to top, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.4) 40%, rgba(10, 22, 40, 0.0) 100%)
    # Let's keep Rathnagiri section as is since it is an image overlay, text should stay white.
    
    new_content = content.replace(style_match.group(1), css)
    with open(r"c:\Users\varma\Downloads\avighna landinng\avighna landinng\index.html", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("CSS Updated Successfully")
else:
    print("Style tag not found")
