import { useGSAP } from "@gsap/react"

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
            
        })
    })

}

export default FadeUp