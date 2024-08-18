import axios from "axios";

export const baseUrl = 'https://api.unsplash.com/photos';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchRandomPhotos() {
    try {
        const response = await axios.get(`${baseUrl}/random/?client_id=${API_KEY}`, {
            params: {
                count: 4,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
}
