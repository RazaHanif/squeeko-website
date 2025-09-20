import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import './Footer.css'
import DocumentIcon from '../assets/compliance-document.svg'
import PaymentIcon from '../assets/payroll-check.svg'
import MessagesIcon from '../assets/messages.svg'

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="cards">
            <Card>
                <CardHeader>
                    <CardTitle className="card-title">
                        <img src={DocumentIcon} alt="document-icon"/>
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                    <h1>GET COMPLIANT</h1>
                </CardContent>
                <CardFooter className="card-footer">
                    <p>EASILY MEET MINISTRY REQUIREMENTS SO YOUR CENTER CAN BE AUDIT-READY.</p>
                </CardFooter>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="card-title">
                        <img src={PaymentIcon} alt="document-icon"/>
                        <i className="fi fi-brands-linkedin"></i>
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                    <h1>SMART PAYMENTS</h1>
                </CardContent>
                <CardFooter className="card-footer">
                    <p>AUTOMATE BILLING, TRACK INVOICES, AND ACCEPT ONLINE PAYMENTS.</p>
                </CardFooter>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="card-title">
                        <img src={MessagesIcon} alt="document-icon"/>
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                    <h1>STAY CONNECTED</h1>
                </CardContent>
                <CardFooter className="card-footer">
                    <p>SHARE UPDATES, MESSSAGES, AND REMINDERS WITH PARENTS IN REAL TIME.</p>
                </CardFooter>
            </Card>
            

        </div>
    </div>
  );
}

export default Footer;
