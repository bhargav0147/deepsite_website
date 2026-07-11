// ============================================
// GWALIOR PROPERTY - Main JavaScript
// ============================================

// Property Data Array
const properties = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    location: "City Centre, Gwalior",
    price: "₹65 Lac",
    priceNum: 6500000,
    purpose: "Sell",
    type: "Residential",
    area: 1450,
    bedrooms: 3,
    bathrooms: 3,
    furnishing: "Semi Furnished",
    parking: "Available",
    facing: "East",
    image: "http://static.photos/real-estate/640x360/101",
    description: "A beautifully designed 3 BHK luxury apartment situated in the heart of Gwalior city centre. This premium residence offers spacious rooms with modern interiors, excellent ventilation, and abundant natural light. The apartment features a modular kitchen, elegant bathrooms, and a large living area perfect for families seeking comfort and style.",
    amenities: ["Swimming Pool", "Gym", "Club House", "24/7 Security", "Power Backup", "Children's Park", "Jogging Track", "Intercom"],
    nearby: ["Railway Station - 2 km", "Hospital - 1 km", "Shopping Mall - 500 m", "School - 1.5 km", "Airport - 8 km"]
  },
  {
    id: 2,
    title: "2 BHK Affordable Flat",
    location: "Morar, Gwalior",
    price: "₹28 Lac",
    priceNum: 2800000,
    purpose: "Sell",
    type: "Residential",
    area: 950,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "Unfurnished",
    parking: "Available",
    facing: "North",
    image: "http://static.photos/office/640x360/102",
    description: "A well-planned 2 BHK affordable flat in Morar, ideal for small families and first-time home buyers. The flat offers good connectivity to main roads, markets, and educational institutions. Clean layout with proper ventilation and natural lighting throughout the day.",
    amenities: ["Parking", "Water Supply", "Power Backup", "Security", "Garden"],
    nearby: ["Morar Market - 1 km", "Hospital - 2 km", "Bus Stand - 500 m", "School - 800 m"]
  },
  {
    id: 3,
    title: "Commercial Showroom",
    location: "Lashkar, Gwalior",
    price: "₹1.2 Cr",
    priceNum: 12000000,
    purpose: "Sell",
    type: "Commercial",
    area: 2200,
    bedrooms: 0,
    bathrooms: 2,
    furnishing: "Furnished",
    parking: "Available",
    facing: "Road Facing",
    image: "http://static.photos/cityscape/640x360/103",
    description: "Prime commercial showroom located on the bustling streets of Lashkar. This high-visibility property is perfect for retail businesses, showrooms, or offices. Road-facing with excellent foot traffic, modern façade, and ample parking space. A rare commercial opportunity in Gwalior's most sought-after business district.",
    amenities: ["Road Facing", "Parking Space", "24/7 Security", "Power Backup", "Fire Safety", "Lift"],
    nearby: ["Main Market - 0 km", "Bus Stand - 1 km", "Bank - 200 m", "Railway Station - 3 km"]
  },
  {
    id: 4,
    title: "4 BHK Villa with Garden",
    location: "Airport Road, Gwalior",
    price: "₹1.8 Cr",
    priceNum: 18000000,
    purpose: "Sell",
    type: "Residential",
    area: 3200,
    bedrooms: 4,
    bathrooms: 4,
    furnishing: "Fully Furnished",
    parking: "Available",
    facing: "East",
    image: "http://static.photos/nature/640x360/104",
    description: "An exquisite 4 BHK villa with a private garden on Airport Road. This luxurious property offers a premium lifestyle with spacious rooms, landscaped garden, modern kitchen, and top-class finishes. Perfect for families who appreciate elegance, privacy, and comfort in a serene environment.",
    amenities: ["Private Garden", "Swimming Pool", "Modular Kitchen", "Smart Home", "Security System", "Servant Room", "Car Porch", "Terrace"],
    nearby: ["Airport - 3 km", "Highway - 1 km", "School - 2 km", "Hospital - 4 km", "Mall - 5 km"]
  },
  {
    id: 5,
    title: "1 BHK Studio Apartment",
    location: "Thatipur, Gwalior",
    price: "₹8,500/month",
    priceNum: 8500,
    purpose: "Rent",
    type: "Residential",
    area: 550,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "Semi Furnished",
    parking: "Not Available",
    facing: "West",
    image: "http://static.photos/indoor/640x360/105",
    description: "A compact and well-maintained 1 BHK studio apartment in Thatipur, perfect for bachelors, students, or working professionals. The apartment comes semi-furnished with essential amenities and is located in a peaceful neighborhood with easy access to public transport and daily needs.",
    amenities: ["Water Supply", "Power Backup", "Security", "Wi-Fi Connectivity"],
    nearby: ["Bus Stop - 300 m", "Market - 500 m", "Hospital - 1 km", "College - 2 km"]
  },
  {
    id: 6,
    title: "Office Space in Business Hub",
    location: "Mahalgaon, Gwalior",
    price: "₹35,000/month",
    priceNum: 35000,
    purpose: "Rent",
    type: "Commercial",
    area: 1200,
    bedrooms: 0,
    bathrooms: 2,
    furnishing: "Furnished",
    parking: "Available",
    facing: "East",
    image: "http://static.photos/workspace/640x360/106",
    description: "Modern office space in Gwalior's emerging business hub at Mahalgaon. Fully furnished with workstations, conference room, reception area, and pantry. Ideal for IT companies, startups, and corporate offices. Professional environment with high-speed internet and 24/7 access.",
    amenities: ["Furnished Office", "Conference Room", "Pantry", "Lift", "Power Backup", "Parking", "Wi-Fi", "Reception"],
    nearby: ["Highway - 2 km", "IT Park - 3 km", "Bank - 500 m", "Food Court - 1 km"]
  },
  {
    id: 7,
    title: "3 BHK Premium Flat",
    location: "Gole Ka Mandir, Gwalior",
    price: "₹55 Lac",
    priceNum: 5500000,
    purpose: "Sell",
    type: "Residential",
    area: 1350,
    bedrooms: 3,
    bathrooms: 2,
    furnishing: "Semi Furnished",
    parking: "Available",
    facing: "South",
    image: "http://static.photos/estate/640x360/107",
    description: "A premium 3 BHK flat near Gole Ka Mandir offering excellent connectivity and a peaceful locality. The flat features modern architecture, quality construction, and thoughtful layout. Walking distance to temples, markets, and schools. An ideal home for families looking for a well-connected yet serene neighborhood.",
    amenities: ["Parking", "Garden", "Security", "Power Backup", "Children's Play Area", "Community Hall"],
    nearby: ["Temple - 200 m", "Market - 500 m", "School - 1 km", "Hospital - 2 km", "Railway Station - 4 km"]
  },
  {
    id: 8,
    title: "2 BHK Flat for Rent",
    location: "Sirol, Gwalior",
    price: "₹12,000/month",
    priceNum: 12000,
    purpose: "Rent",
    type: "Residential",
    area: 900,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "Unfurnished",
    parking: "Available",
    facing: "East",
    image: "http://static.photos/education/640x360/108",
    description: "A decent 2 BHK flat available for rent in Sirol, Gwalior. Good residential area with proper ventilation and sunlight. Located near essential services and transportation. Suitable for families or working couples looking for affordable rental options in a decent neighborhood.",
    amenities: ["Parking", "Water Supply", "Security", "Power Backup"],
    nearby: ["Bus Stop - 400 m", "Market - 700 m", "Hospital - 2 km", "School - 1 km"]
  },
  {
    id: 9,
    title: "Restaurant Space",
    location: "City Centre, Gwalior",
    price: "₹60,000/month",
    priceNum: 60000,
    purpose: "Rent",
    type: "Commercial",
    area: 2500,
    bedrooms: 0,
    bathrooms: 3,
    furnishing: "Semi Furnished",
    parking: "Available",
    facing: "Road Facing",
    image: "http://static.photos/restaurant/640x360/109",
    description: "Premium restaurant space available for rent in City Centre, Gwalior. High footfall location with excellent visibility from the main road. The space includes a dining area, kitchen setup, storage, and dedicated parking. Perfect for restaurants, cafes, or food chains looking to establish in Gwalior's prime location.",
    amenities: ["Kitchen Setup", "Dining Area", "Storage", "Parking", "Power Backup", "Water Supply", "Road Facing"],
    nearby: ["Main Road - 0 km", "Parking - On Site", "Mall - 300 m", "Office Area - 500 m"]
  },
  {
    id: 10,
    title: "5 BHK Independent House",
    location: "Lashkar, Gwalior",
    price: "₹2.5 Cr",
    priceNum: 25000000,
    purpose: "Sell",
    type: "Residential",
    area: 4500,
    bedrooms: 5,
    bathrooms: 5,
    furnishing: "Fully Furnished",
    parking: "Available",
    facing: "East",
    image: "http://static.photos/construction/640x360/110",
    description: "A magnificent 5 BHK independent house in Lashkar, Gwalior's most prestigious residential area. This palatial home offers grand living spaces, Italian marble flooring, designer interiors, a private terrace, and lush garden. Built with premium materials and crafted for those who demand excellence.",
    amenities: ["Private Garden", "Terrace", "Modular Kitchen", "Smart Home", "Home Theater", "Gym", "Servant Quarter", "3 Car Porch"],
    nearby: ["Main Market - 500 m", "Hospital - 1 km", "School - 800 m", "Railway Station - 2 km", "Club - 1.5 km"]
  },
  {
    id: 11,
    title: "Shop in Main Market",
    location: "Thatipur, Gwalior",
    price: "₹22 Lac",
    priceNum: 2200000,
    purpose: "Sell",
    type: "Commercial",
    area: 400,
    bedrooms: 0,
    bathrooms: 1,
    furnishing: "Unfurnished",
    parking: "Not Available",
    facing: "Road Facing",
    image: "http://static.photos/retail/640x360/111",
    description: "A compact and strategically located shop in Thatipur's main market area. Excellent for small retail businesses, kirana stores, pharmacies, or service shops. Heavy daily footfall and surrounded by residential colonies ensuring steady customer base. A smart investment for business owners.",
    amenities: ["Road Facing", "Water Supply", "Electricity"],
    nearby: ["Residential Area - 0 km", "Bus Stop - 200 m", "Market - On Site", "Bank - 300 m"]
  },
  {
    id: 12,
    title: "3 BHK Flat for Rent",
    location: "Airport Road, Gwalior",
    price: "₹22,000/month",
    priceNum: 22000,
    purpose: "Rent",
    type: "Residential",
    area: 1400,
    bedrooms: 3,
    bathrooms: 3,
    furnishing: "Semi Furnished",
    parking: "Available",
    facing: "North",
    image: "http://static.photos/season/640x360/112",
    description: "A spacious 3 BHK flat available for rent on Airport Road, Gwalior. Semi-furnished with AC, wardrobes, and modular kitchen. Located in a gated society with amenities like swimming pool, gym, and children's play area. Perfect for families wanting a comfortable and secure living environment.",
    amenities: ["Swimming Pool", "Gym", "Security", "Power Backup", "Parking", "Garden", "Club House"],
    nearby: ["Airport - 4 km", "Highway - 1 km", "School - 2 km", "Hospital - 3 km", "Mall - 6 km"]
  },
  {
    id: 13,
    title: "Warehouse / Godown",
    location: "Sirol, Gwalior",
    price: "₹45,000/month",
    priceNum: 45000,
    purpose: "Rent",
    type: "Commercial",
    area: 5000,
    bedrooms: 0,
    bathrooms: 2,
    furnishing: "Unfurnished",
    parking: "Available",
    facing: "East",
    image: "http://static.photos/industry/640x360/113",
    description: "Spacious warehouse/godown available for rent in Sirol industrial area. High ceiling, loading dock, and heavy vehicle parking available. Ideal for storage, logistics, manufacturing, or distribution businesses. Well-connected to highway and transportation hubs.",
    amenities: ["High Ceiling", "Loading Dock", "Heavy Vehicle Parking", "Water Supply", "Power Backup", "Security"],
    nearby: ["Highway - 2 km", "Transport Hub - 3 km", "Industrial Area - 1 km", "Railway Station - 5 km"]
  },
  {
    id: 14,
    title: "2 BHK Builder Floor",
    location: "Morar, Gwalior",
    price: "₹38 Lac",
    priceNum: 3800000,
    purpose: "Sell",
    type: "Residential",
    area: 1100,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "Unfurnished",
    parking: "Available",
    facing: "West",
    image: "http://static.photos/wellness/640x360/114",
    description: "A well-constructed 2 BHK builder floor in a prime locality of Morar. Independent floor with no shared walls, offering privacy and peace. Good construction quality with proper ventilation. Near markets, schools, and healthcare facilities. Great value for money in a rapidly developing area.",
    amenities: ["Parking", "Water Supply", "Security", "Terrace Access"],
    nearby: ["Market - 300 m", "School - 1 km", "Hospital - 1.5 km", "Bus Stand - 800 m"]
  }
];

// ============================================
// Utility Functions
// ============================================

const WHATSAPP_NUMBER = "919909559554";

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
}

function getPropertyById(id) {
  return properties.find(p => p.id === parseInt(id));
}

function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ============================================
// Render Functions
// ============================================

function renderPropertyCard(property, isFeatured = false) {
  const purposeClass = property.purpose === "Sell" ? "badge-sell" : "badge-rent";
  const purposeLabel = property.purpose === "Sell" ? "For Sale" : "For Rent";

  return `
    <div class="property-card" data-purpose="${property.purpose}" data-type="${property.type}" data-location="${property.location}" data-price="${property.priceNum}">
      <div class="property-card-image">
        <img src="${property.image}" alt="${property.title}" loading="lazy" onerror="this.src='http://static.photos/640x360/999'">
        <span class="property-badge ${purposeClass}">${purposeLabel}</span>
        <span class="property-type-badge">${property.type}</span>
      </div>
      <div class="property-card-content">
        <h3 class="property-card-title">${property.title}</h3>
        <p class="property-card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${property.location}
        </p>
        <p class="property-card-price">${property.price}</p>
        <div class="property-card-stats">
          ${property.bedrooms > 0 ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg> ${property.bedrooms} Bed</span>` : ''}
          ${property.bathrooms > 0 ? `<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h16a2 2 0 0 1 0 4H4"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M4 12V8a2 2 0 0 1 2-2h4"/><path d="M10 6V4"/></svg> ${property.bathrooms} Bath</span>` : ''}
          <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg> ${property.area} sqft</span>
        </div>
        <div class="property-card-actions">
          <a href="property-details.html?id=${property.id}" class="btn btn-outline btn-sm">View Details</a>
          <button class="btn btn-primary btn-sm" onclick="sendPropertyInquiry(${property.id})">Get Inquiry</button>
        </div>
      </div>
    </div>
  `;
}

function renderProperties(containerId, propertyList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (propertyList.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0F766E" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3>No Properties Found</h3>
        <p>Try adjusting your filters to find what you're looking for.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = propertyList.map(p => renderPropertyCard(p)).join("");
}

// ============================================
// Inquiry Functions
// ============================================

function sendPropertyInquiry(propertyId) {
  const property = getPropertyById(propertyId);
  if (!property) return;

  const message = `Hello Gwalior Property,

I am interested in this property.

Property Details:
Title: ${property.title}
Location: ${property.location}
Price: ${property.price}
Purpose: ${property.purpose}
Type: ${property.type}
Area: ${property.area} sqft

Please share more details.`;

  openWhatsApp(message);
}

function sendSellPropertyInquiry(formData) {
  const message = `Hello Gwalior Property,

I want to list my property.

Owner Details:
Name: ${formData.name}
Phone: ${formData.phone}

Property Details:
Title: ${formData.title}
Location: ${formData.location}
Purpose: ${formData.purpose}
Type: ${formData.type}
Area: ${formData.area} sqft
Expected Price: ${formData.price}
Bedrooms: ${formData.bedrooms}
Bathrooms: ${formData.bathrooms}
Furnishing: ${formData.furnishing}
Parking: ${formData.parking}
Address: ${formData.address}
Description: ${formData.description}

Please contact me regarding my property.`;

  openWhatsApp(message);
}

function sendContactMessage(formData) {
  const message = `Hello Gwalior Property,

Name: ${formData.name}
Phone: ${formData.phone}
Interested In: ${formData.interested}
Message: ${formData.message}

Please get back to me.`;

  openWhatsApp(message);
}

// ============================================
// Filter Functions
// ============================================

let currentFilters = {
  purpose: "All",
  type: "All",
  priceRange: "All",
  location: "All",
  search: ""
};

function filterProperties() {
  let filtered = [...properties];

  // Purpose filter
  if (currentFilters.purpose !== "All") {
    filtered = filtered.filter(p => p.purpose === currentFilters.purpose);
  }

  // Type filter
  if (currentFilters.type !== "All") {
    filtered = filtered.filter(p => p.type === currentFilters.type);
  }

  // Price range filter
  if (currentFilters.priceRange !== "All") {
    const range = currentFilters.priceRange;
    if (range === "under-25lac") filtered = filtered.filter(p => p.priceNum < 2500000);
    else if (range === "25-50lac") filtered = filtered.filter(p => p.priceNum >= 2500000 && p.priceNum < 5000000);
    else if (range === "50-1cr") filtered = filtered.filter(p => p.priceNum >= 5000000 && p.priceNum < 10000000);
    else if (range === "1-2cr") filtered = filtered.filter(p => p.priceNum >= 10000000 && p.priceNum < 20000000);
    else if (range === "above-2cr") filtered = filtered.filter(p => p.priceNum >= 20000000);
    else if (range === "under-15k") filtered = filtered.filter(p => p.priceNum < 15000);
    else if (range === "15-30k") filtered = filtered.filter(p => p.priceNum >= 15000 && p.priceNum < 30000);
    else if (range === "30-50k") filtered = filtered.filter(p => p.priceNum >= 30000 && p.priceNum < 50000);
    else if (range === "above-50k") filtered = filtered.filter(p => p.priceNum >= 50000);
  }

  // Location filter
  if (currentFilters.location !== "All") {
    filtered = filtered.filter(p => p.location.includes(currentFilters.location));
  }

  // Search filter
  if (currentFilters.search) {
    const search = currentFilters.search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search) ||
      p.location.toLowerCase().includes(search) ||
      p.type.toLowerCase().includes(search) ||
      p.purpose.toLowerCase().includes(search)
    );
  }

  renderProperties("properties-grid", filtered);

  // Update count
  const countEl = document.getElementById("property-count");
  if (countEl) countEl.textContent = `${filtered.length} Properties Found`;
}

function searchProperties(query) {
  currentFilters.search = query;
  filterProperties();
}

// ============================================
// Property Details Page
// ============================================

function loadPropertyDetails() {
  const id = getUrlParam("id");
  if (!id) {
    document.getElementById("property-detail-content").innerHTML = `
      <div class="no-results">
        <h3>Property Not Found</h3>
        <p>The property you're looking for doesn't exist.</p>
        <a href="properties.html" class="btn btn-primary">Browse Properties</a>
      </div>
    `;
    return;
  }

  const property = getPropertyById(id);
  if (!property) {
    document.getElementById("property-detail-content").innerHTML = `
      <div class="no-results">
        <h3>Property Not Found</h3>
        <p>The property you're looking for doesn't exist.</p>
        <a href="properties.html" class="btn btn-primary">Browse Properties</a>
      </div>
    `;
    return;
  }

  const purposeClass = property.purpose === "Sell" ? "badge-sell" : "badge-rent";
  const purposeLabel = property.purpose === "Sell" ? "For Sale" : "For Rent";

  document.getElementById("property-detail-content").innerHTML = `
    <div class="property-detail">
      <div class="property-detail-image">
        <img src="${property.image}" alt="${property.title}" onerror="this.src='http://static.photos/1200x630/999'">
        <span class="property-badge ${purposeClass}" style="position:absolute;top:20px;left:20px;font-size:14px;padding:8px 20px;">${purposeLabel}</span>
      </div>
      <div class="property-detail-body">
        <div class="property-detail-header">
          <div>
            <h1>${property.title}</h1>
            <p class="property-detail-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${property.location}
            </p>
          </div>
          <p class="property-detail-price">${property.price}</p>
        </div>

        <div class="property-detail-grid">
          <div class="detail-item">
            <span class="detail-label">Purpose</span>
            <span class="detail-value">${property.purpose}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Property Type</span>
            <span class="detail-value">${property.type}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Area</span>
            <span class="detail-value">${property.area} sqft</span>
          </div>
          ${property.bedrooms > 0 ? `
          <div class="detail-item">
            <span class="detail-label">Bedrooms</span>
            <span class="detail-value">${property.bedrooms}</span>
          </div>` : ''}
          ${property.bathrooms > 0 ? `
          <div class="detail-item">
            <span class="detail-label">Bathrooms</span>
            <span class="detail-value">${property.bathrooms}</span>
          </div>` : ''}
          <div class="detail-item">
            <span class="detail-label">Furnishing</span>
            <span class="detail-value">${property.furnishing}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Parking</span>
            <span class="detail-value">${property.parking}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Facing</span>
            <span class="detail-value">${property.facing}</span>
          </div>
        </div>

        <div class="property-detail-section">
          <h2>Description</h2>
          <p>${property.description}</p>
        </div>

        <div class="property-detail-section">
          <h2>Amenities</h2>
          <div class="amenities-grid">
            ${property.amenities.map(a => `
              <div class="amenity-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F766E" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
                ${a}
              </div>
            `).join("")}
          </div>
        </div>

        <div class="property-detail-section">
          <h2>Nearby Locations</h2>
          <div class="nearby-grid">
            ${property.nearby.map(n => `
              <div class="nearby-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${n}
              </div>
            `).join("")}
          </div>
        </div>

        <div class="property-detail-cta">
          <button class="btn btn-primary btn-lg" onclick="sendPropertyInquiry(${property.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Get Inquiry on WhatsApp
          </button>
          <a href="properties.html" class="btn btn-outline btn-lg">Back to Properties</a>
        </div>
      </div>
    </div>
  `;

  // Update page title
  document.title = `${property.title} - Gwalior Property`;
}

// ============================================
// Header Component
// ============================================

function renderHeader() {
  const header = document.getElementById("main-header");
  if (!header) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const menuOpen = false;

  header.innerHTML = `
    <nav class="header-nav container">
      <a href="index.html" class="logo">
        <div class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F766E" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <span>GWALIOR <span class="logo-highlight">PROPERTY</span></span>
      </a>
      <div class="nav-links" id="nav-links">
        <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
        <a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a>
        <a href="properties.html" class="${currentPage === 'properties.html' ? 'active' : ''}">Properties</a>
        <a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
        <a href="sell-property.html" class="btn btn-primary btn-sm ${currentPage === 'sell-property.html' ? 'active' : ''}">List Your Property</a>
      </div>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </nav>
  `;

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!header.contains(e.target)) {
        navLinks.classList.remove("active");
      }
    });
  }
}

// ============================================
// Footer Component
// ============================================

function renderFooter() {
  const footer = document.getElementById("main-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="logo">
            <div class="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F766E" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <span>GWALIOR <span class="logo-highlight">PROPERTY</span></span>
          </div>
          <p>Your trusted partner for real estate in Gwalior. Buy, rent, or sell properties with confidence and ease.</p>
          <div class="footer-social">
            <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="properties.html">Properties</a></li>
            <li><a href="sell-property.html">List Property</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Property Types</h4>
          <ul>
            <li><a href="properties.html?type=Residential">Residential</a></li>
            <li><a href="properties.html?type=Commercial">Commercial</a></li>
            <li><a href="properties.html?purpose=Sell">Buy Property</a></li>
            <li><a href="properties.html?purpose=Rent">Rent Property</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Gwalior, Madhya Pradesh, India
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 99095 59554
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@gwaliorproperty.com
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Gwalior Property. All rights reserved.</p>
      </div>
    </div>
  `;
}

// ============================================
// Scroll Animations
// ============================================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// Counter Animation
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };

    update();
  });
}

// ============================================
// Initialize
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();

  // Initialize scroll animations
  setTimeout(initScrollAnimations, 100);

  // Home page - Featured properties
  if (document.getElementById("featured-properties")) {
    const featured = properties.slice(0, 3);
    renderProperties("featured-properties", featured);
  }

  // Properties page - All properties + filters
  if (document.getElementById("properties-grid")) {
    // Check URL params for initial filters
    const urlPurpose = getUrlParam("purpose");
    const urlType = getUrlParam("type");

    if (urlPurpose) {
      currentFilters.purpose = urlPurpose;
      const purposeFilter = document.getElementById("filter-purpose");
      if (purposeFilter) purposeFilter.value = urlPurpose;
    }
    if (urlType) {
      currentFilters.type = urlType;
      const typeFilter = document.getElementById("filter-type");
      if (typeFilter) typeFilter.value = urlType;
    }

    filterProperties();
  }

  // Property Details page
  if (document.getElementById("property-detail-content")) {
    loadPropertyDetails();
  }

  // Sell property form
  const sellForm = document.getElementById("sell-property-form");
  if (sellForm) {
    sellForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById("sell-name").value,
        phone: document.getElementById("sell-phone").value,
        title: document.getElementById("sell-title").value,
        location: document.getElementById("sell-location").value,
        purpose: document.getElementById("sell-purpose").value,
        type: document.getElementById("sell-type").value,
        area: document.getElementById("sell-area").value,
        price: document.getElementById("sell-price").value,
        bedrooms: document.getElementById("sell-bedrooms").value,
        bathrooms: document.getElementById("sell-bathrooms").value,
        furnishing: document.getElementById("sell-furnishing").value,
        parking: document.getElementById("sell-parking").value,
        address: document.getElementById("sell-address").value,
        description: document.getElementById("sell-description").value
      };
      sendSellPropertyInquiry(formData);
    });
  }

  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: document.getElementById("contact-name").value,
        phone: document.getElementById("contact-phone").value,
        interested: document.getElementById("contact-interested").value,
        message: document.getElementById("contact-message").value
      };
      sendContactMessage(formData);
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});
