/**
 * TMU Library Seat Tracker - API Client
 * Handles all communication with the Python backend
 */

const API_BASE = '/api';

// Generate unique user ID for this browser session
const USER_ID = localStorage.getItem('tmuUserId') || (() => {
    const id = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('tmuUserId', id);
    return id;
})();

/**
 * Make API request with error handling
 */
async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'API request failed');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

/**
 * Get floor configurations
 */
async function getFloorConfigs() {
    return apiRequest('/floors');
}

/**
 * Get seats for a specific floor
 */
async function getFloorSeats(floorNum) {
    return apiRequest(`/floors/${floorNum}/seats`);
}

/**
 * Get study rooms for a specific floor
 */
async function getFloorRooms(floorNum) {
    return apiRequest(`/floors/${floorNum}/rooms`);
}

/**
 * Book a seat
 */
async function bookSeat(floor, seatId, duration, timeSlot) {
    return apiRequest('/seats/book', {
        method: 'POST',
        body: JSON.stringify({
            floor,
            seatId,
            userId: USER_ID,
            duration,
            timeSlot
        })
    });
}

/**
 * Book a study room
 */
async function bookRoom(floor, roomId, timeSlot) {
    return apiRequest('/rooms/book', {
        method: 'POST',
        body: JSON.stringify({
            floor,
            roomId,
            userId: USER_ID,
            timeSlot
        })
    });
}

/**
 * Get user's bookings
 */
async function getUserBookings() {
    return apiRequest(`/bookings?userId=${USER_ID}`);
}

/**
 * Get all bookings
 */
async function getAllBookings() {
    return apiRequest('/bookings');
}

/**
 * Cancel a booking
 */
async function cancelBooking(bookingId) {
    return apiRequest(`/bookings/${bookingId}`, {
        method: 'DELETE'
    });
}

/**
 * Confirm a booking (user has arrived)
 */
async function confirmBooking(bookingId) {
    return apiRequest(`/bookings/${bookingId}/confirm`, {
        method: 'POST'
    });
}

/**
 * Get the configured grace period in minutes
 */
async function getGracePeriod() {
    return apiRequest('/grace-period');
}

/**
 * Get library statistics
 */
async function getStats() {
    return apiRequest('/stats');
}

/**
 * Reset all data (for testing)
 */
async function resetData() {
    return apiRequest('/reset', { method: 'POST' });
}

/**
 * Check if backend is available
 */
async function checkBackendHealth() {
    try {
        await apiRequest('/stats');
        return true;
    } catch {
        return false;
    }
}

// Export for use in script.js
window.LibraryAPI = {
    USER_ID,
    getFloorConfigs,
    getFloorSeats,
    getFloorRooms,
    bookSeat,
    bookRoom,
    getUserBookings,
    getAllBookings,
    cancelBooking,
    confirmBooking,
    getGracePeriod,
    getStats,
    resetData,
    checkBackendHealth
};
