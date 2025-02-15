import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Backend URL
});

export const submitReferral = async (data) => {
  try {
    const response = await api.post('/referrals', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting referral:', error);
    throw error;
  }
};
