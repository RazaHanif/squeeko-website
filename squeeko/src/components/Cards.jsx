import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import './Cards.css'
// SVG ICONS FROM FLATICON.COM -- using npm pacakge

const Cards = () => {
  return (
    <div className="cards-main">
        <div className="cards">
            <Card className="card">
                <CardHeader>
                    <CardTitle className="card-title">
                        <i class="fi fi-tr-document"></i>
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                    <h1>GET COMPLIANT</h1>
                </CardContent>
                <CardFooter className="card-footer">
                    <p>EASILY MEET MINISTRY REQUIREMENTS SO YOUR CENTER CAN BE AUDIT-READY.</p>
                </CardFooter>
            </Card>
            
            <Card className="card">
                <CardHeader>
                    <CardTitle className="card-title">
                        <i class="fi fi-ts-payroll-check"></i>
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                    <h1>SMART PAYMENTS</h1>
                </CardContent>
                <CardFooter className="card-footer">
                    <p>AUTOMATE BILLING, TRACK INVOICES, AND ACCEPT ONLINE PAYMENTS.</p>
                </CardFooter>
            </Card>
            
            <Card className="card">
                <CardHeader>
                    <CardTitle className="card-title">
                        <i class="fi fi-tr-messages"></i>
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

export default Cards;
