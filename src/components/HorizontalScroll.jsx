function HorizontalScroll({ items=[]}) {
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
            "Test 11",
            "Test 12",
            "Test 13",
            "Test 14",
            "Test 15",
            "Test 16",
            "Test 17",
            "Test 18",
            "Test 19",
            "Test 20",
            "Test 21",
            "Test 22",
            "Test 23",
            "Test 24",
            "Test 25",
            "Test 26",
            "Test 27",
            "Test 28",
            "Test 29",
            "Test 30",
        ]
    }

    return (
        <div className="w-full">
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-15 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-15 bg-gradient-to-l from-background to-transparent" />

                {/* <div 
                    className="marquee"
                    style={{
                        "--marquee-items": scrollList.length,
                        "--marquee-duration": `${scrollList.length * 2}s`
                    }}    
                >
                    {scrollList.map((item, idx) => (
                        <div 
                            key={item}
                            style={{
                                "--marquee-item-index": idx + 1,
                            }}
                            className="marquee_item w-max min-w-40 whitespace-nowrap cursor-pointer text-primary font-serif font-bold text-xl flex justify-center items-center text-center text-nowrap"
                        >
                            {item.toUpperCase()}
                        </div>
                    ))}
                </div> */}

                <div className="marquee-track" style={{"--marquee-duration": `${duration}s`}}>


                </div>
            </div>
        </div>
    )
} 

export default HorizontalScroll

/* 

Horizontal Scroll Animation

.marquee {
  display: flex;
  block-size: var(--marquee-item-height);
  position: relative;
  overflow-x: hidden;
}

.marquee_item {
    --marquee-item-offset: max(
      calc(var(--marquee-item-width) * var(--marquee-items)),
      calc(100% + var(--marquee-item-width))
    );
    --marquee-delay: calc(var(--marquee-duration) / var(--marquee-items) * (var(--marquee-items) - var(--marquee-item-index)) * -1);
    position: absolute;
    inset-inline-start: var(--marquee-item-offset);
    transform: translateX(-50%);
    animation: go linear var(--marquee-duration) var(--marquee-delay, 0s) infinite;
}

.marquee-8 {
  --marquee-item-width: 8rem;
  --marquee-item-height: 4rem;
  --marquee-duration: 15s;
  --marquee-items: 8;
}

.marquee-8 .marquee_item:nth-of-type(1) {
  --marquee-item-index: 1;
}

.marquee-8 .marquee_item:nth-of-type(2) {
  --marquee-item-index: 2;
}

.marquee-8 .marquee_item:nth-of-type(3) {
  --marquee-item-index: 3;
}

.marquee-8 .marquee_item:nth-of-type(4) {
  --marquee-item-index: 4;
}

.marquee-8 .marquee_item:nth-of-type(5) {
  --marquee-item-index: 5;
}

.marquee-8 .marquee_item:nth-of-type(6) {
  --marquee-item-index: 6;
}

.marquee-8 .marquee_item:nth-of-type(7) {
  --marquee-item-index: 7;
}

.marquee-8 .marquee_item:nth-of-type(8) {
  --marquee-item-index: 8;
}

@keyframes go {
  to {  
    inset-inline-start: calc(var(--marquee-item-width) * -1);
  }
}
*/