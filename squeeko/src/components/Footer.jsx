import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-cards'>
          <h1 className='footer-card-title'>Product</h1>
          <div className='footer-bar'></div>
          <ul className='footer-card-list'>
            
            <li>Compliance</li>
            <li>Messaging</li>
            <li>Billing/Payments</li>
            <li>Attendance</li>
            <li>Center Management</li>
            <li>Scheduling - coming soon</li>
            <li>Payroll - coming soon</li>
            <li>Lesson Plans - coming soon</li>
          </ul>
        </div>

        <div className='footer-cards'>
          <h1 className='footer-card-title'>Solutions</h1>
          <div className='footer-bar'></div>
          <ul className='footer-card-list'>
            
            <li>Preschools & Child Care</li>
            <li>Government & Network Partners</li>
            <li>Parents</li>
          </ul>
        </div>

        <div className='footer-cards'>
          <h1 className='footer-card-title'>Company</h1>
          <div className='footer-bar'></div>
          <ul className='footer-card-list'>
            
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Security & Safety</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

    </footer>
  );
}

export default Footer;
