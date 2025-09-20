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
import { ReactComponent as DocumentIcon } from '../assets/compliance-document.svg'
import { ReactComponent as PaymentIcon } from '../assets/payroll-check.svg'
import { ReactComponent as MessagesIcon } from '../assets/messages.svg'

const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="cards">
            <Card>
                <CardHeader>
                    <CardTitle className="card-title">
                        <MessagesIcon className='w-6 h-6 text-red-500' />
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
