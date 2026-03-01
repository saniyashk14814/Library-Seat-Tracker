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

// Generate seats for a floor
function generateSeats(floor) {
  const config = floorConfig[floor];
  const arr = [];
  for (let i = 1; i <= config.seats; i++) {
    arr.push({
      id: i,
      zone: config.zones[i % config.zones.length],
      status: Math.random() > 0.7 ? "occupied" : "available"
    });
  }
  return arr;
}

// Generate study rooms with random availability
function generateStudyRooms(floor) {
  if (!studyRoomsConfig[floor]) return [];
  return studyRoomsConfig[floor].map(room => ({
    ...room,
    status: Math.random() > 0.6 ? (Math.random() > 0.5 ? "occupied" : "reserved") : "available",
    bookedSlots: generateRandomBookedSlots()
  }));
}

// Generate random booked time slots
function generateRandomBookedSlots() {
  const slots = [];
  const possibleSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
  possibleSlots.forEach(slot => {
    if (Math.random() > 0.6) slots.push(slot);
  });
  return slots;
}

// Initialize floor data
const floors = {};
const studyRooms = {};
for (let i = 2; i <= 10; i++) {
  floors[i] = generateSeats(i);
  if (floorConfig[i].hasStudyRooms) {
    studyRooms[i] = generateStudyRooms(i);
  }
}

let currentFloor = 2;
let selectedRoom = null;
let selectedTimeSlot = null;

// DOM elements
const grid = document.getElementById("seatGrid");
const label = document.getElementById("currentFloor");
const floorTitle = document.getElementById("floorTitle");
const floorDescription = document.getElementById("floorDescription");
const floorMap = document.getElementById("floorMap");
const studyRoomsSection = document.getElementById("studyRoomsSection");
const studyRoomsGrid = document.getElementById("studyRoomsGrid");
const modal = document.getElementById("bookingModal");
const closeModal = document.querySelector(".close-modal");
const confirmBooking = document.getElementById("confirmBooking");

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
};

// Confirm booking
confirmBooking.onclick = () => {
  if (selectedRoom && selectedTimeSlot) {
    const room = studyRooms[currentFloor].find(r => r.id === selectedRoom.id);
    if (room) {
      room.bookedSlots.push(selectedTimeSlot);
      room.status = "reserved";
      renderStudyRooms();
    }
    modal.style.display = "none";
    selectedRoom = null;
    selectedTimeSlot = null;
    alert(`✅ Successfully booked ${selectedRoom?.name || 'room'} for ${selectedTimeSlot}!`);
  }
};

// Render seats
function renderSeats() {
  grid.innerHTML = "";

  floors[currentFloor].forEach(seat => {
    const div = document.createElement("div");
    div.className = `seat ${seat.status}`;
    div.innerHTML = `<strong>S${seat.id}</strong><small>${seat.zone}</small>`;

    div.onclick = () => {
      if (seat.status === "available") {
        seat.status = "reserved";
      } else if (seat.status === "reserved") {
        seat.status = "available";
      }
      renderSeats();
    };

    grid.appendChild(div);
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

// Initial render
render();
