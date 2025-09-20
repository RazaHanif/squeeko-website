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
