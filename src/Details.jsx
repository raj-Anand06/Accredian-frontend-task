import React, { useState } from 'react';
import { submitReferral } from '../src/api/referralApi';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';
import './styles/details.css';

const DetailsModal = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (
      !formValues.referrerName ||
      !formValues.referrerEmail ||
      !formValues.refereeName ||
      !formValues.refereeEmail ||
      !formValues.courseName
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    
    try {
      // Call the backend API to submit the referral
      const response = await submitReferral(formValues);
      alert('Referral submitted successfully');
      console.log("Referral Details Submitted:", response);
      onClose();  // Close the modal on success
    } catch (error) {
      alert('Failed to submit referral. Please try again.');
      console.error('Error submitting referral:', error);
    }
  };
  

  return (
    <Dialog open={open} onClose={onClose} className="details-dialog">
      <DialogTitle>Refer a Course</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent className="details-dialog-content">
          <TextField
            label="Your Name"
            name="referrerName"
            value={formValues.referrerName}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Your Email"
            name="referrerEmail"
            type="email"
            value={formValues.referrerEmail}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Friend's Name"
            name="refereeName"
            value={formValues.refereeName}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Friend's Email"
            name="refereeEmail"
            type="email"
            value={formValues.refereeEmail}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Course Name"
            name="courseName"
            value={formValues.courseName}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Message (Optional)"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            fullWidth
            margin="dense"
            multiline
            rows={3}
          />
        </DialogContent>
        <DialogActions className="details-dialog-actions">
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit Referral
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DetailsModal;
