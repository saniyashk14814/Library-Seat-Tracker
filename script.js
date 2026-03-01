// TMU Library Floor Configuration - Based on Official Floor Plans
const floorConfig = {
  2: {
    name: "Main Floor",
    description: "Main floor of the library with Circulation Desk, Research Help, Computer workstations, Geospatial Map & Data Centre, IT Information Desk, Material ConneXion, and Learning Commons Lab (ILC).",
    seats: 40,
    zones: ["Desktop", "Group", "Individual"],
    features: ["Circulation Desk", "Research Help", "IT Info Desk", "Printers", "Geospatial Map & Data Centre"],
    hasStudyRooms: false
  },
  3: {
    name: "Computer Lab Floor",
    description: "Individual study floor with computer workstations in open area and labs. Features Study carrels with computers, Immersion Studio (by appointment), Collaboratory, LIB393 Classroom Lab, and LIB393A Drop-in Computer Lab.",
    seats: 35,
    zones: ["Computer", "Carrel", "Lab"],
    features: ["Desktop Computers", "Immersion Studio", "Collaboratory", "Teaching Lab"],
    hasStudyRooms: false
  },
  4: {
    name: "Archives & Quiet Study",
    description: "Open seating with natural light and variety of seating types. Home to TMU Archives and Special Collections (access by appointment). Individual and group study spaces available.",
    seats: 28,
    zones: ["Individual", "Group", "Window"],
    features: ["Archives & Special Collections", "Reading Room", "Natural Light"],
    hasStudyRooms: false
  },
  5: {
    name: "Quiet Individual & Group Study",
    description: "Quiet individual and group study floor. Books: Call numbers A-HC. Features Audiovisual collection, Microforms, Study carrels, and Bookable study rooms. FCS Academic Support Centre (LIB-549).",
    seats: 30,
    zones: ["Quiet", "Carrel", "Group"],
    features: ["Audiovisual Collection", "Microforms", "Study Carrels", "FCS Academic Support Centre"],
    hasStudyRooms: true
  },
  6: {
    name: "Quiet Study Floor",
    description: "Individual, quiet study floor with natural light and variety of seating types. Books: Call numbers HD-HT. Features individual study carrels, computer lab, and bookable study rooms.",
    seats: 32,
    zones: ["Quiet", "Carrel", "Computer"],
    features: ["Natural Light", "Computer Lab", "Study Carrels", "Libraries Teaching Lab"],
    hasStudyRooms: true
  },
  7: {
    name: "Quiet Study Floor",
    description: "Individual, quiet study floor with natural light and variety of seating types. Books: Call numbers HV - PN1995. Features individual study carrels and bookable study rooms.",
    seats: 28,
    zones: ["Quiet", "Carrel", "Window"],
    features: ["Natural Light", "Study Carrels", "Individual Seating"],
    hasStudyRooms: true
  },
  8: {
    name: "Group Study Floor",
    description: "Group Study floor with green wall (plant wall) and windows with natural light. Features study carrels, open study spaces, and bookable group study rooms. Books: Call numbers PN1996 - PS7999.",
    seats: 26,
    zones: ["Group", "Carrel", "Open"],
    features: ["Green Wall", "Natural Light", "Group Seating", "Study Carrels"],
    hasStudyRooms: true
  },
  9: {
    name: "Quiet Individual & Group Study",
    description: "Quiet individual and group study floor. Books: Call numbers PS8000 - T. Features individual study carrels and bookable study rooms.",
    seats: 24,
    zones: ["Quiet", "Carrel", "Group"],
    features: ["Study Carrels", "Individual Seating", "Quiet Zone"],
    hasStudyRooms: true
  },
  10: {
    name: "Silent Study Floor",
    description: "Top floor for silent study. Individual study carrels and shelving for books. Absolute silence required for focused work.",
    seats: 20,
    zones: ["Silent", "Carrel", "Individual"],
    features: ["Silent Zone", "Study Carrels", "Book Shelving"],
    hasStudyRooms: false
  }
};

// Study room configurations based on TMU Library Directory
const studyRoomsConfig = {
  5: [
    { id: "LIB-550", name: "LIB 550", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-551", name: "LIB 551", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-552", name: "LIB 552", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-554", name: "LIB 554", capacity: 4, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-555", name: "LIB 555", capacity: 4, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-556", name: "LIB 556", capacity: 4, features: ["Whiteboard", "Power Outlets"] }
  ],
  6: [
    { id: "LIB-605A", name: "LIB 605A", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-605B", name: "LIB 605B", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-605C", name: "LIB 605C", capacity: 4, features: ["Whiteboard", "Power Outlets"] }
  ],
  7: [
    { id: "LIB-701", name: "LIB 701", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-702", name: "LIB 702", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-703", name: "LIB 703", capacity: 4, features: ["Whiteboard", "Power Outlets"] }
  ],
  8: [
    { id: "LIB-805", name: "LIB 805", capacity: 8, features: ["Whiteboard", "TV Display", "Group Table", "Accessible"] },
    { id: "LIB-805A", name: "LIB 805A", capacity: 6, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-805B", name: "LIB 805B", capacity: 6, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-805C", name: "LIB 805C", capacity: 6, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-806", name: "LIB 806", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-807", name: "LIB 807", capacity: 4, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-808", name: "LIB 808", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-809", name: "LIB 809", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] }
  ],
  9: [
    { id: "LIB-905A", name: "LIB 905A", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-905B", name: "LIB 905B", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] },
    { id: "LIB-905C", name: "LIB 905C", capacity: 4, features: ["Whiteboard", "Power Outlets"] },
    { id: "LIB-908", name: "LIB 908", capacity: 6, features: ["Whiteboard", "Power Outlets", "Group Table"] }
  ]
};

// Generate seats for a floor (fallback if API unavailable)
function generateSeats(floor) {
  const config = floorConfig[floor];
  const arr = [];
  for (let i = 1; i <= config.seats; i++) {
    arr.push({
      id: i,
      zone: config.zones[i % config.zones.length],
      status: "available"
    });
  }
  return arr;
}

// Generate study rooms with availability
function generateStudyRooms(floor) {
  if (!studyRoomsConfig[floor]) return [];
  return studyRoomsConfig[floor].map(room => ({
    ...room,
    status: "available",
    bookedSlots: []
  }));
}

// Initialize floor data
const floors = {};
const studyRooms = {};

// Backend status
let backendAvailable = false;

// Initialize data from API or local fallback
async function initializeData() {
  try {
    // Check if backend is available
    backendAvailable = await LibraryAPI.checkBackendHealth();

    if (backendAvailable) {
      console.log('Backend connected - using API');
      // Load data from API
      for (let i = 2; i <= 10; i++) {
        floors[i] = await LibraryAPI.getFloorSeats(i);
        if (floorConfig[i].hasStudyRooms) {
          studyRooms[i] = await LibraryAPI.getFloorRooms(i);
        }
      }
      // Load user bookings from API
      userBookings = await LibraryAPI.getUserBookings();
    } else {
      console.log('Backend unavailable - using local storage');
      // Use local generation
      for (let i = 2; i <= 10; i++) {
        floors[i] = generateSeats(i);
        if (floorConfig[i].hasStudyRooms) {
          studyRooms[i] = generateStudyRooms(i);
        }
      }
      // Load from localStorage
      userBookings = JSON.parse(localStorage.getItem('tmuLibraryBookings')) || [];
    }

    updateBookingCount();
    render();
  } catch (error) {
    console.error('Error initializing data:', error);
    backendAvailable = false;
    // Fallback to local
    for (let i = 2; i <= 10; i++) {
      floors[i] = generateSeats(i);
      if (floorConfig[i].hasStudyRooms) {
        studyRooms[i] = generateStudyRooms(i);
      }
    }
    userBookings = JSON.parse(localStorage.getItem('tmuLibraryBookings')) || [];
    updateBookingCount();
    render();
  }
}

let currentFloor = 2;
let selectedRoom = null;
let selectedTimeSlot = null;
let selectedSeat = null;
let selectedDuration = null;
let selectedSeatTimeSlot = null;

// User bookings storage
let userBookings = [];

// Save bookings (API or localStorage fallback)
async function saveBookings() {
  if (!backendAvailable) {
    localStorage.setItem('tmuLibraryBookings', JSON.stringify(userBookings));
  }
  updateBookingCount();
}

// Refresh bookings from API
async function refreshBookings() {
  if (backendAvailable) {
    try {
      userBookings = await LibraryAPI.getUserBookings();
      updateBookingCount();
    } catch (error) {
      console.error('Error refreshing bookings:', error);
    }
  }
}

// Update booking count in header
function updateBookingCount() {
  const countEl = document.getElementById('bookingCount');
  if (countEl) {
    countEl.textContent = userBookings.length;
  }
}

// DOM elements
const grid = document.getElementById("seatCategories");
const label = document.getElementById("currentFloor");
const floorTitle = document.getElementById("floorTitle");
const floorDescription = document.getElementById("floorDescription");
const floorMap = document.getElementById("floorMap");
const studyRoomsSection = document.getElementById("studyRoomsSection");
const studyRoomsGrid = document.getElementById("studyRoomsGrid");
const modal = document.getElementById("bookingModal");
const closeModal = document.querySelector(".close-modal");
const confirmBooking = document.getElementById("confirmBooking");
const seatModal = document.getElementById("seatModal");
const closeSeatModal = document.querySelector(".close-seat-modal");
const confirmSeatBooking = document.getElementById("confirmSeatBooking");
const myBookingsModal = document.getElementById("myBookingsModal");
const closeBookingsModal = document.querySelector(".close-bookings-modal");
const userBookingsBtn = document.getElementById("userBookings");

// Floor-specific map layouts based on TMU floor plans
const floorMaps = {
  2: { // Main Floor - has circulation desk, computers, GMDC, entrance from SLC
    layout: [
      ['empty', 'empty', 'lab', 'lab', 'lab', 'wc', 'wc', 'empty', 'computers', 'computers', 'computers', 'gmdc'],
      ['empty', 'entrance', 'lab', 'lab', 'lab', 'elev', 'stairs', 'empty', 'computers', 'computers', 'computers', 'gmdc'],
      ['circ', 'circ', 'empty', 'help', 'empty', 'elev', 'stairs', 'empty', 'seats', 'seats', 'seats', 'gmdc'],
      ['circ', 'circ', 'empty', 'empty', 'printers', 'elev', 'stairs', 'empty', 'seats', 'seats', 'seats', 'empty'],
      ['empty', 'exit', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'seats', 'seats', 'seats', 'empty'],
      ['empty', 'empty', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'group', 'group', 'empty', 'empty']
    ],
    labels: { circ: 'Circ', help: 'Help', lab: 'Lab', gmdc: 'GMDC', entrance: '↓SLC', exit: '←Exit' }
  },
  3: { // Computer Lab Floor - Immersion Studio, Collaboratory, Labs
    layout: [
      ['empty', 'empty', 'empty', 'wc', 'wc', 'elev', 'stairs', 'empty', 'collab', 'collab', 'collab', 'collab'],
      ['empty', 'lab393', 'lab393', 'empty', 'empty', 'elev', 'stairs', 'empty', 'collab', 'collab', 'collab', 'collab'],
      ['empty', 'lab393', 'lab393', 'empty', 'empty', 'elev', 'stairs', 'empty', 'computers', 'computers', 'computers', 'empty'],
      ['immersion', 'immersion', 'teaching', 'teaching', 'teaching', 'empty', 'empty', 'computers', 'computers', 'computers', 'computers', 'empty'],
      ['immersion', 'immersion', 'teaching', 'teaching', 'teaching', 'empty', 'empty', 'carrels', 'carrels', 'carrels', 'carrels', 'empty'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'carrels', 'carrels', 'carrels', 'carrels', 'empty']
    ],
    labels: { lab393: 'LIB393', immersion: 'Immersion', teaching: 'Teaching', collab: 'Collaboratory' }
  },
  4: { // Archives & Special Collections
    layout: [
      ['empty', 'empty', 'empty', 'wc', 'wc', 'wc', 'elev', 'stairs', 'empty', 'special', 'special', 'special'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'elev', 'stairs', 'empty', 'special', 'special', 'special'],
      ['archives', 'archives', 'archives', 'empty', 'empty', 'empty', 'elev', 'stairs', 'empty', 'seats', 'seats', 'seats'],
      ['archives', 'archives', 'archives', 'reading', 'reading', 'reading', 'empty', 'empty', 'seats', 'seats', 'seats', 'seats'],
      ['empty', 'empty', 'empty', 'reading', 'reading', 'reading', 'empty', 'empty', 'group', 'group', 'group', 'group'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'group', 'group', 'group', 'empty']
    ],
    labels: { archives: 'Archives', reading: 'Reading', special: 'Special Collections' }
  },
  5: { // Quiet Study with Study Rooms - Books A-HC
    layout: [
      ['empty', 'empty', 'wc', 'wc', 'elev', 'stairs', 'seats', 'seats', 'rooms', 'rooms', 'rooms', 'rooms'],
      ['study', 'study', 'empty', 'empty', 'elev', 'stairs', 'seats', 'seats', 'rooms', 'rooms', 'rooms', 'rooms'],
      ['study', 'study', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['fcs', 'fcs', 'empty', 'empty', 'empty', 'empty', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'seats', 'seats', 'rooms', 'rooms', 'rooms']
    ],
    labels: { fcs: 'FCS', study: 'Study' }
  },
  6: { // Quiet Study - Books HD-HT
    layout: [
      ['study', 'study', 'study', 'wc', 'wc', 'elev', 'stairs', 'seats', 'seats', 'rooms', 'rooms', 'rooms'],
      ['study', 'study', 'study', 'empty', 'empty', 'elev', 'stairs', 'seats', 'seats', 'rooms', 'rooms', 'rooms'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['seats', 'seats', 'seats', 'seats', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'teaching', 'teaching', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ],
    labels: { teaching: 'Lab 607A' }
  },
  7: { // Quiet Study - Books HV-PN1995
    layout: [
      ['study', 'study', 'study', 'wc', 'wc', 'elev', 'stairs', 'seats', 'seats', 'rooms', 'rooms', 'rooms'],
      ['study', 'study', 'study', 'empty', 'empty', 'elev', 'stairs', 'seats', 'seats', 'rooms', 'rooms', 'rooms'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'carrels', 'study', 'study', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
    ],
    labels: {}
  },
  8: { // Group Study Floor with Green Wall - Books PN1996-PS7999
    layout: [
      ['empty', 'green', 'wc', 'wc', 'elev', 'stairs', 'rooms', 'rooms', 'rooms', 'rooms', 'rooms', 'rooms'],
      ['empty', 'green', 'empty', 'empty', 'elev', 'stairs', 'rooms', 'rooms', 'rooms', 'rooms', 'rooms', 'rooms'],
      ['carrels', 'carrels', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['group', 'group', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'empty'],
      ['group', 'group', 'group', 'group', 'empty', 'empty', 'empty', 'rooms', 'rooms', 'rooms', 'rooms', 'rooms']
    ],
    labels: { green: '🌿' }
  },
  9: { // Quiet Study - Books PS8000-T
    layout: [
      ['seats', 'seats', 'seats', 'wc', 'wc', 'elev', 'stairs', 'seats', 'seats', 'empty', 'rooms', 'rooms'],
      ['seats', 'seats', 'seats', 'empty', 'empty', 'elev', 'stairs', 'seats', 'seats', 'empty', 'rooms', 'rooms'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['study', 'study', 'study', 'study', 'empty', 'empty', 'empty', 'empty', 'rooms', 'rooms', 'rooms', 'rooms']
    ],
    labels: {}
  },
  10: { // Silent Study - Top Floor
    layout: [
      ['seats', 'seats', 'wc', 'wc', 'elev', 'stairs', 'seats', 'seats', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['seats', 'seats', 'empty', 'empty', 'elev', 'stairs', 'seats', 'seats', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['empty', 'empty', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'study', 'study', 'study', 'study', 'empty', 'empty']
    ],
    labels: {}
  }
};

// Cell type to CSS class and display mapping
const cellStyles = {
  empty: { class: '', label: '' },
  wc: { class: 'restroom', label: '🚻' },
  elev: { class: 'stairs', label: '🛗' },
  stairs: { class: 'stairs', label: '🚶' },
  seats: { class: 'seats', label: '' },
  carrels: { class: 'seats carrel', label: '📖' },
  stacks: { class: 'stacks', label: '' },
  rooms: { class: 'rooms', label: '📚' },
  group: { class: 'seats group', label: '👥' },
  computers: { class: 'computers', label: '💻' },
  study: { class: 'seats', label: '' },
  entrance: { class: 'entrance', label: '↓' },
  exit: { class: 'entrance', label: '←' },
  circ: { class: 'service', label: '' },
  help: { class: 'service', label: '❓' },
  lab: { class: 'computers', label: '' },
  printers: { class: 'service', label: '🖨️' },
  gmdc: { class: 'service special', label: '' },
  collab: { class: 'rooms', label: '' },
  lab393: { class: 'computers', label: '' },
  immersion: { class: 'rooms special', label: '' },
  teaching: { class: 'computers', label: '' },
  archives: { class: 'service special', label: '' },
  reading: { class: 'seats', label: '' },
  special: { class: 'service special', label: '' },
  fcs: { class: 'service', label: '' },
  green: { class: 'green-wall', label: '' }
};

// Render floor map
function renderFloorMap() {
  const config = floorConfig[currentFloor];
  const hasRooms = config.hasStudyRooms;
  const mapData = floorMaps[currentFloor];

  let mapHTML = '<div class="floor-map-grid">';

  // Create floor layout from data
  for (let row = 0; row < mapData.layout.length; row++) {
    for (let col = 0; col < mapData.layout[row].length; col++) {
      const cellType = mapData.layout[row][col];
      const style = cellStyles[cellType] || { class: '', label: '' };
      let labelText = style.label;

      // Check for custom labels
      if (mapData.labels[cellType]) {
        labelText = mapData.labels[cellType];
      }

      mapHTML += `<div class="map-cell ${style.class}">${labelText}</div>`;
    }
  }

  mapHTML += '</div>';

  // Dynamic legend based on what's on this floor
  let legendItems = [];
  legendItems.push('<span><div class="map-legend-dot" style="background:rgba(34,197,94,.3);border:1px solid var(--available);"></div>Seating/Carrels</span>');
  if (hasRooms) {
    legendItems.push('<span><div class="map-legend-dot" style="background:rgba(59,130,246,.3);border:1px solid var(--accent);"></div>Study Rooms</span>');
  }
  legendItems.push('<span><div class="map-legend-dot" style="background:rgba(139,92,246,.3);border:1px solid #8b5cf6;"></div>Computers</span>');
  legendItems.push('<span><div class="map-legend-dot" style="background:rgba(107,114,128,.5);"></div>Book Stacks</span>');
  legendItems.push('<span><div class="map-legend-dot" style="background:#374151;"></div>Elevator/Stairs</span>');
  legendItems.push('<span><div class="map-legend-dot" style="background:#4b5563;"></div>Washrooms</span>');
  if (currentFloor === 8) {
    legendItems.push('<span><div class="map-legend-dot" style="background:rgba(34,197,94,.5);border:1px solid #22c55e;"></div>Green Wall</span>');
  }

  mapHTML += `<div class="map-legend">${legendItems.join('')}</div>`;

  floorMap.innerHTML = mapHTML;
}


// Render study rooms
function renderStudyRooms() {
  const config = floorConfig[currentFloor];

  if (!config.hasStudyRooms) {
    studyRoomsSection.style.display = "none";
    return;
  }

  studyRoomsSection.style.display = "block";
  studyRoomsGrid.innerHTML = "";

  studyRooms[currentFloor].forEach(room => {
    const div = document.createElement("div");
    div.className = `study-room ${room.status}`;
    div.innerHTML = `
      <div class="study-room-header">
        <span class="study-room-name">${room.name}</span>
        <span class="study-room-status">${room.status}</span>
      </div>
      <div class="study-room-details">
        <div class="study-room-capacity">👥 ${room.capacity} people</div>
        <div class="study-room-features">${room.features.slice(0, 2).join(" • ")}</div>
      </div>
    `;

    if (room.status === "available") {
      div.onclick = () => openBookingModal(room);
    }

    studyRoomsGrid.appendChild(div);
  });
}

// Open booking modal
function openBookingModal(room) {
  selectedRoom = room;
  selectedTimeSlot = null;

  document.getElementById("roomName").textContent = room.name;
  document.getElementById("roomCapacity").textContent = room.capacity;
  document.getElementById("roomFeatures").textContent = room.features.join(", ");

  const timeSlotsContainer = document.getElementById("timeSlots");
  const allSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  timeSlotsContainer.innerHTML = "";
  allSlots.forEach(slot => {
    const isBooked = room.bookedSlots.includes(slot);
    const div = document.createElement("div");
    div.className = `time-slot ${isBooked ? "unavailable" : ""}`;
    div.textContent = slot;

    if (!isBooked) {
      div.onclick = () => {
        document.querySelectorAll(".time-slot").forEach(s => s.classList.remove("selected"));
        div.classList.add("selected");
        selectedTimeSlot = slot;
        confirmBooking.disabled = false;
      };
    }

    timeSlotsContainer.appendChild(div);
  });

  confirmBooking.disabled = true;
  modal.style.display = "flex";
}

// Close modal
closeModal.onclick = () => {
  modal.style.display = "none";
  selectedRoom = null;
  selectedTimeSlot = null;
};

// Click outside modal to close
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    selectedRoom = null;
    selectedTimeSlot = null;
  }
  if (e.target === seatModal) {
    closeSeatBookingModal();
  }
  if (e.target === myBookingsModal) {
    myBookingsModal.style.display = "none";
  }
};

// Confirm room booking
confirmBooking.onclick = async () => {
  if (selectedRoom && selectedTimeSlot) {
    try {
      if (backendAvailable) {
        // Use API
        const result = await LibraryAPI.bookRoom(currentFloor, selectedRoom.id, selectedTimeSlot);
        userBookings.push(result.booking);

        // Refresh room data from API
        studyRooms[currentFloor] = await LibraryAPI.getFloorRooms(currentFloor);
      } else {
        // Local fallback
        const room = studyRooms[currentFloor].find(r => r.id === selectedRoom.id);
        if (room) {
          room.bookedSlots.push(selectedTimeSlot);
          room.status = "reserved";

          userBookings.push({
            id: Date.now(),
            type: 'room',
            name: room.name,
            floor: currentFloor,
            time: selectedTimeSlot,
            duration: '1 hour',
            bookedAt: new Date().toISOString()
          });
        }
      }

      await saveBookings();
      renderStudyRooms();
      modal.style.display = "none";
      showToast('success', `Successfully booked ${selectedRoom?.name || 'room'} for ${selectedTimeSlot}!`);
    } catch (error) {
      showToast('error', error.message || 'Failed to book room');
    }

    selectedRoom = null;
    selectedTimeSlot = null;
  }
};

// Show toast notification
function showToast(type, message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span>
    <span class="toast-message">${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}

// Open seat booking modal
function openSeatBookingModal(seat) {
  selectedSeat = seat;
  selectedDuration = null;
  selectedSeatTimeSlot = null;

  document.getElementById('seatNumber').textContent = `S${seat.id}`;
  document.getElementById('seatZone').textContent = seat.zone;
  document.getElementById('seatFloor').textContent = `Floor ${currentFloor}`;

  // Get amenities based on zone
  const amenities = getZoneAmenities(seat.zone);
  document.getElementById('seatAmenities').textContent = amenities;

  // Reset duration buttons
  document.querySelectorAll('.duration-btn').forEach(btn => {
    btn.classList.remove('selected');
    btn.onclick = () => selectDuration(Number(btn.dataset.duration), btn);
  });

  // Render time slots
  renderSeatTimeSlots();

  // Hide booking summary
  document.getElementById('seatBookingSummary').style.display = 'none';
  confirmSeatBooking.disabled = true;

  seatModal.style.display = 'flex';
}

// Get amenities based on zone type
function getZoneAmenities(zone) {
  const amenitiesMap = {
    'Desktop': 'Power Outlet, Computer',
    'Computer': 'Power Outlet, Desktop Computer',
    'Group': 'Power Outlet, Large Table',
    'Individual': 'Power Outlet, Desk Lamp',
    'Quiet': 'Power Outlet, Privacy Screen',
    'Carrel': 'Power Outlet, Privacy Walls',
    'Silent': 'Power Outlet, Complete Privacy',
    'Window': 'Power Outlet, Natural Light',
    'Lab': 'Computer, Software Suite',
    'Open': 'Power Outlet, Flexible Seating'
  };
  return amenitiesMap[zone] || 'Power Outlet';
}

// Select duration
function selectDuration(hours, btnEl) {
  selectedDuration = hours;
  document.querySelectorAll('.duration-btn').forEach(btn => btn.classList.remove('selected'));
  btnEl.classList.add('selected');
  updateSeatBookingSummary();
}

// Render seat time slots
function renderSeatTimeSlots() {
  const container = document.getElementById('seatTimeSlots');
  const allSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

  // Randomly mark some as booked
  const bookedSlots = allSlots.filter(() => Math.random() > 0.7);

  container.innerHTML = '';
  allSlots.forEach(slot => {
    const isBooked = bookedSlots.includes(slot);
    const div = document.createElement('div');
    div.className = `time-slot ${isBooked ? 'unavailable' : ''}`;
    div.textContent = slot;

    if (!isBooked) {
      div.onclick = () => {
        document.querySelectorAll('#seatTimeSlots .time-slot').forEach(s => s.classList.remove('selected'));
        div.classList.add('selected');
        selectedSeatTimeSlot = slot;
        updateSeatBookingSummary();
      };
    }

    container.appendChild(div);
  });
}

// Update seat booking summary
function updateSeatBookingSummary() {
  const summaryEl = document.getElementById('seatBookingSummary');
  const summaryText = document.getElementById('summaryText');

  if (selectedDuration && selectedSeatTimeSlot) {
    const endTime = calculateEndTime(selectedSeatTimeSlot, selectedDuration);
    summaryText.innerHTML = `
      <strong>Seat S${selectedSeat.id}</strong> on Floor ${currentFloor}<br>
      📅 Today • ⏰ ${selectedSeatTimeSlot} - ${endTime} (${selectedDuration} ${selectedDuration === 1 ? 'hour' : 'hours'})
    `;
    summaryEl.style.display = 'block';
    confirmSeatBooking.disabled = false;
  } else {
    summaryEl.style.display = 'none';
    confirmSeatBooking.disabled = true;
  }
}

// Calculate end time
function calculateEndTime(startTime, hours) {
  const [time, period] = startTime.split(' ');
  let [hour] = time.split(':').map(Number);

  if (period === 'PM' && hour !== 12) hour += 12;
  if (period === 'AM' && hour === 12) hour = 0;

  hour += hours;

  const newPeriod = hour >= 12 && hour < 24 ? 'PM' : 'AM';
  if (hour >= 12) hour = hour > 12 ? hour - 12 : hour;
  if (hour === 0) hour = 12;

  return `${hour}:00 ${newPeriod}`;
}

// Close seat booking modal
function closeSeatBookingModal() {
  seatModal.style.display = 'none';
  selectedSeat = null;
  selectedDuration = null;
  selectedSeatTimeSlot = null;
}

closeSeatModal.onclick = closeSeatBookingModal;

// Confirm seat booking
confirmSeatBooking.onclick = async () => {
  if (selectedSeat && selectedDuration && selectedSeatTimeSlot) {
    try {
      if (backendAvailable) {
        // Use API
        const result = await LibraryAPI.bookSeat(currentFloor, selectedSeat.id, selectedDuration, selectedSeatTimeSlot);
        userBookings.push(result.booking);

        // Refresh seat data from API
        floors[currentFloor] = await LibraryAPI.getFloorSeats(currentFloor);
      } else {
        // Local fallback
        const seat = floors[currentFloor].find(s => s.id === selectedSeat.id);
        if (seat) {
          seat.status = 'reserved';

          userBookings.push({
            id: Date.now(),
            type: 'seat',
            name: `Seat S${seat.id}`,
            floor: currentFloor,
            zone: seat.zone,
            time: selectedSeatTimeSlot,
            duration: `${selectedDuration} ${selectedDuration === 1 ? 'hour' : 'hours'}`,
            endTime: calculateEndTime(selectedSeatTimeSlot, selectedDuration),
            bookedAt: new Date().toISOString()
          });
        }
      }

      await saveBookings();
      renderSeats();
      closeSeatBookingModal();
      showToast('success', `Seat S${selectedSeat?.id} reserved for ${selectedSeatTimeSlot}!`);
    } catch (error) {
      showToast('error', error.message || 'Failed to book seat');
      closeSeatBookingModal();
    }
  }
};

// My Bookings Modal
userBookingsBtn.onclick = () => {
  renderMyBookings();
  myBookingsModal.style.display = 'flex';
};

closeBookingsModal.onclick = () => {
  myBookingsModal.style.display = 'none';
};

// Render my bookings
function renderMyBookings() {
  const list = document.getElementById('bookingsList');

  if (userBookings.length === 0) {
    list.innerHTML = `
      <div class="no-bookings">
        <div class="no-bookings-icon">📭</div>
        <p>No bookings yet</p>
        <p style="font-size: 12px;">Book a seat or study room to see it here</p>
      </div>
    `;
    return;
  }

  list.innerHTML = userBookings.map(booking => `
    <div class="booking-item">
      <div class="booking-item-info">
        <div class="booking-item-type">${booking.type === 'seat' ? '🪑 Seat' : '📚 Study Room'}</div>
        <div class="booking-item-name">${booking.name}</div>
        <div class="booking-item-details">
          Floor ${booking.floor} • ${booking.time} - ${booking.endTime || ''} (${booking.duration})
        </div>
      </div>
      <button class="cancel-booking" onclick="cancelBooking(${booking.id})">Cancel</button>
    </div>
  `).join('');
}

// Cancel booking
async function cancelBooking(bookingId) {
  const booking = userBookings.find(b => b.id === bookingId);
  if (booking) {
    try {
      if (backendAvailable) {
        // Use API
        await LibraryAPI.cancelBooking(bookingId);

        // Refresh data from API
        userBookings = await LibraryAPI.getUserBookings();
        floors[booking.floor] = await LibraryAPI.getFloorSeats(booking.floor);
        if (floorConfig[booking.floor].hasStudyRooms) {
          studyRooms[booking.floor] = await LibraryAPI.getFloorRooms(booking.floor);
        }
      } else {
        // Local fallback
        userBookings = userBookings.filter(b => b.id !== bookingId);

        // Update seat/room status back to available
        if (booking.type === 'seat') {
          const seat = floors[booking.floor].find(s => s.id === parseInt(booking.name.replace('Seat S', '')));
          if (seat) seat.status = 'available';
        } else {
          const room = studyRooms[booking.floor]?.find(r => r.name === booking.name);
          if (room) room.status = 'available';
        }
      }

      await saveBookings();
      renderMyBookings();
      render();
      showToast('success', `Cancelled booking for ${booking.name}`);
    } catch (error) {
      showToast('error', error.message || 'Failed to cancel booking');
    }
  }
}

// Seat zone/category icons and colors
const zoneStyles = {
  'Carrel': { icon: '📖', color: '#8b5cf6', label: 'Study Carrels', desc: 'Private enclosed desks with walls' },
  'Window': { icon: '🪟', color: '#06b6d4', label: 'Window Seats', desc: 'Natural light seating' },
  'Quiet': { icon: '🤫', color: '#22c55e', label: 'Quiet Zone', desc: 'Silent individual study' },
  'Silent': { icon: '🔇', color: '#14b8a6', label: 'Silent Zone', desc: 'Absolute silence required' },
  'Group': { icon: '👥', color: '#f59e0b', label: 'Group Seating', desc: 'Collaborative spaces' },
  'Individual': { icon: '🧑', color: '#3b82f6', label: 'Individual Seats', desc: 'Single person desks' },
  'Computer': { icon: '💻', color: '#a855f7', label: 'Computer Stations', desc: 'Desktop computers' },
  'Desktop': { icon: '🖥️', color: '#6366f1', label: 'Desktop Workstations', desc: 'Computer workstations' },
  'Lab': { icon: '🔬', color: '#ec4899', label: 'Lab Seating', desc: 'Computer lab spaces' },
  'Open': { icon: '🪑', color: '#10b981', label: 'Open Seating', desc: 'Flexible open spaces' }
};

// Render seats grouped by category
function renderSeats() {
  grid.innerHTML = "";

  // Group seats by zone
  const seatsByZone = {};
  floors[currentFloor].forEach(seat => {
    if (!seatsByZone[seat.zone]) {
      seatsByZone[seat.zone] = [];
    }
    seatsByZone[seat.zone].push(seat);
  });

  // Render each zone category
  Object.keys(seatsByZone).forEach(zone => {
    const seats = seatsByZone[zone];
    const style = zoneStyles[zone] || { icon: '🪑', color: '#6b7280', label: zone, desc: '' };

    // Create category container
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'seat-category';
    categoryDiv.style.setProperty('--category-color', style.color);

    // Category header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'category-header';
    headerDiv.innerHTML = `
      <div class="category-title">
        <span class="category-icon">${style.icon}</span>
        <h4>${style.label}</h4>
        <span class="category-count">${seats.filter(s => s.status === 'available').length}/${seats.length} available</span>
      </div>
      <p class="category-desc">${style.desc}</p>
    `;
    categoryDiv.appendChild(headerDiv);

    // Seats grid
    const seatsGrid = document.createElement('div');
    seatsGrid.className = 'category-seats-grid';

    seats.forEach(seat => {
      const div = document.createElement("div");
      div.className = `seat ${seat.status}`;
      div.style.setProperty('--zone-color', style.color);
      div.innerHTML = `<strong>S${seat.id}</strong><small>${seat.zone}</small>`;

      div.onclick = () => {
        if (seat.status === "available") {
          openSeatBookingModal(seat);
        } else if (seat.status === "reserved") {
          const userOwns = userBookings.some(b =>
            b.type === 'seat' &&
            b.floor === currentFloor &&
            b.name === `Seat S${seat.id}`
          );
          if (userOwns) {
            showToast('error', 'Use "My Bookings" to cancel your reservation');
          }
        }
      };

      seatsGrid.appendChild(div);
    });

    categoryDiv.appendChild(seatsGrid);
    grid.appendChild(categoryDiv);
  });
}

// Main render function
function render() {
  const config = floorConfig[currentFloor];

  label.textContent = `Floor: ${currentFloor}`;
  floorTitle.textContent = `Floor ${currentFloor} - ${config.name}`;
  floorDescription.textContent = config.description;

  renderFloorMap();
  renderStudyRooms();
  renderSeats();
}

// Floor button click handlers
document.querySelectorAll("[data-floor]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("[data-floor]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFloor = Number(btn.dataset.floor);
    render();
  });
});

// Initial data load
initializeData();
