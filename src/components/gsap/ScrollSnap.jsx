import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

function ScrollSnap({ children, className}) {
    const container = useRef(null)

    useGSAP(() => {
        const sections = gsap.utils.toArray(
            ".snap-section", 
            container.current
        )

        const snapPoints = sections.map((section) => {
            const sectionTop = 
                section.getBoundingClientRect().top  + 
                window.scrollY

            const containerTop = 
                container.current.getBoundingClientRect().top + 
                window.scrollY

            const totalScroll =
                container.current.offsetHeight - window.innerHeight
            
            const scrollPosition = sectionTop - headerHeight

            return gsap.utils.clamp(
                0, 1, (scrollPosition - start) / (end - start)
            )
        })

        ScrollTrigger.create({
            trigger: container.current,
            start: "top 80px",
            end: "bottom bottom",
            snap: {
                snapTo: snapPoints,
                duration: { min: 0.2, max: 0.6 },
                delay: 0.05,
                ease: "power2.out"
            },
        })
    },{
        scope: container
    })

    return (
        <div ref={container} className={className}>
            {children}
        </div>
    )
}

export default ScrollSnap