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
      // Load grace period config
      try {
        const gpConfig = await LibraryAPI.getGracePeriod();
        gracePeriodMinutes = gpConfig.gracePeriodMinutes || 10;
      } catch (e) {
        console.warn('Could not load grace period config, using default');
      }
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

// Grace period config (loaded from backend)
let gracePeriodMinutes = 10;
let countdownInterval = null;

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
const floorStatsEl = document.getElementById("floorStats");
const studyRoomsSection = document.getElementById("studyRoomsSection");
const studyRoomsGrid = document.getElementById("studyRoomsGrid");
const modal = document.getElementById("bookingModal");
const closeModal = document.querySelector(".close-modal");
const confirmBookingBtn = document.getElementById("confirmBooking");
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
      ['empty', 'empty', 'empty', 'reading', 'reading', 'reading', 'empty', 'empty', 'seats', 'seats', 'seats', 'seats'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'seats', 'empty', 'empty', 'empty']
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
      ['empty', 'empty', 'empty', 'empty', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
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
    labels: { green: 'Green' }
  },
  9: { // Quiet Study - Books PS8000-T
    layout: [
      ['seats', 'seats', 'seats', 'wc', 'wc', 'elev', 'stairs', 'seats', 'seats', 'empty', 'rooms', 'rooms'],
      ['seats', 'seats', 'seats', 'empty', 'empty', 'elev', 'stairs', 'empty', 'empty', 'empty', 'rooms', 'rooms'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'elev', 'stairs', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['carrels', 'carrels', 'carrels', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks', 'stacks'],
      ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'rooms', 'rooms', 'rooms', 'rooms']
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
  wc: { class: 'restroom', label: 'WC' },
  elev: { class: 'stairs', label: 'EL' },
  stairs: { class: 'stairs', label: 'ST' },
  seats: { class: 'seats', label: '' },
  carrels: { class: 'seats carrel', label: 'CR' },
  stacks: { class: 'stacks', label: '' },
  rooms: { class: 'rooms', label: 'RM' },
  group: { class: 'seats group', label: 'GP' },
  computers: { class: 'computers', label: 'PC' },
  study: { class: 'seats', label: '' },
  entrance: { class: 'entrance', label: '↓' },
  exit: { class: 'entrance', label: '←' },
  circ: { class: 'service', label: '' },
  help: { class: 'service', label: '?' },
  lab: { class: 'computers', label: '' },
  printers: { class: 'service', label: 'PR' },
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

const legendDefinitions = [
  {
    label: 'Seating/Carrels',
    cellTypes: ['seats', 'carrels', 'group', 'study', 'reading'],
    swatch: 'background:var(--available-bg);border:1px solid var(--available-border);'
  },
  {
    label: 'Study Rooms',
    cellTypes: ['rooms'],
    swatch: 'background:var(--primary-light);border:1px solid #C8D6E5;'
  },
  {
    label: 'Collaborative Spaces',
    cellTypes: ['collab'],
    swatch: 'background:var(--primary-light);border:1px solid #C8D6E5;'
  },
  {
    label: 'Computers',
    cellTypes: ['computers', 'lab', 'lab393', 'teaching'],
    swatch: 'background:#F3F0FA;border:1px solid #D4C8E8;'
  },
  {
    label: 'Service Desks',
    cellTypes: ['circ', 'help', 'printers', 'fcs', 'entrance', 'exit'],
    swatch: 'background:#FFF8E8;border:1px solid #F0D68A;'
  },
  {
    label: 'Special Areas',
    cellTypes: ['gmdc', 'archives', 'special', 'immersion'],
    swatch: 'background:#FCF0F5;border:1px solid #EBBFD4;'
  },
  {
    label: 'Green Wall',
    cellTypes: ['green'],
    swatch: 'background:var(--available-bg);border:1px solid var(--available-border);'
  },
  {
    label: 'Book Stacks',
    cellTypes: ['stacks'],
    swatch: 'background:#F2EFEA;border:1px solid #D6D1C8;'
  },
  {
    label: 'Elevator/Stairs',
    cellTypes: ['elev', 'stairs'],
    swatch: 'background:#F0EDE8;border:1px solid var(--border);'
  },
  {
    label: 'Washrooms',
    cellTypes: ['wc'],
    swatch: 'background:#F0EDE8;border:1px solid var(--border);'
  }
];

const seatMapGroups = [
  {
    cellTypes: ['group'],
    zones: ['Group']
  },
  {
    cellTypes: ['carrels'],
    zones: ['Carrel']
  },
  {
    cellTypes: ['seats', 'study', 'reading'],
    zones: ['Individual', 'Quiet', 'Silent', 'Window', 'Open']
  },
  {
    cellTypes: ['computers', 'lab', 'lab393', 'teaching'],
    zones: ['Desktop', 'Computer', 'Lab']
  }
];

function buildSeatMapAssignments(floorNum) {
  const mapData = floorMaps[floorNum];
  const floorSeats = floors[floorNum] || [];
  const assignments = {};

  seatMapGroups.forEach(group => {
    const matchingCells = [];
    const matchingSeats = floorSeats.filter(seat => group.zones.includes(seat.zone));

    mapData.layout.forEach((row, rowIndex) => {
      row.forEach((cellType, colIndex) => {
        if (group.cellTypes.includes(cellType)) {
          matchingCells.push(`${rowIndex}-${colIndex}`);
        }
      });
    });

    if (!matchingCells.length || !matchingSeats.length) {
      return;
    }

    matchingCells.forEach((cellKey, index) => {
      const seat = matchingSeats[index];
      if (seat) {
        assignments[cellKey] = seat;
      }
    });
  });

  return assignments;
}

function getDisplayedSeatsForFloor(floorNum) {
  const assignments = buildSeatMapAssignments(floorNum);
  return Object.values(assignments)
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);
}

function highlightMapSeat(seatId) {
  document.querySelectorAll('.map-cell').forEach(cell => {
    const seatIds = cell.dataset.seatIds ? cell.dataset.seatIds.split(',') : [];
    cell.classList.toggle('map-seat-highlight', seatIds.includes(String(seatId)));
  });
}

function clearMapSeatHighlights() {
  document.querySelectorAll('.map-cell.map-seat-highlight').forEach(cell => {
    cell.classList.remove('map-seat-highlight');
  });
}

// Render floor map
function renderFloorMap() {
  const config = floorConfig[currentFloor];
  const mapData = floorMaps[currentFloor];
  const seatAssignments = buildSeatMapAssignments(currentFloor);

  let mapHTML = '<div class="floor-map-grid">';

  // Create floor layout from data
  for (let row = 0; row < mapData.layout.length; row++) {
    for (let col = 0; col < mapData.layout[row].length; col++) {
      const cellType = mapData.layout[row][col];
      const style = cellStyles[cellType] || { class: '', label: '' };
      let cellContent = style.label;
      let extraClass = '';
      let dataAttrs = '';
      const cellKey = `${row}-${col}`;
      const assignedSeat = seatAssignments[cellKey];

      // Check for custom labels
      if (mapData.labels[cellType]) {
        cellContent = mapData.labels[cellType];
      }

      if (assignedSeat) {
        extraClass = ' seat-location';
        dataAttrs = ` data-seat-ids="${assignedSeat.id}"`;
        cellContent = `
          <span class="map-seat-id ${assignedSeat.status}">S${assignedSeat.id}</span>
        `;
      }

      mapHTML += `<div class="map-cell ${style.class}${extraClass}"${dataAttrs}>${cellContent}</div>`;
    }
  }

  mapHTML += '</div>';

  const usedCellTypes = new Set(mapData.layout.flat().filter(cell => cell !== 'empty'));
  const legendItems = legendDefinitions
    .filter(item => item.cellTypes.some(cellType => usedCellTypes.has(cellType)))
    .map(item => `<span><div class="map-legend-dot" style="${item.swatch}"></div>${item.label}</span>`);

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
        <div class="study-room-capacity">${svgIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', 14)} ${room.capacity} people</div>
        <div class="study-room-features">${room.features.slice(0, 2).join(" • ")}</div>
      </div>
    `;

    if (room.status === "available") {
      div.onclick = () => openBookingModal(room);
      div.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openBookingModal(room); } };
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
        confirmBookingBtn.disabled = false;
      };
    }

    timeSlotsContainer.appendChild(div);
  });

  confirmBookingBtn.disabled = true;
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
confirmBookingBtn.onclick = async () => {
  if (selectedRoom && selectedTimeSlot) {
    // Validation checks
    const requiredRoomError = validateRequired(selectedTimeSlot, 'Time slot');
    if (requiredRoomError) { showToast('error', requiredRoomError); return; }

    const timeSlotError = validateTimeSlot(selectedTimeSlot);
    if (timeSlotError) { showToast('error', timeSlotError); return; }

    const roomBooking = { type: 'room', floor: currentFloor, name: selectedRoom.name, time: selectedTimeSlot, duration: '1 hour' };
    const doubleBookError = validateNoDoubleBooking(roomBooking, userBookings);
    if (doubleBookError) { showToast('error', doubleBookError); return; }

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
            bookedAt: new Date().toISOString(),
            confirmed: false,
            gracePeriodExpires: new Date(Date.now() + gracePeriodMinutes * 60000).toISOString()
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

  const iconSpan = document.createElement('span');
  iconSpan.className = 'toast-icon';
  iconSpan.setAttribute('aria-hidden', 'true');
  iconSpan.innerHTML = type === 'success'
    ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
    : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';

  const msgSpan = document.createElement('span');
  msgSpan.className = 'toast-message';
  msgSpan.textContent = message;

  toast.appendChild(iconSpan);
  toast.appendChild(msgSpan);
  toast.setAttribute('role', 'alert');
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
      ${svgIcon('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>', 14)} Today &bull; ${svgIcon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 14)} ${selectedSeatTimeSlot} - ${endTime} (${selectedDuration} ${selectedDuration === 1 ? 'hour' : 'hours'})
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
    // Validation checks
    const requiredSeatError = validateRequired(selectedSeatTimeSlot, 'Time slot');
    if (requiredSeatError) { showToast('error', requiredSeatError); return; }

    const seatTimeError = validateTimeSlot(selectedSeatTimeSlot);
    if (seatTimeError) { showToast('error', seatTimeError); return; }

    const durationStr = `${selectedDuration} ${selectedDuration === 1 ? 'hour' : 'hours'}`;
    const seatBooking = { type: 'seat', floor: currentFloor, name: `Seat S${selectedSeat.id}`, time: selectedSeatTimeSlot, duration: durationStr };
    const seatDoubleBookError = validateNoDoubleBooking(seatBooking, userBookings);
    if (seatDoubleBookError) { showToast('error', seatDoubleBookError); return; }

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
            bookedAt: new Date().toISOString(),
            confirmed: false,
            gracePeriodExpires: new Date(Date.now() + gracePeriodMinutes * 60000).toISOString()
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
        <div class="no-bookings-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg></div>
        <p>No bookings yet</p>
        <p style="font-size: 12px;">Book a seat or study room to see it here</p>
      </div>
    `;
    return;
  }

  list.innerHTML = userBookings.map(booking => {
    const isConfirmed = booking.confirmed;
    const graceExpires = booking.gracePeriodExpires;
    let countdownHTML = '';

    if (!isConfirmed && graceExpires) {
      const remaining = new Date(graceExpires) - Date.now();
      if (remaining > 0) {
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        countdownHTML = `
          <div class="grace-period-timer" data-grace-expires="${graceExpires}" data-booking-id="${booking.id}">
            <span class="timer-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
            <span class="timer-text">Confirm within <strong class="timer-countdown">${mins}:${String(secs).padStart(2, '0')}</strong></span>
          </div>
          <button class="confirm-arrival-btn" onclick="confirmArrival('${booking.id}')">Confirm Arrival</button>
        `;
      } else {
        countdownHTML = `<div class="grace-period-expired"><span class="timer-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span> Grace period expired - releasing soon</div>`;
      }
    } else if (isConfirmed) {
      countdownHTML = `<div class="grace-period-confirmed"><span class="timer-icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span> Confirmed</div>`;
    }

    const typeIcon = booking.type === 'seat'
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1H7v-1a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';

    return `
      <div class="booking-item ${!isConfirmed && graceExpires ? 'unconfirmed' : ''}">
        <div class="booking-item-info">
          <div class="booking-item-type">${typeIcon} ${booking.type === 'seat' ? 'Seat' : 'Study Room'}</div>
          <div class="booking-item-name">${booking.name}</div>
          <div class="booking-item-details">
            Floor ${booking.floor} • ${booking.timeSlot || booking.time || ''} ${booking.endTime ? '- ' + booking.endTime : ''} (${booking.duration})
          </div>
          ${countdownHTML}
        </div>
        <button class="cancel-booking" onclick="cancelBooking('${booking.id}')">Cancel</button>
      </div>
    `;
  }).join('');

  startCountdownUpdater();
}

// Cancel booking
async function cancelBooking(bookingId) {
  const booking = userBookings.find(b => b.id == bookingId || b.id === bookingId);
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

// Start countdown updater for grace period timers
function startCountdownUpdater() {
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    const timers = document.querySelectorAll('.grace-period-timer');
    if (timers.length === 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      return;
    }

    let needsRefresh = false;
    timers.forEach(timer => {
      const graceExpires = new Date(timer.dataset.graceExpires);
      const remaining = graceExpires - Date.now();

      if (remaining <= 0) {
        needsRefresh = true;
        return;
      }

      const mins = Math.floor(remaining / 60000);
      const secs = Math.floor((remaining % 60000) / 1000);
      const countdownEl = timer.querySelector('.timer-countdown');
      if (countdownEl) {
        countdownEl.textContent = `${mins}:${String(secs).padStart(2, '0')}`;
      }

      // Flash red when under 2 minutes
      if (remaining < 120000) {
        timer.classList.add('timer-urgent');
      }
    });

    if (needsRefresh) {
      handleGracePeriodExpiration();
    }
  }, 1000);
}

// Handle grace period expiration
async function handleGracePeriodExpiration() {
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = null;

  if (backendAvailable) {
    try {
      userBookings = await LibraryAPI.getUserBookings();
      // Refresh seat data for current floor
      floors[currentFloor] = await LibraryAPI.getFloorSeats(currentFloor);
      if (floorConfig[currentFloor].hasStudyRooms) {
        studyRooms[currentFloor] = await LibraryAPI.getFloorRooms(currentFloor);
      }
    } catch (e) {
      console.error('Error refreshing after expiration:', e);
    }
  } else {
    // Local fallback: remove unconfirmed expired bookings
    const now = Date.now();
    const expired = userBookings.filter(b =>
      !b.confirmed && b.gracePeriodExpires && new Date(b.gracePeriodExpires) <= now
    );
    expired.forEach(b => {
      if (b.type === 'seat') {
        const seat = floors[b.floor]?.find(s => s.id === parseInt(String(b.name).replace('Seat S', '')));
        if (seat) seat.status = 'available';
      } else {
        const room = studyRooms[b.floor]?.find(r => r.name === b.name);
        if (room) room.status = 'available';
      }
    });
    userBookings = userBookings.filter(b =>
      b.confirmed || !b.gracePeriodExpires || new Date(b.gracePeriodExpires) > now
    );
  }

  await saveBookings();
  updateBookingCount();
  render();
  renderMyBookings();
  showToast('error', 'A reservation expired - seat released');
}

// Confirm arrival for a booking
async function confirmArrival(bookingId) {
  try {
    if (backendAvailable) {
      await LibraryAPI.confirmBooking(bookingId);
      userBookings = await LibraryAPI.getUserBookings();
    } else {
      const booking = userBookings.find(b => b.id == bookingId || b.id === bookingId);
      if (booking) booking.confirmed = true;
    }
    await saveBookings();
    renderMyBookings();
    showToast('success', 'Arrival confirmed!');
  } catch (error) {
    showToast('error', error.message || 'Failed to confirm booking');
  }
}

// SVG icon helper
const svgIcon = (path, size = 24) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

// Seat zone/category icons and colors
const zoneStyles = {
  'Carrel': { icon: svgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'), color: '#2D6A4F', label: 'Study Carrels', desc: 'Private enclosed desks with walls' },
  'Window': { icon: svgIcon('<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'), color: '#2D6A4F', label: 'Window Seats', desc: 'Natural light seating' },
  'Quiet': { icon: svgIcon('<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'), color: '#2D6A4F', label: 'Quiet Zone', desc: 'Silent individual study' },
  'Silent': { icon: svgIcon('<path d="M11 5L6 9H2v6h4l5 4V5z"/>'), color: '#2D6A4F', label: 'Silent Zone', desc: 'Absolute silence required' },
  'Group': { icon: svgIcon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'), color: '#1B2A4A', label: 'Group Seating', desc: 'Collaborative spaces' },
  'Individual': { icon: svgIcon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'), color: '#2D6A4F', label: 'Individual Seats', desc: 'Single person desks' },
  'Computer': { icon: svgIcon('<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'), color: '#5B21B6', label: 'Computer Stations', desc: 'Desktop computers' },
  'Desktop': { icon: svgIcon('<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'), color: '#5B21B6', label: 'Desktop Workstations', desc: 'Computer workstations' },
  'Lab': { icon: svgIcon('<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'), color: '#5B21B6', label: 'Lab Seating', desc: 'Computer lab spaces' },
  'Open': { icon: svgIcon('<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1H7v-1a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/>'), color: '#2D6A4F', label: 'Open Seating', desc: 'Flexible open spaces' }
};

// Render seats grouped by category
function renderSeats() {
  grid.innerHTML = "";
  const displayedSeats = getDisplayedSeatsForFloor(currentFloor);

  // Group seats by zone
  const seatsByZone = {};
  displayedSeats.forEach(seat => {
    if (!seatsByZone[seat.zone]) {
      seatsByZone[seat.zone] = [];
    }
    seatsByZone[seat.zone].push(seat);
  });

  // Render each zone category
  Object.keys(seatsByZone).forEach(zone => {
    const seats = seatsByZone[zone];
    const style = zoneStyles[zone] || { icon: svgIcon('<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1H7v-1a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/>'), color: '#64748B', label: zone, desc: '' };

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
      div.dataset.seatId = seat.id;
      div.setAttribute('tabindex', '0');
      div.setAttribute('role', 'button');
      div.setAttribute('aria-label', `Seat S${seat.id}, ${seat.zone}, ${seat.status}`);
      div.innerHTML = `<strong>S${seat.id}</strong><small>${seat.zone}</small>`;

      div.onmouseenter = () => highlightMapSeat(seat.id);
      div.onmouseleave = () => clearMapSeatHighlights();
      div.onfocus = () => highlightMapSeat(seat.id);
      div.onblur = () => clearMapSeatHighlights();

      const handleSeatAction = () => {
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

      div.onclick = handleSeatAction;
      div.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSeatAction(); } };

      seatsGrid.appendChild(div);
    });

    categoryDiv.appendChild(seatsGrid);
    grid.appendChild(categoryDiv);
  });
}

// Main render function
function render() {
  const config = floorConfig[currentFloor];

  label.textContent = `Floor ${currentFloor} - ${config.name}`;
  floorTitle.textContent = `Floor ${currentFloor} - ${config.name}`;
  floorDescription.textContent = config.description;

  // Render floor stats
  const floorSeats = floors[currentFloor] || [];
  const availCount = floorSeats.filter(s => s.status === 'available').length;
  const totalCount = floorSeats.length;
  if (floorStatsEl) {
    floorStatsEl.innerHTML = `
      <div class="stat-card">
        <span class="stat-number available">${availCount}</span>
        <span class="stat-label">Available</span>
      </div>
      <div class="stat-card">
        <span class="stat-number total">${totalCount}</span>
        <span class="stat-label">Total</span>
      </div>
    `;
  }

  renderFloorMap();
  renderStudyRooms();
  renderSeats();
}

// Keyboard event: ESC closes any open modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.style.display === 'flex') {
      modal.style.display = 'none';
      selectedRoom = null;
      selectedTimeSlot = null;
    }
    if (seatModal.style.display === 'flex') {
      closeSeatBookingModal();
    }
    if (myBookingsModal.style.display === 'flex') {
      myBookingsModal.style.display = 'none';
    }
  }
});

// Focus trap: keep focus within open modal
function trapFocus(modalEl) {
  const focusable = modalEl.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  first.focus();

  modalEl._focusTrapHandler = function (e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  };
  modalEl.addEventListener('keydown', modalEl._focusTrapHandler);
}

function releaseFocusTrap(modalEl) {
  if (modalEl._focusTrapHandler) {
    modalEl.removeEventListener('keydown', modalEl._focusTrapHandler);
    modalEl._focusTrapHandler = null;
  }
}

// Wrap modal open functions to add focus trap
const _origOpenBookingModal = openBookingModal;
openBookingModal = function(room) {
  _origOpenBookingModal(room);
  trapFocus(modal);
};

const _origOpenSeatBookingModal = openSeatBookingModal;
openSeatBookingModal = function(seat) {
  _origOpenSeatBookingModal(seat);
  trapFocus(seatModal);
};

// Patch close handlers to release focus trap
const _origCloseModal = closeModal.onclick;
closeModal.onclick = () => { releaseFocusTrap(modal); _origCloseModal(); };

const _origCloseSeatModal = closeSeatModal.onclick;
closeSeatModal.onclick = () => { releaseFocusTrap(seatModal); _origCloseSeatModal(); };

const _origCloseBookingsModal = closeBookingsModal.onclick;
closeBookingsModal.onclick = () => { releaseFocusTrap(myBookingsModal); _origCloseBookingsModal(); };

// Keyboard support for bookings button
userBookingsBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    renderMyBookings();
    myBookingsModal.style.display = 'flex';
    trapFocus(myBookingsModal);
  }
});

// Wrap bookings button click to add focus trap
const _origBookingsBtnClick = userBookingsBtn.onclick;
userBookingsBtn.onclick = () => {
  _origBookingsBtnClick();
  trapFocus(myBookingsModal);
};

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


// ─── Deep Link / QR Code Routing ────────────────────────────────────────────
 
/**
 * Copy text to clipboard and show a toast.
 */
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('success', successMsg || 'Copied!');
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('success', successMsg || 'Copied!');
  });
}
 
/**
 * Returns a shareable URL for a seat or room.
 *   Seat:  ?floor=5&seat=12
 *   Room:  ?floor=5&room=LIB-550
 */
function getSeatUrl(floor, seatId) {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('floor', floor);
  url.searchParams.set('seat', seatId);
  return url.toString();
}
 
function getRoomUrl(floor, roomId) {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.set('floor', floor);
  url.searchParams.set('room', roomId);
  return url.toString();
}
 
/**
 * On page load, check for deep-link query params and navigate to the
 * requested floor + open the correct seat/room modal automatically.
 */
async function handleDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const floorParam = params.get('floor');
  const seatParam  = params.get('seat');
  const roomParam  = params.get('room');
 
  if (!floorParam) return; // No deep link present
 
  const targetFloor = Number(floorParam);
  if (!floorConfig[targetFloor]) return; // Invalid floor
 
  // Switch to the requested floor
  currentFloor = targetFloor;
  document.querySelectorAll('[data-floor]').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.floor) === targetFloor);
  });
  render();
 
  if (seatParam) {
    const seatId = Number(seatParam);
    // Small delay so render() has finished painting
    await new Promise(r => setTimeout(r, 150));
    const seat = (floors[currentFloor] || []).find(s => s.id === seatId);
    if (seat) {
      // Scroll the seat card into view
      const seatEl = document.querySelector(`[data-seat-id="${seatId}"]`);
      if (seatEl) seatEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      openSeatBookingModal(seat);
    } else {
      showToast('error', `Seat S${seatId} not found on Floor ${targetFloor}`);
    }
  }
 
  if (roomParam && floorConfig[targetFloor].hasStudyRooms) {
    await new Promise(r => setTimeout(r, 150));
    const room = (studyRooms[currentFloor] || []).find(r => r.id === roomParam);
    if (room) {
      openBookingModal(room);
    } else {
      showToast('error', `Room ${roomParam} not found on Floor ${targetFloor}`);
    }
  }
}
 
// ─── Initial data load ───────────────────────────────────────────────────────
initializeData().then(() => handleDeepLink());
 