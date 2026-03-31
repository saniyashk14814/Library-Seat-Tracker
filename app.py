"""
TMU Library Seat Tracker - Backend API
Flask server with JSON file persistence
"""

import os
import threading

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import json
from datetime import datetime, timedelta
import uuid

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Data file path
DATA_FILE = 'data.json'

# Grace period for unconfirmed reservations (in minutes)
GRACE_PERIOD_MINUTES = int(os.environ.get('GRACE_PERIOD_MINUTES', 10))


# Default data structure
DEFAULT_DATA = {
    "floors": {},
    "study_rooms": {},
    "bookings": [],
    "users": {}
}

# Floor configuration
FLOOR_CONFIG = {
    2: {"name": "Main Floor", "seats": 40, "zones": ["Desktop", "Group", "Individual"], "hasStudyRooms": False},
    3: {"name": "Computer Lab Floor", "seats": 35, "zones": ["Computer", "Carrel", "Lab"], "hasStudyRooms": False},
    4: {"name": "Archives & Quiet Study", "seats": 28, "zones": ["Individual", "Group", "Window"], "hasStudyRooms": False},
    5: {"name": "Quiet Individual & Group Study", "seats": 30, "zones": ["Quiet", "Carrel", "Group"], "hasStudyRooms": True},
    6: {"name": "Quiet Study Floor", "seats": 32, "zones": ["Quiet", "Carrel", "Computer"], "hasStudyRooms": True},
    7: {"name": "Quiet Study Floor", "seats": 28, "zones": ["Quiet", "Carrel", "Window"], "hasStudyRooms": True},
    8: {"name": "Group Study Floor", "seats": 26, "zones": ["Group", "Carrel", "Open"], "hasStudyRooms": True},
    9: {"name": "Quiet Individual & Group Study", "seats": 24, "zones": ["Quiet", "Carrel", "Group"], "hasStudyRooms": True},
    10: {"name": "Silent Study Floor", "seats": 20, "zones": ["Silent", "Carrel", "Individual"], "hasStudyRooms": False}
}

# Study rooms configuration
STUDY_ROOMS_CONFIG = {
    5: [
        {"id": "LIB-550", "name": "LIB 550", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-551", "name": "LIB 551", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-552", "name": "LIB 552", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-554", "name": "LIB 554", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-555", "name": "LIB 555", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-556", "name": "LIB 556", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]}
    ],
    6: [
        {"id": "LIB-605A", "name": "LIB 605A", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-605B", "name": "LIB 605B", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-605C", "name": "LIB 605C", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]}
    ],
    7: [
        {"id": "LIB-701", "name": "LIB 701", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-702", "name": "LIB 702", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-703", "name": "LIB 703", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]}
    ],
    8: [
        {"id": "LIB-805", "name": "LIB 805", "capacity": 8,
            "features": ["Whiteboard", "TV Display", "Group Table", "Accessible"]},
        {"id": "LIB-805A", "name": "LIB 805A", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-805B", "name": "LIB 805B", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-805C", "name": "LIB 805C", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-806", "name": "LIB 806", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-807", "name": "LIB 807", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-808", "name": "LIB 808", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-809", "name": "LIB 809", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]}
    ],
    9: [
        {"id": "LIB-905A", "name": "LIB 905A", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-905B", "name": "LIB 905B", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]},
        {"id": "LIB-905C", "name": "LIB 905C", "capacity": 4,
            "features": ["Whiteboard", "Power Outlets"]},
        {"id": "LIB-908", "name": "LIB 908", "capacity": 6,
            "features": ["Whiteboard", "Power Outlets", "Group Table"]}
    ]
}


def load_data():
    """Load data from JSON file"""
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            return DEFAULT_DATA.copy()
    return DEFAULT_DATA.copy()


def save_data(data):
    """Save data to JSON file"""
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2, default=str)


def initialize_data():
    """Initialize floor data if not exists"""
    data = load_data()

    # Initialize floors
    for floor_num, config in FLOOR_CONFIG.items():
        floor_key = str(floor_num)
        if floor_key not in data["floors"]:
            data["floors"][floor_key] = {
                "seats": [
                    {
                        "id": i,
                        "zone": config["zones"][i % len(config["zones"])],
                        "status": "available",
                        "bookedBy": None,
                        "bookingExpires": None
                    }
                    for i in range(1, config["seats"] + 1)
                ]
            }

    # Initialize study rooms
    for floor_num, rooms in STUDY_ROOMS_CONFIG.items():
        floor_key = str(floor_num)
        if floor_key not in data["study_rooms"]:
            data["study_rooms"][floor_key] = [
                {
                    **room,
                    "status": "available",
                    "bookedSlots": []
                }
                for room in rooms
            ]

    save_data(data)
    return data


def clean_expired_bookings():
    """Remove expired bookings and free up seats/rooms"""
    data = load_data()
    now = datetime.now()

    # Collect booking IDs to remove (expired or grace period lapsed)
    bookings_to_remove = set()
    for b in data["bookings"]:
        expired = datetime.fromisoformat(b["expires"]) <= now
        grace_lapsed = (
            not b.get("confirmed", True)
            and b.get("gracePeriodExpires")
            and datetime.fromisoformat(b["gracePeriodExpires"]) <= now
        )
        if expired or grace_lapsed:
            bookings_to_remove.add(b["id"])

    # Clean seat bookings
    for floor_key, floor_data in data["floors"].items():
        for seat in floor_data["seats"]:
            if seat["bookingExpires"]:
                expires = datetime.fromisoformat(seat["bookingExpires"])
                if now > expires:
                    seat["status"] = "available"
                    seat["bookedBy"] = None
                    seat["bookingExpires"] = None

    # Free seats/rooms for grace-period-lapsed bookings
    for b in data["bookings"]:
        if b["id"] in bookings_to_remove:
            floor_key = str(b["floor"])
            if b["type"] == "seat" and floor_key in data["floors"]:
                for seat in data["floors"][floor_key]["seats"]:
                    if seat["id"] == b.get("seatId"):
                        seat["status"] = "available"
                        seat["bookedBy"] = None
                        seat["bookingExpires"] = None
                        break
            elif b["type"] == "room" and floor_key in data["study_rooms"]:
                for room in data["study_rooms"][floor_key]:
                    if room["id"] == b.get("roomId"):
                        room["bookedSlots"] = [
                            s for s in room["bookedSlots"]
                            if s["time"] != b.get("timeSlot")
                        ]
                        if not room["bookedSlots"]:
                            room["status"] = "available"
                        break

    # Clean room bookings (time-based expiry)
    for floor_key, rooms in data["study_rooms"].items():
        for room in rooms:
            room["bookedSlots"] = [
                slot for slot in room["bookedSlots"]
                if datetime.fromisoformat(slot["expires"]) > now
            ]
            if not room["bookedSlots"]:
                room["status"] = "available"

    # Remove expired/lapsed bookings from bookings list
    data["bookings"] = [
        b for b in data["bookings"]
        if b["id"] not in bookings_to_remove
    ]

    save_data(data)
    return data


# ===== API ROUTES =====

@app.route('/')
def serve_index():
    """Serve the main HTML file"""
    return send_from_directory('.', 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    """Serve static files"""
    return send_from_directory('.', path)


@app.route('/api/floors', methods=['GET'])
def get_floors():
    """Get all floor configurations"""
    return jsonify(FLOOR_CONFIG)


@app.route('/api/floors/<int:floor_num>/seats', methods=['GET'])
def get_floor_seats(floor_num):
    """Get seats for a specific floor"""
    clean_expired_bookings()
    data = load_data()
    floor_key = str(floor_num)

    if floor_key not in data["floors"]:
        return jsonify({"error": "Floor not found"}), 404

    return jsonify(data["floors"][floor_key]["seats"])


@app.route('/api/floors/<int:floor_num>/rooms', methods=['GET'])
def get_floor_rooms(floor_num):
    """Get study rooms for a specific floor"""
    clean_expired_bookings()
    data = load_data()
    floor_key = str(floor_num)

    if floor_key not in data["study_rooms"]:
        return jsonify([])

    return jsonify(data["study_rooms"][floor_key])


@app.route('/api/seats/book', methods=['POST'])
def book_seat():
    """Book a seat"""
    req_data = request.json
    floor_num = req_data.get('floor')
    seat_id = req_data.get('seatId')
    user_id = req_data.get('userId', 'anonymous')
    duration = req_data.get('duration', 1)  # hours
    time_slot = req_data.get('timeSlot', 'Now')

    if not floor_num or not seat_id:
        return jsonify({"error": "Missing floor or seatId"}), 400

    data = load_data()
    floor_key = str(floor_num)

    if floor_key not in data["floors"]:
        return jsonify({"error": "Floor not found"}), 404

    # Find the seat
    seat = None
    for s in data["floors"][floor_key]["seats"]:
        if s["id"] == seat_id:
            seat = s
            break

    if not seat:
        return jsonify({"error": "Seat not found"}), 404

    if seat["status"] != "available":
        return jsonify({"error": "Seat is not available"}), 409

    # Calculate expiration
    now = datetime.now()
    expires = now + timedelta(hours=duration)
    grace_expires = now + timedelta(minutes=GRACE_PERIOD_MINUTES)

    # Book the seat
    seat["status"] = "reserved"
    seat["bookedBy"] = user_id
    seat["bookingExpires"] = expires.isoformat()

    # Create booking record
    booking = {
        "id": str(uuid.uuid4()),
        "type": "seat",
        "name": f"Seat S{seat_id}",
        "floor": floor_num,
        "seatId": seat_id,
        "zone": seat["zone"],
        "userId": user_id,
        "timeSlot": time_slot,
        "duration": f"{duration} {'hour' if duration == 1 else 'hours'}",
        "bookedAt": now.isoformat(),
        "expires": expires.isoformat(),
        "confirmed": False,
        "gracePeriodExpires": grace_expires.isoformat()
    }
    data["bookings"].append(booking)

    save_data(data)

    return jsonify({
        "success": True,
        "booking": booking,
        "message": f"Seat S{seat_id} booked successfully"
    })


@app.route('/api/rooms/book', methods=['POST'])
def book_room():
    """Book a study room"""
    req_data = request.json
    floor_num = req_data.get('floor')
    room_id = req_data.get('roomId')
    user_id = req_data.get('userId', 'anonymous')
    time_slot = req_data.get('timeSlot')

    if not floor_num or not room_id or not time_slot:
        return jsonify({"error": "Missing required fields"}), 400

    data = load_data()
    floor_key = str(floor_num)

    if floor_key not in data["study_rooms"]:
        return jsonify({"error": "Floor not found"}), 404

    # Find the room
    room = None
    for r in data["study_rooms"][floor_key]:
        if r["id"] == room_id:
            room = r
            break

    if not room:
        return jsonify({"error": "Room not found"}), 404

    # Check if time slot is already booked
    if time_slot in [slot["time"] for slot in room["bookedSlots"]]:
        return jsonify({"error": "Time slot already booked"}), 409

    # Calculate expiration (assume 1 hour per slot, expires at end of day for simplicity)
    now = datetime.now()
    expires = now.replace(hour=23, minute=59, second=59)
    grace_expires = now + timedelta(minutes=GRACE_PERIOD_MINUTES)

    # Book the slot
    room["bookedSlots"].append({
        "time": time_slot,
        "userId": user_id,
        "expires": expires.isoformat()
    })

    if len(room["bookedSlots"]) > 0:
        room["status"] = "reserved"

    # Create booking record
    booking = {
        "id": str(uuid.uuid4()),
        "type": "room",
        "name": room["name"],
        "floor": floor_num,
        "roomId": room_id,
        "userId": user_id,
        "timeSlot": time_slot,
        "duration": "1 hour",
        "bookedAt": now.isoformat(),
        "expires": expires.isoformat(),
        "confirmed": False,
        "gracePeriodExpires": grace_expires.isoformat()
    }
    data["bookings"].append(booking)

    save_data(data)

    return jsonify({
        "success": True,
        "booking": booking,
        "message": f"{room['name']} booked for {time_slot}"
    })


@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    """Get all bookings (optionally filtered by user)"""
    clean_expired_bookings()
    data = load_data()
    user_id = request.args.get('userId')

    bookings = data["bookings"]
    if user_id:
        bookings = [b for b in bookings if b.get("userId") == user_id]

    return jsonify(bookings)


@app.route('/api/bookings/<booking_id>', methods=['DELETE'])
def cancel_booking(booking_id):
    """Cancel a booking"""
    data = load_data()

    # Find the booking
    booking = None
    for b in data["bookings"]:
        if b["id"] == booking_id:
            booking = b
            break

    if not booking:
        return jsonify({"error": "Booking not found"}), 404

    # Free up the seat or room
    floor_key = str(booking["floor"])

    if booking["type"] == "seat":
        if floor_key in data["floors"]:
            for seat in data["floors"][floor_key]["seats"]:
                if seat["id"] == booking.get("seatId"):
                    seat["status"] = "available"
                    seat["bookedBy"] = None
                    seat["bookingExpires"] = None
                    break
    elif booking["type"] == "room":
        if floor_key in data["study_rooms"]:
            for room in data["study_rooms"][floor_key]:
                if room["id"] == booking.get("roomId"):
                    room["bookedSlots"] = [
                        s for s in room["bookedSlots"]
                        if s["time"] != booking.get("timeSlot")
                    ]
                    if not room["bookedSlots"]:
                        room["status"] = "available"
                    break

    # Remove booking
    data["bookings"] = [b for b in data["bookings"] if b["id"] != booking_id]

    save_data(data)

    return jsonify({
        "success": True,
        "message": f"Booking cancelled"
    })


@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get library statistics"""
    clean_expired_bookings()
    data = load_data()

    total_seats = 0
    available_seats = 0
    occupied_seats = 0
    reserved_seats = 0

    for floor_data in data["floors"].values():
        for seat in floor_data["seats"]:
            total_seats += 1
            if seat["status"] == "available":
                available_seats += 1
            elif seat["status"] == "occupied":
                occupied_seats += 1
            elif seat["status"] == "reserved":
                reserved_seats += 1

    total_rooms = 0
    available_rooms = 0

    for rooms in data["study_rooms"].values():
        for room in rooms:
            total_rooms += 1
            if room["status"] == "available":
                available_rooms += 1

    return jsonify({
        "seats": {
            "total": total_seats,
            "available": available_seats,
            "occupied": occupied_seats,
            "reserved": reserved_seats
        },
        "rooms": {
            "total": total_rooms,
            "available": available_rooms
        },
        "activeBookings": len(data["bookings"])
    })


@app.route('/api/bookings/<booking_id>/confirm', methods=['POST'])
def confirm_booking(booking_id):
    """Confirm a reservation (user has arrived)"""
    data = load_data()

    booking = None
    for b in data["bookings"]:
        if b["id"] == booking_id:
            booking = b
            break

    if not booking:
        return jsonify({"error": "Booking not found"}), 404

    if booking.get("confirmed"):
        return jsonify({"error": "Booking already confirmed"}), 400

    # Check if grace period already expired
    if booking.get("gracePeriodExpires"):
        if datetime.now() > datetime.fromisoformat(booking["gracePeriodExpires"]):
            return jsonify({"error": "Grace period has expired"}), 410

    booking["confirmed"] = True
    save_data(data)

    return jsonify({
        "success": True,
        "booking": booking,
        "message": "Booking confirmed successfully"
    })


@app.route('/api/grace-period', methods=['GET'])
def get_grace_period():
    """Get the configured grace period in minutes"""
    return jsonify({"gracePeriodMinutes": GRACE_PERIOD_MINUTES})


@app.route('/api/reset', methods=['POST'])
def reset_data():
    """Reset all data (for testing)"""
    global DEFAULT_DATA
    save_data(DEFAULT_DATA.copy())
    initialize_data()
    return jsonify({"success": True, "message": "Data reset successfully"})


# Background thread to periodically clean expired/unconfirmed bookings
def _run_expiration_checker():
    """Runs every 30 seconds to release unconfirmed reservations past grace period"""
    with app.app_context():
        clean_expired_bookings()
    timer = threading.Timer(30, _run_expiration_checker)
    timer.daemon = True
    timer.start()


# Initialize data on startup
initialize_data()
_run_expiration_checker()

if __name__ == '__main__':
    print("=" * 50)
    print("TMU Library Seat Tracker - Backend Server")
    print("=" * 50)
    port = int(os.environ.get("PORT", 5001))
    print(f"Starting server at http://localhost:{port}")
    print("API endpoints:")
    print("  GET  /api/floors              - Get floor configs")
    print("  GET  /api/floors/<n>/seats    - Get seats for floor")
    print("  GET  /api/floors/<n>/rooms    - Get rooms for floor")
    print("  POST /api/seats/book          - Book a seat")
    print("  POST /api/rooms/book          - Book a room")
    print("  GET  /api/bookings            - Get bookings")
    print("  DELETE /api/bookings/<id>     - Cancel booking")
    print("  GET  /api/stats               - Get statistics")
    print("=" * 50)
    app.run(debug=True, port=port)
