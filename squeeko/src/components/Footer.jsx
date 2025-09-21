import { Link } from 'react-router-dom';
import './Footer.css'
import { Button } from './ui/button';

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-cards'>
        <div className='footer-card'>
          <h1 className='footer-card-title'>Product</h1>
          <div className='footer-bar'></div>
          <ul className='footer-card-list'>
            <Link to={"#"} className='footer-link'>Attendance</Link>
            <Link to={"#"} className='footer-link'>Billing/Payments</Link>
            <Link to={"#"} className='footer-link'>Center Management</Link>
            <Link to={"#"} className='footer-link'>Compliance</Link>
            <Link to={"#"} className='footer-link'>Messaging</Link>
            {/* <Link to={"#"} className='footer-link'>Lesson Plans - coming soon</Link>
            <Link to={"#"} className='footer-link'>Payroll - coming soon</Link>
            <Link to={"#"} className='footer-link'>Scheduling - coming soon</Link> */}
          </ul>
        </div>

        <div className='footer-card'>
          <h1 className='footer-card-title'>Solutions</h1>
          <div className='footer-bar'></div>
          <ul className='footer-card-list'>
            <Link to={"#"} className='footer-link'>Parents</Link>
            <Link to={"#"} className='footer-link'>Preschools & Child Care</Link>
          </ul>
        </div>

        <div className='footer-card'>
          <h1 className='footer-card-title'>Company</h1>
          <div className='footer-bar'></div>
          <ul className='footer-card-list'>            
            <Link to={"#"} className='footer-link'>About</Link>
            <Link to={"#"} className='footer-link'>Careers</Link>
            <Link to={"#"} className='footer-link'>Press</Link>
            <Link to={"#"} className='footer-link'>Privacy Policy</Link>
            <Link to={"#"} className='footer-link'>Security & Safety</Link>
            <Link to={"#"} className='footer-link'>Terms of Service</Link>
          </ul>
        </div>
      </div>

      <div className='footer-links'>
        <Button variant='icon' className='footer-btn'>facebook</Button>
        <Button variant='icon' className='footer-btn'>insta</Button>
        <Button variant='icon' className='footer-btn'>linkdin</Button>
        <Button variant='icon' className='footer-btn'>twitter</Button>
        <Button variant='icon' className='footer-btn'>youtube</Button>
      </div>

      <div className='footer-copyright'>
        
      </div>

    </div>
  );
}

export default Footer;
