// Validation utility module for Library Seat Tracker

/**
 * Validates that a required value is not empty.
 * @param {*} value - The value to check.
 * @param {string} fieldName - The name of the field for the error message.
 * @returns {string|null} Error message if invalid, null if valid.
 */
function validateRequired(value, fieldName) {
    if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
        return `${fieldName} is required.`;
    }
    return null;
}

/**
 * Parses a time slot string like "9:00 AM" into a Date object for today.
 * @param {string} slot - Time slot string.
 * @returns {Date} Date object set to that time today.
 */
function parseTimeSlotToDate(slot) {
    const [time, period] = slot.split(' ');
    let [hour, minute] = time.split(':').map(Number);

    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;

    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
}

/**
 * Validates that a time slot is not in the past.
 * @param {string} slot - Time slot string (e.g. "9:00 AM").
 * @returns {string|null} Error message if invalid, null if valid.
 */
function validateTimeSlot(slot) {
    const requiredError = validateRequired(slot, 'Time slot');
    if (requiredError) return requiredError;

    const slotDate = parseTimeSlotToDate(slot);
    const now = new Date();

    if (slotDate < now) {
        return `The time slot "${slot}" is in the past. Please select a future time.`;
    }
    return null;
}

/**
 * Validates that a new booking does not conflict with existing bookings.
 * A conflict occurs when the same resource (seat/room) on the same floor
 * has an overlapping time slot.
 * @param {Object} newBooking - The booking to validate. Expected shape:
 *   { type: 'seat'|'room', floor: number, name: string, time: string, duration?: string }
 * @param {Array} existingBookings - Array of current bookings with the same shape.
 * @returns {string|null} Error message if conflict found, null if valid.
 */
function validateNoDoubleBooking(newBooking, existingBookings) {
    if (!existingBookings || existingBookings.length === 0) return null;

    const newStart = parseTimeSlotToDate(newBooking.time);
    const newDurationHours = parseDurationHours(newBooking.duration);
    const newEnd = new Date(newStart.getTime() + newDurationHours * 60 * 60 * 1000);

    for (const existing of existingBookings) {
        // Same resource on same floor
        if (existing.floor === newBooking.floor && existing.name === newBooking.name && existing.type === newBooking.type) {
            const existStart = parseTimeSlotToDate(existing.time);
            const existDurationHours = parseDurationHours(existing.duration);
            const existEnd = new Date(existStart.getTime() + existDurationHours * 60 * 60 * 1000);

            // Overlap: newStart < existEnd AND newEnd > existStart
            if (newStart < existEnd && newEnd > existStart) {
                return `Conflict: ${existing.name} on Floor ${existing.floor} is already booked at ${existing.time}.`;
            }
        }
    }

    return null;
}

/**
 * Parses a duration string like "2 hours" or "1 hour" into a number.
 * Defaults to 1 if unparseable.
 * @param {string} duration
 * @returns {number}
 */
function parseDurationHours(duration) {
    if (!duration) return 1;
    const match = String(duration).match(/(\d+)/);
    return match ? Number(match[1]) : 1;
}
