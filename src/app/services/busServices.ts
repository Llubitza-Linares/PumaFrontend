import axios from 'axios';
export const getBuses = async () => {
    const response = await axios.get('http://localhost:1337/api/decks');
    return response.data;
}