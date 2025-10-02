import './About.css'
import crmMock from '../assets/crm-mock.png'
import crmLaptop from '../assets/Isometric Stickers - Office Supplies.png'

const About = () => {
  return (
    <div className='about-page'>
      <div className='mission-statment'>
        At Squeeko, we are building tools to help childcare centers spend less time on paper work and more time with kids
      </div>

      <div className="about-section">
        <div className="about-text left">
          <p>
            Running a center means juggling compliance forms, invoicing, and dozens of parent messages every day. Without modern tools, staff drown in admin work, increasing stress and reducing time with kids.
          </p>
        </div>
        <div className="about-img right">
          <img src={crmMock} alt="crm-mock" />
        </div>
      </div>

      <div className="about-section">
        <div className="about-list">
          <ul>
            <li>
              Compliance-first. Digital forms and record-keeping designed for audit-readiness.
            </li>
            <li>
              Parent-first communication. Fast, translated, and trackable updates so families stay informed.
            </li>
            <li>
              Simple operations. Automations and clear workflows that reduce repetitive tasks.
            </li>
            <li>
              Secure & private. Data protection and access controls built into the platform.
            </li>
            <li>
              Affordable for small centers. Practical pricing and features for real-world budgets.
            </li>
          </ul>
        </div>
      </div>

      <div className="about-section">
        <div className="about-img left">
          <img src={crmLaptop} alt="crm-laptop" />
        </div>
        <div className="about-text right">
          <p>
            We focus on the essentials: make compliance straightforward, automate billing where possible, and keep parents connected through simple, reliable messaging. Squeeko is built to remove friction so teams can focus on care.
          </p>
        </div>
      </div>

      <div className="bottom">
        <h1>Ready to simplify your day?</h1>
        <div>Form goes here</div>
      </div>
    </div>
  );
}

export default About;
