/* ===== DATA ===== */
const TREATMENTS = [
    { name: "Dental Implants", icon: "fa-solid fa-tooth", overview: "A permanent solution for missing teeth. Titanium implants are surgically placed in the jawbone, providing a foundation for natural-looking crowns. Unlike dentures, implants prevent bone loss and function exactly like real teeth.", benefits: ["Permanent tooth replacement", "Prevents jawbone deterioration", "Looks and feels natural", "No damage to adjacent teeth", "Lifetime durability with proper care"], procedure: ["Comprehensive consultation and 3D CBCT scan", "Digital treatment planning with guided surgery software", "Implant placement under local anesthesia or sedation", "Healing period of 3-6 months (osseointegration)", "Crown fabrication and fitting"], recovery: "Most patients return to normal activities within 2-3 days. Mild swelling and discomfort for 3-5 days is normal. Soft diet recommended for 1-2 weeks. Full healing and osseointegration takes 3-6 months.", faq: [{ q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The crown may need replacement after 10-15 years due to normal wear, but the implant itself is permanent." }, { q: "Am I a candidate for dental implants?", a: "Most adults with good general health and adequate jawbone are candidates. Even if you've experienced bone loss, bone grafting can make implants possible. A consultation will determine your suitability." }] },
    { name: "All-on-4", icon: "fa-solid fa-teeth", overview: "A revolutionary full-arch restoration using just 4 implants per jaw. The strategic placement allows for immediate loading — meaning you walk out with a fixed set of teeth the same day. Ideal for patients with significant tooth loss or failing dentition.", benefits: ["Full arch restoration in 24 hours", "Only 4 implants needed", "No bone grafting usually required", "Fixed, non-removable teeth", "Significant cost savings vs individual implants"], procedure: ["3D imaging and treatment planning", "Sedation and implant placement (4 implants per arch)", "Immediate attachment of temporary fixed teeth", "Healing period of 3-6 months", "Final prosthesis fitting and adjustment"], recovery: "Same-day temporary teeth allow normal function immediately. Swelling and mild discomfort for 5-7 days. Soft diet for 6-8 weeks while implants integrate. Final restoration fitted after 3-6 months.", faq: [{ q: "How is All-on-4 different from individual implants?", a: "All-on-4 uses just 4 strategically placed implants to support an entire arch of teeth, rather than replacing each tooth individually. This reduces surgery time, cost, and healing while providing the same functional and aesthetic results." }, { q: "Can I really get teeth in one day?", a: "Yes. With All-on-4, temporary fixed teeth are attached the same day as surgery. You'll leave the clinic with a functional, natural-looking smile. These temporaries are replaced with your final prosthesis after healing." }] },
    { name: "All-on-6", icon: "fa-solid fa-teeth", overview: "Similar to All-on-4 but using 6 implants per arch for enhanced stability and load distribution. Recommended for patients with adequate bone density who want maximum support, particularly for the upper jaw or patients with stronger bite forces.", benefits: ["Enhanced stability and strength", "Better load distribution", "Ideal for upper arch restoration", "Supports more teeth naturally", "Higher long-term success in complex cases"], procedure: ["Comprehensive 3D assessment", "Treatment planning with 6-implant design", "Surgical placement under sedation", "Immediate temporary prosthesis", "Final prosthesis after 4-6 months"], recovery: "Similar to All-on-4 with same-day temporary teeth. Slightly longer initial recovery (5-7 days) due to additional implant sites. Final prosthesis fitted after 4-6 months of integration.", faq: [{ q: "All-on-4 vs All-on-6 — which is right for me?", a: "All-on-6 provides additional support and is recommended for patients with strong bite forces, adequate bone, or those wanting extra security. All-on-4 is often sufficient and more economical. Your specialist will recommend the best option based on your anatomy." }] },
    { name: "Full Mouth Rehabilitation", icon: "fa-solid fa-tooth", overview: "A comprehensive treatment addressing all teeth in both arches. Combines implants, crowns, bridges, and other procedures to restore full function, health, and aesthetics. The ultimate smile transformation for complex cases.", benefits: ["Complete oral restoration", "Addresses functional and aesthetic issues", "Customized multi-disciplinary approach", "Dramatic quality of life improvement", "Comprehensive long-term dental health"], procedure: ["Full diagnostic workup (3D imaging, photos, models)", "Multi-disciplinary treatment planning", "Phased treatment execution", "Provisional restorations for evaluation", "Final restorations and maintenance plan"], recovery: "Varies based on procedures involved. Typically requires multiple visits over 7-14 days. Phased approach allows for healing between stages. Full recovery within 3-6 months.", faq: [{ q: "How long does full mouth rehabilitation take?", a: "The timeline varies based on your specific needs. Most cases are completed in 7-14 days of treatment in Dubai, with final restorations fitted after a 3-6 month healing period. A personalized timeline will be provided during consultation." }] },
    { name: "Veneers", icon: "fa-solid fa-image", overview: "Ultra-thin porcelain shells custom-crafted to cover the front surface of teeth. Transform chips, stains, gaps, and minor misalignments into a flawless, natural-looking smile. Minimal tooth preparation required.", benefits: ["Instant smile transformation", "Natural porcelain appearance", "Stain-resistant material", "Minimal tooth reduction", "Results last 10-15+ years"], procedure: ["Smile design consultation and digital preview", "Minimal tooth preparation (0.5mm)", "Digital impressions", "Custom veneer fabrication (2-3 days)", "Bonding and final adjustments"], recovery: "No downtime. Some sensitivity to hot/cold for 1-2 weeks. Normal eating and activities resume immediately after placement.", faq: [{ q: "Are veneers reversible?", a: "Traditional veneers require minimal tooth preparation and are considered irreversible. However, we also offer no-prep veneers that don't require enamel removal. Your dentist will discuss the best option for your situation." }, { q: "How long do veneers last?", a: "High-quality porcelain veneers typically last 10-15+ years with proper care. Avoid excessive force (teeth grinding, biting hard objects) and maintain regular hygiene visits to maximize longevity." }] },
    { name: "Smile Makeover", icon: "fa-solid fa-wand-magic-sparkles", overview: "A comprehensive aesthetic transformation combining multiple treatments — veneers, crowns, whitening, and gum contouring — to create your perfect smile. Every detail is digitally designed and previewed before treatment begins.", benefits: ["Fully customized to your face", "Digital preview before treatment", "Combines multiple procedures", "Dramatic aesthetic transformation", "Boosted confidence and self-esteem"], procedure: ["Comprehensive aesthetic assessment", "Digital smile design and preview", "Treatment sequencing", "Procedures performed (veneers, crowns, etc.)", "Final reveal and refinement"], recovery: "Depends on procedures included. Most patients resume normal activities within 2-3 days. Full aesthetic result visible once all procedures are complete.", faq: [{ q: "Can I see my new smile before treatment?", a: "Absolutely. We use digital smile design technology to create a preview of your new smile before any treatment begins. You can approve, modify, or request changes before we start." }] },
    { name: "Crowns", icon: "fa-solid fa-crown", overview: "Custom-fitted caps that completely cover damaged or weakened teeth. Made from premium zirconia or porcelain for strength and natural aesthetics. Restores function while protecting the underlying tooth.", benefits: ["Restores damaged teeth", "Natural appearance", "Durable and long-lasting", "Protects weakened teeth", "Same-day options available"], procedure: ["Tooth assessment and preparation", "Digital impression (no messy molds)", "Crown design and manufacturing", "Fitting and adjustment", "Permanent bonding"], recovery: "No downtime. Mild sensitivity for 1-2 days. Normal eating resumes after bonding. Avoid very hard foods for 24 hours.", faq: [{ q: "What material is best for crowns?", a: "Zirconia offers the best combination of strength and aesthetics. It's highly durable, natural-looking, and biocompatible. For front teeth, we may recommend layered porcelain for maximum translucency." }] },
    { name: "Bridges", icon: "fa-solid fa-bridge", overview: "A fixed solution for replacing one or more missing teeth. Uses adjacent teeth as supports (abutments) with artificial teeth (pontics) in between. An excellent alternative when implants aren't suitable.", benefits: ["Replaces missing teeth", "Prevents teeth from shifting", "Restores chewing function", "Fixed (non-removable) solution", "More affordable than implants"], procedure: ["Assessment of adjacent teeth", "Preparation of abutment teeth", "Digital impression", "Custom bridge fabrication", "Fitting and cementation"], recovery: "Mild sensitivity for 1-2 weeks. Normal eating resumes after cementation. Adjustments may be needed during the first few weeks.", faq: [{ q: "How long do dental bridges last?", a: "With proper care, bridges typically last 10-15 years. Good oral hygiene and regular checkups are essential, as the supporting teeth must remain healthy for the bridge to function properly." }] },
    { name: "Professional Whitening", icon: "fa-solid fa-star", overview: "Professional-grade whitening that brightens your smile by up to 8 shades. Our in-clinic treatment uses advanced LED technology for immediate results in a single visit. Safe, effective, and enamel-friendly.", benefits: ["Up to 8 shades brighter", "Single 60-minute session", "Enamel-safe formula", "Long-lasting results", "Immediate visible improvement"], procedure: ["Cleaning and shade assessment", "Gum protection application", "Whitening gel application", "LED activation (3 cycles)", "Final shade evaluation and aftercare"], recovery: "No downtime. Avoid staining foods/drinks (coffee, red wine, berries) for 48 hours. Some sensitivity for 24-48 hours is normal.", faq: [{ q: "Is professional whitening safe?", a: "Yes. Our professional whitening is completely safe when performed under dental supervision. We use enamel-safe formulas and protect your gums during the procedure. It's significantly safer than over-the-counter alternatives." }] },
    { name: "Root Canal Treatment", icon: "fa-solid fa-tooth", overview: "A procedure to save a severely decayed or infected tooth. The infected pulp is removed, the canal is cleaned and sealed, and a crown is placed for protection. Modern techniques make this a comfortable, virtually painless experience.", benefits: ["Saves natural tooth", "Eliminates pain and infection", "Prevents extraction", "Modern, painless techniques", "Preserves natural bite and appearance"], procedure: ["Diagnosis with 3D imaging", "Local anesthesia", "Infected pulp removal", "Canal cleaning and sealing", "Crown placement for protection"], recovery: "Mild discomfort for 2-3 days. Normal activities resume immediately. Avoid chewing on the treated side until the crown is placed.", faq: [{ q: "Is a root canal painful?", a: "Modern root canal treatment is virtually painless. With local anesthesia and advanced techniques, most patients report it feels no different than getting a filling. The procedure actually relieves the pain caused by the infection." }] },
    { name: "Gum Treatment", icon: "fa-solid fa-heart-pulse", overview: "Comprehensive periodontal care to treat gum disease, from gingivitis to advanced periodontitis. Includes deep cleaning, laser therapy, and surgical interventions when needed. Essential for overall dental health and implant success.", benefits: ["Treats gum disease", "Prevents tooth loss", "Essential for implant success", "Improves oral health", "Laser options for minimal discomfort"], procedure: ["Periodontal assessment and probing", "Deep cleaning (scaling and root planing)", "Laser therapy if needed", "Surgical intervention (advanced cases)", "Maintenance program"], recovery: "Mild gum soreness for 3-5 days after deep cleaning. Soft diet recommended for 2-3 days. Full healing within 1-2 weeks. Maintenance visits every 3-4 months.", faq: [{ q: "Can gum disease affect my implants?", a: "Yes. Untreated gum disease can lead to peri-implantitis, which can cause implant failure. We always address periodontal issues before placing implants to ensure the best long-term outcomes." }] }
];

const TESTIMONIALS = [
    { name: "John Davidson", loc: "New York, USA", treatment: "All-on-4", rating: 5, text: "From the moment I landed in Dubai, everything was taken care of. The All-on-4 procedure changed my life. I can eat, smile, and laugh without hesitation. The savings compared to UK prices were incredible, and the quality was world-class." },
    { name: "Sarah Mitchell", loc: "Los Angeles, USA", treatment: "Veneers", rating: 5, text: "I was nervous about traveling abroad for dental work, but Dr. Bhatti's Implant Center exceeded every expectation. The facility is more luxurious than any dentist I've been to in Beverly Hills. My new veneers look absolutely natural." },
    { name: "Robert Klein", loc: "Houston, USA", treatment: "Full Mouth Rehabilitation", rating: 5, text: "After years of dental issues, Dr. Bhatti's Implant Center gave me my smile back. The team's expertise and the concierge service made the entire experience stress-free. I saved over 60% compared to quotes in Texas." },
    { name: "Emily Roberts", loc: "Miami, USA", treatment: "Dental Implants", rating: 5, text: "The technology at Dr. Bhatti's Implant Center is years ahead of what I've seen in the UK. The 3D imaging and planning gave me complete confidence. My implants feel like natural teeth. Worth every penny and the flight." },
    { name: "David Lambert", loc: "London, UK", treatment: "Smile Makeover", rating: 5, text: "As a private patient in London, I have high standards. Dr. Bhatti's Implant Center matched and exceeded them. The attention to detail, the luxury environment, and the clinical excellence are unmatched." },
    { name: "Aisha Khan", loc: "Toronto, Canada", treatment: "All-on-6", rating: 5, text: "The All-on-6 procedure was seamless. The team explained everything in detail, and the recovery was much easier than I expected. Dubai itself was a beautiful place to recover. Five stars isn't enough." }
];

const FAQS = [
    { cat: "Treatment", q: "How long do dental implants last?", a: "With proper care and regular dental visits, dental implants can last a lifetime. The crown or prosthesis on top may need replacement after 10-15 years due to normal wear, but the titanium implant itself fuses with your bone and is permanent." },
    { cat: "Treatment", q: "Am I a candidate for dental implants?", a: "Most adults in good general health with adequate jawbone density are candidates. Even if you've experienced bone loss, bone grafting can make implants possible. A consultation with 3D imaging will determine your specific suitability." },
    { cat: "Treatment", q: "What is the difference between All-on-4 and All-on-6?", a: "All-on-4 uses 4 implants per arch while All-on-6 uses 6. All-on-6 provides additional stability and is recommended for patients with strong bite forces or adequate bone. All-on-4 is often sufficient and more economical." },
    { cat: "Treatment", q: "How do I know which treatment I need?", a: "Book a free virtual consultation. Our specialists will review your dental history, X-rays, and goals to recommend the best treatment plan with transparent pricing." },
    { cat: "Recovery", q: "How long is the recovery after implant surgery?", a: "Most patients return to normal activities within 2-3 days. Mild swelling and discomfort for 3-5 days is normal. Complete osseointegration takes 3-6 months, during which you'll have temporary teeth." },
    { cat: "Recovery", q: "Will I experience pain after the procedure?", a: "Modern techniques and sedation options make the procedure virtually painless. Post-operative discomfort is typically mild and managed with over-the-counter pain medication." },
    { cat: "Recovery", q: "When can I eat normally after treatment?", a: "For implant procedures, a soft diet is recommended for 2-3 days. After All-on-4/6, soft foods for 2-3 weeks. Your dentist will provide a detailed dietary guide." },
    { cat: "Pricing", q: "How much can I save by getting treatment in Dubai?", a: "UK Patients typically save 40-70% compared to UK prices, even after factoring in flights and accommodation. All-on-6 for both jaws that costs $24,000-$44,000 in the UK starts at $7,500 at Dr. Bhatti's Implant Center." },
    { cat: "Pricing", q: "What is included in the treatment packages?", a: "Our packages include consultation, 3D imaging, surgery, anesthesia, implants, prosthesis, airport transfers, accommodation, and post-treatment care." },
    { cat: "Pricing", q: "Do you accept card payment?", a: "Yes, we offer flexible payment options and accept major credit cards. Our concierge team will discuss all payment options during your consultation." },
    { cat: "Travel", q: "How long do I need to stay in Dubai?", a: "Most treatments require 5-10 days. All-on-4/6 typically requires 7 days, single implants 3-5 days." },
    { cat: "Travel", q: "Do you help with travel arrangements?", a: "Absolutely. Our VIP concierge team handles flights, accommodation, airport transfers, and leisure activities at special rates." },
    { cat: "Travel", q: "What about follow-up care when I return home?", a: "We provide virtual follow-up consultations and coordinate with your local UK dentist. All packages include post-treatment support via WhatsApp." },
    { cat: "Safety", q: "Is it safe to get dental treatment in Dubai?", a: "Dubai has world-class healthcare standards with strict regulatory oversight. Our clinic is DHA-accredited and uses FDA-approved materials." },
    { cat: "Safety", q: "What safety protocols do you follow?", a: "We follow international sterilization protocols, use disposable materials where possible, and maintain DHA accreditation standards." },
    { cat: "Warranty", q: "Do you offer a warranty on implants?", a: "No, we offer a lifetime support on all dental implants and prosthetics, covering manufacturing defects and integration failures." },
    { cat: "Warranty", q: "What happens if there's a complication after I return home?", a: "We provide virtual follow-up support and can coordinate with our collegue dentists in UK. In rare cases requiring revision, we'll work with you to arrange necessary treatment." }
];

const BLOG_POSTS = [
    { title: "The Complete Guide to Dental Implants in Dubai", cat: "Dental Implants", excerpt: "Everything you need to know about getting dental implants in Dubai — from consultation to recovery, costs, and why it's becoming the top choice for UK Patients.", date: "Jan 20, 2025", read: "8 min", icon: "fa-solid fa-tooth", featured: true },
    { title: "Why Europians Are Choosing Dubai for Dental Tourism", cat: "Dental Tourism", excerpt: "With UK dental costs soaring, discover why thousands of Europians are traveling to Dubai for world-class dental care at 40-70% savings.", date: "Jan 15, 2025", read: "6 min", icon: "fa-solid fa-plane-departure" },
    { title: "All-on-4 vs All-on-6: Making the Right Choice", cat: "Dental Implants", excerpt: "A detailed comparison of All-on-4 and All-on-6 treatments. Understand the differences, benefits, and which option is right for your specific case.", date: "Jan 10, 2025", read: "5 min", icon: "fa-solid fa-teeth" },
    { title: "The Art of the Smile Makeover", cat: "Cosmetic Dentistry", excerpt: "How digital smile design technology is revolutionizing cosmetic dentistry. See your new smile before treatment even begins.", date: "Jan 5, 2025", read: "7 min", icon: "fa-solid fa-wand-magic-sparkles" },
    { title: "5 Essential Tips for Implant Aftercare", cat: "Oral Care", excerpt: "Proper aftercare is crucial for implant longevity. Follow these expert tips to ensure your implants last a lifetime.", date: "Dec 28, 2024", read: "4 min", icon: "fa-solid fa-heart-pulse" },
    { title: "Dubai: The World's New Dental Tourism Capital", cat: "Dental Tourism", excerpt: "How Dubai has emerged as the premier destination for dental tourism, combining world-class healthcare with five-star hospitality.", date: "Dec 20, 2024", read: "6 min", icon: "fa-solid fa-city" },
    { title: "The Latest Technology in Modern Dentistry", cat: "Cosmetic Dentistry", excerpt: "From 3D printing to AI-guided surgery, explore the cutting-edge technologies transforming dental care at Dr. Bhatti's Implant Center.", date: "Dec 15, 2024", read: "5 min", icon: "fa-solid fa-microchip" }
];

const PACKAGES = [
    { name: "Umrah + Dubai + Implant", sub: "Spiritual Journey & Smile Restoration", price: "Custom", from: "Personalized VIP Package", popular: true, features: ["Umrah Visa & Travel Arrangements", "Flights between Dubai & Saudi Arabia", "Luxury hotels in Mecca, Medina & Dubai", "Premium titanium implants in Dubai", "VIP airport transfers & local guide"] },
    { name: "Single Implant", sub: "One tooth replacement", price: "699", from: "Starting from", popular: false, features: ["Titanium implant fixture", "Custom abutment", "Premium porcelain crown", "Consultation & planning"] },
    { name: "Single Implant", sub: "One tooth replacement", price: "799", from: "Starting from", popular: true, features: ["Titanium implant fixture", "Custom abutment", "Premium porcelain crown", "Consultation & planning"] },
    { name: "All-on-4 Both Jaws", sub: "Complete arch restoration", price: "6,999", from: "Starting from", popular: false, features: ["4 titanium implants per arch", "Immediate fixed prosthesis", "3D guided surgery", "3D CBCT imaging", "Airport transfers included", "5-night luxury accommodation"] },
    { name: "All-on-4 Both Jaws", sub: "Complete arch restoration", price: "8,999", from: "Starting from", popular: true, features: ["4 titanium implants per arch", "Immediate fixed prosthesis", "3D guided surgery", "3D CBCT imaging", "Airport transfers included", "5-night luxury accommodation"] },
    { name: "All-on-6 Both Jaws", sub: "Enhanced stability", price: "7,499", from: "Starting from", popular: false, features: ["6 titanium implants per arch", "Premium zirconia prosthesis", "3D guided surgery", "3D CBCT imaging", "Airport transfers included", "7-night luxury accommodation", "VIP concierge service"] },
    { name: "All-on-6 Both Jaws", sub: "Enhanced stability", price: "9,499", from: "Starting from", popular: true, features: ["6 titanium implants per arch", "Premium zirconia prosthesis", "3D guided surgery", "3D CBCT imaging", "Airport transfers included", "7-night luxury accommodation", "VIP concierge service"] },
    { name: "Full Mouth Rehab", sub: "Complete restoration", price: "Custom", from: "Personalized quote", popular: false, features: ["Comprehensive assessment", "Multi-disciplinary treatment", "Premium materials throughout", "Extended luxury stay", "VIP concierge service", "Dedicated case manager"] },
    { name: "Full Mouth Rehab", sub: "Complete restoration", price: "Custom", from: "Personalized quote", popular: true, features: ["Comprehensive assessment", "Multi-disciplinary treatment", "Premium materials throughout", "Extended luxury stay", "VIP concierge service", "Dedicated case manager"] },

];

const GALLERY_ITEMS = [
    { cat: "clinic", title: "Reception Area", cls: "g-grad-1", tall: true, wide: false, image: "assets/images/nava-exterior.png" },
    { cat: "interior", title: "Consultation Room", cls: "g-grad-2", tall: false, wide: false, image: "assets/images/reception.png" },
    { cat: "equipment", title: "3D CBCT Scanner", cls: "g-grad-3", tall: false, wide: false, image: "assets/images/machine-1.png" },
    { cat: "clinic", title: "Treatment Suite", cls: "g-grad-4", tall: false, wide: true, image: "assets/images/nava-exterior.png" },
    { cat: "equipment", title: "CAD/CAM Lab", cls: "g-grad-5", tall: true, wide: false, image: "assets/images/machine-2.png" },
    { cat: "interior", title: "Patient Lounge", cls: "g-grad-6", tall: false, wide: false, image: "assets/images/reception.png" },
    { cat: "team", title: "Our Specialists", cls: "g-grad-1", tall: false, wide: false, image: "assets/images/nava-exterior.png" },
    { cat: "interior", title: "Recovery Suite", cls: "g-grad-2", tall: false, wide: false, image: "assets/images/reception.png" },
    { cat: "equipment", title: "Surgical Suite", cls: "g-grad-3", tall: false, wide: true, image: "assets/images/machine-1.png" },
    { cat: "team", title: "Clinical Team", cls: "g-grad-4", tall: false, wide: false, image: "assets/images/machine-2.png" },
    { cat: "clinic", title: "Sterilization Room", cls: "g-grad-5", tall: false, wide: false, image: "assets/images/nava-exterior.png" },
    { cat: "interior", title: "Building Exterior", cls: "g-grad-6", tall: false, wide: false, image: "assets/images/reception.png" }
];

const TEAM = [
    { name: "Dr. Kayyum Bhatti", role: "Senior Implantologist", creds: "All on 4/6 Expert . 15+ yrs", grad: "g-grad-1", image: "./assets/Dr. Kayyum Bhatti Team.jpeg" },
    { name: "Dr. Tarandeep", role: "Implant Prosthodontist", creds: "Hollywood Smile Expert . 12+ yes", grad: "g-grad-2", image: "./assets/Dr. Tarandeep Team.jpeg" },
    // { name: "Dr. Michael Roberts", role: "Oral & Maxillofacial Surgeon", creds: "UCLA · Board-certified · 18+ yrs", grad: "g-grad-4" },
    // { name: "Dr. Sofia Romano", role: "Prosthodontist", creds: "Univ. of Bologna · 12+ yrs", grad: "g-grad-5" }
];

const BEFORE_AFTER_ITEMS = [
    {
        id: 1,
        title: "All-on-4 Full Arch Restoration",
        patient: "48-year-old patient from New York",
        beforeImg: "assets/b&a/teeth-1-before.png",
        afterImg: "assets/b&a/teeth-1-after.png"
    },
    {
        id: 2,
        title: "Porcelain Veneers Smile Makeover",
        patient: "35-year-old patient from California",
        beforeImg: "assets/b&a/teeth-2-before.png",
        afterImg: "assets/b&a/teeth-2-after.png"
    },
    {
        id: 3,
        title: "All-on-6 Full Arch Rehabilitation",
        patient: "52-year-old patient from London, UK",
        beforeImg: "assets/b&a/3-before.png",
        afterImg: "assets/b&a/3-after.png"
    },
    {
        id: 4,
        title: "Hollywood Smile & Ceramic Veneers",
        patient: "29-year-old patient from Manchester, UK",
        beforeImg: "assets/b&a/4-before.png",
        afterImg: "assets/b&a/4-after.png"
    },
    {
        id: 5,
        title: "Zirconia Implant Transformation",
        patient: "42-year-old patient from Toronto, Canada",
        beforeImg: "assets/b&a/5-before.png",
        afterImg: "assets/b&a/5-after.png"
    },
    {
        id: 6,
        title: "Full Mouth Aesthetic Rehabilitation",
        patient: "61-year-old patient from Sydney, Australia",
        beforeImg: "assets/b&a/6-before.png",
        afterImg: "assets/b&a/6-after.png"
    }
];

/* ===== RENDER: TREATMENTS ===== */
function renderTreatments() {
    const el = document.getElementById('treatList'); if (!el) return;
    el.innerHTML = TREATMENTS.map((t, i) => `
<div class="treat-item${i === 0 ? ' active' : ''}">
<button class="treat-head" onclick="toggleTreatment(this)">
<div class="treat-icon"><i class="${t.icon}"></i></div>
<h3>${t.name}</h3>
<i class="fa-solid fa-chevron-down treat-arrow"></i>
</button>
<div class="treat-body" style="${i === 0 ? 'max-height:2500px' : ''}">
<div class="treat-body-inner">
<div>
<h4>Overview</h4><p>${t.overview}</p>
<h4 style="margin-top:1.5rem">Benefits</h4>
<ul>${t.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
</div>
<div>
<h4>Procedure</h4>
<ul>${t.procedure.map(p => `<li>${p}</li>`).join('')}</ul>
<h4 style="margin-top:1.5rem">Recovery</h4><p>${t.recovery}</p>
<h4 style="margin-top:1.5rem">FAQ</h4>
${t.faq.map(f => `<p style="margin-bottom:.5rem"><strong>Q: ${f.q}</strong><br>${f.a}</p>`).join('')}
<button class="btn btn-primary" style="margin-top:1rem" data-modal="book">Book Consultation</button>
</div>
</div>
</div>
</div>`).join('');
}

function toggleTreatment(btn) {
    const item = btn.closest('.treat-item');
    const body = item.querySelector('.treat-body');
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.treat-item').forEach(i => { i.classList.remove('active'); i.querySelector('.treat-body').style.maxHeight = '0'; });
    if (!isActive) { item.classList.add('active'); body.style.maxHeight = body.scrollHeight + 200 + 'px'; }
}

/* ===== RENDER: TESTIMONIALS ===== */
function renderTestimonials() {
    const slides = document.getElementById('testiSlides');
    const slidesFull = document.getElementById('testiSlidesFull');
    const dots = document.getElementById('testiDots');
    const dotsFull = document.getElementById('testiDotsFull');
    const grid = document.getElementById('testiGrid');
    const slidesHTML = TESTIMONIALS.map(t => `
<div class="testi-slide">
<div class="testi-stars">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div>
<blockquote>"${t.text}"</blockquote>
<div class="testi-author">
<div class="testi-avatar">${t.name.charAt(0)}</div>
<div><strong>${t.name}</strong><span>${t.loc} · ${t.treatment}</span></div>
</div>
</div>`).join('');
    if (slides) { slides.innerHTML = slidesHTML; initCarousel('testiSlides', 'testiDots', 'testiPrev', 'testiNext'); }
    if (slidesFull) { slidesFull.innerHTML = slidesHTML; initCarousel('testiSlidesFull', 'testiDotsFull', 'testiPrevFull', 'testiNextFull'); }
    if (grid) {
        grid.innerHTML = TESTIMONIALS.map(t => `
<div class="feature-card" style="display:flex;flex-direction:column">
<div class="testi-stars" style="margin-bottom:.8rem">${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}</div>
<p style="font-size:.9rem;color:var(--d3);line-height:1.65;font-weight:300;flex:1">"${t.text}"</p>
<div class="testi-author" style="margin-top:1.5rem">
<div class="testi-avatar" style="width:44px;height:44px;font-size:1rem">${t.name.charAt(0)}</div>
<div><strong style="font-size:.88rem">${t.name}</strong><span style="font-size:.75rem">${t.loc} · ${t.treatment}</span></div>
</div>
</div>`).join('');
    }
}

function initCarousel(slidesId, dotsId, prevId, nextId) {
    const slides = document.getElementById(slidesId);
    const dots = document.getElementById(dotsId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    if (!slides || !dots) return;
    const count = slides.children.length; let current = 0;
    dots.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
        dot.onclick = () => goTo(i);
        dots.appendChild(dot);
    }
    function goTo(idx) {
        current = idx;
        slides.style.transform = `translateX(-${idx * 100}%)`;
        dots.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    }
    if (prev) prev.onclick = () => goTo((current - 1 + count) % count);
    if (next) next.onclick = () => goTo((current + 1) % count);
    let auto = setInterval(() => goTo((current + 1) % count), 6000);
    const container = slides.closest('.testi-carousel');
    if (container) { container.addEventListener('mouseenter', () => clearInterval(auto)); container.addEventListener('mouseleave', () => { auto = setInterval(() => goTo((current + 1) % count), 6000); }); }
}

/* ===== RENDER: FAQ ===== */
function renderFAQs() {
    const homeList = document.getElementById('faqListHome');
    const fullList = document.getElementById('faqListFull');
    if (homeList) homeList.innerHTML = FAQS.slice(0, 5).map((f, i) => faqHTML(f, i)).join('');
    if (fullList) {
        fullList.innerHTML = FAQS.map((f, i) => faqHTML(f, i)).join('');
        fullList.querySelectorAll('.faq-item').forEach(item => { item.setAttribute('data-cat', item.querySelector('.faq-cat-tag').textContent); });
    }
}
function faqHTML(f, i) {
    return `<div class="faq-item${i === 0 ? ' active' : ''}" data-cat="${f.cat}">
<button class="faq-q" onclick="toggleFAQ(this)">
<span class="faq-cat-tag" style="display:none">${f.cat}</span>
${f.q}<i class="fa-solid fa-chevron-down"></i>
</button>
<div class="faq-a" style="${i === 0 ? 'max-height:300px' : ''}"><div class="faq-a-inner">${f.a}</div></div>
</div>`;
}
function toggleFAQ(btn) {
    const item = btn.closest('.faq-item');
    const ans = item.querySelector('.faq-a');
    const isActive = item.classList.contains('active');
    const list = item.closest('.faq-list');
    if (list) { list.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('active'); i.querySelector('.faq-a').style.maxHeight = '0'; }); }
    if (!isActive) { item.classList.add('active'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
}

/* ===== RENDER: PACKAGES ===== */
function renderPackages() {
    const homeGrid = document.getElementById('pkgGridHome');
    const fullGrid = document.getElementById('pkgGridFull');
    const html = PACKAGES.map(p => {
        if (p.name.includes('Umrah')) {
            return `
<div class="pkg-card usp-pkg-card">
    <span class="pkg-badge">Exclusive Package</span>
    <div class="usp-info">
        <h3>${p.name}</h3>
        <div class="pkg-sub">${p.sub}</div>
        <div class="price-block">
            <div class="pkg-price">${p.price}</div>
            <div class="pkg-from">${p.from}</div>
        </div>
        <button class="btn btn-primary" data-modal="book">Book Consultation</button>
    </div>
    <div class="usp-features-wrapper">
        <ul class="pkg-features">
            ${p.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
        </ul>
    </div>
</div>`;
        } else {
            return `
<div class="pkg-card${p.popular ? ' popular' : ''}">
    ${p.popular ? '<span class="pkg-badge">Most Popular</span>' : ''}
    <h3>${p.name}</h3><div class="pkg-sub">${p.sub}</div>
    <div class="pkg-price">${p.price === 'Custom' ? '<span style="font-size:2rem">Custom</span>' : '£' + p.price}</div>
    <div class="pkg-from">${p.from}</div>
    <ul class="pkg-features">${p.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}</ul>
    <button class="btn ${p.popular ? 'btn-primary' : 'btn-ghost'}" data-modal="book">Book Consultation</button>
</div>`;
        }
    }).join('');
    if (homeGrid) homeGrid.innerHTML = html;
    if (fullGrid) fullGrid.innerHTML = html;
}

/* ===== RENDER: GALLERY ===== */
function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    grid.innerHTML = GALLERY_ITEMS.map(g => `
        <div class="gallery-item ${g.tall ? "tall" : ""} ${g.wide ? "wide" : ""}" data-gallery-cat="${g.cat}">
            <div class="gallery-item-inner ${g.cls}">
                <img src="${g.image}" alt="${g.title}" class="gallery-img">
                <span>${g.title}</span>
            </div>
        </div>
    `).join("");
}

/* ===== RENDER: TEAM ===== */
function renderTeam() {
    const grid = document.getElementById("teamGrid");
    if (!grid) return;

    grid.innerHTML = TEAM.map(t => `
        <div class="team-card">
            <div class="team-photo">
                <img src="${t.image}" alt="${t.name}">
            </div>
            <div class="team-info">
                <h3>${t.name}</h3>
                <div class="role">${t.role}</div>
                <div class="creds">${t.creds}</div>
            </div>
        </div>
    `).join("");
}

/* ===== RENDER: BLOG ===== */
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    const side = document.getElementById('blogSide');
    if (grid) {
        grid.innerHTML = BLOG_POSTS.filter(p => !p.featured).map(p => `
<div class="blog-card">
<div class="blog-card-img ${p.cat === 'Dental Implants' ? 'g-grad-1' : p.cat === 'Dental Tourism' ? 'g-grad-2' : p.cat === 'Cosmetic Dentistry' ? 'g-grad-4' : 'g-grad-5'}">
<span class="blog-cat">${p.cat}</span><i class="${p.icon}"></i></div>
<div class="blog-card-body">
<h3>${p.title}</h3><p>${p.excerpt}</p>
<div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> ${p.date}</span><span><i class="fa-regular fa-clock"></i> ${p.read}</span></div>
</div></div>`).join('');
    }
    if (side) {
        side.innerHTML = BLOG_POSTS.slice(1, 4).map(p => `
<div class="blog-mini">
<div class="blog-mini-img ${p.cat === 'Dental Implants' ? 'g-grad-1' : p.cat === 'Dental Tourism' ? 'g-grad-2' : 'g-grad-4'}"><i class="${p.icon}"></i></div>
<div class="blog-mini-info"><h4>${p.title}</h4><div class="blog-meta"><span>${p.date}</span><span>· ${p.read}</span></div></div>
</div>`).join('');
    }
}

/* ===== RENDER: BEFORE & AFTER ===== */
function renderBeforeAfter() {
    const container = document.getElementById('baContainer');
    if (!container) return;

    container.innerHTML = BEFORE_AFTER_ITEMS.map((item) => `
        <div class="ba-slider-wrap" data-reveal-scale>
            <div class="ba-slider" id="baSlider${item.id}">
                <div class="ba-img ba-before" style="background:url('${item.beforeImg}') center center / cover no-repeat;">
                    <div class="ba-label ba-label-before">Before</div>
                </div>
                <div class="ba-img ba-after" id="baAfter${item.id}" style="background:url('${item.afterImg}') center center / cover no-repeat;">
                    <div class="ba-content"></div>
                    <div class="ba-label ba-label-after">After</div>
                </div>
                <div class="ba-handle" id="baHandle${item.id}">
                    <div class="ba-handle-circle"><i class="fa-solid fa-arrows-left-right"></i></div>
                </div>
            </div>
            <p class="center mt-2" style="color:rgba(255,255,255,.7);font-size:.88rem;font-weight:500;">${item.title} <span style="opacity:.6;font-weight:300;">· ${item.patient}</span></p>
        </div>
    `).join('');

    BEFORE_AFTER_ITEMS.forEach(item => {
        initBASlider('baSlider' + item.id, 'baAfter' + item.id, 'baHandle' + item.id);
    });
}

/* ===== BEFORE/AFTER SLIDER ===== */
function initBASlider(sliderId, afterId, handleId) {
    const slider = document.getElementById(sliderId);
    const after = document.getElementById(afterId);
    const handle = document.getElementById(handleId);
    if (!slider || !after || !handle) return;

    // Extract background image from after element (inline or computed)
    const bg = after.style.backgroundImage || window.getComputedStyle(after).backgroundImage;
    let bgDiv = after.querySelector('.ba-after-bg');
    if (!bgDiv && bg && bg !== 'none') {
        bgDiv = document.createElement('div');
        bgDiv.className = 'ba-after-bg';
        bgDiv.style.backgroundImage = bg;
        bgDiv.style.position = 'absolute';
        bgDiv.style.top = '0';
        bgDiv.style.left = '0';
        bgDiv.style.height = '100%';
        bgDiv.style.backgroundPosition = 'center center';
        bgDiv.style.backgroundSize = 'cover';
        bgDiv.style.backgroundRepeat = 'no-repeat';
        bgDiv.style.pointerEvents = 'none';
        bgDiv.style.zIndex = '1';

        after.insertBefore(bgDiv, after.firstChild);
        after.style.background = 'none';
        after.style.backgroundImage = 'none';
    }

    function updateDimensions() {
        if (bgDiv && slider) {
            bgDiv.style.width = slider.offsetWidth + 'px';
        }
    }

    if (window.ResizeObserver) {
        const ro = new ResizeObserver(() => updateDimensions());
        ro.observe(slider);
    }

    let dragging = false;
    function move(clientX) {
        const rect = slider.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const pos = (x / rect.width) * 100;
        after.style.width = pos + '%';
        handle.style.left = pos + '%';
    }

    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    setTimeout(updateDimensions, 100);
    // Double safeguard on page transition/load complete
    window.addEventListener('load', updateDimensions);

    slider.addEventListener('mousedown', e => { dragging = true; move(e.clientX); });
    slider.addEventListener('touchstart', e => { dragging = true; move(e.touches[0].clientX); }, { passive: true });
    document.addEventListener('mousemove', e => { if (dragging) move(e.clientX); });
    document.addEventListener('touchmove', e => { if (dragging) move(e.touches[0].clientX); }, { passive: true });
    document.addEventListener('mouseup', () => dragging = false);
    document.addEventListener('touchend', () => dragging = false);
}

/* ===== SCROLL REVEAL ===== */
let revealObserver;
function observeReveals() {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    if (entry.target.hasAttribute('data-count')) animateCounter(entry.target);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    }
    document.querySelectorAll('[data-reveal]:not(.revealed),[data-reveal-left]:not(.revealed),[data-reveal-right]:not(.revealed),[data-reveal-scale]:not(.revealed),.stagger:not(.revealed)').forEach(el => revealObserver.observe(el));
    document.querySelectorAll('[data-count]').forEach(el => revealObserver.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 2000; const start = performance.now();
    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = (target >= 1000 ? value.toLocaleString() : value) + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = (target >= 1000 ? target.toLocaleString() : target) + suffix;
    }
    requestAnimationFrame(update);
}

/* ===== MODAL ===== */
function initModal() {
    const modal = document.getElementById('bookModal'); if (!modal) return;
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', e => { e.preventDefault(); modal.classList.add('open'); document.body.style.overflow = 'hidden'; });
    });
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
        btn.addEventListener('click', () => { modal.classList.remove('open'); document.body.style.overflow = ''; });
    });
}

/* ===== FORMS ===== */
function initForms() {
    function showToast(msg) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        document.getElementById('toastMsg').textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }
    const bookForm = document.getElementById('bookForm');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    if (bookForm) bookForm.addEventListener('submit', e => {
        e.preventDefault(); showToast('Consultation request received! We\'ll contact you within 24 hours.');
        bookForm.reset(); document.getElementById('bookModal').classList.remove('open'); document.body.style.overflow = '';
    });
    if (contactForm) contactForm.addEventListener('submit', e => {
        e.preventDefault(); showToast('Message sent! Our team will respond within 24 hours.'); contactForm.reset();
    });
    if (newsletterForm) newsletterForm.addEventListener('submit', e => {
        e.preventDefault(); showToast('Subscribed! Welcome to the Dr. Bhatti\'s Implant Center community.'); newsletterForm.reset();
    });
}

/* ===== FILTERS ===== */
function initGalleryFilter() {
    document.querySelectorAll('[data-gallery-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-gallery-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-gallery-filter');
            document.querySelectorAll('#galleryGrid .gallery-item').forEach(item => {
                item.style.display = (filter === 'all' || item.getAttribute('data-gallery-cat') === filter) ? '' : 'none';
            });
        });
    });
}
function initFAQFilter() {
    document.querySelectorAll('[data-faq-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-faq-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-faq-filter');
            document.querySelectorAll('#faqListFull .faq-item').forEach(item => {
                item.style.display = (filter === 'all' || item.getAttribute('data-cat') === filter) ? '' : 'none';
            });
        });
    });
}
function initBlogFilter() {
    document.querySelectorAll('[data-blog-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-blog-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-blog-filter');
            document.querySelectorAll('#blogGrid .blog-card').forEach(card => {
                const cat = card.querySelector('.blog-cat').textContent.trim();
                card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
            });
        });
    });
}

/* ===== NAV & SCROLL ===== */
function initNavScroll() {
    const nav = document.getElementById('nav');
    const progress = document.getElementById('scrollProgress');
    const floatTop = document.getElementById('floatTop');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
    window.addEventListener('scroll', () => {
        const sc = window.scrollY;
        if (nav) nav.classList.toggle('scrolled', sc > 50);
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.toggle('nav-scrolled-text', sc > 50);
            l.classList.toggle('nav-transparent-text', sc <= 50);
        });
        if (progress) { const docH = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = (sc / docH * 100) + '%'; }
        if (floatTop) floatTop.classList.toggle('show', sc > 500);
        document.querySelectorAll('.orb').forEach((orb, i) => { orb.style.transform = `translateY(${sc * 0.15 * (i + 1) * 0.3}px)`; });
    });
    if (floatTop) floatTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== PAGE TRANSITION ===== */
function initPageTransition() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        if (link.getAttribute('target') === '_blank') return;
        link.addEventListener('click', e => {
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity .3s ease';
            setTimeout(() => window.location.href = link.getAttribute('href'), 300);
        });
    });
}

/* ===== COOKIE HELPERS ===== */
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/* ===== FIRST VISIT POPUP ===== */
function initFirstVisitPopup() {
    // Only show on the homepage
    const path = window.location.pathname;
    const isIndex = path.endsWith('index.html') || path === '/' || path.endsWith('/') || path === '';
    if (!isIndex) return;

    const popup = document.createElement('div');
    popup.id = 'promoPopup';
    popup.className = 'promo-popup-wrapper';
    popup.innerHTML = `
        <div class="promo-popup-overlay"></div>
        <div class="promo-popup-content">
            <button class="promo-popup-close" aria-label="Close popup"><i class="fa-solid fa-xmark"></i></button>
            <span class="promo-popup-badge"><i class="fa-solid fa-plane-departure" style="margin-right:6px"></i>UK Consultation Tour</span>
            <h2>Face to Face Meeting in UK</h2>
            <p>Meet our senior dental implant specialists in person across major UK cities. Discuss your smile transformation, get free 3D scan evaluations, and plan your treatment before traveling to Dubai.</p>
            
            <div class="promo-schedule-container">
                <div class="promo-schedule-header">
                    <i class="fa-solid fa-calendar-days"></i> Upcoming UK Tour Schedule
                </div>
                <div class="promo-schedule-table-wrapper">
                    <table class="promo-schedule-table">
                        <thead>
                            <tr>
                                <th>City &amp; Venue</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="city-name"><i class="fa-solid fa-location-dot"></i> London</div>
                                    <div class="city-area">Mayfair Medical Suite</div>
                                </td>
                                <td><span class="schedule-date">Nov 10 - Nov 12</span></td>
                                <td><span class="schedule-time">09:00 AM - 06:00 PM</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="city-name"><i class="fa-solid fa-location-dot"></i> Manchester</div>
                                    <div class="city-area">City Centre Hub</div>
                                </td>
                                <td><span class="schedule-date">Nov 14 - Nov 15</span></td>
                                <td><span class="schedule-time">10:00 AM - 05:00 PM</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="city-name"><i class="fa-solid fa-location-dot"></i> Birmingham</div>
                                    <div class="city-area">Grand Central Suite</div>
                                </td>
                                <td><span class="schedule-date">Nov 17 - Nov 18</span></td>
                                <td><span class="schedule-time">09:30 AM - 05:30 PM</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button class="btn btn-primary btn-lg promo-cta"><i class="fa-solid fa-calendar-check" style="margin-right:8px"></i> Book Appointment</button>
        </div>
    `;

    document.body.appendChild(popup);

    const closeBtn = popup.querySelector('.promo-popup-close');
    const overlay = popup.querySelector('.promo-popup-overlay');
    const ctaBtn = popup.querySelector('.promo-cta');

    function closePopup() {
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.remove();
        }, 500);
    }

    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);

    ctaBtn.addEventListener('click', () => {
        closePopup();
        window.location.href = 'contact.html';
    });

    // Show popup strictly after page finishes loading (adds 2.2s delay to clear preloader transition)
    setTimeout(() => {
        popup.classList.add('active');
    }, 2200);
}

/* ===== VIDEO PLAY SYSTEM ===== */
function initVideoCards() {
    document.querySelectorAll('.video-card').forEach((card, idx) => {
        card.addEventListener('click', function handleCardClick() {
            // If video is already playing, do nothing
            if (card.querySelector('video')) return;

            const video = document.createElement('video');
            video.src = 'assets/video/hero-dental.mp4';
            video.controls = true;
            video.autoplay = true;
            video.style.position = 'absolute';
            video.style.inset = '0';
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            video.style.zIndex = '10';
            video.style.borderRadius = '20px';

            // Stagger start times to make segment playbacks look unique
            const startTimes = [0, 5, 10];
            const startTime = startTimes[idx % startTimes.length];

            video.addEventListener('loadedmetadata', () => {
                try {
                    if (startTime < video.duration) {
                        video.currentTime = startTime;
                    }
                } catch (err) {
                    console.warn("Could not seek video segment:", err);
                }
            });

            card.appendChild(video);
            video.focus();

            // Prevent clicking inside video controls or screen from resetting/re-triggering the card click
            video.addEventListener('click', (e) => {
                e.stopPropagation();
            });

            // Reset state when video ends
            video.addEventListener('ended', () => {
                video.remove();
            });
        });
    });
}

/* ===== COOKIE CONSENT SYSTEM ===== */
const COOKIE_STORAGE_KEY = 'muskan_cookie_consent_v1';

function getSavedCookieConsent() {
    try {
        const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch (e) { }
    const cookieVal = getCookie('muskan_cookie_consent');
    if (cookieVal) {
        try { return JSON.parse(decodeURIComponent(cookieVal)); } catch (e) { }
    }
    return null;
}

function saveCookieConsent(preferences) {
    const data = {
        essential: true,
        analytics: !!preferences.analytics,
        marketing: !!preferences.marketing,
        timestamp: new Date().toISOString()
    };
    try {
        localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(data));
    } catch (e) { }
    setCookie('muskan_cookie_consent', encodeURIComponent(JSON.stringify(data)), 365);

    // Dismiss banner if visible
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 600);
    }

    // Dismiss modal if open
    const modal = document.getElementById('cookieModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Show feedback toast
    if (typeof showToast === 'function') {
        showToast('Cookie preferences updated successfully.');
    } else {
        const toast = document.getElementById('toast');
        if (toast) {
            document.getElementById('toastMsg').textContent = 'Cookie preferences updated successfully.';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3500);
        }
    }
}

function openCookieSettings() {
    let modal = document.getElementById('cookieModal');
    const currentConsent = getSavedCookieConsent() || { essential: true, analytics: true, marketing: true };

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cookieModal';
        modal.className = 'cookie-modal';
        modal.innerHTML = `
            <div class="cookie-modal-overlay" id="cookieModalOverlay"></div>
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <div>
                        <h3>Cookie Preferences</h3>
                        <p style="font-size:0.85rem;color:var(--d3);margin-top:0.25rem;">Customize your cookie privacy settings for Muskan Dental.</p>
                    </div>
                    <button class="cookie-modal-close" id="closeCookieModal" aria-label="Close cookie preferences"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="cookie-category-list">
                    <div class="cookie-category-card">
                        <div class="cookie-category-top">
                            <div class="cookie-category-title">
                                <i class="fa-solid fa-shield-halved"></i>
                                <span>Essential &amp; Security Cookies</span>
                            </div>
                            <label class="cookie-switch">
                                <input type="checkbox" checked disabled>
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>Required for core website functionality, secure login, booking consultations, and session management. Always active.</p>
                    </div>
                    <div class="cookie-category-card">
                        <div class="cookie-category-top">
                            <div class="cookie-category-title">
                                <i class="fa-solid fa-chart-pie"></i>
                                <span>Analytics &amp; Performance</span>
                            </div>
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookieAnalyticsToggle">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>Allows us to analyze visitor usage, measure page loading speeds, and optimize user experience across Dubai and international portals.</p>
                    </div>
                    <div class="cookie-category-card">
                        <div class="cookie-category-top">
                            <div class="cookie-category-title">
                                <i class="fa-solid fa-bullhorn"></i>
                                <span>Marketing &amp; Personalization</span>
                            </div>
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookieMarketingToggle">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p>Enables tailored offers, dental package promotions, and WhatsApp patient concierge connectivity.</p>
                    </div>
                </div>
                <div class="cookie-modal-footer">
                    <button class="btn btn-ghost" id="saveCookiePreferences">Save Preferences</button>
                    <button class="btn btn-primary" id="acceptAllCookieModal">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById('closeCookieModal').addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        });
        document.getElementById('cookieModalOverlay').addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        });
        document.getElementById('saveCookiePreferences').addEventListener('click', () => {
            const analytics = document.getElementById('cookieAnalyticsToggle').checked;
            const marketing = document.getElementById('cookieMarketingToggle').checked;
            saveCookieConsent({ analytics, marketing });
        });
        document.getElementById('acceptAllCookieModal').addEventListener('click', () => {
            saveCookieConsent({ analytics: true, marketing: true });
        });
    }

    document.getElementById('cookieAnalyticsToggle').checked = !!currentConsent.analytics;
    document.getElementById('cookieMarketingToggle').checked = !!currentConsent.marketing;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function initCookieConsent() {
    const savedConsent = getSavedCookieConsent();
    if (savedConsent) return; // Consent already granted/saved

    // Inject bottom banner if not present
    if (!document.getElementById('cookieBanner')) {
        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-inner">
                <div class="cookie-banner-text">
                    <div class="cookie-icon-box"><i class="fa-solid fa-cookie-bite"></i></div>
                    <div>
                        <h4>We Value Your Privacy</h4>
                        <p>Muskan Dental uses cookies to enhance your browsing experience, analyze site traffic, and deliver personalized dental care information. Learn more in our <a href="privacy-policy.html">Privacy Policy</a> &amp; <a href="data-use-policy.html">Data Use Policy</a>.</p>
                    </div>
                </div>
                <div class="cookie-banner-actions">
                    <button class="btn btn-ghost" id="cookieBtnSettings" style="font-size:0.8rem;padding:0.65rem 1.25rem;">Preferences</button>
                    <button class="btn btn-ghost" id="cookieBtnEssential" style="font-size:0.8rem;padding:0.65rem 1.25rem;">Essential Only</button>
                    <button class="btn btn-primary" id="cookieBtnAcceptAll" style="font-size:0.8rem;padding:0.65rem 1.35rem;">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('cookieBtnAcceptAll').addEventListener('click', () => {
            saveCookieConsent({ analytics: true, marketing: true });
        });
        document.getElementById('cookieBtnEssential').addEventListener('click', () => {
            saveCookieConsent({ analytics: false, marketing: false });
        });
        document.getElementById('cookieBtnSettings').addEventListener('click', () => {
            openCookieSettings();
        });

        // Show with smooth transition after initial load delay
        setTimeout(() => {
            banner.classList.add('show');
        }, 1800);
    }
}

/* ===== INIT ===== */
function init() {
    setTimeout(() => { const p = document.getElementById('preloader'); if (p) p.classList.add('done'); }, 1000);
    renderTreatments(); renderTestimonials(); renderFAQs(); renderPackages(); renderGallery(); renderTeam(); renderBlog(); renderBeforeAfter();
    initNavScroll(); initModal(); initForms();
    initGalleryFilter(); initFAQFilter(); initBlogFilter();
    initBASlider('baSliderHome', 'baAfterHome', 'baHandleHome');
    observeReveals(); initPageTransition();
    initFirstVisitPopup();
    initVideoCards();
    initCookieConsent();
}
if (document.readyState !== 'loading') { init(); } else { document.addEventListener('DOMContentLoaded', init); }


