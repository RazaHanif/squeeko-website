import { Button } from "@/components/ui/button"
import './Home.css'

const Home = () => {
  return (
    <div className="hero">
        <h1 className="title">SIMPLIFYING CHILDCARE, <br/>CLICK BY CLICK.</h1>
        <p class="subtitle">STAY COMPLIANT, SIMPLIFY BILLING, AND KEEP PARENTS CONNECTED - BUILT FOR CENTERS LIKE YOURS.</p>
        <div class="btns">
            <Button variant="default">Start Today</Button>
            <Button variant="outline">Try it first!</Button>
        </div>
    </div>
  );
}

export default Home;
