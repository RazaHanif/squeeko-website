function HorizontalScroll() {

    const items = [
        "Test 1", 
        "Test 2",
        "Test 3",
        "Test 4",
        "Test 5",
        "Test 6",
        "Test 7",
        "Test 8",
    ]
    return (
        <div className="overflow-hidden py-12">
            <p className="mb-8 text-center text-sm text-muted-foreground">
                Horizontal Scroll Testing
            </p>

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

                <div className="marquee marquee--8">
                    {items.map((item) => (
                        <div 
                            key={item}
                            className="curosr-pointer marquee__item border border-primary text-primary font-serif font-bold text-xl rounded-2xl flex flex-row justify-center items-center text-center px-6 py-4"
                        >
                            {item}
                        </div>
                    ))}
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
  margin-block: var(--marquee-item-height);
  position: relative;
  overflow-x: hidden;
}

.marquee__item {
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

.marquee--8 {
  --marquee-item-width: 100px;
  --marquee-item-height: 100px;
  --marquee-duration: 15s;
  --marquee-items: 8;
}

.marquee--8 .marquee__item:nth-of-type(1) {
  --marquee-item-index: 1;
}

.marquee--8 .marquee__item:nth-of-type(2) {
  --marquee-item-index: 2;
}

.marquee--8 .marquee__item:nth-of-type(3) {
  --marquee-item-index: 3;
}

.marquee--8 .marquee__item:nth-of-type(4) {
  --marquee-item-index: 4;
}

.marquee--8 .marquee__item:nth-of-type(5) {
  --marquee-item-index: 5;
}

.marquee--8 .marquee__item:nth-of-type(6) {
  --marquee-item-index: 6;
}

.marquee--8 .marquee__item:nth-of-type(7) {
  --marquee-item-index: 7;
}

.marquee--8 .marquee__item:nth-of-type(8) {
  --marquee-item-index: 8;
}

@keyframes go {
  to {  
    inset-inline-start: calc(var(--marquee-item-width) * -1);
  }
}
*/