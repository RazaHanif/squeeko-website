import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

function FadeUp({ 
    children, 
    className, 
    y=40, 
    duration=0.8, 
    delay=0
}) {

    const container = useRef(null)

    useGSAP(() => {
        gsap.from(container.current, {
            y,
            opacity: 0,
            duration,
            delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                once: true
            }
        })
    },
    {
        scope: container
    })

    return (
        <div ref={children} className={className}>
            {children}
        </div>
    )
}

export default FadeUp