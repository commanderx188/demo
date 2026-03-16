// ========== MAIN APPLICATION SCRIPT ==========

// Global Variables
let allTurfs = getAllTurfs();
let filteredTurfs = [...allTurfs];
let selectedTurf = null;
let currentCity = '';
let currentView = 'grid';

// DOM Elements
const turfList = document.getElementById('turfList');
const searchInput = document.getElementById('searchInput');
const areaFilter = document.getElementById('areaFilter');
const priceFilter = document.getElementById('priceFilter');
const priceDisplay = document.getElementById('priceDisplay');
const ratingFilter = document.getElementById('ratingFilter');
const resetFilters = document.getElementById('resetFilters');
const cityBtns = document.querySelectorAll('.city-btn');
const viewBtns = document.querySelectorAll('.view-btn');

// Modals
const turfDetailModal = document.getElementById('turfDetailModal');
const bookingModal = document.getElementById('bookingModal');
const successModal = document.getElementById('successModal');
const closeButtons = document.querySelectorAll('.close-btn');

// Booking Form Elements
const bookingForm = document.getElementById('bookingForm');
const bookingDate = document.getElementById('bookingDate');
const fromTime = document.getElementById('fromTime');
const duration = document.getElementById('duration');
const playerCount = document.getElementById('playerCount');
const playerEmail = document.getElementById('playerEmail');
const playerPhone = document.getElementById('playerPhone');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    setMinDate();
    displayTurfs(filteredTurfs);
    setupEventListeners();
    updateAreaFilter();
});

// Set minimum date to today
function setMinDate() {
    const today = new Date().toISOString().split('T')[0];
    bookingDate.setAttribute('min', today);
}

// Setup all event listeners
function setupEventListeners() {
    // Search and filters
    searchInput.addEventListener('input', filterTurfs);
    areaFilter.addEventListener('change', filterTurfs);
    priceFilter.addEventListener('input', (e) => {
        priceDisplay.textContent = '₹' + e.target.value;
        filterTurfs();
    });
    ratingFilter.addEventListener('change', filterTurfs);
    resetFilters.addEventListener('click', resetAllFilters);

    // City selection
    cityBtns.forEach(btn => {
        btn.addEventListener('click', selectCity);
    });

    // View toggle
    viewBtns.forEach(btn => {
        btn.addEventListener('click', toggleView);
    });

    // Close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    });

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Booking form
    bookingForm.addEventListener('submit', processBooking);
    bookingForm.addEventListener('change', updateBookingSummary);

    // Close success modal
    document.getElementById('closeSuccess').addEventListener('click', () => {
        successModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}

// Select city
function selectCity(e) {
    cityBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentCity = e.target.dataset.city;
    updateAreaFilter();
    filterTurfs();
    window.scrollTo({ top: document.getElementById('turfs').offsetTop - 100, behavior: 'smooth' });
}

// Toggle view mode
function toggleView(e) {
    viewBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentView = e.target.dataset.view;
    
    if (currentView === 'list') {
        turfList.classList.add('list-view');
    } else {
        turfList.classList.remove('list-view');
    }
}

// Update area filter dropdown
function updateAreaFilter() {
    const areas = getAreasByCity(currentCity);
    areaFilter.innerHTML = '<option value="">All Areas</option>';
    
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area.value;
        option.textContent = area.label;
        areaFilter.appendChild(option);
    });

    areaFilter.value = '';
}

// Filter turfs based on all criteria
function filterTurfs() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedArea = areaFilter.value;
    const maxPrice = parseInt(priceFilter.value);
    const minRating = parseFloat(ratingFilter.value);

    filteredTurfs = allTurfs.filter(turf => {
        const matchesSearch = turf.name.toLowerCase().includes(searchTerm) ||
                            turf.location.toLowerCase().includes(searchTerm) ||
                            turf.address.toLowerCase().includes(searchTerm) ||
                            turf.city.toLowerCase().includes(searchTerm);
        const matchesCity = !currentCity || turf.city === currentCity;
        const matchesArea = !selectedArea || turf.area === selectedArea;
        const matchesPrice = turf.price <= maxPrice;
        const matchesRating = turf.rating >= minRating;

        return matchesSearch && matchesCity && matchesArea && matchesPrice && matchesRating;
    });

    displayTurfs(filteredTurfs);
}

// Display turfs
function displayTurfs(turfs) {
    turfList.innerHTML = '';

    if (turfs.length === 0) {
        turfList.innerHTML = '<div class="no-results"><i class="fas fa-search"></i> No turfs found. Try adjusting your filters.</div>';
        return;
    }

    turfs.forEach(turf => {
        const card = createTurfCard(turf);
        turfList.appendChild(card);
    });
}

// Create turf card
function createTurfCard(turf) {
    const card = document.createElement('div');
    card.className = 'turf-card';
    const cityName = turf.city.charAt(0).toUpperCase() + turf.city.slice(1);
    
    card.innerHTML = `
        <div class="turf-card-image" style="background-image: url('${turf.images[0]}')">
            <div class="image-overlay">
                <button class="view-details-btn" onclick="viewTurfDetails(${turf.id})">View Details</button>
            </div>
        </div>
        <div class="turf-card-content">
            <div class="card-header">
                <h3 class="turf-card-name">${turf.name}</h3>
                <span class="city-badge">${cityName}</span>
            </div>
            
            <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${turf.location}</p>
            
            <div class="card-stats">
                <div class="stat">
                    <span class="stat-value">⭐ ${turf.rating}</span>
                    <span class="stat-label">(${turf.reviews})</span>
                </div>
                <div class="stat">
                    <span class="stat-value">₹${turf.price}</span>
                    <span class="stat-label">/hour</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${turf.surface}</span>
                    <span class="stat-label">Surface</span>
                </div>
            </div>

            <div class="amenities-preview">
                ${turf.amenities.slice(0, 3).map(a => `<span class="tag">${a}</span>`).join('')}
                ${turf.amenities.length > 3 ? `<span class="tag">+${turf.amenities.length - 3} more</span>` : ''}
            </div>

            <button class="btn-book" onclick="openBookingModal(${turf.id})">
                <i class="fas fa-calendar-check"></i> Book Now
            </button>
        </div>
    `;
    
    return card;
}

// View turf details
function viewTurfDetails(turfId) {
    selectedTurf = allTurfs.find(t => t.id === turfId);
    if (!selectedTurf) return;

    const cityName = selectedTurf.city.charAt(0).toUpperCase() + selectedTurf.city.slice(1);

    // Populate detail modal
    document.getElementById('detailName').textContent = selectedTurf.name;
    document.getElementById('detailCityBadge').textContent = cityName;
    document.getElementById('detailStars').textContent = generateStars(selectedTurf.rating);
    document.getElementById('detailRating').textContent = selectedTurf.rating + '/5.0';
    document.getElementById('detailReviews').textContent = `${selectedTurf.reviews} reviews`;
    document.getElementById('detailLocation').textContent = selectedTurf.location;
    document.getElementById('detailAddress').textContent = selectedTurf.address;
    document.getElementById('detailPhone').textContent = selectedTurf.phone;
    document.getElementById('detailPrice').textContent = `₹${selectedTurf.price}`;

    // Set main image
    document.getElementById('mainImage').src = selectedTurf.images[0];

    // Set image gallery
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = '';
    selectedTurf.images.forEach((img, idx) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = `thumbnail ${idx === 0 ? 'active' : ''}`;
        thumb.onclick = () => {
            document.getElementById('mainImage').src = img;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        gallery.appendChild(thumb);
    });

    // Set amenities
    const amenitiesList = document.getElementById('amenitiesList');
    amenitiesList.innerHTML = '';
    selectedTurf.amenities.forEach(amenity => {
        const tag = document.createElement('span');
        tag.className = 'amenity-tag';
        tag.innerHTML = `<i class="fas fa-check-circle"></i> ${amenity}`;
        amenitiesList.appendChild(tag);
    });

    turfDetailModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Open booking modal
function openBookingModal(turfId) {
    selectedTurf = allTurfs.find(t => t.id === turfId);
    if (!selectedTurf) return;

    // Populate booking modal
    document.getElementById('bookingTurfName').textContent = selectedTurf.name;
    document.getElementById('bookingTurfLocation').textContent = selectedTurf.location;
    document.getElementById('bookingPrice').textContent = `₹${selectedTurf.price}`;

    // Reset form
    bookingForm.reset();
    updateBookingSummary();

    turfDetailModal.classList.remove('show');
    bookingModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Update booking summary
function updateBookingSummary() {
    if (!selectedTurf || !bookingDate.value || !fromTime.value || !duration.value) {
        document.getElementById('summaryDate').textContent = '-';
        document.getElementById('summaryTime').textContent = '-';
        document.getElementById('summaryDuration').textContent = '-';
        document.getElementById('summaryRate').textContent = '₹0';
        document.getElementById('summaryTotal').textContent = '₹0';
        return;
    }

    const date = new Date(bookingDate.value);
    const dateStr = date.toLocaleDateString('en-IN', { 
        weekday: 'short', 
        day: '2-digit',
        month: 'short'
    });

    const toTime = String(parseInt(fromTime.value) + parseInt(duration.value)).padStart(2, '0') + ':00';
    const durationNum = parseInt(duration.value);
    const total = selectedTurf.price * durationNum;

    document.getElementById('summaryDate').textContent = dateStr;
    document.getElementById('summaryTime').textContent = `${fromTime.value} - ${toTime}`;
    document.getElementById('summaryDuration').textContent = `${durationNum} hour${durationNum > 1 ? 's' : ''}`;
    document.getElementById('summaryRate').textContent = `₹${selectedTurf.price}`;
    document.getElementById('summaryTotal').textContent = `₹${total}`;
}

// Process booking
function processBooking(e) {
    e.preventDefault();

    // Validation
    if (!playerEmail.value || !playerPhone.value) {
        alert('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(playerEmail.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(playerPhone.value.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Generate booking ID
    const bookingId = 'TRF' + Date.now();