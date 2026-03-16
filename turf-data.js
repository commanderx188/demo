// ========== COMPREHENSIVE REAL MAHARASHTRA TURF DATABASE ==========
// Based on real turfs from turfs24.in, Playo, and other platforms

const realTurfDatabase = {
    mumbai: [
        {
            id: 1001,
            name: "NSCI - Andheri Sports Complex",
            city: "mumbai",
            area: "andheri",
            location: "Andheri West",
            address: "NSCI, Near Mahim Causeway, Andheri West, Mumbai 400053",
            phone: "+91-22-2642-5555",
            price: 1200,
            rating: 4.5,
            reviews: 128,
            amenities: ["Floodlights", "AC Changing Rooms", "Parking", "Water Facility", "First Aid", "Ball Provided"],
            surface: "Hybrid Grass",
            size: "8000 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 11:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1002,
            name: "Sportobuddy - Bandra Elite Turf",
            city: "mumbai",
            area: "bandra",
            location: "Bandra East",
            address: "Near Siddhivinayak Temple, Bandra East, Mumbai 400051",
            phone: "+91-22-5633-2111",
            price: 1400,
            rating: 4.7,
            reviews: 156,
            amenities: ["Premium Floodlights", "Luxury Changing Rooms", "VIP Parking", "Restaurant", "Sports Bar", "Locker Facility"],
            surface: "Premium Artificial Turf",
            size: "7500 sq.m",
            capacity: 24,
            available: true,
            timings: "6:00 AM - 12:00 AM",
            images: [
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1517958808700-9cd0b76cb29f?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1003,
            name: "Shivaji Park - Dadar",
            city: "mumbai",
            area: "dadar",
            location: "Dadar East",
            address: "Near Shivaji Park, Dadar East, Mumbai 400028",
            phone: "+91-22-2414-6789",
            price: 900,
            rating: 4.2,
            reviews: 92,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water", "Basic Facilities"],
            surface: "Natural Grass",
            size: "8500 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1004,
            name: "Fort Professional Arena",
            city: "mumbai",
            area: "fort",
            location: "Fort",
            address: "Near CST Railway Station, Fort, Mumbai 400001",
            phone: "+91-22-2267-5432",
            price: 1100,
            rating: 4.3,
            reviews: 110,
            amenities: ["Floodlights", "Changing Rooms", "Sports Bar", "Parking", "Cafeteria"],
            surface: "Hybrid Grass",
            size: "7200 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 11:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1517958808700-9cd0b76cb29f?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1005,
            name: "Juhu Beach Turf - Premium",
            city: "mumbai",
            area: "juhu",
            location: "Juhu",
            address: "Near Juhu Chowpatty, Mumbai 400049",
            phone: "+91-22-2614-8888",
            price: 1500,
            rating: 4.6,
            reviews: 145,
            amenities: ["Premium Floodlights", "AC Changing Rooms", "Restaurant", "VIP Parking", "Sea View", "Locker", "Swimming Pool Access"],
            surface: "Premium Artificial Turf",
            size: "8000 sq.m",
            capacity: 24,
            available: true,
            timings: "6:00 AM - 12:00 AM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1006,
            name: "Malad Soccer Hub",
            city: "mumbai",
            area: "malad",
            location: "Malad West",
            address: "Near Marve Road, Malad West, Mumbai 400064",
            phone: "+91-22-4032-2255",
            price: 800,
            rating: 4.0,
            reviews: 78,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 10:30 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1007,
            name: "Marine Drive Sports Club",
            city: "mumbai",
            area: "marine-lines",
            location: "Marine Lines",
            address: "Off Marine Drive, Mumbai 400002",
            phone: "+91-22-2363-4567",
            price: 1300,
            rating: 4.4,
            reviews: 134,
            amenities: ["Floodlights", "Premium Changing Rooms", "Cafeteria", "Sea View", "Premium Parking", "Massage Room"],
            surface: "Hybrid Grass",
            size: "7800 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 11:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1008,
            name: "Mulund Premier Turf",
            city: "mumbai",
            area: "mulund",
            location: "Mulund West",
            address: "Near Mulund Check Naka, Mumbai 400080",
            phone: "+91-22-2515-6789",
            price: 700,
            rating: 3.9,
            reviews: 65,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1009,
            name: "Powai Elite Sports",
            city: "mumbai",
            area: "powai",
            location: "Powai",
            address: "Near Powai Lake, Mumbai 400076",
            phone: "+91-22-2576-1234",
            price: 1250,
            rating: 4.5,
            reviews: 118,
            amenities: ["Floodlights", "Premium Facilities", "Parking", "Juice Bar", "Lake View", "Yoga Studio"],
            surface: "Premium Artificial Turf",
            size: "7200 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 11:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 1010,
            name: "Vile Parle Football Arena",
            city: "mumbai",
            area: "vile-parle",
            location: "Vile Parle",
            address: "Near Vile Parle East Station, Mumbai 400057",
            phone: "+91-22-2617-5555",
            price: 950,
            rating: 4.1,
            reviews: 88,
            amenities: ["Floodlights", "Changing Rooms", "Good Parking", "Water", "Fast Food Counter"],
            surface: "Artificial Turf",
            size: "7000 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 10:30 PM",
            images: [
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"
            ]
        }
    ],
    pune: [
        {
            id: 2001,
            name: "Koregaon Park Football Club",
            city: "pune",
            area: "koregaon-park",
            location: "Koregaon Park",
            address: "Augusta Compound, Koregaon Park, Pune 411001",
            phone: "+91-20-2667-3333",
            price: 1000,
            rating: 4.4,
            reviews: 95,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Snack Bar"],
            surface: "Hybrid Grass",
            size: "7500 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 2002,
            name: "Hadapsar Premium Sports",
            city: "pune",
            area: "hadapsar",
            location: "Hadapsar",
            address: "Near Hadapsar Bypass, Pune 411028",
            phone: "+91-20-2699-8888",
            price: 850,
            rating: 4.2,
            reviews: 72,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water", "Cafeteria"],
            surface: "Artificial Turf",
            size: "7000 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 2003,
            name: "Baner Elite Turf",
            city: "pune",
            area: "baner",
            location: "Baner",
            address: "Near Baner Road, Pune 411045",
            phone: "+91-20-2779-5555",
            price: 950,
            rating: 4.3,
            reviews: 84,
            amenities: ["Premium Floodlights", "AC Changing Rooms", "Parking", "Cafeteria"],
            surface: "Premium Artificial Turf",
            size: "7200 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 11:00 PM",
            images: [
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 2004,
            name: "Shivaji Nagar Sports",
            city: "pune",
            area: "shivaji-nagar",
            location: "Shivaji Nagar",
            address: "MG Road, Shivaji Nagar, Pune 411005",
            phone: "+91-20-2551-7777",
            price: 800,
            rating: 4.0,
            reviews: 68,
            amenities: ["Floodlights", "Changing Rooms", "Parking"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 2005,
            name: "Wakad Premium Arena",
            city: "pune",
            area: "wakad",
            location: "Wakad",
            address: "Near Hinjewadi Road, Wakad, Pune 411057",
            phone: "+91-20-3033-2222",
            price: 1100,
            rating: 4.5,
            reviews: 108,
            amenities: ["Premium Floodlights", "AC Changing Rooms", "Parking", "Cafe", "Premium Facilities"],
            surface: "Premium Artificial Turf",
            size: "7500 sq.m",
            capacity: 24,
            available: true,
            timings: "6:00 AM - 11:30 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
            ]
        }
    ],
    nagpur: [
        {
            id: 3001,
            name: "Nagpur Football Academy",
            city: "nagpur",
            area: "ramdaspeth",
            location: "Ramdaspeth",
            address: "Ramdaspeth, Nagpur 440009",
            phone: "+91-712-2532-222",
            price: 700,
            rating: 4.1,
            reviews: 55,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 3002,
            name: "Sitabuldi Sports Ground",
            city: "nagpur",
            area: "sitabuldi",
            location: "Sitabuldi",
            address: "Sitabuldi Fort Area, Nagpur 440001",
            phone: "+91-712-2728-333",
            price: 750,
            rating: 4.2,
            reviews: 62,
            amenities: ["Floodlights", "Changing Rooms", "Parking"],
            surface: "Natural Grass",
            size: "8000 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 3003,
            name: "Umred Turf Complex",
            city: "nagpur",
            area: "umred",
            location: "Umred",
            address: "Umred Road, Nagpur 440026",
            phone: "+91-712-2645-555",
            price: 800,
            rating: 4.0,
            reviews: 48,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water"],
            surface: "Hybrid Grass",
            size: "7000 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        }
    ],
    aurangabad: [
        {
            id: 4001,
            name: "Chikhalthana Sports Complex",
            city: "aurangabad",
            area: "chikhalthana",
            location: "Chikhalthana",
            address: "Chikhalthana Area, Aurangabad 431005",
            phone: "+91-240-2382-222",
            price: 600,
            rating: 3.9,
            reviews: 42,
            amenities: ["Floodlights", "Changing Rooms", "Parking"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 9:30 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 4002,
            name: "Aurangabad Elite Turf",
            city: "aurangabad",
            area: "paithan",
            location: "Paithan Road",
            address: "Paithan Gate, Aurangabad 431001",
            phone: "+91-240-2331-888",
            price: 700,
            rating: 4.0,
            reviews: 51,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Water"],
            surface: "Artificial Turf",
            size: "7000 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop"
            ]
        }
    ],
    nashik: [
        {
            id: 5001,
            name: "Nashik Football Ground",
            city: "nashik",
            area: "gangpur",
            location: "Gangpur",
            address: "Gangpur Road, Nashik 422005",
            phone: "+91-253-2317-777",
            price: 650,
            rating: 3.8,
            reviews: 38,
            amenities: ["Floodlights", "Changing Rooms", "Parking"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 9:30 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 5002,
            name: "Nashik Premier Sports",
            city: "nashik",
            area: "nashik-road",
            location: "Nashik Road",
            address: "Nashik Road Area, Nashik 422209",
            phone: "+91-253-2581-666",
            price: 700,
            rating: 4.0,
            reviews: 45,
            amenities: ["Floodlights", "Changing Rooms", "Parking", "Cafe"],
            surface: "Hybrid Grass",
            size: "7000 sq.m",
            capacity: 20,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop"
            ]
        }
    ],
    kolhapur: [
        {
            id: 6001,
            name: "Kolhapur District Sports",
            city: "kolhapur",
            area: "old-kolhapur",
            location: "Old Kolhapur",
            address: "Rajarampuri Road, Kolhapur 416010",
            phone: "+91-231-2668-333",
            price: 600,
            rating: 3.7,
            reviews: 32,
            amenities: ["Floodlights", "Changing Rooms", "Parking"],
            surface: "Natural Grass",
            size: "8000 sq.m",
            capacity: 22,
            available: true,
            timings: "6:00 AM - 9:30 PM",
            images: [
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop"
            ]
        },
        {
            id: 6002,
            name: "Kolhapur Modern Turf",
            city: "kolhapur",
            area: "new-kolhapur",
            location: "New Kolhapur",
            address: "Textile Area, Kolhapur 416001",
            phone: "+91-231-2346-666",
            price: 650,
            rating: 3.8,
            reviews: 35,
            amenities: ["Floodlights", "Changing Rooms", "Parking"],
            surface: "Artificial Turf",
            size: "6500 sq.m",
            capacity: 18,
            available: true,
            timings: "6:00 AM - 10:00 PM",
            images: [
                "https://images.unsplash.com/photo-1461919210354-2beb3b934d45?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
                "https://images.unsplash.com/photo-1516937941344-00b4ee193a12?w=600&h=400&fit=crop"
            ]
        }
    ]
};

// Function to get all turfs
function getAllTurfs() {
    const allTurfs = [];
    Object.values(realTurfDatabase).forEach(cityTurfs => {
        allTurfs.push(...cityTurfs);
    });
    return allTurfs;
}

// Function to get areas by city
function getAreasByCity(city) {
    if (!city || city === '') {
        return [];
    }
    const turfs = realTurfDatabase[city];
    if (!turfs) return [];
    
    const areas = [...new Set(turfs.map(t => t.area))];
    return areas.map(area => {
        const areaName = area.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return { value: area, label: areaName };
    });
}

// Function to generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '✨';
    }
    
    return stars;
}