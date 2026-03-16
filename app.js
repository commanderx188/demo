// ========== REAL MAHARASHTRA TURF DATABASE ==========
const realTurfDatabase = {
    mumbai: [
        { id: 1001, name: "NSCI - Andheri Sports Complex", city: "mumbai", area: "andheri", location: "Andheri West", address: "NSCI, Near Mahim Causeway", phone: "+91-22-2642-5555", price: 1200, rating: 4.5, reviews: 128, amenities: ["Floodlights", "AC Changing Rooms", "Parking"], surface: "Hybrid Grass", size: "8000 sq.m", capacity: 22, timings: "6:00 AM - 11:00 PM", images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"], ownerId: null },
        { id: 1002, name: "Bandra Elite Turf", city: "mumbai", area: "bandra", location: "Bandra East", address: "Near Siddhivinayak Temple", phone: "+91-22-5633-2111", price: 1400, rating: 4.7, reviews: 156, amenities: ["Premium Floodlights", "Luxury Changing Rooms"], surface: "Premium Artificial Turf", size: "7500 sq.m", capacity: 24, timings: "6:00 AM - 12:00 AM", images: ["https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"], ownerId: null },
        { id: 1003, name: "Dadar Green Field", city: "mumbai", area: "dadar", location: "Dadar East", address: "Near Shivaji Park", phone: "+91-22-2414-6789", price: 900, rating: 4.2, reviews: 92, amenities: ["Floodlights", "Changing Rooms", "Parking"], surface: "Natural Grass", size: "8500 sq.m", capacity: 22, timings: "6:00 AM - 10:00 PM", images: ["https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop"], ownerId: null },
    ],
    pune: [
        { id: 2001, name: "Koregaon Park Football Club", city: "pune", area: "koregaon-park", location: "Koregaon Park", address: "Augusta Compound", phone: "+91-20-2667-3333", price: 1000, rating: 4.4, reviews: 95, amenities: ["Floodlights", "Changing Rooms", "Parking"], surface: "Hybrid Grass", size: "7500 sq.m", capacity: 22, timings: "6:00 AM - 10:00 PM", images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"], ownerId: null },
        { id: 2002, name: "Hadapsar Premium Sports", city: "pune", area: "hadapsar", location: "Hadapsar", address: "Near Hadapsar Bypass", phone: "+91-20-2699-8888", price: 850, rating: 4.2, reviews: 72, amenities: ["Floodlights", "Changing Rooms"], surface: "Artificial Turf", size: "7000 sq.m", capacity: 20, timings: "6:00 AM - 10:00 PM", images: ["https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"], ownerId: null },
    ],
    nagpur: [
        { id: 3001, name: "Nagpur Football Academy", city: "nagpur", area: "ramdaspeth", location: "Ramdaspeth", address: "Ramdaspeth", phone: "+91-712-2532-222", price: 700, rating: 4.1, reviews: 55, amenities: ["Floodlights", "Parking"], surface: "Artificial Turf", size: "6500 sq.m", capacity: 18, timings: "6:00 AM - 10:00 PM", images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"], ownerId: null },
    ],
    aurangabad: [
        { id: 4001, name: "Chikhalthana Sports Complex", city: "aurangabad", area: "chikhalthana", location: "Chikhalthana", address: "Chikhalthana Area", phone: "+91-240-2382-222", price: 600, rating: 3.9, reviews: 42, amenities: ["Floodlights", "Parking"], surface: "Artificial Turf", size: "6500 sq.m", capacity: 18, timings: "6:00 AM - 9:30 PM", images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"], ownerId: null },
    ],
    nashik: [
        { id: 5001, name: "Nashik Football Ground", city: "nashik", area: "gangpur", location: "Gangpur", address: "Gangpur Road", phone: "+91-253-2317-777", price: 650, rating: 3.8, reviews: 38, amenities: ["Floodlights", "Parking"], surface: "Artificial Turf", size: "6500 sq.m", capacity: 18, timings: "6:00 AM - 9:30 PM", images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"], ownerId: null },
    ]
};

// ========== APPLICATION STATE ==========
let currentUser = null;
let currentEditingTurfId = null;
let allTurfs = [];
let userBookings = [];
let selectedTurfForBooking = null;
let currentBookingFilter = 'upcoming';

// ========== INITIALIZE APP ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadDataFromStorage();
    setupEventListeners();
    updateNavigation();
    navigateTo('home');
    loadBrowseTurfs();
}

// ========== DATA MANAGEMENT ==========
function loadDataFromStorage() {
    try {
        // Load users
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Load turfs - use default if not exists
        let turfs = JSON.parse(localStorage.getItem('turfs')) || [];
        if (turfs.length === 0) {
            Object.values(realTurfDatabase).forEach(cityTurfs => {
                turfs.push(...JSON.parse(JSON.stringify(cityTurfs)));
            });
            localStorage.setItem('turfs', JSON.stringify(turfs));
        }
        allTurfs = turfs;

        // Load bookings
        userBookings = JSON.parse(localStorage.getItem('bookings')) || [];

        // Check if user is logged in
        const currentUserEmail = localStorage.getItem('currentUser');
        if (currentUserEmail) {
            currentUser = users.find(u => u.email === currentUserEmail);
        }
    } catch (error) {
        console.error('Error loading data:', error);
        allTurfs = JSON.parse(JSON.stringify(Object.values(realTurfDatabase).flat()));
        localStorage.setItem('turfs', JSON.stringify(allTurfs));
    }
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Search and filters
    const searchInput = document.getElementById('searchTurfs');
    const cityFilter = document.getElementById('cityFilter');
    const priceFilter = document.getElementById('priceFilter');

    if (searchInput) searchInput.addEventListener('input', loadBrowseTurfs);
    if (cityFilter) cityFilter.addEventListener('change', loadBrowseTurfs);
    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            document.getElementById('priceLabel').textContent = '₹' + e.target.value;
            loadBrowseTurfs();
        });
    }

    // Booking form
    const bookingDate = document.getElementById('bookingDate');
    if (bookingDate) {
        const today = new Date().toISOString().split('T')[0];
        bookingDate.setAttribute('min', today);
    }
}

// ========== NAVIGATION ==========
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Check authentication for protected pages
    const protectedPages = ['dashboard', 'my-bookings', 'my-turfs'];
    if (protectedPages.includes(page) && !currentUser) {
        alert('Please login first');
        navigateTo('login');
        return;
    }

    // Show selected page
    const pageId = page + 'Page';
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.classList.add('active');

        // Load data for specific pages
        if (page === 'browse') loadBrowseTurfs();
        if (page === 'dashboard') loadDashboard();
        if (page === 'my-bookings') loadMyBookings();
        if (page === 'my-turfs') loadMyTurfs();
    }

    window.scrollTo(0, 0);
}

function updateNavigation() {
    const authLink = document.getElementById('authLink');
    const userProfile = document.getElementById('userProfile');

    if (currentUser) {
        if (authLink) authLink.style.display = 'none';
        if (userProfile) {
            userProfile.style.display = 'block';
            document.getElementById('userName').textContent = currentUser.firstName || 'User';
        }
    } else {
        if (authLink) authLink.style.display = 'block';
        if (userProfile) userProfile.style.display = 'none';
    }
}

// ========== AUTHENTICATION ==========
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    console.log('Login attempt:', email);

    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Stored users:', users);

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert('❌ Invalid email or password!\n\nIf you don\'t have an account, please register first.');
        return;
    }

    currentUser = user;
    localStorage.setItem('currentUser', email);
    updateNavigation();
    
    // Clear form
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    
    alert('✅ Login successful!');
    navigateTo('dashboard');
}

function handleRegister(event) {
    event.preventDefault();

    const firstName = document.getElementById('regFirstName').value.trim();
    const lastName = document.getElementById('regLastName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Validation
    if (!firstName || !lastName || !email || !phone || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.find(u => u.email === email)) {
        alert('Email already registered');
        return;
    }

    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        phone,
        password, // In real app, this should be hashed
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem('currentUser', email);
    updateNavigation();

    // Clear form
    event.target.reset();
    
    alert('✅ Registration successful! Welcome to TurfHub');
    navigateTo('dashboard');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateNavigation();
    alert('Logged out successfully');
    navigateTo('home');
}

// ========== BROWSE TURFS ==========
function loadBrowseTurfs() {
    const search = document.getElementById('searchTurfs')?.value.toLowerCase() || '';
    const city = document.getElementById('cityFilter')?.value || '';
    const maxPrice = parseInt(document.getElementById('priceFilter')?.value || 2000);

    let filtered = allTurfs.filter(turf => {
        const matchesSearch = turf.name.toLowerCase().includes(search) || 
                            turf.city.toLowerCase().includes(search) ||
                            turf.location.toLowerCase().includes(search);
        const matchesCity = !city || turf.city === city;
        const matchesPrice = turf.price <= maxPrice;

        return matchesSearch && matchesCity && matchesPrice;
    });

    displayTurfs(filtered);
}

function displayTurfs(turfs) {
    const container = document.getElementById('turfsContainer');
    if (!container) return;

    container.innerHTML = '';

    if (turfs.length === 0) {
        container.innerHTML = '<div class="no-results" style="grid-column: 1 / -1;"><i class="fas fa-search"></i> No turfs found</div>';
        return;
    }

    turfs.forEach(turf => {
        const card = createTurfCard(turf);
        container.appendChild(card);
    });
}

function createTurfCard(turf) {
    const card = document.createElement('div');
    card.className = 'turf-card';

    const imageUrl = turf.images && turf.images[0] ? turf.images[0] : 'https://via.placeholder.com/300x200';

    card.innerHTML = `
        <div class="turf-card-image" style="background-image: url('${imageUrl}')">
            <div class="image-overlay">
                <button class="view-details-btn" onclick="viewTurfDetails(${turf.id})">View Details</button>
            </div>
        </div>
        <div class="turf-card-content">
            <div class="card-header">
                <h3 class="turf-card-name">${turf.name}</h3>
                <span class="city-badge">${turf.city.toUpperCase()}</span>
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
                ${turf.amenities.slice(0, 2).map(a => `<span class="tag">${a}</span>`).join('')}
                ${turf.amenities.length > 2 ? `<span class="tag">+${turf.amenities.length - 2}</span>` : ''}
            </div>
            <button class="btn-book" onclick="openBookingModal(${turf.id})">Book Now</button>
        </div>
    `;

    return card;
}

function viewTurfDetails(turfId) {
    const turf = allTurfs.find(t => t.id === turfId);
    if (!turf) return;

    const details = `
    📍 ${turf.name}
    
Location: ${turf.location}
Address: ${turf.address}
Price: ₹${turf.price}/hour
Rating: ⭐ ${turf.rating} (${turf.reviews} reviews)
Surface: ${turf.surface}
Size: ${turf.size}
Capacity: ${turf.capacity} players
Hours: ${turf.timings}

Amenities: ${turf.amenities.join(', ')}
    `;

    alert(details);
}

// ========== BOOKING ==========
function openBookingModal(turfId) {
    if (!currentUser) {
        alert('Please login to book a turf');
        navigateTo('login');
        return;
    }

    selectedTurfForBooking = allTurfs.find(t => t.id === turfId);
    if (!selectedTurfForBooking) return;

    document.getElementById('bookingTurfName').textContent = selectedTurfForBooking.name;
    document.getElementById('bookingTurfLocation').textContent = selectedTurfForBooking.location;
    document.getElementById('bookingTurfPrice').textContent = `₹${selectedTurfForBooking.price}/hour`;

    // Set min date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingDate').setAttribute('min', today);

    document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
}

function confirmBooking(event) {
    event.preventDefault();

    if (!selectedTurfForBooking) return;

    const date = document.getElementById('bookingDate').value;
    const fromTime = document.getElementById('bookingFromTime').value;
    const duration = parseInt(document.getElementById('bookingDuration').value);
    const players = parseInt(document.getElementById('bookingPlayers').value);

    if (!date || !fromTime) {
        alert('Please fill all fields');
        return;
    }

    const booking = {
        id: Date.now(),
        userId: currentUser.id,
        turfId: selectedTurfForBooking.id,
        turfName: selectedTurfForBooking.name,
        turfLocation: selectedTurfForBooking.location,
        date,
        fromTime,
        duration,
        players,
        totalPrice: selectedTurfForBooking.price * duration,
        status: 'upcoming',
        createdAt: new Date().toISOString()
    };

    userBookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(userBookings));

    alert(`✅ Booking Confirmed!\n\nTurf: ${booking.turfName}\nDate: ${date}\nTime: ${fromTime}\nDuration: ${duration} hour(s)\nTotal: ₹${booking.totalPrice}`);
    
    closeBookingModal();
    loadMyBookings();
    navigateTo('my-bookings');
}

// ========== DASHBOARD ==========
function loadDashboard() {
    if (!currentUser) return;

    const myBookings = userBookings.filter(b => b.userId === currentUser.id);
    const upcomingBookings = myBookings.filter(b => b.status === 'upcoming');
    const completedBookings = myBookings.filter(b => b.status === 'completed');
    const myTurfs = allTurfs.filter(t => t.ownerId === currentUser.id);

    let totalSpent = 0;
    myBookings.forEach(b => {
        if (b.status === 'completed') totalSpent += b.totalPrice;
    });

    document.getElementById('upcomingCount').textContent = upcomingBookings.length;
    document.getElementById('completedCount').textContent = completedBookings.length;
    document.getElementById('turfsCount').textContent = myTurfs.length;
    document.getElementById('totalSpent').textContent = '₹' + totalSpent;
}

// ========== MY BOOKINGS ==========
function loadMyBookings() {
    if (!currentUser) return;

    const myBookings = userBookings.filter(b => b.userId === currentUser.id);
    const filtered = myBookings.filter(b => b.status === currentBookingFilter);

    const container = document.getElementById('bookingsContainer');
    if (!container) return;

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">No ${currentBookingFilter} bookings found</div>`;
        return;
    }

    filtered.forEach(booking => {
        const card = document.createElement('div');
        card.className = 'booking-card';

        const statusClass = `status-${booking.status}`;
        const date = new Date(booking.date).toLocaleDateString('en-IN');

        card.innerHTML = `
            <span class="booking-status ${statusClass}">${booking.status.toUpperCase()}</span>
            <div>
                <h4>${booking.turfName}</h4>
                <p>${booking.turfLocation}</p>
                <p>${date} at ${booking.fromTime}</p>
            </div>
            <div>
                <p><strong>₹${booking.totalPrice}</strong></p>
                <p>${booking.players} players | ${booking.duration} hour(s)</p>
            </div>
        `;

        container.appendChild(card);
    });
}

function filterBookings(status) {
    currentBookingFilter = status;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    loadMyBookings();
}

// ========== MY TURFS ==========
function loadMyTurfs() {
    if (!currentUser) return;

    const myTurfs = allTurfs.filter(t => t.ownerId === currentUser.id);
    const container = document.getElementById('myTurfsContainer');
    if (!container) return;

    container.innerHTML = '';

    if (myTurfs.length === 0) {
        container.innerHTML = '<div class="no-results">You haven\'t listed any turfs yet. <button class="btn-primary" onclick="openAddTurfModal()">Add Your First Turf</button></div>';
        return;
    }

    myTurfs.forEach(turf => {
        const card = createTurfCard(turf);
        const editBtn = document.createElement('button');
        editBtn.className = 'btn-secondary';
        editBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editBtn.style.width = '100%';
        editBtn.style.marginTop = '0.5rem';
        editBtn.onclick = () => editTurf(turf.id);
        card.appendChild(editBtn);
        container.appendChild(card);
    });
}

function openAddTurfModal() {
    if (!currentUser) {
        alert('Please login first');
        navigateTo('login');
        return;
    }

    currentEditingTurfId = null;
    document.getElementById('modalTitle').textContent = 'Add New Turf';
    document.getElementById('turfForm').reset();
    document.getElementById('turfId').value = '';
    document.getElementById('turfModal').classList.add('active');
}

function closeTurfModal() {
    document.getElementById('turfModal').classList.remove('active');
}

function editTurf(turfId) {
    const turf = allTurfs.find(t => t.id === turfId);
    if (!turf) return;

    currentEditingTurfId = turfId;
    document.getElementById('modalTitle').textContent = 'Edit Turf';
    
    document.getElementById('turfName').value = turf.name;
    document.getElementById('turfCity').value = turf.city;
    document.getElementById('turfArea').value = turf.area;
    document.getElementById('turfAddress').value = turf.address;
    document.getElementById('turfPhone').value = turf.phone;
    document.getElementById('turfPrice').value = turf.price;
    document.getElementById('turfSurface').value = turf.surface;
    document.getElementById('turfSize').value = turf.size;
    document.getElementById('turfCapacity').value = turf.capacity;
    document.getElementById('turfTimings').value = turf.timings;
    document.getElementById('turfDescription').value = turf.description || '';
    document.getElementById('turfId').value = turfId;

    // Set amenities
    document.querySelectorAll('.amenity-check').forEach(checkbox => {
        checkbox.checked = turf.amenities.includes(checkbox.value);
    });

    document.getElementById('turfModal').classList.add('active');
}

function saveTurf(event) {
    event.preventDefault();

    if (!currentUser) return;

    const name = document.getElementById('turfName').value.trim();
    const city = document.getElementById('turfCity').value;
    const area = document.getElementById('turfArea').value.trim();
    const address = document.getElementById('turfAddress').value.trim();
    const phone = document.getElementById('turfPhone').value.trim();
    const price = parseInt(document.getElementById('turfPrice').value);
    const surface = document.getElementById('turfSurface').value;
    const size = document.getElementById('turfSize').value.trim();
    const capacity = parseInt(document.getElementById('turfCapacity').value);
    const timings = document.getElementById('turfTimings').value.trim();
    const description = document.getElementById('turfDescription').value.trim();

    const amenities = [];
    document.querySelectorAll('.amenity-check:checked').forEach(checkbox => {
        amenities.push(checkbox.value);
    });

    if (!name || !city || !area || !address || !phone || !price || !surface || !size || !capacity) {
        alert('Please fill all required fields');
        return;
    }

    if (currentEditingTurfId) {
        // Edit existing turf
        const turf = allTurfs.find(t => t.id === currentEditingTurfId);
        if (turf && turf.ownerId === currentUser.id) {
            turf.name = name;
            turf.city = city;
            turf.area = area;
            turf.address = address;
            turf.phone = phone;
            turf.price = price;
            turf.surface = surface;
            turf.size = size;
            turf.capacity = capacity;
            turf.timings = timings;
            turf.description = description;
            turf.amenities = amenities;
        }
    } else {
        // Add new turf
        const newTurf = {
            id: Date.now(),
            name,
            city,
            area,
            location: area,
            address,
            phone,
            price,
            rating: 4.0,
            reviews: 0,
            amenities,
            surface,
            size,
            capacity,
            timings,
            description,
            images: ['https://via.placeholder.com/600x400'],
            ownerId: currentUser.id
        };
        allTurfs.push(newTurf);
    }

    saveTurfsToStorage();
    closeTurfModal();
    loadMyTurfs();
    alert('✅ Turf saved successfully!');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
}

function setMinDate() {
    const bookingDate = document.getElementById('bookingDate');
    if (bookingDate) {
        const today = new Date().toISOString().split('T')[0];
        bookingDate.setAttribute('min', today);
    }
}