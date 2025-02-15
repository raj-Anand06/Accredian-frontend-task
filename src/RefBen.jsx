import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Switch,
  FormControlLabel
} from '@mui/material';
import './styles/refben.css';

function RefBen() {
  // Sidebar categories in uppercase
  const categories = [
    'ALL PROGRAMS',
    'PRODUCT MANAGEMENT',
    'BUSINESS MANAGEMENT',
    'FINTECH',
    'SENIOR MANAGEMENT',
    'DATA SCIENCE',
    'DIGITAL TRANSFORMATION',
    'BUSINESS ANALYTICS',
  ];

  // Example table data
  const programsData = [
    {
      name: 'Professional Certificate Program in Product Management',
      referrerBonus: '₹ 7,000',
      refereeBonus: '₹ 9,000',
    },
    {
      name: 'PG Certificate Program in Strategic Product Management',
      referrerBonus: '₹ 7,000',
      refereeBonus: '₹ 9,000',
    },
    {
      name: 'Executive Program in Product Management and Digital Transformation',
      referrerBonus: '₹ 10,000',
      refereeBonus: '₹ 12,000',
    },
    {
      name: 'Advanced Certification in Product Management',
      referrerBonus: '₹ 7,000',
      refereeBonus: '₹ 9,000',
    },
    {
      name: 'Executive Program in Product Management and Project Management',
      referrerBonus: '₹ 10,000',
      refereeBonus: '₹ 12,000',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="refben-container">
      <div className="refben-content">
        {/* Heading */}
        <Typography variant="h4" className="refben-heading">
          What Are The <span className="highlight">Referral Benefits?</span>
        </Typography>

        {/* Main Content: Sidebar + Programs Table */}
        <Box className="refben-content-area">
          {/* Left Sidebar */}
          <Box className="refben-sidebar">
            <List disablePadding>
              {categories.map((category, index) => (
                <ListItemButton
                  key={index}
                  selected={index === selectedCategory}
                  onClick={() => setSelectedCategory(index)}
                  className="sidebar-item"
                >
                  <ListItemText primary={category} />
                </ListItemButton>
              ))}
            </List>
          </Box>

          {/* Right Panel */}
          <Box className="refben-main">
            {/* Top Bar with "Programs" title and Enrolled switch */}
            <Box className="refben-topbar">
              <Box className="refben-switch">
                <FormControlLabel
                  label="Enrolled"
                  labelPlacement="start"
                  control={
                    <Switch
                      checked={enrolled}
                      onChange={(e) => setEnrolled(e.target.checked)}
                      color="primary"
                    />
                  }
                />
              </Box>
            </Box>

            {/* Programs Table */}
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Programs</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Referrer Bonus</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Referee Bonus</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {programsData.map((program, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{program.name}</TableCell>
                      <TableCell>{program.referrerBonus}</TableCell>
                      <TableCell>{program.refereeBonus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* "Show More" Box */}
            <Box className="refben-show-more">
              <Button variant="text" className="show-more-btn">
                Show More ↓
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Refer Now Button at Bottom */}
        <Box className="refben-footer">
          <Button variant="contained" className="refer-now-btn">
            Refer Now
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default RefBen;
