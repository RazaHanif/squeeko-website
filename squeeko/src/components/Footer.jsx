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

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="cards">
            <Card>
                <CardHeader>
                    <CardTitle className="card-title">
                        <img src="compliance-document.svg" alt="document-icon"/>
                    </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                    <h1>GET COMPLIANT</h1>
                </CardContent>
                <CardFooter className="card-footer">
                    <p>EASILY MEET MINISTRY REQUIREMENTS SO YOUR CENTER CAN BE AUDIT-READY</p>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Card Title
                    </CardTitle>
                    <CardDescription>
                        Card Description
                    </CardDescription>
                    <CardAction>
                        Card Action
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Card Title
                    </CardTitle>
                    <CardDescription>
                        Card Description
                    </CardDescription>
                    <CardAction>
                        Card Action
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    </div>
  );
}

export default Footer;
