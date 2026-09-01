function HorizontalScroll() {

    const items = [
        "Test 1", 
        "Test 2",
        "Test 3",
        "Test 4",
    ]
    return (
        <div className="overflow-hidden py-12">
            <p className="mb-8 text-center text-sm text-muted-foreground">
                Horizontal Scroll Testing
            </p>

            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />


                <div className="flex w-max animate-marquee gap-16">
                    <div className="flex shrink-0 gap-16">
                        {items.map((item) => (
                            <p
                                key={item}
                                className="cursor-pointer border rounded-2xl bg-muted text-muted-foreground px-4 py-2 hover:text-secondary"
                            >
                                {item}
                            </p>
                        ))}
                    </div>

                    <div className="flex shrink-0 gap-16 aria-hidden:true">
                        {items.map((item) => (
                            <p
                                key={item}
                                className="cursor-pointer border rounded-2xl bg-muted text-muted-foreground px-4 py-2 hover:text-secondary"
                            >
                                {item}
                            </p>
                        ))}
                    </div>


                </div>

                <div className="marquee marquee--8">
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                    <div className="marquee__item w-16 h-16 bg-red-500 border-blue-500 border rounded-2xl text-blue-500 ">
                        block
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default HorizontalScroll