import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Sales from "./pages/Sales";
import Guides from "./pages/Guides";
import Contact from "./pages/Contact";
import BookADemo from "./pages/BookADemo";
import Careers from "./pages/Careers";
import SecurityAndTrust from "./pages/SecurityAndTrust";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import LogIn from "./pages/LogIn";
import Temp from "./components/Temp";

function App() {
    return (
        <div className="flex-1 flex flex-col w-full min-h-dvh">
        <Temp>
            <Header />
            <div className="flex-1 flex flex-col justify-center items-center w-full relative border-2 border-blue-500">
                <ScrollToTop />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/about-us" element={<About />} />

                    <Route path="/log-in" element={<LogIn />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/book-a-demo" element={<BookADemo />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/security-and-trust" element={<SecurityAndTrust />} />
                    <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/legal/terms-of-service" element={<TermsOfService />} />

                </Routes>
            </div>
            <Footer />
        </Temp>
        </div>
    )
}

export default App
