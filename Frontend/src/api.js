// API Configuration and Services

// Get the API base URL from environment variables or use default
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://editly-ai-backend.vercel.app';



/**
 * Submit early access form data to the backend
 * @param {Object} formData - The form data to submit
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.mobile - User's mobile number
 * @param {string} formData.purpose - User's purpose for using the software
 * @returns {Promise<Object>} The API response
 */
export const submitEarlyAccess = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/early-access`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                detail: 'An error occurred while submitting the form'
            }));
            throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        // Re-throw with a more user-friendly message for network errors
        if (error.message === 'Failed to fetch') {
            throw new Error('Unable to connect to the server. Please check your internet connection and try again.');
        }
        throw error;
    }
};

/**
 * Fetch the list of early access users
 * @returns {Promise<Array>} The list of users
 */
export const getAvailableUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/early-access-users`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data; // Returns array of user objects (or tuples depending on backend return)
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
};
