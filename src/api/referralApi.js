import axios from 'axios';

const api = axios.create({
  baseURL: 'https://accredian-backend-task-4gq4.onrender.com',  // Backend URL
});

export const submitReferral = async (data) => {
  try {
    const response = await api.post('/api/referrals', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting referral:', error);
    throw error;
  }
};
