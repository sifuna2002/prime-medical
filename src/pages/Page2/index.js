
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BiPlusMedical } from 'react-icons/bi';
import { ImMinus } from 'react-icons/im';
import './Services.css';

export function PageTwo() {
  return (
  <>
    <Header />
        <div className="wrapper">
        <div className="upper">
            <p>Staff attending to clients includes a consultant doctor, dietician and registered nurses.<br />Screening for HIV/AIDS is also offered here.</p>
        </div>
        <div className="row">
            <h1>Obsterics Clinic - Consultant Clinic</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        <div className="row">
            <h1>Infertility clinic - Consultant Clinic</h1>
            <BiPlusMedical color="white"  className="right"/>
        </div>
        <div className="row">
            <h1>Gynecology Clinic - Consultant Clinic</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        <div className="row">
            <h1>Labaratory - Out Patient Services</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        <div className="row sp">
            <h1>Phamarcy - Out Patient Services</h1>
            <ImMinus color="white" className="right" />
        </div>
        <div className="row">
            <h1>Labaratory - Out Patient Services</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        <div className="row">
            <h1>Medical Examinations</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        <div className="row">
            <h1>Physiotherapy</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        <div className="row last">
            <h1>Inpatient Services</h1>
            <BiPlusMedical color="white" className="right" />
        </div>
        </div>
        <Footer />
     </>
  );
}
