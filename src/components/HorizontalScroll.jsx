import { useEffect, useRef, useState } from "react"

{/* 
    This is how to add icons into this scroll
    HorizontalScroll 
        items={socialList.map((Icon, idx) => (
            <Icon key={idx} className="size-8" />
        ))} 
*/}

function HorizontalScroll({ items=[], speed=100, className}) {
    const groupRef = useRef(null)
    const viewportRef = useRef(null)

    const [groupWidth, setGroupWidth] = useState(0)
    const [copies, setCopies] = useState(2)

    useEffect(() => {
        if (!groupRef.current) return

        const update = () => {
            const groupWidth = groupRef.current.offsetWidth
            const viewportWidth = viewportRef.current.offsetWidth

            setGroupWidth(groupWidth)

            setCopies(
                Math.ceil(
                    viewportWidth / groupWidth
                ) + 1
            )
        }

        update()

        const observer = new ResizeObserver(update)

        observer.observe(groupRef.current)
        observer.observe(viewportRef.current)

        return () => observer.disconnect()
    }, [items])


    const duration = groupWidth > 0
        ? groupWidth / speed
        : 0

    let scrollList = []
    
    if (items.length > 0) {
        scrollList = items
    } else {
        scrollList = [
            "Test 1", 
            "Test 2",
            "Test 3",
            "Test 4",
            "Test 5",
            "Test 6",
            "Test 7",
            "Test 8",
            "Test 9", 
            "Test 10",
        ]
    }

    return (
        <div className="w-full">
            <div 
                ref={viewportRef}
                className="overflow-hidden relative"
            >
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-15 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-15 bg-gradient-to-l from-background to-transparent" />

                <div 
                    className="marquee-track" 
                    style={{
                        "--marquee-distance": `${groupWidth}px`,
                        "--marquee-duration": `${duration}s`,
                    }}
                >
                    {Array.from({ length: copies }).map((_, groupIndex) => (
                        <div
                            key={groupIndex}
                            ref={groupIndex === 0 ? groupRef : null}
                            className="marquee-group gap-12 px-6"
                        >
                            {scrollList.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    className={`marquee-item ${className}`}
                                >
                                    {typeof item === "string" ? item.toUpperCase() : item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 

export default HorizontalScroll
