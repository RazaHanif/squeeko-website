import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/mode-toggle";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col text-left pt-40 pb-50 relative">
        <h1 className="text-7xl">SIMPLIFYING CHILDCARE, <br/>CLICK BY CLICK.</h1>
        <p className="text-xl mb-10 ml-5">STAY COMPLIANT, SIMPLIFY BILLING, AND KEEP PARENTS CONNECTED - BUILT FOR CENTERS LIKE YOURS.</p>
        <div className="buttons">
            <button className="primary btn">Start Today</button>
            <button className="secondary btn">Try it first!</button>
        </div>
    </div>
  );
}

export default Home;
