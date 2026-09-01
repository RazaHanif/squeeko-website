import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

function ScrollSnap({ children, className}) {
    const container = useRef(null)

    useGSAP(() => {
        const sections = gsap.utils.toArray(".snap-section", container.current)

        ScrollTrigger.create({
            trigger: container.current,
            start: "top top",
            end: "bottom bottom",
            snap: {
                snapTo: 1 / (sections.length - 1)
            }
        })
    })
}

export default ScrollSnap