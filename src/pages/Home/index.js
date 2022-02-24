
import { Link } from 'react-router-dom';
import logo1 from './logo1.jpeg';
import './App.css';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
export function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="bg">
        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }} className="box">
        <Header />
        <img src={logo1} alt="Prime Medical Services" />
        <div className="shape">
          <h1>INPATIENT <br /><em>SERVICES</em></h1>
          {/* <h2>SERVICES</h2> */}
        </div>
        <div className="ellipse"><h1>Thika arcarde Third floor room 30 <em>Thika town</em></h1></div>
        <Footer />
        {/* <Services /> */}
        </Box> 
        
      </Container>
    </React.Fragment>
  );
}
