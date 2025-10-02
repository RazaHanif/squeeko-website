import { Button } from "@/components/ui/button"
import './Home.css'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import QuoteCarousel from "@/components/QuoteCarousel"

const Home = () => {
  return (
    <>
    <div className="hero">
        <h1 className="title">SIMPLIFYING CHILDCARE, <br/>CLICK BY CLICK.</h1>
        <p className="subtitle">STAY COMPLIANT, SIMPLIFY BILLING, AND KEEP PARENTS CONNECTED - BUILT FOR CENTERS LIKE YOURS.</p>
        <div className="btns">
            <a href="mailto:squeekoapp@gmail.com">
                <Button variant="default" className="header-btn">
                    Start Today
                </Button>
            </a>
            {/* <Button variant="outline" className="home-btn-secondary">Try it first!</Button> */}
        </div>
    </div>
    {/*
    <div className="hero-quote">
        <QuoteCarousel />
    </div>
    */}
    <div className="hero-cards">
        <div className="cards">
            <Card className="card">
                <CardHeader>
                    <CardTitle className="card-title">
                        <i className="fi fi-tr-document"></i>
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
                        <i className="fi fi-ts-payroll-check"></i>
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
                        <i className="fi fi-tr-messages"></i>
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
    </>
  );
}

export default Home;
