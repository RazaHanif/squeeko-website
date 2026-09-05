import { useEffect, useLayoutEffect, useRef, useState } from "react";

// To use with icons
// <HorizontalScroll
//     items={iconList.map(
//         ({icon: Icon, idx}) => (
//             <Icon
//                  className="text-primary-foreground size-8"
//                  key={idx}
//              />
//         )
//     )}
//     speed={80}
// />

function HorizontalScroll({
    items = [],
    speed = 100,
    fade = false,
    fadeColor = "background",
    className,
}) {
    const groupRef = useRef(null);
    const viewportRef = useRef(null);

    const [groupWidth, setGroupWidth] = useState(0);
    const [copies, setCopies] = useState(2);

    const scrollList =
        items.length > 0
            ? items
            : [
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
              ];

    const fadeColors = {
        'background': "from-background",
        'primary': "from-primary",
        'primary-foreground': "from-primary-foreground",
        'secondary': "from-secondary",
        'secondary-foreground': "from-secondary-foreground",
        'muted': "from-muted",
        'muted-foreground': "from-muted-foreground",
    }

    useLayoutEffect(() => {
        if (!groupRef.current || !viewportRef.current) return;

        const update = () => {
            const groupWidth = groupRef.current.offsetWidth;
            const viewportWidth = viewportRef.current.offsetWidth;

            if (!groupWidth || !viewportWidth) return;

            setGroupWidth(groupWidth);
            setCopies(Math.ceil(viewportWidth / groupWidth) + 1);
        };

        update();

        const observer = new ResizeObserver(update);

        observer.observe(groupRef.current);
        observer.observe(viewportRef.current);

        return () => observer.disconnect();
    }, [items]);

    const duration = groupWidth > 0 && speed > 0 ? groupWidth / speed : 1;

    return (
        <div className="w-full cursor-default">
            <div ref={viewportRef} className="overflow-hidden relative">
                {fade && (
                    <>
                        <div
                            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-15 bg-gradient-to-r ${
                                fadeColors[fadeColor] ?? fadeColors.background
                            } to-transparent`}
                        />
                        <div
                            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-15 bg-gradient-to-l ${
                                fadeColors[fadeColor] ?? fadeColors.background
                            } to-transparent`}
                        />
                    </>
                )}

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
                                    {typeof item === "string"
                                        ? item.toUpperCase()
                                        : item}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HorizontalScroll;
