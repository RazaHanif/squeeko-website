import './QuoteCarousel.css'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const QuoteCarousel = () => {
    const testimonials = [
      {
        quote: "Staying compliant with Ontario regulations used to take hours. This platform handles it in the background — huge weight off our shoulders.",
        name: "Centre Director",
        location: "Toronto",
      },
      {
        quote: "We used to chase parents for payments constantly. Now it's all automated.",
        name: "Admin Coordinator",
        location: "Toronto Child Care Centre",
      },
      {
        quote: "Parents love the messaging feature. They're more engaged.",
        name: "Program Supervisor",
        location: "Mississauga Daycare",
      },
      {
        quote: "It's built for Canadian centres — not some generic tool.",
        name: "Owner",
        location: "Independent Daycare",
      },
      {
        quote: "Now it's one dashboard. Total game-changer.",
        name: "Operations Manager",
        location: "Multi-site Centre",
      },
      {
        quote: "The peace of mind around compliance is priceless.",
        name: "Centre Director",
        location: "Peel Region",
      },
    ];

  return (
    <div className="testimonials-section">
      <div className="fade fade-left" />
      <div className="fade fade-right" />

      <div className="scroll-wraper">
        <div className="scroll-track">
            {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="card-wrapper">
                    <div className='card'>
                        <div>{t.name} - {t.location}</div>
                        <div>{t.quote}</div>
                    </div>

                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default QuoteCarousel;
